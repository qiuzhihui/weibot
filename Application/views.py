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
    result = "WRONG RESPONSE"
    print(request.method)
    if request.method == "GET":
        print(request.args)
        if "car_type" in request.args:
            car_type = request.args["car_type"]
            result = controller.get_car(car_type=car_type)

    if request.method == "POST":
        if "data" in request.args:
            data = request.args["data"]
            if not isinstance(data, dict):
               data = json.loads(data)
            result = controller.set_car(data)
    return result

@app.route("/user",  methods = ["GET", "POST", "PUT"])
def show_user_page():
    result = "WRONG USER."
    if request.method == "GET":
        print("GETTING user information.")
        if "email" in request.args:
            email = request.args["email"]
            print("Getting information on email:", email)
            result = controller.get_user_information(email=email)

    if request.method == "POST":
        if "data" in request.args:
            data = request.args["data"]
            if not isinstance(data, dict):
                data = json.loads(data)
            result = controller.set_user_information(data)
    return result



