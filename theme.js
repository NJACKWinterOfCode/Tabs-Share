var themeType = "light";
var container = document.getElementsByClassName("container");
var panelHeading = document.getElementsByClassName("panel-heading");
var listGroupItem = document.getElementsByClassName("list-group-item");
var panelTitle = document.getElementsByClassName("panel-title");
var imgCircle = document.getElementsByClassName("circle");
var panel = document.getElementsByClassName("panel");
var tab_content = document.getElementsByClassName("tab-content");
var navTab = document.getElementsByClassName("nav-tabs");
document.addEventListener("DOMContentLoaded", function() {
  var theme = document.getElementById("theme");
  theme.addEventListener("click", function() {
    changeTheme();
  });
});

function changeTheme() {
  if (themeType === "light") {
    // Dark mode
    for (let i = 0; i < listGroupItem.length; i++) {
      listGroupItem[i].style.color = "#fff";
    }
    for (let i = 0; i < panelTitle.length; i++) {
      panelTitle[i].style.color = "white";
    }
    for (let i = 0; i < panel.length; i++) {
      panel[i].style.backgroundColor = "#424242";
      panel[i].style.backgroundImage = 'url(../icons/panel-dark.jpg)';
    }
    for (let i = 0; i < container.length; i++) {
      container[i].style.backgroundColor = "#212121";
      container[i].style.backgroundImage = 'url(../icons/panel-dark.jpg)';
    }
    themeType = "dark";
  } else {
    // Light mode
    for (let i = 0; i < listGroupItem.length; i++) {
      listGroupItem[i].style.color = "#000";
    }
    for (let i = 0; i < panelTitle.length; i++) {
      panelTitle[i].style.color = "black";
    }
    for (let i = 0; i < panel.length; i++) {
      panel[i].style.backgroundColor = "#fff";
      panel[i].style.backgroundImage = 'url(../icons/panel-light.jpg)'
    }
    for (let i = 0; i < container.length; i++) {
      container[i].style.backgroundColor = "#fff";
      container[i].style.backgroundImage = 'url(../icons/panel-light.jpg)'
    }
    themeType = "light";
  }
}
