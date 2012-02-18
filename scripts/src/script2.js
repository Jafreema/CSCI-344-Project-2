function main() {
	
	var spotter;
    //your code goes here
    $("button:#submit_btn").click(function() {
    	  
    		    
    });
    
    var s = new Spotter("twitter.search",
    	  	  {q:'obama', period:120},
    	  	  {buffer:true, bufferTimeout:750});
     	  
    s.register(function(tweet) {
     	  var profile_image = "<img src='"+tweet.profile_image_url+"'/>"
     	  var object = $("<p  class="+ color + ">" + profile_image + tweet.text + "</p>");
     	 
     	  $(".item").prepend(object);
     	
     	  s.start()
     	  });
    
}
