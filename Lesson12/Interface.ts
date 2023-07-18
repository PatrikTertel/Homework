interface user {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number,
}


const users: user[] = [
        {
            name: 'Max Mustermann',
            age: 25,
            occupation: 'Chimney sweep',
            car: 'VW'
        },
        {
            name: 'Kate Müller',
            age: 23,
            occupation: 'Astronaut',
            children: 2
        }
    ];
    console.log(users)