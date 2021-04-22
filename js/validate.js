function validate(event) {
  var lat = document.getElementById("lat").value;
  var long = document.getElementById("long").value;
  valid = true;

  if (lat > 90 || lat < -90 || isNaN(lat))
  {

    document.getElementById("latError").style.visibility="visible";
    valid = false;
  }
  else
  {
    document.getElementById("latError").style.visibility="hidden"; 
  }

  if (long > 180 || long < -180 || isNaN(long))
  {

    document.getElementById("longError").style.visibility="visible";
    valid = false;
  }
  else
  {
    document.getElementById("longError").style.visibility="hidden";
  }

  return valid; 
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
