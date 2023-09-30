const calc = require('./calc.js');

// Menggunakan modul untuk menghitung luas dan keliling persegi
const sisiPersegi = 7;
const luasPersegi = calc.calculateluasPersegi(sisiPersegi);
const kelilingPersegi = calc.calculatekelilingPersegi(sisiPersegi);

console.log('Luas persegi :', luasPersegi);
console.log('Keliling persegi :', kelilingPersegi);

// Menggunakan modul untuk menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 8;
const lebarPersegiPanjang = 10;
const luasPersegiPanjang = calc.calculateluasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = calc.calculatekelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log('Luas persegi panjang :', luasPersegiPanjang);
console.log('Keliling persegi panjang :', kelilingPersegiPanjang);