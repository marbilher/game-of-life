
function GoLCube(xCoord, yCoord, zCoord) {
    THREE.Object3D.call(this);

    this.geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    this.materialWireframe = new THREE.MeshPhongMaterial({color:"red",wireframe:true});
    this.materialSolid = new THREE.MeshPhongMaterial({color:"green",wireframe:false});
    this.material = new THREE.MeshPhongMaterial( {
        color: 00000000,
        opacity: 0.3,
        transparent: true
    } );
    this.mesh = new THREE.Mesh( this.geometry, this.material );

    this.geo = new THREE.EdgesGeometry( this.mesh.geometry ); // or WireframeGeometry
    // this.mat = new THREE.LineBasicMaterial( { color: black, linewidth: 3, opacity: 0.5 } );
    // this.wireframe = new THREE.LineSegments( this.geo, this.mat );
    this.mesh.add(this.wireframe );
    this.mesh.position.set(xCoord, yCoord, zCoord)
}

GoLCube.prototype = Object.create(THREE.Object3D.prototype)
GoLCube.prototype.constructor = GoLCube;

GoLCube.prototype.setRed = function() {
    const red = new THREE.Color("rgb(100%, 0%, 0%)")
    this.material.color = red;
    // this.material.opacity = .2;
}

GoLCube.prototype.setColorByState = function(referenceState) {
    if(!referenceState) {
        this.material.opacity = .0;

    } else {
        const black = new THREE.Color("rgb(0%, 0%, 0%)")
        this.material.color = black
        this.material.opacity = .7;
    }
}