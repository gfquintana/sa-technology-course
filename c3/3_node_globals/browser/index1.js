console.log('Index1');
myGlobal = 'Soy una variable global';

(function() {
    myGlobal2 = 'Sigo siendo una variable global'
    var notAGlobal = 'I am not a global'
})()