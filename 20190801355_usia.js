console.log("Mencari Tingakatan Pendidikan")

var input = require("readline-sync")

var usia = input.questionInt("Masukan Usia : ")

if(usia > 15){
    console.log("SMA")
}else if(usia > 12 && usia < 16){
    console.log("SMP")
}else if(usia > 6 && usia < 13){
    console.log("SD")
}else if(usia > 4 && usia < 7){
    console.log("TK")
}else {
    console.log("PG")
}