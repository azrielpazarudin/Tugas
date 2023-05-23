const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const firstFunc = ()=>[...hewanBuas,...hewanJinak];
const scndFunc = ()=>{
   const [wiskas,sawi,dedak]=hewanJinak
    console.log("Wiskas  = "+wiskas+"\nSawi = "+sawi+"\nDedak = "+dedak);
    
}

const print = ()=>{
    console.log(firstFunc());
    setTimeout(()=>{
        scndFunc();
    },5000)
}

print();