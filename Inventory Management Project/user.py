import mysql.connector
from db_connection import cursor, cnt

class User:
    def __init__(self, id, firstname, lastname, username, phone, email, password, role):
        self.id = id
        self.firstname = firstname
        self.lastname = lastname
        self.username = username
        self.phone = phone
        self.email = email
        self.password = password
        self.role = role

    # def __init__(self, username, password):
    #     self.username = username
    #     self.password = password


    def registerUser(self):
        cursor.execute(f'SELECT * from users where username="{self.username}"')
        result = cursor.fetchall()
        if (result!=[]):
            return False
        newuser = ("INSERT INTO users "
                   "(id, firstname, lastname, username, phone, email, password, role) "
                   "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)")

        args = [self.id, self.firstname, self.lastname, self.username, self.phone, self.email, self.password, self.role]
        cursor.execute(newuser, args)
        cnt.commit()
        return True

    def loginUser(self,username,password):
        cursor.execute(f'SELECT * from users where username="{username}" and password="{password}"')
        result = cursor.fetchall()
        if (result==[]):
            return "None"
        elif(result[0][8]=="Manager"):
            return "Manager"
        elif (result[0][8] == "Storekeeper"):
            return "Storekeeper"
        else:
            return "None"
