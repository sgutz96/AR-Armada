// Archivo arModelLoader.js
function loadARModel(patt, setPath3D, MTL, Modelo3d) {
    var markerRoot;
    // build markerControls
    markerRoot = new THREE.Group();
    scene.add(markerRoot);
    let markerControls1 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
        type: 'pattern',
        patternUrl: patt,
    });

    let geometry1 = new THREE.PlaneBufferGeometry(1, 1, 4, 4);
    let loader = new THREE.TextureLoader();
    let material1 = new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 0.5 });
    
    var mesh;
    mesh = new THREE.Mesh(geometry1, material1);
    mesh.rotation.x = -Math.PI / 2;
    markerRoot.add(mesh);

    function onProgress(xhr) { console.log((xhr.loaded / xhr.total * 100) + '% loaded'); }
    function onError(xhr) { console.log('An error happened'); }

    new THREE.MTLLoader()
        .setPath(setPath3D)
        .load(MTL, function (materials) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials(materials)
                .setPath(setPath3D)
                .load(Modelo3d, function (group) {
                    mesh0 = group.children[0];
                    mesh0.material.side = THREE.DoubleSide;
                    mesh0.position.y = 0.25;
                    mesh0.scale.set(0.25, 0.25, 0.25);
                    markerRoot.add(mesh0);
                }, onProgress, onError);
        });
}
