import os
import threading
import random

from flask import Blueprint, jsonify, request

stocks_blueprint = Blueprint('stocks', __name__, url_prefix='/stocks')
TICKERS = {
  'TSLA': 1000,
  'GOOG': 1500,
  'SQ': 150,
  'AMZN': 3000,
  'BABA': 300,
}

def updateTickers():
  threading.Timer(1.0, updateTickers).start()
  
  for ticker, price in TICKERS.items():
    delta = random.uniform(-0.05, 0.05) * price
    
    TICKERS[ticker] = round(TICKERS[ticker] + delta, 2)
    # print('changing ', ticker, ' by ', delta, ' to ', TICKERS[ticker])

updateTickers()

@stocks_blueprint.route('/', methods=['GET'])
def all_books():
  response_object = {
    'status': 'success',
    'container_id': os.uname()[1]
  }
  response_object['ticker_prices'] = []
  tickers = request.args.get('tickers').split(',')
  # print(TICKERS)
  
  for ticker in tickers:
    # print(ticker)

    if ticker in TICKERS:
      response_object['ticker_prices'].append({
        'ticker': ticker,
        'price': TICKERS[ticker]
      })

  return jsonify(response_object)


@stocks_blueprint.route('/ping', methods=['GET'])
def ping():
  return jsonify({
    'status': 'success',
    'message': 'pong!',
    'container_id': os.uname()[1]
  })