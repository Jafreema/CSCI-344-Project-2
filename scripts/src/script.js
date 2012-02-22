/**
 * This is the entry point for our JavaScript program
 */
function main() {
	var loveInfo;
	var buttonCount;
	var hateInfo;
	var textbox_string;
    //your code goes here
    $("button:#submit_btn").click(function() {
    		    buttonCount++;
    	loveInfo = "<p> This many people love " + $('input:text').val()  + "</p>"
    	hateInfo ="<p> This many people hate " + $('input:text').val()  + "</p>"
    	textbox_string = $('input:text').val();	    
     $(".love_info").prepend(loveInfo);
     $(".hate_info").prepend(hateInfo);		    
    		
   // });

    var count = 0;
    
    var love_count = 0;
    
    var hate_count = 0;
    
    if(buttonCount >=1){
     	 
     	     s.stop();
     };
    
    
     var s = new Spotter("twitter.search",
     	     {q:textbox_string, period:120},
     	     {buffer:true, bufferTimeout:750});
     
     s.register(function(tweet) {
     
     	 	
     	
     	
     	var profile_image = "<img src='"+tweet.profile_image_url+"'/>"
     	
     	var object = $("<p>" + profile_image + tweet.text + "</p>");
     	
     	count ++;
     	
     	
    object.hide();
    $("#tweets").prepend(object);
    object.slideDown();
    
    $(".love_info p:gt(0)").slideUp(100, function() {
	    $(".love_info p:gt(0)").remove();
	});
    $(".hate_info p:gt(0)").slideUp(100, function() {
	    $(".hate_info p:gt(0)").remove();
	});
    $("#tweets p:gt(4)").fadeOut(200, function() {
	    $("#tweets p:gt(4)").remove();
	});
    //Check to see if tweet has the word 'love'
   // $(".love_info").append("<p> See how many people love" + $('input:text').val() +"</p>");
    if(tweet.text.match(/love/i)){
       love_count = love_count+1;
       if(love_count >= 0){
      	 if($("button:#submit_btn").click(function() {
       			love_count = 0;
       	   })); 	       
       	       
       	       // modified from a similar counter found on devcurry.com
       	       $(function() {      
            var Lovecounter = setInterval(function() {
                if (love_count < 100) {
                    $('#loveCounter').html("<h3>"+love_count+"</h3>");
                }
            });
        });   
                
       	
       }
    }
       
     
    
       // See if tweet has the word hate
      if(tweet.text.match(/hate/i)) {
       hate_count = hate_count+1;
       if(hate_count >= 0){
       	          // modified from a similar counter found on devcurry.com
       	if($("button:#submit_btn").click(function() {
       			hate_count = 0;
       	}));
       	       $(function() {
            
            var hateCounter = setInterval(function() {
                if (hate_count < 100) {
                    $('#hateCounter').html("<h3>"+hate_count+"</h3>");
                }
                
            });
        });   
             //alert("man people really hate " + $('input:text').val());
       }
     }
     
     
     });
     
     
     s.start();
    
       
});
     }
$(document).ready(function() {
		
main();
});
