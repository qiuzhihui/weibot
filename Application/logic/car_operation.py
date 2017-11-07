"""
car operation files
"""
import simplejson as json
import pdb
# user defined packages

from .import utils
from .import objects


def get_car_data(db, car_type):
    """
    get car data from database
    :param db: type object
    :return: list of json
    """
    result = []
    query = ""

    if car_type == "used_car":
        query = "select * from car where car_type = 'used_car';"


    if car_type == "rental_car":
        query = "select * from car where car_type = 'rental_car';"

    rows = db.basic_getter(query=query)
    for index, row in enumerate(rows):
        row = [str(x) for x in row]
        car = objects.Car(id=row[0], car_type=row[1], made_year=row[2], name=row[3],
                          brand=row[4], mpg_local=row[5], mpg_highway=row[6], interior_color=row[7],
                          outside_color=row[8], price=row[9], kbb_price=row[10], millage=row[11],
                          manual_auto=row[12], fuel_type=row[13], description=row[14])
        car_id = car.id
        car = car.__dict__

        image_query = "select image_link from image where car_id={}".format(car_id)
        images = db.basic_getter(query=image_query)
        images = [image[0] if len(image) else None for image in images]
        car["images"] = images
        result.append(car)

    if result:
        # need to do some operation before return
        # let me wait until i have time to finish this part
        return result


def set_car_data(db, data, add_new=True):
    car_type = data["car_type"]
    made_year = data["made_year"]
    name = data["name"]
    brand = data["brand"]
    mpg_local = data["mpg_local"]
    mpg_highway = data["mpg_highway"]
    interior_color = data["interior_color"]
    outside_color = data["outside_color"]
    price = data["price"]
    kbb_price = data["kbb_price"]
    millage = data["millage"]
    manual_auto = data["manual_auto"]
    fuel_type = data["fuel_type"]
    description = data["description"]
    active = data.get("active", "active")
    id = data.get("id")
    if add_new:
        query = "INSERT INTO car (car_type, made_year, name, brand, mpg_local, mpg_highway, interior_color, outside_color, price, kbb_price, millage, manual_auto, fuel_type, description, active) " \
                "VALUES ({l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r});" \
                "".format(car_type, made_year, name, brand,
                          mpg_local, mpg_highway, interior_color, outside_color,
                          price, kbb_price, millage, manual_auto, fuel_type, description, active, l="'", r="'")
    else:
        query = "INSERT INTO car (car_type, made_year, name, brand, mpg_local, mpg_highway, interior_color, outside_color, price, kbb_price, millage, manual_auto, fuel_type, description, active) " \
                 "VALUES ({l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}) where id={}" \
                 "".format(car_type, made_year, name, brand, mpg_local, mpg_highway, interior_color, outside_color,
                           price, kbb_price, millage, manual_auto, fuel_type, description, active, id, l="'", r="'")

    print(query)
    result = db.basic_setter(query=query)
    #print(result)
    return result

def get_max_car_id(db):
    """
    get max car id from car
    :param db: type object
    :return:
    """
    query = "select max(id) as id from car;"
    rows = db.basic_getter(query=query)
    max_id = int(rows[0][0])
    return max_id