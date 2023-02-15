/*Truncate the text*/

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

/*Extract the money*/

function extractCurrencyValue(str) {
    return +str.slice(1);
}