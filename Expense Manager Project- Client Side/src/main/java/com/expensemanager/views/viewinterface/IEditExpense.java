package com.expensemanager.views.viewinterface;

import com.expensemanager.viewModles.vminterface.IEditExpenseViewModel;

import javax.swing.*;

public interface IEditExpense {
    public void start();
    public void setViewModel(IEditExpenseViewModel obj);
    public void buildTopPanel();
    public void buildMiddlePanel();
    public void buildBottomPanel();
    public void setButtonShape();
    public JComboBox getCategoryComboBox();
    public JComboBox getCurrencyComboBox();
    public JLabel getReturnLabel();
    public JButton getButton();
    public String getSum();
    public String getDescription();
    public String getString();
    public JLabel getLogoutLabel();
    public String getLogoutString();
    public JFrame getFrame();
}
