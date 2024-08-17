const removeFromArray = (arreglo, item) => {
    const index = arreglo.indexOf(item);
    if (index > -1) {
        arreglo.splice(index, 1);
    }
   
    console.log(arreglo)
}

let array = [1, 2, 3, 4, 5];
removeFromArray(array, 3);