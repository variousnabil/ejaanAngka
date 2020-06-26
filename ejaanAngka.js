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
    if (num === "10") {                                                     // 10
        return "sepuluh";
    }
    if (num === "11") {                                                     // 11
        return "sebelas";
    }
    if (num[0] === "1") {                                                   // 1X
        return `${satuan(num[1])} belas`;
    }
    if (num[1] === "0") {                                                   // X0
        return `${satuan(num[0])} puluh`;
    }
    return `${satuan(num[0])} puluh ${satuan(num[1])}`;                     // XX
};

const ratusan = num => {
    let ratus;
    if (num[0] === "1") {
        ratus = "seratus";
    } else {
        ratus = `${satuan(num[0])} ratus`;
    }
    if (num[1] === "0" && num[2] === "0") {                                 // X00
        return `${ratus}`;
    }
    if (num[1] === "0") {                                                   // X0X
        return `${ratus} ${satuan(num[2])}`;
    }
    return `${ratus} ${puluhan(num.substr(1, 2))}`;                         // XXX
};

const ribuan = num => {
    let ribu;
    if (num[0] === "1") {
        ribu = "seribu";
    } else {
        ribu = `${satuan(num[0])} ribu`;
    }
    if (num[1] === "0" && num[2] === "0" && num[3] === "0") {               // X000                                                    
        return `${ribu}`;
    }
    if (num[1] === "0" && num[2] === "0") {                                 // X00X                                                    
        return `${ribu} ${satuan(num[3])}`;
    }
    if (num[1] === "0") {                                                   // X0XX
        return `${ribu} ${puluhan(num.substr(2, 2))}`;
    }
    return `${ribu} ${ratusan(num.substr(1, 3))}`;                          // XXXX
}

const puluhanRibuan = num => {
    let puluhanRibu = `${puluhan(num.substr(0, 2))} ribu`;
    if (num[2] === "0" && num[3] === "0" && num[4] === "0") {               // XX000
        return puluhanRibu;
    }
    if (num[2] === "0" && num[3] === "0") {                                 // XX00X
        return `${puluhanRibu} ${satuan(num[4])}`
    }
    if (num[2] === "0") {                                                   // XX0XX
        return `${puluhanRibu} ${puluhan(num.substr(3, 2))}`;
    }
    return `${puluhanRibu} ${ratusan(num.substr(2, 3))}`;                   // XXXXX
}

const ratusanRibuan = num => {
    let ratusanRibu = `${ratusan(num.substr(0, 3))} ribu`;
    if (num[3] === "0" && num[4] === "0" && num[5] === "0") {               // XXX000
        return ratusanRibu;
    }
    if (num[3] === "0" && num[4] === "0") {                                 // XXX00X
        return `${ratusanRibu} ${satuan(num[5])}`
    }
    if (num[3] === "0") {                                                   // XXX0XX
        return `${ratusanRibu} ${puluhan(num.substr(4, 2))}`;
    }
    return `${ratusanRibu} ${ratusan(num.substr(3, 3))}`;                   // XXXXXX
}

const jutaan = num => {
    let juta = `${satuan(num[0])} juta`;
    if (num[1] === "0" && num[2] === "0" && num[3] === "0"
        && num[4] === "0" && num[5] === "0" && num[6] === "0") {            // X000000
        return juta;
    }
    if (num[1] === "0" && num[2] === "0" && num[3] === "0"
        && num[4] === "0" && num[5] === "0") {                              // X00000X
        return `${juta} ${satuan(num[6])}`;
    }
    if (num[1] === "0" && num[2] === "0" && num[3] === "0"
        && num[4] === "0") {                                                // X0000XX
        return `${juta} ${puluhan(num.substr(5, 2))}`;
    }
    if (num[1] === "0" && num[2] === "0" && num[3] === "0") {               // X000XXX
        return `${juta} ${ratusan(num.substr(4, 3))}`;
    }
    if (num[1] === "0" && num[2] === "0") {                                 // X00XXXX
        return `${juta} ${ribuan(num.substr(3, 4))}`;
    }
    if (num[1] === "0") {                                                   // X0XXXXX
        return `${juta} ${puluhanRibuan(num.substr(2, 5))}`;
    }
    return `${juta} ${ratusanRibuan(num.substr(1, 6))}`;                    // XXXXXXX
};

