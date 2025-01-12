function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}

// JavaScript function to change the project
let currentProject = 1; // Start with the first project

function changeProject(direction,toArrows) {
  if(toArrows){
    currentProject = toArrows
  }else{
    currentProject += direction;
  }

  // Limit the project number to 1, 2, or 3 (assuming you have 3 projects)
  if (currentProject < 1) {
    currentProject = 2;
  } else if (currentProject > 2) {
    currentProject = 1;
  }

  // Update the project content based on the currentProject value
  const projectTitle = document.querySelector('.project-title');
  //const projectDescription = document.querySelector('.project-description');
  const projectImg = document.querySelector('.project-img')
  const whiteArrows = document.querySelectorAll('.white-arrows span')
  const projectText = document.querySelector('.project-description')

  // const projectLinks = {
  //   1: {
  //     github: "https://github.com/user/project1",
  //     demo: "https://project1.demo.com",
  //   },
  //   2: {
  //     github: "https://github.com/user/project2",
  //     demo: "https://project2.demo.com",
  //   },
  //   3: {
  //     github: "https://github.com/user/project3",
  //     demo: "https://project3.demo.com",
  //   },
  // };

  projectBtn1.addEventListener("click", () => {
    const githubLink = projectLinks[currentProject]?.github;
    if (githubLink) {
      window.open(githubLink, "_blank");
    } else {
      console.error("GitHub link not found for the current project.");
    }
  });

  projectBtn2.addEventListener("click", () => {
    const demoLink = projectLinks[currentProject]?.demo;
    if (demoLink) {
      window.open(demoLink, "_blank");
    } else {
      console.error("Demo link not found for the current project.");
    }
  });

  switch (currentProject) {
    case 1:
      projectTitle.textContent = 'Project One';
      //projectDescription.textContent = 'This is a description of Project One.';
      projectImg.src = './assets/Open_API.png';
      projectText.innerHTML='asdasdasdasd';
      whiteArrows[0].style.backgroundColor = 'red'
      whiteArrows[1].style.backgroundColor = 'white'
      whiteArrows[2].style.backgroundColor = 'white'
      break;
    case 2:
      projectTitle.textContent = 'Project Two';
     // projectDescription.textContent = 'This is a description of Project Two.';
      projectImg.src = './assets/React_Library.png';
      projectText.innerHTML='1234151235';
      whiteArrows[0].style.backgroundColor = 'white'
      whiteArrows[1].style.backgroundColor = 'red'
      whiteArrows[2].style.backgroundColor = 'white'
      break;
    // case 3:
    //   projectTitle.textContent = 'Project Three';
    //   //projectDescription.textContent = 'This is a description of Project Three.';
    //   projectImg.src = './assets/React_Library.png';
    //   projectText.innerHTML='123415123234523423dgfsdfsd5';
    //   whiteArrows[0].style.backgroundColor = 'white'
    //   whiteArrows[1].style.backgroundColor = 'white'
    //   whiteArrows[2].style.backgroundColor = 'red'
    //   break;
  }
}


let projectBtn1 = document.querySelector('.project-btn1')
let projectBtn2 = document.querySelector('.project-btn2')
projectBtn1.addEventListener('click',()=>{
  if(currentProject==1){
    window.open('https://github.com/tokamaky/Xiaohang-open_api_platform')
  }else if(currentProject==2){
    window.open('https://github.com/tokamaky/LibraryApp-FullStack-React-tsx')
    }
  // }else{
  //   window.open()
  // }
})
projectBtn2.addEventListener('click',()=>{
  if(currentProject==1){
    window.open('https://xiaohang-openapiplatform-production.up.railway.app/')
  }else if(currentProject==2){
    window.open('https://jerrylibrary.up.railway.app/home')
  }
  // else{
  //   window.open()
  // }
})

// Initialize the project content
changeProject(0,null);


const projects = document.querySelector('#projects')
projects.addEventListener('mouseenter',()=>{
  stop()
})
projects.addEventListener('mouseleave',()=>{
  start()
})

// 开始定时器
function start() {
  timer = setInterval(function () {
    changeProject(1,null)
  }, 2000);
}
start();
// 关闭定时器
function stop() {
  clearInterval(timer);
}
