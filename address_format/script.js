let streetNumber;
let streetRoad;
let suburb;
let state;
let postCode;

document.getElementById("btn").onclick = function () {
  streetNumber = document.getElementById("1").value;

  streetRoad = document.getElementById("2").value.toUpperCase();

  suburb = document.getElementById("3").value.toUpperCase();

  state = document.getElementById("4").value.toUpperCase();

  postCode = document.getElementById("5").value;

  document.getElementById("demo").innerHTML =
    streetNumber +
    " " +
    streetRoad +
    " <br>" +
    suburb +
    " " +
    state +
    " " +
    postCode;
};
