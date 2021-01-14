let ordenado = gods.sort((a,b) => {
    if (a.pantheon< b.pantheon){
        return 0;
    }
    else{
        return 1;
    }
})
console.log(ordenado);
