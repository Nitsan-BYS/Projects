package com.expensemanager.viewModles.vminterface;

import com.expensemanager.views.viewinterface.IAddNewCategory;

public interface IAddNewCategoryViewModel {
    public void setView(IAddNewCategory addNewCategory);
    public void returnToDesktop();
    public void addNewCategory();
    public void setLinkToLogoutFromPage();
}
