export interface Pet{
    name:string;
    age:number;
    breed:string;
    specie:Specie;
}

export enum Specie{
    DOG='DOG', CAT='CAT', DUCK='DUCK',
    SNAKE='SNAKE', OTHER='OTHER'
}