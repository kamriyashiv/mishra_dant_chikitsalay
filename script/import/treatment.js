import FeatureService from "../export/featured_services.js";
var fService01 = new FeatureService("images/implant-1-1.jpg", 'Dental Implants', 'A dental implant (also known as an endosseous implant or fixture) is a surgical component that interfaces with the bone of the jaw or skull to support a dental prosthesis such as a crown, bridge, denture, facial prosthesis or to act as an orthodontic anchor.', 'myclick(event,"serv01")', "serv01");

var fService02 = new FeatureService("images/scaling.jpg", 'Scaling (Dental Cleaning)', 'Scaling and root planing, also known as conventional periodontal therapy, non-surgical periodontal therapy or deep cleaning.', 'myclick(event,"serv02")', "serv02");

var fService03 = new FeatureService("images/canal-1-1.jpg", 'Root Canal Treatment', 'Does a root canal hurt? A root canal procedure sounds scary, but with todays technology, its typically not a whole lot more different than having a deep filling.', 'myclick(event,"serv03")', "serv03");

var fService04 = new FeatureService("images/dentures-1-1.jpg", 'Dentures', 'A denture is a removable replacement for missing teeth and surrounding tissues.', 'myclick(event,"serv04")', "serv04");

//SERVICE
var fService05 = new FeatureService("images/bridge-1-1.jpg", 'Dental Bridges', 'A traditional dental bridge lasts between five to 15 years on average.', 'myclick(event,"serv05")', "serv05");

var fService06 = new FeatureService("images/xray.jpg", 'Digital X-ray', 'Digital x-rays are frequently used for monitoring teeth yet to emerge, such as wisdom teeth that may be impacted', 'myclick(event,"serv06")', "serv06");

var fService07 = new FeatureService("images/intraoral-camera.jpg", 'Intraoral Camera', 'Dental Intraoral Cameras. Designed to allow clinicians to capture and display digital images from inside a patients mouth, intraoral cameras are a valuable tool', 'myclick(event,"serv07")', "serv07");

var fService08 = new FeatureService("images/periodontal-therapy.jpg", 'Periodontal Therapy', 'Active periodontal therapy is defined as a standard treatment consisting of oral hygiene instructions, biofilm and calculus removal (a.k.a. initial or cause-related therapy) with or without adjunctive anti- microbials and with or without surgical treatment.', 'myclick(event,"serv08")', "serv08");


//SERVICE
var fService09 = new FeatureService("images/white-1-1.jpg", 'Dental Whitening', 'As long as you stick to dentist-approved methods, whitening your teeth is considered safe. Make sure to use the method that fits your needs and always follow the directions for the product.', 'myclick(event,"serv09")', "serv09");

var fService10 = new FeatureService("images/smile-1-1.jpg", 'Smile Makeover', 'A smile makeover is a bespoke treatment plan designed to deliver your perfect smile. Your dentist may recommend a combination of treatments from fillings and crowns, to orthodontics, or cosmetic treatments such as teeth whitening or composite bonding.', 'myclick(event,"serv10")', "serv10");



var servArr = [fService01, fService02, fService03, fService04, fService05, fService06, fService07, fService08, fService09, fService10]



Service.innerHTML += `
   <div class="container">
        <h2 class="text-center">Our Treatments</h2>
        <div class="row">
        </div>
        
   </div>
`;

for (var i in servArr) {
    document.querySelector("#Service>.container>.row").innerHTML += `
       <div class="col-md-3">
           <div class="service"  onclick='${servArr[i].myevent}'>
               <img src="${servArr[i].images}" class="img-thumbnail">
               <h4 class="clickme"><strong>${servArr[i].name}</strong></h4>
               <div class="data" id="${servArr[i].id}">
               <hr>
                   <p>${servArr[i].para}</p>
               </div>
           </div>
       </div>
    `;
}