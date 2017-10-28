from .logic import user_operation
from .logic import car_operation
from .logic import image_operation
from .logic import connect_db

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
    :return: dict
    """
    user_info = user_operation.get_user_data(db=db, email=email)
    return user_info

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
