package com.expensemanager.viewModles.vminterface;

import com.expensemanager.views.viewinterface.IViewExpensesList;

import java.io.IOException;
import java.net.URISyntaxException;

public interface IViewExpenseListViewModel {
    public void setView(IViewExpensesList viewExpensesList);
    public void returnToDesktop();
    public void displayExpensesList();
    public void setLinkToLogoutFromPage();

    public void deleteExpense(String URI) throws URISyntaxException, IOException, InterruptedException;
}
