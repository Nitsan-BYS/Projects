package com.expensemanager.viewModles;

import com.expensemanager.viewModles.vminterface.IDesktopViewModel;
import com.expensemanager.viewModles.vminterface.IRegisterViewModel;
import com.expensemanager.views.Desktop;
import com.expensemanager.views.Login;
import com.expensemanager.views.Register;
import com.expensemanager.views.viewinterface.IDesktop;
import com.expensemanager.views.viewinterface.ILogin;
import com.expensemanager.viewModles.vminterface.ILoginViewModel;
import com.expensemanager.views.viewinterface.IRegister;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class LoginViewModel implements ILoginViewModel {

    private ExecutorService pool;
    private ILogin loginPage;
    private IRegister regView;
    private IRegisterViewModel registerViewModel = new RegisterViewModel();
    private IDesktopViewModel desktopPageViewModel = new DesktopViewModel();


    public LoginViewModel() {
        pool = Executors.newFixedThreadPool(8);
    }

    public ILogin getView() {
        return loginPage;
    }

    //Set Login Page View
    public void setView(ILogin loginPage) {
        this.loginPage = loginPage;
    }

    //Open Register page when clicking on "Register" link
    @Override
    public void openRegisterPage() {
        //Cursor events handling
        JLabel hyperLink = loginPage.getHyperlink();
        JFrame frame = loginPage.getFrame();
        String title = loginPage.getTitle();

        hyperLink.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                //Close Login Window
                frame.dispose();
                //Open Register Window
                IRegister registerPage = new Register();
                //Setting ViewModel obj on RegisterPage
                registerPage.setViewModel(registerViewModel);
                //Setting View obj on ViewModel
                registerViewModel.setView(registerPage);
                //Activating start() from Register Page
                registerPage.start();
            }

            @Override
            public void mouseExited(MouseEvent e) {
                hyperLink.setText(title);
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                hyperLink.setText("<html><a href=''>" + title + "</a></html>");
            }
        });
    }

    //Open Desktop page when clicking on "Login" Button
    @Override
    public void openDesktopPage() {
        //Get Login Button
        JButton loginBtn = loginPage.getButton();
        //Get Frame
        JFrame frame = loginPage.getFrame();

        //Open Desktop Page from Primary Page
        loginBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Get value written in tfUsername
                String username = loginPage.getUsername();
                //Get value written in tfPassword
                String password = loginPage.getPassword();

                //Validate inserted values in textfields
                //if Username field is empty
                if(username.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Username has not been filled");
                }
                //if Username field starts with whitespace
                else if(Character.isWhitespace(username.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                }

                //if Password field is empty
                else if(password.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Password has not been filled");
                }

                //if Password field starts with whitespace
                else if(Character.isWhitespace(password.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                }

                else {
                    //Close Login Window
                    frame.dispose();
                    //Open Desktop Window
                    IDesktop desktopPage = new Desktop();
                    //Setting ViewModel obj on DesktopPage
                    desktopPage.setViewModel(desktopPageViewModel);
                    //Setting View obj on ViewModel
                    desktopPageViewModel.setView(desktopPage);
                    desktopPage.start();
                }
            }
        });
    }

    @Override
    public void get(String URI) throws IOException, InterruptedException, URISyntaxException {
        //Get User details
        HttpRequest getRequest = HttpRequest.newBuilder()
                .uri(new URI("https://owen-wilson-wow-api.herokuapp.com/wows/random"))
                .GET()
                .build();

        HttpResponse<String> getResponse = HttpClient.newHttpClient().send(getRequest, HttpResponse.BodyHandlers.ofString());

        System.out.println(getResponse.body());
    }
}
