let data: number;

data = 42;


export interface ICar {
    color: string;
    model: string;
    topSpread?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}

const car2: ICar = {
    color: 'red',
    model: 'Mercedes',
    topSpread: 100
}

//function

const multiply = (x: number, y: number): string => {
    return (x * y).toString();
    // x * y;
}

export const cars = [car1, car2];
