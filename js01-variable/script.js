//tipos de datos 
/*strang , boolean number undefined null
datos objetos , array , objects*/
//string
console.log("tipos de dato string: "+ "hola"+"2345");

//number: 12, -45, 56.892, +Infinity, -infinity, Nan
// los doatos numericos usan 64 bits para almacenar, pero solo usan 53 bits
// para prepresestnar el njumero .

console.log("tipos de datos number: ",12, -45, 56.892, 5/0, -23/0,4*"hola");
console.log("valor maximo represtado en JS:", Number.MAX_VALUE);
console.log("Valor seguro:", Number.Max_SAFE_INTEGER);


console.log("1.7976931348623157e+308",1.7976931348623157e+308);// 1.7976931348623157e+308
console.log("1.7976931348623157e+309",1.7976931348623157e+309);// infinity

console.log("MAX_SAFE_INTEGER + 1 ", Number.MAX_SAFE_INTEGER + 1 ); // 9007199254740992
console.log("MAX_SAFE_INTEGER + 2 ", Number.MAX_SAFE_INTEGER + 2 ); // 9007199254740993
console.log("MAX_SAFE_INTEGER + 3 ", Number.MAX_SAFE_INTEGER + 3 ); // 9007199254740994
console.log("MAX_SAFE_INTEGER + 4 ", Number.MAX_SAFE_INTEGER + 4 ); // 9007199254740995

//Bigint
//representa valores numericos enteros, de los que el tipo number
// no pueda representar (Max_VaLUE) o no es seguro (NAX_SAFE_INTEGER)
// para que sea un BigInt se le aagrega al final la letra n.
// el limite de BigInt esta deerminado por la memoria  disponible del sistema.

let myBigInt = 9007199254740991n;
console.log("myBigInit + 1 :", myBigInt + 1n); 




//object.
//const misDatosDePerfil = {clave: valor,  clave2: valor2};
const misDatosDePerfil = {
    // atributos
    nombre: "Peso",
    apellido: "Pluma",
    edad: 23,
    isBelicoso: true,
    "23": "o que sea",
    //metodos
    nombreCompleto: function fullname(){
        return this.nombre +" "+ this.apellido;
    }
};

console.log(``)


// arrays
// tipo de objetos especiales que su fortaleza radica en los metodos con los que cuenta 
// almacena diferentes tipos de datos , suprimer elento es el indice 0

const cancionesPesoPluma = [
    "ella baila sola",
    "lady Gaga",
    "lou lou",
    "laguna",
    "el gavilan",
    {
        2020: 5,
        2021: 30,
        2023: 56,
        total: 91
    }
];

console.log("canciones por años:" + cancionesPesoPluma[5]);// [Object objecto]

// indice delobejto de numero de canciones del año 2020
console.log("canciones por años:" + cancionesPesoPluma[5]["2020"]);//5

// mostrar el "total" de canciones de PP 
console.log("total de canciones :" + cancionesPesoPluma[5]["total"]);


//conversiones de ddatos (casting)

//conversion implicita:
console.log("hola CH"+ 34);// hola Ch 34
console.log("3" + 5 + 6);//"356"
console.log("3"*3);// "3"
console.log("hola"*3);//Nan


// conversiones explicitas 
// string a number 
// Number, parseInt, parseFloat
console.log(parseInt("3")+ 5 + 6 );
console.log(Number("3")+ 5 + 6);
console.log( parseInt("3")+5+6);
console.log(parseInt("$3"))//nan
console.log(parseInt('$3MXN'.slice(1)) + 5 + 6);
console.log(parseInt('$3MXN'.split(0)) + 5 + 6);


/* 
Number()
-convierte directamente una cadena a numeros
-si el string tiene caracteres no numericos ( 12, 56), devuelve NaN
-puede manejar decimales uy exponenentes (3e3)
-puede converir  booleans y object a numbers



parseInt
*/

console.log(String(23.4));
console.log(String (true));
console.log(String ({3,4,5,6}));
console.log(String( {a:1,b:2})); // [object object ] unobjetono se puede convertir a u string 

console.log( JSON.stringify({a:1, b:2}));


// conversion a boolean
/*para que se false , debe ser: "", 0, null, undefined*/
console.log(Boolean("hola"));
console.log(Boolean("false"));//nos da true porque no es un empty string
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean ([])); // true

// conversion a number
/*
[]= 0*/

console.log( Number ([]));
console.log( Number([9]));
console.log