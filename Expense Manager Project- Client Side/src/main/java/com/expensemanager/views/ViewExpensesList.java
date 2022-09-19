package com.expensemanager.views;

import com.github.lgooddatepicker.components.DatePicker;
import com.github.lgooddatepicker.components.DatePickerSettings;
import com.expensemanager.views.viewinterface.IViewExpensesList;
import com.expensemanager.viewModles.vminterface.IViewExpenseListViewModel;


import javax.swing.*;
import javax.swing.border.EmptyBorder;
import javax.swing.text.html.HTMLEditorKit;
import javax.swing.text.html.StyleSheet;
import java.awt.*;

import static javax.swing.GroupLayout.Alignment.*;
import static javax.swing.GroupLayout.Alignment.BASELINE;

/**
 * Class to display Login Expenses List Page
 */
public class ViewExpensesList implements IViewExpensesList {
    //Declaring ViewModel var
    private IViewExpenseListViewModel viewModel;
    //Declaring UI vars
    private String logout = "Logout";
    private String goBack = "back";
    private String title = "Display Expenses List:";
    private JLabel labelTitle,labelSubTitle, labelTo, labelFrom, labelReturn, logoutLink;
    private JLabel arrowIcon;
    private JTextField tfCategory;
    private JButton displayListBtn;
    private JFrame frame;
    private JPanel panelTop, panelMiddle, panelBottom, anotherPanel;
    private DatePicker datePickerFrom, datePickerTo;
    private JTable table;
    private JScrollPane sp;
    Color bgColorBtn = new Color(255, 221, 135);
    private static final Insets WEST_INSETS = new Insets(0, 0, 0, 0);
    private static final Insets EAST_INSETS = new Insets(0, 0, 0, 0);

    //Constructor
    public ViewExpensesList() {
        //Setting UI elements

        //Setting frame
        frame = new JFrame("Cost Manager App");

        //Display Frame
        frame.setSize(500, 580);
        frame.setVisible(true);

        //Exit on window close
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //Setting Panels
        panelTop = new JPanel();
        panelMiddle = new JPanel();
        panelBottom = new JPanel();
        anotherPanel = new JPanel();

        //Setting TextField
        tfCategory = new JTextField(8);

        //Setting Labels
        //Set Title label of page
        labelTitle = new JLabel(title);
        labelTitle.setFont(new Font("Arial", Font.BOLD, 23));
        //Set Sub Title
        labelSubTitle = new JLabel("Choose Time Period:");
        labelSubTitle.setForeground(Color.BLACK);
        labelSubTitle.setFont(new Font("Arial", Font.BOLD, 15));

        //Set labelFrom & labelTo
        labelFrom = new JLabel("From:");
        labelFrom.setFont(new Font("Arial", Font.BOLD, 13));
        labelTo = new JLabel("To:");
        labelTo.setFont(new Font("Arial", Font.BOLD, 13));

        //Set Return label
        labelReturn = new JLabel(goBack);

        //Set datePickers
        //Set DatePickerSettings
        DatePickerSettings datePickerSettings = new DatePickerSettings();
        DatePickerSettings datePickerSettings1 = new DatePickerSettings();
        datePickerSettings.setFormatForDatesBeforeCommonEra("dd.MM.yyyy");
        datePickerSettings.setFormatForDatesCommonEra("dd.MM.yyyy");
        datePickerSettings1.setFormatForDatesBeforeCommonEra("dd.MM.yyyy");
        datePickerSettings1.setFormatForDatesCommonEra("dd.MM.yyyy");

        //DatePickerFrom
        datePickerFrom = new DatePicker(datePickerSettings);
        datePickerFrom.setToolTipText("Choose Time Period");

        //DatePickerTo
        datePickerTo = new DatePicker(datePickerSettings1);
        datePickerTo.setToolTipText("Choose Time Period");

        // Set Table
        //Fetch data from DB for Rows
        String data[][] = {
                //fetch data from DB
        };

        //Set Columns
        String columns[] = {"Category", "Currency", "Sum", "Description", "Date", "Edit/Delete"};

        table = new JTable(data, columns);
        table.getTableHeader().setFont(new Font("Arial", Font.BOLD, 13));
        table.setBounds(60, 100, 400, 300);
        sp = new JScrollPane(table);

        //Set Logout label
        logoutLink = new JLabel(logout);
        logoutLink.setFont(new Font("Arial", Font.BOLD, 11));
        logoutLink.setForeground(Color.darkGray);

        //Change Logout Link attributes
        HTMLEditorKit kit = new HTMLEditorKit();
        StyleSheet styleSheet = kit.getStyleSheet();
        styleSheet.addRule("a {color:#404040;}");
        styleSheet.addRule("a {text-decoration: none}");

        //Setting DisplayList Button
        displayListBtn = new JButton("Display List");

        //Set Logout link
        //Set cursor to Hand icon once the cursor is on top of the link
        logoutLink.setCursor(new Cursor(Cursor.HAND_CURSOR));

        //Set Empty Border to logoutLink
        EmptyBorder border = new EmptyBorder(0, 150, 0, 0);
        logoutLink.setBorder(border);

        //Set Return link
        //Set cursor to Hand icon once the cursor is on top of the link
        labelReturn.setCursor(new Cursor(Cursor.HAND_CURSOR));
    }

