/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function myFunction(){
  document.getElementById ("myDropdown").classList.toggle("show");
}

window.onclick= function(e) {
  if(!e.target.matches('.dropbtn')) {
    var myDropdown=
document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
