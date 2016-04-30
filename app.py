from flask import Flask
from pymongo import MongoClient
import httplib, urllib, base64

app = Flask(__name__)

@app.route("/")
def hello():
   return "AutismTracker"

@app.route("/get_img_emotion")
def get_img_emotion():
	return ""

@app.route("/dashboard")
def show_dashboard():
	return ""

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)