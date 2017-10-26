from flask import Flask, render_template
import os

app = Flask('weibot', static_folder='Application/static', template_folder='Application/templates')

# index page
@app.route("/")
def show_index_page():
    return render_template('index.html')


@app.route("/rental/")
def show_rental_page():
    return render_template('rental.html')

@app.route("/used/")
def show_used_page():
    return render_template('used.html')

@app.route("/user/")
def show_user_page():
    return render_template()