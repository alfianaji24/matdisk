
console.log("==================================================")
var Adil = "Adil"
var Tata = "Tata"
var Ilham = "Ilham"
var Saman = "Saman"
var Retyan = "Retyan"
var Ghozy = "Ghozy"
var Irfan = "Irfan"
var Dhila = "Dhila"
var Dimas = "Dimas"
var Gilang = "Gilang"
var Angga = "Angga"
var Hapiz = "Hapiz"
var Maulana = "Maulana"
var Elfa = "Elfa"
var Setianing = "Setianing"

var Biru = "Biru"
var Hitam = "Hitam"
var Putih = "Putih"
var Coklat = "Coklat"

var data = [
    [Adil,38,Biru],[Tata,40,Hitam],[Ilham,41,Hitam],[Saman,42,Putih],[Retyan,42,Biru],[Ghozy,43,Biru],[Irfan,42,Biru],[Dhila,36,Hitam],[Dimas,43,Biru],[Gilang,42,Hitam],[Angga,41,Coklat],[Hapiz,40,Hitam],[Maulana,42,Hitam],[Elfa,39,Putih],[Setianing,39,Hitam]
];

data.sort((a,b) => (a[1] - b[1]))

for(var i=0; i<=14; i++){
console.log("Nama : " +data[i][0]+" | Warna : " +data[i][2]+" | Ukuran : " +data[i][1])
}
console.log("==================================================")
console.log("Retyan Andriansyah | 20190801362 | Sorting")