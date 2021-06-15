import Gallery from '../export/gallery.js';

var img01 = new Gallery('images/gallery.jpg','gallery');

var img02 = new Gallery('images/gallery1.jpg','gallery');

var img03 = new Gallery('images/gallery2.jpg','gallery');

var img04 = new Gallery('images/gallery3.jpg','gallery');

var img05 = new Gallery('images/gallery4.jpg','gallery');

var img06 = new Gallery('images/gallery5.jpg','gallery');

var img07 = new Gallery('images/gallery6.jpg','gallery');

var img08 = new Gallery('images/gallery7.jpg','gallery');

var img09 = new Gallery('images/gallery8.jpg','gallery');

var img10 = new Gallery('images/gallery9.jpg','gallery');
var img11 = new Gallery('images/gallery10.jpg','gallery');
var img12 = new Gallery('images/gallery12.jpg','gallery');
var img13 = new Gallery('images/gallery13.jpg','gallery');
var img14 = new Gallery('images/gallery14.jpg','gallery');
var img15 = new Gallery('images/gallery15.jpg','gallery');
var img16 = new Gallery('images/gallery16.jpg','gallery');
var img17 = new Gallery('images/gallery17.jpg','gallery');
var img18 = new Gallery('images/gallery18.jpg','gallery');
var img19 = new Gallery('images/gallery19.jpg','gallery');


var img_arr = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19];

document.querySelector('.gallery').innerHTML+=`
    <div class="container my-4">
	     <div class="row galleryanimate">
		    <h1 class="text-center">Photo Gallery</h1>
			<div class="gallery"></div>
		 </div>
	</div>
`;


for(var i in img_arr){
	document.querySelector('.gallery>.container>.row').innerHTML+=`
	   <div class="col-md-3">
	        <div class="galery_images"><a href="${img_arr[i].img}"><img src="${img_arr[i].img}" alt="${img_arr[i].alt}" class="img-thumbnail img-fluid"></a></li></div>
	   </div>
	`;
}