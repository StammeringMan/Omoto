function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
}



function updateAll(ele) {
     var checkboxes = document.getElementsByTagName('input');
     for (var i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].type == 'checkbox') {
             checkboxes[i].checked = ele.checked;
         }
     }
     toggleReminderBtn(this);
 }


function toggleReminderBtn(ele){
   var checkboxes = document.getElementsByTagName('input');
   var disabled = true;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked === true) {
        disabled = false;
        break;
     }
  }
    document.getElementById('reminderBtn').disabled = disabled;
}

