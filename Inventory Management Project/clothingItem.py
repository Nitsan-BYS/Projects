import mysql.connector
from db_connection import cursor, cnt
from datetime import date
import matplotlib.pyplot as plt


class clothingItem:
    def __init__(self, id, name, category, kind, size, color, quantity, price):
        self.id = id
        self.name = name
        self.category = category
        self.kind = kind
        self.size = size
        self.color = color
        self.quantity = quantity
        self.price = price

    # Select item by id
    def selectItemById(self):
        self.id = input("Enter Item ID: ")
        cursor.execute("SELECT * FROM clothingItems WHERE item_id='" + self.id + "'")
        # Fetch all records from table
        items = cursor.fetchall()
        if items == []:
            print("Item does not exist in system")
            return -1
        else:
            return 1


    def addItem(self):

        cursor.execute("SELECT * from item")
        items = cursor.fetchall()
        for item in items:
            if (item[1] == int(self.id)):
                print("Item " + self.name + " already exists")
                return False
        newItem = ("INSERT INTO item "
                   "(itemId, name, category, kind, size, color, quantity, price) "
                   "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)")

        args = [self.id, self.name, self.category, self.kind, self.size, self.color, self.quantity, self.price]
        cursor.execute(newItem, args)
        cnt.commit()
        return True

    # Id change is not possible
    def updateItem(self,itemId):
        num = int(itemId)
        cursor.execute(f'SELECT * FROM item WHERE itemId={num}')
        # Fetch all records from table
        res = cursor.fetchall()
        if res == []:
            return False
        else:
            cursor.execute(f"UPDATE item SET itemId={self.id}, name='{self.name}', category='{self.category}', kind='{self.kind}', size='{self.size}', color='{self.color}', quantity={self.quantity}, price={self.price} where itemId={self.id}")
            cnt.commit()
            return True



    def viewItem(self,itemId):
        num = int(itemId)
        cursor.execute(f'SELECT * FROM item WHERE itemId={num}')
        # Fetch all records from table
        res = cursor.fetchall()
        if res == []:
            return False
        else:
            return res

    def deleteItem(self,itemId):
        num = int(itemId)
        cursor.execute(f'SELECT * FROM item WHERE itemId={num}')
        # Fetch all records from table
        res = cursor.fetchall()
        if res == []:
            return False
        else:
            cursor.execute(f'DELETE FROM item WHERE itemId={num}')
            cnt.commit()
            return True


    def reportDefect(self,itemId):
        num = int(itemId)
        today = date.today()
        cursor.execute(f'SELECT * FROM item WHERE itemId={num}')
        # Fetch all records from table
        res = cursor.fetchall()
        if res == []:
            return False
        else:
            cursor.execute(f'insert into defect (itemId, date) values ({num},"{today}")')
            cnt.commit()
            return True

    def reportLost(self,itemId):
        num = int(itemId)
        today = date.today()
        cursor.execute(f'SELECT * FROM item WHERE itemId={num}')
        # Fetch all records from table
        res = cursor.fetchall()
        if res == []:
            return False
        else:
            cursor.execute(f'insert into lost (itemId, date) values ({num},"{today}")')
            cnt.commit()
            return True

    def reportWorn(self,itemId):
        num = int(itemId)
        today = date.today()
        cursor.execute(f'SELECT * FROM item WHERE itemId={num}')
        # Fetch all records from table
        res = cursor.fetchall()
        if res == []:
            return False
        else:
            cursor.execute(f'insert into worn (itemId, date) values ({num},"{today}")')
            cnt.commit()
            return True

    def display_sold_chart(self,fromDate,toDate):

        price = []
        saleDate = []
        cursor.execute(
            f'SELECT count(*) as quantity,date as saleDate FROM sold WHERE date BETWEEN "{fromDate}" AND "{toDate}" group by date')
        # Fetch all records from table
        soldItems = cursor.fetchall()
        print(soldItems)
        if soldItems == []:
            print("Item does not exist in system")
            print('\n')
            return -1

        for i in soldItems:
            price.append(i[0])
            saleDate.append(i[1])

        # plt.plot(saleDate,price)
        plt.bar(saleDate, price, width=0.6, align='center', color='blue')
        plt.xlabel("Sold Date")
        plt.ylabel("quantity")
        plt.title("Sold items data")
        plt.show()