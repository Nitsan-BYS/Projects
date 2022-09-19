package com.expensemanager.viewModles.vminterface;

import com.expensemanager.views.viewinterface.IDesktop;

public interface IDesktopViewModel {
    public void setLinkToNewExpensePage();
    public void setLinkToNewCategoryPage();
    public void setLinkViewExpenseListPage();
    public void setView(IDesktop desktopPage);
    public void setLinkToLogoutFromPage();
}
