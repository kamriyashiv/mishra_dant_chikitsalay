//Caring to all of your dental needs and desires

import Banner from "../export/slider.js";

var content = new Banner("Caring to all of <br>your dental needs.", "Our goal for every patient is to create a beautiful smile that can  be enjoyed for a lifetime.");

document.querySelector('section').innerHTML += `
   
        
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
            
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                  <div class="item active">
                    <a href="service.php"><img src="images/new-banner.jpg" alt="Los Angeles" style="width:100%;"></a>
                  </div>
				  <div class="item">
                    <a href="contact.php"><img src="images/doctor-sir-1.jpg" alt="Los Angeles" style="width:100%;"></a>
                  </div>
				  <div class="item">
                    <a href="contact.php"><img src="images/doctor-madem-1.jpg" alt="Los Angeles" style="width:100%;"></a>
                  </div>
				  <div class="item">
                    <img src="images/dental-dant.jpg" alt="Los Angeles" style="width:100%;">
                  </div>
				 
				  <div class="item">
                    <a href="about.php"><img src="images/about-img.jpg" alt="Los Angeles" style="width:100%;"></a>
                  </div>
                </div>
            
                <!-- Left and right controls -->
                <a class="left carousel-control"  href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
           
    </div>
    <div class="bannerContent">
         <h2 class="head"><strong>${content.Head}</strong></h2>
         <p>${content.para}</p>
         <div class="bannerbtn">
            <a href="treatment.php" class="btn btn-bright">View Our Treatments</a>
            <a href="contact.php" class="btn btn-blue">Book Your Appointment Now</a>
         </div>
    </div>
     
`;