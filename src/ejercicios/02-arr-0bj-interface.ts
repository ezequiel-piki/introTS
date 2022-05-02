let habilidades: string[] = ['Bash','Counter','Healing']

interface Personaje {
    nombre: string;
    hp: number;
    habilidades:string[];
    puebloNatal?: string;

}

const Personaje: Personaje = {
    nombre:'Ezequiel',
    hp:100,
    habilidades: ['snatch','clean & jerk','clean']
}

Personaje.puebloNatal = 'Pueblo Paleta';
console.table(Personaje);