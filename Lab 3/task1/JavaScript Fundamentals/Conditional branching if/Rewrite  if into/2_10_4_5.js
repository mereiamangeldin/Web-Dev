/*Rewrite 'if' into '*/

let result;

let result = (a+b<4) ? 'Below' : 'Over';

/*Rewrite 'if else' into '?'*/

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';