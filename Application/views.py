from flask import Flask, render_template
from flask import request
import os
import json
import pdb
# user defined packages
from . import controller
app = Flask('weibot', static_folder="Application/static", template_folder="Application/templates", static_path="")

# index page
@app.route("/")
def show_index_page():
    return render_template("index.html")


@app.route("/car", methods = ["GET", "POST", "PUT"])
def show_rental_page():
    if request.method == "GET":
        if "car_type" in request.args:
            car_type = request.args["car_type"]
            result = controller.get_car(car_type=car_type)
            return result

    if request.method == "POST":
        if "data" in request.args:
            data = request.agrs["data"]
            if isinstance(data, str):
                data = json.loads(data)
            return controller.set_car(data)

@app.route("/user",  methods = ["GET", "POST", "PUT"])
def show_user_page():
    if request.method == "GET":
        print("GETTING user information.")
        if "email" in request.args:
            email = request.args["email"]
            print("Getting information on email:", email)
            return controller.get_user_information(email=email)

    if request.method == "POST":
        if "data" in request.args:
            data = request.args["data"]
            if isinstance(data, str):
                data = json.loads(data)
            return controller.set_user_information(data)




