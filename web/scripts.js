function dark(){
    document.getElementById('style').href='/style-dark.css'
    console.log("Switched to dark mode")
    return
}
function light(){
    document.getElementById('style').href='/style.css'
    console.log("Switched to light mode")
    return
}