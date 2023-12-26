//import { EffectComposer } from 'EffectComposer';
//import { RenderPass } from 'RenderPass';
//import { GlitchPass } from 'GlitchPass';
//import { OutputPass } from 'OutputPass';
import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';

let heroComputer;

const HeroComputer = function(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 60, 1, .01, 10 );
    const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
    const loader = new GLTFLoader();

    const element = $("#HeroComputer");
    const lights = [];

    let computerMesh;
    let monitorMesh;
    let screenMesh;
    let chassisMesh;

    let computerScreen;

    let currentFrameTime = 0;
    const desiredFPS = 60;
    const frameTimeTarget = 1/desiredFPS;

    Init();

    function Animate() {
        currentFrameTime += Time.delta;
        if(currentFrameTime < frameTimeTarget){requestAnimationFrame( Animate ); return;}
        Logic();
        screenMesh.material.emissiveMap.needsUpdate = true;
        renderer.render( scene, camera );
        requestAnimationFrame( Animate );
        currentFrameTime = 0;
    }

    async function Init(){
        SetRandomLookPoint();

        renderer.toneMapping = THREE. ReinhardToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.physicallyCorrectLights = true;
        renderer.setSize( 500, 500 );

        $(element)[0].appendChild( renderer.domElement );

        camera.position.z = 4.5;

        BuildLights();
        await AddComputerModel();
        ConfigComputerModel();
        computerScreen = new ComputerScreen();
        Animate();
    }

    function BuildLights(){
        scene.add(new THREE.HemisphereLight(0xffeeb1,0x080820,3));
        AddLight(0xecb2ed,700,{x:-10,y:5,z:10});
        AddLight(0xC6F0C5,700,{x:10,y:5,z:10});
        AddLight(0xecb2ed,700,{x:0,y:-10,z:15});
    }

    async function AddComputerModel(){
        return new Promise((res)=>{
            loader.load( "{{ '/assets/models/computer/computer.glb' | url}}", function ( gltf ) {
                computerMesh = gltf.scene;
                scene.add( computerMesh );
                res();
            });
        });
    }

    function ConfigComputerModel(){
        computerMesh.translateY(-1.7);
        computerMesh.traverse(n => { if ( n.isMesh ) {
            n.castShadow = true;
            n.receiveShadow = true;

            if(n.material.map) n.material.map.anisotropy = 1;
            
            if(n.name == "Screen"){
                screenMesh = n;
            }else if(n.name =="Monitor"){
                monitorMesh = n;
            }else if(n.name == "Chassis"){
                chassisMesh = n;
            }
        }});
    }

    const ComputerScreen = function(){
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        Init(600);

        function Init(w){
            document.body.appendChild(canvas);
            canvas.width = w;
            canvas.height = w*.84;
            
            TextureInit();
            Render();
        }

        function TextureInit(){
            var texture = new THREE.CanvasTexture(canvas);
            texture.encoding = THREE.sRGBEncoding;
            texture.flipY = false;
            screenMesh.material.map = texture;

            screenMesh.material.emissive = new THREE.Color(0xffffff);
            screenMesh.material.emissiveMap = texture;
            screenMesh.material.emissiveIntensity = 1;
        }

        function Render(){
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

    }

    function AddLight(color, intensity, position){
        const light = new THREE.SpotLight(color,intensity);
        light.position.set(position.x,position.y,position.z);
        light.castShadow = true;
        light.shadow.bias = -0.0001;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        lights.push(light);
        scene.add(light);
    }

    let currentRot = new THREE.Vector3(0,0,0);
    let desiredRot = new THREE.Vector3(0,0,0);
    let rotSpeed = .01;

    function Logic(){
        desiredRot.x = $(element).attr('data-yDiv');
        desiredRot.y = $(element).attr('data-xDiv');

        currentRot.x = GetFrameRotInc(currentRot.x,desiredRot.x);
        currentRot.y = GetFrameRotInc(currentRot.y,desiredRot.y);

        monitorMesh.rotation.x = currentRot.x * .2;
        monitorMesh.rotation.y = currentRot.y * .7;
        screenMesh.rotation.x = currentRot.x * .2;
        screenMesh.rotation.y = currentRot.y * .7;
        chassisMesh.rotation.y = currentRot.y * .1;
    }

    function SetRandomLookPoint(){
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;

        $(element.attr('data-yDiv',y));
        $(element.attr('data-xDiv',x));

        const rand = Math.floor(Math.random()*10000) + 1000;
        console.log(rand);
        setTimeout(()=>{
            //SetRandomLookPoint();
        },rand);
    }

    
    function GetFrameRotInc(current,desired){
        const x = current - desired;
        if(Math.abs(x) < .0001){return current;}
        return current - (x/40 * (currentFrameTime * 300));
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    heroComputer = new HeroComputer();
});