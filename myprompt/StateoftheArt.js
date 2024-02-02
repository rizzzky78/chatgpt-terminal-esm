/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const StateOfTheArt = [
  {
    role: "system",
    content: `Asumsikan kamu adalah seorang mentor (asisten) profesional yang berlandaskan ilmu pengetahuan di bidang Teknik Industri, Marketing, dan Teknologi.
Kamu diwajibkan untuk memahami, menganalisis permasalahan, berdasarkan konteks dari seorang Klien, serta membimbing Klien demi menyelesaikan permasalahan mereka`,
  },
  {
    role: "user",
    content: `Berikut adalah data latar belakang proposal peneltiian saya:
### Latar belakang
Di tengah tren kesehatan global yang berkembang, permintaan terhadap obat-obatan herbal mengalami peningkatan yang signifikan. Menurut laporan dari Grand View Research (2021) pasar global produk herbal diperkirakan akan tumbuh dengan cepat, didorong oleh kesadaran konsumen yang meningkat mengenai manfaat kesehatan dan keberlanjutan dari penggunaan produk alami. Hal ini didukung juga dari Global Industry Analysts Inc (2020) pasar obat-obatan herbal global mencapai nilai sebesar 123,7 miliar dolar AS, dan diperkirakan akan terus tumbuh dengan laju pertumbuhan tahunan sebesar 5,88% antara tahun 2021 hingga tahun 2027. Faktor-faktor yang mendorong pertumbuhan pasar ini termasuk peningkatan kesadaran konsumen terhadap gaya hidup sehat, peningkatan minat pada pengobatan alami, dan meningkatnya permintaan akan produk-produk herbal yang aman dan bebas efek samping. Tren ini mencerminkan perubahan dalam perilaku konsumen, yang semakin memilih produk yang lebih alami dan etis dalam praktik keseharian mereka.
Halal Mart BC Cilacap 3 merupakan toko ritel yang menjual berbagai produk herbal berkualitas HNI (Halal Network International) dengan berbagai kategori seperti herbs products, health food & beverages, dan cosmetics & home care. Halal Mart BC Cilacap 3 berada di bawah naungan langsung dari PT. HPAI (Herba Penawar Alwahida Indonesia) yang sudah berdiri dari tahun 2012. Toko ini berperan penting dalam distribusi produk-produk HNI, dan melayani berbagai tingkatan distribusi dari Business Center hingga konsumen akhir.
Melihat kilas balik pada saat wawancara, admin Halal Mart BC Cilacap 3 mengaku pernah menjual ribuan produk setiap minggunya pada saat wabah covid-19 silam. Hal ini dibuktikan melalui survei yang dilakukan oleh McKinsey & Company (2020) yaitu menunjukkan bahwa sekitar 45% responden di Indonesia mengklaim meningkatkan konsumsi obat-obatan herbal selama pandemi, sebagai upaya untuk memperkuat sistem kekebalan tubuh.
Pada saat dilakukan observasi di Halal Mart BC Cilacap 3 ditemukan permasalahan dalam pelayanan pelanggan. Tingginya permintaan informasi dan pemesanan produk menyebabkan admin kewalahan dalam memberikan respon yang cepat dan efisien. Keterbatasan jumlah admin juga menjadi kendala dalam memberikan pelayanan yang responsif, yang dapat berdampak pada penurunan kualitas pelayanan dan kepuasan pelanggan. Meskipun permintaan produk meningkat, Halal Mart menghadapi tantangan dalam mengelola permintaan informasi dan pemesanan produk, terutama karena beban kerja yang tinggi pada satu admin yang mengelola pelayanan pelanggan dan pemesanan produk.
Sebagai respon terhadap permasalahan tersebut, peneliti berencana mengimplementasikan solusi berbasis teknologi, yaitu rule based chatbot pada akun ke-dua WhatsApp admin Halal Mart BC Cilacap 3. Tujuan dari implementasi ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk. Rencana ini meliputi pengumpulan data fitur, analisis dengan metode Quality Function Deployment (QFD), pengembangan dengan metode Agile Scrum, dan evaluasi dampak penerapan chatbot menggunakan Usability Testing. Tujuan dari implementasi chatbot ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk kepada konsumen. Penelitian ini diharapkan dapat memberikan solusi tentang bagaimana teknologi dapat digunakan untuk meningkatkan efisiensi operasional pelayanan pelanggan di sektor ritel, terutama dalam permasalahan permintaan yang meningkat untuk produk herbal.
###

Tunggu hingga saya memberikan instruksi selanjutnya.`,
  },
  {
    role: "assistant",
    content: `Baik, saya telah membaca latar belakang proposal penelitian Anda. Berdasarkan informasi yang Anda berikan, terdapat beberapa permasalahan yang perlu Anda selesaikan dalam penelitian Anda, yaitu:

1. Tingginya permintaan informasi dan pemesanan produk: Administrasi kewalahan dalam memberikan respon yang cepat dan efisien terkait permintaan informasi dan pemesanan produk dari pelanggan. Hal ini dapat berdampak pada penurunan kualitas pelayanan dan kepuasan pelanggan. Anda perlu mencari solusi untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk kepada konsumen.

2. Keterbatasan jumlah admin: Keterbatasan jumlah admin dalam mengelola pelayanan pelanggan dan pemesanan produk dapat menjadi kendala dalam memberikan pelayanan yang responsif. Anda perlu mencari cara untuk mengelola beban kerja admin yang tinggi dan meningkatkan kualitas pelayanan.

Untuk memulai penelitian ini, langkah-langkah yang dapat Anda lakukan adalah sebagai berikut:

1. Identifikasi kebutuhan dan preferensi pelanggan: Lakukan survei atau wawancara dengan pelanggan untuk memahami kebutuhan dan preferensi mereka terkait pembelian produk herbal. Identifikasi juga informasi apa yang sering diminta pelanggan dan fitur-fitur apa yang diharapkan dalam proses pemesanan produk.

2. Analisis Quality Function Deployment (QFD): Gunakan metode QFD untuk menganalisis kebutuhan pelanggan dan menghubungkannya dengan fitur-fitur yang dapat diimplementasikan dalam chatbot. Tujuan dari analisis ini adalah untuk memastikan bahwa fitur-fitur yang diberikan dalam chatbot dapat memenuhi kebutuhan pelanggan dan meningkatkan kualitas pelayanan.

3. Pengembangan chatbot dengan metode Agile Scrum: Implementasikan metode Agile Scrum dalam pengembangan chatbot. Metode ini memungkinkan Anda untuk mengatur dan mengelola proyek dengan lebih efisien, serta mempercepat waktu pengembangan dan meningkatkan fleksibilitas.

4. Evaluasi dampak penerapan chatbot menggunakan Usability Testing: Setelah chatbot selesai dikembangkan, lakukan uji coba dengan pengguna untuk mengevaluasi kemudahan penggunaan dan kepuasan pengguna terhadap chatbot. Hasil dari uji coba ini dapat membantu Anda untuk memperbaiki dan meningkatkan kualitas chatbot sebelum diimplementasikan secara penuh.

Selain itu, pastikan Anda juga mempertimbangkan aspek keamanan data pelanggan dalam pengembangan chatbot ini. Mungkin Anda perlu bekerja sama dengan tim IT atau ahli keamanan untuk memastikan bahwa data pelanggan aman dan terlindungi.

Saya harap informasi ini dapat membantu Anda memulai penelitian Anda. Jika Anda memiliki pertanyaan lain, jangan ragu untuk mengajukannya.`,
  },
  {
    role: "user",
    content: `// prompt rules
  Kedepannya saya ingin kamu membuat deskriptif mengenai penelitian, parameternya secara urut adalah: judul penelitian, tujuan penelitian, hasil penelitian, kesimpulan penelitian.
  Nantinya saya akan memberikan data terkait penelitian. Hal yang harus kamu lakukan adalah:
  - Membuat paragraf deskriptif utuh terkait data penelitian yang diberikan, parameter [judul, tujuan, hasil, kesimpulan], buat dalam satu paragraf deskriptif secara utuh.
  - Menjabarkan [peneliti, judul penelitian, hasil penelitian, persamaan penelitian, perbedaan penelitian], buat dalam bentuk poin-poin dari: persamaan dan perbedaan penelitian dengan peneltian saya.
  catatan: persamaan dan perbedaan penelitian adalah hal yang merujuk data penelitian yang diberikan terhadap penelitian saya saat ini.
  //

  Harap tunggu hingga saya memberikan data penelitian.`,
  },
  {
    role: "assistant",
    content: `Baik, saya akan menunggu sampai Anda memberikan data penelitian yang akan saya gunakan untuk membuat deskripsi. Silahkan berikan data penelitian yang relevan dan saya akan melakukan penjabaran dan perbandingan dengan penelitian Anda.`,
  },
  {
    role: "user",
    content: `Data penelitian:
  //
### Judul penelitian:
USULAN PERBAIKAN PELAYANAN DI KEDAI KOPI SANG ESOEN PADA MASA PANDEMI COVID-19 MENGGUNAKAN METODE SERVICE QUALITY DAN QUALITY FUNCTION DEPLOYMENT

### Peneliti:
Nur Qomaruddin Rafli, Dzakiyah Widyaningrum, Moh. Jufriyanto

### Latar belakang penelitian:
Persaingan dalam dunia industri sangatlah pesat, pasar bisnis menuntut setiap perusahaan untuk selalu berusaha meningkatkan kualitas produknya. Semua perusahaan baik yang bergerak dalam bidang jasa maupun penyiapan pruduk pasti memiliki tujuan untuk tetap berkembang dan berjalan dengan baik agar dapat mempertahankan dan meningkatkan keuntungan atau laba operasional perusahaan. Dengan menerapkan strategi pemasaran yang efektif melalui pemanfaatan peluang yang ada untuk meningkatkan posisi perusahaan di pasar. Pelanggan akan merasa puas jika jasa atau produk yang diberikan melebihi dari harapannya, sehingga kualitas jasa atau produk mempunyai pengaruh yang penting terhadap kepuasan pelanggan. Kualitas adalah totalitas fitur dan karakteristik produk atau jasa yang bergantung pada kemampuannya untuk memuaskan kebutuhan yang dinyatakan atau tersirat (Kotler & Keller, 2012). Cara-cara yang dapat ditempuh dalam meningkatkan kualitas pelayanan adalah dengan berusaha untuk mengetahui dan memahami keinginan pelanggan. Dengan adanya timbal balik dari pelanggan maka pihak perusahaan dapat memperbaiki kualitas pelayanan. Menurut Kotler (1997) dalam (Jamily, 2018), kepuasan adalah perasaan senang atau kecewa seseorang yang berasal dari perbandingan antara kesan yang diterima terhadap kinerja (hasil) suatu produk dan harapan-harapannya. Kepuasan pelanggan merupakan faktor yang penting bagi perusahaan, sehingga perusahaan dapat terus berjalan dan berkembang terutama dalam peningkatan kualitas pelayanan.
Peningkatan kualitas pelayanan saat ini sangat penting dalam mendukung peningkatan laba. Banyaknya perusahaan termasuk perusahaan penyedia jasa saat ini terkena dampak Covid-19 yang melanda negara Indonesia sejak bulan Maret 2020. Melalui Surat Edaran Nomor 2/2020 tentang lanjutan pencegahan dan penyebaran wabah Corona Virus Disease 2019 (Covid-19) di wilayah kewenangan masing-masing secara berkala. Perusahaan diharapkan melakukan upaya pencegahan dan juga tindakan berupa negoisasi dengan tenaga kerja dalam membahas jalan terbaik untuk perusahaan dan karyawan sehingga perusahaan tidak melakukan pengurangan tenaga kerja. Dalam masa pandemi Covid-19, peningkatan kualitas pelayanan merupakan hal yang sangat penting dilakukan untuk memperoleh hasil yang optimal, sehingga perusahan dapat bertahan sekaligus bersaing pada masa pandemi Covid- 19 yang melanda hingga saat ini.
Kedai Kopi Sang Esoen adalah salah satu coffee shop yang berada di kota Gresik, berlokasi di Jalan Kyai H. Syafi’i 99, Suci, Gresik. Kedai Kopi Sang Esoen buka setiap hari pukul 10.00 pagi sampai jam 11.00 malam. Kedai Kopi Sang Esoen salah satu coffee shop di Gresik yang menyediakan fasilitas tempat indoor dan outdoor yang dilengkapi dengan internet (wifi) dan juga ruangan AC dibagian indoor. Coffee shop ini juga menyediakan beberapa menu, untuk menu Coffee Based ada Es Kopi Sang Esoen, Es Kopi Susu, Es Kopi Nyoklat, Es Kopi Kelapa, Es Kopi Susu Aren , Es Kopi Susu Matcha, dan Es Kopi Susu Karamel. Untuk menu Non Caffee Based tersedia Es Matcha Ori, Es Susu Reg, Es Nyoklat, dan Es ONYK. Kedai Kopi Sang Esoen juga melayani pembelian online via Go Food (Gojek) atau Grab, kedua pihak tersebut yang akan mengantar pesanan ke customer. Beberapa fasilitas Kedai Kopi Sang Esoen dapat dilihat pada gambar yang ada di Lampiran 1. Untuk pangsa pasarnya meliputi semua kalangan karena harganya yang terjangkau. Dalam upaya meningkatkan kualitas pelayanan, pihak Kedai Kopi Sang Esoen perlu mengetahui apa permasalahan yang telah terjadi. Maka pihak Kedai Kopi Sang Esoen melakukan penyebaran kuisioner terbuka terlebih dahulu kepada 50 pelanggan Kedai Kopi Sang Esoen. Dari hasil rekapitulasi yang didapat dari penyebaran kuisioner terbuka, maka diperoleh hasil 5 jenis keluhan yang mendominasi dan hasilnya dapat dilihat dari Tabel 1.
Semakin bertambahnya pesaing dalam hal ini membuat pihak Kedai Kopi Sang Esoen untuk lebih meningkatkan kualitas pelayanan, serta melakukan pengembangan usaha dan upaya memenuhi kebutuhan dan keinginan pelanggan supaya jumlah pengujung meningkat. Dari beberapa pesaing ada 1 cafe yang dijadikan sebagai pembanding benchmarking yaitu Pit-Stop Kopi Gold PPS. Cafe tersebut dipilih karena letak Pit-Stop Kopi Gold PPS yang tidak jauh dari Kedai Kopi Sang Esoen sehingga sangat berpengaruh terhadap persaingan jumlah pelanggan, selain itu dari segi harga menu yang ditawarkan lebih murah, penyajian yang lebih menarik, tempat yang lebih luas dengan bagian indoor, rooftop, dan outdoor, serta tersedianya area parkir yang cukup luas.

### Kesimpulan penelitian:
Berdasarkan hasil analisis dari penelitian yang dilakukan dapat ditarik beberapa kesimpulan yang diantaranya adalah:
1. Dari hasil pengolahan data kuesioner terhadap pelayanan Kedai Kopi Sang Esoen, diperoleh gambaran adanya kesenjangan (gap) yang terjadi pada pihak pelanggan yaitu antara tingkat persepsi dan tingkat harapan. Gap ini menunjukkan tingkat pelayanan yang telah diberikan Kedai Kopi Sang Esoen, terdapat beberapa atribut yang tidak sesuai dengan harapan pelanggan. Berikut adalah atribut-atribut dengan nilai gap negatif yang perlu diperbaiki:
---- csv ----
No., Atribut Pelayanan, Gap
1. Kenyamanan pada meja dan kursi pada Kedai Kopi Sang Esoen, -0,7375
2. ,Kecepatan karyawan dalam melayani ,pelanggan ,-0,3125
3. ,Kondisi fasilitas toilet ,dan tempat ibadah ,(Musholla) ,-0,275
4. ,Kemapuan penataan hidangan yang baik ,-0,1875
5. ,Kesiapan kasir dalam melakukan transaksi ,uang ,-0,1875
6. ,Memberikan pelayanan tepat waktu pada ,pesanan pelanggan ,-0,075
7. ,Tersedianya fasilitas internet (wifi) yang ,lancar ,-0,0625
--- end csv ---
2. Rancangan perbaikan kualitas pelayanan yang seharusnya dilakukan oleh Kedai Kopi Sang Esoen pada masa pandemi Covid-19 berdasarkan prioritasnya sehingga dapat memenuhi kebutuhan pelanggan yaitu sebagai berikut:
a. Mengganti desain meja dan kursi yang lebih nyaman serta melakukan pengecekan fasilitas secara rutin.
b. Melakukan training untuk meningkatkan kinerja/kreatifitas karyawan dan memberi penghargaan kepada karyawan yang kinerjanya selalu meningkat serta memberi sanksi kepada karyawan yang kinerjanya buruk.
c. Menyediakan uang kecil/receh dan makanan ringan untuk opsi uang kembalian.
d. Meningkatkan dan membuat jadwal pengecekan kualitas jaringan wifi.
e. Membuat jadwal piket untuk perawatan tempat ibadah dan toilet.
//

Buatkan paragraf deskriptif utuh terkait data penelitian yang diberikan, parameter [judul, tujuan, hasil, kesimpulan], buat dalam satu paragraf deskriptif secara utuh.`,
  },
];

