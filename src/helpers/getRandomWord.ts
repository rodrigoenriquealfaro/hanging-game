let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'ZAPATILLAS',
    'MODEM',
    'CARGADOR',
    'CAMA',
    'ESCRITORIO',
    'PANTALLA',
    'TECLADO',
    'MOUSE',
    'VASO',
    'TERMO',
    'PERRO',
    'BICICLETA',
    'GATO',
    'PAJARO',
    'TURISTA',
    'AMOR',
    'SEXO',
    'AMIGOS',
    'FIESTAS',
    'ALQUILER',
    'CIUDAD',
    'DEPRESION',
]

export function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length)

    return words[randomIndex]
}