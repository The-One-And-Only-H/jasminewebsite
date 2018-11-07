// Paragraph headers
let html = ["About me", "My vision", "My values", "My mission", "Contact"];
// Paragraph info
let info = ["I am a freelance educator, specialising in Sex and Relationships Education (SRE). Whilst I am very glad that in 2017 new legislation was passed making it a requirement that sex and relationship education take place in both primary and secondary schools, I still think there is a long way to go. Until the government redrafts it’s guidance booklet from 2000, encouraging teachers to argue for abstinence, it is important to have people and policies in place. At university I volunteered with Sexpression, a charity dedicated to going into schools and peer-leading sessions. My experience hosting the Vagina Museum’s education sessions has also brought me into contact with many adults who lament their own, or their children’s, lack of SRE education. This is why I want to be a dedicated SRE teacher.", "For every child to receive current and relevant sex and relationships education, at each stage of their development.<br>For adults to feel knowledgeable, and comfortable talking about the associated subjects.<br>For sex and relationship education to be de-stigmatised.", "Inclusivity - for LGBTQ+ people, and for all ages and abilities.<br>Irreverence - to demystify every topic, and question what we know.<br>Supportive - create groups in which people are safe.<br>Open - to discuss any and all topics.<br>Inquisitive - to aspire to always learn more", "To create a safe teaching space, in which people feel comfortable to question what they know, or what they think they know.<br>From this, to create a safer space outside the classroom, in which people feel comfortable to be themselves without fear of repercussions.<br>To start a conversation and stimulate an interest in a subject that is an integral part of life.<br>To give people the tools to continue their own education and research."];
let left = [html[0], html[2], html[4]];
let right = [html[1], html[3]];

// Fetching jQuery framework
let script = document.createElement("script");
  script.src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  document.body.appendChild(script);
// Waiting for the browser to load the script before running the below code
  script.onload = function(){

// Name header
let name = document.createElement("h1");
  name.classList = "center";
  name.innerHTML = "Jasmine Evans";
  document.body.appendChild(name);

// See image below with animation - play around with animation
let myImage = new Image(400, 400);
myImage.src = 'jasmineprofilesqr.jpg';
myImage.classList = "image";
document.body.appendChild(myImage);
let imageheight = 100;
myImage.onclick = animate;
function animate(){
 imageheight *= 0.99;
 myImage.style.height = `${imageheight}px`;
 window.requestAnimationFrame(animate);
}

// For loop broken down into two separate functions outside of onLoad function (See function one and two below)
for (i=0; i<5; i++) {
  let headingtext = html[i]
  let element = createheading(headingtext);
  document.body.appendChild(element);
  let infotext = info[i]
  if (infotext == undefined) {
    infotext = "";
  }
  let paraone = createpara(infotext);
  document.body.appendChild(paraone);
}

$(".heading").click(function(event){
  $(event.target).next().slideToggle("slow");
});

  };

// Function one
function createheading(text){
  let element = document.createElement("div");
  element.classList.add("heading");
    if (left.includes(text)) {
      element.classList.add("left");
    } else if (right.includes(text)) {
      element.classList.add("right");
    }
  element.innerHTML = text;
  return element;
};

// Function two
function createpara(text){
  let paraone = document.createElement("p");
  paraone.classList.add("info");
  paraone.innerHTML = text;
  $(paraone).hide()
  return paraone;
};
