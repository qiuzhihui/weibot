from flask import Flask, render_template
import os

app = Flask('weibot', static_folder='Application/static', template_folder='Application/templates')

# index page
@app.route("/")
def show_index_page():
    return render_template('index.html')

