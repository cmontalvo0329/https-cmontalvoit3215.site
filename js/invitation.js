function replaceContent() {

// declaring the variables

var myRecipientName,hostName;

// setting the variable to the input field's id

// named recipientNameInput's and hostNameInput's value

myRecipientName = document.getElementById("recipientNameInput").value;

hostName=document.getElementById("hostNameInput").value;

if(myRecipientName)

//setting the HTML code in the span id recipientNamePlaceholder with the variable

document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;

if(hostName)

// setting the HTML code in the span id hostNamePlaceholder with the variable

document.getElementById("hostNamePlaceholder").innerHTML = hostName;

}