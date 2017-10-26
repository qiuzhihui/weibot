# system packages
import MySQLdb

# user defined packages

class ConnectDB(object):
    def __init__(self, host="localhost", username="root"):
        self.host = host
        self.username = username
        self.db_name = "ubostonautoschool"

    def basic_getter(self, query):
        """
        getter function to retrieve data from db
        :param query: string specific query
        :return: str
        """
        try:
            db = MySQLdb.connect(host=self.host,
                                 user=self.username,
                                 db=self.db_name)

            db_cursor = db.cursor()
            db_cursor.execute(query)
            rows = db_cursor.fetchall()
            db.close()
            return rows
        except MySQLdb.Error as e:
            print("something went wrong: {}".format(e))
            return ()

    def basic_setter(self, query):
        """
        setter function to retrieve data from db
        :param query: str specific query
        :return: str
        """
        try:
            db = MySQLdb.connect(host=self.host,
                                 user=self.username,
                                 db=self.db_name)
            db.autocommit = True
            db_cursor = db.cursor()
            db_cursor.execute(query)
            db.commit()
            db.close()
            return True
        except MySQLdb.Error as e:
            print("something went wrong: {}".format(e))
            return False


class MongoDB(object):
    def __init__(self):
        pass