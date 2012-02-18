/**
 * This is the entry point for our JavaScript program
 */
function main() {
	
	 var search_object = "";
    //your code goes here
    $("button:#submit_btn").click(function() {
    		    alert($('input:text').val());
    		    search_object = $('input:text').val();
    });

    var count = 0;
    
    var love_count = 0;
    
    var hate_count = 0;
    
    var object_array = [];
    
    
     var s = new Spotter("twitter.search",
     	     {q:'beiber', period:120},
     	     {buffer:true, bufferTimeout:750});
     
     s.register(function(tweet) {
     
     	 	
     	
     	
     	var profile_image = "<img src='"+tweet.profile_image_url+"'/>"
     	
     	var object = $("<p>" + profile_image + tweet.text + "</p>");
     	
     	count ++;
     	
     	
    object.hide();
    object_array.push(object);
    for(var i = 0; i <= object_array.length; i++){
    $("#tweets").prepend(object);
    object.slideDown();
    }
    
        
    if(object_array.length> 8){
    	 var object_to_remove =  object_array.shift();
    	 object_to_remove.remove();
    };
    
    //Check to see if tweet has the word 'love'
   // $(".love_info").append("<p> See how many people love" + $('input:text').val() +"</p>");
    if(tweet.text.match(/love/i)){
       love_count = love_count+1;
       if(love_count >= 0){
       	       $(function() {      
            var Lovecounter = setInterval(function() {
                if (love_count < 20) {
                    $('#loveCounter').html(love_count);
                }
            }, 1000);
        });   
       	       
       	
       }
    }
       
     
    
       // See if tweet has the word hate
      if(tweet.text.match(/hate/i)) {
       hate_count = hate_count+1;
       if(hate_count >= 0){
       	     $(function() {
            
            var hateCounter = setInterval(function() {
                if (hate_count < 20) {
                    $('#hateCounter').html(hate_count);
                }
                
            }, 1000);
        });   
             //alert("man people really hate " + $('input:text').val());
       }
     }
     
     });
     
    
   // $("#tweets p:gt(7)").fadeOut(200, function() {
    	//	    $("#tweets p:gt(7)").remove(); 
    //});
    
   
    
    

     
     
     
     
     s.start();
    
       

     }
$(document).ready(function() {
		
main();
 $(".love_info").append("<p> See how many people love" + $('input:text').val() +" below" + "</p>");
 $(".hate_info").append("<p> See how many people hate" + $('input:text').val() +" below" + "</p>");

});
