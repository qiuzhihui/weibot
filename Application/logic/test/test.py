"""
test file
"""
import json
import argparse
import requests

def test_car_service(port=5000, machine="localhost", car_type="used_car"):
    url = "http://{machine}:{port}/car".format(machine=machine, port=port)
    response = requests.get(url=url, data={"car_type": car_type})
    print(response)
    if response.status_code == requests.codes.ok:
        print(response.content)
    data = {"car_type": "used_car", "made_year": "2017", "name": "Model 3", "brand": "Tesla",
            "mpg_local": "30", "mpg_highway": "30", "interior_color": "black", "outside_color": "white",
            "price": "35,000", "kbb_price": "37,000", "millage": "10", "manual_auto": "auto",
            "fuel_type": "electric", "description": "This car is pretty much new"}

    data = json.dumps(data)
    response = requests.post(url=url, data={"data": data})
    if response.status_code == requests.codes.ok:
        print(response.content)

def test_user_service(port=5000, machine="localhost", email="zhihui.qiu.tufts@gmail.com"):
    url = "http://{machine}:{port}/user".format(machine=machine, port=port)
    response = requests.get(url=url, data={"email": email})
    if response.status_code == requests.codes.ok:
        print(response.content)

    data = {"username": "wanhao", "email": "wanhao.maple@gmail.com",
            "last_name": "wan", "first_name": "hao", "phone_number": "6176765896",
            "password": "qiuzhihui"}
    data = json.dumps(data)
    response = requests.post(url=url, data={"data": data})
    if response.status_code == requests.codes.ok:
        print(response.content)


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

