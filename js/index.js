const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav 

let nav1 = document.getElementsByTagName("a")[0].setAttribute("id", "nav-item-1"); 
nav1 = document.getElementById("nav-item-1"); 
nav1.textContent = siteContent.nav["nav-item-1"];

let nav2 = document.getElementsByTagName("a")[1].setAttribute("id", "nav-item-2"); 
nav2 = document.getElementById("nav-item-2");
nav2.textContent = siteContent.nav["nav-item-2"]; 

let nav3 = document.getElementsByTagName("a")[2].setAttribute("id", "nav-item-3"); 
nav3 = document.getElementById("nav-item-3"); 
nav3.textContent = siteContent.nav["nav-item-3"]; 

let nav4 = document.getElementsByTagName("a")[3].setAttribute("id", "nav-item-4");
nav4 = document.getElementById("nav-item-4");
nav4.textContent = siteContent.nav["nav-item-4"]; 

let nav5 = document.getElementsByTagName("a")[4].setAttribute("id", "nav-item-5");
nav5 = document.getElementById("nav-item-5");
nav5.textContent = siteContent.nav["nav-item-5"];

let nav6 = document.getElementsByTagName("a")[5].setAttribute("id", "nav-item-6");
nav6 = document.getElementById("nav-item-6");
nav6.textContent = siteContent.nav["nav-item-6"];

// top section 

let topSectionH1 = document.querySelector(".cta .cta-text h1").textContent = siteContent.cta["h1"];

let topSectionButton = document.querySelector(".cta .cta-text button").textContent = siteContent.cta["button"];

let topSectionImg = document.getElementById("cta-img").setAttribute("src", siteContent.cta["img-src"]);

// main content text

let featureH4 = document.querySelectorAll(".text-content h4")[0].textContent = siteContent["main-content"]["features-h4"];

let featureTextContent = document.querySelectorAll(".text-content p")[0].textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll(".text-content h4")[1].textContent = siteContent["main-content"]["about-h4"]; 

let aboutTextContent = document.querySelectorAll(".text-content p")[1].textContent = siteContent["main-content"]["about-content"]; 

let servicesH4 = document.querySelectorAll(".text-content h4")[2].textContent = siteContent["main-content"]["services-h4"];

let servicesTextContent = document.querySelectorAll(".text-content p")[2].textContent = siteContent["main-content"]["services-content"]; 

let productH4 = document.querySelectorAll(".text-content h4")[3].textContent = siteContent["main-content"]["product-h4"];

let productTextContent = document.querySelectorAll(".text-content p")[3].textContent = siteContent["main-content"]["product-content"]; 

let visionH4 = document.querySelectorAll(".text-content h4")[4].textContent = siteContent["main-content"]["vision-h4"];

let visionTextContent = document.querySelectorAll(".text-content p")[4].textContent = siteContent["main-content"]["vision-content"]; 

// main content img 

let mainImg = document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact section 
let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"]; 

let contactAddress = document.querySelectorAll(".contact p")[0].textContent = siteContent.contact["address"]; 

let contactPhone = document.querySelectorAll(".contact p")[1].textContent = siteContent.contact["phone"];

let contactEmail = document.querySelectorAll(".contact p")[2].textContent = siteContent.contact["email"];


//footer 
let footer = document.querySelector("footer p");

footer.textContent = siteContent.footer["copyright"];




// task 4 - add elements to nav bar 

let nav7 = document.createElement("a"); 
nav7.textContent = "Blog";  

let nav = document.getElementsByTagName("nav")[0];

nav.appendChild(nav7); 

let nav8 = document.createElement("a"); 
nav8.textContent = "Careers";
nav.prepend(nav8); 



// task 4 - change color of nav 
 
let navStyles = document.querySelectorAll("nav"); 

navStyles.forEach(element => element.style.color = "green"); 

let linkStyles = document.querySelectorAll("nav a"); 

linkStyles.forEach(element => element.style.color = "green");