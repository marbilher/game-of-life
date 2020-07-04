
function CubeStore(arraySize) {
    this.size = arraySize
    this.cubes = []

    for(let x = 0; x < arraySize; x++) {
        let cubeStoreY = new Array(arraySize)
        cubes.push(cubeStoreY)
        for(let y = 0; y < arraySize; y++) {
            let cubeStoreZ = []
            cubes[x][y] = cubeStoreZ
                for(let z = 0; z < arraySize; z++) {
                    let newCube = new GoLCube(x, y, z)
                    cubes[x][y][z] = newCube
            }
        }
    }
}