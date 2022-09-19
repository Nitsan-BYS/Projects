package com.expensemanager.viewModles.vminterface;

import com.expensemanager.views.viewinterface.IAddNewExpense;

public interface IAddNewExpenseViewModel {
    public void setView(IAddNewExpense addNewExpense);
    public void returnToDesktop();
    public void addNewExpense();
    public void validateCategoryChosen();
    public void validateCurrencyChosen();
    public void setLinkToLogoutFromPage();

}
