 var config = {
    apiKey: "AIzaSyA8WNiAKXApRoXk48iDn8hGGEF_LXSPeQY",
    authDomain: "timesheet-24b7c.firebaseapp.com",
    databaseURL: "https://timesheet-24b7c.firebaseio.com",
    projectId: "timesheet-24b7c",
    storageBucket: "timesheet-24b7c.appspot.com",
    messagingSenderId: "769174533846"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var start = "";
var rate = "";

$("#submit").on("click", function(event) {
	event.preventDefault();

	name = $("#employee").val();
	role = $("#role").val();
	start = $("#startDate").val();
	rate = $("#monthlyRate").val();

console.log(name);
console.log(role);
console.log(start);
console.log(rate);

  database.ref().push({
    name: name,
    role: role,
    start: start,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

})
