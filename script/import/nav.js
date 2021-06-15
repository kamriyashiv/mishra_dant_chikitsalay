import Nav from "../export/nav.js";

var tab01 = new Nav("Home", "index.php");
var tab02 = new Nav("About", "about.php");
var tab03 = new Nav("Treatment", "service.php");
var tab04 = new Nav("Photo Gallery", "gallery.php");
var tab05 = new Nav("Contact Us", "contact.php");




var navarr = [tab01, tab02, tab03, tab04, tab05];

document.querySelector('nav').innerHTML += `
   <div class="container">
       <div class="row">
           <div class="col-md-4">
               <div class="navitem">
                   <img src="${tab01.myLogo("images/logo.svg")}">
                   <h1>${tab01.myLogo("Mishra Dant Chikitsalaya")}</h1>
               </div>
           </div>
           <!--//col-md-4-->
           <div class="col-md-8">
           <div class="navitemList ">
                <ul class="navbar-nav nav"></ul>
           </div>
       </div>
       <!--//col-md-4-->
       </div>
   </div>
`;

for (var i in navarr) {
    document.querySelector('.navitemList>ul').innerHTML += `
      <li><a href="${navarr[i].tablink}">${navarr[i].tabname}</a></li>
    `;
}