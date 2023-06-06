let birds = [];

for (var i = 0; i < 100; i++) {
       birds[i] = 'Bird fly '+ (i + 1);    
}

module.exports.getAllBirds =  ()=> {
    return birds;
}
