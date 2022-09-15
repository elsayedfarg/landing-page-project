//store all sections in a variable
const sections=document.querySelectorAll('section');

//store the un ordered list in a variable by it's id
const unOrderedList=document.getElementById("navbar__list");

//creting fragment to store the un ordered list and it's content in it
const frag=document.createDocumentFragment();

//creating function and put (for of) loop inside it to use it for showing the nav bar
function createNavBar()
{
  for(const section of sections)
  {
  const list=document.createElement('li');

  const link=document.createElement('a');

  //extracting (data-nav) value from the section and store it in a variable
  const dataNavValue=section.getAttribute('data-nav');

  //add this variable(dataNavValue) to the inner html of the link
  link.innerHTML=dataNavValue;

  //add class to the link
  link.classList.add('menu__link');

  //append the link inside the fragment
  frag.appendChild(link);

  //add event to respond to our action and move to the clicked section smoothly using the arrow function
  link.addEventListener('click',()=>
  {
  section.scrollIntoView({behavior:'smooth'})
})
}
  //append the frag the contains the link inside the un ordered list
  unOrderedList.appendChild(frag);
}
createNavBar();

//----------------------------------------------------------------------------------------------//

//creating a function to (get the active section)
function activation()
{

  //adding (eventListener) to respond when we scroll
  window.addEventListener('scroll',function()
{

  //creating (for) to use it for looping through each (section) of the (sections)
  for(const section of sections)
  {
    //if we at the section and scroll through it then we will activate (your-active-class) else we will remove it
    if((section.getBoundingClientRect().top>=-400)&&(section.getBoundingClientRect().top<=100))
    {
      section.classList.add('your-active-class');
    }
    else {
      section.classList.remove('your-active-class');
    }
  }
});
}
activation();

//-----------------------------------------------------------------//

//creating a function to activate the links
function linkActivation()
{
  //putting each link of the links in a variable
  const allLinks=document.querySelectorAll('a');
  for (const link of allLinks)
  {
    //check if the (section) has ('your-active-class') then it means that we on this section
    if(section.classList.contains('your-active-class'))
    {
      //so we but this section in a variable
      const activeSection=section;
      for(const link of allLinks)
      {
        if(link.innerHTML=activeSection.getAttribute('data-nav'))
        {
          link.classList.add('active');
        }
        else {
          link.classList.remove('active');
        }
      }
    }
  }
}
/* WEB API WITH FETCH DEMO--  */
