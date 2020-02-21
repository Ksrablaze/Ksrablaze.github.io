function getData() {
  const header = `    
  <div class="container-fluid" >
  <header>
    <nav>
      <div class="nav-brand">
        <a href="#">
          <h6>Ablaze'T20</h6>
        </a>
      </div>
      <div class="menu open">
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <ul class="nav-list">
        <div class="menu close">
          <p>
            <i class="fas fa-times"></i>
          </p>
        </div>
        <li class="nav-link">
          <a href="#home">
            <span>&lt;</span>
            Home
            <span>/&gt;</span>
          </a>
        </li>
        <li class="nav-link">
          <a href="#events">
            <span>&lt;</span>
            Events
            <span>/&gt;</span>
        </a>
        </li>
        
        <li class="nav-link">
          <a href="#about">
            <span>&lt;</span>
            About
            <span>/&gt;</span>
          </a>
        </li>
        <li class="nav-link">
          <a href="#contact">
            <span>&lt;</span>
            Contact
            <span>/&gt;</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="wrapper" id="home">
    <div class="main-content">
      <div class="hero">
        <img
          class="circle circle1"
          alt="1"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-red-semi-5aec49dbe5d420f928cece7001b96267ee17a9d3577374b68b4fba47c547bd75.svg"
        />
        <img
          class="circle circle2"
          alt="2"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-red-2f7737b286dff1537adff47b8201aa43e33cbe1e47bd528ca2189809917fe132.svg"
        />
        <img
          class="circle circle3"
          alt="3"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-orange-semi-d9d13d5529ae8f3c91dc80b182cf14fc629118bbdac8851b36e102dd15652557.svg"
        />
        <img
          class="circle circle4"
          alt="4"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-orange-235189ed438049f084ca873f6ed2055c4127ddef84a55fa464053f34c10157e6.svg"
        />
        <img
          class="circle circle5"
          alt="5"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-yellow-semi-af7a94ccf4768a81e6692d808f00e33ac88d9110f842d02c5ab211577686301a.svg"
        />
        <img
          class="circle circle6"
          alt="6"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-yellow-bf8ec5927e343b3a804448d37a799c9c346af320f30b3cdc019297938fe00300.svg"
        />
        <img
          class="circle circle7"
          alt="7"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-green-semi-6b12059c6aea11bf60e8f3c89afdffb6b817913541a1ce72cbca29f733224984.svg"
        />
        <img
          class="circle circle8"
          alt="8"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-green-8a75a5e7cc4f8426a47f5ebfe2459283d3554cfdcf8dc5f492fda0b26d2d6d79.svg"
        />
        <img
          class="circle circle9"
          alt="9"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-semi-930c6662236ab84933e73083bc057b869b895bd36cef9e3e5254018fb61bc82a.svg"
        />
        <img
          class="circle circle0"
          alt="10"
          src="https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-50996d0762fb6d9ee13d6a52404dd01327fc542cc729777d532c9b633103c835.svg"
        />
        <h1>CSE</h1>
      </div>
      <div class="main-text">
        <div class="animate-div">
          <h4>K.S.R. COLLEGE OF ENGINEERING</h4>
          <h2>Tech fest 2k20</h2>
          <div class="btn">
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Broucher
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfon4P0qFNa_i6rzHlOPbKFYMO0xdBVY28whIz6FbkR1Gz1rg/viewform?usp=sf_link" target="_blank">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="timer">
    <div id="clockdiv">
      <div>
        <span class="days" id="day"></span>
        <div class="smalltext">Days</div>
      </div>

      <div>
        <span class="hours" id="hour"></span>
        <div class="smalltext">Hours</div>
      </div>
      <div>
        <span class="minutes" id="minute"></span>
        <div class="smalltext">Minutes</div>
      </div>
      <div>
        <span class="seconds" id="second"></span>
        <div class="smalltext">Seconds</div>
      </div>
    </div>
    <p id="demo"></p>
  </div>
</div>
<div class="cards-list">
  
<div class="card one">

  <div class="card_title title-white">
    <h4>Symposium</h4>
    <p>Registration Fee:  &#8377;200 only</p>
  </div>
</div>

  <div class="card two">

  <div class="card_title title-white">
    <h4>Work Shop</h4>
    <p>Registration Fee:  &#8377;200 only</p>
  </div>
</div>

<div class="card three">
  <div class="card_title title-white">
  <h4>Combo</h4>
  <p>Registration Fee:  &#8377;300 only</p>
  </div>
</div>
  


</div>
<div class="symp-events">
  <div class="heading">
    <h5>TECHNICAL Events</h5>
  </div>
  <div class="events" id="events">
    <div class="main-wrapper">
      <div class="gif gif1"></div>
      <div class="event event1">
        <div class="event-content event1-content">
          <h2>
            Technical quiz
          </h2>
          <div class="event-text">
            <p>
              In this event, each team should have atmost 2 contestants.
            </p>
            <h4> MCQ test (online).</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="main-wrapper">
      <div class="event event2">
        <div class="event-content event2-content">
          <h2>
            Paper presentation
          </h2>
          <div class="event-text">
            <p>
              In this event, computer related topics or any latest
              technologies can be presented.
            </p>
            <p>Cash prize will be awarded for winner and runner.</p>
          </div>
        </div>
      </div>
      <div class="gif gif2"></div>
    </div>

    <div class="main-wrapper">
      <div class="gif gif3"></div>
      <div class="event event1">
        <div class="event-content event1-content">
          <h2>
            Code debugging
          </h2>
          <div class="event-text">
            <p>
              In this event, the given code have to be solved.
            </p>
            <h4>Try to solve our code.</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="heading fr">
      <h5>NON -TECHNICAL Events</h5>
    </div>
    <div class="main-wrapper">
      <div class="event event2" style=" width: 48%; padding: 3%;">
        <div class="event-content event2-content">
          <h2>
            Need For Speed
          </h2>
          <div class="event-text">
            <p>
              In this event, totally there are 3 rounds.
              <br>winner and runner will be rewarded.
            </p>
            <h4>P a y b a c k!</h4>
            <p>Registration Fees: &#8377;50</p>

          </div>
        </div>
      </div>
      <div class="gif gif4"></div>
    </div>

    <div class="main-wrapper">
      <div class="gif gif5"></div>
      <div class="event event1">
        <div class="event-content event1-content">
          <h2>
            Photography & <br>short-film
          </h2>
          <div class="event-text">
            <p>Upload your photos in instagram link given below.</p>
              <p>Short film must have atleast 10 mins of duration.</p>    
      <p><a href="https://www.instagram.com/ablaze_t20?r=nametag" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="about">
  <div class="left-wrapper">
    <div class="inner-div">
      <p class="menu-para">
        <span> ABLAZE' T20 </span> is an inter college symposium held
        annually by the department of Computer Science and Engineering. Our
        flagship event, ABLAZE' T20continues to inspire countless ideas,
        expedite innovative startups and a jam-packed cluster of events
        designed for everyone. This year, ABLAZE' T20 sets out to champion
        the maniacs and misfits that refused the routine and achieved
        breakthroughs. With a digital environment filled with energetic
        individuals, the ABLAZE' T20 on 10th of March aims to accelerate
        these ideas through the stratosphere. Because we know that great
        ideas are hard to come by!
      </p>
    </div>
  </div>
  <div class="right-wrapper">
    <video
      src="https://player.vimeo.com/external/365224683.hd.mp4?s=11ee28514193abce2be5fe6ebbcb51de2a74f772&profile_id=174"
      height="450px"
      width="100%"
      muted
      autoplay
      loop
    ></video>
    <h1>
      <span>A</span>
      <span>b</span>
      <span>l</span>
      <span>a</span>
      <span>z</span>
      <span>e</span>
      <span>T</span>
      <span>2</span> 
      <span>0</span> 
     </h1>
  </div>
</div>
<div id="about">

  <div class="about">
    
    <div class="about-card card1">
      <h1>Chief Patron</h1>
        <div class="ksr">
          <div class="lion">
            <img src="https://icsm2k19.github.io/assets/images/prof/Chairman1.png" height="100px" width="100px">
            <h5>Lion. Dr.K.S.Rangasamy, MJF.</h5>
            <p>FOUNDER & CHAIRMAN</p>
             <p>K.S.R. EDUCATIONAL INSTITUTIONS</p>
          </div>
          <div class="small-lion">
            <img src="https://icsm2k19.github.io/assets/images/prof/seceretry.png" height="100px" width="100px">
            <h5>Thiru. R.Srinivasan, B.B.M.,MISTE</h5>
            <p>VICE CHAIRMAN</p>
            <p>K.S.R. EDUCATIONAL INSTITUTIONS</p>
          </div>
          <div class="principal">
            <img src="https://icsm2k19.github.io/assets/images/prof/ksrce_principal.jpg" height="100px" width="100px">
            <h5>Dr.P.Senthil Kumar</h5>
            <p>Principal</p>
            <p>K.S.R. COLLEGE OF ENGINEERING</p>
          </div>
          <div class="hod">
            <img src="http://www.ksrce.ac.in/admin/file_manager/source/BE%20(CSE)/UG-CSE/1.jpg" height="100px" width="100px">
            <h5>Dr. A. Rajiv Kannan, Ph.D.,</h5>
            <p>Head of the Department</p>
            <p>Computer Science & ENGINEERING</p>
          </div>
        </div>
      
    </div>
    <div class="about-card card2">
      <div class="dep-co">
        <h5>Dr. V. Sharmila, Ph.D.,</h5>
        <p>Department Co-ordinator</p>
        <p>Computer Science & ENGINEERING</p>
      </div>

      <h1>Convener</h1>

      <ul class="convener">
        
        <li>
          <p><strong> Dr. C. Anand</strong>
            <br> Associate Professor
          </p>
          
        </li>
        <li>
          <p>
            <strong>Mr. K. Dinesh Kumar</strong>
          <br> Assistant Professor
          </p>
          
        </li>
        <li>
          <p>
            <strong>Dr. V. Vennila</strong>
          <br> Associate Professor
          </p>
        </li>
        <li>
         <p>
          <strong>Mrs. S. Savitha</strong>
          <br> Associate Professor
         </p>
        </li>
      </ul>

      <h1>Committee</h1>
      <ul class="committee">
        <li>
          <p><b> K.Gokul</b> (Chairman)</p>
        </li>
        <li>
          <p><b> Nair Binesh Balan </b> (Secretory)</p>
        </li>
        <li>
          <p>
            <b> T. Prakash</b>(Joint Secretory)
          </p>
        </li>
        <li>
          <p>
            <b>P. Vimalkkumar</b>(Treasurer)</p>
        </li>
        <li>
          <p>
            <b>L. I. Poomani</b>(Joint Treasurer)
          </p>
        </li>
      </ul>
  </div>
</div>
</div>
<footer id="contact" class="footer-distributed" style="flex-shrink: 0;">

<div class="footer-left">

  <h3><span>K.S.R.</span>College of Engineering</h3>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#events">Events</a>
 
    <a href="#">About</a>
   
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name"> © 2020 - K.S.R. College Of Engineering.</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>K.S.R Kalvi Nagar</span>Tiruchengode, Namakkal-637215</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>(+91) 9865991491 (K.Gokul)</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="#">ablazet20@gmail.com</a></p>
  </div>
  

</div>

<div class="footer-right">

  <p class="footer-company-about">
      Designed and developed by <a href="#"><b>Future Developers</b></a>
  </p>

</div>  
</footer>`;
  document.getElementById("root").innerHTML = header;
  getTransition();
}
const getTransition = () => {
  let navbar = document.querySelector(".nav-list");
  let navItem = document.querySelectorAll(".nav-link");
  let navChange = document.querySelectorAll(".menu");
  navChange.forEach(nav => {
    nav.addEventListener("click", () => {
      navbar.classList.toggle("nav-change");
    });
  });
  navItem.forEach( nav =>{
    nav.addEventListener("click", () => {
      navbar.classList.toggle("nav-change");
    });
  })

  var active = document.querySelector("header");

  document.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll > 700) {
      active.classList.add("active");
    } else {
      active.classList.remove("active");
    }
  });

  var deadline = new Date("mar 10, 2020 9:0:0").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "TIME UP";
      document.getElementById("day").innerHTML = "0";
      document.getElementById("hour").innerHTML = "0";
      document.getElementById("minute").innerHTML = "0";
      document.getElementById("second").innerHTML = "0";
    }
  }, 1000);
};