const puluhanJutaan = num => {
    let puluhanJuta = `${puluhan(num.substr(0, 2))} juta`;
    if (num[2] === "0" && num[3] === "0" && num[4] === "0"
        && num[5] === "0" && num[6] === "0" && num[7] === "0") {            // XX000000
        return puluhanJuta;
    }
    if (num[2] === "0" && num[3] === "0" && num[4] === "0"
        && num[5] === "0" && num[6] === "0") {                              // XX00000X
        return `${puluhanJuta} ${satuan(num[7])}`;
    }
    if (num[2] === "0" && num[3] === "0" && num[4] === "0"
        && num[5] === "0") {                                                // XX0000XX
        return `${puluhanJuta} ${puluhan(num.substr(6, 2))}`;
    }
    if (num[2] === "0" && num[3] === "0" && num[4] === "0") {               // XX000XXX
        return `${puluhanJuta} ${ratusan(num.substr(5, 3))}`;
    }
    if (num[2] === "0" && num[3] === "0") {                                 // XX00XXXX
        return `${puluhanJuta} ${ribuan(num.substr(4, 4))}`;
    }
    if (num[2] === "0") {                                                   // XX0XXXXX
        return `${puluhanJuta} ${puluhanRibuan(num.substr(3, 5))}`;
    }
    return `${puluhanJuta} ${ratusanRibuan(num.substr(2, 6))}`;             // XXXXXXXX
}

const ejaanAngka = (num) => {
    // check if the passed parameter is a number
    const regex = /\d+/;
    if (!regex.test(num) || num[0] === "0") {
        console.log("error: can not proceed since the number inputted is invalid or not a positive number");
        return;
    }

    if (num.length === 1) return satuan(num);
    if (num.length === 2) return puluhan(num);
    if (num.length === 3) return ratusan(num);
    if (num.length === 4) return ribuan(num);
    if (num.length === 5) return puluhanRibuan(num);
    if (num.length === 6) return ratusanRibuan(num);
    if (num.length === 7) return jutaan(num);
    if (num.length === 8) return puluhanJutaan(num);
    if (num.length === 9) {
        let ratusanJuta = `${ratusan(num.substr(0, 3))} juta`;
        if (num[3] === "0" && num[4] === "0" && num[5] === "0"
            && num[6] === "0" && num[7] === "0" && num[8] === "0") {            // XXX000000
            return ratusanJuta;
        }
        if (num[3] === "0" && num[4] === "0" && num[5] === "0"
            && num[6] === "0" && num[7] === "0") {                              // XXX00000X
            return `${ratusanJuta} ${satuan(num[8])}`;
        }
        if (num[3] === "0" && num[4] === "0" && num[5] === "0"
            && num[6] === "0") {                                                // XXX0000XX
            return `${ratusanJuta} ${puluhan(num.substr(7, 2))}`;
        }
        if (num[3] === "0" && num[4] === "0" && num[5] === "0") {           // XXX000XXX
            return `${ratusanJuta} ${ratusan(num.substr(6, 3))}`;
        }
        if (num[3] === "0" && num[4] === "0") {                             // XXX00XXXX
            return `${ratusanJuta} ${ribuan(num.substr(5, 4))}`;
        }
        if (num[3] === "0") {                                               // XXX0XXXXX
            return `${ratusanJuta} ${puluhanRibuan(num.substr(4, 5))}`;
        }
        return `${ratusanJuta} ${ratusanRibuan(num.substr(3, 6))}`;          // XXXXXXXXX
    }
}

console.log(ejaanAngka("999999999"));                                
