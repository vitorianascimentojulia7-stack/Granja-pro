export interface Animal {
    id: string;
    brinco: string;
    sexo: 'Macho' | 'Fêmea';
    dataNascimento: string;
}

export class AnimalModel {
    static createAnimal(brinco: string, sexo: 'Macho' | 'Fêmea'): Animal {
        return {
            id: Date.now().toString(),
            brinco,
            sexo,
            dataNascimento: new Date().toISOString().split('T')[0],
        };
    }

    static filterByBrinco(animals: Animal[], search: string): Animal[] {
        return animals.filter(animal => animal.brinco.toLowerCase().includes(search.toLowerCase()));
    }
}