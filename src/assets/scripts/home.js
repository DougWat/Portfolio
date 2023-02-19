function HomeHero(){
  const section = $("#HomeHero");
  const name = $("#HomeHeroName");
  
  let allow = true;
  
  let sectionRect = $(section)[0].getBoundingClientRect();
  let sectionWidth;
  let sectionHeight;
  let sectionWidthHalf;
  let sectionHeightHalf;

  let xCosInterval = 0;

  SetSectionDimensions();

  $(section)[0].onmousemove = (e)=>{
    if(!allow){return;}
    const x1 = e.clientX - sectionRect.left;
    const y1 = e.clientY - sectionRect.top;

    const x = (x1 - sectionWidthHalf)/sectionWidthHalf;
    const y = (y1 - sectionHeightHalf)/sectionHeightHalf;

    $(name)[0].style.setProperty('--x-div-part', x);
    $(name)[0].style.setProperty('--y-div', y);
    allow = false;
    setTimeout(()=>{allow=true;},60);
  }

  function SetSectionDimensions(){
    sectionRect = $(section)[0].getBoundingClientRect();
    sectionWidth = sectionRect.width;
    sectionHeight = sectionRect.height;
    sectionWidthHalf = sectionWidth/2;
    sectionHeightHalf = sectionHeight/2;
  }

  pathTrace.TriggerTarget($(section).find('.path-trace'));
  setTimeout(()=>{
    $(name).addClass('change');
  },1200);

  window.addEventListener("resize", SetSectionDimensions);

  setInterval(()=>{
    const xC = Math.cos(xCosInterval);
    $(name)[0].style.setProperty('--x-cos', xC);
    xCosInterval += .05;
  },30);
}

document.addEventListener('DOMContentLoaded',()=>{
    HomeHero();
});