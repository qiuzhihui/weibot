import json
import boto3
from uuid import uuid4
# user defined packages
from .import objects


def upload_image_binary(s3, filename, image_binary, car_id, db):
    """
    upload data to s3
    :param data:
    :return:
    """
    file_type = filename.split(".")[-1]
    filename = ".".join([str(uuid4()), file_type])
    bucket_name = "testuboston"
    s3.Bucket(bucket_name).put_object(Key=filename, Body=image_binary,  ACL="public-read", ContentType="image")
    link = "https://s3.us-east-2.amazonaws.com/" + bucket_name + "/" + filename
    data = {"image_link": link, "car_id": int(car_id)}
    result = set_image_data(db=db, data=data)
    return result

def get_image_data(db, car_id):
    """
    get image data from database
    :param db: type object
    :param car_id: type int
    :return: dict
    """

    query = "select * from user where car_id = {car_id}".format(car_id=car_id)
    print("getting user with query", query)
    rows = db.basic_getter(query=query)
    if len(rows):
        row = rows[0]
        print(row)
        row = [str(x) for x in row]
        image = objects.Image(id=row[0],
                              image_link=row[1],
                              car_id=row[2],)

        return image.__dict__
    return {}


def set_image_data(db, data):
    """
    set image data to database
    :param db: type object
    :param data: type str
    :return: dict
    """
    if not isinstance(data, dict):
        data = json.loads(data)
        print(data)
    image_link = data["image_link"]
    car_id = data["car_id"]
    query = "INSERT INTO image (image_link, car_id) VALUES ({l}{}{r}, {});".format(image_link, car_id, l="'", r="'")
    print("query:\n", query)
    return db.basic_setter(query=query)
