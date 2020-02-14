export const isAdult = (age) => {
    return (age > 17);
};
export const canDrink = (age) => {
    return (age > 20);
};

const isSenior = (age) => (age >= 65);
export default isSenior;