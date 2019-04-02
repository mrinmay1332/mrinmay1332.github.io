$(document).ready(function(){
				$("#para_profile").hide();		//profile kept hidden
				$("#para_cv").hide();
				$("#para_gallery").hide();			//paragraph kept hidden
				$("#para_contact").hide();			//contact kept hidden
			});
		
		
			$(document).ready(function(){
			
				$("#profile").click(function(){
					$("#para_cv").hide();
					$("#para_contact").hide();
					$("#para_gallery").hide();
					//$("body").css("background","url(images/two.jpg)");	//when "profile" section is clicked 
					$("#para_profile").slideToggle(2000);
				});
				
				$("#cv").click(function(){
					$("#para_profile").hide();				//when "resume" is clicked
					$("#para_contact").hide();
					$("#para_gallery").hide();
				// All	 resume divs remain hidden until their button are clicked...
					$("#research_div").hide();
					$("#ex_div").hide();
					$("#com_div").hide();
					$("#edu_div").hide();
					$("#prof_cert").hide();
					
					//$("body").css("background","url(images/one.jpg)");   //Background change
					$("#para_cv").slideToggle(2000);
				});
				
				
				
				//When "Non-Academic & "Academic" buttons are pressed...
				
				$("#prof").click(function(){
					$("#research_div").hide();
					$("#ex_div").hide();
					$("#com_div").hide();
					$("#edu_div").hide();
					$("#prof_cert").slideToggle(3000);
				});
				
				$("#research").click(function(){
					$("#research_div").slideToggle(2000);
					$("#ex_div").hide();
					$("#com_div").hide();
					$("#edu_div").hide();
					$("#prof_cert").hide();
				});
				
				$("#extra").click(function(){
					$("#ex_div").slideToggle(2000);
					$("#research_div").hide();
					$("#com_div").hide();
					$("#edu_div").hide();
					$("#prof_cert").hide();
				});
				$("#skills").click(function(){
					$("#com_div").slideToggle(2000);
					$("#ex_div").hide();
					$("#research_div").hide();
					$("#edu_div").hide();
					$("#prof_cert").hide();
				});
				$("#edu").click(function(){
					$("#edu_div").slideToggle(2000);
					$("#ex_div").hide();
					$("#com_div").hide();
					$("#research_div").hide();
					$("#prof_cert").hide();
				});
				
				
				
				
				
				$("#gal").click(function(){
					$("#para_profile").hide();				//when "gallery" is clicked
					$("#para_cv").hide();
					$("#para_contact").hide();
					$("#para_gallery").slideToggle(2000);
				});
				
				
				
				
				
				$("#contact").click(function(){
					$("#para_profile").hide();
					$("#para_cv").hide();
					$("#para_gallery").hide();
					//$("body").css("background","url(images/five.jpg)"); //when contact is clicked
					$("#para_contact").slideToggle(2000);
				});
			});
			
			
			
			/*$(document).ready(function(){
				$("img").on(
				mouseenter: function(){
					$("img").css("height","300px");},
				mouseleave: function(){
				$("img").css("height","100px");},
				);
			});*/