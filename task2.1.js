let arkFood =(harga,voucher,jarak,pajak) => {
    let biayaPotongan = hitungPotongan(harga,voucher)
    let biayaAntar = hitungJarak(jarak)
    let biayaPajak = hitungPajak(harga,pajak)
    let subTotal = total(harga,biayaPotongan,biayaAntar,biayaPajak)

    console.log("Harga = " + harga)
    console.log("Potongan = " + biayaPotongan)
    console.log("Biaya Antar ="+ biayaAntar)
    console.log("Pajak =" + biayaPajak)
    console.log("Subtotal=" + subTotal)
}

let hitungPotongan = (harga,voucher) => {
    let potongan = 0
    if (voucher == "ARKAFOOD5"){
        let diskon = 0.5 * harga
        if ( diskon > 50000){
            potongan = 50000
        } else {
            potongan = diskon
        }
    } else if (voucher == "DITRAKTIRDEMY"){
        let diskon = 0.6 * harga
        if (diskon > 25000){
            potongan = 30000    
        } else {
            potongan = diskon
        }
    } else if(voucher==false){
        potongan = 0
    }
    return potongan; 
}

let hitungJarak=(jarak) =>{
    biaya = 0
    biayaTambahan = jarak - 2
    if(jarak == 2){
        biaya = 5000
    }else if(jarak >= 2){
        biaya = 5000 + biayaTambahan * 3000
    }
    return biaya;
}

let hitungPajak=(harga, pajak)=>{
    biayaPajak = 0
    if(pajak == true){
        biayaPajak = ((harga * 5)/100)
    } else if(pajak == false){
        biayaPajak = 0
    }
    return biayaPajak
}

let total = (harga,biayaPotongan,biayaAntar,biayaPajak)=>{

    let jumlah= harga - biayaPotongan + biayaAntar + biayaPajak
    return jumlah;
}


arkFood(75000,"ARKAFOOD5",5,true)