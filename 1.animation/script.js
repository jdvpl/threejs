// Scene mesh camera renderer

// Scene
const scene=new THREE.Scene()
// mesh
const geometry=new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshBasicMaterial({color:"red"})
const mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);

// camera
const aspect={
  width:window.innerWidth,
  height:window.innerHeight
}
const camera=new THREE.PerspectiveCamera(75,aspect.width/aspect.height);
camera.position.z=3;
scene.add(camera)
const canvas=document.querySelector('.canvas');
const renderer= new THREE.WebGLRenderer({canvas})
renderer.setSize(aspect.width,aspect.height);
renderer.render(scene,camera);

// clock class
const clock=new THREE.Clock();

// animate
const animate=()=>{
  const elapsedTime=clock.getElapsedTime();
  
  mesh.rotation.y=elapsedTime*Math.PI/5;
  mesh.rotation.x=elapsedTime*Math.PI/3;
  
  renderer.render(scene,camera)
  window.requestAnimationFrame(animate)
}
animate()