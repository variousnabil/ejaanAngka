const satuan = num => {
    if (num === '1') return 'satu';
    if (num === '2') return 'dua';
    if (num === '3') return 'tiga';
    if (num === '4') return 'empat';
    if (num === '5') return 'lima';
    if (num === '6') return 'enam';
    if (num === '7') return 'tujuh';
    if (num === '8') return 'delapan';
    if (num === '9') return 'sembilan';
};

const puluhan = num => {
    if (num === "10") return "sepuluh";
    if (num === "11") return "sebelas";
    if (num[0] === "1") return `${satuan(num[1])} belas`;   // 1X
    if (num[1] === "0") return `${satuan(num[0])} puluh`;   // X0
    return `${satuan(num[0])} puluh ${satuan(num[1])}`;     // XX
};

const ratusan = num => {
    let ratus;
    if (num[0] === "1") {
        ratus = "seratus";
    } else {
        ratus = `${satuan(num[0])} ratus`;
    }
    if (num[1] !== '0') return `${ratus} ${puluhan(num.substr(1, 2))}`;     // XXX
    if (num[2] !== '0') return `${ratus} ${satuan(num[2])}`;                // X0X
    return `${ratus}`;                                                      // X00
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
    return ratusanJuta;                                                              // XXX000000   
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
    if (num[9] !== '0') return `${milyar} ${satuan(num[9])}`;                     // X00000000X
    return milyar;                                                                // X000000000
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
    if (num[10] !== '0') return `${puluhanMilyar} ${satuan(num[10])}`;                   // XX00000000X
    return puluhanMilyar;                                                                // XX000000000
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
    if (num[11] !== '0') return `${ratusanMilyar} ${satuan(num[11])}`;                   // XXX00000000X
    return ratusanMilyar;                                                                // XXX000000000
};

const triliunan = num => {
    let triliun = `${satuan(num[0])} triliun`;
    if (num[1] !== '0') return `${triliun} ${ratusanMilyaran(num.substr(1, 12))}`;       // XXXXXXXXXXXXX      
    if (num[2] !== '0') return `${triliun} ${puluhanMilyaran(num.substr(2, 11))}`;       // X0XXXXXXXXXXX
    if (num[3] !== '0') return `${triliun} ${milyaran(num.substr(3, 10))}`;              // X00XXXXXXXXXX
    if (num[4] !== '0') return `${triliun} ${ratusanJutaan(num.substr(4, 9))}`;          // X000XXXXXXXXX
    if (num[5] !== '0') return `${triliun} ${puluhanJutaan(num.substr(5, 8))}`;          // X0000XXXXXXXX
    if (num[6] !== '0') return `${triliun} ${jutaan(num.substr(6, 7))}`;                 // X00000XXXXXXX
    if (num[7] !== '0') return `${triliun} ${ratusanRibuan(num.substr(7, 6))}`;          // X000000XXXXXX     
    if (num[8] !== '0') return `${triliun} ${puluhanRibuan(num.substr(8, 5))}`;          // X0000000XXXXX
    if (num[9] !== '0') return `${triliun} ${ribuan(num.substr(9, 4))}`;                 // X00000000XXXX
    if (num[10] !== '0') return `${triliun} ${ratusan(num.substr(10, 3))}`;              // X000000000XXX
    if (num[11] !== '0') return `${triliun} ${puluhan(num.substr(11, 2))}`;              // X0000000000XX
    if (num[12] !== '0') return `${triliun} ${satuan(num.substr(12, 1))}`;               // X00000000000X
    return `${triliun}`;                                                                 // X000000000000     
};

