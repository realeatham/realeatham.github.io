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
    const tempBox = document.getElementById('temp');
    const tempUnitBox = document.getElementById('tempUnit');
    const tempUnitWantedBox = document.getElementById('tempUnitWanted');
    const temp = tempBox.value;
    const tempUnit = tempUnitBox.options[tempUnitBox.selectedIndex].text;
    const tempUnitWanted = tempUnitWantedBox.options[tempUnitWantedBox.selectedIndex].text;
    let newTemp;
    //i know this can be done with switch. i cannot work it out, if you know how to actually use it please help
    if (tempUnit == 'Fahrenheit'&&  tempUnitWanted == 'Celsius'){
        newTemp = (5/9) * (temp-32);
    }
    else if (tempUnit == 'Celsius'&&  tempUnitWanted == 'Fahrenheit'){
        newTemp = (temp * 9/5) + 32;
    }
    else if (tempUnit == 'Celsius'&&  tempUnitWanted == 'Kelvin'){
        newTemp = temp + 273.15;
    }
    else if (tempUnit == 'Kelvin'&&  tempUnitWanted == 'Celsius'){
        newTemp = temp - 273.15;
    }
    else if (tempUnit == 'Fahrenheit'&&  tempUnitWanted == 'Kelvin'){
        newTemp = (temp - 32) * 5/9 + 273.15;
    }
    else if (tempUnit == 'Kelvin'&&  tempUnitWanted == 'Fahrenheit'){
        newTemp = (temp - 273.15) * 9/5 + 32;
    }
    else{
        newTemp = "An Error Occured, Original Temperature was " + temp
    }
    return newTemp;
};