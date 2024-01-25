//objeto literal
let programador =  {
    nombre: 'sergio code',
    tecnologias: ['react','angular','lol'],
    mate: true
}

//programador.


//tiparelcodigo, se usa para qeelcodigo pueda sermasestricto

type Programar = {
    lenguajes: string[],
    nombre: string,
    conociemto:  boolean | null //es mejor para no poner any
}

let Programa2: Programar = {
    lenguajes: ['cobol', 'java'],
    nombre: 'capo',
    conociemto: false
}

let Programa3: Programar = {
    lenguajes: ['java', 'lol'],
    nombre: 'artezana',
    conociemto: true
}

function mostrar ( Programa : Programar){
    console.log(`estos datos son de ${Programa.nombre}`)
}

mostrar(Programa3)

