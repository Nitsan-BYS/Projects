import mysql.connector

cnt = mysql.connector.connect(user='root', password="ehab123", database='inventory_box')
cursor = cnt.cursor()
