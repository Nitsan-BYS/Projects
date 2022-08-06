import mysql.connector
from mysql.connector import errorcode
import MySQLdb
from db_connection import  cnt


def db_read(query, params=None):
    try:
        cursor = cnt.cursor(dictionary=True)
        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)

        entries = cursor.fetchall()
        cursor.close()
        cnt.close()

        content = []

        for entry in entries:
            content.append(entry)
        print(content)

        if content!= []:
            return True

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("User authorization error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database doesn't exist")
        else:
            print(err)
    else:
        cnt.close()
    finally:
        if cnt.is_connected():
            cursor.close()
            cnt.close()
            print("Connection closed")





def db_write(query, params=None):
    try:
        cursor = cnt.cursor(dictionary=True)
        try:
            cursor.execute(query, params)
            cnt.commit()
            cursor.close()
            cnt.close()
            return True

        except MySQLdb._exceptions.IntegrityError:
            cursor.close()
            cnt.close()
            print("Error writing query to Database")
            return False

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("User authorization error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database doesn't exist")
        else:
            print(err)
        return False
    else:
        cnt.close()
        return False
    finally:
        if cnt.is_connected():
            cursor.close()
            cnt.close()
            print("Connection closed")