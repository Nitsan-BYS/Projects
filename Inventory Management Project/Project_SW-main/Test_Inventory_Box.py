import utils
from unittest import TestCase

# class TestUtils(TestCase):
    # clothing items table unit test
    # def test_db_write_clothingitems(self):
        # self.assertEqual(utils.db_write("""INSERT INTO `clothingitems` (`item_id`, `itemname`,`color`, `size`,  `quantity`, `category_id`, `kind`, `price`) VALUES
        #                  ('23', 'glove', 'Black','S',70,1,'Long',30 )"""), True)
        # additional tests in comment below
        # self.assertEqual(utils.db_write("""UPDATE `clothingitems`
        # SET `item_id` = '41', `itemname` = 'Long Sport Shirt',`color`= 'Yellow', `size` = 'XL',  `quantity` = '160', `category_id` = '4', `kind` = 'Sport', `price` = '40'
        # WHERE itemNumber='7' """), True)
        # self.assertEqual(utils.db_write("""DELETE FROM `clothingitems` WHERE itemNumber='11' """), True)

    # def test_db_read_clothingitems(self):
    #         self.assertEqual(utils.db_read("""Select * FROM `clothingitems` WHERE itemNumber ='1'"""), True)
            # self.assertEqual(utils.db_read("""Select * FROM `clothingitems`"""), True)

    #  defect items table unit test
    # def test_db_write_defectitems(self):
            # self.assertEqual(utils.db_write("""INSERT INTO `defectitems` (`defectAddDate`, `item_id`, `itemname`,`color`, `size`,  `quantity`, `category_id`, `kind`, `price`) VALUES
            #                 ('2022-02-10','12', 'Long Shirt', 'Blue','L',200,1,'Long',120.99 )"""), True)
            # additional tests in comment below
            # self.assertEqual(utils.db_write("""UPDATE `defectitems`
            # SET `defectAddDate` ='2022-02-06', `item_id` = '78', `itemname` = 'Long Sport Pants',`color`= 'Red', `size` = 'XL',  `quantity` = '305', `category_id` = '4', `kind` = 'Sport', `price` = '99.90'
            # WHERE id='2' """), True)
            # self.assertEqual(utils.db_write("""DELETE FROM `defectitems` WHERE id='2' """), True)


    # def test_db_read_defectitems(self):
    #         self.assertEqual(utils.db_read("""Select * FROM `defectitems` WHERE id ='1'"""), True)
    #         self.assertEqual(utils.db_read("""Select * FROM `defectitems`"""), True)
    #

    #  lost items table unit test
    # def test_db_write_lostitems(self):
            # self.assertEqual(utils.db_write("""INSERT INTO `lostitems` (`lostDate`, `item_id`, `itemname`,`color`, `size`,  `quantity`, `category_id`, `kind`, `price`) VALUES
            #                 ('2022-02-10','12', 'Long Shirt', 'Blue','L',1,1,'Long',120.99 )"""), True)
            # additional tests in comment below
            # self.assertEqual(utils.db_write("""UPDATE `lostitems`
            # SET `lostDate` ='2022-02-19', `item_id` = '3', `itemname` = 'dresses',`color`= 'yellow', `size` = 'XL',  `quantity` = '305', `category_id` = '4', `kind` = 'Sport', `price` = '99.90'
            # WHERE id='2' """), True)
            # self.assertEqual(utils.db_write("""DELETE FROM `lostDate` WHERE id='1' """), True)

    #
    # def test_db_read_lostDate(self):
    #         self.assertEqual(utils.db_read("""Select * FROM `lostDate` WHERE id ='1'"""), True)
    #         self.assertEqual(utils.db_read("""Select * FROM `lostDate`"""), True)
    #
    #  sold items table unit test
    # def test_db_write_solditems(self):
                # self.assertEqual(utils.db_write("""INSERT INTO `solditems` (`saleDate`, `item_id`, `itemname`,`color`, `size`,  `quantity`, `category_id`, `kind`, `price`) VALUES
                #             ('2022-02-10','12', 'Long Shirt', 'Blue','L',1,1,'Long',120.99 )"""), True)
                # additional tests in comment below
                # self.assertEqual(utils.db_write("""UPDATE `solditems`
                # SET `saleDate` ='2022-01-19', `item_id` = '3', `itemname` = 'Pants',`color`= 'yellow', `size` = 'XL',  `quantity` = '305', `category_id` = '4', `kind` = 'Sport', `price` = '99.90'
                # WHERE id='2' """), True)
                # self.assertEqual(utils.db_write("""DELETE FROM `solditems` WHERE id='2' """), True)
    #
    # def test_db_read_solditems(self):
    #         self.assertEqual(utils.db_read("""Select * FROM `solditems` WHERE id ='1'"""), True)
    #         self.assertEqual(utils.db_read("""Select * FROM `solditems`"""), True)
    #
    #  user table unit test
    # def test_db_write_users(self):
    #      self.assertEqual(utils.db_write("""INSERT INTO `users` (`id`, `firstname`, `lastname`,`username`, `phone`, `email`,`password`, `role`) VALUES
    #                         ('16516', 'Yoni', 'Tal','YoniT','05168616','Yoni@gmail.com','516556','Storekeeper')"""), True)
            # additional tests in comment below
    #       self.assertEqual(utils.db_write("""UPDATE `users`
    #        SET `id` = '6516541', `firstname`='Yoni', `lastname`='Tal',`username`='Yoni989', `phone`='05168616', `email`='Yoni@gmail.com',`password`='516556', `role`='Storekeeper'
    #        WHERE userNumber='9' """), True)
    #         self.assertEqual(utils.db_write("""DELETE FROM `users` WHERE id='9' """), True)
    #
    #
    # def test_db_read_users(self):
    #         self.assertEqual(utils.db_read("""Select * FROM `users` WHERE userNumber='9'"""), True)
    #         self.assertEqual(utils.db_read("""Select * FROM `users`"""), True)