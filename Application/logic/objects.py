"""
This file is used as objects for website control
"""

class Car(object):
    """
    car information used for design db query
    """
    def __init__(self, id=None, car_type="used_car", made_year=2005, name=None, brand=None, mpg_local=None,
                 mpg_highway=None, interior_color="black", outside_color="black", price=20000,
                 kbb_price=None, millage=0, manual_auto="auto", fuel_type=89, description="this is a used car", active="active"):
        self.id = id
        self.car_type = car_type
        self.made_year = made_year
        self.name = name
        self.brand = brand
        self.mpg_local = mpg_local
        self.mpg_highway = mpg_highway
        self.interior_color = interior_color
        self.outside_color = outside_color
        self.price = price
        self.kbb_price = kbb_price
        self.millage = millage
        self.manual_auto = manual_auto
        self.fuel_type = fuel_type
        self.description = description
        self.active = active


class User(object):
    """
    user information
    """
    def __init__(self, id=None, username="", email="", phone_number="", last_name="", first_name="", register_date="", password="", manage=""):
        self.id = id
        self.username = username
        self.email = email
        self.phone_number = phone_number
        self.last_name = last_name
        self.first_name = first_name
        self.register_date = register_date
        self.password = password
        self.manage = manage


class Image(object):
    "image_content"
    def __init__(self, id=None, image_link="", car_id=""):
        self.id = id
        self.image_link = image_link
        self.car_id = car_id