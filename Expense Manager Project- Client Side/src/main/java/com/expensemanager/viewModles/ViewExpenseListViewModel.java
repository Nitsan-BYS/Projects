package com.expensemanager.viewModles;

import com.expensemanager.viewModles.vminterface.IDesktopViewModel;
import com.expensemanager.viewModles.vminterface.IViewExpenseListViewModel;
import com.expensemanager.views.Desktop;
import com.expensemanager.views.viewinterface.IDesktop;
import com.expensemanager.views.viewinterface.IViewExpensesList;
import com.github.lgooddatepicker.components.DatePicker;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
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
import java.sql.ResultSetMetaData;
import java.time.LocalDate;
import java.util.Vector;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ViewExpenseListViewModel implements IViewExpenseListViewModel {
    private ExecutorService pool;

    //Create References to Pages
    private IViewExpensesList viewExpensesListPage;

    //Constructor
    public ViewExpenseListViewModel() {
        pool = Executors.newFixedThreadPool(8);
    }

    @Override
    public void setView(IViewExpensesList viewExpensesList) {
        this.viewExpensesListPage = viewExpensesList;
    }

    @Override
    public void returnToDesktop() {
        //Get Values from AddNewExpense Page
        JLabel labelReturn = viewExpensesListPage.getReturnLabel();
        JFrame frame = viewExpensesListPage.getFrame();
        String goBack = viewExpensesListPage.getString();

        //Return Label events handling
        labelReturn.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                //Close AddNewExpense Window
                frame.dispose();
                //Go back to Main Desktop Window
                IDesktop desktopPage = new Desktop();
                IDesktopViewModel desktopPageViewModel = new DesktopViewModel();
                //Setting ViewModel obj on DesktopPage
                desktopPage.setViewModel(desktopPageViewModel);
                //Setting View obj on ViewModel
                desktopPageViewModel.setView(desktopPage);
                //Activating start() function of Desktop Page
                desktopPage.start();
            }

            @Override
            public void mouseExited(MouseEvent e) {
                labelReturn.setText(goBack);
            }
        });
    }

    @Override
    public void displayExpensesList() {
        //Get Elements from ViewExpenseList Page
        JButton displayListBtn = viewExpensesListPage.getButton();
        JFrame frame = viewExpensesListPage.getFrame();
        DatePicker datePickerFrom = viewExpensesListPage.getDatePickerFrom();
        DatePicker datePickerTo = viewExpensesListPage.getDatePickerTo();

        Vector<Object> columnNames = new Vector<Object>();
        Vector<Object> data = new Vector<Object>();

        //Display Table according to selected dates
        displayListBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //If displayListBtn is Clicked
//                if(e.getSource() == displayListBtn) {
//                    System.out.println("Clicked");
//                }
        //lines 88-89 from JDBC
        //ResultSetMetaData rsmd = rs.getMetaData();
        //int columns = rsmd.getColumnCount();

        //Connect To Database via JDBC
        //Read Data from Table to ResultSet - also via JDBC

        //Get column names

//        for (int i = 1; i <= columns; i++) {
//            columnNames.addElement( md.getColumnName(i) );
//        }
//
//        //Get Rows Data
//        while (rs.next()) {
//            Vector<Object> row = new Vector<Object>(columns);
//            for (int i = 1; i <= columns; i++) {
//                row.addElement( rs.getObject(i) );
//            }
//
//            data.addElement(row);
//        }

        //Close connection- Occurs in JDBC

        //Create table with database data

        /*DefaultTableModel model = new DefaultTableModel(data, columnNames)
        {
            @Override
            public Class getColumnClass(int column)
            {
                for(int row = 0; row < getRowCount(); row++) {
                    Object o = getValueAt(row, column);

                    if (o != null)
                    {
                        return o.getClass();
                    }
                }

                return Object.class;
            }
        };*/

//        JTable table = viewExpensesListPage.getTable();
//        JScrollPane scrollPane = new JScrollPane(table);
//        getContentPane().add( scrollPane );


                //Store dates chosen by user
                LocalDate localDateFrom = datePickerFrom.getDate();
                LocalDate localDateTo = datePickerTo.getDate();

                //Display popup error message if one of the dates or both were not chosen
                if(localDateFrom == null || localDateTo == null){
                    JOptionPane.showMessageDialog(frame, "Error! Dates Were Not Chosen");
                    //NullPointerException will be thrown
                }

                //Display popup error message if dateFrom is *after* dateTo
                if(localDateFrom.isAfter(localDateTo)) {
                    JOptionPane.showMessageDialog(frame, "Error! 'From' date must be before 'To' date");
                }

                //Check if dates selected
                if (localDateFrom != null && localDateTo != null) {
                    //Show selected dates in terminal
                    System.out.println(localDateFrom);
                    System.out.println(localDateTo);
                }
            }
        });
    }


    @Override
    public void setLinkToLogoutFromPage() {
        JLabel logoutLink = viewExpensesListPage.getLogoutLabel();
        JFrame frame = viewExpensesListPage.getFrame();
        String logout = viewExpensesListPage.getLogoutString();

        //Cursor events handling
        logoutLink.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                //Display Confirmation Dialog before user logs out
                String[] options = {"Yes", "Not Now"};
                int confirmLogout = JOptionPane.showOptionDialog(
                        frame,
                        "Are You Sure?",
                        "Logout",
                        JOptionPane.YES_NO_OPTION,
                        JOptionPane.QUESTION_MESSAGE,
                        null, options, options[0]);

                //If user clicks "YES"
                if (confirmLogout == JOptionPane.YES_OPTION) {
                    //Close Login Window
                    frame.dispose();
                }
            }

            @Override
            public void mouseExited(MouseEvent e) {
                logoutLink.setText(logout);
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                logoutLink.setText("<html><a href=''>" + logout + "</a></html>");
            }
        });
    }

    @Override
    public void deleteExpense(String URI) throws URISyntaxException, IOException, InterruptedException {
        //Get User ID for Delete
        String deleteEndpoint = ""; //API
        HttpRequest deleteRequest = HttpRequest.newBuilder()
                .uri(new URI(deleteEndpoint))
                .DELETE()
                .build();

        System.out.println("Deleted");
    }
}