const puluhanTriliunan = num => {
    let puluhanTriliun = `${puluhan(num.substr(0, 2))} triliun`;
    if (num[2] !== '0') return `${puluhanTriliun} ${ratusanMilyaran(num.substr(2, 12))}`;       // XXXXXXXXXXXXXX      
    if (num[3] !== '0') return `${puluhanTriliun} ${puluhanMilyaran(num.substr(3, 11))}`;       // XX0XXXXXXXXXXX
    if (num[4] !== '0') return `${puluhanTriliun} ${milyaran(num.substr(4, 10))}`;              // XX00XXXXXXXXXX
    if (num[5] !== '0') return `${puluhanTriliun} ${ratusanJutaan(num.substr(5, 9))}`;          // XX000XXXXXXXXX
    if (num[6] !== '0') return `${puluhanTriliun} ${puluhanJutaan(num.substr(6, 8))}`;          // XX0000XXXXXXXX
    if (num[7] !== '0') return `${puluhanTriliun} ${jutaan(num.substr(7, 7))}`;                 // XX00000XXXXXXX
    if (num[8] !== '0') return `${puluhanTriliun} ${ratusanRibuan(num.substr(8, 6))}`;          // XX000000XXXXXX     
    if (num[9] !== '0') return `${puluhanTriliun} ${puluhanRibuan(num.substr(9, 5))}`;          // XX0000000XXXXX
    if (num[10] !== '0') return `${puluhanTriliun} ${ribuan(num.substr(10, 4))}`;               // XX00000000XXXX
    if (num[11] !== '0') return `${puluhanTriliun} ${ratusan(num.substr(11, 3))}`;              // XX000000000XXX
    if (num[12] !== '0') return `${puluhanTriliun} ${puluhan(num.substr(12, 2))}`;              // XX0000000000XX
    if (num[13] !== '0') return `${puluhanTriliun} ${satuan(num.substr(13, 1))}`;               // XX00000000000X
    return `${puluhanTriliun}`;                                                                 // XX000000000000     
};

const ratusanTriliunan = num => {
    let ratusanTriliun = `${ratusan(num.substr(0, 3))} triliun`;
    if (num[3] !== '0') return `${ratusanTriliun} ${ratusanMilyaran(num.substr(3, 12))}`;       // XXXXXXXXXXXXXXX      
    if (num[4] !== '0') return `${ratusanTriliun} ${puluhanMilyaran(num.substr(4, 11))}`;       // XXX0XXXXXXXXXXX
    if (num[5] !== '0') return `${ratusanTriliun} ${milyaran(num.substr(5, 10))}`;              // XXX00XXXXXXXXXX
    if (num[6] !== '0') return `${ratusanTriliun} ${ratusanJutaan(num.substr(6, 9))}`;          // XXX000XXXXXXXXX
    if (num[7] !== '0') return `${ratusanTriliun} ${puluhanJutaan(num.substr(7, 8))}`;          // XXX0000XXXXXXXX
    if (num[8] !== '0') return `${ratusanTriliun} ${jutaan(num.substr(8, 7))}`;                 // XXX00000XXXXXXX
    if (num[9] !== '0') return `${ratusanTriliun} ${ratusanRibuan(num.substr(9, 6))}`;          // XXX000000XXXXXX     
    if (num[10] !== '0') return `${ratusanTriliun} ${puluhanRibuan(num.substr(10, 5))}`;        // XXX0000000XXXXX
    if (num[11] !== '0') return `${ratusanTriliun} ${ribuan(num.substr(11, 4))}`;               // XXX00000000XXXX
    if (num[12] !== '0') return `${ratusanTriliun} ${ratusan(num.substr(12, 3))}`;              // XXX000000000XXX
    if (num[13] !== '0') return `${ratusanTriliun} ${puluhan(num.substr(13, 2))}`;              // XXX0000000000XX
    if (num[14] !== '0') return `${ratusanTriliun} ${satuan(num.substr(14, 1))}`;               // XXX00000000000X
    return `${ratusanTriliun}`;                                                                 // XXX000000000000     
};

