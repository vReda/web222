function validate(event) {
  var lat = document.getElementById("lat").value;
  var long = document.getElementById("long").value;
  valid = true;

  if (lat > 90 || lat < -90)
  {
    var error = document.getElementById("latError");
    error.append(" must be a valid Latitude (-90 to 90)");
    valid = false;
  }

  if (long > 180 || long < -180)
  {
    var error = document.getElementById("longError");
    error.append(" must be a valid Longitude (-180 to 180)");
    valid = false;
  }

  return valid; 
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
