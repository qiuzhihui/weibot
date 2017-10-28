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
        if "verify_login" in request.args:
            data = request.args["verify_login"]
            if not isinstance(data, dict):
                data = json.loads(data)
            print("Getting information on data:", data)
            result = controller.verify_login(data=data)
            return result

        if "retrieve_password" in request.args:
            data = request.args["retrieve_password"]
            if not isinstance(data, dict):
                data = json.loads(data)
            result = controller.retrieve_password(data=data)
            return result

    if request.method == "POST":
        if "create_user" in request.args:
            data = request.args["create_user"]
            if not isinstance(data, dict):
                data = json.loads(data)
            result = controller.create_new_user(data=data)
            return result
    return result



