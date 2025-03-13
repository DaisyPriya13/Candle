let scene, camera, renderer, candle;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 2, 5);
    
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(400, 400);
    document.getElementById("canvas-container").appendChild(renderer.domElement);
    
    const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    candle = new THREE.Mesh(geometry, material);
    scene.add(candle);
    
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(2, 5, 5);
    scene.add(light);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    candle.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function updateColor() {
    const color = document.getElementById("colorPicker").value;
    candle.material.color.set(color);
}

function updateText() {
    const text = document.getElementById("textInput").value;
    const basePrice = 10;
    const textCost = text.length * 0.5;
    document.getElementById("price").innerText = (basePrice + textCost).toFixed(2);
}

init();
