$(document).ready(function(){

  swapiModule.getFilms(1, function(data) {
    console.log("Result of getFilms (page 1)", data);

    for (var result of data.results) {
      var node = document.createElement("TR");

      var node2 = document.createElement("TD");

      var node3 = document.createElement("TD");

      var node4 = document.createElement("TD");

      var node5 = document.createElement("A");

      node5.setAttribute("class", "titleLink");

      node5.setAttribute("href", result.title + ".html");

      var textnode = document.createTextNode(result.title);

      var textnode2 = document.createTextNode(result.episode_id);

      var textnode3 = document.createTextNode(result.release_date);

      node5.appendChild(textnode);

      node2.appendChild(node5);

      node3.appendChild(textnode2);

      node4.appendChild(textnode3);

      node.appendChild(node2);

      node.appendChild(node3);

      node.appendChild(node4);

      document.getElementById("myTableBody").appendChild(node);
    }
  });

  swapiModule.getFilms(1, function(data) {
    
    


  }
);

});

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


// function test() {
//     swapiModule.getFilms(1, function(data) {   
//         console.log("Result of getFilms (page 1)", data);
//     });
// }