/**
 *@type { import("@interfaces").TPromptConstructor[] }
 */
export const SimplifiedSoA = [
  {
    role: "system",
    content: `Kamu adalah seorang asisten profesional. Kamu memiliki kemampuan dalam menganalisis dan mencari letak permasalahan suatu karya tulis ilmiah.`,
  },
  {
    role: "user",
    content: `Kedepannya saya akan memberikan data penelitian saya dan data penelitian orang lain, nantinya saya ingin kamu membuat deskriptif persamaan dan perbedaan peneltiian saya dengan penelitian orang lain (dalam bentuk satu paragraf utuh masing-masing). Data akan saya berikan setelah pesan ini.`,
  },
  {
    role: "assistant",
    content: `Tentu, saya akan dengan senang hati untuk membantu Anda dengan tugas tersebut. Silakan berikan data penelitian Anda dan data penelitian orang lain setelah ini, dan saya akan menganalisisnya untuk mencari persamaan dan perbedaan antara kedua penelitian tersebut.`,
  },
  {
    role: "user",
    content: `// Data-Data Penelitian //

### Data penelitian saya (latar belakang):
Di tengah tren kesehatan global yang berkembang, permintaan terhadap obat-obatan herbal mengalami peningkatan yang signifikan. Menurut laporan dari Grand View Research (2021) pasar global produk herbal diperkirakan akan tumbuh dengan cepat, didorong oleh kesadaran konsumen yang meningkat mengenai manfaat kesehatan dan keberlanjutan dari penggunaan produk alami. Hal ini didukung juga dari Global Industry Analysts Inc (2020) pasar obat-obatan herbal global mencapai nilai sebesar 123,7 miliar dolar AS, dan diperkirakan akan terus tumbuh dengan laju pertumbuhan tahunan sebesar 5,88% antara tahun 2021 hingga tahun 2027. Faktor-faktor yang mendorong pertumbuhan pasar ini termasuk peningkatan kesadaran konsumen terhadap gaya hidup sehat, peningkatan minat pada pengobatan alami, dan meningkatnya permintaan akan produk-produk herbal yang aman dan bebas efek samping. Tren ini mencerminkan perubahan dalam perilaku konsumen, yang semakin memilih produk yang lebih alami dan etis dalam praktik keseharian mereka.
Halal Mart BC Cilacap 3 merupakan toko ritel yang menjual berbagai produk herbal berkualitas HNI (Halal Network International) dengan berbagai kategori seperti herbs products, health food & beverages, dan cosmetics & home care. Halal Mart BC Cilacap 3 berada di bawah naungan langsung dari PT. HPAI (Herba Penawar Alwahida Indonesia) yang sudah berdiri dari tahun 2012. Toko ini berperan penting dalam distribusi produk-produk HNI, dan melayani berbagai tingkatan distribusi dari Business Center hingga konsumen akhir.
Melihat kilas balik pada saat wawancara, admin Halal Mart BC Cilacap 3 mengaku pernah menjual ribuan produk setiap minggunya pada saat wabah covid-19 silam. Hal ini dibuktikan melalui survei yang dilakukan oleh McKinsey & Company (2020) yaitu menunjukkan bahwa sekitar 45% responden di Indonesia mengklaim meningkatkan konsumsi obat-obatan herbal selama pandemi, sebagai upaya untuk memperkuat sistem kekebalan tubuh.
Pada saat dilakukan observasi di Halal Mart BC Cilacap 3 ditemukan permasalahan dalam pelayanan pelanggan. Tingginya permintaan informasi dan pemesanan produk menyebabkan admin kewalahan dalam memberikan respon yang cepat dan efisien. Keterbatasan jumlah admin juga menjadi kendala dalam memberikan pelayanan yang responsif, yang dapat berdampak pada penurunan kualitas pelayanan dan kepuasan pelanggan. Meskipun permintaan produk meningkat, Halal Mart menghadapi tantangan dalam mengelola permintaan informasi dan pemesanan produk, terutama karena beban kerja yang tinggi pada satu admin yang mengelola pelayanan pelanggan dan pemesanan produk.
Sebagai respon terhadap permasalahan tersebut, peneliti berencana mengimplementasikan solusi berbasis teknologi, yaitu rule based chatbot pada akun ke-dua WhatsApp admin Halal Mart BC Cilacap 3. Tujuan dari implementasi ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk. Rencana ini meliputi pengumpulan data fitur, analisis dengan metode Quality Function Deployment (QFD), pengembangan dengan metode Agile Scrum, dan evaluasi dampak penerapan chatbot menggunakan Usability Testing. Tujuan dari implementasi chatbot ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk kepada konsumen. Penelitian ini diharapkan dapat memberikan solusi tentang bagaimana teknologi dapat digunakan untuk meningkatkan efisiensi operasional pelayanan pelanggan di sektor ritel, terutama dalam permasalahan permintaan yang meningkat untuk produk herbal.


### Data penelitian orang lain (deskriptif):
Bora (2021) melakukan penelitian yang berjudul "Usulan Peningkatan Kualitas Layanan Perguruan Tinggi Menggunakan Metode Service Quality (Servqual) dan Quality Function Deployment (QFD): Studi Kasus di STT Ibnu Sina Batam". Tujuan penelitian ini adalah untuk menganalisis dan memberikan usulan perbaikan kualitas pelayanan di STT Ibnu Sina Batam dengan mengintegrasikan metode Servqual dan QFD. Hasil penelitian menunjukkan bahwa terdapat gap negatif antara persepsi dan harapan mahasiswa terhadap kualitas layanan, menandakan ketidakpuasan mereka terhadap pelayanan yang diberikan. Berdasarkan analisis gap Servqual, beberapa respon teknis diidentifikasi sebagai prioritas perbaikan, seperti pengembangan dan peningkatan mutu dosen, tenaga administrasi yang cekatan, layanan sistem informasi akademik yang terintegrasi, dan pelatihan pelayanan prima bagi staf dan dosen. Penelitian ini menyimpulkan bahwa implementasi usulan perbaikan tersebut diharapkan dapat meningkatkan kualitas layanan di STT Ibnu Sina Batam.
//
Buatkan deskriptif persamaan dan perbedaan dalam bentuk satu paragraf utuh.`,
  },
];