const kuadriliunan = num => {
    let kuadriliun = `${satuan(num[0])} kuadriliun`;
    if (num[1] !== '0') return `${kuadriliun} ${ratusanTriliunan(num.substr(1, 15))}`;
    if (num[2] !== '0') return `${kuadriliun} ${puluhanTriliunan(num.substr(2, 14))}`;
    if (num[3] !== '0') return `${kuadriliun} ${triliunan(num.substr(3, 13))}`;
    if (num[4] !== '0') return `${kuadriliun} ${ratusanMilyaran(num.substr(4, 12))}`;
    if (num[5] !== '0') return `${kuadriliun} ${puluhanMilyaran(num.substr(5, 11))}`;
    if (num[6] !== '0') return `${kuadriliun} ${milyaran(num.substr(6, 10))}`;
    if (num[7] !== '0') return `${kuadriliun} ${ratusanJutaan(num.substr(7, 9))}`;
    if (num[8] !== '0') return `${kuadriliun} ${puluhanJutaan(num.substr(8, 8))}`;
    if (num[9] !== '0') return `${kuadriliun} ${jutaan(num.substr(9, 7))}`;
    if (num[10] !== '0') return `${kuadriliun} ${ratusanRibuan(num.substr(10, 6))}`;
    if (num[11] !== '0') return `${kuadriliun} ${puluhanRibuan(num.substr(11, 5))}`;
    if (num[12] !== '0') return `${kuadriliun} ${ribuan(num.substr(12, 4))}`;
    if (num[13] !== '0') return `${kuadriliun} ${ratusan(num.substr(13, 3))}`;
    if (num[14] !== '0') return `${kuadriliun} ${puluhan(num.substr(14, 2))}`;
    if (num[15] !== '0') return `${kuadriliun} ${satuan(num.substr(15, 1))}`;
    return `${kuadriliun}`;
};

const puluhanKuadriliunan = num => {
    let puluhanKuadriliun = `${puluhan(num.substr(0, 2))} kuadriliun`;
    if (num[2] !== '0') return `${puluhanKuadriliun} ${ratusanTriliunan(num.substr(2, 15))}`;
    if (num[3] !== '0') return `${puluhanKuadriliun} ${puluhanTriliunan(num.substr(3, 14))}`;
    if (num[4] !== '0') return `${puluhanKuadriliun} ${triliunan(num.substr(4, 13))}`;
    if (num[5] !== '0') return `${puluhanKuadriliun} ${ratusanMilyaran(num.substr(5, 12))}`;
    if (num[6] !== '0') return `${puluhanKuadriliun} ${puluhanMilyaran(num.substr(6, 11))}`;
    if (num[7] !== '0') return `${puluhanKuadriliun} ${milyaran(num.substr(7, 10))}`;
    if (num[8] !== '0') return `${puluhanKuadriliun} ${ratusanJutaan(num.substr(8, 9))}`;
    if (num[9] !== '0') return `${puluhanKuadriliun} ${puluhanJutaan(num.substr(9, 8))}`;
    if (num[10] !== '0') return `${puluhanKuadriliun} ${jutaan(num.substr(10, 7))}`;
    if (num[11] !== '0') return `${puluhanKuadriliun} ${ratusanRibuan(num.substr(11, 6))}`;
    if (num[12] !== '0') return `${puluhanKuadriliun} ${puluhanRibuan(num.substr(12, 5))}`;
    if (num[13] !== '0') return `${puluhanKuadriliun} ${ribuan(num.substr(13, 4))}`;
    if (num[14] !== '0') return `${puluhanKuadriliun} ${ratusan(num.substr(14, 3))}`;
    if (num[15] !== '0') return `${puluhanKuadriliun} ${puluhan(num.substr(15, 2))}`;
    if (num[16] !== '0') return `${puluhanKuadriliun} ${satuan(num.substr(16, 1))}`;
    return `${puluhanKuadriliun}`;
};

const ratusanKuadriliunan = num => {
    let ratusanKuadriliun = `${ratusan(num.substr(0, 3))} kuadriliun`;
    if (num[2] !== '0') return `${ratusanKuadriliun} ${ratusanTriliunan(num.substr(3, 15))}`;
    if (num[3] !== '0') return `${ratusanKuadriliun} ${puluhanTriliunan(num.substr(4, 14))}`;
    if (num[4] !== '0') return `${ratusanKuadriliun} ${triliunan(num.substr(5, 13))}`;
    if (num[5] !== '0') return `${ratusanKuadriliun} ${ratusanMilyaran(num.substr(6, 12))}`;
    if (num[6] !== '0') return `${ratusanKuadriliun} ${puluhanMilyaran(num.substr(7, 11))}`;
    if (num[7] !== '0') return `${ratusanKuadriliun} ${milyaran(num.substr(8, 10))}`;
    if (num[8] !== '0') return `${ratusanKuadriliun} ${ratusanJutaan(num.substr(9, 9))}`;
    if (num[9] !== '0') return `${ratusanKuadriliun} ${puluhanJutaan(num.substr(10, 8))}`;
    if (num[10] !== '0') return `${ratusanKuadriliun} ${jutaan(num.substr(11, 7))}`;
    if (num[11] !== '0') return `${ratusanKuadriliun} ${ratusanRibuan(num.substr(12, 6))}`;
    if (num[12] !== '0') return `${ratusanKuadriliun} ${puluhanRibuan(num.substr(13, 5))}`;
    if (num[13] !== '0') return `${ratusanKuadriliun} ${ribuan(num.substr(14, 4))}`;
    if (num[14] !== '0') return `${ratusanKuadriliun} ${ratusan(num.substr(15, 3))}`;
    if (num[15] !== '0') return `${ratusanKuadriliun} ${puluhan(num.substr(16, 2))}`;
    if (num[16] !== '0') return `${ratusanKuadriliun} ${satuan(num.substr(17, 1))}`;
    return `${ratusanKuadriliun}`;
};

