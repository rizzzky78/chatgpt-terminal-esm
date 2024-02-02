
/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const Chats = [
  {
    role: "system",
    content: `Kamu adalah seorang mentor (asisten) profesional yang berlandaskan ilmu pengetahuan di bidang Teknik Industri dan Marketing.
Kamu diwajibkan untuk memahami, menganalisis permasalahan, berdasarkan konteks dari seorang Klien, serta membimbing Klien demi menyelesaikan permasalahan mereka`,
  },
  {
    role: "user",
    content: `Saya adalah seorang mahasiswa, major Teknik Industri strata 1.
Saat ini saya tengah membuat proposal skripsi.
`,
  },
  {
    role: "assistant",
    content: `Halo! Tentu, saya siap membantu Anda dengan pembuatan proposal skripsi Anda. Silakan jelaskan kepada saya topik yang sedang Anda kerjakan dan bagaimana saya dapat membantu Anda dalam proses tersebut.`,
  },
  {
    role: "user",
    content: `Saat ini saya sudah mendapatkan objek atau lokasi tempat dilakukannya penelitian.
Tempat penelitian saya yaitu berupa UMKM, sebut saja "Distributor Produk HNI HPAI Cabang Kesugihan".
Jadi UMKM tersebut merupakan distributor resmi sekaligus seller dari produk-produk HNI HPAI (rata-rata produk yang dijual adalah obat-obatan herbal, vitamin, kosmetik, hingga homecare),
strategi pemasaran yang dipakai adalah MLM atau multi level marketing, yang dimana reseller lain juga mengambil produk-produk HNI HPAI melalui distributor tersebut hingga akhirnya dijual kembali dan sampai pada tangan konsumen.
Untuk konsumen juga bisa membeli prosuk di distributor nya langsung, tetapi kebanyakan konsumen masih membeli lewat reseller di bawah level distributor.

//
Untuk permasalahan atau latar belakang akan dilanjutkan pada prompt selanjutnya.
`,
  },
  {
    role: "assistant",
    content: `Paham. Berdasarkan penjelasan Anda, objek penelitian Anda adalah distributor produk HNI HPAI cabang Kesugihan yang menggunakan strategi pemasaran MLM. Bagaimana saya dapat membantu Anda dalam membuat proposal skripsi mengenai topik ini?
Berikut adalah tahap-tahap yang dapat Anda ikuti dalam membuat proposal skripsi:

1. Pendahuluan: Jelaskan latar belakang penelitian, termasuk mengapa topik ini penting untuk diteliti. Dalam hal ini, Anda dapat membahas peran UMKM dan strategi pemasaran MLM dalam industri produk HNI HPAI serta isu-isu yang mungkin terkait.
2. Rumusan Masalah: Tentukan masalah atau permasalahan utama yang ingin Anda teliti. Misalnya, permasalahan dalam penerapan strategi pemasaran MLM pada distributor produk HNI HPAI, tantangan yang dihadapi oleh reseller atau konsumen dalam sistem ini, atau dampak strategi pemasaran MLM terhadap keberhasilan penjualan produk.
3. Tujuan dan Manfaat Penelitian: Jelaskan tujuan utama dari penelitian Anda. Apa yang ingin Anda capai melalui penelitian ini? Juga, jelaskan manfaat penelitian ini bagi industri UMKM, distributor, reseller, konsumen, dan masyarakat umum.
4. Kerangka Teori: Tinjau sumber-sumber teoritis yang relevan dengan topik penelitian Anda. Misalnya, Anda dapat mengkaji teori-teori tentang pemasaran, MLM, pengaruh perilaku konsumen, dan strategi pemasaran bagi UMKM.
5. Metodologi: Jelaskan metode yang akan Anda gunakan dalam penelitian ini, seperti metode pengumpulan data, analisis data, dan sampel yang akan digunakan. Dalam konteks penelitian ini, Anda mungkin perlu menggunakan kombinasi antara pengumpulan data kualitatif (wawancara, observasi) dan kuantitatif (survei, analisis data).
6. Sistematika Penulisan: Jelaskan bagaimana proposal skripsi Anda akan disusun dan apa yang akan dibahas dalam setiap bab. Dalam hal ini, Anda dapat mengacu pada struktur proposal skripsi yang biasanya terdiri dari pendahuluan, tinjauan pustaka, metode penelitian, hasil dan analisis data, serta kesimpulan dan saran.
7. Daftar Pustaka: Cantumkan semua referensi yang Anda gunakan dalam proposal skripsi ini sesuai dengan format yang ditetapkan oleh institusi Anda.

Setelah Anda mengikuti tahap-tahap tersebut, Anda dapat mulai menguraikan masalah atau latar belakang penelitian Anda dengan lebih detail agar saya dapat membantu Anda dalam analisis dan membuat proposal skripsi yang lebih komprehensif.`,
  },
  {
    role: "user",
    content: `Berikut adalah informasi tambahan terkait dengan topik atau tema proposal peneliian saya:
Saya jelaskan dengan pembawaan gaya bahasa saya sendiri.

1. Latar Belakang
Jadi di UMKM tersebut merupakan tumpuan utama bagi reseller untuk mengambil produk atau konsumen yang membeli langsung ditempat.
Berikut saya gambarkan level nya dengan node garis-garis, tanda "-" menandakan proses distribusi barang.
Level:
(1) Pabrik asal
(2) Distributor Sektor Provinsi (warehouse)
(3) Distributor Sektor Kota/Kabupaten (warehouse)
(4) Distributor Sektor Kecamatan (tempat objek penelitian saya)
(5) Reseller (model bisnis MLM) atau Konsumen yang beli langsung di Distributor Sektor Kecamatan
(6) Reseller lain dibawah Reseller (MLM) atau Konsumen

Catatan:
Konsumen tidak bisa membeli produk pada level 1-3, hanya pada level 4-6.
Setiap pembelian produk baik dari reseller atau konsumen, dilakukan dengan sistem PO (pre order) melalui chat pesan WA (whatsapp).

Fokus permasalahan:
Tercatat (melalui owner UMKM yang diwawancarai) UMKM tersebut dalam satu minggu bisa menjual ribuan produk entah itu berasal dari pembelian reseller atau konsumen.
Diketahui UMKM tersebut hanya memiliki satu pekerja sekaligus owner, kenapa hanya satu?, karena pekerjaan yang dilakukan cukup ringan dan owner nya sendisi merasa mampu dalam menghandle nya, ucap dari owner.
Owner nya sendiri juga merupakan seorang ibu rumah tangga. Saat sistem model bisnis MLM nya membesar (networking), Owner mengakui bahwa permintaan produk dari reseller maupun konsumen melonjak perlahan, karena sistem pembelian produknya adalah PO atau pre-order, owner sempat seringkali mendapati tidak sempat membalas pesan WA dari calon pembeli atau reseller.
Oleh karena itu banyak chat pesan yang telat dibalas atau di respon akibat banyaknya permintaan, baik untuk membalas pertanyaan terkait informasi  produk (stok ketersediaan, deskripsi, manfaat produk, dll) oleh calon pembeli atau pemesanan produk dari reseller.
Tercatat juga (melalui wawancara dari salah satu reseller dan konsumen) menyatakan bahwa banyak juga yang mendapati responsivitas pada UMKM dinilai kurang, dalam pelayanan kepada calon pembeli atau reseller, bahkan sampai menunggu berjam-jam dan sampai dengan satu-dua hari, dan yang terburuk tidak dibalas sama sekali (kemungkinan pesan yang dikirimkan tenggelam atau Admin lupa membalas) hingga akhirnya dibalas oleh Admin UMKM.
Owner nya sendiri juga berniat untuk menambah pekerja untuk menghandle UMKM tetapi dirinya menilai masih sanggup untuk menghandle UMKM tersebut secara sendirian.

Hingga akhirnya saya (sebagai peneliti sekaligus inovator) menawarkan untuk implementasi sebuah tools yang bernama Chatbot.
Chatbot ini nantinya digunakan sebagai asisten Admin UMKM dalam menangani hal-hal yang bersifat repetitif seperti:
- customer atau calon pembeli yang meminta seputar informasi produk
- reseller atau customer yang memesan atau membeli produk

Perlu di ingat, tools chatbot ini tidak bertujuan untuk menggantikan pekerjaan Admin sepenuhnya, tetapi sebagai pembantu dalam menangani hal yang bersifat repetitif, Admin nantinya akan berfokus kepada pemesanan produk dari reseller/customer dan menangasi konsultasi pada calon pembeli yang ingin menanyakan seputar produk yang bersifat khusus (seperti: alergi, kecocokan, bagusnya untuk apa, dll) yang tidak bisa ditangani oleh chatbot.

2. Rumusan Masalah
Banyaknya yang mendapati bahwa UMKM kurang responsif atau lambat respon dalam melayani reseller atau customer, oleh karena ini diperlukan solusi yakni implementasi penggunaan chatbot sebagai asisten dalam pelayanan pada UMKM agar lebih cepat responsif dan tidak mengecewakan reseller atau customer.

3. Tujuan dan Manfaat
Tujuan Penelitian:
- Menyelesaikan permasalahan UMKM yang dinilai kurang pelayanannya
- Mingkatkan kualitas pelayanan pada UMKM


Manfaat Penelitian:
- Meningkatnya kualitas hubungan rasa percaya reseller/customer terhadap UMKM
- Meningkatnya profit akibat dari sistem pelayanan yang responsif dan cepat

4. Kerangka Teori
Kerangka teori hanya berdasarkan referensi yang memiliki korelasi dengan penelitian lain yang mirip dengan mengambil konsep permasalahan yang sama, topik fokus pengembangan yang sama, atau berdasarkan refernsi penelitian yang berbeda tetapi memiliki tujuan yang sama.

5. Metodologi
Karena major saya adalah teknik industri, tentunya saya tidak ingin menggunakan metode yang tidak berhubungan dengan major saya.
Oleh karena itu saya menggunakan metode R&D (Research and Development) sebagai metode utama, dan SDLC (software development life cycle) sebagai metode sampingan yang berguna sebagai panduan dalam pembuatan chatbot nanttinya.

//
Catatan dari saya: saya ingin membawa penelitian ini ke ranah marketing/strategi pemasaran yang dimana masih diterima pada major saya, saya tidak ingin fokus pada proses pembuatan/implementasi chatbot melainkan ingin fokus pada inti pokok permasalahan.
`,
  },
  {
    role: "assistant",
    content: `Terima kasih atas informasi tambahan yang Anda berikan. Berdasarkan latar belakang dan fokus permasalahan yang Anda jelaskan, berikut adalah proposal kerangka teori yang dapat Anda gunakan:

1. Marketing di Era Digital: Tinjaulah perkembangan teknologi dan perubahan perilaku konsumen dalam pemasaran. Diskusikan mengenai pentingnya responsivitas dan kecepatan dalam memberikan pelayanan kepada konsumen di era digital.
2. Pemasaran Multi Level dan UMKM: Jelaskan konsep pemasaran multi level (MLM) dan bagaimana penerapannya pada UMKM. Diskusikan kelebihan dan kekurangan dari strategi pemasaran ini dalam konteks penjualan produk HNI HPAI.
3. Pengaruh Kualitas Pelayanan pada Loyalitas Konsumen: Tinjau teori-teori yang membahas tentang kualitas pelayanan dan pengaruhnya terhadap loyalitas konsumen. Bahas mengenai pentingnya responsivitas dan kecepatan dalam menyediakan informasi produk kepada konsumen.
4. Implementasi Chatbot dalam Layanan Pelanggan: Jelaskan konsep chatbot, metode penggunaannya sebagai asisten dalam pelayanan pelanggan, dan manfaat yang diharapkan. Diskusikan bagaimana chatbot dapat membantu dalam menangani permintaan informasi produk dan pemesanan produk dari reseller dan konsumen.

Dalam tahap metodologi, Anda dapat menggunakan metode R&D (Research and Development) untuk mengembangkan dan mengimplementasikan chatbot. Namun, Anda dapat lebih fokus pada analisis kebutuhan, desain chatbot, dan evaluasi implementasinya, sesuai dengan fokus inti pokok permasalahan yang Anda ingin teliti.
Selain itu, Anda juga dapat mempertimbangkan metode pengumpulan data seperti wawancara dengan pemilik UMKM, reseller, dan konsumen untuk mendapatkan pandangan dan pengalaman mereka terkait pelayanan dan responsifitas dari UMKM tersebut.
Dengan kerangka teori dan metodologi yang tepat, Anda dapat menjalankan penelitian ini dengan fokus pada masalah utama yang ingin Anda teliti dan menghasilkan rekomendasi yang bermanfaat bagi UMKM tersebut dalam meningkatkan kualitas pelayanan kepada reseller dan konsumen.`,
  },
  {
    role: "user",
    content: `Berikut adalah beberapa poin yang wajib ada dalam latar belakang penelitian:

Pernyataan Masalah: Mulailah dengan menjelaskan permasalahan atau masalah yang akan Anda teliti. Tunjukkan mengapa masalah ini penting dan relevan dalam konteks penelitian Anda.
Konteks Penelitian: Berikan gambaran umum tentang latar belakang penelitian, seperti tren, perkembangan, atau isu-isu yang berkaitan dengan topik Anda. Bantu pembaca memahami konteks yang mengelilingi masalah tersebut.
Tujuan Penelitian: Jelaskan tujuan dari penelitian Anda. Apa yang ingin Anda capai dengan penelitian ini?
Manfaat Penelitian: Gambarkan manfaat yang mungkin diperoleh dari hasil penelitian Anda, baik dalam konteks akademis maupun praktis. Mengapa penelitian ini penting?
Kajian Pustaka: Tinjau literatur terkait yang telah ada dalam bidang penelitian Anda. Diskusikan penelitian terdahulu yang relevan dan identifikasi kesenjangan pengetahuan yang perlu diisi oleh penelitian Anda.
Kerangka Konseptual: Jelaskan kerangka konseptual atau teoretis yang akan Anda gunakan dalam penelitian. Bagaimana Anda akan mendekati permasalahan ini dari sudut pandang teoretis?
Hipotesis atau Pertanyaan Penelitian: Jelaskan hipotesis penelitian (jika ada) atau pertanyaan penelitian yang akan Anda jawab melalui penelitian Anda.
Batasan Penelitian: Identifikasi batasan-batasan penelitian Anda, seperti wilayah geografis, populasi, waktu, dan metode penelitian yang digunakan.
Metodologi Penelitian: Berikan gambaran singkat tentang metode penelitian yang akan Anda gunakan untuk menjawab pertanyaan penelitian Anda.
Signifikansi Penelitian: Jelaskan mengapa penelitian ini relevan bagi perkembangan ilmu, praktik, atau kebijakan di bidang Anda.

//
Susunlah latar belakang penelitian berdasarkan data-data dan prompt yang sudah saya berikan.
`,
  },
  {
    role: "assistant",
    content: `Latar Belakang Penelitian:
Pada latar belakang penelitian ini, akan dibahas permasalahan yang dihadapi oleh Distributor Produk HNI HPAI Cabang Kesugihan. Distributor ini menggunakan strategi pemasaran MLM (Multi Level Marketing) untuk menjual produk-produk HNI HPAI seperti obat-obatan herbal, vitamin, kosmetik, dan homecare. Dalam sistem MLM ini, reseller atau agen lain dapat mengambil produk dari distributor dan menjualnya kembali kepada konsumen. Selain itu, konsumen juga dapat membeli produk langsung dari distributor. Namun, penggunaan sistem PO (pre order) melalui chat pesan WhatsApp sebagai metode pemesanan produk menimbulkan permasalahan dalam responsivitas dan kecepatan pelayanan.

Pernyataan Masalah:
Dalam konteks ini, permasalahan yang dihadapi adalah kurangnya responsivitas dan lambatnya respon dari distributor terhadap permintaan informasi produk dan pemesanan produk dari reseller atau konsumen. Hal ini disebabkan oleh banyaknya pesan yang masuk melalui media sosial dan keterbatasan tenaga kerja pada distributor tersebut.

Konteks Penelitian:
Dalam konteks industri UMKM, distributor produk HNI HPAI Cabang Kesugihan memiliki peran yang penting dalam menjaga kelancaran rantai distribusi dan kepuasan konsumen. Namun, dengan pertumbuhan bisnis yang pesat dan metode pemesanan yang menggunakan chat pesan WhatsApp, tanggapan yang lambat dan kurang responsif dapat menghambat proses penjualan dan mengurangi kepuasan konsumen.

Tujuan Penelitian:
Tujuan dari penelitian ini adalah untuk mengidentifikasi dan menganalisis permasalahan kurangnya responsivitas dan lambatnya respon dalam pelayanan distributor produk HNI HPAI Cabang Kesugihan. Penelitian ini juga bertujuan untuk mengusulkan solusi dalam bentuk pengimplementasian chatbot sebagai asisten dalam pelayanan untuk meningkatkan responsivitas dan kecepatan pelayanan.

Manfaat Penelitian:
Penelitian ini diharapkan akan memberikan manfaat bagi distributor produk HNI HPAI Cabang Kesugihan dalam meningkatkan kualitas pelayanan dan kepuasan konsumen. Dengan menggunakan chatbot sebagai asisten dalam pelayanan, diharapkan dapat mengurangi beban kerja bagi pengelola bisnis dan mempercepat tanggapan terhadap permintaan informasi produk dan pemesanan produk.

Kajian Pustaka:
Dalam kajian pustaka, akan diidentifikasi dan dikaji penelitian terdahulu yang relevan dalam bidang pelayanan konsumen, responsivitas pelayanan, dan penggunaan teknologi chatbot dalam meningkatkan kualitas pelayanan. Kajian pustaka ini akan membantu mengidentifikasi kesenjangan pengetahuan yang perlu diisi oleh penelitian ini.

Kerangka Konseptual:
Kerangka konseptual penelitian ini didasarkan pada konsep responsivitas dan kecepatan pelayanan dalam industri UMKM. Di dalam kerangka konseptual ini, penggunaan chatbot sebagai asisten dalam pelayanan akan diposisikan sebagai solusi untuk meningkatkan responsivitas dan kecepatan pelayanan.

Hipotesis atau Pertanyaan Penelitian:
Hipotesis penelitian ini adalah adanya pengaruh positif dari pengimplementasian chatbot sebagai asisten dalam pelayanan terhadap peningkatan responsivitas dan kecepatan pelayanan distributor produk HNI HPAI Cabang Kesugihan.

Batasan Penelitian:
Penelitian ini memiliki batasan dalam hal wilayah geografis yaitu Distributor Produk HNI HPAI Cabang Kesugihan. Selain itu, batasan lainnya adalah waktu penelitian yang terbatas dalam lingkup tugas akhir atau skripsi.

Metodologi Penelitian:
Metode penelitian yang akan digunakan adalah Research and Development (R&D) untuk mengembangkan dan mengimplementasikan chatbot, serta Software Development Life Cycle (SDLC) sebagai panduan dalam pembuatan chatbot. Metode pengumpulan data yang akan digunakan adalah wawancara dengan pemilik UMKM, reseller, dan konsumen, serta analisis data kualitatif.

Signifikansi Penelitian:
Penelitian ini memiliki signifikansi baik dalam pengembangan ilmu di bidang pemasaran dan Teknik Industri, maupun praktik dalam meningkatkan kualitas pelayanan pada industri UMKM. Hasil penelitian ini diharapkan dapat memberikan rekomendasi bagi distributor produk HNI HPAI Cabang Kesugihan dalam meningkatkan responsivitas dan kecepatan pelayanan demi kepuasan konsumen.`,
  },
  {
    role: "user",
    content: `// berikut adalah teks atau panduan prompt //
Biasanya, latar belakang penelitian memiliki panjang sekitar satu hingga tiga halaman, tetapi ini akan bergantung pada tuntutan dari lembaga atau dosen pembimbing Anda. Anda perlu memastikan bahwa latar belakang tersebut mencakup elemen-elemen yang telah saya sebutkan dalam jawaban sebelumnya. Singkatnya, penting untuk menyampaikan informasi yang dibutuhkan dalam latar belakang penelitian tanpa berlebihan atau terlalu singkat.
Sebagai panduan umum, pastikan latar belakang penelitian Anda cukup komprehensif dan mampu menjelaskan dengan jelas permasalahan dan konteks penelitian. Fokuslah pada kualitas isi daripada panjangnya.
// akhir panduan teks prompt //

Buatkan latar belakang secara utuh berdasarkan prompt training yang sudah dijalankan.
`,
  },
  {
    role: "assistant",
    content: `Latar Belakang Penelitian:
Dalam industri UMKM, responsivitas dan kecepatan pelayanan merupakan faktor yang penting dalam mempertahankan pelanggan dan memenangkan persaingan pasar. Dalam konteks ini, permasalahan yang dihadapi oleh Distributor Produk HNI HPAI Cabang Kesugihan adalah kurangnya responsivitas dan lambatnya respon terhadap permintaan informasi produk dan pemesanan produk dari reseller atau konsumen. Hal ini disebabkan oleh banyaknya pesan yang masuk melalui media sosial dan keterbatasan tenaga kerja pada distributor tersebut.

Dalam industri pemasaran, reseller atau agen memiliki peran yang penting dalam memasarkan produk-produk UMKM kepada konsumen. Di Distributor Produk HNI HPAI Cabang Kesugihan, model bisnis MLM (Multi Level Marketing) digunakan untuk menjual produk-produk tersebut. Reseller atau agen dapat mengambil produk dari distributor dan menjualnya kembali kepada konsumen. Selain itu, konsumen juga dapat membeli produk langsung dari distributor.

Namun, sistem pemesanan yang menggunakan chat pesan WhatsApp sebagai metode pemesanan produk menimbulkan permasalahan dalam responsivitas dan kecepatan pelayanan. Banyaknya pesan yang harus ditangani oleh admin distributor mengakibatkan keterlambatan dalam memberikan respons kepada calon pembeli atau reseller. Hal ini dapat menghambat proses penjualan dan mengurangi kepuasan konsumen.

Dalam konteks ini, penting untuk mencari solusi yang mampu meningkatkan responsivitas dan kecepatan pelayanan distributor. Salah satu solusi yang dapat diimplementasikan adalah penggunaan chatbot sebagai asisten dalam pelayanan. Chatbot dapat membantu dalam menangani hal-hal yang bersifat repetitif, seperti memberikan informasi produk atau menerima pemesanan produk dari reseller atau konsumen.

Mengingat pentingnya responsivitas dan kecepatan dalam pelayanan konsumen, penelitian ini akan mengidentifikasi dan menganalisis permasalahan kurangnya responsivitas dan lambatnya respon dalam pelayanan distributor Produk HNI HPAI Cabang Kesugihan. Selain itu, penelitian ini juga akan mengusulkan solusi dalam bentuk pengimplementasian chatbot sebagai asisten dalam pelayanan untuk meningkatkan responsivitas dan kecepatan pelayanan.

Dengan mengimplementasikan chatbot, diharapkan dapat mengurangi beban kerja bagi admin distributor dan mempercepat respons terhadap permintaan informasi produk dan pemesanan produk. Hal ini diharapkan dapat meningkatkan kepuasan konsumen serta memperkuat hubungan bisnis antara distributor, reseller, dan konsumen.

Penelitian ini memiliki manfaat baik dalam pengembangan ilmu di bidang pemasaran dan Teknik Industri, maupun praktik dalam meningkatkan kualitas pelayanan pada industri UMKM. Hasil penelitian ini diharapkan dapat memberikan rekomendasi bagi distributor Produk HNI HPAI Cabang Kesugihan dalam meningkatkan responsivitas dan kecepatan pelayanan demi kepuasan konsumen.`,
  },
  {
    role: "user",
    content: `// berikut adalah teks panduan prompt //
berikut adalah panduan umum untuk penyusunan komponen-komponen penting dalam penyusunan sebuah karya ilmiah, termasuk rumusan masalah, asumsi dan batasan masalah, tujuan penelitian, dan manfaat penelitian:

Rumusan Masalah:
Identifikasi permasalahan yang akan diteliti. Pastikan permasalahan tersebut jelas dan spesifik.
Gambarkan latar belakang permasalahan dan jelaskan mengapa permasalahan tersebut penting atau relevan.
Gunakan pertanyaan penelitian atau pernyataan masalah untuk merumuskan secara eksplisit apa yang akan diselidiki.
Hindari merumuskan masalah yang terlalu umum atau terlalu sempit.

Asumsi dan Batasan Masalah:
Identifikasi asumsi-asumsi dasar yang menjadi landasan dari penelitian. Asumsi-asumsi ini bisa berupa keyakinan atau prasyarat yang harus dipenuhi.
Jelaskan batasan-batasan penelitian, seperti wilayah geografis, populasi sampel, waktu penelitian, atau metode penelitian yang digunakan.
Pastikan asumsi dan batasan mencerminkan kerangka kerja penelitian dan memberikan pemahaman yang jelas kepada pembaca.

Tujuan Penelitian:
Jelaskan secara eksplisit tujuan dari penelitian. Apa yang ingin dicapai melalui penelitian ini?
Tujuan harus terukur dan dapat diidentifikasi. Mereka seharusnya mencerminkan hasil yang dapat diharapkan dari penelitian.

Manfaat Penelitian:
Gambarkan manfaat yang dapat diperoleh dari hasil penelitian.
Jelaskan dampak penelitian, baik dalam konteks akademis maupun praktis. Mengapa penelitian ini relevan?
Identifikasi kontribusi penelitian terhadap literatur yang ada atau praktik di lapangan.
// akhir panduan teks prompt //

Susunlah:
- Rumusan Masalah Penelitian (dalam bentuk deskriptif)
- Asumsi dan Batasan Masalah Penelitian (dalam bentuk poin-poin)
- Tujuan Penelitian (dalam bentuk poin-poin)
- Manfaat Penelitian (dalam bentuk poin-poin)

Berdasarkan data training yang sudah dijalankan.
`,
  },
  {
    role: "assistant",
    content: `Rumusan Masalah Penelitian:
Permasalahan yang akan diteliti dalam penelitian ini adalah kurangnya responsivitas dan lambatnya respon dalam pelayanan distributor Produk HNI HPAI Cabang Kesugihan pada permintaan informasi produk dan pemesanan produk dari reseller atau konsumen. 

Asumsi dan Batasan Masalah Penelitian:
1. Asumsi: Pada penelitian ini, diasumsikan bahwa penggunaan chatbot sebagai asisten dalam pelayanan dapat membantu meningkatkan responsivitas dan kecepatan pelayanan distributor.
2. Batasan: Penelitian ini akan difokuskan pada distributor Produk HNI HPAI Cabang Kesugihan. Waktu penelitian terbatas pada periode tertentu dan metode penelitian yang digunakan adalah wawancara dan analisis data kualitatif.

Tujuan Penelitian:
1. Mengidentifikasi permasalahan responsivitas dan kecepatan pelayanan yang dihadapi oleh distributor Produk HNI HPAI Cabang Kesugihan.
2. Menganalisis faktor-faktor yang mempengaruhi responsivitas dan kecepatan pelayanan tersebut.
3. Menganalisis dampak penggunaan chatbot sebagai asisten dalam pelayanan terhadap peningkatan responsivitas dan kecepatan pelayanan.
4. Merekomendasikan solusi atau strategi yang dapat diimplementasikan oleh distributor untuk meningkatkan responsivitas dan kecepatan pelayanan.

Manfaat Penelitian:
1. Meningkatkan kualitas pelayanan distributor Produk HNI HPAI Cabang Kesugihan.
2. Meningkatkan kepuasan konsumen dan reseller.
3. Memberikan rekomendasi kepada industri UMKM terkait penggunaan chatbot dalam meningkatkan responsivitas dan kecepatan pelayanan.
4. Memberikan kontribusi terhadap literatur yang ada mengenai penggunaan chatbot dalam pemasaran dan industri UMKM.`,
  },
  {
    role: "user",
    content: `Beralih ke topik pembahasan baru. Pada sebelumnya kamu telah mendapatkan data mengenai penelitan saya.
Permasalahan: bagaimana caranya agar penelitian saya memiliki fokus pada body of knowledge teknik industri?, dikarenakan dosen pembimbing saya menghendaki agar pebelitian saya memiliki tema yang berkorelasi dengan ilmu teknik industri. Jabarkan bagaimana cara mengatasi permasalahan tersebut, analisislah dan berikan solusi yang konkrit.`,
  },
  {
    role: "assistant",
    content: `Untuk mengatasi permasalahan tersebut, berikut adalah langkah-langkah yang dapat Anda lakukan:

1. Tinjau Kembali Permasalahan Penelitian:
Periksa kembali permasalahan penelitian Anda dan identifikasi elemen-elemen yang berkaitan dengan ilmu Teknik Industri. Cermati aspek-aspek yang terkait dengan manajemen operasi, perencanaan produksi, analisis kinerja, atau perbaikan proses. Identifikasi elemen-elemen ini akan membantu Anda mengarahkan penelitian Anda ke dalam body of knowledge Teknik Industri.

2. Kaji Literatur Terkait:
Lakukan kajian literatur yang lebih mendalam dalam bidang Teknik Industri. Telusuri jurnal-jurnal ilmiah, buku, atau artikel yang terkait dengan topik penelitian Anda. Identifikasi konsep-konsep, teori, atau metode yang relevan dengan permasalahan yang Anda teliti. Dengan memahami body of knowledge Teknik Industri, Anda dapat mengarahkan penelitian Anda agar sesuai dengan bidang tersebut.

3. Identifikasi Konsep atau Teori yang Relevan:
Berdasarkan kajian literatur, identifikasi konsep atau teori yang relevan dengan permasalahan penelitian Anda. Misalnya, jika penelitian Anda berkaitan dengan efisiensi operasional, Anda dapat mengacu pada konsep Lean Manufacturing atau Six Sigma. Jika penelitian Anda berkaitan dengan perbaikan proses, Anda dapat mengacu pada konsep Continuous Improvement atau Total Quality Management. Identifikasi konsep atau teori ini akan membantu Anda membangun kerangka teoritis yang sesuai dengan bidang Teknik Industri.

4. Rancang Metodologi Penelitian yang Relevan:
Berdasarkan permasalahan dan kerangka teoritis yang telah Anda identifikasi, rancang metode penelitian yang sesuai dengan bidang Teknik Industri. Misalnya, jika penelitian Anda berkaitan dengan analisis kinerja, Anda dapat menggunakan metode pengumpulan data seperti observasi, wawancara, atau analisis data historis. Jika penelitian Anda berkaitan dengan perbaikan proses, Anda dapat menggunakan metode seperti analisis Value Stream Mapping atau Six Sigma DMAIC. Pastikan metode penelitian yang Anda pilih sesuai dengan bidang Teknik Industri.

5. Diskusikan Implikasi dan Relevansi Hasil Penelitian:
Dalam penulisan proposal skripsi Anda, diskusikan implikasi dan relevansi hasil penelitian terhadap bidang Teknik Industri. Jelaskan bagaimana hasil penelitian Anda dapat memberikan kontribusi dalam memperkaya body of knowledge Teknik Industri. Diskusikan juga bagaimana hasil penelitian Anda dapat diimplementasikan dalam konteks industri atau organisasi.

Dengan mengikuti langkah-langkah di atas, Anda dapat mengarahkan penelitian Anda agar memiliki fokus pada body of knowledge Teknik Industri. Pastikan untuk terus berdiskusi dengan dosen pembimbing Anda untuk mendapatkan arahan dan masukan yang lebih spesifik sesuai dengan bidang Teknik Industri yang Anda teliti.`,
  },
  {
    role: "user",
    content: `Asumsikan kamu adalah saya, yang dimana melakukan penelitian tersebut. Hal apa yang akan kamu lakukan jika penelitian kamu diharuskan berkorelasi dengan body of knowledge teknik industri?, jawab dengan setdetail mungkin dan berikan alasan yang jelas.`,
  },
  {
    role: "assistant",
    content: `Jika penelitian saya diharuskan berkorelasi dengan body of knowledge Teknik Industri, berikut adalah langkah-langkah yang akan saya lakukan:

1. Kaji Ulang Permasalahan Penelitian:
Saya akan melakukan kajian ulang terhadap permasalahan penelitian saya untuk mengidentifikasi elemen-elemen yang berkaitan dengan ilmu Teknik Industri. Saya akan menganalisis apakah permasalahan tersebut dapat dikaitkan dengan manajemen operasi, perencanaan produksi, analisis kinerja, atau perbaikan proses. Jika perlu, saya akan memodifikasi atau menyempurnakan permasalahan penelitian agar lebih terkait dengan bidang Teknik Industri.

2. Kaji Literatur Teknik Industri:
Saya akan melakukan kajian literatur yang lebih mendalam dalam bidang Teknik Industri. Saya akan membaca jurnal-jurnal ilmiah, buku, atau artikel yang terkait dengan topik penelitian saya. Tujuannya adalah untuk memahami konsep-konsep, teori, atau metode yang relevan dengan permasalahan yang saya teliti. Dengan memperoleh pemahaman yang lebih mendalam tentang body of knowledge Teknik Industri, saya dapat mengarahkan penelitian saya agar sesuai dengan bidang tersebut.

3. Identifikasi Konsep atau Teori yang Relevan:
Berdasarkan kajian literatur, saya akan mengidentifikasi konsep atau teori yang relevan dengan permasalahan penelitian saya. Saya akan mencari konsep-konsep seperti Lean Manufacturing, Six Sigma, Total Quality Management, atau Supply Chain Management yang dapat saya terapkan dalam penelitian saya. Dengan mengidentifikasi konsep atau teori yang relevan, saya dapat membangun kerangka teoritis yang sesuai dengan bidang Teknik Industri.

4. Rancang Metodologi Penelitian yang Relevan:
Sesuai dengan permasalahan dan kerangka teoritis yang telah saya identifikasi, saya akan merancang metode penelitian yang sesuai dengan bidang Teknik Industri. Misalnya, jika penelitian saya berkaitan dengan analisis kinerja, saya akan menggunakan metode pengumpulan data seperti observasi, wawancara, atau analisis data historis. Jika penelitian saya berkaitan dengan perbaikan proses, saya akan menggunakan metode seperti Value Stream Mapping atau Six Sigma DMAIC. Dengan merancang metode penelitian yang relevan, saya dapat menghasilkan data yang dapat diinterpretasikan dalam konteks Teknik Industri.

5. Diskusikan Implikasi dan Relevansi Hasil Penelitian:
Dalam penulisan proposal skripsi saya, saya akan mendiskusikan implikasi dan relevansi hasil penelitian terhadap bidang Teknik Industri. Saya akan menjelaskan bagaimana hasil penelitian saya dapat memberikan kontribusi dalam memperkaya body of knowledge Teknik Industri. Saya akan menggambarkan bagaimana hasil penelitian saya dapat diimplementasikan dalam konteks industri atau organisasi, serta memberikan manfaat yang nyata dalam bidang Teknik Industri.

Dengan mengikuti langkah-langkah di atas, saya akan memastikan bahwa penelitian saya memiliki korelasi yang kuat dengan body of knowledge Teknik Industri. Hal ini akan memastikan bahwa penelitian saya relevan dan dapat memberikan kontribusi yang berarti dalam bidang tersebut.`,
  },
  {
    role: "user",
    content: `Jika pembimbing mengarahkan penelitian agar lebih berfokus pada supply chain management (SCM), apa yang akan kamu lakukan?, tentunya tanpa menghilangkan/memudarkan penelitian penelitian kamu saat ini (hanya sebagai tambahan).`,
  },
  {
    role: "assistant",
    content: `Jika pembimbing mengarahkan penelitian agar lebih berfokus pada Supply Chain Management (SCM), berikut adalah langkah-langkah yang akan saya lakukan:

1. Tinjau Ulang Permasalahan Penelitian:
Saya akan meninjau ulang permasalahan penelitian saya dan mencari elemen-elemen yang terkait dengan SCM. Saya akan menganalisis apakah permasalahan tersebut dapat dikaitkan dengan aspek-aspek dalam SCM seperti perencanaan produksi, pengelolaan persediaan, distribusi, atau koordinasi rantai pasok. Jika perlu, saya akan memodifikasi atau menyempurnakan permasalahan penelitian agar lebih terfokus pada SCM.

2. Kaji Literatur SCM:
Saya akan melakukan kajian literatur yang lebih mendalam dalam bidang SCM. Saya akan membaca jurnal-jurnal ilmiah, buku, atau artikel yang terkait dengan topik SCM yang relevan dengan permasalahan penelitian saya. Tujuannya adalah untuk memahami konsep-konsep, teori, atau metode dalam SCM yang dapat saya terapkan dalam penelitian saya. Dengan memperoleh pemahaman yang lebih mendalam tentang SCM, saya dapat mengarahkan penelitian saya agar lebih berfokus pada bidang tersebut.

3. Identifikasi Konsep atau Teori SCM yang Relevan:
Berdasarkan kajian literatur, saya akan mengidentifikasi konsep atau teori dalam SCM yang relevan dengan permasalahan penelitian saya. Saya akan mencari konsep-konsep seperti demand forecasting, inventory management, supplier relationship management, atau logistics optimization yang dapat saya terapkan dalam penelitian saya. Dengan mengidentifikasi konsep atau teori yang relevan, saya dapat membangun kerangka teoritis yang lebih terfokus pada SCM.

4. Rancang Metodologi Penelitian yang Terkait dengan SCM:
Sesuai dengan permasalahan dan kerangka teoritis yang telah saya identifikasi, saya akan merancang metode penelitian yang terkait dengan SCM. Misalnya, jika penelitian saya berkaitan dengan pengelolaan persediaan, saya akan menggunakan metode seperti analisis ABC, EOQ, atau JIT. Jika penelitian saya berkaitan dengan koordinasi rantai pasok, saya akan menggunakan metode seperti collaborative planning, forecasting, and replenishment (CPFR) atau vendor-managed inventory (VMI). Dengan merancang metode penelitian yang terkait dengan SCM, saya dapat menghasilkan data yang dapat diinterpretasikan dalam konteks SCM.

5. Diskusikan Implikasi dan Relevansi Hasil Penelitian terhadap SCM:
Dalam penulisan proposal skripsi saya, saya akan mendiskusikan implikasi dan relevansi hasil penelitian terhadap bidang SCM. Saya akan menjelaskan bagaimana hasil penelitian saya dapat memberikan kontribusi dalam memperkaya pengetahuan dan praktik SCM. Saya akan menggambarkan bagaimana hasil penelitian saya dapat diimplementasikan dalam konteks pengelolaan rantai pasok atau operasi bisnis yang melibatkan SCM. Dengan demikian, penelitian saya akan memiliki fokus yang lebih kuat pada SCM tanpa menghilangkan atau memudarkan penelitian saya saat ini.

Dengan mengikuti langkah-langkah di atas, saya akan memastikan bahwa penelitian saya tetap berfokus pada bidang SCM sesuai dengan arahan dari pembimbing, sambil tetap mempertahankan penelitian saya saat ini. Hal ini akan memastikan bahwa penelitian saya relevan dan dapat memberikan kontribusi yang berarti dalam bidang SCM.`,
  },
  {
    role: "user",
    content: `Asumsikan pembimbing ingin kamu menambahkan metode SCM pada penelitian kamu, apa yang akan kamu lakukan terhadap penelitian kamu, seperti arah peneltiian akan kemana, analisis data apa yang harus dilakukan, hingga akhir/kesimpulan penelitian akan seperti apa. kecualikan studi literatur, asumsikan kamu sudah mencapai pada proses implementasi penelitian.`,
  },
];

export default Chats