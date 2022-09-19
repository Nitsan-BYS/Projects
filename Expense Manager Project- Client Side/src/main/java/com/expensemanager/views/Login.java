package com.expensemanager.views;

import com.expensemanager.views.viewinterface.ILogin;
import com.expensemanager.viewModles.vminterface.ILoginViewModel;
import com.expensemanager.views.viewinterface.IRegister;

import java.awt.*;

import javax.swing.*;
import javax.swing.border.CompoundBorder;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;
import javax.swing.text.html.HTMLEditorKit;
import javax.swing.text.html.StyleSheet;

/**
 * Class to Login User to the System
 */
public class Login implements ILogin {

    //Declaring ViewModel var
    private ILoginViewModel viewModel;
    private IRegister registerPage;

    //Declaring UI vars
    private String title = "Register";
    private JLabel hyperlink = new JLabel(title);
    private JFrame frame;
    private EmptyBorder borderLabel;
    private LineBorder lineBorder;
    private CompoundBorder compoundBorder;
    private JLabel labelHeader, labelUser, labelPass, labelNotReg, labelCRights;
    private JPanel panelTop, panelMiddle, panelMidBottom, panelMidMidBottom, panelBottom;
    private JPanel anotherPanel, btnPanel, navPanel1, navPanel2, panelMidTop;
    private JTextField tfUsername, tfPassword;
    private JButton loginBtn;

    //Constructor
    public Login() {

        //Setting UI elements
        frame = new JFrame("Cost Manager App");
//        frame.setLayout(new BoxLayout(frame.getContentPane(), BoxLayout.PAGE_AXIS));
        frame.setLayout(new BorderLayout(5, 5));

        //Setting Panels
        panelTop = new JPanel();
        panelMiddle = new JPanel();
        panelMidBottom = new JPanel();
        panelMidMidBottom = new JPanel();
        panelBottom = new JPanel();
        anotherPanel = new JPanel();
        panelMidTop = new JPanel();
        btnPanel = new JPanel();
        navPanel1 = new JPanel();
        navPanel2 = new JPanel();
        navPanel1.setPreferredSize(new Dimension(20,40));
        navPanel2.setPreferredSize(new Dimension(20,40));
        lineBorder = new LineBorder(Color.black, 1, false);
        borderLabel = new EmptyBorder(5, 0, 5, 0);
        compoundBorder = new CompoundBorder(lineBorder,borderLabel);

        //Setting Labels
        labelHeader = new JLabel("Welcome To Cost Manager!", JLabel.CENTER);
        labelUser = new JLabel("Username *");
        labelUser.setFont(new Font("Arial", Font.BOLD, 15));
        labelPass = new JLabel("Password *");
        labelPass.setFont(new Font("Arial", Font.BOLD, 15));
        labelNotReg = new JLabel("Not Registered Yet?", JLabel.CENTER);
        labelNotReg.setFont(new Font("Arial", Font.BOLD, 15));
        hyperlink.setFont(new Font("Arial", Font.BOLD, 15));

        //Setting Text Fields
        tfUsername = new JTextField(10);
        tfUsername.setBorder(compoundBorder);
        tfPassword = new JTextField(10);
        tfPassword.setBorder(compoundBorder);

        //Setting LOGIN Button
        Color btnColor = new Color(63,197,84);
        loginBtn = new JButton("LOGIN");
        loginBtn.setBorder(BorderFactory.createLineBorder(Color.black));
        loginBtn.setBackground(btnColor);

        //Setting CRights Label
        labelCRights = new JLabel("© Nitsan Ben Yehuda & Adva Apelboim");
    }

