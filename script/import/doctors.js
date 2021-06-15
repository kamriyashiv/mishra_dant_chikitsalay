import Docters from "../export/doctors.js";

var docters01 = new Docters("Dr. Shreemohan Mishra", "M.D.S. (Periodontology)","images/dr._shreemohan_mishra.png");
var docters02 = new Docters("Dr. Nivedita Mishra", "B.D.S.", "images/dr_nivedita_mishra.png");

var darr = [docters01, docters02];

doctors.innerHTML += `
    <div class="container">
        <h1 class="text-center">Meet Our Doctors</h1>
        <div class="row">
	        
        </div>
		<div class="row">
	        <div class="col-md-12">
				<div class="timetable">
					<h1 class="text-center">Our Timings</h1>
					<table class="table table-striped  table-responsive">
						<thead class="thead-light">
							<tr>
								<th>Day</th>
								<th>Morning Time</th>
								<th>Eveining Time</th>
							</tr>
						</thead>
						<tbody>
							
							<tr>
								<td>Monday</td>
								<td>10am to 2pm</td>
								<td>5pm to 9pm</td>
							</tr>
							<tr>
								<td>Tuesday</td>
								<td>10am to 2pm</td>
								<td>5pm to 9pm</td>
							</tr>
							<tr>
								<td>Wednesday</td>
								<td>10am to 2pm</td>
								<td>5pm to 9pm</td>
							</tr>
							<tr>
								<td>Thursday</td>
								<td>10am to 2pm</td>
								<td>5pm to 9pm</td>
							</tr>
							<tr>
								<td>Friday</td>
								<td>10am to 2pm</td>
								<td>5pm to 9pm</td>
							</tr>
							<tr>
								<<td>Saturday</td>
								<td>10am to 2pm</td>
								<td>5pm to 9pm</td>
							</tr>
							<tr>
								<td>Sunday</td>
								<td>10am to 3pm</td>
								<td class="color-red">Closed</td>
							</tr>	
						</tbody>
					</table>
				</div>
			</div>
        </div>
    </div>
`;

for (var i in darr) {
    document.querySelector("#doctors>.container>.row").innerHTML +=
        `
     <div class="col-md-6">
         <div class="docters text-center">
             <img src="${darr[i].img}" class="img-thumbnail">
             <h1 class="name">${darr[i].name}</h1>
             <hr>
             <div class="doctersDetails">
                <p class="qualification">${darr[i].qualification}</p>
             </div>
             <a href="contact.php" class="btn btn-bright">Get Appointment</a>
         </div>
     </div>
    `;
}