import Contact from "../export/contact.js";



var get01 = new Contact("Near Raj Stationery, In front of Lovina Courts apartments, Mungeli Naka Bilaspur(C.G.)", "");
var get02 = new Contact("7587450204", "");
var get03 = new Contact("78984-98478", "");
var get04 = new Contact("drshreemohan@gmail.com", "");


document.querySelector(".contact").innerHTML+=`
    <div class="container">
       <h1 class="text-center">Don't Hesitate to Connect With us.</h1>
       <hr>
        <div class="row">
             <div class="col-md-6">
                  <div class="mycontact">
                       <ul class="nav">
                            <li><a href="#"><i class="fas fa-map-marker-alt"></i> ${get01.tab}</a></li>
                            <li><a href="${get02.lin}"><i class="fas fa-phone-alt"></i> ${get02.tab}</a></li>
                            <li><a href="${get03.lin}"><i class="fas fa-phone-alt"></i> ${get03.tab}</a></li>
                            <li><a href="${get04.lin}"><i class="far fa-envelope-open"></i> ${get04.tab}</a></li>
                       </ul>
                  </div>
             </div>
             <!--//COL-MD-6-->
             <div class="col-md-6">
                  <div class="contactform">
                       <form>
                           <div class="form-group">
                                <input type="email" name="" placeholder="Type Your Name" class="form-control">
                           </div>
                           <div class="form-group">
                                <input type="text" name="" placeholder="Type Your Name" class="form-control">
                           </div>
                           <div class="form-group">
                                <input type="age" name="" placeholder="Type Your Age" class="form-control">
                           </div>
                           <div class="form-group">
                                <select class="form-control">
                                    <option>Choose Doctor</option>
                                    <option>Dr. Shreemohan Mishra</option>
                                    <option>Dr. Nivedita Mishra</option>
                                </select>
                           </div>
                           <a href="#" class="btn btn-blue">Get Appoint</a>  
                       </form>
                  </div>
             </div>
        </div>
    </div>
`;