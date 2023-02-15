/*What's the result of OR?*/
alert( null || 2 || undefined ); //True

/*What's the result of OR'ed alerts?*/
alert( alert(1) || 2 || alert(3) ); // first 1, then 2

/*What is the result of AND?*/
alert( 1 && null && 2 ); // null

/*What is the result of AND'ed alerts?*/
alert( alert(1) && alert(2) ); // 1, and then undefined

/*The result of OR AND OR*/
alert( null || 2 && 3 || 4 ); //

/*Check the range between*/
if (age >= 14 && age <= 90){}

/*Check the range outside*/
if (!(age >= 14 && age <= 90)){}

/*Check the login*/
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}



