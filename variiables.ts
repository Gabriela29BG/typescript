//boolean
let estudiaJavascript: boolean = false

if(estudiaJavascript){
    console.log("puedes seguir viendoeste curso crso de typescript")
}else{
    console.log("Primero aprende javascript")
}

//number
let equipo1: number | null = 11
let equipo2: number = 10
let messi: number = 1
let juegaMessi: boolean = true

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void{
    if(juegaMessi) equipo1 += messi
    if(equipo1 > equipo2) console.log("gana el equipo 1")
    if(equipo2 > equipo1) console.log("gana el equipo 2")
    if(equipo1 == equipo2) console.log("emptados")
}

jugar(equipo1,equipo2, juegaMessi)


//cuando no especificas elvalor se puede sobre escribir
//y llo meoodosque binda deopciones pueden variar basandose en la ultma modificacion

//let disney;  o
let disney: any; //es mejor no poner any

disney = 'Star Wars'
console.log(disney.)

disney = 150000
console.log(disney.)

