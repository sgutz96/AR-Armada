// Archivo scene.js
var scene, camera, renderer, clock, deltaTime, totalTime;
var arToolkitSource, arToolkitContext;

initialize();
animate();

function initialize() {
    scene = new THREE.Scene();

    let ambientLight = new THREE.AmbientLight(0xcccccc, 1.0);
    scene.add(ambientLight);

    camera = new THREE.Camera();
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(new THREE.Color('lightgrey'), 0);
    renderer.setSize(640, 480);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';
    document.body.appendChild(renderer.domElement);

    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;

    ////////////////////////////////////////////////////////////
    // setup arToolkitSource
    ////////////////////////////////////////////////////////////

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    function onResize() {
        arToolkitSource.onResize();
        arToolkitSource.copySizeTo(renderer.domElement);
        if (arToolkitContext.arController !== null) {
            arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
        }
    }

    arToolkitSource.init(function onReady() {
        onResize();
    });

    // handle resize event
    window.addEventListener('resize', function () {
        onResize();
    });

    ////////////////////////////////////////////////////////////
    // setup arToolkitContext
    ////////////////////////////////////////////////////////////

    // create atToolkitContext
    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono'
    });

    // copy projection matrix to camera when initialization complete
    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    ////////////////////////////////////////////////////////////
    // setup markerRoots
    ////////////////////////////////////////////////////////////
    var patternUrl1 = "../data/hiro.patt";
    var setPath3D1 = "../../models/Pez/";  
    var MTL1 = 'fish-2.mtl';    
    var Modelo3d1 = 'fish-2.obj';
    loadARModel(patternUrl1, setPath3D1, MTL1, Modelo3d1); 

    var patternUrl2 = "../data/kanji.patt";    
    var setPath3D2 = "../../models/Bongo/";   
    var MTL2 = 'Bongo.mtl';    
    var Modelo3d2 = 'Bongo.obj';  
    //loadARModel(patternUrl2, setPath3D2, MTL2, Modelo3d2); 
    VideoPatt1 ="data/kanji.patt";
    videoID = 'video1';
    videoProyection(VideoPatt1);
}

function update() {
    // update artoolkit on every frame
    if (arToolkitSource.ready !== false)
        arToolkitContext.update(arToolkitSource.domElement);
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    deltaTime = clock.getDelta();
    totalTime += deltaTime;
    update();
    render();
}
