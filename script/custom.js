function myclick(evt, id) {
    var data = document.querySelectorAll('.data');

    for (var i = 0; i < data.length; i++) {
        data[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

function men(){
	
	var nav = document.querySelector('.navitemList');
	if(nav.style.display === "none"){
		nav.style.display = "block";
	}else{
		nav.style.display = "none";
	}
}


window.onscroll = fixedNav;
var slide = document.querySelector('.navitem>h1');
var nav = document.querySelector('nav');
var fixed = nav.offsetTop;
function fixedNav(){
   if(window.pageYOffset > fixed){
        nav.classList.add("fixed");
		document.querySelector('.navitem>h1').style.transform = "translateX(-50px)";
		document.querySelector('.navitem>h1').style.opacity = '0';
	
        document.querySelector('.navitem>h1').style.transition  =  'all 0.7s ease';   
     

    }else{
        nav.classList.remove("fixed");
		document.querySelector('.navitem>h1').style.transform =  'translateX(0px)';
		document.querySelector('.navitem>h1').style.transition  =  'all 0.7s ease';
     
		document.querySelector('.navitem>h1').style.opacity = '1';
  
    }
}



// function all(){
	// var div = document.querySelector('section');
	// var x = 1;
	// var allimg = [];
// console.log(allimg);
	
	// var rondumImg = [
		// "images/img1.jpg",
		// "images/img1.jpg",
		// "images/img1.jpg",
	// ]

	// function slider(){
		// for(var i = 0;i < 3;i++){
			// var im = document.createElement('img');
			// div.appendChild(im);
			
			// allimg.push(im);
			
			
			// var roun = Math.floor(Math.random() * rondumImg.length);
			
			// im.src = rondumImg[roun];
			
			// im.style.position = "absolute";
			// im.style.maxWidth = "100%";
			// //im.style.height = "505px";
			// im.style.objectFit = "contains";
		// }
		// //setTimeout(slider,3000);
	// }
	// slider();
// }
// all();


