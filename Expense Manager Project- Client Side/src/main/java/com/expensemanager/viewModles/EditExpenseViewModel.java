package com.expensemanager.viewModles;

import com.expensemanager.viewModles.vminterface.IDesktopViewModel;
import com.expensemanager.viewModles.vminterface.IEditExpenseViewModel;
import com.expensemanager.viewModles.vminterface.IViewExpenseListViewModel;
import com.expensemanager.views.Desktop;
import com.expensemanager.views.ViewExpensesList;
import com.expensemanager.views.viewinterface.IDesktop;
import com.expensemanager.views.viewinterface.IEditExpense;
import com.expensemanager.views.viewinterface.IViewExpensesList;

import javax.swing.*;
import java.awt.event.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class EditExpenseViewModel implements IEditExpenseViewModel {
    private IEditExpense editExpensePage;
    private ExecutorService pool;

    //Constructor
    public EditExpenseViewModel() {
        pool = Executors.newFixedThreadPool(8);
    }


    @Override
    public void setView(IEditExpense editExpense) {
        this.editExpensePage = editExpense;
    }

    @Override
    public void updateExpense() {
        /*
         * Move to View Expenses List page after updating a new expense
         */
        //Get elements
        JButton updateExpenseBtn = editExpensePage.getButton();
        JFrame frame = editExpensePage.getFrame();

        updateExpenseBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Validate inserted value in textfields
                String sum = editExpensePage.getSum();
                String description = editExpensePage.getDescription();

                //if Sum field is empty
                if (sum.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Sum has not been filled");
                }

                //if Sum field starts with whitespace
                else if (Character.isWhitespace(sum.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                }

                //if Description field is empty
                if (description.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Description has not been filled");
                }

                //if Description field starts with whitespace
                else if (Character.isWhitespace(description.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                } else {
                    //Display Confirmation Message
                    JOptionPane.showMessageDialog(frame, "Expense has been updated successfully!");
                    //Close Register Window
                    frame.dispose();
                    //Open ViewExpensesList Window
                    IViewExpensesList viewExpensesListPage = new ViewExpensesList();
                    //Setting ViewModel obj on ViewExpenseList Page
                    IViewExpenseListViewModel viewExpenseListViewModel = new ViewExpenseListViewModel();
                    //Setting ViewModel obj on ViewExpenseList Page
                    viewExpensesListPage.setViewModel(viewExpenseListViewModel);
                    //Setting View obj on ViewModel
                    viewExpenseListViewModel.setView(viewExpensesListPage);
                    //Activating start() from ViewExpensesList Page
                    viewExpensesListPage.start();
                }
            }
        });
    }

    @Override
    public void returnToDesktopPage() {
        //Get Elements
        JLabel labelReturn = editExpensePage.getReturnLabel();
        JFrame frame = editExpensePage.getFrame();
        String goBack = editExpensePage.getString();

        //Return Label events handling
        labelReturn.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                //Close AddNewExpense Window
                frame.dispose();
                //Go back to Main Desktop Window
                IDesktop desktopPage = new Desktop();
                IDesktopViewModel desktopPageViewModel = new DesktopViewModel();
                //Setting ViewModel obj on DesktopPage
                desktopPage.setViewModel(desktopPageViewModel);
                //Setting View obj on ViewModel
                desktopPageViewModel.setView(desktopPage);
                desktopPage.start();
            }

            @Override
            public void mouseExited(MouseEvent e) {
                labelReturn.setText(goBack);
            }
        });
    }

    @Override
    public void setLinkToLogoutFromPage() {
        JLabel logoutLink = editExpensePage.getLogoutLabel();
        JFrame frame = editExpensePage.getFrame();
        String logout = editExpensePage.getLogoutString();

        //Cursor events handling
        logoutLink.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                //Display Confirmation Dialog before user logs out
                String[] options = {"Yes", "Not Now"};
                int confirmLogout = JOptionPane.showOptionDialog(
                        frame,
                        "Are You Sure?",
                        "Logout",
                        JOptionPane.YES_NO_OPTION,
                        JOptionPane.QUESTION_MESSAGE,
                        null, options, options[0]);

                //If user clicks "YES"
                if (confirmLogout == JOptionPane.YES_OPTION) {
                    //Close Login Window
                    frame.dispose();
                }
            }

            @Override
            public void mouseExited(MouseEvent e) {
                logoutLink.setText(logout);
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                logoutLink.setText("<html><a href=''>" + logout + "</a></html>");
            }
        });
    }

    @Override
    public void checkCategoryChosen() {
        //Get Element
        JComboBox categoryBox = editExpensePage.getCategoryComboBox();
        //Validate Category chosen
        categoryBox.addItemListener(new ItemListener() {
            public void itemStateChanged(ItemEvent event) {
                //Check if the object on which the event initially occurred equals to categoryBox
                if (event.getSource() == categoryBox) {
                    //Checks if element is selected or not selected
                    int state = event.getStateChange();
                    //Check if currency has not been chosen
                    if (state == ItemEvent.SELECTED) {
                        //Assign choice to str
                        String category = (String) categoryBox.getSelectedItem();
                        //Print to console
                        System.out.println(category);
                    }
                }
            }
        });
    }

    @Override
    public void checkCurrencyChosen() {
        //Get Element
        JComboBox currencyBox = editExpensePage.getCurrencyComboBox();
        //Validate Currency chosen
        currencyBox.addItemListener(new ItemListener() {
            public void itemStateChanged(ItemEvent event) {
                //Check if the object on which the event initially occurred equals to currencyBox
                if (event.getSource() == currencyBox) {
                    //Checks if element is selected or not selected
                    int state = event.getStateChange();

                    //Check if category has not been chosen
                    if (state == ItemEvent.SELECTED) {
                        //Assign choice to str
                        String currency = (String) currencyBox.getSelectedItem();
                        //Print to console
                        System.out.println(currency);
                    }
                }
            }
        });
    }
}

/*
//Check whether a choice was made in either of the ComboBoxes
//TBD: Need to receive categories & currencies from DB
        categoryBox.addActionListener(new ActionListener() {
@Override
public void actionPerformed(ActionEvent e) {
        if (categoryBox.getSelectedItem() == "Select Category") {
        JOptionPane.showMessageDialog(frame, "Error! Category has not been chosen");
        }
        }
        });

        currencyBox.addActionListener(new ActionListener() {
@Override
public void actionPerformed(ActionEvent e) {
        if (currencyBox.getSelectedItem() == "Select Currency") {
        JOptionPane.showMessageDialog(frame, "Error! Currency has not been chosen");
        }
        }
        });*/