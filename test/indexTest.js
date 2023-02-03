const sumar = require('../index');
const assert = require('assert');

//old -> caja negra y caja blanca
// Actualidad -> pruebas unitarias
//            -> pruebas funcionales (E2E)
//                  -> Coverage
//            -> pruebas de integración
//            -> pruebas de estres


// ¿Cómo se escribe una prueba?
// 50 % => 1. prueba correcta y una prueba que falle.
// Asserts = Afirmación

describe("Probar la suma de dos números", ()=>{
  //Afirmamos que cinco más cinco son 10
  it("cinco más cinco es 10", ()=>{
    assert.equal(10, sumar(5,5));
  });
  // Afirmamos que cinco más cinco no son 55
  it("cinco más cinco no son 55", ()=>{
    assert.notEqual(55, sumar(5,5));
  });
});
