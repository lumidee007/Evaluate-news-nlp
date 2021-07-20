// ==============================ASYNC API FETCH===========================

function submitRequest(event) {
    event.preventDefault()

    const myURL = document.getElementById('name').value;

    //validates the url using regex
    if (Client.validateURL(myURL)) {

        console.log("::: Valid url Submitted :::")

        // fectching the information using meaningcloud API 
        fetch(`http://localhost:1990/api?text=${myURL}`)
            .then(res => res.json())
            .then(function(res) {

                // updating the UI dynamically with the response
                document.querySelector(".output-container").style.display = "block";
                document.getElementById('url-visisted').innerHTML = `Visisted url:  ${  res.sentence_list[0].text}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity:  ${  res.subjectivity}`;
                document.getElementById('confidence').innerHTML = `Confidence:  ${  res.confidence}`;
                document.getElementById('irony').innerHTML = `Irony:  ${  res.irony}`;

            }).catch(err => console.log(err));

        // checking if the url field is not empty.
    } else if (myURL == '') {
        console.log("::: url is not provided. Please input a valid url:::");
        alert('Url is not provided. Please input a valid url');
    } else {
        // logging out invalid url
        console.log("::: invalid url Submitted :::");
        alert('Url is not valid. Please input a valid url');
    }

    Client.clearText();
}



export { submitRequest }