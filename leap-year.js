// what  is leap year jei salke amra 4 diye vag korte pari seitai hobe leapyear   example 2032%4= result 0, tahole  2032 leap year hobe.4 diye vag korle jodi kono vagshesh na thakle 0 seita leap year hobe.


function isleapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false
}
var yearmanage = 2032;

var yearmanage = isleapYear(yearmanage); {

    console.log(yearmanage);
}



// anouther way 


function Leapyearshow(year) {

    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const findYear = 2028``;

const result = Leapyearshow(findYear);
{
    console.log("ei hocce amader leap year ", result);
}
