package com.expensemanager.viewModles;

import com.expensemanager.viewModles.vminterface.IAddNewCategoryViewModel;
import com.expensemanager.viewModles.vminterface.IDesktopViewModel;
import com.expensemanager.views.Desktop;
import com.expensemanager.views.viewinterface.IAddNewCategory;
import com.expensemanager.views.viewinterface.IDesktop;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class AddNewCategoryViewModel implements IAddNewCategoryViewModel {
    private IAddNewCategory addNewCategoryPage;
    private ExecutorService pool;

    public AddNewCategoryViewModel() {
        pool = Executors.newFixedThreadPool(8);
    }

    @Override
    public void setView(IAddNewCategory addNewCategory) {
        this.addNewCategoryPage = addNewCategory;
    }

    @Override
    public void returnToDesktop() {
        //Get Values from AddNewExpense Page
        JLabel labelReturn = addNewCategoryPage.getReturnLabel();
        JFrame frame = addNewCategoryPage.getFrame();
        String goBack = addNewCategoryPage.getString();

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
                //Activating start() function of Desktop page
                desktopPage.start();
            }

            @Override
            public void mouseExited(MouseEvent e) {
                labelReturn.setText(goBack);
            }
        });
    }

    @Override
    public void addNewCategory() {
        JButton addCategoryBtn = addNewCategoryPage.getButton();
        JFrame frame = addNewCategoryPage.getFrame();

        //Move to Desktop Main page after adding a new category
        addCategoryBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                //Get values
                String category = addNewCategoryPage.getCategory();

                //Validate inserted value in textfield
                //if Category field is empty
                if (category.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Category has not been filled");
                }

                //if Category field starts with whitespace
                else if (Character.isWhitespace(category.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                }
                else {
                    //Display Confirmation Message
                    JOptionPane.showMessageDialog(frame, "Category has been added successfully!");
                    //Close AddNewCategory Window
                    frame.dispose();
                    //Open Main Desktop Window
                    IDesktop desktopPage = new Desktop();
                    IDesktopViewModel desktopPageViewModel = new DesktopViewModel();
                    //Setting ViewModel obj on DesktopPage
                    desktopPage.setViewModel(desktopPageViewModel);
                    //Setting View obj on ViewModel
                    desktopPageViewModel.setView(desktopPage);
                    //Activating start() function of Desktop page
                    desktopPage.start();
                }
            }
        });
    }

    @Override
    public void setLinkToLogoutFromPage() {
        //Get elements
        JLabel logoutLink = addNewCategoryPage.getLogoutLabel();
        JFrame frame = addNewCategoryPage.getFrame();
        String logout = addNewCategoryPage.getLogoutString();

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
