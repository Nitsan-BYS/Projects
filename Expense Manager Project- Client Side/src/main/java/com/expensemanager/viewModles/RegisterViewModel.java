package com.expensemanager.viewModles;

import com.expensemanager.viewModles.vminterface.IDesktopViewModel;
import com.expensemanager.viewModles.vminterface.ILoginViewModel;
import com.expensemanager.viewModles.vminterface.IRegisterViewModel;
import com.expensemanager.views.Desktop;
import com.expensemanager.views.Login;
import com.expensemanager.views.viewinterface.IDesktop;
import com.expensemanager.views.viewinterface.ILogin;
import com.expensemanager.views.viewinterface.IRegister;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class RegisterViewModel implements IRegisterViewModel {
    //Declare vars
    private ExecutorService pool;
    private IRegister registerPage;


    //Constructor
    public RegisterViewModel() {
        pool = Executors.newFixedThreadPool(8);
    }

    @Override
    public void setView(IRegister registerPage) {
            this.registerPage = registerPage;
    }

    @Override
    public void returnToLogin() {
        //Cursor events handling
        JLabel signLink = registerPage.getLink();
        JFrame frame = registerPage.getFrame();
        String title = registerPage.getTitle();

        signLink.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                //Close Register Window
                frame.dispose();

                //Create Login View Model object
                ILoginViewModel loginViewModel = new LoginViewModel();
                //Open Login Window
                ILogin loginPage = new Login();
                //Setting ViewModel obj on LoginPage
                loginPage.setViewModel(loginViewModel);
                //Setting View obj on ViewModel
                loginViewModel.setView(loginPage);
                //Activating start() from Login Page
                loginPage.start();
            }

            @Override
            public void mouseExited(MouseEvent e) {
                signLink.setText(title);
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                signLink.setText("<html><a href=''>" + title + "</a></html>");
            }
        });
    }

    @Override
    public void openDesktopPage() {
        //Cursor events handling
        JButton registerBtn = registerPage.getButton();
        JFrame frame = registerPage.getFrame();
        String title = registerPage.getTitle();

        //Move to Desktop Main page after registration
        registerBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //Validate inserted values in textfields
                //Get value written in tfUsername
                String username = registerPage.getUsername();
                //Get value written in tfPassword
                String password = registerPage.getPassword();
                //Get value written in tfName
                String name = registerPage.getName();

                //if Name field is empty
                if (name.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Name has not been filled");
                }

                //if Name field starts with whitespace
                else if (Character.isWhitespace(name.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                }

                //if Username field is empty
                else if (username.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Username has not been filled");

                }
                //if Username field starts with whitespace
                else if (Character.isWhitespace(username.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                }

                //if Password field is empty
                else if (password.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Error- Password has not been filled");
                }

                //if Password field starts with whitespace
                else if (Character.isWhitespace(password.charAt(0))) {
                    JOptionPane.showMessageDialog(frame, "Error- No leading whitespaces are allowed");
                } else {
                    //Close Register Window
                    frame.dispose();
                    //Open Desktop Window
                    IDesktop desktopPage = new Desktop();
                    IDesktopViewModel desktopPageViewModel = new DesktopViewModel();
                    //Setting ViewModel obj on DesktopPage
                    desktopPage.setViewModel(desktopPageViewModel);
                    //Setting View obj on ViewModel
                    desktopPageViewModel.setView(desktopPage);
                    desktopPage.start();
                }
            }
        });
    }

//    @Override
//    public void addNewUser(JTextField tfName, JTextField tfUsername, JTextField tfPassword) {
//        pool.submit(() -> {
//            try {
//                //Get value written in tfName
//                String name = tfName.getText();
//                //Get value written in tfUsername
//                String username = tfUsername.getText();
//                //Get value written in tfPassword
//                String password = tfPassword.getText();
//
//                User user = new User();
//                user.setUserName(username);
//                user.setName(name);
//                user.setPassword(password);
//
//                Gson gson = new Gson();
//                String pReq = gson.toJson(user);
//                System.out.println(pReq);
//                //Post User details to DB
//                HttpRequest postRequest = HttpRequest.newBuilder()
//                        .uri(new URI("https://owen-wilson-wow-api.herokuapp.com/wows/random"))
//                        .POST(HttpRequest.BodyPublishers.ofString(pReq))
//                        .build();
//
//                HttpResponse<String> postResponse = HttpClient.newHttpClient().send(postRequest, HttpResponse.BodyHandlers.ofString());
//
//                System.out.println(postResponse.body());
//            }
//            catch (Exception e) {
//                e.printStackTrace();
//                //Show User details error
//                registerPage.addUserMessage();
//            }
//        });
//    }
}
