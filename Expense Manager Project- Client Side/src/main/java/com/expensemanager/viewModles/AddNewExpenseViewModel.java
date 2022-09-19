package com.expensemanager.viewModles;

import com.expensemanager.viewModles.vminterface.IAddNewExpenseViewModel;
import com.expensemanager.viewModles.vminterface.IDesktopViewModel;
import com.expensemanager.viewModles.vminterface.IViewExpenseListViewModel;
import com.expensemanager.views.Desktop;
import com.expensemanager.views.ViewExpensesList;
import com.expensemanager.views.viewinterface.IAddNewExpense;
import com.expensemanager.views.viewinterface.IDesktop;
import com.expensemanager.views.viewinterface.IViewExpensesList;

import javax.swing.*;
import java.awt.event.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class AddNewExpenseViewModel implements IAddNewExpenseViewModel {
    private IAddNewExpense addNewExpensePage;
    private ExecutorService pool;

    public AddNewExpenseViewModel() {
        pool = Executors.newFixedThreadPool(8);
    }

    @Override
    public void setView(IAddNewExpense addNewExpense) {
        this.addNewExpensePage = addNewExpense;
    }

    @Override
    public void returnToDesktop() {
        //Get Values from AddNewExpense Page
        JLabel labelReturn = addNewExpensePage.getReturnLabel();
        JFrame frame = addNewExpensePage.getFrame();
        String goBack = addNewExpensePage.getString();

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
    public void addNewExpense() {
        //Get values of elements
        JFrame frame = addNewExpensePage.getFrame();
        JButton addExpenseBtn = addNewExpensePage.getButton();

        addExpenseBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Get Values of JTextfields
                String sum = addNewExpensePage.getSum();
                String description = addNewExpensePage.getDescription();

                //Validate inserted value in textfields
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
                    JOptionPane.showMessageDialog(frame, "A new expense has been added successfully!");

                    //Close AddNewExpense Window
                    frame.dispose();

                    //Open ViewExpensesList Window
                    IViewExpensesList viewExpensesListPage = new ViewExpensesList();
                    IViewExpenseListViewModel viewExpenseListViewModel = new ViewExpenseListViewModel();
                    //Setting ViewModel obj on ViewExpenseList Page
                    viewExpensesListPage.setViewModel(viewExpenseListViewModel);
                    //Setting View obj on ViewModel
                    viewExpenseListViewModel.setView(viewExpensesListPage);
                    //Activating start() from viewExpensesList Page
                    viewExpensesListPage.start();
                }
            }
        });
    }

    @Override
    public void validateCategoryChosen() {
        //Get Element
        JComboBox categoryBox = addNewExpensePage.getCategoryComboBox();
        JFrame frame = addNewExpensePage.getFrame();
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
                    }
                    else if(categoryBox.getSelectedItem() == "Select Category") {
                        JOptionPane.showMessageDialog(frame, "Error! Category has not been chosen");
                    }
                }
            }
        });
    }

    @Override
    public void validateCurrencyChosen() {
        //Get Element
        JComboBox currencyBox = addNewExpensePage.getCategoryComboBox();
        JFrame frame = addNewExpensePage.getFrame();

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
                    }
                    else if(currencyBox.getSelectedItem() == "Select Category") {
                        JOptionPane.showMessageDialog(frame, "Error! Category has not been chosen");
                    }
                }
            }
        });
    }

    @Override
    public void setLinkToLogoutFromPage() {
        //Get elements
        JLabel logoutLink = addNewExpensePage.getLogoutLabel();
        JFrame frame = addNewExpensePage.getFrame();
        String logout = addNewExpensePage.getLogoutString();
        //Logout Link events handling
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
                    //Close Current Window
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
}