const kuantiliunan = num => {
    let kuantiliun = `${satuan(num[0])} kuantiliun`;
    if (num[1] !== '0') return `${kuantiliun} ${ratusanKuadriliunan(num.substr(1, 18))}`;
    if (num[2] !== '0') return `${kuantiliun} ${puluhanKuadriliunan(num.substr(2, 17))}`;
    if (num[3] !== '0') return `${kuantiliun} ${kuadriliunan(num.substr(3, 16))}`;
    if (num[4] !== '0') return `${kuantiliun} ${ratusanTriliunan(num.substr(4, 15))}`;
    if (num[5] !== '0') return `${kuantiliun} ${puluhanTriliunan(num.substr(5, 14))}`;
    if (num[6] !== '0') return `${kuantiliun} ${triliunan(num.substr(6, 13))}`;
    if (num[7] !== '0') return `${kuantiliun} ${ratusanMilyaran(num.substr(7, 12))}`;
    if (num[8] !== '0') return `${kuantiliun} ${puluhanMilyaran(num.substr(8, 11))}`;
    if (num[9] !== '0') return `${kuantiliun} ${milyaran(num.substr(9, 10))}`;
    if (num[10] !== '0') return `${kuantiliun} ${ratusanJutaan(num.substr(10, 9))}`;
    if (num[11] !== '0') return `${kuantiliun} ${puluhanJutaan(num.substr(11, 8))}`;
    if (num[12] !== '0') return `${kuantiliun} ${jutaan(num.substr(12, 7))}`;
    if (num[13] !== '0') return `${kuantiliun} ${ratusanRibuan(num.substr(13, 6))}`;
    if (num[14] !== '0') return `${kuantiliun} ${puluhanRibuan(num.substr(14, 5))}`;
    if (num[15] !== '0') return `${kuantiliun} ${ribuan(num.substr(15, 4))}`;
    if (num[16] !== '0') return `${kuantiliun} ${ratusan(num.substr(16, 3))}`;
    if (num[17] !== '0') return `${kuantiliun} ${puluhan(num.substr(17, 2))}`;
    if (num[18] !== '0') return `${kuantiliun} ${satuan(num.substr(18, 1))}`;
    return `${kuantiliun}`;
};

const puluhanKuantiliunan = num => {
    let puluhanKuantiliun = `${puluhan(num.substr(0, 2))} kuantiliun`;
    if (num[2] !== '0') return `${puluhanKuantiliun} ${ratusanKuadriliunan(num.substr(2, 18))}`;
    if (num[3] !== '0') return `${puluhanKuantiliun} ${puluhanKuadriliunan(num.substr(3, 17))}`;
    if (num[4] !== '0') return `${puluhanKuantiliun} ${kuadriliunan(num.substr(4, 16))}`;
    if (num[5] !== '0') return `${puluhanKuantiliun} ${ratusanTriliunan(num.substr(5, 15))}`;
    if (num[6] !== '0') return `${puluhanKuantiliun} ${puluhanTriliunan(num.substr(6, 14))}`;
    if (num[7] !== '0') return `${puluhanKuantiliun} ${triliunan(num.substr(7, 13))}`;
    if (num[8] !== '0') return `${puluhanKuantiliun} ${ratusanMilyaran(num.substr(8, 12))}`;
    if (num[9] !== '0') return `${puluhanKuantiliun} ${puluhanMilyaran(num.substr(9, 11))}`;
    if (num[10] !== '0') return `${puluhanKuantiliun} ${milyaran(num.substr(10, 10))}`;
    if (num[11] !== '0') return `${puluhanKuantiliun} ${ratusanJutaan(num.substr(11, 9))}`;
    if (num[12] !== '0') return `${puluhanKuantiliun} ${puluhanJutaan(num.substr(12, 8))}`;
    if (num[13] !== '0') return `${puluhanKuantiliun} ${jutaan(num.substr(13, 7))}`;
    if (num[14] !== '0') return `${puluhanKuantiliun} ${ratusanRibuan(num.substr(14, 6))}`;
    if (num[15] !== '0') return `${puluhanKuantiliun} ${puluhanRibuan(num.substr(15, 5))}`;
    if (num[16] !== '0') return `${puluhanKuantiliun} ${ribuan(num.substr(16, 4))}`;
    if (num[17] !== '0') return `${puluhanKuantiliun} ${ratusan(num.substr(17, 3))}`;
    if (num[18] !== '0') return `${puluhanKuantiliun} ${puluhan(num.substr(18, 2))}`;
    if (num[19] !== '0') return `${puluhanKuantiliun} ${satuan(num.substr(19, 1))}`;
    return `${puluhanKuantiliun}`;
};

