//active link

const siteRegions = [];

siteRegions[0] = document.querySelector("#block-top-content-header");
siteRegions[1] = document.querySelector("#block-adchallenge-content");
siteRegions[2] = document.querySelector("#block-latest-event");
siteRegions[3] = document.querySelector("#block-about-me");

var headerNavigationContainer = document.querySelector('#block-adchallenge-main-menu');
var menuListItemNodes = headerNavigationContainer.querySelectorAll('.menu-item a');

menuListItemNodes[0].classList.add("active"); //home is active by deafult
window.addEventListener('scroll', () => {
    var current = ""
    siteRegions.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;        
        if (scrollY >= sectionTop-sectionHeight/3) {
            current = section.getAttribute("id");            
        }
    }) 
    
    menuListItemNodes.forEach(li => {
        li.classList.remove("active")        
        if (li.getAttribute("href").includes(current)) {            
            li.classList.add("active");
        }
    })
})



//TODO: add HTML elements via Drupal, to eliminate the need for the scripts bellow

// inject <b> tag in siteslogan
var brandingContainer = document.querySelector('#block-adchallenge-branding');
var siteSloganNode = brandingContainer.querySelector('.site-slogan');
siteSloganNode.innerHTML = "<b>Music</b>Theme";

//inject empty spans that will be styled to arrow elements for readme  
var blockContainer = document.querySelector('#block-adchallenge-content');
var newsContainer = blockContainer.querySelector('.view-content');
var readmeNode = newsContainer.getElementsByClassName('node-readmore');
for (i = 0; i < readmeNode.length; i++) {
    readmeNode[i].getElementsByTagName("a")[0].innerHTML += "<span class=arrow-right></span>";
}


//inject empty divs to be styled to boxes in about me section
var aboutMeContainer = document.querySelector('#challenge-about-me');
var imageContainer = aboutMeContainer.querySelector('.field--name-field-image.field--type-image.field--label-hidden.field__item');
var bgSquareFlat = document.createElement('div');
var bgSquareRotated = document.createElement('div');
var emptyDiv = document.createElement('div');

bgSquareFlat.className = "bg-square-flat";
emptyDiv.className = "aspect-ratio-hack";  //(Padding is calculated according to the parent element width)I use this property to set height equal to a responsive width
bgSquareFlat.appendChild(emptyDiv);
imageContainer.appendChild(bgSquareFlat);

bgSquareRotated.className = "bg-square-rotated";
bgSquareRotated.appendChild(emptyDiv.cloneNode(true));
imageContainer.appendChild(bgSquareRotated);








