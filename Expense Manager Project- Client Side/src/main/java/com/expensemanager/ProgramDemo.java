package com.expensemanager;

import com.expensemanager.viewModles.LoginViewModel;
import com.expensemanager.viewModles.vminterface.ILoginViewModel;
import com.expensemanager.views.Login;
import com.expensemanager.views.viewinterface.ILogin;

import javax.swing.*;

public class ProgramDemo {
    static ILoginViewModel viewModel = new LoginViewModel();

    public static void main(String args[]) {

        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                //Creating LoginPage Interface Object
                ILogin loginPage = new Login();
                //Setting ViewModel obj on LoginPage
                loginPage.setViewModel(viewModel);
                //Setting View obj on ViewModel
                viewModel.setView(loginPage);
                //Activating start() from Login Page
                loginPage.start();
            }
        });
    }
}

