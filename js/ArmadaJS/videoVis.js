function videoProyection(VideoPatt, videoID) {
  var markerRoot; 

  markerRoot = new THREE.Group();
  scene.add(markerRoot);
  let markerControls1 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
    type: 'pattern', patternUrl: VideoPatt,
  });

  let geometry1 = new THREE.PlaneBufferGeometry(2, 2, 4, 4);

  let video = document.getElementById(videoID);
  let texture = new THREE.VideoTexture(video);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.format = THREE.RGBFormat;
  let material1 = new THREE.MeshBasicMaterial({ map: texture });

  var mesh;
  mesh = new THREE.Mesh(geometry1, material1);
  mesh.rotation.x = -Math.PI / 2;

  markerRoot.add(mesh);
}