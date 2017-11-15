START TRANSACTION;

# create database

#CREATE DATABASE ubostonautoschool;

USE ubostonautoschool;

# create tables
# Year, Name, brand, mpg/local/highway, interior color, outside color, #millage, price, kbb price and photos.
# car_type means used_car or rental_car

DROP TABLE IF EXISTS car;
CREATE TABLE car
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    car_type                          VARCHAR(20),
    made_year                         VARCHAR(20),
    name                              VARCHAR(120),
    brand                             VARCHAR(120),
    mpg_local                         VARCHAR(20),
    mpg_highway                       VARCHAR(20),
    interior_color                    VARCHAR(20),
    outside_color                     VARCHAR(20),
    price                             VARCHAR(20),
    kbb_price                         VARCHAR(20),
    millage                           VARCHAR(20),
    manual_auto                       VARCHAR(20),
    fuel_type                         VARCHAR(20),
    description                       VARCHAR(500),
    other1                            VARCHAR(120),
    active                            VARCHAR(120),
    other3                            VARCHAR(120),
    other4                            VARCHAR(120)
);


COMMIT;

START TRANSACTION;
INSERT INTO car (car_type, made_year, name, brand, mpg_local, mpg_highway, interior_color, outside_color, price, kbb_price, millage, manual_auto, fuel_type, description)
       VALUES   ("used_car", "2003", "mini cooper", "BMW", "12", "19", "black", "yellow", "5800", "6000", "50000", "auto", "89", "This is a great car from zhihui");

INSERT INTO car (car_type, made_year, name, brand, mpg_local, mpg_highway, interior_color, outside_color, price, kbb_price, millage, manual_auto, fuel_type, description)
       VALUES   ("rental_car", "2003", "mini cooper", "BMW", "12", "19", "black", "yellow", "5800", "6000", "50000", "auto", "89", "This is a great car from zhihui");


COMMIT;


# user part

# we can only create admin on our own
# register user should not have manage attribute

START TRANSACTION;
DROP TABLE IF EXISTS user;
CREATE TABLE user
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username                       VARCHAR(50),
    email                          VARCHAR(50),
    last_name                      VARCHAR(50),
    first_name                     VARCHAR(50),
    phone_number                   VARCHAR(50),
    password                       VARCHAR(50),
    manage                         VARCHAR(50),
    register_date                  VARCHAR(50),
    other1                         VARCHAR(50),
    other2                         VARCHAR(50)
);

COMMIT;

START TRANSACTION;
INSERT INTO user (username, email, last_name, first_name, phone_number, password, manage)
       VALUES   ("zhihuiqiu", "zhihui.qiu.tufts@gmail.com", "qiu", "zhihui", "6179099983", "wanhao", "diao");

COMMIT;


# we can only create admin on our own
# register user should not have manage attribute

START TRANSACTION;
DROP TABLE IF EXISTS image;
CREATE TABLE image
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image_link                    VARCHAR(300),
    car_id                        INT,
    other1                        VARCHAR(50),
    other2                        VARCHAR(50),
    FOREIGN KEY (car_id) REFERENCES car(id),
    UNIQUE(image_link)
);

COMMIT;

START TRANSACTION;
INSERT INTO image (image_link)
       VALUES ("https://s3.us-east-2.amazonaws.com/ubostonautoschool/RentalCar/Yema/yema.jpg") where car_id = 1;

COMMIT;