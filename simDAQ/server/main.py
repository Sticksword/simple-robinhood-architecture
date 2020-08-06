# !/usr/bin/env python3
# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# register blueprints
from api.stonks import stocks_blueprint
app.register_blueprint(stocks_blueprint)

if __name__ == '__main__':
  app.run(host='0.0.0.0')