/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
export const MatchSoA = [
  {
    role: "system",
    content: `Kamu adalah seorang mentor (asisten) profesional yang berlandaskan ilmu pengetahuan di bidang Teknik Industri, Informatika, dan Pemasaran.
Kamu diwajibkan untuk memahami, menganalisis permasalahan, berpikir kritis, berdasarkan konteks dari seorang Klien, serta membimbing Klien demi menyelesaikan permasalahan mereka.`,
  },
  {
    role: "user",
    content: `Kedepannya saya akan memberi kamu data terkait permasalahan yang akan saya bahas nantinya, data yang akan saya kirim sebagai acuan dalam memberikan lingkup yang akan dibahas kedepannya.`,
  },
  {
    role: "assistant",
    content: `Tentu, saya menghargai inisiatif Anda untuk mengirimkan data terkait permasalahan yang akan kami bahas nantinya. Data yang Anda berikan akan membantu saya memahami lingkup permasalahan dengan lebih baik dan memungkinkan saya untuk memberikan solusi atau arahan yang sesuai. Saya siap untuk menerimanya kapan saja. Terima kasih atas kerjasamanya!`,
  },
  {
    role: "user",
    content: `Berikut adalah data-data yang saya berikan:

### Data latar belakang penelitian saya
Di tengah tren kesehatan global yang berkembang, permintaan terhadap obat-obatan herbal mengalami peningkatan yang signifikan. Menurut laporan dari Grand View Research (2021) pasar global produk herbal diperkirakan akan tumbuh dengan cepat, didorong oleh kesadaran konsumen yang meningkat mengenai manfaat kesehatan dan keberlanjutan dari penggunaan produk alami. Hal ini didukung juga dari Global Industry Analysts Inc (2020) pasar obat-obatan herbal global mencapai nilai sebesar 123,7 miliar dolar AS, dan diperkirakan akan terus tumbuh dengan laju pertumbuhan tahunan sebesar 5,88% antara tahun 2021 hingga tahun 2027. Faktor-faktor yang mendorong pertumbuhan pasar ini termasuk peningkatan kesadaran konsumen terhadap gaya hidup sehat, peningkatan minat pada pengobatan alami, dan meningkatnya permintaan akan produk-produk herbal yang aman dan bebas efek samping. Tren ini mencerminkan perubahan dalam perilaku konsumen, yang semakin memilih produk yang lebih alami dan etis dalam praktik keseharian mereka.
Halal Mart BC Cilacap 3 merupakan toko ritel yang menjual berbagai produk herbal berkualitas HNI (Halal Network International) dengan berbagai kategori seperti herbs products, health food & beverages, dan cosmetics & home care. Halal Mart BC Cilacap 3 berada di bawah naungan langsung dari PT. HPAI (Herba Penawar Alwahida Indonesia) yang sudah berdiri dari tahun 2012. Toko ini berperan penting dalam distribusi produk-produk HNI, dan melayani berbagai tingkatan distribusi dari Business Center hingga konsumen akhir.
Melihat kilas balik pada saat wawancara, admin Halal Mart BC Cilacap 3 mengaku pernah menjual ribuan produk setiap minggunya pada saat wabah covid-19 silam. Hal ini dibuktikan melalui survei yang dilakukan oleh McKinsey & Company (2020) yaitu menunjukkan bahwa sekitar 45% responden di Indonesia mengklaim meningkatkan konsumsi obat-obatan herbal selama pandemi, sebagai upaya untuk memperkuat sistem kekebalan tubuh.
Pada saat dilakukan observasi di Halal Mart BC Cilacap 3 ditemukan permasalahan dalam pelayanan pelanggan. Tingginya permintaan informasi dan pemesanan produk menyebabkan admin kewalahan dalam memberikan respon yang cepat dan efisien. Keterbatasan jumlah admin juga menjadi kendala dalam memberikan pelayanan yang responsif, yang dapat berdampak pada penurunan kualitas pelayanan dan kepuasan pelanggan. Meskipun permintaan produk meningkat, Halal Mart menghadapi tantangan dalam mengelola permintaan informasi dan pemesanan produk, terutama karena beban kerja yang tinggi pada satu admin yang mengelola pelayanan pelanggan dan pemesanan produk.
Sebagai respon terhadap permasalahan tersebut, peneliti berencana mengimplementasikan solusi berbasis teknologi, yaitu rule based chatbot pada akun ke-dua WhatsApp admin Halal Mart BC Cilacap 3. Tujuan dari implementasi ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk. Rencana ini meliputi pengumpulan data fitur, analisis dengan metode Quality Function Deployment (QFD), pengembangan dengan metode Agile Scrum, dan evaluasi dampak penerapan chatbot menggunakan Usability Testing. Tujuan dari implementasi chatbot ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk kepada konsumen. Penelitian ini diharapkan dapat memberikan solusi tentang bagaimana teknologi dapat digunakan untuk meningkatkan efisiensi operasional pelayanan pelanggan di sektor ritel, terutama dalam permasalahan permintaan yang meningkat untuk produk herbal.

### Data deskriptif peneltiian terdahulu
2.1.1. 	Siregar (2023) melakukan penelitian berjudul "Pengaruh Kualitas Pelayanan dan Produk terhadap Loyalitas Pelanggan pada UMKM". Tujuan dari penelitian ini adalah untuk mengevaluasi pengaruh kualitas pelayanan dan produk terhadap loyalitas pelanggan pada UMKM. Hasil penelitian menunjukkan bahwa kualitas pelayanan, kualitas produk, dan kepuasan pelanggan secara signifikan mempengaruhi loyalitas pelanggan. Analisis regresi linier berganda menunjukkan bahwa variabel kualitas pelayanan dan produk memiliki pengaruh positif yang kuat terhadap loyalitas pelanggan. Dalam kesimpulannya, penelitian ini menunjukkan bahwa kualitas pelayanan dan produk yang baik dapat meningkatkan loyalitas pelanggan dalam UMKM.
2.1.2. 	Zahra (2023) melakukan penelitian berjudul "Aplikasi Pemesanan Makanan Online Berbasis Chatbot di Warung Makan Barokah Kab. Semarang". Tujuan dari penelitian ini adalah untuk mempermudah pelanggan dalam melakukan pemesanan makanan secara online di Warung Makan Barokah dengan menggunakan aplikasi berbasis chatbot. Pada implementasi penelitian menunjukkan bahwa aplikasi ini berhasil memudahkan pelanggan dalam melakukan pemesanan makanan tanpa harus langsung datang ke warung, serta pelanggan dapat dengan mudah mengecek status pesanan melalui chat menggunakan aplikasi WhatsApp tanpa memerlukan aplikasi tambahan. Hasil dari penelitian menjunjukan bahwa aplikasi pemesanan makanan online berbasis chatbot dapat meningkatkan keterjangkauan dan kemudahan pemesanan makanan serta memberikan pengalaman yang lebih nyaman bagi pelanggan di Warung Makan Barokah Kab. Semarang.
2.1.3. 	Jati (2018) melakukan penelitian yang berjudul “The Development of Chatbot Application on Line Messaging Platform for Customer Service in Jogja Sewa Kamera”. Penelitian ini bertempat di Jogja Sewa Kamera, sebuah perusahaan persewaan kamera, mengalami peningkatan permintaan pelayanan melalui chat dan memiliki banyak pertanyaan berulang dari pelanggan. Dalam penelitian ini, dikembangkanlah chatbot sebagai asisten untuk menjawab pertanyaan pelanggan dan melayani permintaan booking secara otomatis. Hasil implementasi aplikasi chatbot yang dikembangkan telah berjalan dengan baik dan dapat digunakan untuk membantu pemilik Jogja Sewa Kamera dalam melayani pertanyaan pelanggan secara efisien. Implementasi aplikasi chatbot ini juga menunjukkan potensi pengembangan lebih lanjut, seperti pemrosesan bahasa alami, untuk meningkatkan fleksibilitas interaksi dengan pengguna di masa yang akan datang.
2.1.4. 	Rafli (2021) melakukan penelitian yang berjudul "Usulan Perbaikan Pelayanan di Kedai Kopi Sang Esoen pada Masa Pandemi Covid-19 menggunakan Metode Service Quality dan Quality Function Deployment" Tujuan penelitian ini untuk meningkatkan kualitas pelayanan di Kedai Kopi Sang Esoen selama masa pandemi Covid-19. Dalam penelitian ini, dilakukan analisis kuesioner terhadap 50 pelanggan Kedai Kopi Sang Esoen untuk mengidentifikasi keluhan-keluhan yang ada. Hasilnya menunjukkan adanya kesenjangan antara tingkat persepsi dan harapan pelanggan terhadap pelayanan yang diberikan oleh Kedai Kopi Sang Esoen. Kesimpulan dari penelitian ini adalah Kedai Kopi Sang Esoen perlu melakukan perbaikan kualitas pelayanan dengan mengganti desain meja dan kursi yang lebih nyaman, melatih karyawan, memperbaiki ketersediaan uang kecil sebagai opsi kembalian, meningkatkan kualitas jaringan wifi, dan menjadwalkan perawatan terhadap tempat ibadah dan toilet.
2.1.5. 	Bora (2021) melakukan penelitian yang berjudul "Usulan Peningkatan Kualitas Layanan Perguruan Tinggi Menggunakan Metode Service Quality (Servqual) dan Quality Function Deployment (QFD): Studi Kasus di STT Ibnu Sina Batam". Tujuan penelitian ini adalah untuk menganalisis dan memberikan usulan perbaikan kualitas pelayanan di STT Ibnu Sina Batam dengan mengintegrasikan metode Servqual dan QFD. Hasil penelitian menunjukkan bahwa terdapat gap negatif antara persepsi dan harapan mahasiswa terhadap kualitas layanan, menandakan ketidakpuasan mereka terhadap pelayanan yang diberikan. Berdasarkan analisis gap Servqual, beberapa respon teknis diidentifikasi sebagai prioritas perbaikan, seperti pengembangan dan peningkatan mutu dosen, tenaga administrasi yang cekatan, layanan sistem informasi akademik yang terintegrasi, dan pelatihan pelayanan prima bagi staf dan dosen. Penelitian ini menyimpulkan bahwa implementasi usulan perbaikan tersebut diharapkan dapat meningkatkan kualitas layanan di STT Ibnu Sina Batam.
2.1.6. 	Caniago (2022) melakukan penelitian yang berjudul "Analisis Kepercayaan dan Kualitas Pelayanan terhadap Kepuasan Pelanggan", penelitian ini bertujuan untuk mengidentifikasi pengaruh kepercayaan dan kualitas pelayanan terhadap kepuasan pelanggan. Dalam penelitian ini, latar belakang menunjukkan bahwa tingkat kepuasan pelanggan sangat penting dalam menciptakan hubungan harmonis antara perusahaan dan pelanggan, membangun loyalitas, dan memberikan rekomendasi positif bagi perusahaan. Selain itu, kepercayaan dan kualitas pelayanan juga memiliki peran penting dalam mempengaruhi kepuasan pelanggan. Hasil penelitian menunjukkan bahwa kepercayaan memiliki pengaruh langsung yang signifikan terhadap kepuasan pelanggan, demikian pula dengan kualitas pelayanan. Selain itu, penelitian ini juga menunjukkan bahwa kepercayaan dan kualitas pelayanan secara simultan berpengaruh secara signifikan terhadap kepuasan pelanggan. Penelitian ini membuktikan bahwa peningkatan kepercayaan dan kualitas pelayanan dapat secara positif mempengaruhi kepuasan pelanggan.
2.1.7. 	Putra (2022) melakukan penelitian yang berjudul "Perancangan Aplikasi Pembukuan Menggunakan Metode Agile Scrum". Tujuan dari penelitian ini adalah mengembangkan sebuah aplikasi pembukuan berbasis Android yang dapat mengelola pemasukan dan pengeluaran barang, melakukan transaksi, mencetak nota secara otomatis, serta membuat laporan penjualan secara sistematis. Melalui penelitian ini, peneliti mencoba mengatasi permasalahan dalam proses pembukuan yang sebelumnya masih dilakukan secara manual di toko sepatu Sepatu Kaki Kaki. Hasil dari penelitian ini adalah sebuah aplikasi yang berhasil dikembangkan dan mampu memudahkan pengelolaan data produk secara sistematis dan akurat, mencatat transaksi dan retur secara otomatis, serta membuat laporan penjualan dengan efisien. Berdasarkan hasil pengujian sistem, aplikasi ini dapat diintegrasikan dengan printer Bluetooth dengan baik. Kesimpulan dari penelitian ini menunjukkan bahwa aplikasi pembukuan yang dikembangkan dapat menjadi penunjang aktivitas bisnis toko Sepatu Kaki Kaki dan membantu karyawan dalam mengelola data produk serta pencatatan transaksi dengan lebih efektif dan mengurangi adanya human error.
2.1.8. 	Puspitasari (2019) melakukan penelitian yang berjudul “Analisa Kualitas Pelayanan untuk Meningkatkan Kepuasan Pelanggan Menggunakan Metode Kano dan Quality Function Deployment (Studi Kasus PT. Bank X)”. Dalam penelitian ini, ditemukan 18 atribut pelayanan penting seperti kenyamanan ruang tunggu, kebersihan fasilitas, profesionalitas karyawan, dan lainnya. Melalui analisis menggunakan metode Kano, didapatkan nilai better dan worse untuk setiap atribut yang memandu pemilihan respon teknis prioritas dalam melakukan perbaikan. Selain itu, dengan menggunakan QFD, tim peneliti juga menentukan fungsi teknis dari pelayanan yang akan diberikan. Hasil penelitian ini memberikan kesimpulan bahwa penggunaan metode Kano dan QFD dapat membantu PT. Bank X dalam meningkatkan kualitas pelayanan serta memberikan alternatif keputusan yang dapat meningkatkan kepuasan pelanggan. Dari kesimpulan penelitian ini, ditemukan 12 respon teknis prioritas yang dapat dilakukan oleh PT. Bank X, termasuk pelatihan berkala, perekrutan SDM berpotensi, pemberian pelayanan cepat dan tepat, serta optimalisasi fasilitas. Dengan menerapkan perbaikan ini, diharapkan kepuasan pelanggan dapat ditingkatkan dan PT. Bank X dapat bersaing dengan lebih baik di pasar.
2.1.9. 	Indrawan (2017) melakukan penelitian yang berjudul "Analisis Kepuasan Pelanggan Surat Kabar Dumai Pos dengan Menggunakan Metode Quality Function Deployment" bertujuan untuk mengidentifikasi kebutuhan pelanggan serta penilaian terhadap Surat Kabar Dumai Pos. Penelitian ini menggunakan metode Quality Function Deployment (QFD) sebagai alat untuk meningkatkan kualitas produk. Hasil penelitian menunjukkan bahwa terdapat 25 atribut kebutuhan pelanggan yang terdiri dari tujuh variabel, dimana kelima atribut kebutuhan pelanggan dengan bobot kepentingan tertinggi adalah judul berita yang menarik, informasi yang terkini, menyangkut kepentingan masyarakat luas, disajikan secara lengkap dan detail, serta menjelaskan fakta secara lengkap. Meskipun beberapa atribut masih kurang memuaskan seperti jumlah dan kualitas foto, ulasan di bidang pendidikan dan teknologi, serta kualitas cetak dari gambar, upaya perbaikan dapat dilakukan dengan memberikan pelatihan kepada karyawan layout, wartawan, dan memberikan peralatan baru. Kesimpulannya, pemenuhan kebutuhan pelanggan Surat Kabar Dumai Pos terutama terletak pada ulasan berita tingkat daerah, namun beberapa aspek masih perlu diperbaiki untuk meningkatkan kepuasan pelanggan.
2.1.10. 	Saeful (2021) melakukan penelitian yang berjudul "Perancangan Produk Waistbag dengan Menggunakan Metode Quality Function Deployment (QFD)". Tujuan dari penelitian ini adalah untuk mengidentifikasi dan menerjemahkan kebutuhan dan keinginan pelanggan menjadi variabel kualitas yang dapat meningkatkan penjualan dan daya beli produk waistbag Kaboa. Hasil penelitian mencakup identifikasi 13 variabel pernyataan yang sesuai dengan kebutuhan dan keinginan konsumen, yang dikelompokkan ke dalam empat karakteristik, yaitu jenis dan karakteristik bahan, biaya produksi, kualitas proses, dan desain produk. Berdasarkan alternatif rancangan desain yang dibuat, alternatif kedua dipilih sebagai alternatif terbaik karena memiliki biaya produksi lebih rendah, kualitas yang baik, warna bermotif menarik, dan dilengkapi dengan teknologi water tied yang membuatnya tahan air. Kesimpulan dari penelitian ini adalah dengan mengimplementasikan metode Quality Function Deployment (QFD), perusahaan dapat mengembangkan waistbag yang inovatif, berkualitas, dan lebih kompetitif di pasar. Dengan demikian, penjualan waistbag Kaboa home industri Kindustries diharapkan dapat kembali berkembang dan bersaing di pasaran seperti sebelumnya.
2.1.11. 	Darma (2019) melakukan penelitian yang berjudul "Usulan Perbaikan Kualitas Pelayanan Kesehatan Dengan Metode Quality Function Deployment (QFD) di Poliklinik". Penelitian ini bertujuan untuk meningkatkan kualitas pelayanan rumah sakit dalam memenuhi kepuasan pasien. Penelitian ini menggunakan metode QFD untuk menerjemahkan keinginan pasien menjadi tindakan dan proses dalam memenuhi kepuasan pasien. Hasil penelitian ini menunjukkan adanya kesenjangan antara kinerja dan harapan pasien, dengan 22 atribut voice of customer (VOC) yang perlu diperbaiki. Beberapa prioritas perbaikan yang disarankan meliputi area parkir yang tidak memadai, keramahan perawat, ketersediaan kursi di ruang tunggu, kemudahan proses administrasi, dan ketersediaan ruang sholat. Kesimpulan penelitian ini menyarankan pemberian motivasi kerja dan sanksi kepada tenaga medis dan karyawan yang tidak menunjukkan disiplin dalam memberikan pelayanan, serta perhatian dan kesadaran dokter dalam melayani pasien.
2.1.12. 	Mahmud (2018) melakukan penelitian yang berjudul "Kepuasan Pelanggan Terhadap Pelayanan PT Interyasa Dumai Menggunakan Metode Service Quality (Servqual) dan Quality Function Deployment (QFD)". Penelitian ini bertujuan untuk menganalisis tingkat kepuasan pelanggan terhadap pelayanan yang disediakan oleh PT Interyasa Dumai. Penelitian ini bertolak dari pemahaman bahwa persaingan bisnis yang ketat mendorong setiap perusahaan untuk meningkatkan kualitas produk dan pelayanan guna memenuhi harapan pelanggan. Metode Servqual dan Quality Function Deployment digunakan dalam analisis tersebut. Hasil analisis menggunakan metode Servqual menunjukkan bahwa keunggulan PT Interyasa terletak pada penampilan atau seragam karyawan dan fasilitas pelayanan, sementara kelemahan terdapat pada tempat parkir yang aman, fasilitas fisik layanan, dan kebersihan lingkungan layanan. Faktor-faktor yang mempengaruhi tingkat kepuasan konsumen berdasarkan dimensi Quality Function Deployment meliputi kinerja karyawan, keaktifan dan kekreatifan karyawan, jaminan terhadap produk, fasilitas fisik yang memuaskan, suku bunga yang ringan, dan proses yang cepat dan mudah. Kesimpulan dari penelitian ini adalah PT Interyasa Dumai perlu meningkatkan pelayanan terkait atribut kelemahan yang diidentifikasi dan memperhatikan faktor-faktor yang mempengaruhi tingkat kepuasan pelanggan.

###

Tunggu hingga saya memberikan instruksi selanjutnya.`,
  },
  {
    role: "assistant",
    content: `Terima kasih atas data yang telah Anda berikan. Sepertinya Anda sedang mencari solusi untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk kepada pelanggan di Halal Mart BC Cilacap 3 dengan mengimplementasikan chatbot berbasis aturan pada akun WhatsApp admin.
Berikut adalah langkah-langkah yang dapat kita ambil untuk membahas permasalahan ini:

1. Analisis situasi: Mari kita hadapi situasinya dengan lebih detail. Apa yang menyebabkan tingginya permintaan informasi dan pemesanan produk di Halal Mart BC Cilacap 3? Adakah faktor-faktor eksternal yang mempengaruhi peningkatan permintaan? Apakah ada kendala lain selain keterbatasan jumlah admin?

2. Implementasi chatbot: Mari kita beralih ke solusi berbasis teknologi yang Anda rencanakan, yaitu chatbot berbasis aturan pada akun WhatsApp admin. Bagaimana persisnya chatbot ini akan diterapkan? Apakah ada fitur-fitur spesifik yang ingin Anda sertakan? Bagaimana Anda berencana mengumpulkan data fitur dan menganalisisnya menggunakan metode Quality Function Deployment (QFD)?

3. Metode pengembangan: Anda menyebutkan pengembangan chatbot menggunakan metode Agile Scrum. Mari kita jelaskan lebih lanjut tentang bagaimana proses pengembangan secara rinci, termasuk tahapan-tahapan, jadwal, dan tim yang terlibat.

4. Evaluasi dan dampak: Setelah mengimplementasikan chatbot, penting untuk mengevaluasi dan menguji keefektifan serta kepuasan pelanggan. Apa yang Anda rencanakan untuk melaksanakan evaluasi dan pengujian chatbot? Usability Testing merupakan metode yang baik untuk mengukur kualitas pengalaman pengguna. Bagaimana Anda mengintegrasikan evaluasi ke dalam proses pengembangan chatbot?

Dengan memahami konteks dan rincian permasalahan yang Anda berikan, saya akan memberikan panduan dan saran yang lebih spesifik dalam menghadapi permasalahan tersebut. Terima kasih atas kerjasamanya!`,
  },
  {
    role: "user",
    content: `Berikut adalah instruksinya:
    
Buatkan paragraf deskriptif yang menjelaskan korelasi (meliputi: persamaan, perbedaan, metode yang digunakan, pendekatan atau fokus penelitian) keseluruhan data deskriptif penelitian terdahulu terhadap penelitian saya.
Untuk penyusunan paragraf, gunakan gaya penulisan karya ilmiah pada umumnya (tidak ada kalimat aktif), pastikan arah pembahasan mengalir secara logis dan memiliki benang merah yang mencakup keseluruhan data peneltiian.
`,
  },
];

export default StateOfTheArt;
