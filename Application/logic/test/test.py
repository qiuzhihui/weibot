"""
test file
"""
import json
import argparse
import requests
import boto3
import botocore

def test_car_service(port=5000, machine="localhost", car_type="used_car"):
    url = "http://{machine}:{port}/car".format(machine=machine, port=port)
    response = requests.get(url=url, params={"car_type": car_type})
    if response.status_code == requests.codes.ok:
        print("get car type:", car_type, "related data: ", response.content)

    data = {"car_type": "rental_car", "made_year": "20100", "name": "Model 3", "brand": "Tesla",
            "mpg_local": "30", "mpg_highway": "30", "interior_color": "black", "outside_color": "white",
            "price": "35,000", "kbb_price": "1,000", "millage": "10", "manual_auto": "auto",
            "fuel_type": "electric", "description": "This car is pretty much new"}
    print("adding new car:", data)

    data = json.dumps(data)
    response = requests.post(url=url, params={"data": data})
    if response.status_code == requests.codes.ok:
        print("adding new car response:", response.content)
        print(response.content)

def test_user_service(port=5000, machine="localhost", email="zhihui.qiu.tufts@gmail.com"):
    url = "http://{machine}:{port}/user".format(machine=machine, port=port)

    # test create user
    data = {"username": "winstonchi", "email": "hyperbolechi@gmail.com",
            "last_name": "chi", "first_name": "winston", "phone_number": "8572598366",
            "password": "winstonchi", "register_date": "10/29/2017", "manage": "admin"}
    data = json.dumps(data)
    response = requests.post(url=url, params={"create_user": data})
    if response.status_code == requests.codes.ok:
        print("Create Success!!")
        print(response.content)
    else:
        print("!!!! Create Failed!!!")

    # test login
    data = {"email":"winstonchilw@gmail.com", "password": "winstonchi"}
    data = json.dumps(data)
    response = requests.get(url=url, params={"verify_login": data})
    if response.status_code == requests.codes.ok:
        print(response.content)
        print("Login success!")
    else:
        print("!!!! login failed!!!!")

    # test reset password
    data = {"email":"winstonchilw@gmail.com"}
    data = json.dumps(data)
    response = requests.get(url=url, params={"retrieve_password": data})
    if response.status_code == requests.codes.ok:
        print(response.content)
        print("Reset success!!")
    else:
        print("!!! reset failed !!!")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="test argparser")
    parser.add_argument("-p", "--port", dest="port", default=5000)
    parser.add_argument("-m", "--machine", dest="machine", default="localhost")
    parser.add_argument("-s", "--service", dest="service", default="car")

    args = parser.parse_args()
    port = args.port
    service = args.service
    machine = args.machine
    if service == "car":
        test_car_service(port=port, machine=machine)
    if service == "user":
        test_user_service(port=port, machine=machine)
