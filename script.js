function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}

// JavaScript function to change the project
let currentProject = 1; // Start with the first project

function changeProject(direction) {
  currentProject += direction;

  // Limit the project number to 1, 2, or 3 (assuming you have 3 projects)
  if (currentProject < 1) {
    currentProject = 3;
  } else if (currentProject > 3) {
    currentProject = 1;
  }

  // Update the project content based on the currentProject value
  // You can fetch data dynamically or use static data as per your requirements
  // For simplicity, I'm assuming static data here
  const projectTitle = document.querySelector('.project-title');
  const projectDescription = document.querySelector('.project-description');
  const projectImg = document.querySelector('.project-img');

  switch (currentProject) {
    case 1:
      projectTitle.textContent = 'Project One';
      projectDescription.textContent = 'This is a description of Project One.';
      projectImg.src = './assets/project-1.png';
      break;
    case 2:
      projectTitle.textContent = 'Project Two';
      projectDescription.textContent = 'This is a description of Project Two.';
      projectImg.src = './assets/project-2.png';
      break;
    case 3:
      projectTitle.textContent = 'Project Three';
      projectDescription.textContent = 'This is a description of Project Three.';
      projectImg.src = './assets/project-3.png';
      break;
  }
}

// Function to open GitHub link
function openGitHub(url) {
  window.open(url, '_blank');
}

// Function to open Live Demo link
function openDemo(url) {
  window.open(url, '_blank');
}

// Initialize the project content
changeProject(0);