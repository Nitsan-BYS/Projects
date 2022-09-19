package com.expensemanager.views.viewinterface;

import com.expensemanager.viewModles.vminterface.IAddNewCategoryViewModel;

import javax.swing.*;

public interface IAddNewCategory {
    public void start();
    public void setViewModel(IAddNewCategoryViewModel addNewCategoryViewModel);
    public void buildTopPanel();
    public void buildMiddlePanel();
    public void buildBottomPanel();
    public void setButtonShape();
    public JLabel getReturnLabel();
    public JFrame getFrame();
    public String getString();
    public String getCategory();
    public JButton getButton();
    public JLabel getLogoutLabel();
    public String getLogoutString();
}
