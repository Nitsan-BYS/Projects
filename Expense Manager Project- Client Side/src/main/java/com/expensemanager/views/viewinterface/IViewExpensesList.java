package com.expensemanager.views.viewinterface;

import com.expensemanager.viewModles.vminterface.IViewExpenseListViewModel;
import com.github.lgooddatepicker.components.DatePicker;

import javax.swing.*;

public interface IViewExpensesList {
    public void start();
    public void setViewModel(IViewExpenseListViewModel viewExpenseListViewModel);
    public void buildTopPanel();
    public void buildMiddlePanel();
    public void buildBottomPanel();
    public void setButtonShape();
    public JLabel getReturnLabel();
    public JFrame getFrame();
    public String getString();
    public JButton getButton();
    public DatePicker getDatePickerFrom();
    public DatePicker getDatePickerTo();
    public JLabel getLogoutLabel();
    public String getLogoutString();
    public JTable getTable();
}
