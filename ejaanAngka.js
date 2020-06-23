const satuan = (number) => {
    switch (number) {
        case "1":
            return "satu";
        case "2":
            return "dua";
        case "3":
            return "tiga";
        case "4":
            return "empat";
        case "5":
            return "lima";
        case "6":
            return "enam";
        case "7":
            return "tujuh";
        case "8":
            return "delapan";
        case "9":
            return "sembilan";
    }
};

const puluhan = num => {
    if (num === "10") {                                                 // 10
        return "sepuluh";
    }
    if (num === "11") {                                                 // 11
        return "sebelas";
    }
    if (num[0] === "1") {                                               // 1X
        return `${satuan(num[1])} belas`;
    }
    if (num[1] === "0") {                                               // X0
        return `${satuan(num[0])} puluh`;
    }
    return `${satuan(num[0])} puluh ${satuan(num[1])}`;                 // XX
};

const ratusan = num => {
    let ratus;
    if (num[0] === "1") {
        ratus = "seratus";
    } else {
        ratus = `${satuan(num[0])} ratus`;
    }
    if (num[1] === "0" && num[2] === "0") {                             // X00
        return `${ratus}`;
    }
    if (num[1] === "0") {                                               // X0X
        return `${ratus} ${satuan(num[2])}`;
    }
    return `${ratus} ${puluhan(num.substr(1, 2))}`;                     // XXX
};

const ribuan = num => {
    let ribu;
    if (num[0] === "1") {
        ribu = "seribu";
    } else {
        ribu = `${satuan(num[0])} ribu`;
    }
    if (num[1] === "0" && num[2] === "0" && num[3] === "0") {           // X000                                                    
        return `${ribu}`;
    }
    if (num[1] === "0" && num[2] === "0") {                             // X00X                                                    
        return `${ribu} ${satuan(num[3])}`;
    }
    if (num[1] === "0") {                                               // X0XX
        return `${ribu} ${puluhan(num.substr(2, 2))}`;
    }
    return `${ribu} ${ratusan(num.substr(1, 3))}`;                      // XXXX
}

const puluhanRibuan = num => {
    let puluhanRibu = `${puluhan(num.substr(0, 2))} ribu`;
    if (num[2] === "0" && num[3] === "0" && num[4] === "0") {       // XX000
        return puluhanRibu;
    }
    if (num[2] === "0" && num[3] === "0" && num[4] !== "0") {       // XX00X
        return `${puluhanRibu} ${satuan(num[4])}`
    }
    if (num[2] === "0" && num[3] !== "0" && num[4] !== "0") {       // XX0XX
        return `${puluhanRibu} ${puluhan(num.substr(3, 2))}`;
    }
    return `${puluhanRibu} ${ratusan(num.substr(2, 3))}`;           // XXXXX
}

const ejaanAngka = (num) => {

    // check if the passed parameter is a number
    const regex = /\d+/;
    if (!regex.test(num) || num[0] === "0") {
        console.log("error: can not proceed since the number inputted is invalid or not a positive number");
        return;
    }

    if (num.length === 1) {
        return satuan(num);
    }

    if (num.length === 2) {
        return puluhan(num);
    }

    if (num.length === 3) {
        return ratusan(num);
    }

    if (num.length === 4) {
        return ribuan(num);
    }

    if (num.length === 5) {
        return puluhanRibuan(num);
    }
}

console.log(ejaanAngka("0"));                                
