# !/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__,
            static_url_path='')

CORS(app)

@app.route('/')
def hello_world():
  return app.send_static_file('index.html')

@app.route('/stocks', methods=['GET'])
def tickers():
  simdaq_endpoint = 'http://simdaq-service:6000/stocks'
  # local version [TODO] move this manual logic into some initializer code
  # simdaq_endpoint = 'http://localhost:5001/stocks'

  # tickers = request.args.get('tickers').split(',')
  # print('fetching: ', tickers)
  payload = { 'tickers': request.args.get('tickers') }
  response = requests.get(simdaq_endpoint, params=payload)
  
  if response.status_code == 200:
    return response.json()
  else:
    return jsonify({ 'error': 'something blew up internally'})

'''
provides same functionality as `rake routes`

run via:
FLASK_APP=server/main.py pipenv run flask routes
'''
@app.cli.command()
def routes():
  'Display registered routes'
  rules = []
  for rule in app.url_map.iter_rules():
    methods = ','.join(sorted(rule.methods))
    rules.append((rule.endpoint, methods, str(rule)))

  sort_by_rule = operator.itemgetter(2)
  for endpoint, methods, rule in sorted(rules, key=sort_by_rule):
    route = '{:50s} {:25s} {}'.format(endpoint, methods, rule)
    print(route)

if __name__ == '__main__':
  app.run(host='0.0.0.0')