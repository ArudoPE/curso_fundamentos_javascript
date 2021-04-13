let userAge = prompt('Plase, enter your age:');
const checkAge = (age) => {
    if (age >= 18) {
        alert('Hey you are already an adult :).');
    } else {
        alert('Hey, you are under-age :).');
    }
}
checkAge(userAge);