// page theme functions

function dark(){
    document.getElementById('style').href='/style-dark.css';
    console.log("Switched to dark mode");
    return
};
function light(){
    document.getElementById('style').href='/style.css';
    console.log("Switched to light mode");
    return
};

//temp converter functions

function tempConvert(){
    const tempUnit = document.getElementById('tempUnit');
    const tempUnitWanted = document.getElementById('tempUnitWanted');
    const temp = document.getElementById('temp');
    let newTemp;
    //i know this can be done with switch. i cannot work it out, if you know how to actually use it please help
    if (tempUnit == 'fahrenheit', tempUnitWanted == 'celsius'){
        newTemp = (5/9) * (temp-32);
    };
    else if (tempUnit == 'celsius', tempUnitWanted == 'fahrenheit'){
        newTemp = (temp * 9/5) + 32;
    };
    else if (tempUnit == 'celsius', tempUnitWanted == 'kelvin'){
        newTemp = temp + 273.15;
    };
    return newTemp;
}