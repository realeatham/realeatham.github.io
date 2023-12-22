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
    switch(tempUnit){
        case tempUnit == tempUnitWanted:
            newTemp = temp;
            break;
        case tempUnit == 'celsius', tempUnitWanted == 'fahrenheit':
            newTemp = temp * (5/9) + 32
            break;
    }
    return newTemp;
}