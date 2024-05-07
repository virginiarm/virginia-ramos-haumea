const bodyElement=document.body;
const footerElement= document.createElement('footer');
footerElement.textContent="This is the footer of my website.";
bodyElement.appendChild(footerElement);
const today= new Date();
const thisYear=today.getFullYearz();
const footer=document.querySelector('footer');
const copyright=document.createElement('p');
copyright.innerHTML= 'Virginia &copy; ${thisYear}';
footer.appendChild(copyright);


const skills=["HTML","JavaScript","Python","GitHub"];
const skillsSection=document.getElementById('skills-section');
const skillsList=skillsSection.querySelector('ul');
for (let i=0;i< skills.length; i++){
    const skill=document.createElement('li');
}
skillsList.appendChild(skill);