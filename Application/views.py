from flask import Flask, render_template
from flask import request, redirect, url_for
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


@app.route("/portal")
def show_portal_page():
    return render_template("upload.html")



@app.route("/upload", methods=["POST"])
def upload():
    """Handle the upload of a file."""
    form = request.form

    # Create a unique "session ID" for this particular batch of uploads.
    upload_key = str(uuid4())

    # Is the upload using Ajax, or a direct POST by the form?
    is_ajax = False
    if form.get("__ajax", None) == "true":
        is_ajax = True

    # Target folder for these uploads.
    target = "./files/{}".format(upload_key)
    try:
        os.mkdir(target)
    except:
        if is_ajax:
            return ajax_response(False, "Couldn't create upload directory: {}".format(target))
        else:
            return "Couldn't create upload directory: {}".format(target)

    print("=== Form Data ===")
    for key, value in list(form.items()):
        print(key, "=>", value)

    for upload in request.files.getlist("file"):
        filename = upload.filename.rsplit("/")[0]
        destination = "/".join([target, filename])
        print("Accept incoming file:", filename)
        print("Save it to:", destination)
        upload.save(destination)

    if is_ajax:
        return ajax_response(True, upload_key)
    else:
        return redirect(url_for("upload_complete", uuid=upload_key))


@app.route("/files/<uuid>")
def upload_complete(uuid):
    """The location we send them to at the end of the upload."""

    # Get their files.
    root = "./files/{}".format(uuid)
    if not os.path.isdir(root):
        return "Error: UUID not found!{}".format(root)

    files = []
    for file in glob.glob("{}/*.*".format(root)):
        fname = file.split(os.sep)[-1]
        files.append(fname)

    return render_template("files.html",
        uuid=uuid,
        files=files,
    )


def ajax_response(status, msg):
    status_code = "ok" if status else "error"
    return json.dumps(dict(
        status=status_code,
        msg=msg,
    ))
