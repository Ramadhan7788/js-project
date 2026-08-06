function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
    if (timeOfDay === 'morning') {
        return 'Good morning';
    }
    if (timeOfDay === 'afternoon') {
        return 'Good afternoon'
    }
    else return 'Good evening';
};

function createGreeting(firstName, lastName, timeOfDay){
    const greeting = getGreeting(timeOfDay);
    const name = formatName(firstName, lastName);
    
    return `${greeting}, ${name}`;
}

console.log(formatName('Ava', 'Stone',));
console.log(formatName('Noah', 'Kim',));
console.log(formatName('Mina', 'Patel'));

console.log(getGreeting('morning'));
console.log(getGreeting('evening'));
console.log(getGreeting('afternoon'));

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));