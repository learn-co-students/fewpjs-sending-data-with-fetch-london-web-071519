// Add your code here

const body = document.querySelector('body')

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(obj => {
        body.innerHTML = `<h1>${obj["id"]}</h1>`
    })
    .catch(error =>  body.innerHTML = `<h1>${error.message}</h1>` )
};