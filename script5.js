/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function buttonOne(){
  document.getElementById("demo").innerHTML = "9/9/19 Today I set up my logbook. I still need tabs and to organize it.";
}

function buttonTwo(){
  document.getElementById("demo").innerHTML = "9/22/19 I worked on my project proposal today because it is due in a week from tomorrow. I managed to finish it in 2 pages which I am proud of because it is short and precise. I am worried if my writing is not professional so I making sure I check and edit my paper over multiple times by multiple people so see if it is presentable. I plan to pass in my propsal early so I can start on other goals like writing out the variables and finalizing my procedure and materials.";
}