$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        // alert("working");
      var value = $(this).val().toLowerCase();

      var windowWidth = $(window).width();
      var tableRows = $("#myTable tr").get();
      
      console.log(tableRows);

      // hide all rows, both desktop and mobile
      for (row of tableRows) {
        row.style.display = 'none';
      }

      // show desktop rows that match string
      if (windowWidth > 700) {
        var desktopRows = tableRows.filter(row => row.className === "desktop-table-row");

        var matchingRows = desktopRows.filter(row => {
          var address = $(row).find('td.address')[0].innerText;
          if (address.startsWith(value)) {
            return true;
          } else {
            return false
          }
        });

        for (row of matchingRows) {
          row.style.display = 'table-row';
        }
        
      // show mobile rows that match string
      } else {
        var mobileRows = tableRows.filter(row => row.className === "mobile-table-row");
                
        var matchingRows = mobileRows.filter(row => {
          var address = $(row).find('td span.address')[0].innerText;
          console.log({address});

          if (address.startsWith(value)) {
            return true;
          } else {
            return false
          }
        });

        for (row of matchingRows) {
          row.style.display = 'table-row';
        }
      }
      // $("#myTable tr").filter(function() {
      //   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      // });
    });
  });