class per {
    constructor(uname, ugender) {
        this.name = uname;
        this.gender = ugender;
    }
}

let person = new per("saad", "male");

function submit() {
    const uname = document.querySelector("#name");
    alert(`MY NAME IS : ${uname.value}`);
    const ugender = document.getElementById("gender");
    alert(`MY GENDER IS : ${ugender.value}`);
    person.name = uname;
    person.gender = ugender;

    document.getElementById("001").src = "https://joeschmoe.io/api/v1/";
    let url = document.getElementById("001").src;
    console.log(url);
    alert(`URL IS : ${url}`);
    url = url + uname.value;
    alert(`URL IS : ${url}`);
    document.getElementById("001").src = url;
 

    document.getElementById("000").src = "https://joeschmoe.io/api/v1/";
    let uurl = document.getElementById("000").src;
    console.log(uurl);
    alert(`URL IS : ${uurl}`);
    uurl = uurl + ugender.value + "/" + uname.value;
    alert(`URL IS : ${uurl}`);
    document.getElementById("000").src = uurl;

}

