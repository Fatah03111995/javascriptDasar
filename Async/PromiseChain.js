const state ={
    stock : {
        coffeBeans :250,
        water : 1000,
    },
    isCoffeMachineBussy : false,
}
const checkAvailability = (state) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if(!state.isCoffeMachineBussy) resolve("Mesin kopi siap digunakan");
            reject("Maaf mesin sedang sibuk")
        },1000);
    });
};
const checkStock = (state) => {
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            if(state.stock.coffeBeans >= 16 && state.stock.water >= 250) resolve ("Stok Cukup, bisa membuat kopi"); 
            reject ("stok tidak cukup!!");
        } ,1000)
    });

}
//console.log(checkStock(state)) ----> hasilnya akan promise(pending), pertama bentuknya maih promise (isi tidak bisa digunakan)
//kedua, proses masih dalam status pending(belum selesai), tidak akan ditunggu
// console.log(checkStock(state).then((it)=>console.log(it)).catch((it)=>console.log(it)));

const brewCoffe = (state) => {
    console.log ("membuat kopi andaa...")
    return new Promise((resolve,reject)=>{
        setTimeout( () => resolve("kopi anda sudah siap !!!")
            ,1000)
    })
}

function makeEspresso(state){
    checkAvailability(state)
    .then((value)=>{
        console.log(value);
        return checkStock(state);
    })
    .then((value)=>{
        console.log(value);
        return brewCoffe(state);
    })
    .then(value => {
        console.log(value);
        state.isCoffeMachineBussy = false;
    })
    .catch (value => {
        console.log(value);
        state.isCoffeMachineBussy = false;
    })
}

makeEspresso(state);