var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
// display the volunteers in the text area
// $("volunteerList").value = volunteerArray.join("\n");

// comment out the line above change this to a loop instead to loop through the array.
$("volunteerList").value = "";
for (var i = 0; i < volunteerArray.length; i++) {
$("volunteerList").value += (i+1) + ". " + volunteerArray[i][0] + " " + volunteerArray[i][1] + "\n";
}
  
};

var addVolunteer = function () {
// get the data from the form
//var volunteerString = $("first_name").value + " " + $("last_name").value;

var volunteerArr = [];

volunteerArr[0] = $("first_name").value;
volunteerArr[1] = $("last_name").value;


// store the data in an array
volunteerArray.push(volunteerArr);
  
// display the volunteers and clear the add form
displayVolunteers();
  
// get the add form ready for next entry
$("first_name").value = "";
$("last_name").value = "";
$("first_name").focus();
};


var deleteVolunteer = function () {
// get the data from the form (hint: use the same format as from the add).
//var volunteerString = $("first_name").value + " " + $("last_name").value;

var fname = $("first_name").value;
var lname = $("last_name").value;

// remove the string from the array (hint, loop through the entire list, compare the string with the item in the array.
for (var i = 0; i < volunteerArray.length; i++) {
if (volunteerArray[i][0] == fname && volunteerArray[i][1] == lname) {
volunteerArray.splice(i,1);
//delete volunteerArray[i];
break;
}
}
// display the volunteers and clear the add form
displayVolunteers();
  
// get the delete form ready for next entry
$("first_name").value = "";
$("last_name").value = "";
$("first_name").focus();
};

var clearList = function () {   
// delete the data from the arrays
volunteerArray = [];
  
// alternative way to delete all of the data from the array
// volunteerArray.length = 0;
  
// remove the volunteers data from the web page
$("volunteerList").value = "";
  
$("first_name").focus();
};

var sortList = function () {   
// sort the scores
volunteerArray.sort();
  
// display the scores
displayVolunteers();
};

var sortList_last = function () {   
// sort the scores
volunteerArray.sort(lastnamesort);

function lastnamesort(name1, name2) {
if (name1[1] === name2[1]) {
return 0;
}
else {
return (name1[1] < name2[1]) ? -1 : 1;
}
}
  
// display the scores
displayVolunteers();
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
$("add_button").onclick = addVolunteer;
$("delete_button").onclick = deleteVolunteer;
$("clear_button").onclick = clearList;
$("sort_button").onclick = sortList;
$("sort_button_last").onclick = sortList_last;
$("first_name").focus();
};
</script>

<header>
<div class="top">
<a class="logo" href="index.html">CapellaVolunteers<span class="dotcom">.org</span></a>
</div>
<nav>
<ul class="topnav">
<li><a href="index.html">Home</a>
</li>
<li><a href="invitation.html" >Invitation</a>
</li>
<li><a href="volunteer.html" class="active">Volunteers</a>
</li>
<li><a href="gallery.html">Gallery</a>
</li>
<li><a href="registration.html">Registration</a>
</li>
</ul>

</nav>
</header>
<section id="pageForm">
<form action="#">

<h1>Volunteers</h1>
<div>
<label for="first_name">First Name:</label>
<input type="text" id="first_name">
  
<label for="last_name">Last Name:</label>
<input type="text" id="last_name">

  
<input type="button" id="add_button" value="Add Volunteer">
<input type="button" id="delete_button" value="Delete Volunteer">
</div>
<h2>Volunteer List</h2>
<textarea id="volunteerList" rows="10" cols="60"></textarea>
<div>

<input type="button" id="clear_button" value="Clear Volunteers">

<input type="button" id="sort_button" value="Sort By First Name">
             
           <input type="button" id="sort_button_last" value="Sort By Last Name">
</div>

</form>
</section>
<footer>This events site is for IT3515 tasks.
</footer>
</body>

</html>