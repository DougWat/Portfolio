
function HomeHero(){
    const section = $("#HomeHero");
    const heroLines = $(section).find('[data-homeherolines]').find('.path-trace');

    scrollTrigger.add(
        '[data-homeherolines]',{
            once:true, 
            toggle:{
                callback:{
                    in: () => {
                        pathTrace.TriggerTarget(heroLines);
                        console.log("VERY IN");
                    },
                    out: () => {console.log("VERY OUT")}
                }
            },           
            offset: {
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
    );
}

document.addEventListener('DOMContentLoaded',()=>{
    HomeHero();
});