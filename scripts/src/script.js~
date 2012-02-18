/**
 * This is the entry point for our JavaScript program
 */
function main() {
	
	var search_object;
    //your code goes here
    $("#submit_btn").click(function() {
    		    search_object = $('input:text').val();
    });
   // alert("hello world!");

   $('.carousel').carousel({
  interval: 2000
  });

    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
    var count = 0;
    
    var love_count = 0;
    
    var object_array = [];
    
    var color = 'red';
    
     var s = new Spotter("twitter.search",
     	     {q:search_object, period:120},
     	     {buffer:true, bufferTimeout:750});
     
     s.register(function(tweet) {
     	//2. Add profile images (tweet.profile_image_url)
     	 	
     	
     	
     	var profile_image = "<img src='"+tweet.profile_image_url+"'/>"
     	
     	var object = $("<p  class="+ color + ">" + profile_image + tweet.text + "</p>");
     	
     	count ++;
     	
     	if(count %2 === 0){
     	  color = 'red';
     	}
     	  else{
     	    color = 'blue';
     	  }
     	
    //object.hide();
    object_array.push(object);
    for(var i = 0; i <= object_array.length; i++){
    $(".item").prepend(object);
    //object.slideDown();
    }
    
    //Check to see if tweet has the word 'love'
    
    if(tweet.text.match(/love/i)){
       love_count = love_count+1;
    }
    
    $(".item p:gt(9)").fadeOut(200, function() {
    		    $(".item p:gt(9)").remove(); 
    });
    
    
 /*   if(count > 10){
    
      var object_to_r = $("#tweets p:last-child");
      object_to_r.fadeOut(200, function(){
        object_to_r.remove();
      });
    
    }*?/
    
    /*object_array.push(object);
    
    if(object_array.length> 11){
    	 var object_to_remove =  object_array.shift();
    	 object_to_remove.remove();
    }*/
     
     
     });
     
     s.start();
    
       
    //3. Make the tweets occur so the most recent are at the top
    
 
    
    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)


}
$(document).ready(function() {
		
main();
});
