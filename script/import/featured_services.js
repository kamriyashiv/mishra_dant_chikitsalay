import FeatureService from "../export/featured_services.js";

var fService01 = new FeatureService("images/implant-1-1.jpg", 'Dental Implants', 'A dental implant (also known as an endosseous implant or fixture) is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown, bridge, denture, facial prosthesis or to act as an orthodontic anchor.', 'myclick(event,"serv01")', "serv01");

var fService02 = new FeatureService("images/scaling.jpg", 'Scaling (Dental Cleaning)', 'Scaling and root planing, also known as conventional periodontal therapy, non-surgical periodontal therapy or deep cleaning.', 'myclick(event,"serv02")', "serv02");

var fService03 = new FeatureService("images/canal-1-1.jpg", 'Root Canal Treatment', 'Does a root canal hurt? A root canal procedure sounds scary, but with todays technology, its typically not a whole lot more different than having a deep filling.', 'myclick(event,"serv03")', "serv03");

var fService04 = new FeatureService("images/dentures-1-1.jpg", 'Dentures', 'A denture is a removable replacement for missing teeth and surrounding tissues.', 'myclick(event,"serv04")', "serv04");

var servArr = [fService01, fService02, fService03, fService04]

featurService.innerHTML += `
   <div class="container">
        <h2 class="text-center">Our Treatments</h2>
        <div class="row">
        </div>
		
		<br><br><br>
        <div class="text-center">
            <a href="service.php" class="btn btn-blue">View Our More Treatments</a>
        </div>
   </div>
`;


for (var i in servArr) {
    document.querySelector("#featurService>.container>.row").innerHTML += `
       <div class="col-md-3">
           <div class="service"  onclick='${servArr[i].myevent}'>
               <img src="${servArr[i].images}" class="img-thumbnail">
               <h4 class="clickme"><strong>${servArr[i].name}</strong></h4>
			   
			   <a>Read More...</a>
			   
               <div class="data" id="${servArr[i].id}">
			    
               <hr>
                  <p>${servArr[i].para}</p>
               </div>
           </div>
       </div>
    `;
}
