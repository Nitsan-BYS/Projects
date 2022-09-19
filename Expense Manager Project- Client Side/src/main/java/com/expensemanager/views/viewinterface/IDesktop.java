package com.expensemanager.views.viewinterface;

import com.expensemanager.viewModles.vminterface.IDesktopViewModel;

import javax.swing.*;

public interface IDesktop {
    public void start();
    public void setViewModel(IDesktopViewModel desktopVM);
    public void buildTopPanel();
    public void buildMiddlePanel();
    public void setButtonShape();

    public JLabel getLogoutLabel();
    public String getLogoutString();
    public JButton getExpenseButton();
    public JButton getCategoryButton();
    public JButton getViewExpenseButton();
    public JFrame getFrame();

}
