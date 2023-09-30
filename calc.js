const calculateluasPersegi = (sisi) => {
    return sisi * sisi;
  };
  
  // Fungsi untuk menghitung keliling persegi
  const calculatekelilingPersegi = (sisi) => {
    return 4 * sisi;
  };
  
  // Fungsi untuk menghitung luas persegi panjang
  const calculateluasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
  };
  
  // Fungsi untuk menghitung keliling persegi panjang
  const calculatekelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * (panjang + lebar);
  };
  
  // Export fungsi-fungsi untuk digunakan di file lain
  module.exports = {
    calculateluasPersegi,
    calculatekelilingPersegi,
    calculateluasPersegiPanjang,
    calculatekelilingPersegiPanjang,
  };