    public void start() {
        //Set Register Link
        viewModel.openRegisterPage();
        //setting the layout managers
        //Building Top Panel - Header
        buildTopPanel();

        //Building Middle Panel
        //PanelMiddle acting as component
        panelMiddle.setLayout(new BorderLayout());

        //Building MidTop Panel
        buildMidTopPanel();

        //Building MidBottom Panel
          buildMidBottomPanel();

        //Building MidMidBottom Panel
        panelMidMidBottom.setBorder(new EmptyBorder(50, 0, 20, 0));
        panelMiddle.add(panelMidMidBottom, BorderLayout.SOUTH);

        //Building Bottom Panel
          buildBottomPanel();

       //Open Desktop Page from Primary Page
        viewModel.openDesktopPage();

        //Set color Purple for hyperlink
        Color color = new Color(150,123,255);
        hyperlink.setForeground(color);

        //Change Link color
        HTMLEditorKit kit = new HTMLEditorKit();
        StyleSheet styleSheet = kit.getStyleSheet();
        styleSheet.addRule("a {color:#554994;}");

        //Set cursor to Hand icon once the cursor is on top of the link
        hyperlink.setCursor(new Cursor(Cursor.HAND_CURSOR));


        btnPanel.setLayout(new GridBagLayout());
        anotherPanel.setLayout(new GridLayout(2,1));

        //Adding panels to frame
        frame.add(panelTop, BorderLayout.NORTH);
        frame.add(panelMiddle, BorderLayout.CENTER);

        panelMiddle.add(panelMidTop, BorderLayout.NORTH);
        panelMiddle.add(panelMidBottom, BorderLayout.CENTER);

        frame.add(navPanel1, BorderLayout.EAST);
        frame.add(navPanel2, BorderLayout.WEST);
        frame.add(panelBottom, BorderLayout.SOUTH);

        //Display Frame
        frame.setSize(450, 530);
        frame.setVisible(true);

        //Exit on window close
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    //Overriding Interface Functions
    public void setViewModel(ILoginViewModel loginVM) {
        this.viewModel = loginVM;
    }

    public void buildTopPanel() {
        /*
         * Method to build Top Panel
         */
        panelTop.setBackground(Color.lightGray);
        panelTop.setBorder(new EmptyBorder(8, 10, 8, 10));
        labelHeader.setFont(new Font("Arial", Font.BOLD, 25));
        panelTop.add(labelHeader);
    }

    public void buildBottomPanel() {
        /*
         * Method to build Bottom Panel
         */
        panelBottom.setLayout(new BorderLayout());
        loginBtn.setPreferredSize(new Dimension(90,30));
        btnPanel.add(loginBtn);
        anotherPanel.add(btnPanel);
        labelCRights.setBorder(new EmptyBorder(13,0,0,0));
        anotherPanel.add(labelCRights);

        labelCRights.setHorizontalAlignment(JLabel.CENTER);
        panelBottom.add(anotherPanel, BorderLayout.CENTER);
        panelBottom.setBorder(new EmptyBorder(0, 0, 20, 0));
    }

    public void buildMidTopPanel() {
        /*
         * Method to build Middle-Top Panel Located inside Middle Panel
         */
        panelMidTop.setLayout(new GridBagLayout());
        //Set constraints for GridBagLayout components
        GridBagConstraints gbc = createGbc(0, 0);
        //Set Empty border between components
        panelMidTop.setBorder(new EmptyBorder(90, 0, 50, 0));

        panelMidTop.add(labelUser,createGbc(0, 0));
        panelMidTop.add(tfUsername, createGbc(1, 0));
        panelMidTop.add(labelPass, createGbc(0, 1));
        panelMidTop.add(tfPassword, createGbc(1, 1));
    }

    public void buildMidBottomPanel() {
        /*
         * Method to build Middle-Bottom Panel Located inside Middle Panel
         */
        panelMidBottom.setLayout(new GridLayout(2,1));
        panelMidBottom.setBackground(Color.WHITE);
        panelMidBottom.add(labelNotReg);
        hyperlink.setHorizontalAlignment(JLabel.CENTER);
        panelMidBottom.add(hyperlink);
    }

    //Get fields for ViewModel
    public JLabel getHyperlink() { return this.hyperlink; }
    public JFrame getFrame() {
        return this.frame;
    }
    public String getTitle() {
        return this.title;
    }
    public String getUsername() { return this.tfUsername.getText(); }
    public String getPassword() { return this.tfPassword.getText(); }
    public JButton getButton() { return this.loginBtn; }

    //Set Constraints to GridBag Layout Components
    private static GridBagConstraints createGbc(int x, int y) {
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.gridx = x;
        gbc.gridy = y;
        gbc.fill = GridBagConstraints.HORIZONTAL;
        int gap = 6;
        gbc.insets = new Insets(gap, gap + 2 * gap * x, gap, gap);
        return gbc;
    }
}