import Header from "../export/header.js";

var data = new Header("78984-98478", "Near Raj Stationery, In front of Lovina Courts apartments, Mungeli Naka Bilaspur(C.G.)");

document.querySelector('header').innerHTML += `
   <div class="container">
       <div class="row">
           <div class="col-md-4">
               <div class="headContent">
                   <a href="tel:${data.phone}"><i class="fas fa-phone-alt"></i> ${data.phone}</a>
                   <a href="tel:${data.secPhone()}"><i class="fas fa-phone-alt"></i> ${data.secPhone()}</a>
               </div>
           </div>
           <!--//col-md-4-->
           <div class="col-md-8">
               <div class="headContent text-right">
                   <span><i class="fas fa-map-marker-alt"></i> ${data.address}</span>
               </div>
           </div>
           <!--//col-md-8-->
       </div>
   </div>
`;