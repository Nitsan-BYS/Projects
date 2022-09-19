package com.expensemanager.views.viewinterface;

import com.expensemanager.viewModles.vminterface.IRegisterViewModel;

import javax.swing.*;

public interface IRegister {
    public void start();
    public void setViewModel(IRegisterViewModel obj);
    public void buildTopPanel();
    public void buildMidTopPanel();
    public void buildMidBottomPanel();
    public void buildBottomPanel();
    public void addNewUser(JTextField tfName, JTextField tfUsername, JTextField tfPassword);
    public void returnToLogin();
    public JLabel getLink();
    public String getUsername();
    public String getName();
    public String getPassword();
    public JButton getButton();
    public JFrame getFrame();
    public String getTitle();
//    public void addUserMessage();
}
