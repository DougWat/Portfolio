const scrollTrigger = new ScrollTrigger.default({trigger:{toggle:{class:{out:"not-scrolled",in:"scrolled"}}}});
function BuildScrollTrigger(){
    scrollTrigger.add(
        '[data-slideinleft]',{
            once:true,
            offset: {
            element:{
                x:0,
                y:0
            },
            viewport:{
                x:0,
                y:.4
            }
            },
        }
    );
    
    scrollTrigger.add(
        '[data-slideinright]',{
            once:true,
            offset: {
            element:{
                x:0,
                y:0
            },
            viewport:{
                x:0,
                y:.4
            }
            },
        }
    );
    scrollTrigger.add(
        '[data-slideintop]',{
            once:true,
            offset: {
            element:{
                x:0,
                y:0
            },
            viewport:{
                x:0,
                y:.4
            }
            },
        }
    );
    scrollTrigger.add(
        '[data-scalein]',{
            once:true,
            offset: {
            element:{
                x:0,
                y:0
            },
            viewport:{
                x:0,
                y:.4
            }
            },
        }
    );

    scrollTrigger.add(
        '[data-scroll-homehero]',{
            once:true,
            offset:{
                element:{
                    x:0,
                    y:0
                },
                viewport:{
                    x:0,
                    y:.4
                }
            }
        }
    )
    window.dispatchEvent(new CustomEvent('scroll'));
}

document.addEventListener("DOMContentLoaded",BuildScrollTrigger);