    public void start() {
        //Setting margins & borders to DisplayList button
        setButtonShape();

        //Setting the layout managers
        frame.setLayout(new BorderLayout(0,0));

        //Building Top Panel - Header
        buildTopPanel();
        //Build Middle Panel
        buildMiddlePanel();

        //Adding panels to frame
        frame.add(panelTop, BorderLayout.NORTH);
        frame.add(panelMiddle, BorderLayout.CENTER);

        //Display Table according to selected dates
        viewModel.displayExpensesList();
        viewModel.displayExpensesList();

        //Return to Desktop Page when clicking on "back" link
        viewModel.returnToDesktop();

        //Logout from the System
        viewModel.setLinkToLogoutFromPage();
    }

    //Overriding Interface Functions
    public void setViewModel(IViewExpenseListViewModel viewExpenseListViewModel) {
        viewModel = viewExpenseListViewModel;
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
         * Method to build Middle Panel
         */

        //Set Layout Manager for panel
        panelMiddle.setLayout(new BorderLayout(0,10));

        //Add Empty Border to sub-title label
        EmptyBorder labBorder = new EmptyBorder(10,20,0,0);
        labelSubTitle.setBorder(labBorder);

        //Add Empty Border to DatePickers
        EmptyBorder dateBorderFrom = new EmptyBorder(0,0,0,20);
        EmptyBorder dateBorderTo = new EmptyBorder(0,0,0,20);

        //Add to panel
        anotherPanel.add(labelFrom, createGbc(0,0));
        anotherPanel.add(datePickerFrom, createGbc(1,0));
        anotherPanel.add(labelTo, createGbc(2,0));
        anotherPanel.add(datePickerTo, createGbc(3,0));
        anotherPanel.add(displayListBtn, createGbc(4,0));
        anotherPanel.add(sp, createGbc(2,0));

        panelMiddle.add(labelSubTitle,BorderLayout.NORTH);
        panelMiddle.add(anotherPanel, BorderLayout.CENTER);
    }

    public void buildBottomPanel() {
        /*
         * Method to build Bottom Panel
         */

//        panelBottom.setLayout(new GridBagLayout());
        panelBottom.setBackground(Color.yellow);

        panelBottom.add(displayListBtn);
    }

    public void setButtonShape() {
        /*
         * Method to set rounded shape & color of AddCategory button
         */
        displayListBtn.setBorder(BorderFactory.createLineBorder(Color.black));
        displayListBtn.setBackground(bgColorBtn);
        displayListBtn.setFont(new Font("Arial", Font.BOLD, 14));
        displayListBtn.setForeground(Color.BLACK);
        displayListBtn.setPreferredSize(new Dimension(110,30));
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
    public JButton getButton() {
        return this.displayListBtn;
    }
    public DatePicker getDatePickerFrom() {
        return this.datePickerFrom;
    }
    public DatePicker getDatePickerTo() {
        return this.datePickerTo;
    }
    public JLabel getLogoutLabel() { return this.logoutLink; }
    public String getLogoutString() { return this.logout; }
    public JTable getTable() { return this.table; }


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

