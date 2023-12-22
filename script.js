// Fetch and render skills section
const skills = document.querySelector("#skills .contents");
const renderSkills = async () => {
  try {
    // Fetch data from skills.json
    const data = await fetch("data/skills.json");
    const response = await data.json();
    let item = "";
    // Loop through the response data and create HTML elements
    for (let i = 0; i < response.length; i++) {
      item += `
          <div class="card">
            <h3>${response[i].title}</h3>
            <img src=${response[i].title_img} alt=${response[i].name} />
            <p class="description">
              ${response[i].description}
            </p>
          </div>`;
    }
    // Update the HTML content of the skills section
    skills.innerHTML = item;
  } catch (error) {
    console.log("skills error ===>>>", error);
  }
};

// Fetch and render projects section
const projects = document.querySelector("#projects .contents");
const renderProjects = async () => {
  try {
    // Fetch data from projects.json
    const data = await fetch("data/projects.json");
    const response = await data.json();
    let item = "";
    // Loop through the response data and create HTML elements
    for (let i = 0; i < response.length; i++) {
      item += `
          <div class="product">
           <img src=${response[i].thumbnail_url} alt=${response[i].name} />
           <div class="text">
            <h3>${response[i].name}</h3>
            <p  class="desc" target="blank">${response[i].description}</p>
            <a target="blank" href=${response[i].hoster_url} >View code on ${response[i].hoster}</a>
            <a target="blank" href=${response[i].demo_url} >Demo</a>
           </div>
          </div>`;
    }
    // Update the HTML content of the projects section
    projects.innerHTML = item;
  } catch (error) {
    console.log("projects error ===>>>", error);
  }
};

// Execute functions on window load
window.addEventListener("load", () => {
  renderSkills();
  renderProjects();
});

// Toggle menu icons
const menu = document.querySelector(".menu");
const navContents = document.querySelector("#nav_contents");

menu.addEventListener("click", () => {
  // Toggle the 'toggle' class on navContents
  navContents.classList.toggle("toggle");
});

// Event listeners for menu links to close the menu when clicked
const home = document.querySelector("#home_link");
home.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const about = document.querySelector("#about_link");
about.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const skillsLink = document.querySelector("#skills_link");
skillsLink.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const projectsLink = document.querySelector("#projects_link");
projectsLink.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const contact = document.querySelector("#contact_link");
contact.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

// Scroll to top button
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const moveTopButton = document.querySelector(".move-top");
  // Show/hide the scroll-to-top button based on scroll position
  if (scrollHeight > 420) {
    moveTopButton.style.opacity = 1;
    moveTopButton.style.top = "85vh";
    moveTopButton.style.right = "30px";
  } else {
    moveTopButton.style.opacity = 0;
    moveTopButton.style.top = "50vh";
    moveTopButton.style.right = "20vw";
  }
});