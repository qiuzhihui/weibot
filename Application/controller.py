import json

# user defined packages
from .logic import user_operation
from .logic import car_operation
from .logic import image_operation
from .logic import connect_db
db = connect_db.ConnectDB()



def get_user_information(email):
    """
    get user information from db
    :param email: str
    :return: str
    """
    user_info = user_operation.get_user_data(db=db, email=email)
    return json.dumps(user_info)

def set_user_information(data):
    """

    :param data: dict
    :return: bool
    """
    is_succeed = user_operation.set_user_data(data=data, db=db)
    return is_succeed


def get_car(car_type):
    """
    get car list based on car type
    :param car_type: str
    :return: list of dict
    """
    # leave this extra line cause we may need some extra logic soon, otherwise we can return directly
    result = car_operation.get_car_data(db=db, car_type=car_type)
    # need to add car image link here as well
    return result

def set_car(data):
    """
    :param data:
    :return:
    """
    is_succeed = car_operation.set_car_data(db=db, data=data)
    return is_succeed

if __name__ == "__main__":
    # car_data = {"car_type": "rental_car", "made_year": "20100", "name": "Model 3", "brand": "Tesla",
    #         "mpg_local": "30", "mpg_highway": "30", "interior_color": "black", "outside_color": "white",
    #         "price": "35,000", "kbb_price": "1,000", "millage": "10", "manual_auto": "auto",
    #         "fuel_type": "electric", "description": "This car is pretty much new"}
    # print(set_car(data=car_data))
    #
    user_data = {"username": "wanhao", "email": "wanhao.maple@gmail.com",
            "last_name": "wan", "first_name": "hao", "phone_number": "6176765896",
            "password": "qiuzhihui", "register_date": "10/28/2017"}
    set_user_information(data=user_data)
    result = get_user_information(email="zhihui.qiu.tufts@gmail.com")
