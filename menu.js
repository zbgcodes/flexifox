function accordion(divID) {
  event.preventDefault(); //stops page jump
  var divs = ["boxTab0", "boxTab1", "boxTab2"];
  var dataLabels = ["dataTab0", "dataTab1", "dataTab2"];
  var visibleDiv = null;

  if (visibleDiv === divID) {
    visibleDiv = null;
  } else {
    visibleDiv = divID;
  }

  hideNonVisibleDivs();

  function hideNonVisibleDivs() {
    var i, divID, div;
    for (i = 0; i < divs.length; i++) {
      divID = divs[i];
      accordionButton = "acc" + divs[i];
      div = document.getElementById(divID);
      menuItem = document.getElementById(accordionButton);

      if (visibleDiv === divID) {
        div.style.display = "block";
        menuItem.style.background = "var(--accent-color);";
      } else {
        div.style.display = "none";
        menuItem.style.background = "";
      }
    }
  }
}				