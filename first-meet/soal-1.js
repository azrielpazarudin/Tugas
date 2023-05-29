let Azriel = {
    nama : "Azriel",
    nim : "02042111019",
    email : "sapuinjukemak@gmail.com"
}

let {nama,nim,email}  = Azriel;

console.log("Nama :"+nama+"\nNIM : "+nim+"\nEmail"+email);

let arrOne = ["Fauzi","Helmi"];
let arrTwo = ["Andri","Akbar"];
let arrThree = ["Arya","Bg Habib"];

let arrBuffer = [...arrOne,...arrTwo,...arrThree];
console.log(arrBuffer);