const ratusanKuantiliunan = num => {
    let ratusanKuantiliun = `${ratusan(num.substr(0, 3))} kuantiliun`;
    if (num[2] !== '0') return `${ratusanKuantiliun} ${ratusanKuadriliunan(num.substr(3, 18))}`;
    if (num[3] !== '0') return `${ratusanKuantiliun} ${puluhanKuadriliunan(num.substr(4, 17))}`;
    if (num[4] !== '0') return `${ratusanKuantiliun} ${kuadriliunan(num.substr(5, 16))}`;
    if (num[5] !== '0') return `${ratusanKuantiliun} ${ratusanTriliunan(num.substr(6, 15))}`;
    if (num[6] !== '0') return `${ratusanKuantiliun} ${puluhanTriliunan(num.substr(7, 14))}`;
    if (num[7] !== '0') return `${ratusanKuantiliun} ${triliunan(num.substr(8, 13))}`;
    if (num[8] !== '0') return `${ratusanKuantiliun} ${ratusanMilyaran(num.substr(9, 12))}`;
    if (num[9] !== '0') return `${ratusanKuantiliun} ${puluhanMilyaran(num.substr(10, 11))}`;
    if (num[10] !== '0') return `${ratusanKuantiliun} ${milyaran(num.substr(11, 10))}`;
    if (num[11] !== '0') return `${ratusanKuantiliun} ${ratusanJutaan(num.substr(12, 9))}`;
    if (num[12] !== '0') return `${ratusanKuantiliun} ${puluhanJutaan(num.substr(13, 8))}`;
    if (num[13] !== '0') return `${ratusanKuantiliun} ${jutaan(num.substr(14, 7))}`;
    if (num[14] !== '0') return `${ratusanKuantiliun} ${ratusanRibuan(num.substr(15, 6))}`;
    if (num[15] !== '0') return `${ratusanKuantiliun} ${puluhanRibuan(num.substr(16, 5))}`;
    if (num[16] !== '0') return `${ratusanKuantiliun} ${ribuan(num.substr(17, 4))}`;
    if (num[17] !== '0') return `${ratusanKuantiliun} ${ratusan(num.substr(18, 3))}`;
    if (num[18] !== '0') return `${ratusanKuantiliun} ${puluhan(num.substr(19, 2))}`;
    if (num[19] !== '0') return `${ratusanKuantiliun} ${satuan(num.substr(20, 1))}`;
    return `${ratusanKuantiliun}`;
};

