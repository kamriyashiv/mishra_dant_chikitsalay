import Facilites from "../export/featurfacilities.js"

//console.log(About);

var tag01 = new Facilites('<i class="fas fa-notes-medical"></i><br> Medical Treatment');
var tag02 = new Facilites('<i class="fas fa-ambulance"></i><br>  Emergency Help');
var tag03 = new Facilites('<i class="far fa-clock"></i><br>  24/7 Hour Open');
var tag04 = new Facilites('<i class="fas fa-user-nurse"></i><br>  Best Doctors');

var arr = [tag01, tag02, tag03, tag04];

facilities.innerHTML += `
    <div class="container">
        <h3 class="text-center"><strong>Our Facilities</strong></h3>
         <div class="row">
             
         </div>
    </div>
`;

for (var i in arr) {
    document.querySelector("#facilities>.container>.row").innerHTML += `
       <div class="col-md-3">
             <div class="tag text-center">
                   <span>${arr[i].tag}<span>
              </div>
        </div>                 
      `;
}