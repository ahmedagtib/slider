// get Slider Items | Array.form [ES6 feature]
   var sliderImages=Array.from(document.querySelectorAll('.container img'));
// get number of slides
   var slidercount=sliderImages.length;
 // Set Current slide 
   var  currentSlide = 1;
  // slide Number string Element
  var slideNumberElemnt=document.getElementById('slide-number'); 
  // previous and next buttons
  var  nextButton=document.getElementById('next');
  var  prevButton=document.getElementById('prev');

  //handle click on previous and next  button
  nextButton.onclick = nextSlide;
  prevButton.onclick = prevSlide;

  // craete  the Main UL Element 
  var paginationElement = document.createElement('ul');
  // set ID on created Ul Element 
  paginationElement.setAttribute('id','pagination-ul');
  // create list itmes based on slides count
   for(var i=1;i<=slidercount;i++){
      // craete the li
      var paginationItem= document.createElement('li');
          paginationItem.setAttribute('data-index',i);
      //set item content 
          paginationItem.appendChild(document.createTextNode(i));
      // append items to the main ul list 
         paginationElement.appendChild(paginationItem);              
   } 
  //add the created ul Element the page
   document.getElementById('indictors').appendChild(paginationElement);
  // get the new created Ul
   var paginationcreatedUl = document.getElementById('pagination-ul');
  // get pagination Items | Array.form [ES6 feature]
    var pagintionsBullts =Array.from(document.querySelectorAll('#pagination-ul li'));
  // loop through all bullets Items
     for (var i=0;i<pagintionsBullts.length;i++){
       	   pagintionsBullts[i].onclick=function(){
       	   	 currentSlide=parseInt(this.getAttribute('data-index'));
       	   	  theChecker();
       	   }
       }  

  // Trigger the checker function 
     theChecker();


  //next slide function 
  function nextSlide(){
  	if(nextButton.classList.contains('disbabled')){
          return false;
  	 }else{
  		currentSlide++;
  		theChecker();
  	 }
  }
  //previous slide function 
  function prevSlide(){
  	if(prevButton.classList.contains('disbabled')){
          return false;
  	 }else{
  		currentSlide--;
  		theChecker();
  	 }
  }
 //create the checker function 
 function theChecker(){
 	//set the slide number
 	slideNumberElemnt.textContent ='slide #'+(currentSlide) + ' of '+(slidercount);
 	// remove all active classes 
 	removeAllActive();
    //set active class on Current slide
    sliderImages[currentSlide - 1].classList.add('active');
    //set active class on Current pagination item
    paginationcreatedUl.children[currentSlide - 1].classList.add('active');
    //check if current slide is the first
    if(currentSlide == 1){
    	// add disbabled class on previous Button
    	  prevButton.classList.add('disabled');
    }else{
    	// remove disbabled class on the previous Button
    	  prevButton.classList.remove('disabled');
     }
     //check if current slide is the last
    if(currentSlide == slidercount){
    	// add disbabled class on next Button
    	  nextButton.classList.add('disabled');
    }else{
    	// remove disbabled class on the next Button
    	  nextButton.classList.remove('disabled');
     }
 }

//Remove all active classes fropm images and pagination bullets
function removeAllActive(){
	//loop through images
	sliderImages.forEach(function(img){
         img.classList.remove('active');
	});
   //loop through pagination bulltes
  	pagintionsBullts.forEach(function(bullet){
       bullet.classList.remove('active');
  	});
}