const sekstiliunan = num => {
    let sekstiliun = `${satuan(num[0])} sekstiliun`;
    if (num[1] !== '0') return `${sekstiliun} ${ratusanKuantiliunan(num.substr(1, 21))}`;
    if (num[2] !== '0') return `${sekstiliun} ${puluhanKuantiliunan(num.substr(2, 20))}`;
    if (num[3] !== '0') return `${sekstiliun} ${kuantiliunan(num.substr(3, 19))}`;
    if (num[4] !== '0') return `${sekstiliun} ${ratusanKuadriliunan(num.substr(4, 18))}`;
    if (num[5] !== '0') return `${sekstiliun} ${puluhanKuadriliunan(num.substr(5, 17))}`;
    if (num[6] !== '0') return `${sekstiliun} ${kuadriliunan(num.substr(6, 16))}`;
    if (num[7] !== '0') return `${sekstiliun} ${ratusanTriliunan(num.substr(7, 15))}`;
    if (num[8] !== '0') return `${sekstiliun} ${puluhanTriliunan(num.substr(8, 14))}`;
    if (num[9] !== '0') return `${sekstiliun} ${triliunan(num.substr(9, 13))}`;
    if (num[10] !== '0') return `${sekstiliun} ${ratusanMilyaran(num.substr(10, 12))}`;
    if (num[11] !== '0') return `${sekstiliun} ${puluhanMilyaran(num.substr(11, 11))}`;
    if (num[12] !== '0') return `${sekstiliun} ${milyaran(num.substr(12, 10))}`;
    if (num[13] !== '0') return `${sekstiliun} ${ratusanJutaan(num.substr(13, 9))}`;
    if (num[14] !== '0') return `${sekstiliun} ${puluhanJutaan(num.substr(14, 8))}`;
    if (num[15] !== '0') return `${sekstiliun} ${jutaan(num.substr(15, 7))}`;
    if (num[16] !== '0') return `${sekstiliun} ${ratusanRibuan(num.substr(16, 6))}`;
    if (num[17] !== '0') return `${sekstiliun} ${puluhanRibuan(num.substr(17, 5))}`;
    if (num[18] !== '0') return `${sekstiliun} ${ribuan(num.substr(18, 4))}`;
    if (num[19] !== '0') return `${sekstiliun} ${ratusan(num.substr(19, 3))}`;
    if (num[20] !== '0') return `${sekstiliun} ${puluhan(num.substr(20, 2))}`;
    if (num[21] !== '0') return `${sekstiliun} ${satuan(num.substr(21, 1))}`;
    return `${sekstiliun}`;
};

const puluhanSekstiliunan = num => {
    let puluhanSekstiliun = `${puluhan(num.substr(0, 2))} sekstiliun`;
    if (num[2] !== '0') return `${puluhanSekstiliun} ${ratusanKuantiliunan(num.substr(2, 21))}`;
    if (num[3] !== '0') return `${puluhanSekstiliun} ${puluhanKuantiliunan(num.substr(3, 20))}`;
    if (num[4] !== '0') return `${puluhanSekstiliun} ${kuantiliunan(num.substr(4, 19))}`;
    if (num[5] !== '0') return `${puluhanSekstiliun} ${ratusanKuadriliunan(num.substr(5, 18))}`;
    if (num[6] !== '0') return `${puluhanSekstiliun} ${puluhanKuadriliunan(num.substr(6, 17))}`;
    if (num[7] !== '0') return `${puluhanSekstiliun} ${kuadriliunan(num.substr(7, 16))}`;
    if (num[8] !== '0') return `${puluhanSekstiliun} ${ratusanTriliunan(num.substr(8, 15))}`;
    if (num[9] !== '0') return `${puluhanSekstiliun} ${puluhanTriliunan(num.substr(9, 14))}`;
    if (num[10] !== '0') return `${puluhanSekstiliun} ${triliunan(num.substr(10, 13))}`;
    if (num[11] !== '0') return `${puluhanSekstiliun} ${ratusanMilyaran(num.substr(11, 12))}`;
    if (num[12] !== '0') return `${puluhanSekstiliun} ${puluhanMilyaran(num.substr(12, 11))}`;
    if (num[13] !== '0') return `${puluhanSekstiliun} ${milyaran(num.substr(13, 10))}`;
    if (num[14] !== '0') return `${puluhanSekstiliun} ${ratusanJutaan(num.substr(14, 9))}`;
    if (num[15] !== '0') return `${puluhanSekstiliun} ${puluhanJutaan(num.substr(15, 8))}`;
    if (num[16] !== '0') return `${puluhanSekstiliun} ${jutaan(num.substr(16, 7))}`;
    if (num[17] !== '0') return `${puluhanSekstiliun} ${ratusanRibuan(num.substr(17, 6))}`;
    if (num[18] !== '0') return `${puluhanSekstiliun} ${puluhanRibuan(num.substr(18, 5))}`;
    if (num[19] !== '0') return `${puluhanSekstiliun} ${ribuan(num.substr(19, 4))}`;
    if (num[20] !== '0') return `${puluhanSekstiliun} ${ratusan(num.substr(20, 3))}`;
    if (num[21] !== '0') return `${puluhanSekstiliun} ${puluhan(num.substr(21, 2))}`;
    if (num[22] !== '0') return `${puluhanSekstiliun} ${satuan(num.substr(22, 1))}`;
    return `${puluhanSekstiliun}`;
};

