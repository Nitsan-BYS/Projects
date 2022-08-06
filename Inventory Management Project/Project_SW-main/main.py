from kivy.app import App
from db_connection import cursor, cnt
from kivy.uix.anchorlayout import AnchorLayout
from kivy.metrics import dp
from kivymd.app import MDApp
from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager, Screen
from kivymd.uix.datatables import MDDataTable
from user import User
from clothingItem import clothingItem
import ctypes  # An included library with Python install.


class Login(Screen):
    def logger(self):
        person = User(1,1,1,1,1,1,1,1)
        result = person.loginUser(self.ids.user.text, self.ids.password.text)
        if (result == "Storekeeper"):
            self.manager.current = 'skdashboard'
        elif (result == "Manager"):
            self.manager.current = 'mdashboard'
        else:
            ctypes.windll.user32.MessageBoxW(0, "Invalid username or password", "Error message", 1)


    def gotosignup(self):
        self.manager.current = 'signup'
    pass


class Signup(Screen):
    def registerUser(self):
        person = User(self.ids.userid.text, self.ids.firstname.text,self.ids.lastname.text,self.ids.username.text,self.ids.phone.text,self.ids.email.text,self.ids.password.text,self.ids.role.text)
        result = person.registerUser()
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "created successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "user already exist", "Error message", 1)
    pass

    def gotologin(self):
        self.manager.current = 'login'
    pass

# StoreKeeper functionality

class SKDashboard(Screen):
    def load_table(self):
        layout = AnchorLayout()
        cursor.execute("SELECT * FROM item")
        data = cursor.fetchall()
        self.data_tables = MDDataTable(
            pos_hint={'center_y': 0.5, 'center_x': 0.5},
            size_hint=(0.9, 0.6),
            use_pagination=True,
            check=False,
            column_data=[
                ("Item#", dp(30)),
                ("ItemId", dp(30)),
                ("Name", dp(30)),
                ("Color", dp(30)),
                ("Size", dp(30)),
                ("Category", dp(30)),
                ("Kind", dp(30)),
                ("Quantity", dp(30)),
                ("Price", dp(30))],
            row_data=[
                (f"{data[i][0]}", f"{data[i][1]}", f"{data[i][2]}", f"{data[i][3]}", f"{data[i][4]}", f"{data[i][5]}", f"{data[i][6]}", f"{data[i][7]}", f"{data[i][8]}")
                for i in range(len(data))], )
        self.add_widget(self.data_tables)
        return layout

    def on_enter(self):
        self.load_table()
    pass

    def SKAddItem(self):
        self.manager.current = 'skadditem'
    pass

    def SKDeleteItem(self):
        self.manager.current = 'skdeleteitem'
    pass

    def SKUpdateItem(self):
        self.manager.current = 'skupdateitem'
    pass

    def SKSearchItem(self):
        self.manager.current = 'sksearchitem'
    pass

    def logout(self):
        self.manager.current = 'login'
    pass

class SKAddItem(Screen):
    def AddItem(self):
        item = clothingItem(self.ids.itemId.text, self.ids.itemName.text, self.ids.itemCategory.text, self.ids.itemKind.text, self.ids.itemSize.text,self.ids.itemColor.text,self.ids.itemQuantity.text,self.ids.itemPrice.text)
        result = item.addItem()
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item created successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item already exist", "Error message", 1)
    pass

    def gotodashboard(self):
        self.manager.current = 'skdashboard'
    pass


class SKDeleteItem(Screen):
    def deleteItem(self):
        item = clothingItem(1,1,1,1,1,1,1,1)
        result = item.deleteItem(self.ids.itemId.text)
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item deleted successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item doesn't exist", "Error message", 1)
    pass

    def gotodashboard(self):
        self.manager.current = 'skdashboard'
    pass


class SKUpdateItem(Screen):
    def updateItem(self):
        item = clothingItem(self.ids.itemId.text, self.ids.itemName.text, self.ids.itemCategory.text, self.ids.itemKind.text, self.ids.itemSize.text,self.ids.itemColor.text,self.ids.itemQuantity.text,self.ids.itemPrice.text)
        result = item.updateItem(self.ids.itemId.text)
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item updated successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item not exist", "Error message", 1)
    pass

    def gotodashboard(self):
        self.manager.current = 'skdashboard'
    pass

class SKSearchItem(Screen):
    def searchItem(self):
        item = clothingItem(1, 1, 1, 1, 1, 1, 1, 1)
        result = item.viewItem(self.ids.itemId.text)
        if (result == False):
            ctypes.windll.user32.MessageBoxW(0, "Item not exist", "Error message", 1)
        else:
            self.ids.itemName.text= "Name: " + result[0][2]
            self.ids.itemCategory.text = "Category: " + result[0][3]
            self.ids.itemKind.text = "Kind: " + result[0][4]
            self.ids.itemSize.text = "Size: " + result[0][5]
            self.ids.itemColor.text = "Color: " + result[0][6]
            self.ids.itemQuantity.text = "Quantity: " + str(result[0][7])
            self.ids.itemPrice.text = "Price: " + str(result[0][8])
    pass

    def gotodashboard(self):
        self.manager.current = 'skdashboard'
    pass


