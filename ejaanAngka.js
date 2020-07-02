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
    if (num[1] !== '0') return `${ribu} ${ratusan(num.substr(1, 3))}`;   // XXXX
    if (num[2] !== '0') return `${ribu} ${puluhan(num.substr(2, 2))}`;   // X0XX
    if (num[3] !== '0') return `${ribu} ${satuan(num.substr(3, 1))}`;    // X00X
    return `${ribu}`;                                                    // X000
}

const puluhanRibuan = num => {
    let puluhanRibu = `${puluhan(num.substr(0, 2))} ribu`;
    if (num[2] !== '0') return `${puluhanRibu} ${ratusan(num.substr(2, 3))}`;   // XXXXX
    if (num[3] !== '0') return `${puluhanRibu} ${puluhan(num.substr(3, 2))}`;   // XX0XX
    if (num[4] !== '0') return `${puluhanRibu} ${satuan(num.substr(4, 1))}`;    // XX00X
    return `${puluhanRibu}`;                                                    // XX000
}

const ratusanRibuan = num => {
    let ratusanRibu = `${ratusan(num.substr(0, 3))} ribu`;
    if (num[3] !== '0') return `${ratusanRibu} ${ratusan(num.substr(3, 3))}`;   // XXXXXX
    if (num[4] !== '0') return `${ratusanRibu} ${puluhan(num.substr(4, 2))}`;   // XXX0XX
    if (num[5] !== '0') return `${ratusanRibu} ${satuan(num.substr(5, 1))}`;    // XXX00X
    return `${ratusanRibu}`;                                                    // XXX000
}

const jutaan = num => {
    let juta = `${satuan(num[0])} juta`;
    if (num[1] !== '0') return `${juta} ${ratusanRibuan(num.substr(1, 6))}`;  // XXXXXXX
    if (num[2] !== '0') return `${juta} ${puluhanRibuan(num.substr(2, 5))}`;  // X0XXXXX
    if (num[3] !== '0') return `${juta} ${ribuan(num.substr(3, 4))}`;         // X00XXXX 
    if (num[4] !== '0') return `${juta} ${ratusan(num.substr(4, 3))}`;        // X000XXX  
    if (num[5] !== '0') return `${juta} ${puluhan(num.substr(5, 2))}`;        // X0000XX  
    if (num[6] !== '0') return `${juta} ${satuan(num.substr(6, 1))}`;         // X00000X
    return juta;                                                              // X000000
};

const puluhanJutaan = num => {
    let puluhanJuta = `${puluhan(num.substr(0, 2))} juta`;
    if (num[2] !== '0') return `${puluhanJuta} ${ratusanRibuan(num.substr(2, 6))}`;  // XXXXXXXX
    if (num[3] !== '0') return `${puluhanJuta} ${puluhanRibuan(num.substr(3, 5))}`;  // XX0XXXXX
    if (num[4] !== '0') return `${puluhanJuta} ${ribuan(num.substr(4, 4))}`;         // XX00XXXX 
    if (num[5] !== '0') return `${puluhanJuta} ${ratusan(num.substr(5, 3))}`;        // XX000XXX  
    if (num[6] !== '0') return `${puluhanJuta} ${puluhan(num.substr(6, 2))}`;        // XX0000XX  
    if (num[7] !== '0') return `${puluhanJuta} ${satuan(num.substr(7, 1))}`;         // XX00000X
    return puluhanJuta;                                                              // XX000000
}

const ratusanJutaan = num => {
    let ratusanJuta = `${ratusan(num.substr(0, 3))} juta`;
    if (num[3] !== '0') return `${ratusanJuta} ${ratusanRibuan(num.substr(3, 6))}`;  // XXXXXXXXX
    if (num[4] !== '0') return `${ratusanJuta} ${puluhanRibuan(num.substr(4, 5))}`;  // XXX0XXXXX
    if (num[5] !== '0') return `${ratusanJuta} ${ribuan(num.substr(5, 4))}`;         // XXX00XXXX 
    if (num[6] !== '0') return `${ratusanJuta} ${ratusan(num.substr(6, 3))}`;        // XXX000XXX  
    if (num[7] !== '0') return `${ratusanJuta} ${puluhan(num.substr(7, 2))}`;        // XXX0000XX  
    if (num[8] !== '0') return `${ratusanJuta} ${satuan(num.substr(8, 1))}`;         // XXX00000X
    return ratusanJuta;
}