const ratusanSekstiliunan = num => {
    let ratusanSekstiliun = `${ratusan(num.substr(0, 3))} sekstiliun`;
    if (num[3] !== '0') return `${ratusanSekstiliun} ${ratusanKuantiliunan(num.substr(3, 21))}`;
    if (num[4] !== '0') return `${ratusanSekstiliun} ${puluhanKuantiliunan(num.substr(4, 20))}`;
    if (num[5] !== '0') return `${ratusanSekstiliun} ${kuantiliunan(num.substr(5, 19))}`;
    if (num[6] !== '0') return `${ratusanSekstiliun} ${ratusanKuadriliunan(num.substr(6, 18))}`;
    if (num[7] !== '0') return `${ratusanSekstiliun} ${puluhanKuadriliunan(num.substr(7, 17))}`;
    if (num[8] !== '0') return `${ratusanSekstiliun} ${kuadriliunan(num.substr(8, 16))}`;
    if (num[9] !== '0') return `${ratusanSekstiliun} ${ratusanTriliunan(num.substr(9, 15))}`;
    if (num[10] !== '0') return `${ratusanSekstiliun} ${puluhanTriliunan(num.substr(10, 14))}`;
    if (num[11] !== '0') return `${ratusanSekstiliun} ${triliunan(num.substr(11, 13))}`;
    if (num[12] !== '0') return `${ratusanSekstiliun} ${ratusanMilyaran(num.substr(12, 12))}`;
    if (num[13] !== '0') return `${ratusanSekstiliun} ${puluhanMilyaran(num.substr(13, 11))}`;
    if (num[14] !== '0') return `${ratusanSekstiliun} ${milyaran(num.substr(14, 10))}`;
    if (num[15] !== '0') return `${ratusanSekstiliun} ${ratusanJutaan(num.substr(15, 9))}`;
    if (num[16] !== '0') return `${ratusanSekstiliun} ${puluhanJutaan(num.substr(16, 8))}`;
    if (num[17] !== '0') return `${ratusanSekstiliun} ${jutaan(num.substr(17, 7))}`;
    if (num[18] !== '0') return `${ratusanSekstiliun} ${ratusanRibuan(num.substr(18, 6))}`;
    if (num[19] !== '0') return `${ratusanSekstiliun} ${puluhanRibuan(num.substr(19, 5))}`;
    if (num[20] !== '0') return `${ratusanSekstiliun} ${ribuan(num.substr(20, 4))}`;
    if (num[21] !== '0') return `${ratusanSekstiliun} ${ratusan(num.substr(21, 3))}`;
    if (num[22] !== '0') return `${ratusanSekstiliun} ${puluhan(num.substr(22, 2))}`;
    if (num[23] !== '0') return `${ratusanSekstiliun} ${satuan(num.substr(23, 1))}`;
    return `${ratusanSekstiliun}`;
};

const ejaanAngka = (num) => {
    // check if the passed parameter is a valid number
    const regex = /^\d+$/;
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
    if (num.length === 13) return triliunan(num);
    if (num.length === 14) return puluhanTriliunan(num);
    if (num.length === 15) return ratusanTriliunan(num);
    if (num.length === 16) return kuadriliunan(num);
    if (num.length === 17) return puluhanKuadriliunan(num);
    if (num.length === 18) return ratusanKuadriliunan(num);
    if (num.length === 19) return kuantiliunan(num);
    if (num.length === 20) return puluhanKuantiliunan(num);
    if (num.length === 21) return ratusanKuantiliunan(num);
    if (num.length === 22) return sekstiliunan(num);
    if (num.length === 23) return puluhanSekstiliunan(num);
    if (num.length === 24) return ratusanSekstiliunan(num);
}

console.log(ejaanAngka("989222322222004003005000"));