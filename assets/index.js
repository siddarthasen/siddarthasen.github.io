$(document).ready(function(){
  
	//variables for icons and projects
	var py = $("#skills-sec ul li:nth-child(1)");
	var html = $("#skills-sec ul li:nth-child(2)");
	
	var js = $("#skills-sec ul li:nth-child(3)");
	
	var py_cond = false;
	var html_cond = false;
	
	var js_cond = false;
	
	var button_lst = [];


	//functions for toggling projects based on icon click
	function icon_skills_single(icon, section, cond) {
		var num = 0;
		icon.click(function(){
			num++;
			icon.toggleClass("icon2");
			section.toggle(500);
		})
		if (num%2===0){
			
			icon.hover(function(){
				icon.toggleClass("icon1");
			})
		}
	}

	function icon_skills(icon, section, cond) {
		var num = 0;
		icon.click(function(){
			cond = !cond;
			icon.toggleClass("icon2");
			if (cond) {
				button_lst.push("yes");
			}
			else {
				button_lst.pop();
			}
			if (button_lst.length>=1) {
				section.show(500);
			}
			else {
				section.hide(500);
			}
		})
			if (num%2===0){
			
			icon.hover(function(){
				icon.toggleClass("icon1");
			})
		}
	}


	icon_skills_single(py, $(".py-proj"), py_cond);
	icon_skills(html, $(".html-proj"), html_cond);
	icon_skills(js, $(".js-proj"), js_cond);
	


	//variables for interests
	var soccer1 = $(".container .card:nth-child(1) .face1");
	var soccer2 = $(".container .card:nth-child(1) .face2");
	var soccer3 = $(".container .card:nth-child(1) .face1 .content img");
	var league1 = $(".container .card:nth-child(2) .face1");
	var league2 = $(".container .card:nth-child(2) .face2");
	var league3 = $(".container .card:nth-child(2) .face1 .content img");

	function move_card(face1, face2, face3){
		face1.click(function(){
			face1.toggleClass("blue");
			face2.toggleClass("shadow2");
			face3.toggleClass("pic2");
			if (face1.position().top > 0){
				face1.animate({bottom: '150px'});
			}
			else{
			    face1.animate({bottom: '0px'});
			}
		});
	}	

	function shadow(face1, face2, face3){
		face1.hover(function(){
			face2.toggleClass("shadow1");
			face3.toggleClass("pic1");
		})
	}

	function interest_card(face1, face2, face3){
		var num = 0;
    	face1.click(function(){
    		num++;
    	})
    	move_card(face1, face2, face3);
		if (num%2===0){
			shadow(face1, face2, face3);
		}
	}

	interest_card(soccer1, soccer2, soccer3);
	interest_card(league1, league2, league3);


	var boggle = $("#projects-sec #projects-list ul li:nth-child(1) a");
	var boggle_card = $("#projects-sec #projects-list ul li:nth-child(1)");
	var box = $("#projects-sec #projects-list ul li:nth-child(2) a");
	var box_card = $("#projects-sec #projects-list ul li:nth-child(2)");
	var write = $("#projects-sec #projects-list ul li:nth-child(3) a");
	var write_card = $("#projects-sec #projects-list ul li:nth-child(3)");
	var notSyke = $("#projects-sec #projects-list ul li:nth-child(4) a");
	var notSyke_card = $("#projects-sec #projects-list ul li:nth-child(4)");


	function project_hover(project, card){
		project.hover(function(){
			card.toggleClass("color");
		})
	}

	project_hover(boggle, boggle_card);
	project_hover(box, box_card);
	project_hover(write, write_card);
	project_hover(notSyke, notSyke_card);

});