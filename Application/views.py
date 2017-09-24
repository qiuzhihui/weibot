from flask import Flask
import os

app = Flask('weibot')

# index page
@app.route("/")
def show_index_page():
    return 'haha'