package com.expensemanager.views;

import com.expensemanager.views.viewinterface.IAddNewCategory;
import com.expensemanager.viewModles.vminterface.IAddNewCategoryViewModel;


import javax.swing.*;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;
import javax.swing.text.html.HTMLEditorKit;
import javax.swing.text.html.StyleSheet;
import java.awt.*;
import java.awt.event.*;

import static javax.swing.GroupLayout.Alignment.*;
import static javax.swing.GroupLayout.Alignment.BASELINE;

/**
 * Class to display Add New Category Page
 */
public class AddNewCategory implements IAddNewCategory {
    //Declaring ViewModel var
    private IAddNewCategoryViewModel viewModel;
    //Declaring UI vars
    private String logout = "Logout";
    private String goBack = "back";
    private String title = "Add A New Category:";
    private JLabel labelTitle,labelCategory, labelReturn, logoutLink;
    private JLabel arrowIcon;
    private JTextField tfCategory;
    private JButton addCategoryBtn;
    private JFrame frame;
    private JPanel panelTop, panelMiddle, panelMidLeft, panelMidRight, panelBottom, navPanel1, navPanel2;
    Color bgColorBtn = new Color(233, 69, 96);
    private static final Insets WEST_INSETS = new Insets(0, 0, 0, 0);
    private static final Insets EAST_INSETS = new Insets(0, 0, 0, 0);

    //Constructor
    public AddNewCategory() {
        //Setting UI elements

        //Setting frame
        frame = new JFrame("Cost Manager App");

        //Display Frame
        frame.setSize(450, 530);
        frame.setVisible(true);

        //Exit on window close
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //Setting Panels
        panelTop = new JPanel();
        panelMiddle = new JPanel();
        panelBottom = new JPanel();
        navPanel1 = new JPanel();
        navPanel2 = new JPanel();
        panelMidLeft = new JPanel();
        panelMidRight = new JPanel();

        //Setting TextField
        tfCategory = new JTextField(8);

        //Setting Labels
        //Set Title label of page
        labelTitle = new JLabel(title);
        labelTitle.setFont(new Font("Arial", Font.BOLD, 23));

        //Set Form labels
        //Set Category label
        labelCategory = new JLabel("Category Name *");
        labelCategory.setFont(new Font("Arial", Font.BOLD, 15));
        //Set Return label
        labelReturn = new JLabel(goBack);

        //Setting Nav Panels - Size & Color
        navPanel1.setPreferredSize(new Dimension(20, 40));
        navPanel2.setPreferredSize(new Dimension(20, 40));
        navPanel1.setBackground(Color.lightGray);
        navPanel2.setBackground(Color.lightGray);
        //Set Logout label
        logoutLink = new JLabel(logout);
        logoutLink.setFont(new Font("Arial", Font.BOLD, 11));
        logoutLink.setForeground(Color.darkGray);

        //Change Logout Link attributes
        HTMLEditorKit kit = new HTMLEditorKit();
        StyleSheet styleSheet = kit.getStyleSheet();
        styleSheet.addRule("a {color:#404040;}");
        styleSheet.addRule("a {text-decoration: none}");

        //Setting AddExpense Button
        addCategoryBtn = new JButton("Add Category");

        //Set Logout link
        //Set cursor to Hand icon once the cursor is on top of the link
        logoutLink.setCursor(new Cursor(Cursor.HAND_CURSOR));

        //Set Empty Border to logoutLink
        EmptyBorder border = new EmptyBorder(0, 120, 0, 0);
        logoutLink.setBorder(border);

        //Set Return link
        //Set cursor to Hand icon once the cursor is on top of the link
        labelReturn.setCursor(new Cursor(Cursor.HAND_CURSOR));

    }
    public void start() {
        //Setting margins & borders to AddExpense button
        setButtonShape();

        //Setting the layout managers
        frame.setLayout(new BorderLayout(0,0));

        //Building Top Panel - Header
        buildTopPanel();
        //Middle Panel
        buildMiddlePanel();
        //Bottom Panel
        buildBottomPanel();

        //Adding panels to frame
        frame.add(panelTop, BorderLayout.NORTH);
        frame.add(panelMiddle, BorderLayout.CENTER);
        frame.add(panelBottom, BorderLayout.SOUTH);

        //Return to Desktop Page when clicking on "back" link
        viewModel.returnToDesktop();

        //Return to Desktop Page after adding a new category
        viewModel.addNewCategory();

        //Logout from the System
        viewModel.setLinkToLogoutFromPage();
    }

