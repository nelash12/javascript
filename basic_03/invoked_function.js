// Immediately Invoked Function expression (IIFE)

(function chai(){ // ( IIFE )
    console.log(`DB Connecte`);
})();

((name) => {
    console.log(`${name} DB is connected Two`)
})("nagendra");