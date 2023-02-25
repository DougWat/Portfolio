let pathTrace = null;

class PathTrace {
    constructor(){
        this.targets = $('.path-trace');
        $(this.targets).each((i,target)=>{
            this.BuildPaths(target);
        }); 
    }
    

    TriggerTarget(target){
        $(target).addClass("start");
    }
    
    BuildPaths(target){
        const paths = $(target).find('line');
        
        paths.each((i, path)=>{
            const l = $(path)[0].getTotalLength();
            $(path)[0].style.setProperty('--offset', l);
            setTimeout(()=>{
                $(path).addClass("start");
            },(0 * (i+1)));
        });
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    pathTrace = new PathTrace();
});