    //Overriding Interface Functions
    public void setViewModel(IAddNewCategoryViewModel addNewCategoryViewModel) {
        viewModel = addNewCategoryViewModel;
    }

    public void buildTopPanel() {
        /*
         * Method to build Top Panel
         */
        //Setting background color for Top Panel
        panelTop.setBackground(Color.PINK);
        //Setting border
        panelTop.setBorder(new EmptyBorder(8, 10, 10, 10));

        //Define GroupLayout manager for Top Panel with gaps
        GroupLayout groupLayout = new GroupLayout(panelTop);
        groupLayout.setAutoCreateGaps(true);
        groupLayout.setAutoCreateContainerGaps(true);

        panelTop.setLayout(groupLayout);

        //Setting labels at Group Layout sequentially
        groupLayout.setHorizontalGroup(
                groupLayout.createSequentialGroup()
                        .addGroup(groupLayout.createParallelGroup(LEADING).addComponent(labelReturn).addComponent(labelTitle))
                        .addGroup(groupLayout.createParallelGroup(TRAILING).addComponent(logoutLink)));

        groupLayout.setVerticalGroup(groupLayout.createSequentialGroup()
                .addGroup(groupLayout.createParallelGroup(BASELINE).addComponent(labelReturn).addComponent(logoutLink))
                .addGroup(groupLayout.createParallelGroup(BASELINE).addComponent(labelTitle)));
    }

    public void buildMiddlePanel() {
        /*
         * Method to build Middle-Top Panel Located inside Middle Panel
         */

        panelMiddle.setLayout(new GridBagLayout());
        panelMiddle.setBackground(Color.lightGray);

        //Setting borders to labels & panel
        EmptyBorder panBorder = new EmptyBorder(0,20,0,20);
        EmptyBorder border = new EmptyBorder(25,0,25,0);
        Border tfBorder = BorderFactory.createLineBorder(Color.BLACK, 1);

        panelMiddle.setBorder(panBorder);
        labelCategory.setBorder(border);

        panelMiddle.add(labelCategory, createGbc(0, 0));
        panelMiddle.add(tfCategory, createGbc(1,0));
    }

    public void buildBottomPanel() {
        /*
         * Method to build Bottom Panel
         */
        addCategoryBtn.setPreferredSize(new Dimension(135,30));
        panelBottom.setBorder(new EmptyBorder(0, 0, 30, 230));
        panelBottom.add(addCategoryBtn, FlowLayout.LEFT);
        panelBottom.setBackground(Color.lightGray);
    }

    public void setButtonShape() {
        /*
         * Method to set rounded shape & color of AddCategory button
         */
        addCategoryBtn.setBorder(BorderFactory.createLineBorder(Color.black));
        addCategoryBtn.setBackground(bgColorBtn);
        addCategoryBtn.setFont(new Font("arial", Font.BOLD, 14));
        addCategoryBtn.setForeground(Color.BLACK);
        addCategoryBtn.setPreferredSize(new Dimension(110,30));
    }

    //Getters for ViewModel
    public JLabel getReturnLabel() {
        return this.labelReturn;
    }
    public JFrame getFrame() {
        return this.frame;
    }
    public String getString() {
        return this.goBack;
    }
    public String getCategory() { return this.tfCategory.getText(); }
    public JButton getButton() { return this.addCategoryBtn; }
    public JLabel getLogoutLabel() { return this.logoutLink; }
    public String getLogoutString() { return this.logout; }

    //Set Constraints to GridBag Layout Components
    private static GridBagConstraints createGbc(int x, int y) {
        GridBagConstraints gbc = new GridBagConstraints();
        //Gridx = the gridx position
        gbc.gridx = x;
        //Gridy = the gridy position
        gbc.gridy = y;
        //Gridwidth = the cell span in x-direction
        gbc.gridwidth = 1;
        //Gridheight = the cell span in y-direction
        gbc.gridheight = 1;

        //Determine where to place the component within the display area
        gbc.anchor = (x == 0) ? GridBagConstraints.WEST : GridBagConstraints.EAST;
        //Resize component's area if needed
        gbc.fill = GridBagConstraints.HORIZONTAL;

        //Set spacing between elements
        gbc.insets = (x == 0) ? WEST_INSETS : EAST_INSETS;

        //Weightx = cell weight in x-direction
        gbc.weightx = (x == 0) ? 0.1 : 1.0;
        //Weighty = cell weight in y-direction
        gbc.weighty = 0.0;

        return gbc;
    }
}

