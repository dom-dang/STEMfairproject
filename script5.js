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

function buttonThree(){
  document.getElementById("demo").innerHTML = "9/24/19 Today in class, we worked on our proposals. I haven't got the chance to ask Mrs. Kymissis about my project yet so that is my goal for the upcoming weeks. I finished my proposal after receiving edits from my mother and sister. I spent this afternoon copying my propsal into my notebook and I still have to fix some grammatical errors I found when copying over. After I pass into my paper (some time this week) I need to start researching the types of DIS and their costs and availability.";
}

function buttonFour(){
  document.getElementById("demo").innerHTML = "9/28/19 The project proposal is due on Monday next week. I edited my propsal and added a few changes I found from copying my propsal in my logbook. Hopefully Ms. Kymissis can find some errors so I can fix and consult her for advice. After the proposal is passed in, I need to make a list and put in my logbook the variables and controlled variables. Other than that, I have to start looking for deicing substances and start gathering materials."
}

function buttonFive(){
  document.getElementById("demoTwo").innerHTML="I got my proposal back today"
}