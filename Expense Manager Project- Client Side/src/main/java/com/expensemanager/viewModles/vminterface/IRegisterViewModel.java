package com.expensemanager.viewModles.vminterface;

import com.expensemanager.views.viewinterface.IRegister;

import javax.swing.*;

public interface IRegisterViewModel {
    public void returnToLogin();
    public void openDesktopPage();
    public void setView(IRegister registerPage);

//    public void addNewUser(JTextField name, JTextField username, JTextField password);
}
