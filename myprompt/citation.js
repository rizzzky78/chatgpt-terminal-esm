/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const Cites = [
  {
    role: "system",
    content: `Kamu adalah seorang asisten profesional, kamu memiliki kemampuan analisis, pembuatan atau perbaikan suatu karya tulis imliah, memiliki kemampuan dalam  membuat dan memperbaiki kosakata atau kalimat yang dinilai kurang bagus dan memperbaikinya.`,
  },
  {
    role: "user",
    content: `Kedepannya nanti, saya akan memberikan data-data jurnal yang telah saya dapatkan. Hal yang perlu kamu lakukan adalah membuat daftar pustaka dengan fromat penulisan APA. Tunggu hingga saya memberikan data jurnalnya.`,
  },
  {
    role: "assistant",
    content: `Tentu, saya siap membantu membuat daftar pustaka dengan format penulisan APA untuk jurnal yang telah Anda dapatkan. Silakan berikan data jurnalnya ketika Anda siap.`,
  },
  {
    role: "user",
    content: `Berikut adalah data-data jurnalnya:
//
---
Judul Penelitian: Analisa Kualitas Pelayanan untuk Meningkatkan Kepuasan Pelanggan Menggunakan Metode Kano dan Quality Function Deployment (Studi Kasus PT. Bank X)
Peneliti: Shella Anindya Puspitasari, Lukmandono
Sumber jurnal: Jurnal SENOPATI. Sustainability, Ergonomics, Optimization, and Application of Industrial Engineering. Vol.1 No.1, Tahun 2019
DOI: https://doi.org/10.31284/j.senopati.2019.v1i1.529
--- 
Judul Penelitian: Analisis Kepuasan Pelanggan Surat Kabar Dumai Pos dengan Menggunakan Metode Quality Function Deployment
Peneliti: Surya Indrawan, MT
Sumber jurnal: Unitek Vol.10 No.1, Tahun 2017
DOI: https://doi.org/10.52072/unitek.v10i1.72
--- 
Judul Penelitian: Perancangan Produk Waistbag dengan Menggunakan Metode Quality Function Deployment (QFD)
Peneliti: Saeful Nurochim*, Asep Nana Rukmana
Sumber jurnal: Journal Riset Teknik Industri. Volume 1, No.1,  Hal: 1 - 13, Tahun 2021
DOI: https://doi.org/10.29313/jrti.v1i1.91
--- 
Judul Penelitian: Usulan Perbaikan Kualitas Pelayanan Kesehatan Dengan Metode Quality Function Deployment (QFD) di Poliklinik
Peneliti: Vera Devani, Anisa Dwi Darma
Sumber jurnal: Performa: Media Ilmiah Teknik Industri, Vol.17, No.2, Hal: 120-131, Tahun 2018
DOI: https://doi.org/10.20961/performa.17.2.23520
--- 
Judul Penelitian: Kepuasan Pelanggan Terhadap Pelayanan PT Interyasa Dumai Menggunakan Metode Service Quality (Servqual) dan Quality Function Deployment (QFD)
Peneliti: Soni Fajar Mahmud
Sumber jurnal: UNITEK. Vol.10 No.2, Tahun 2017
DOI: https://doi.org/10.52072/unitek.v10i2.84
--- 
`,
  },
];

export default Cites;
