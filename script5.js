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


var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}
function showSlides(n){
  var i;
  var slides =document.getElementsByClassName("month");
  if (n >slides.length) {slideIndex =1}
  if (n <1) {slideIndex = slides.length}
  for (i=0; i<slides.length; i++){ 
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


//September notes
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

//October notes
function buttonFive(){
  document.getElementById("demoTwo").innerHTML="10/16/19 I got my proposal back today. I got approved! Mrs. Kymissis recommended doing only one experiment but I think that is too simple. I want to try doing two experiments. The only constraint is money because certain deicers are expensive. Beet juice and rock sand is cheap on Amazon and I use salt normally during snow storms. CMA is very expensive ($30 a bag) so hopefully I can find something cheaper. The next step is to type out my hypothesis, controls, variables, and procedure. I already went in-dept for my procedure in my proposal so i just have to put it in number format and add a little bit more detail. After I finish that, I am going to start reseraching and finding papers to read."
}
function buttonSix(){
  document.getElementById("demoTwo").innerHTML="10/19/19 I started researching for my topic today. Mrs. Kymissis did not say to start yet but warned us to stay to ahead so I started taking some notes. I didn't wnat to write them in my logbook first in case I formatted them wrong so I typed them up first. I reserached effects of certain types of deicers and some experiments with deicers and how effective they are. Many sources state that CMA is a very good option so I'm excited to see how that works when I experiment. I still need to research more about freezing point depression and other factors that go into how deicers work but I'm not sure how to find journals on that. I might use other reliable websites on books to reserach that part. I finished writing my hypothesis, procedure, and variables for Monday so I will pass that in on Monday. I will ask Ms. Kymissis about the reserach or she will tell us about it. I still haven't researched about CMA prices, maybe I'll look into Home Depot or Lowe's.";
}
function buttonSeven(){
  document.getElementById("demoTwo").innerHTML="10/23/19 I did a lot of research today, finding peer reviewed journals on deicing chemicals and their effect on the environment. I looked at the different types I would be testing with and their pros and cons. I also reserached about experiments involving different kinds of deicers and some articles about new chemicals made. I found a patent about using desugared molasses from beet juice to use a deicer which was really cool to read about. I still want to find an article about why deicers work and the actual science (chemical bonding) behind it. That calls for articles and newspapers or books, not peer reviewed journals so I have to look on a different database. I have not gotten my procedure back yet but I forgot to underline my materials so hopefully I can talk to Ms. Kymissis about it.";
}
function buttonEight(){
  document.getElementById("demoTwo").innerHTML="10/28/19 Today we went to the computer lab so Ms. Kymissi could explain how researching works and what she is looking for in our logbooks in regards to research. I have many sources and the resarch behind them but I need to find more peer reviewed journals and experiments. I also need to research about other parts of the experiment including concentrations of deicing substance in the snow and germination. Mrs. Kymissis also handed out the MSEF forms for us to fill out. This is pretty exciting to fill out state science fiar forms! I also need to figure out and finalize my experimental procedure for the Resaerch Plan due next Monday. I need to figure out if I am doing an every 5 minute test on the melting of ice with deicers or a total time it takes to melt data. That would impact the tables and my data slightly so I need to decide that soon. my next steps are continuing the research and finalize the procedure.";
}
function buttonNine(){
  document.getElementById("demoTwo").innerHTML="10/29/19 Today I took more notes on how deicing works more specifically the science behind deicers and the factors that are important to making a deicer an efficient deicer. I got back my procedure, variables, and hypothesis and I have a lot to fix including numbers. ON my research plan, I added tables, which was missing, and changed the wording so all the steps have similar verb usage. I played around with the dilution amount of rearranged the steps overall. Then, I added the final paragraph regarding safety, conclusions, and applications, to my research plan. Finally, I copied some notes down in my logbook so I wouldn't get too behind on my paper."
}
function buttonTen(){
  document.getElementById("demoTwo").innerHTML="10/31/19 I finished taking notes on all my sources today! I probably will find more but I think I really understand deicing and the positive and negative effects of different deicers. Although I finished taking notes, I still have to copy my notes into my log notebook so I can keep track of my notes. Additionally, I have to finish my research plan and finalize (like actually finalize) all my numbers and details.";
}

//November notes
function buttonEleven() {
  document.getElementById("demoThree").innerHTML="11/4/19 Today I passed in my MSEF forms and research plan! I finalized everything and got all the forms filled out. After school, I updated my experimental Research section by adding a paragraph that includes my experimental questions and I added another section for hypothesis. I also finished copying all my notes into my logbook. The next step after I get back about my research plan is to gather materials and start conducting my experiments.";
}
function buttonTwelve(){
  document.getElementById("demoThree").innerHTML="11/14/19 Today we had no school. During my one day break, I worked on my research paper and getting all my notes in my logbook. Unfortuantely, I messed up my work cited page and forgot a couple of papers I used so it is a little messy but not that everythign is done, it looks neater, I finished almost all of my research, just adding some transitions and in-text citations. After that, I need to write my conclusion and do a final very strict edit so I can have a concise research paper, I also have to start experimenting so my mom and I are going to gather materials these upcoming weeks.";
}
function buttonThirteen(){
  document.getElementById("demoThree").innerHTML= "I finished my research paper! It is very long but I did some editing and took out parts of the paper that did not need to be in it. I edited most of the grammar and added many in-text citations to make sure I completed everything on the rubric. I still have to go back to the study guide and make sure I did everything in the rubric. I also have to start collecting materials for my experiments so I can take photos andp ut them in my logbook. For the 1st notebook check, I need to have some proof of experimentation so I am going to copy down my naterials and take photos of them. I need to buy CMA and the beet juice deicer.";
}


//December notes 
function buttonFourteen(){
  document.getElementById("demoFour").innerHTML="12/1/19 I took all the edits Ms. Kymissis have me in my research paper and changed them in my paper. I think I am done with my paper but I want to check the rubric again to make suer I have everything a final time before submitting it. I updated my logbook as well so everything is set for the notebook check in a couple of weeks. I also have to start collecting all of my materials because I plan to start testing during Christmas break and I need to order materials online.";
}
function buttonFifteen(){
  document.getElementById("demoFour").innerHTML="12/15/19 Today I passed in my research paper that is due tomorrow. I was so happy to see that I got a 15% plagarism precentage because i was scared that I would be marked on something silly and get points deducted(although many silly things got flagged for plagarism). Iupdated my notebook for the logbook check tomorrow as well, finishing my notes and my table of contents. I have not been able to buy many of my materials because I need to find them online. The beet juice deicer came so I put that to the side. The CMA should be coming in a couple days so I will be waiting for that.";
}
function buttonSixteen(){
    document.getElementById("demoFour").innerHTML="12/24/19 I started testing today after I gathered all my materials. I first made all the solutions of the deicers and cut the filter paper to fit the petri dishes. After putting 3 filter papers in ach one, I changed the amount of solution to 5 ml. Then I put the seeds and finished doing 3 sets of the experiment II. I froze 100ml of water last night and took them out to put 10 ml of solution on the ice. Measuring temperatuer was not effective so I continued my orignal plan to measure liquid melting after specific benchmarks (15 minutes). When I finished the first set, I froze more water to test set 2 for tomorrow.";
}
function buttonSeventeen(){
    document.getElementById("demoFour").innerHTML="12/25/19 Today I am aiming to finish Set 2 and 3. I started on Set 2 early in the morning and did the exact same procedure as yesterday, only working quicker and more precise. A look from the raw data showed that similar trends with beet juice and CMA were doing the best out of the other options. Ichanged the way I am going to calculate data because of  tyime and energy. For each set, I will have four data poiints that will be each trial and measure the difference in amount melted to get the three trial data numbers. This way, I do not need to spend 10 days at least, watching and measuring ice melt. I finished and started freezing ice for the last set. To my disappointment, after taking out the third set and putting the deicing solutions, the ice did not compeltely set so large amounts of water were being accumulated and the data was everywhere. As a result, I decided to end that set, refreeze more water, leave the containers in the freezer for longer, and retest the 3rd set tomorrow.";
}
function buttonEighteen(){
    document.getElementById("demoFour").innerHTML="12/26/19 Today I finished my final set for my first experiment testing deicers efficiency. The ice was much better this time and I finished without any issue. An observation I made during all three of these sets was that the containers with slanted ice usually had a faster start melting rate most likely because the deicer could pool in one specific area and could melt a smaller surface area. Although that is a realy life example of ice in the streets, not all the containers were slanted so that could have impacted my resukts. After testing, I put all the data into the tables and made a graph. I finished calculating the averages and labelling the graphs and will start on my logbook status #2 soon.";
}

//January notes
function buttonNineteen(){
  document.getElementById("demoFive").innerHTML="
}
function buttonTwenty(){
  ddocument.getElementById("demoFive").innerHTML="
}
function buttonTwentyOne(){
  document.getElementById("demoFive").innerHTML="
}

function buttonTwentyTwo(){
  ddocument.getElementById("demoFive").innerHTML="
}
function buttonTwentyThree(){
  document.getElementById("demoFive").innerHTML="
}
function buttonTwentyFour(){
  ddocument.getElementById("demoFive").innerHTML="
}
function buttonNTwentyFive(){
  document.getElementById("demoFive").innerHTML="
}
function buttonTwentySix(){
  document.getElementById("demoFive").innerHTML="
}
function buttonTwentySeven(){
  document.getElementById("demoFive").innerHTML="
}
function buttonTwentyEight(){
  document.getElementById("demoFive").innerHTML="
}
function buttonTwentyNine(){
 document.getElementById("demoFive").innerHTML=" 
}
function buttonNThirty(){
  document.getElementById("demoFive").innerHTML="
}

//February Notes
function buttonThirtyOne(){
  document.getElementById("demoSix").innerHTML="I finished my script today. I added the conclusion and data anyalysis and printed out the final script. I know i should not sound so rehearsed and scripted but I like having an outline to follow and to guide me through my presentation. I also looked for more photos to put on my board because with the smal;er data tables, I have more room for some photos of the testing. Tomorrow, I will finish the board and start practicing my presentation.";
}
function buttonThirtyTwo(){
  document.getElementById("demoSix").innerHTML="Today I did a couple of retouchings on my board because I noticed a couple of bublles that popped up in some of the slides. I also redid the title so it looked more inline with each other and had less bubbles. I taped down all the final graphs and data tables and the column of photographs in the middle. i was not able to print out the photos for the extra space under the data tables so I will do that for tomorrow. I also practiced my presentation. Finally I did a notebook check for my logbook to see if everything is in my logbook.";
}
function buttonThirtyThree(){
  document.getElementById("demoSix").innerHTML="Today I printed out the photos and the captions for my graphs and data tables (learned in class that I needed cpations for everything on my board). I taped all the cpations and new photost on my board, so my board is finally finished! I reread my abstract and I learned that I messed up my old and new versions of my hypothesis so I have to fix that before tomorrow when everything is due.";
}
function buttonThirtyFour(){
  document.getElementById("demoSix").innerHTML="Today is the final day until everything is due. I finished my board but I have to bring it in early tomorrow because of quiz bowl practice. I have to do a final thorough check of my logbook and make sure I print out my abstract to pass in. I need to practice my presentation for t he mini-science fair in class and for the real fair on Saturday. Note to self: Good luck! You got this!!!";
}