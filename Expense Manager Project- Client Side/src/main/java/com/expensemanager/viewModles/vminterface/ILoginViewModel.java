package com.expensemanager.viewModles.vminterface;

import com.expensemanager.views.viewinterface.ILogin;
import com.expensemanager.views.viewinterface.IRegister;

import java.io.IOException;
import java.net.URISyntaxException;

public interface ILoginViewModel {
//    public void setModel(IModel model);
    public void setView(ILogin view);
    public void openRegisterPage();
    public void openDesktopPage();
    public void get(String URI) throws IOException, InterruptedException, URISyntaxException;
}
