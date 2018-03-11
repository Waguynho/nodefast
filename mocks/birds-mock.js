let birds = [];

for (var i = 0; i < 100; i++) {
       birds[i] = 'Pássaro '+ (i + 1);    
}

module.exports.getAllBirds =  ()=> {
    return birds;
}
