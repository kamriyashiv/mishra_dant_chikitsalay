import {
    About,
    Crousel,
} from "../export/about.js"


var head = new About("Welcome To <strong>Mishra Dant Chikitsalaya</strong>");
var subhead = new About("Dental & implant Care Center");
var para = new About("<strong><i>Mishra Dant Chikitsalaya</i> </strong>Offers Treatment like<strong> Dental Implants</strong>, <strong>Scaling</strong>, <strong>Dental Cleaning</strong><strong> Root Canal Treatment</strong>, <strong>Dentures</strong>, <strong>Dental Bridges</strong>, <strong>Digital X-ray</strong>, <strong>Intraoral Camera</strong>, <strong>Periodontal Therapy</strong> ,<strong>Dental Whitening</strong>,<strong> Smile Makeover</strong> in Bilaspur Chhattisgarh.");



about.innerHTML += `
   <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="aboutContent">
                   <h3><strong>${head.content}</strong></h3>
                   <h3>${subhead.content}</h3>
                   <hr>
                   <p>${para.content}</p>
                   
                   <div class="tagItem"></div>
                   <a href="about.php" class="btn btn-blue">Know More About Us</a>
                </div>
            </div>
            <!--//COL-MD-6-->
            <div class="col-md-6">
                <div class="imagesslider">
                     <img src="images/hospital-3.jpg" class="img-thumbnail">
                </div>
            </div>
            <!--//COL-MD-6-->
        </div>
   </div>
`;




//SLIDER CODE START HERE