# Manager functionality



class MDashboard(Screen):
    def load_table(self):
        layout = AnchorLayout()
        cursor.execute("SELECT * FROM item")
        data = cursor.fetchall()
        self.data_tables = MDDataTable(
            pos_hint={'center_y': 0.5, 'center_x': 0.5},
            size_hint=(0.9, 0.6),
            use_pagination=True,
            check=False,
            column_data=[
                ("Item#", dp(30)),
                ("ItemId", dp(30)),
                ("Name", dp(30)),
                ("Color", dp(30)),
                ("Size", dp(30)),
                ("Category", dp(30)),
                ("Kind", dp(30)),
                ("Quantity", dp(30)),
                ("Price", dp(30))],
            row_data=[
                (f"{data[i][0]}", f"{data[i][1]}", f"{data[i][2]}", f"{data[i][3]}", f"{data[i][4]}", f"{data[i][5]}", f"{data[i][6]}", f"{data[i][7]}", f"{data[i][8]}")
                for i in range(len(data))], )
        self.add_widget(self.data_tables)
        return layout

    def on_enter(self):
        self.load_table()
    pass

    def MAddItem(self):
        self.manager.current = 'madditem'
    pass

    def MDeleteItem(self):
        self.manager.current = 'mdeleteitem'
    pass

    def MUpdateItem(self):
        self.manager.current = 'mupdateitem'
    pass

    def MSearchItem(self):
        self.manager.current = 'msearchitem'
    pass

    def MSoldTable(self):
        self.manager.current = 'msoldtable'
    pass

    def MDefectTable(self):
        self.manager.current = 'mdefecttable'
    pass

    def MLostTable(self):
        self.manager.current = 'mlosttable'
    pass

    def MWornTable(self):
        self.manager.current = 'mworntable'
    pass

    def MReportDefect(self):
        self.manager.current = 'mreportdefect'
    pass

    def MReportLost(self):
        self.manager.current = 'mreportlost'
    pass

    def MReportWorn(self):
        self.manager.current = 'mreportworn'
    pass

    def MDefectReport(self):
        self.manager.current = 'mworntable'
    pass

    def logout(self):
        self.manager.current = 'login'
    pass

class MAddItem(Screen):
    def AddItem(self):
        item = clothingItem(self.ids.itemId.text, self.ids.itemName.text, self.ids.itemCategory.text, self.ids.itemKind.text, self.ids.itemSize.text,self.ids.itemColor.text,self.ids.itemQuantity.text,self.ids.itemPrice.text)
        result = item.addItem()
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item created successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item already exist", "Error message", 1)
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass


class MDeleteItem(Screen):
    def deleteItem(self):
        item = clothingItem(1,1,1,1,1,1,1,1)
        result = item.deleteItem(self.ids.itemId.text)
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item deleted successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item doesn't exist", "Error message", 1)
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass


class MUpdateItem(Screen):
    def updateItem(self):
        item = clothingItem(self.ids.itemId.text, self.ids.itemName.text, self.ids.itemCategory.text, self.ids.itemKind.text, self.ids.itemSize.text,self.ids.itemColor.text,self.ids.itemQuantity.text,self.ids.itemPrice.text)
        result = item.updateItem(self.ids.itemId.text)
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item updated successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item not exist", "Error message", 1)
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass

class MSearchItem(Screen):
    def searchItem(self):
        item = clothingItem(1, 1, 1, 1, 1, 1, 1, 1)
        result = item.viewItem(self.ids.itemId.text)
        if (result == False):
            ctypes.windll.user32.MessageBoxW(0, "Item not exist", "Error message", 1)
        else:
            self.ids.itemName.text= "Name: " + result[0][2]
            self.ids.itemCategory.text = "Category: " + result[0][3]
            self.ids.itemKind.text = "Kind: " + result[0][4]
            self.ids.itemSize.text = "Size: " + result[0][5]
            self.ids.itemColor.text = "Color: " + result[0][6]
            self.ids.itemQuantity.text = "Quantity: " + str(result[0][7])
            self.ids.itemPrice.text = "Price: " + str(result[0][8])
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass


class MSoldTable(Screen):
    def load_table(self):
        layout = AnchorLayout()
        cursor.execute("SELECT sold.id, sold.itemId, sold.date, item.name, item.kind, item.price  FROM sold INNER JOIN item ON sold.itemId = item.itemId")
        data = cursor.fetchall()
        self.data_tables = MDDataTable(
            pos_hint={'center_y': 0.5, 'center_x': 0.5},
            size_hint=(0.9, 0.6),
            use_pagination=True,
            check=False,
            column_data=[
                ("Item#", dp(30)),
                ("ItemId", dp(30)),
                ("Date", dp(30)),
                ("Name", dp(30)),
                ("Kind", dp(30)),
                ("Price", dp(30))],
            row_data=[
                (f"{data[i][0]}", f"{data[i][1]}", f"{data[i][2]}", f"{data[i][3]}", f"{data[i][4]}", f"{data[i][5]}")
                for i in range(len(data))], )
        self.add_widget(self.data_tables)
        return layout

    def on_enter(self):
        self.load_table()
    pass

    def MShowStatistics(self):
        item = clothingItem(1, 1, 1, 1, 1, 1, 1, 1)
        result = item.display_sold_chart(self.ids.fromDate.text,self.ids.toDate.text)
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass


class MDefectTable(Screen):
    def load_table(self):
        layout = AnchorLayout()
        cursor.execute("SELECT defect.id, defect.itemId, defect.date, item.name, item.kind, item.price  FROM defect INNER JOIN item ON defect.itemId = item.itemId")
        data = cursor.fetchall()
        self.data_tables = MDDataTable(
            pos_hint={'center_y': 0.5, 'center_x': 0.5},
            size_hint=(0.9, 0.6),
            use_pagination=True,
            check=False,
            column_data=[
                ("Item#", dp(30)),
                ("ItemId", dp(30)),
                ("Date", dp(30)),
                ("Name", dp(30)),
                ("Kind", dp(30)),
                ("Price", dp(30))],
            row_data=[
                (f"{data[i][0]}", f"{data[i][1]}", f"{data[i][2]}", f"{data[i][3]}", f"{data[i][4]}", f"{data[i][5]}")
                for i in range(len(data))], )
        self.add_widget(self.data_tables)
        return layout

    def on_enter(self):
        self.load_table()
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass

class MLostTable(Screen):
    def load_table(self):
        layout = AnchorLayout()
        cursor.execute("SELECT lost.id, lost.itemId, lost.date, item.name, item.kind, item.price  FROM lost INNER JOIN item ON lost.itemId = item.itemId")
        data = cursor.fetchall()
        self.data_tables = MDDataTable(
            pos_hint={'center_y': 0.5, 'center_x': 0.5},
            size_hint=(0.9, 0.6),
            use_pagination=True,
            check=False,
            column_data=[
                ("Item#", dp(30)),
                ("ItemId", dp(30)),
                ("Date", dp(30)),
                ("Name", dp(30)),
                ("Kind", dp(30)),
                ("Price", dp(30))],
            row_data=[
                (f"{data[i][0]}", f"{data[i][1]}", f"{data[i][2]}", f"{data[i][3]}", f"{data[i][4]}", f"{data[i][5]}")
                for i in range(len(data))], )
        self.add_widget(self.data_tables)
        return layout

    def on_enter(self):
        self.load_table()
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass

class MWornTable(Screen):
    def load_table(self):
        layout = AnchorLayout()
        cursor.execute("SELECT worn.id, worn.itemId, worn.date, item.name, item.kind, item.price  FROM worn INNER JOIN item ON worn.itemId = item.itemId")
        data = cursor.fetchall()
        self.data_tables = MDDataTable(
            pos_hint={'center_y': 0.5, 'center_x': 0.5},
            size_hint=(0.9, 0.6),
            use_pagination=True,
            check=False,
            column_data=[
                ("Item#", dp(30)),
                ("ItemId", dp(30)),
                ("Date", dp(30)),
                ("Name", dp(30)),
                ("Kind", dp(30)),
                ("Price", dp(30))],
            row_data=[
                (f"{data[i][0]}", f"{data[i][1]}", f"{data[i][2]}", f"{data[i][3]}", f"{data[i][4]}", f"{data[i][5]}")
                for i in range(len(data))], )
        self.add_widget(self.data_tables)
        return layout

    def on_enter(self):
        self.load_table()
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass



class MReportDefect(Screen):
    def reportDefect(self):
        item = clothingItem(1,1,1,1,1,1,1,1)
        result = item.reportDefect(self.ids.itemId.text)
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item added successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item doesn't exist", "Error message", 1)
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass


class MReportLost(Screen):
    def reportDefect(self):
        item = clothingItem(1,1,1,1,1,1,1,1)
        result = item.reportLost(self.ids.itemId.text)
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item deleted successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item doesn't exist", "Error message", 1)
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass

class MReportWorn(Screen):
    def reportDefect(self):
        item = clothingItem(1,1,1,1,1,1,1,1)
        result = item.reportWorn(self.ids.itemId.text)
        if (result == True):
            ctypes.windll.user32.MessageBoxW(0, "Item deleted successfully", "Confirm message", 1)
        else:
            ctypes.windll.user32.MessageBoxW(0, "Item doesn't exist", "Error message", 1)
    pass

    def gotomdashboard(self):
        self.manager.current = 'mdashboard'
    pass


class WindowManager(ScreenManager):
    pass



# System init

class MyMainApp(MDApp):
    def build(self):
        return Builder.load_file("main.kv")


if __name__ == "__main__":
    MyMainApp().run()