package com.expensemanager.viewModles;

import com.expensemanager.viewModles.vminterface.IAddNewCategoryViewModel;
import com.expensemanager.viewModles.vminterface.IAddNewExpenseViewModel;
import com.expensemanager.viewModles.vminterface.IDesktopViewModel;
import com.expensemanager.viewModles.vminterface.IViewExpenseListViewModel;
import com.expensemanager.views.AddNewCategory;
import com.expensemanager.views.AddNewExpense;
import com.expensemanager.views.ViewExpensesList;
import com.expensemanager.views.viewinterface.IAddNewCategory;
import com.expensemanager.views.viewinterface.IAddNewExpense;
import com.expensemanager.views.viewinterface.IDesktop;
import com.expensemanager.views.viewinterface.IViewExpensesList;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class DesktopViewModel implements IDesktopViewModel {
    private ExecutorService pool;

    //Create References to Pages
    private IDesktop desktopPage;

    //Constructor
    public DesktopViewModel() {
        pool = Executors.newFixedThreadPool(8);
    }

    @Override
    public void setLinkToNewExpensePage() {
        JButton addExpenseBtn = desktopPage.getExpenseButton();
        JFrame frame = desktopPage.getFrame();

        addExpenseBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Close Desktop Window
                frame.dispose();
                //Open New Expense Window
                IAddNewExpense addNewExpensePage = new AddNewExpense();
                IAddNewExpenseViewModel addNewExpenseViewModel = new AddNewExpenseViewModel();
                //Setting ViewModel obj on addNewExpensePage
                addNewExpensePage.setViewModel(addNewExpenseViewModel);
                //Setting View obj on ViewModel
                addNewExpenseViewModel.setView(addNewExpensePage);
                //Activating start() from addNewExpense Page
                addNewExpensePage.start();
            }
        });
    }

    @Override
    public void setLinkToNewCategoryPage() {
        JButton addCategoryBtn = desktopPage.getCategoryButton();
        JFrame frame = desktopPage.getFrame();
        addCategoryBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Close Desktop Window
                frame.dispose();
                //Open New Category Window
                IAddNewCategory addNewCategoryPage = new AddNewCategory();
                IAddNewCategoryViewModel addNewCategoryViewModel = new AddNewCategoryViewModel();
                //Setting ViewModel obj on addNewCategoryPage
                addNewCategoryPage.setViewModel(addNewCategoryViewModel);
                //Setting View obj on ViewModel
                addNewCategoryViewModel.setView(addNewCategoryPage);
                //Activating start() from addNewExpense Page
                addNewCategoryPage.start();
            }
        });
    }

    @Override
    public void setLinkViewExpenseListPage() {
        JButton viewExpensesListBtn = desktopPage.getViewExpenseButton();
        JFrame frame = desktopPage.getFrame();
        viewExpensesListBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Close Desktop Window
                frame.dispose();
                //Open View Expenses List Window
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
        });
    }

    @Override
    public void setView(IDesktop desktopPage) {
        this.desktopPage = desktopPage;
    }

    @Override
    public void setLinkToLogoutFromPage() {
        JLabel logoutLink = desktopPage.getLogoutLabel();
        JFrame frame = desktopPage.getFrame();
        String logout = desktopPage.getLogoutString();

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
}
