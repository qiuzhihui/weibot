from flask import Flask, render_template
from flask import request, redirect, url_for, session, flash
import requests
import datetime
import os
import json
import glob
import pdb
from uuid import uuid4
import boto3
from io import TextIOWrapper

# user defined packages
from . import controller
app = Flask('weibot', static_folder="Application/static", template_folder="Application/templates")
app.secret_key = 'b_5#y2L"F4Q8z\n\xec]/'

# index page
@app.route("/")
def show_index_page():
    return render_template("index.html")


@app.route("/car", methods = ["GET", "POST", "PUT"])
def show_car_page():
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
def portal():
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

        for file in request.files.getlist("file"):
            controller.upload_image(filename=file.filename, image_binary=file.read())

    used_car = controller.get_car(car_type="used_car")
    rental_car = controller.get_car(car_type="rental_car")
    data = used_car
    data.extend(rental_car)
    return render_template("portal.html", data=data, form=form)

@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        data = {"email":email, "password": password}
        admin = controller.verify_admin(data=data)
        if admin:
            flash('Welcome Admin!')
            session['logged_in'] = True
            return redirect(url_for("portal"))
        elif controller.verify_login(data=data):
            session['logged_in'] = True
            flash('You were logged in!')
            return redirect(url_for("show_index_page"))
        else:
            error = "Either email or password is wrong, please check!"
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop("email", None)
    return redirect(url_for("login"))

@app.route("/register", methods=["GET", "POST", "PUT"])
def register():
    form = request.form
    if request.method == 'POST':
        print("Received Post request!")

        user_name = form["username"]
        print("username")
        email = form["email"]
        last_name = form["last_name"]
        first_name = form["first_name"]
        phone_numer = form["phone_number"]
        password = form["password"]
        data =  {"username": user_name, "email": email, "last_name": last_name, "first_name":first_name, "phone_number": phone_numer, "password": password}
        data["register_date"] = datetime.datetime.now().date().isoformat()
        print(data)
        result = controller.create_new_user(data=data)
        print(result)
        if result == "success":
            flash("Create Account {} success".format(email))
        elif result == "duplicate":
            flash("Email {} is already registered!".format(email) )
    return render_template("register.html", form=form)
