package com.expensemanager.views.viewinterface;

import com.expensemanager.viewModles.vminterface.IAddNewExpenseViewModel;

import javax.swing.*;

public interface IAddNewExpense {
    public void start();
    public void setViewModel(IAddNewExpenseViewModel obj);
    public void buildTopPanel();
    public void buildMiddlePanel();
    public void buildBottomPanel();
    public void setButtonShape();
    public JLabel getReturnLabel();
    public JFrame getFrame();
    public String getString();
    public String getSum();
    public String getDescription();
    public JButton getButton();
    public String getLogoutString();
    public JLabel getLogoutLabel();
    public JComboBox getCategoryComboBox();
    public JComboBox getCurrencyComboBox();

}
