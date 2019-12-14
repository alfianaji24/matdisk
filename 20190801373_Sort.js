console.log("=======================================");
console.log("-----Menghitung Usia--------");
console.log("=======================================");

var HariIni = new Date();
var siswa =
    [{"Name":"Alfian","TanggalLahir":new Date('1997-12-19')},
    {"Name":"Androw","TanggalLahir":new Date('1997-10-28')},
    {"Name":"Andri","TanggalLahir":new Date('2000-02-29')},
    {"Name":"Anrian","TanggalLahir":new Date('1999-10-29')},
    {"Name":"Dimas","TanggalLahir":new Date('2000-06-21')},
    {"Name":"Tiara","TanggalLahir":new Date('2001-03-06')},
    {"Name":"Nia","TanggalLahir":new Date('2001-12-14')},
    {"Name":"Kresna","TanggalLahir":new Date('2000-11-29')},
    {"Name":"Lorenzo","TanggalLahir":new Date('1996-06-26')},
    {"Name":"Sutna","TanggalLahir":new Date('1998-12-24')},
    {"Name":"Fikry","TanggalLahir":new Date('1997-05-17')},
    {"Name":"Jhordy","TanggalLahir":new Date('2001-11-15')},
    {"Name":"Raihan","TanggalLahir":new Date('2000-05-01')},
    {"Name":"Jawir","TanggalLahir":new Date('2000-03-01')},
    {"Name":"Sindy","TanggalLahir":new Date('2001-06-30')}];

    siswa.sort(function(a, b){return a.TanggalLahir-b.TanggalLahir});                                       

     for(i=0; i<siswa.length; i++) {
        lahir = siswa[i].TanggalLahir;
        var diffDays = parseInt((HariIni.getYear() - lahir.getYear()));
        console.log(siswa[i].Name + " usianya saat ini " + diffDays + " tahun");
        siswa.sort(function(a, b){return a.TanggalLahir-b.TanggalLahir});                                       
     }
console.log("=======================================");
console.log("Waktu Hari Ini : "+HariIni);
