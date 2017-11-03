from flask import Flask, render_template
from flask import request, redirect, url_for
import requests

import os
import json
import glob
import pdb
from uuid import uuid4

# user defined packages
from . import controller
app = Flask('weibot', static_folder="Application/static", template_folder="Application/templates")

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
        print("received post request.")
        if "data" in request.args:
            data = request.args["data"]
            if not isinstance(data, dict):
               data = json.loads(data)
            result = controller.set_car(data)
    return str(result)

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

@app.route("/portal", methods=["GET", "POST", "PUT"])
def hello():
    form = request.form
    if request.method == 'POST':
        car_type = form["car_type"]
        made_year = form["made_year"]
        price = form["price"]
        kbb_price = form["kbb_price"]
        name = form["name"]
        millage = form["millage"]
        brand = form["brand"]
        fuel_type = form["fuel_type"]
        mpg_local = form["mpg_local"]
        mpg_highway = form["mpg_highway"]
        interior_color = form["interior_color"]
        outside_color = form["outside_color"]
        manual_auto = form["manual_auto"]
        description = form["description"]

        data = {"car_type": car_type, "made_year": made_year, "name": name, "brand": brand,
                "mpg_local": mpg_local, "mpg_highway": mpg_highway, "interior_color": interior_color, "outside_color": outside_color,
                "price": price, "kbb_price": kbb_price, "millage": millage, "manual_auto": manual_auto,
                "fuel_type": fuel_type, "description": description}
        print("adding new car:", data)

        if not isinstance(data, dict):
               data = json.loads(data)
        result = controller.set_car(data)
        print(result)
    used_car = controller.get_car(car_type="used_car")
    rental_car = controller.get_car(car_type="rental_car")
    data = used_car
    data.extend(rental_car)
    print(data, "this is test data")
    return render_template("portal.html", data=data, form=form)