const milyaran = num => {
    let milyar = `${satuan(num[0])} milyar`;
    if (num[1] !== '0') return `${milyar} ${ratusanJutaan(num.substr(1, 9))}`;    // XXXXXXXXXX
    if (num[2] !== '0') return `${milyar} ${puluhanJutaan(num.substr(2, 8))}`;    // X0XXXXXXXX
    if (num[3] !== '0') return `${milyar} ${jutaan(num.substr(3, 7))}`;           // X00XXXXXXX
    if (num[4] !== '0') return `${milyar} ${ratusanRibuan(num.substr(4, 6))}`;    // X000XXXXXX
    if (num[5] !== '0') return `${milyar} ${puluhanRibuan(num.substr(5, 5))}`;    // X0000XXXXX
    if (num[6] !== '0') return `${milyar} ${ribuan(num.substr(6, 4))}`;           // X00000XXXX
    if (num[7] !== '0') return `${milyar} ${ratusan(num.substr(7, 3))}`;          // X000000XXX
    if (num[8] !== '0') return `${milyar} ${puluhan(num.substr(8, 2))}`;          // X0000000XX
    if (num[9] !== '0') return `${milyar} ${satuan(num[9])}`;                     // X000000000
    return milyar;
}

const puluhanMilyaran = num => {
    let puluhanMilyar = `${puluhan(num.substr(0, 2))} milyar`;
    if (num[2] !== '0') return `${puluhanMilyar} ${ratusanJutaan(num.substr(2, 9))}`;    // XXXXXXXXXXX
    if (num[3] !== '0') return `${puluhanMilyar} ${puluhanJutaan(num.substr(3, 8))}`;    // XX0XXXXXXXX
    if (num[4] !== '0') return `${puluhanMilyar} ${jutaan(num.substr(4, 7))}`;           // XX00XXXXXXX
    if (num[5] !== '0') return `${puluhanMilyar} ${ratusanRibuan(num.substr(5, 6))}`;    // XX000XXXXXX
    if (num[6] !== '0') return `${puluhanMilyar} ${puluhanRibuan(num.substr(6, 5))}`;    // XX0000XXXXX
    if (num[7] !== '0') return `${puluhanMilyar} ${ribuan(num.substr(7, 4))}`;           // XX00000XXXX
    if (num[8] !== '0') return `${puluhanMilyar} ${ratusan(num.substr(8, 3))}`;          // XX000000XXX
    if (num[9] !== '0') return `${puluhanMilyar} ${puluhan(num.substr(9, 2))}`;          // XX0000000XX
    if (num[10] !== '0') return `${puluhanMilyar} ${satuan(num[10])}`;                   // XX000000000
    return puluhanMilyar;
}

const ratusanMilyaran = num => {
    let ratusanMilyar = `${ratusan(num.substr(0, 3))} milyar`;
    if (num[3] !== '0') return `${ratusanMilyar} ${ratusanJutaan(num.substr(3, 9))}`;    // XXXXXXXXXXXX
    if (num[4] !== '0') return `${ratusanMilyar} ${puluhanJutaan(num.substr(4, 8))}`;    // XXX0XXXXXXXX
    if (num[5] !== '0') return `${ratusanMilyar} ${jutaan(num.substr(5, 7))}`;           // XXX00XXXXXXX
    if (num[6] !== '0') return `${ratusanMilyar} ${ratusanRibuan(num.substr(6, 6))}`;    // XXX000XXXXXX
    if (num[7] !== '0') return `${ratusanMilyar} ${puluhanRibuan(num.substr(7, 5))}`;    // XXX0000XXXXX
    if (num[8] !== '0') return `${ratusanMilyar} ${ribuan(num.substr(8, 4))}`;           // XXX00000XXXX
    if (num[9] !== '0') return `${ratusanMilyar} ${ratusan(num.substr(9, 3))}`;          // XXX000000XXX
    if (num[10] !== '0') return `${ratusanMilyar} ${puluhan(num.substr(10, 2))}`;        // XXX0000000XX
    if (num[11] !== '0') return `${ratusanMilyar} ${satuan(num[11])}`;                   // XXX000000000
    return ratusanMilyar;
};

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
    if (num.length === 9) return ratusanJutaan(num);
    if (num.length === 10) return milyaran(num);
    if (num.length === 11) return puluhanMilyaran(num);
    if (num.length === 12) return ratusanMilyaran(num);
}

console.log(ejaanAngka("212005"));