let userAge = prompt('Plase, enter your age:');
checkAge(userAge);
function checkAge(age) {
    if (age >= 18) {
        alert('Hey you are already an adult :).');
    } else {
        alert('Hey, you are under-age :).');
    }
}
