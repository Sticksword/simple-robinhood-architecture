# !/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# register blueprints
from api.stonks import stocks_blueprint
app.register_blueprint(stocks_blueprint)

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