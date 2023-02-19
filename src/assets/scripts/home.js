function HomeHero(){
  const section = $("#HomeHero");
  const sectionRect = $(section)[0].getBoundingClientRect();
  const name = $("#HomeHeroName");
  
  let allow = true;

  let sectionWidth;
  let sectionHeight;
  let sectionWidthHalf;
  let sectionHeightHalf;
  SetSectionDimensions();

  $(section)[0].onmousemove = (e)=>{
    if(!allow){return;}
    const x1 = e.clientX - sectionRect.left;
    const y1 = e.clientY - sectionRect.top;

    const x = Math.round((x1 - sectionWidthHalf)/sectionWidthHalf * 100) / 100;
    const y = Math.round((y1 - sectionHeightHalf)/sectionHeightHalf * 100) / 100;

    $(name)[0].style.setProperty('--x-div', x);
    $(name)[0].style.setProperty('--y-div', y);
    allow = false;
    setTimeout(()=>{allow=true;},10)
  }

  function SetSectionDimensions(){
    sectionWidth = sectionRect.width;
    sectionHeight = sectionRect.height;
    sectionWidthHalf = sectionWidth/2;
    sectionHeightHalf = sectionHeight/2;
  }

  pathTrace.TriggerTarget($(section).find('.path-trace'));
  setTimeout(()=>{
    $(name).addClass('change');
  },2000);

  window.addEventListener("resize", SetSectionDimensions);
}

document.addEventListener('DOMContentLoaded',()=>{
    HomeHero();
});