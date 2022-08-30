const tables = document.getElementsByClassName("table");
for (let i = 0; i < tables.length; i++) {
  tables[i].classList.add("table-bordered");
}

function openCity(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks, displayBtn;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  displayBtn = document.getElementById("dropdown-select");
  displayBtn.innerText = tabName;
}

document.getElementById("defaultOpen").click();
