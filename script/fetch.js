const url = 'http://localhost:3000/student';

//get
var myData = await fetch (url)
    .then (response => response.json())
    .then (data => {
        return data;
    })
    .catch (error => {
        // console.log('Error');
        return 'Error';
    });

//post
async function postFetch(options) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
            "Content-Type": "application/json"
        },
    });
}

export { myData, postFetch };