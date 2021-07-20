function validateURL(myURL) {
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (pattern.test(myURL)) {
        return pattern.test(myURL);
    } else {
        return false;
    }
}

function clearText() {
    document.getElementById('name').value = "";

}

export { validateURL, clearText }