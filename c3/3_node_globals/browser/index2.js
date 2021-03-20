console.log('Index2');
setTimeout(() => {
    console.log('Global: ', myGlobal);
    console.log('Global 2: ', myGlobal2);
    console.log('NOT Global: ', notAGlobal);
})