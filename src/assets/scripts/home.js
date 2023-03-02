
function HomeHero(){
    const section = $("#HomeHero");
    const heroLines = $(section).find('#HomeHeroBackground').find('.path-trace');
    const Canvas = new HomeCanvas(section);

    scrollTrigger.add(
        '[data-homeheroscroll]',{
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

    window.addEventListener('resize',()=>{
        Canvas.SetCanvasSize();
    });
}

function HomeCanvas(section){

    class Circle{
        constructor(x,y){
            this.x = x;
            this.y = y;
            this.radius = 0;
            this.exRate = 200;
        }

        OnFrame(deltaTime){
            this.radius += (this.exRate * deltaTime);
        }

        Draw(ctx){
            ctx.strokeStyle = "rgba(77, 225, 145, .1)";
            ctx.beginPath();
            ctx.ellipse(this.x,this.y,this.radius,this.radius, 360,0,360,false);
            ctx.closePath();
            ctx.stroke();
        }
    }

    const that = this;
    const canvas = $(section).find('canvas')[0];
    const ctx = canvas.getContext('2d');

    const circles = [];

    const startTime = Date.now();
    let lastTime = Date.now();
    let deltaTime = 0;

    requestAnimationFrame(Loop);
    
    Init = () =>{
        this.SetCanvasSize();

        setTimeout(Add,200);
    }
    function Add(){
        circles.push(new Circle(400,400));
        setTimeout(Add,200 + (100 * Math.cos((startTime - lastTime)/1000)));
    }

    function Loop(){
        SetDeltaTime();
        Logic();
        //Draw();
        requestAnimationFrame(Loop);
    }

    function Logic(){
        for(let i = 0; i < circles.length;  i++){
            circles[i].OnFrame(deltaTime);
        }
    }
    
    function Draw(){    
        Reset();    

        for(let i = 0; i < circles.length;  i++){
            circles[i].Draw(ctx);
        }

    }

    function Reset(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    
    function SetDeltaTime(){
        const currentTime = Date.now();
        deltaTime = (currentTime - lastTime)/1000;
        lastTime = currentTime;
    }
    
    this.SetCanvasSize = () =>{
        canvas.width = $(section).innerWidth();
        canvas.height = $(section).innerHeight();
    }
    
    Init();
}

document.addEventListener('DOMContentLoaded',()=>{
    HomeHero();
});