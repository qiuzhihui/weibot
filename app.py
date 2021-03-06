# -*- coding: utf-8 -*-
"""
    Website project for www.FoodChasing.com

    :copyright: (c) 2017 by Zach Qiu/ Keran Chen.
    :license: BSD, see LICENSE for more details.
"""

from Application.views import app

# turn on dev mode for development
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
