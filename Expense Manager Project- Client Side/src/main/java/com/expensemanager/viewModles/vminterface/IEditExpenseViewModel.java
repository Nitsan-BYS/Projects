package com.expensemanager.viewModles.vminterface;

import com.expensemanager.views.viewinterface.IEditExpense;

public interface IEditExpenseViewModel {

    public void setView(IEditExpense editExpense);
    public void updateExpense();
    public void returnToDesktopPage();
    public void setLinkToLogoutFromPage();

    public void checkCategoryChosen();
    public void checkCurrencyChosen();
}
