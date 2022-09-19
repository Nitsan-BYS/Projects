package com.expensemanager.views.viewinterface;

import com.expensemanager.viewModles.vminterface.ILoginViewModel;

import javax.swing.*;

public interface ILogin {
    public void start();
    public void setViewModel(ILoginViewModel obj);
    public void buildTopPanel();
    public void buildMidTopPanel();
    public void buildMidBottomPanel();
    public void buildBottomPanel();
    public JLabel getHyperlink();
    public JFrame getFrame();
    public String getTitle();
    public String getUsername();
    public String getPassword();
    public JButton getButton();
}
