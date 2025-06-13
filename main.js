function storeData(event){
    event.preventDefault();

    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;

    localStorage.setItem("Name",name);
    localStorage.setItem("Email",email);

    sessionStorage.setItem("Name",name);
    sessionStorage.setItem("Email",email);

    console.log(name,email);


}