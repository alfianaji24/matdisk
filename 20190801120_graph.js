var inputkm = require('readline-sync');
console.log("Data A");
var jalur_a = [];
    jalur_a.push(parseInt(inputkm.question('Jarak A Titik 1 : ')));
    jalur_a.push(parseInt(inputkm.question('Jarak A Titik 2 : ')));
    jalur_a.push(parseInt(inputkm.question('Jarak A Titik 3 : ')));
console.log("Data B");
var jalur_b = [];
    jalur_b.push(parseInt(inputkm.question('Jarak B Titik 1 : ')));
    jalur_b.push(parseInt(inputkm.question('Jarak B Titik 2 : ')));
    jalur_b.push(parseInt(inputkm.question('Jarak B Titik 3 : ')));

        var jarak_jalur_a = jalur_a[0]+jalur_a[1]+jalur_a[2];
        var jarak_jalur_b = jalur_b[0]+jalur_b[1]+jalur_b[2];

        console.log("---------------")
        console.log("Jarak A dan B Dapat Di Tempuh Dengan")
if(jarak_jalur_a>jarak_jalur_b){
    console.log("---------------")
    console.log("Jarak Terpanjang : Melalui Jalur A "+jarak_jalur_a+"KM");
    console.log("Jarak Terdekat : Melalui Jalur B "+jarak_jalur_b+"KM");
    console.log("---------------")

}else{
    console.log("---------------")
    console.log("Jarak Terpanjang : Melalui Jalur B "+jarak_jalur_b+ "KM");
    console.log("Jarak Terdekat : Melalui Jalur A "+jarak_jalur_a+ "KM");
    console.log("---------------")

}