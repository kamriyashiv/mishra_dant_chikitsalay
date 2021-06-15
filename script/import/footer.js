import {
    Footer,
    Contact,
    Address
} from "../export/footer.js";


var link01 = new Footer("Home", "index.php");
var link02 = new Footer("About us", "about.php");
var link03 = new Footer("Our Treatments", "service.php");
var link04 = new Footer("Gallery", "gallery.php");
var link05 = new Footer("Contact", "contact.php");

var linkarr = [link01, link02, link03, link04, link05];

var con01 = new Contact('<i class="fab fa-facebook-square" style="font-size:30px;"></i>', "");
var con02 = new Contact('<i class="fab fa-whatsapp-square" style="font-size:30px;"></i>', "");

var conarr = [con01, con02];

var add01 = new Address("Near Raj Stationery, In front of Lovina Courts apartments, Mungeli Naka Bilaspur(C.G.)", "");
var add02 = new Address("7587450204", "");
var add03 = new Address("78984-98478", "");
var add04 = new Address("drshreemohan@gmail.com", "");

//var addarr = [add01, add02, add03, add04];

document.querySelector('footer').innerHTML += `
  <div class="container">
      <div class="row">
          <div class="col-md-4">
              <div class="footermenu">
                  <h3>Our Menu</h3>
				  <hr>
                  <ul class="nav"></ul>
              </div>
          </div>
          <div class="col-md-4">
               <div class="connectmenu">
                   <h3>Stay Connect</h3>
				   <hr>
                   <ul class="nav"></ul>
               </div> 
          </div>
          <div class="col-md-4">
              <div class="addressmenu">
                 <h3>Our Address</h3>
				 <hr>
                 <ul class="nav">
                    <li><a href="#"><span><i class="fas fa-map-marker-alt"></i></span> ${add01.le}</a></li>
                    <li><a href="tel:${add02.le}"><span><i class="fas fa-phone-alt"></i></span> ${add02.le}</a></li>
                    <li><a href="tel:${add03.le}"><span><i class="fas fa-phone-alt"></i></span> ${add03.le}</a></li>
                    <li><a href="mailto:${add04.le}"><span><i class="far fa-envelope-open"></i></span> ${add04.le}</a></li>
                 </ul>
               </div>
          </div>
      </div>
  </div>
`;

for (var i in linkarr) {
    document.querySelector(".footermenu>ul").innerHTML += `
       <li><a href="${linkarr[i].tablink}"><i class='fas fa-chevron-right'></i> ${linkarr[i].tabname}</a></li>
    `;
}
for (var i in conarr) {
    document.querySelector(".connectmenu>ul").innerHTML += `
       <li><a href="${conarr[i].link}">${conarr[i].linkname}</a></li>
    `;
}