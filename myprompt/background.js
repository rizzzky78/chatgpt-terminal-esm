/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const BackgroundChat = [
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
    content: `### Dataset masukan sebagai berikut ####

= = = Data kondisi global = = =
// Bagaimana kondisi UMKM di Indonesia saat ini?
Saat ini, UMKM sedang dalam tren yang positif dengan jumlahnya yang terus bertambah setiap tahunnya. Tren positif ini akan berdampak baik bagi perekonomian Indonesia. Berdasarkan data Kementerian Koperasi dan UKM, kontribusi UMKM terhadap PDB Nasional sebesar 60,5%.
dikutip 27 Jun 2023.
//

// Permasalahan apa saja yang dihadapi oleh UMKM di era digital saat ini?
Berdasarkan catatan Kemenkop UKM, 70,2% UMKM menghadapi kendala saat bertransformasi memanfaatkan teknologi digital. Kendala itu antara lain berupa kesulitan akses permodalan, ketersediaan bahan baku, dan kesulitan mengadopsi teknologi digital.
dikutip 4 Aug 2023.
//

// Masalah apa saja yang dihadapi oleh UMKM di Indonesia?
Sebagai catatan, UMKM sendiri memiliki peran sebagai sumber pertumbuhan ekonomi di Indonesia. UMKM masih menghadapi tantangan seperti terbatasnya akses dalam pembiayaan, terbatasnya akses pembiayaan, kesiapan digital, dan akses pemasaran.
dikutip 29 Aug 2023.
//

// Bagaimana peran UMKM dalam perekonomian di Indonesia?
UMKM mampu menyerap 97 persen dari total angkatan kerja dan mampu menghimpun hingga 60,4 persen dari total investasi di Indonesia. Berdasarkan data diatas, Indonesia mempunyai potensi basis ekonomi nasional yang kuat karena jumlah UMKM yang sangat banyak dan daya serap tenaga kerja sangat besar.
//

= = = Data kondisi global selesai = = =

= = = Data pengetahuan umum = = =
// Body of Knowledge Industrial Engineering (BOK IE)
Body of Knowledge Industrial Engineering (BOK IE) merujuk pada kumpulan pengetahuan yang diperlukan oleh seorang insinyur industri untuk menjalankan tugas-tugas mereka dengan efektif. BOK IE bertujuan untuk memetakan dan mengidentifikasi keseluruhan pengetahuan yang harus dipahami dan dikuasai oleh seorang insinyur industri agar dapat berkontribusi secara maksimal dalam mengoptimalkan sistem dan proses di industri.

Poin-poin utama yang menjadi pembangun BOK IE mencakup berbagai aspek penting dalam disiplin ilmu ini, seperti:

1. Teknik dan Metode Analisis:
   BOK IE melibatkan pengetahuan dan pemahaman yang mendalam tentang teknik dan metode analisis. Termasuk di dalamnya analisis data, teknik statistik, pemodelan, simulasi, optimasi, perencanaan eksperimen, dan algoritma pemecahan masalah. Hasil analisis ini membantu mengidentifikasi permasalahan dan mengambil keputusan yang cerdas dalam upaya meningkatkan efisiensi dan efektivitas operasi industri.

2. Perancangan Sistem dan Proses:
   Peningkatan efisiensi dan pengoptimalan laboratorium yang diperlukan dalam sistem dan proses industri menjadi fokus BOK IE. Hal ini melibatkan penguasaan desain dan pemodelan sistem, perancangan aliran pekerjaan, manajemen rantai pasok, layout pabrik dan gudang, perencanaan produksi, manajemen kapasitas, dan desain ergonomi.

3. Manajemen dan Rekayasa:
   BOK IE membahas perspektif manajemen dan rekayasa yang diperlukan dalam mengelola operasi industri. Fokus utamanya adalah pada manajemen risiko, manajemen proyek, pemodelan dan optimasi keputusan, manajemen mutu, manajemen teknologi, manajemen persediaan, manajemen transportasi, dan analisis biaya.

4. Elemen Manusia dalam Sistem:
   Industrial engineering juga memperhatikan aspek manusia dalam sistem industri. BOK IE mencakup keahlian dalam desain pekerjaan, manajemen kinerja, ergonomi kognitif dan fisik, manajemen pengetahuan, pendidikan dan pelatihan, dan motivasi dan kepuasan kerja.

5. Keterampilan Komunikasi dan Manajemen:
   Seorang insinyur industri juga harus memiliki keterampilan komunikasi yang bagus dan kemampuan manajemen yang efektif. BOK IE mencakup aspek komunikasi bisnis, manajemen tim, negosiasi, kepemimpinan, etika profesional, dan manajemen waktu.

Dalam keseluruhan, BOK IE membawa bersama-sama pengetahuan dan keterampilan interdisipliner yang memberikan dasar yang kuat bagi seseorang untuk mencapai kesuksesan dalam profesi insinyur industri. Poin-poin yang telah disebutkan di atas adalah beberapa komponen utama dalam binaraga pengetahuan insinyur industri dan membantu mereka dalam menganalisis, merancang, mengelola, dan meningkatkan sistem industri dengan mencakup faktor manusia, masalah operasional, manajemen, dan teknologi.
//

// Pemaduan BOK dengan ilmu bidang lain
Iya, memadukan pengetahuan yang ada dalam Body of Knowledge (BOK) dengan pengetahuan diluar BOK sangat memungkinkan dan bahkan bisa sangat bermanfaat. Saat ini, dunia industri semakin kompleks dan terus berkembang dengan cepat. Dalam menghadapi tantangan tersebut, inovasi dan pemikiran kritis menjadi sangat penting.

Dalam konteks itu, memadukan pengetahuan yang ada pada BOK dengan pengetahuan di luar BOK merupakan strategi yang efektif untuk menghadapi perubahan tersebut. Berikut ini adalah beberapa alasan mengapa memadukan pengetahuan tersebut dapat mendatangkan manfaat:

1. Melengkapi Kelemahan BOK:
   BOK Industrial Engineering memiliki cakupan yang luas, namun tidak selalu mencakup semua aspek dan perkembangan baru yang mungkin relevan dengan industri saat ini. Dengan memadukan pengetahuan dari sumber eksternal, Anda memiliki kesempatan untuk melengkapi kelemahan dan kekurangan dalam BOK tersebut.

2. Bersifat Interdisipliner:
   Industrial Engineering mencakup berbagai disiplin ilmu seperti matematika, statistik, manajemen, desain sistem, teknologi, dan ilmu sosial. Namun, tidak jarang ada permasalahan yang mengharuskan untuk memadukan pengetahuan lintas disiplin. Dengan memperluas pengetahuan ke dalam domain lain, Anda bisa menjadi profesional yang lebih holistik dan dapat melihat keseluruhan gambaran dengan cara yang baru.

3. Inovasi dan Perkembangan Terbaru:
   Dunia industri terus berkembang dengan adanya perubahan yang cepat. Rahasia kesuksesan dalam menghadapi perubahan ini adalah adanya inovasi. Melalui pengetahuan di luar BOK, Anda dapat memperoleh wawasan baru, ide-ide kreatif, dan solusi inovatif yang belum tersedia dalam BOK. Dengan demikian, Anda bisa tetap relevan dan dapat beradaptasi dengan perubahan tersebut.

4. Kompleksitas Tinggi:
   Industri saat ini semakin kompleks, dengan banyaknya variabel dan faktor yang harus diperhitungkan. Memadukan pengetahuan dari sumber luar BOK memungkinkan Anda memperoleh pola pikir dan metode baru untuk mengatasi kompleksitas ini. Anda dapat belajar dari praktik terbaik di berbagai bidang, menggabungkan alat dan teknik yang tepat, dan menciptakan pendekatan yang terintegrasi untuk menghadapi tantangan yang kompleks.

Namun, perlu diingat bahwa memadukan pengetahuan dari luar BOK juga memiliki batasan. Perlu dipastikan bahwa pengetahuan yang ditambahkan tersebut relevan, valid, dan berdasarkan pada landasan ilmiah yang kuat. Selain itu, penting juga untuk tetap memprioritaskan pemahaman terhadap konsep dan prinsip yang mendasari BOK IE, karena pengetahuan ini merupakan dasar yang kuat dalam praktek insinyur industri.

Jadi, dengan cara analitis dan ilmiah, memadukan pengetahuan yang ada pada BOK dengan pengetahuan di luar BOK adalah strategi yang baik dalam menghadapi kompleksitas dan perubahan di dunia industri saat ini. Ini memberikan peluang untuk inovasi, memperoleh wawasan lintas disiplin, dan mengatasi tantangan baru yang muncul.
//

// Metode Quality Function Deployment
3.2.1. 	Pengertian QFD
Quality Function Deployment (QFD) adalah sebuah metode yang digunakan dalam manajemen kualitas dan perencanaan produk yang bertujuan untuk mengidentifikasi dan memenuhi kebutuhan pelanggan dengan mengintegrasikan input dari berbagai departemen dalam perusahaan. QFD menghubungkan kebutuhan pelanggan dengan karakteristik produk dan proses serta memastikan bahwa produk dan proses tersebut dapat memenuhi harapan pelanggan.
Metode ini melibatkan tim lintas fungsi yang terdiri dari perwakilan dari berbagai departemen dalam organisasi untuk berpartisipasi dalam perencanaan dan pengembangan produk. Dalam metode QFD, berbagai matriks digunakan untuk memetakan kebutuhan pelanggan menjadi karakteristik produk, menghubungkan karakteristik produk dengan karakteristik proses, dan mengidentifikasi prioritas dalam pengembangan produk (Akao, 1990).
3.2.2. 	Tujuan dan Manfaat QFD
Tujuan utama dari QFD adalah untuk mengidentifikasi dan menggabungkan preferensi pelanggan dalam proses perancangan dan pengembangan produk, sehingga dapat menghasilkan produk yang sesuai dengan kebutuhan dan harapan pelanggan (Akao, 1990).
Beberapa manfaat dari penerapan QFD di antaranya adalah:
1.	Meningkatkan kepuasan pelanggan
Dengan mengidentifikasi kebutuhan dan harapan pelanggan secara lebih akurat, QFD membantu dalam menghasilkan produk atau layanan yang lebih sesuai dengan kebutuhan pelanggan dan meningkatkan kepuasan mereka.
2.	Mengurangi biaya perbaikan
QFD membantu dalam mencegah kesalahan atau kekurangan dalam tahap awal pengembangan produk melalui identifikasi kebutuhan pelanggan yang jelas. Hal ini dapat mengurangi biaya yang terkait dengan perbaikan atau pengembalian produk.
3.	Peningkatan efisiensi desain
Dengan menghubungkan preferensi pelanggan langsung ke elemen desain, QFD membantu mengarahkan proses desain untuk menghasilkan produk yang lebih efisien dan efektif.
4.	Meningkatkan daya saing
QFD dapat membantu perusahaan untuk menciptakan produk yang lebih baik, sesuai dengan kebutuhan pelanggan, dan dengan demikian meningkatkan daya saing mereka di pasar.
5.	Pembangunan tim yang kuat
QFD melibatkan kerjasama antara berbagai fungsi dan departemen dalam perusahaan. Hal ini membantu memperkuat kerjasama tim dan meningkatkan komunikasi antar anggota tim.
3.2.3. 	Tahapan Implementasi QFD
1.	Pembuatan House of Quality
House of Quality adalah salah satu alat analisis yang digunakan dalam Quality Function Deployment (QFD) - sebuah metode yang digunakan untuk menghubungkan kebutuhan pelanggan dengan elemen desain produk (Akao, 1990). House of Quality (HOQ) biasanya digunakan untuk mengidentifikasi dan menilai hubungan antara kebutuhan pelanggan, spesifikasi produk, dan elemen desain.
Berikut adalah tahapan dalam pembuatan House of Quality menurut Imam Djati Widodo, 2003:
a.	Identifikasi konsumen
Tahap pertama adalah mengumpulkan informasi dan memahami kebutuhan pelanggan yang relevan dengan produk yang akan dikembangkan. Hal ini dapat dilakukan melalui wawancara, survei, atau mengumpulkan data pasar terkait.
b.	Menentukan customer needs (WHATs)
Customer needs sering juga disebut dengan voice of customers. Item ini mengandung hal – hal yang dibutuhkan oleh konsumen dan masih bersifat umum, sehingga sulit untuk langsung diimplementasikan. Customer needs dapat dilakukan dengan melalui penelitian terhadap keinginan konsumen.
c.	Menentukan importance rating
Importance rating merupakan tingkat kepentingan dari voice of customer dan diperoleh dari hasil perhitungan kuesioner yang disebarkan kepada pelanggan. Perhitungan kuesioner ini bisa dilakukan dengan berbagai cara baik dengan menggunakan skala likert ataupun menggunakan matriks paired comparison.
d.	Analisis tentang customer competitive evaluation
Analisis ini dibuat berdasarkan pengumpulan data yang diperoleh dari konsumen tentang penyebaran produk di pasar dibandingkan dengan pesaing produk sejenis dan segmen pasar yang sama.
e.	Menentukan technical requirements (HOWs)
Technical requirements merupakan pengembangan dari customer needs atau merupakan penerjemahan kebutuhan konsumen dalam bentuk teknis agar sebuah produk dapat dibentuk secara langsung.
f.	Menentukan relationship
Agar diperoleh nilai secara kualitatif maka antara Whats dan Hows merupakan langkah selanjutnya untuk menemukan bobot. Dalam menggambarkan hubungan menggunakan simbol – simbol, yang umumnya digunakan dalam menjelaskan hubungan tersebut antara lain:
g.	Membuat matriks korelasi
Matrik korelasi terletak diatas House of Quality yang merupakan atap dan sebagai penentu dari struktur hubungan setiap item HOWs.
h.	Menentukan bobot
Bobot ditentukan dari hubungan korelasi antara customer requirement dan technical requirement yang ditentukan dari jenis hubungan yang berlangsung.
Secara matematis hubungan ini dapat dirumuskan sbeagai berikut:
BKj	= IRi (Bti x Hij)
Dimana:
BKj	= Bobot kolom unuk kolom j
Iri	= Importance rating untuk keinginan konsumen i
Hij	= Nilai hubungan untuk keinginan konsumen (i) dengan keinginan teknis (j), nilai hubungan tersebut dapat berupa simbol hubungan kuat, sedang, dan lemah.
i.	Menentukan aksi terhadap pengembangan produk baru
Aksi terhadap pengembangan produk baru ditentukan melalui strategi analisis dalam House of Quality.
2.	Pembuatan Matriks
Matriks dalam QFD (Quality Function Deployment) adalah alat yang digunakan untuk menghubungkan kebutuhan pelanggan dengan karakteristik produk atau layanan yang diinginkan. Matriks ini membantu dalam mengidentifikasi dan mengukur sejauh mana fitur produk atau layanan dapat memenuhi kebutuhan dan harapan pelanggan (Akao, 1990).
Tahapan dalam pembuatan matriks pada QFD meliputi:
a.	Identifikasi kebutuhan pelanggan
Sangat penting untuk memahami kebutuhan dan harapan pelanggan dengan baik. Hal ini dapat dilakukan melalui wawancara, survei, atau studi pasar.
b.	Penetapan karakteristik produk atau layanan
Berdasarkan kebutuhan pelanggan yang telah diidentifikasi, karakteristik produk atau layanan yang relevan harus ditentukan. Ini dapat melibatkan aspek kualitas, kinerja, desain, atau atribut lainnya.
c.	Menentukan tingkat kepentingan
Setiap kebutuhan pelanggan dan karakteristik produk atau layanan harus diberi nilai kepentingan yang relatif. Hal ini dapat dilakukan melalui skala peringkat atau metode lainnya untuk menentukan tingkat kepentingan relatif.
d.	Matriks penilaian
Matriks digunakan untuk menyusun hubungan antara kebutuhan pelanggan dan karakteristik produk atau layanan yang diinginkan. Matriks ini memperlihatkan sejauh mana setiap karakteristik produk atau layanan dapat memenuhi kebutuhan pelanggan. Nilai-nilaipun dapat diberikan berdasarkan tingkat kepentingan yang telah ditetapkan sebelumnya.
e.	Analisis hasil
Matriks yang dihasilkan kemudian dianalisis untuk menentukan prioritas pengembangan produk atau layanan. Hasil analisis ini akan digunakan sebagai panduan dalam tahap perancangan atau pengembangan lebih lanjut.

//

// Metode Agile Scrum
Metode Agile Scrum adalah salah satu kerangka kerja pengembangan perangkat lunak yang bertujuan untuk meningkatkan efisiensi, fleksibilitas, dan kualitas dalam pengembangan perangkat lunak. Metode ini didasarkan pada filosofi Agile yang menempatkan nilai dalam kolaborasi tim, adaptabilitas terhadap perubahan, dan iterative development.

Scrum, sebagai bagian dari metodologi Agile, didefinisikan sebagai framework yang terstruktur untuk menerapkan prinsip-prinsip Agile dalam tim pengembangan perangkat lunak. Penggunaan framework ini dapat membantu tim dalam menghadapi kompleksitas dan ketidakpastian dalam proyek pengembangan perangkat lunak.

Salah satu karakteristik utama dari metode Agile Scrum adalah pendekatan iteratif dan inkremental. Pengembangan perangkat lunak dipecah menjadi siklus pendek yang dikenal sebagai sprint. Setiap sprint memiliki durasi tetap, misalnya 2-4 minggu, dan pada akhir setiap sprint, perangkat lunak yang dapat digunakan harus dikembangkan dan kemudian diuji. Pekerjaan dalam sprint tersebut diatur dalam bentuk list kegiatan yang disebut backlog product.

Tim Scrum terdiri dari tiga peran utama: Product Owner, Scrum Master, dan Tim Pengembang. Product Owner merupakan pemilik visi proyek dan bertanggung jawab untuk menentukan kebutuhan dan prioritas fitur. Scrum Master bertanggung jawab untuk memastikan keteraturan proses Scrum dan membantu tim untuk mendapatkan lingkungan yang optimal. Tim Pengembang adalah anggota tim yang bertanggung jawab untuk mengerjakan tugas-tugas yang tercantum dalam backlog product.

Selain itu, ada beberapa artefak penting dalam Scrum, seperti backlog product, sprint backlog, dan increment. Backlog product adalah daftar semua fitur dan tugas yang perlu dilakukan dalam proyek. Sprint backlog merupakan subset dari backlog product yang disilih dan harus diselesaikan dalam satu sprint. Increment adalah hasil dari suatu sprint, yaitu perangkat lunak yang sesuai dengan standar untuk rilis dan dapat digunakan.

Penting juga untuk mencatat tiga acara (events) yang dilakukan dalam Scrum. Pertama adalah Sprint Planning, di mana tim Scrum bersama-sama mengatur rencana kerja untuk sprint yang akan datang. Kedua, Daily Scrum, pertemuan harian yang singkat untuk memastikan semua anggota tim synchron dalam pekerjaan mereka. Ketiga adalah Sprint Review, di mana tim Scrum menunjukkan hasil dari sprint kepada stakeholders dan mendapatkan umpan balik.

Metode Agile Scrum memiliki beberapa keuntungan, seperti fleksibilitas yang tinggi dalam menghadapi perubahan kebutuhan, peningkatan produktivitas tim, dan meningkatkan komunikasi dan kolaborasi di antara anggota tim dan stakeholders. Namun, metode ini juga memiliki keterbatasan, seperti penekanan terhadap komunikasi langsung yang dapat menjadi tantangan dalam tim yang terdistribusi secara geografis.

Secara keseluruhan, metode Agile Scrum menyediakan kerangka kerja yang terstruktur untuk pengembangan perangkat lunak yang adaptif dan berkualitas. Pendekatan iteratif dan inkremental serta kolaborasi tim yang kuat menjadi dasar utama dalam memanfaatkan seluruh potensi anggota tim dan memenuhi kebutuhan proyek secara efektif.
//

// Usability Testing dan Usability Analysis
Usability Testing dan Usability Analysis adalah dua aspek penting dalam perancangan dan pengembangan antarmuka pengguna yang bertujuan untuk meningkatkan kegunaan (usability) suatu produk atau sistem.

Usability Testing adalah sebuah metode untuk mengevaluasi sejauh mana suatu produk atau sistem dapat digunakan oleh pengguna dengan efektif, efisien, dan memuaskan dalam mencapai tujuan-tujuan spesifik. Pengujian kegunaan ini melibatkan pengguna manusia sebenarnya yang melakukan tugas-tugas tertentu dalam lingkungan yang mirip dengan penggunaan sehari-hari. Tujuan utama dari usability testing adalah mengidentifikasi masalah utama yang mungkin dihadapi oleh pengguna, seperti kesulitan navigasi, kebingungan dengan tata letak, kesalahan pemahaman ikon, atau perubahan dalam fungsionalitas yang tidak diharapkan. Prosedur umum dalam usability testing termasuk pengumpulan data melalui observasi langsung, pengujian berbasis tugas, pengumpulan feedback pengguna melalui kuisioner atau wawancara, analisis perilaku dan kinerja pengguna, serta penyusunan dan presentasi laporan hasil pengujian usability.

Alhasil, usability testing tidak hanya memberikan umpan balik yang bermanfaat bagi tim pengembang, tetapi juga membantu mereka memahami pengalaman pengguna yang sebenarnya saat menggunakan produk atau sistem. Informasi yang dihasilkan dapat digunakan untuk meningkatkan desain, menghilangkan kekurangan, menyempurnakan interaksi pengguna, dan akhirnya menghadirkan pengalaman yang lebih baik bagi pengguna.

Usability Analysis, di sisi lain, adalah proses sistematis untuk menganalisis kegunaan suatu produk atau sistem berdasarkan semua elemen yang terkait dengan interaksi manusia dan desain antarmuka pengguna. Tujuannya adalah untuk mengidentifikasi keunggulan dan kelemahan desain serta mengusulkan perbaikan dan penyesuaian yang diperlukan. Prosedur yang umum digunakan dalam analisis kegunaan termasuk penggunaan heuristik evaluasi (heuristic evaluation) dan inspeksi sistematis terhadap dokumen desain, expert review, analisis task-flow, dan analisis feedback dari pengguna (sebagai hasil dari pengujian kegunaan).

Dalam usability analysis, ahli dalam bidang antarmuka pengguna akan mempertimbangkan aspek-aspek seperti konsistensi antara elemen-elemen desain, kejelasan pesan yang disampaikan, keterbacaan teks, keramahan antarmuka, keintuitifan navigasi, serta keselarasan antara tugas pengguna dengan implementasi antarmuka. Hal ini membantu meningkatkan penggunaan sistem atau produk dengan mengoptimalkan antarmuka dan pengalaman pengguna.

Secara keseluruhan, usability testing dan usability analysis membantu para pemangku kepentingan untuk mengidentifikasi masalah yang melibatkan kegunaan produk atau sistem, menginformasikan perbaikan dan penyempurnaan yang diperlukan pada desain antarmuka, dan menghasilkan pengalaman pengguna yang lebih baik. Dengan menggunakan pendekatan ilmiah mereka, perancang dapat meningkatkan kegunaan suatu produk dan memastikan keselarasan dengan kebutuhan dan preferensi pengguna.
//

// Tata cara penyusunan latar belakang penelitian
Berikut adalah susunan latar belakang karya tulis ilmiah yang baik dan benar, dengan asumsi untuk ranah jurusan Teknik Industri tingkat sarjana (S1).

1. Paragraf Pertama: Pendahuluan dan Konteks Umum
  - Paragraf ini digunakan untuk memperkenalkan topik penelitian secara umum kepada pembaca.
  - Langkah pertama adalah mengawali dengan kalimat yang menarik perhatian dan memperkenalkan konteks penelitian.
  - Berikan latar belakang atau gambaran tentang bidang ilmu Teknik Industri secara umum dan fokus penelitianmu.
  - Sebutkan alasan mengapa topik penelitian ini penting dan relevan dalam industri atau masyarakat.

2. Paragraf Kedua: Status Penelitian
  - Paragraf ini dilakukan sebagai tinjauan literatur untuk memberikan gambaran tentang penelitian terkait yang sudah ada di bidang Teknik Industri.
  - Mulailah dengan mengidentifikasi dan mendeskripsikan penyelidikan terdahulu dari peneliti sebelumnya yang relevan dengan topik penelitianmu.
  - Jelaskan kelebihan, kekurangan, dan celah pengetahuan dari penelitian sebelumnya sehingga justifikasi penelitian baru dapat menjadi jelas.

3. Paragraf Ketiga: Identifikasi Kekurangan Penelitian Sebelumnya
  - Dalam paragraf ini, focuskan pada identifikasi kesenjangan atau kekurangan yang terdapat dalam penelitian sebelumnya.
  - Jelaskan secara rinci kekurangan-kekurangan itu dan hubungan dengan topik penelitian yang sedang dilakukan.
  - Tinjau kesenjangan dalam teori, metode, atau laporan penelitian sebelumnya yang dapat diisi dengan penelitian baru tersebut.

4. Paragraf Keempat: Tujuan dan Pengertian Penelitian
  - Sampaikan tujuan penelitian secara kelompok dengan jelas pada paragraf ini.
  - Identifikasikan masalah yang akan diselesaikan dengan penelitian ini dan tujuan-tujuan khusus yang ingin dicapai.
  - Jelaskan tentang arti penting dari tujuan yang diharapkan, yaitu cara bagaimana penelitianmu dapat memberikan kontribusi dan menyelesaikan masalah dalam bidang industri Teknik.

5. Paragraf Kelima: Penjelasan Metode Penelitian
  - Berikan penjelasan teori dan metodenya secara umum pada paragraf ini.
  - Sebutkan pendekatan atau strategi yang akan digunakan dalam penelitian, serta pemilihan instrumen dan teknik pengumpulan data yang relevan dengan topik penelitian.
  - Jelaskan alasan mengapa metode ini dipilih dan mengapa dianggap cocok untuk menjawab pertanyaan-pertanyaan penelitianmu.

6. Paragraf Keenam: Implikasi dan Manfaat Penelitian
  - Perjelas implikasi potensial dari hasil penelitianmu dan dampaknya pada bidang industri Teknik Industri.
  - Terangkan bagaimana penelitianmu dapat menyediakan wawasan baru, solusi, atau metode yang dapat digunakan dalam dunia industri nyata.
  - Jelaskan manfaat potensial penelitian untuk perbaikan kinerja, efisiensi, atau keamanan industri secara keseluruhan.

7. Paragraf Terakhir: Kesimpulan
  - Ringkaslah kembali tujuan penelitian dan pentingnya topik penelitian dalam perspektif Industri Teknik.
  - Sertakan kalimat penutup yang mempertegas relevansi dan nilai penelitianmu.
  - Berikan sinopsis singkat tentang apa yang diharapkan dari penelitianmu, apakah dapat mengisi celah pengetahuan, mengembangkan teori, atau memberikan panduan praktis.

Setiap paragraf dalam latar belakang penelitian hendaknya memiliki alur yang jelas dan konsisten. Mulailah dengan pendahuluan untuk memperkenalkan tema secara umum, dilanjutkan dengan tinjauan literatur yang relevan, identifikasi kekurangan penelitian sebelumnya, tujuan penelitian, penjelasan metode penelitian, implikasi dan manfaat penelitian,dan berakhir dengan kesimpulan. Penting untuk memperhatikan alur yang baik dan memastikan bahwa setiap poin substantif mendukung penelitianmu secara kohesif.
//

// Pada paragraf berapa penjelasan mengenai objek/tempat penelitian dituliskan?
Penjelasan mengenai objek atau tempat penelitian biasanya termasuk dalam paragraf kedua atau paragraf ketiga dalam susunan latar belakang penelitian. Tujuannya adalah memberikan gambaran spesifik tentang objek penelitian, seperti lokasi, jenis industri, atau fasilitas yang terkait.

Dalam paragraf ini, kita dapat menjelaskan konteks tempat penelitian dengan deskripsi yang mengenai fitur khusus atau karakteristik penting dari objek penelitian. Misalnya, jika penelitian berkaitan dengan pengoptimalan alur produksi dalam pabrik pengolahan makanan, kita dapat menjelaskan situasi pabrik tersebut, seperti ukuran pabrik, jenis produk yang dihasilkan, kapasitas produksi, skala operasi, dan aspek-aspek yang relevan dengan penelitian.

Penjelasan objek penelitian ini dapat memberikan pembaca pemahaman yang lebih baik tentang konteks penelitian, sehingga mereka dapat menghubungkan masalah penelitian lebih spesifik dengan aspek yang relevan terkait objek penelitian.

Penjelasan tentang objek atau tempat penelitian ini perlu disampaikan secara ringkas seiring dengan alur latar belakang yang dijelaskan sebelumnya. Pastikan untuk menjaga relevansi dengan topik penelitian utama dan tujuan penelitian, sehingga penjelasan objek atau tempat penelitian juga mendukung justifikasi penelitian yang sedang dilakukan.
//

// Tata cara penyususnan Rumusan Masalah, Tujuan Penelitian, dan Manfaat Penelitian
Membuat rumusan masalah, tujuan penelitian, dan manfaat penelitian yang baik dan berkorelasi adalah langkah penting dalam membangun karya ilmiah yang kuat dan relevan. Berikut adalah cara membuat ketiga poin tersebut dengan baik dan benar, dan cara membuat mereka berkorelasi:

1. Rumusan Masalah:
   - Rumusan masalah haruslah jelas dan spesifik.
   - Identifikasi masalah yang akan diselesaikan dalam penelitian.
   - Mulailah dengan mengidentifikasi batasan penelitian, ruang lingkup penelitian, dan objek yang akan dikaji.
   - Rumusan masalah harus relevan dengan bidang penelitian dan berhubungan langsung dengan tujuan penelitian.
   - Pastikan rumusan masalah tersusun dengan baik dan membuahkan pertanyaan penelitian yang jelas.

2. Tujuan Penelitian:
   - Tujuan penelitian haruslah terperinci, spesifik, dan terukur.
   - Jelaskan secara jelas apa yang ingin dicapai dengan penelitian ini.
   - Pastikan tujuan penelitian berkaitan erat dengan rumusan masalah yang telah diajukan.
   - Tujuan penelitian haruslah realistis dan efektif dalam menghasilkan jawaban atau solusi terhadap rumusan masalah.
   - Pemilihan tujuan penelitian harus mencakup semua aspek penting yang perlu diselidiki.

3. Manfaat Penelitian:
   - Identifikasi dan jelaskan manfaat potensial dari penelitian secara jelas.
   - Tinjau manfaat penelitian dari berbagai sudut pandang, seperti kemajuan ilmiah, praktik industri, kebijakan, masyarakat, atau lingkungan.
   - Ikatan manfaat penelitian dengan rumusan masalah dan tujuan penelitian yang telah ditetapkan.
   - Pilih manfaat penelitian yang relevan dan berdampak signifikan di bidang yang sedang kamu teliti.
   - Pastikan manfaat penelitian ini terukur dan dapat dibuktikan sesuai dengan metodologi yang digunakan.

Untuk membuat ketiga poin tersebut bercorak (berhubungan), perlu dipahami bahwa rumusan masalah mendefinisikan apa yang perlu diselesaikan, tujuan penelitian menjadi panduan untuk mencapai solusi, dan manfaat penelitian menjelaskan dampak dari hasil penelitian.
- Pastikan rumusan masalah menjadi landasan bagi tujuan penelitian yang ditetapkan, sehingga berfokus pada penyelesaian masalah yang diidentifikasi. Demikian pula, tujuan penelitian harus menunjukkan bagaimana akan mencapai solusi yang diharapkan.
- Manfaat penelitian harus mampu menghubungkan hasil penelitian dengan kontribusinya terhadap penyelidikan dengan melengkapi atau mengisi kesenjangan pengetahuan yang ada atau memberikan dampak positif terhadap praktik industri, kebijakan, atau perkembangan sosial.

Berpikir kritis dan menyusun ketiga poin tersebut dengan berhubungan akan membantu membangun argumen yang kuat dan memberikan ruang bagus bagi penelitian yang dianggap baik. Memahami pentingnya relevansi antara rumusan masalah, tujuan penelitian, dan manfaat penelitian membantu dalam mendapatkan momentum dan dampak penelitian yang signifikan. Selain itu, memastikan konsistensi tematis antara ketiga poin tersebut akan memperkuat keseluruhan konstruksi karya ilmiah dan mempertinggi validitas penelitianmu.
//

// Penulisan latar belakang yang bersifat deduktif
Dalam membuat sebuah latar belakang penelitian, terdapat beberapa hal yang perlu diperhatikan. Membuat latar belakang yang baik adalah langkah awal yang penting dalam sebuah penelitian, karena akan memberikan dasar yang kuat bagi pengembangan riset selanjutnya.

Berikut adalah beberapa hal yang harus diperhatikan dalam membuat latar belakang penelitian:

1. Konteks Penelitian: Penting untuk menjelaskan konteks penelitian secara lengkap. Ini melibatkan memberikan pemahaman tentang latar belakang umum dari topik penelitian yang dipilih, termasuk latar belakang ekuator, teori yang mendasari, dan penelitian terkait yang sudah ada. Hal ini membantu pembaca memahami mengapa penelitian ini relevan dan menjadi perlu untuk dilakukan.

2. Identifikasi Masalah: Perlu menyorot masalah atau kekurangan pengetahuan yang terkait dengan topik penelitian. Dalam menciptakan latar belakang yang efektif, penting untuk mengidentifikasi kesenjangan atau celah pengetahuan yang ada di bidang penelitian yang akan menjadi fokus penelitian ini. Hal ini membantu memberikan kejelasan mengapa penelitian ini penting dalam mengisi celah tersebut.

3. Relevansi: Jelaskan mengapa penelitian tersebut relevan dan penting. Latar belakang penelitian harus menekankan kebutuhan akan penelitian ini dan dampak potensial yang dapat dimilikinya, baik dalam mengembangkan teori, praktik, atau kebijakan. Hal ini membantu membimbing dan meyakinkan pembaca mengenai pentingnya penelitian ini dalam konteks yang lebih luas.

4. Pendekatan: Jelaskan pendekatan atau metode yang akan digunakan dalam penelitian ini. Ini mencakup penjelasan tentang metode pengumpulan data, analisis data, dan alabama yang akan diimplementasikan dalam rangka mencapai tujuan penelitian . Penjelasan ini membantu membimbing pembaca tentang bagaimana penelitian ini akan dilakukan.

Sekarang, mengapa latar belakang penelitian harus bersifat deduktif dengan fokus dari umum ke khusus? Pendekatan deduktif melibatkan mengembangkan hipotesis atau kerangka konseptual berdasarkan teori yang ada dan penelitian sebelumnya sebelum memulai penelitian baru. Alasan mengapa deduksi digunakan adalah sebagai berikut:

1. Membangun dasar: Deduksi membantu membangun dasar yang kuat untuk penelitian kita. Dengan memulai dari teori yang ada dan penelitian yang relevan, kita dapat melanjutkan penelitian dengan kerangka yang telah terbukti kebenarannya. Hal ini meminimalisasi kemungkinan teori baru yang salah atau tidak ada keterkaitan dengan penelitian sebelumnya.

2. Fokus yang efisien: Pendekatan deduktif dari umum ke khusus memungkinkan peneliti untuk fokus pada hal-hal yang relevan dan penting dalam penelitian tersebut. Dengan menetapkan kerangka teoritis yang baik, kita dapat lebih terfokus dalam menentukan masalah, mengidentifikasi variabel penelitian, dan mengembangkan hipotesis yang dapat diuji.

3. Menghindari bias: Pendekatan deduktif membantu menghindari bias atau asumsi yang tidak terkendali. Dengan mengacu pada penelitian atau teori yang ada, kita dapat memverifikasi asumsi yang ada dan menciptakan hipotesis yang lebih objektif dan terarah.

4. Memperoleh kepercayaan masyarakat ilmiah: Dengan menggunakan pendekatan deduktif yang kuat, penelitian kita akan mendapatkan kepercayaan dari masyarakat ilmiah seperti reviewer, kolega, dan pembaca akademik secara umum. Pendekatan ini memperkuat relevansi penelitian dan mendorong dialog dan perkembangan lebih lanjut dalam bidang tersebut.

Secara keseluruhan, menjadikan latar belakang penelitian bersifat deduktif dengan pendekatan dari umum ke khusus adalah penting karena membantu mengarahkan dan memperkuat penelitian tersebut sejak awal. Proses deduktif memungkinkan riset yang lebih efisien, obyektif, dan efektif dalam mengisi kekurangan pengetahuan yang ada di bidang yang dipilih.
//

= = = Data pengetahuan umum selesai = = =

Simpan dataset tersebut, buatkan analisis singkat mengenai dataset tersebut dan rangkailah kerangka konseptual berdasarkan dataset tersebut.
Dataset nantinya akan digunakan sebagai pembantu konseptual dalam merancang suatu karya ilmiah yang dimana akan dibahas nanti.
`,
  },
  {
    role: "assistant",
    content: `Dari dataset yang diberikan, terdapat beberapa informasi penting yang dapat digunakan sebagai dasar analisis dan rangkaian kerangka konseptual:

1. Data kondisi global:
   - Kondisi UMKM di Indonesia saat ini sedang dalam tren yang positif dengan kontribusi terhadap PDB Nasional sebesar 60,5%.
   - UMKM menghadapi kendala dalam bertransformasi menggunakan teknologi digital, termasuk kesulitan akses permodalan, ketersediaan bahan baku, dan kesulitan mengadopsi teknologi digital.
   - Tantangan yang dihadapi oleh UMKM di Indonesia meliputi terbatasnya akses pembiayaan, kesiapan digital, dan akses pemasaran.
   - UMKM memiliki peran penting dalam perekonomian Indonesia dengan kemampuan menyerap tenaga kerja dan menghimpun investasi.

2. Data pengetahuan umum:
   - Body of Knowledge Industrial Engineering (BOK IE) adalah kumpulan pengetahuan yang diperlukan oleh seorang insinyur industri.
   - BOK IE meliputi teknik dan metode analisis, perancangan sistem dan proses, manajemen dan rekayasa, elemen manusia dalam sistem, dan keterampilan komunikasi dan manajemen.
   - Memadukan BOK dengan pengetahuan di luar BOK dapat memberikan manfaat dalam menghadapi perubahan kompleks dan perkembangan terkini di dunia industri.
   - Metode Agile Scrum adalah kerangka kerja pengembangan perangkat lunak yang adaptif dan mengutamakan kolaborasi tim, adaptabilitas terhadap perubahan, dan pengembangan secara iteratif.
   - Usability Testing dan Usability Analysis adalah metode untuk meningkatkan kegunaan produk atau sistem dengan menguji pengalaman pengguna dan menganalisis desain antarmuka pengguna.

3. Tata cara penyusunan latar belakang penelitian:
   - Latar belakang penelitian harus dimulai dengan pendahuluan dan konteks umum, diikuti dengan tinjauan literatur, identifikasi kekurangan penelitian sebelumnya, penjelasan metode penelitian, implikasi dan manfaat penelitian.
   - Penjelasan mengenai objek atau tempat penelitian biasanya disampaikan dalam paragraf kedua atau ketiga.
   - Rumusan masalah harus jelas dan spesifik, dan terkait dengan tujuan penelitian.
   - Tujuan penelitian harus terperinci, spesifik, dan terukur, serta berkaitan erat dengan rumusan masalah.
   - Manfaat penelitian harus jelas dan relevan dengan hasil penelitian, serta berkaitan dengan rumusan masalah dan tujuan penelitian.

Berdasarkan dataset tersebut, kerangka konseptual yang dapat dibangun adalah sebagai berikut:

1. Konteks UMKM di Indonesia:
   - Analisis tren positif UMKM dan kontribusi mereka terhadap perekonomian Indonesia.
   - Identifikasi permasalahan yang dihadapi oleh UMKM di era digital, termasuk keterbatasan akses permodalan, bahan baku, dan adopsi teknologi digital.
   - Tinjauan terhadap masalah terkait terbatasnya akses pembiayaan, kesiapan digital, dan akses pemasaran yang dihadapi oleh UMKM di Indonesia.
   - Analisis peran UMKM dalam perekonomian Indonesia sebagai sumber pertumbuhan ekonomi dan pencipta lapangan kerja.

2. Penerapan ilmu pengetahuan dalam pengembangan industri:
   - Penjelasan mengenai Body of Knowledge Industrial Engineering (BOK IE) dan komponen-komponen utamanya.
   - Keuntungan dan pentingnya memadukan pengetahuan BOK dengan ilmu bidang lain untuk menghadapi kompleksitas dan perubahan di dunia industri.
   - Penerapan metode Agile Scrum dalam pengembangan perangkat lunak dan manfaatnya dalam meningkatkan efisiensi, fleksibilitas, dan kualitas.
   - Pentingnya usability testing dan usability analysis dalam meningkatkan kegunaan produk atau sistem.

3. Penyusunan latar belakang penelitian yang baik:
   - Pendahuluan dan konteks umum sebagai pengenalan topik penelitian.
   - Tinjauan literatur terkait dengan penelitian sebelumnya dan identifikasi kekurangan penelitian yang ada.
   - Penjelasan objek atau tempat penelitian untuk memberikan gambaran spesifik.
   - Rumusan masalah yang jelas, terkait dengan tujuan penelitian, dan relevan dengan konteks penelitian.
   - Tujuan penelitan yang terperinci, terukur, dan mendukung solusi terhadap rumusan masalah.
   - Manfaat penelitian yang jelas, relevan, dan berkaitan dengan rumusan masalah dan tujuan penelitian.

Kerangka konseptual ini dapat digunakan sebagai panduan dalam merancang karya ilmiah yang menggabungkan aspek-aspek terkait kondisi UMKM, penerapan ilmu pengetahuan, dan penyusunan latar belakang penelitian.`,
  },
  {
    role: "user",
    content: `Kedepannya saya akan memberikan sebuah data lengkap (latar belakang peneltiian) yang akan digunakan dalam menyusun sebuah karya ilmiah (proposal skripsi).
Data yang akan diberikan berkemungkinan rancu atau tidak lengkap sepenuhnya, dan mungkin terdapat bahasa atau pembahasan yang kurang merepresentasikan permasalahan.

[instruksi]
Kamu nantinya wajib membantu saya dalam melakukan penyusunan proposal secara bertahap yang meliputi: latar belakang penelitian > tujuan dan manfaat peneltiian > metode penelitian > metodologi penelitian.
Tunggu hingga saya memberikan data dan perintah untuk melakukan penyusunan karya ilmiah. [Dataset yang ada nantinya akan digunakan sebagai panduan dalam penyususnan karya ilmiah]`,
  },
  {
    role: "assistant",
    content: `Baik, saya siap membantu Anda dalam menyusun proposal skripsi. Silakan berikan data yang Anda miliki untuk latar belakang penelitian, dan kita akan melanjutkan ke tahap-tahap berikutnya seperti tujuan dan manfaat penelitian, metode penelitian, dan metodologi penelitian. Tunggu instruksi selanjutnya setelah Anda memberikan data latar belakang penelitian.`,
  },
  {
    role: "user",
    content: `### Data Latar Belakang (partial) ###

# Objek Penelitian:
Halal Mart BC Cilacap 3 (Halal Mart Business Center Cilacap 3)

# Lokasi:
Jl. Nusa Indah, Gligir, Kesugihan Kidul, Kec. Kesugihan, Kabupaten Cilacap, Jawa Tengah

# Deskriptif penjelasan Halal Mart BC Cilacap 3
Halal Mart BC Cilacap 3 merupakan sebuah toko yang dimana menjual produk-produk herbal berkualitas dengan berbagai kategori seperti obat-obatan herbal, ekstrak/minuman herbal, dan kosmetik serta kebutuhan sehari-hari.
Halal Mart BC Cilacap 3 juga bagian dari ekosistem bisnis HNI (Halal Network International).
HNI merupakan brand dari perusahaan PT.HPAI (Herba Pnenawar Alwahida Indonesia) yang sudah berdiri dari tahun 2012.
Sistem atau model bisnis yang digunakan pada HNI adalah sistem model bisnis reseller, sistem pemasaran dilakukan secara tertutup, yaitu orang tidak boleh sembarangan menjual produk jika tidak terdaftar sebagai agen/reseller HNI, hal ini sudah diatur melalui policy pada perusahaan PT.HPAI.
Terdapat juga beberapa komponen penyusun pemasaran yang ada yaitu:
- Business Center (BC) *sebagai poros utama dalam melakukan pemasaran/pendistirbusian produk setelah produsen/pabrik/gudang, BC biasanya bertempat untuk kancah kabupaten atau kota
- Agency Center (AC) *sebagai distibutor tahap kedua setelah BC dalam melakukan pemasaran produk, AC biasanya bertempat untuk kancah kota atau kecamatan
- Distributor Center (DC), *sebagai distibutor tahap ketiga setelah AC dalam melakukan pemasaran produk, DC biasanya bertempat untuk kancah kecamatan atau desa-desa
- Stokis Center (SC), *sebagai distibutor tahap keempat setelah DC dalam melakukan pemasaran produk, SC biasaya bertempat untuk kancah desa-desa
- Member atau Konsumen biasa, *sebagai distibutor/konsumen akhir tahap kelima setelah SC dalam melakukan pemasaran produk, level ini merupakan dasar dari adanya level marketing yang berada diatasnya. Member/konsumen dikategorikan sama dikarenakan dapat berupa konsumen akhir yang menggunakan/mengkonsumsi produk yang dipasarkan, memberikan testimoni, saran pembelian pada calon-calon potensial konsumen lainnya.
Sistem bisnis model ini mengharuskan para agen untuk memasarkan produk dengan cara menunjukan produk fisik dan khasiat yang dihasilkan, dan merekrut agen/member untuk bergabung dan menambah luas pemanfaatan produk herbal yang dipasarkan.
Semua orang yang tergabung dalam bisnis MLM syariah ini merupakan satu kelompok distributor yang nantinya bebas mengajak orang lain. Jadi, penjual/agen/member tidak hanya mendapatkan keuntungan dari produk yang dijual, melainkan juga didapat dari hasil penjualan agen/member lain yang berhasil direkrut menjadi agen atau member.

# Deskriptif proses bisnis Halal Mart BC Cilacap 3
Halal Mart BC Cilacap 3 memiliki peran penting dalam melakukan pemasaran atau pendistribusian produk terhadap agen yang berada di level dibawahnya maupun konsumen biasa.
Agen atau admin Halal Mart BC Cilacap 3 menangani dari berbagai permintaan informasi atau pemesanan dari agen/konsumen. Terdapat tiga karyawan pada Halal Mart BC Cilacap 3, yaitu setu karyawan sebagai owner, satu karyawan sebagai admin, dan terakhir sebagai kurir antar.
Untuk umum, akses detail informasi atau konsultasi mengenai produk dapat menghubungi admin melalui aplikasi whatsapp. Untuk prosedur pemesanan produk dapat dilakukan dengan membeli langsung di toko atau bisa melakukan pemesanan via chat aplikasi whatsapp.

### Akhir Data Latar Belakang ###

Untuk prompt selanjutnya akan berupa data permasalahan.
`,
  },
  {
    role: "assistant",
    content: `Terima kasih atas data latar belakang yang telah diberikan. Data tersebut memberikan gambaran mengenai objek penelitian, yaitu Halal Mart BC Cilacap 3, termasuk deskripsi toko dan proses bisnis yang dilakukan.

Berikutnya, saya akan membantu Anda dalam menyusun tujuan dan manfaat penelitian berdasarkan data latar belakang yang telah diberikan. Silakan berikan instruksi atau panduan mengenai tujuan dan manfaat penelitian apa yang ingin Anda capai dengan penelitian ini.`,
  },
  {
    role: "user",
    content: `### Data Latar Belakang: Bagian Permasalahan ###

# Deskriptif Penjelasan
Seperti yang sudah diketahui bisnis model yang ada pada HNI memiliki beberapa level distribusi yang berbeda, berikut adalah penjelasannya:
- BC hanya bisa mendapatkan produk/belanja ke gudang
- AC hanya bisa belanja ke BC
- DC belanja ke AC atau BC
- SC belanja ke DC DC, AC, atau BC
- Member/Konsumen belanja ke SC, DC, AC, atau BC

# Penjelasan Permasalahan
Banyaknya permintaan dalam melakukan pelayanan informasi terhadap admin Halal Mart BC Cilacap 3, yang didukung dengan jaringan pemasaran/distribusi yang luas membuat admin kewalahan dalam melakukan pelayanan pada agen/konsumen.
Hal ini juga didukung dengan satu admin yang memiliki peran untuk melakukan pelayanan perpesanan (chat) dalam hal informasi/konsultasi produk dan juga menangani pemesanan via aplikasi whatsapp.
Pada kasus tersebut membuat para agen/konsumen mendapati pelayanan yang kurang responsif atau kurang cepat tanggap, hal ini tentunya akan mengakibatkan keseluruhan proses bisnis dapat terganggu dan berdampak pada penurunan penjualan serta kepercayaan agen/konsumen terhadap pelayanan yang diberikan.
Di sisi lain owner Halal Mart BC Cilacap 3 tidak berkeinginan untuk menambah jumlah admin dikarenakan alasan biaya dan tempat.

## Penjelasan Solusi
Berdasarkan pada permasalahan yang sudah dijabarkan sebelumnya, solusi yang akan diterapkan adalah melakukan implementasi chatbot.
Chatbot yang dibuat adalah berjenis rule based chatbot (chatbot berbasis kata kunci perintah) dan akan di aplikasikan pada akun whatsapp utama Halal Mart BC Cilacap 3.
Chatbot tersebut nantinya digunakan sebagai media pelayanan pelanggan, yang meliputi permintaan informasi seputar produk dan pemesanan produk.

# Alur implementasi chatbot
Dalam melakukan implementasi chatbot diperlukan sebuah rancangan fitur-fitur atau elemen yang ada pada chatbot itu sendiri.
Data rancangan yang diperlukan adalah kualifikasi fitur fungsionalitas yang sesungguhnya dibutuhkan user (agen/konsumen), dalam mengumpulkan data rancangan maka dibuatlah list fitur fungsionalitas potensial (rancangan fitur-fitur, yang belum final).
Pengumpulan data dilakukan dengan cara menyebarkan kuesioner yang berisikan parameter pertanyaan seputar fitur fungsionalitas chatbot, yang kemudian data hasil kuesioner tersebut akan di analisis menggunakan metode Quality Function Deployment (QFD) dan menghasilkan fitur fungsionalitas akhir yang akan dimasukan pada data rancangan fitur-fitur chatbot (fitur yang sudah fix).
Setelah mendapatkan fitur funsgionalitas akhir, maka dilakukan perancangan menggunakan metode Agile Acrum yang meliputi perancangan dan pengembangan chatbot dari awal hingga akhir.
Setelah berhasil mengembangakan chatbot berdasarkan target fitur fungsionalitas yang direncanakan, maka dilakukan perilisan chatbot agar pengakses (agen/konsumen) dapat menggunakan chatbot tersebut.
Setelah beberapa waktu, maka dilakukan analisis evaluasi menggunakan metode Usability Testing, analisis evaluasi ini berguna untuk mengetahui seberapa jauh dampak penerapan chatbot dalam melakukan pelayanan pelanggan. 
Hasil data evaluasi melalui uesbility testing nantinya akan digunakan sebagai data akhir/kesimpulan dari penelitian.

### Akhir Data Latar Belakang: Bagian Permasalahan ###

Data tersebut adalah masukan data mengenai latar belakang permasalahan penelitian.
`,
  },
  {
    role: "assistant",
    content: `Terima kasih atas data latar belakang yang telah diberikan. Berdasarkan data tersebut, terdapat penjelasan mengenai permasalahan yang muncul dalam pelayanan informasi terhadap agen dan konsumen oleh admin Halal Mart BC Cilacap 3. Permasalahan ini berkaitan dengan responsifitas pelayanan yang terbatas dikarenakan jumlah permintaan yang tinggi dan keterbatasan jumlah admin yang tersedia.

Solusi yang diusulkan adalah dengan mengimplementasikan chatbot sebagai media pelayanan pelanggan. Chatbot ini akan membantu dalam memberikan informasi seputar produk dan menerima pemesanan produk. Proses implementasi chatbot meliputi:
1. Mengumpulkan data rancangan fitur-fitur chatbot melalui kuesioner dan analisis menggunakan metode Quality Function Deployment (QFD).
2. Membuat perancangan dan mengembangkan chatbot menggunakan metode Agile Scrum.
3. Melakukan perilisan chatbot agar dapat digunakan oleh agen dan konsumen.
4. Melakukan analisis evaluasi menggunakan metode Usability Testing untuk menilai dampak penerapan chatbot dalam pelayanan pelanggan.
5. Menggunakan hasil evaluasi sebagai data akhir/kesimpulan dari penelitian.

Dengan implementasi chatbot, diharapkan dapat meningkatkan responsivitas pelayanan dan mengatasi kendala terbatasnya jumlah admin. Selain itu, chatbot juga dapat memberikan pengalaman pelayanan yang lebih cepat dan efisien bagi agen dan konsumen.

Selanjutnya, kita dapat melanjutkan ke tahap pembahasan mengenai tujuan dan manfaat penelitian. Silakan berikan instruksi atau panduan mengenai tujuan dan manfaat penelitian yang diinginkan.`,
  },
  {
    role: "user",
    content: `Kamu sebelumnya telah mendapatkan data terkait dengan penelitian saya, sebelum ke topik utama berikut adalah intruksi khusus:
[identifikasi dan analisis keseluruhan data latar belakang, hubungkan menjadi sebuah plot ilmiah agar mudah dipahami]`,
  },
  {
    role: "assistant",
    content: `Dengan data latar belakang yang diberikan, berikut adalah plot ilmiah yang dapat dihasilkan:

Plot Ilmiah: Implementasi Chatbot sebagai Solusi Pelayanan Pelanggan dalam Bisnis MLM HNI

1. Pendahuluan
   - Pendahuluan menjelaskan mengenai latar belakang penelitian dan kebutuhan akan solusi dalam pelayanan pelanggan.
   - Dalam konteks ini, Halal Mart BC Cilacap 3 sebagai objek penelitian yang menghadapi tantangan responsifitas pelayanan akibat tingginya permintaan informasi dari agen dan konsumen.

2. Pembahasan Permasalahan
   - Permasalahan yang dihadapi adalah keterbatasan jumlah admin dalam memberikan pelayanan yang responsif.
   - Tingginya permintaan informasi dan pemesanan produk mengakibatkan lambatnya tanggapan dan penurunan kualitas pelayanan.

3. Solusi: Implementasi Chatbot
   - Implementasi chatbot sebagai solusi dalam meningkatkan pelayanan pelanggan.
   - Peran chatbot dalam memberikan informasi seputar produk dan menerima pemesanan secara efisien dan cepat.

4. Rincian Implementasi Chatbot
   - Pengumpulan data rancangan fitur-fitur chatbot melalui kuesioner dan analisis menggunakan metode Quality Function Deployment (QFD).
   - Perancangan dan pengembangan chatbot menggunakan metode Agile Scrum.
   - Perilisan chatbot agar dapat digunakan oleh agen dan konsumen.
   - Analisis evaluasi menggunakan metode Usability Testing untuk menilai dampak penerapan chatbot.

5. Tujuan Penelitian
   - Tujuan penelitian adalah untuk menguji efektivitas dan keberhasilan implementasi chatbot dalam meningkatkan responsifitas pelayanan.
   - Tujuan lainnya adalah untuk meningkatkan kepuasan agen dan konsumen serta meningkatkan efisiensi proses pelayanan.

6. Manfaat Penelitian
   - Manfaat penelitian meliputi peningkatan responsifitas pelayanan pelanggan, peningkatan kualitas pelayanan, dan peningkatan kepuasan agen dan konsumen.
   - Selain itu, penelitian ini juga akan memberikan kontribusi pada pengembangan teknologi chatbot dalam lingkungan bisnis MLM.

Dengan plot ilmiah di atas, penelitian diarahkan untuk mengimplementasikan chatbot sebagai solusi dalam meningkatkan responsifitas pelayanan pelanggan dalam bisnis MLM HNI. Penelitian ini bertujuan untuk menguji efektivitas chatbot dalam meningkatkan pelayanan pelanggan serta memberikan manfaat yang signifikan bagi agen dan konsumen. Hasil penelitian diharapkan dapat memberikan dampak positif pada industri MLM dan pengembangan teknologi chatbot.`,
  },
  //   {
  //     role: "user",
  //     content: `Kamu sebelumnya telah mendpaatkan dataset, mendapatkan data latar belakang penelitian serta solusi yang ditawarkan, serta analisis singkat mengenai konteks penelitian.
  // Berikut adalah intruksi selanjutnya yang harus kamu lakukan:

  // [intruksi]
  // "Buatkan latar belakang penelitian berdasarkan data-data yang sudah diberikan."
  // [akhir intruksi]

  // gunakan instruksi: [Tata cara penulisan latar belakang yang baik sesuai dataset masukan, dan gaya penulisan latar belakang harus bersifat deduktif (dari umum ke khusus)]
  // Maksud pembahasan deduktif adalah dengan membuat plot pembahasan umum dalam scope global atau lokal terlebih dahulu yang kemudian baru dibahas mengenai latar belakang penelitian sesungguhnya.`,
  //   },
  {
    role: "user",
    content: `Kembangkan latar belakang proposal peneltian saya dibawah ini:

### Latar Belakang (belum sempurna) ###
Di tengah tren kesehatan global yang berkembang, permintaan terhadap obat-obatan herbal mengalami peningkatan yang signifikan. Menurut laporan dari Grand View Research (2021) pasar global produk herbal diperkirakan akan tumbuh dengan cepat, didorong oleh kesadaran konsumen yang meningkat mengenai manfaat kesehatan dan keberlanjutan dari penggunaan produk alami. Hal ini didukung juga dari Global Industry Analysts Inc (2020) pasar obat-obatan herbal global mencapai nilai sebesar 123,7 miliar dolar AS, dan diperkirakan akan terus tumbuh dengan laju pertumbuhan tahunan sebesar 5,88% antara tahun 2021 hingga 2027. Faktor-faktor yang mendorong pertumbuhan pasar ini termasuk peningkatan kesadaran konsumen terhadap gaya hidup sehat, peningkatan minat pada pengobatan alami, dan meningkatnya permintaan akan produk-produk herbal yang aman dan bebas efek samping. Tren ini mencerminkan perubahan dalam perilaku konsumen, yang semakin memilih produk yang lebih alami dan etis dalam praktik keseharian mereka.
Halal Mart BC Cilacap 3 merupakan toko ritel yang menjual berbagai produk herbal berkualitas HNI (Halal Network International) dengan berbagai kategori seperti herbs products, health food & beverages, dan cosmetics & home care. Halal Mart BC Cilacap 3 berada di bawah naungan langsung dari PT. HPAI (Herba Penawar Alwahida Indonesia) yang sudah berdiri dari tahun 2012. Toko ini berperan penting dalam distribusi produk-produk HNI, dan melayani berbagai tingkatan distribusi dari Business Center hingga konsumen akhir.
Pada saat dilakukan wawancara, admin Halal Mart BC Cilacap 3 mengaku pernah menjual ribuan produk setiap minggunya pada saat wabah covid-19 silam. Hal ini dibuktikan melalui survei yang dilakukan oleh McKinsey & Company (2020) yaitu menunjukkan bahwa sekitar 45% responden di Indonesia mengklaim meningkatkan konsumsi obat-obatan herbal selama pandemi, sebagai upaya untuk memperkuat sistem kekebalan tubuh.
Meskipun permintaan produk herbal meningkat, Halal Mart menghadapi tantangan dalam mengelola permintaan informasi dan pemesanan produk, terutama karena beban kerja yang tinggi pada satu admin yang mengelola pelayanan pelanggan dan pemesanan produk.
Sebagai respon terhadap tantangan ini, peneliti berencana mengimplementasikan solusi berbasis teknologi, yaitu rule based chatbot pada akun ke-dua WhatsApp admin Halal Mart BC Cilacap 3. Tujuan dari implementasi ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk. Rencana ini meliputi pengumpulan data fitur, analisis dengan metode Quality Function Deployment (QFD), pengembangan dengan metode Agile Scrum, dan evaluasi dampak penerapan chatbot menggunakan Usability Testing. Tujuan dari implementasi chatbot ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk kepada agen maupun konsumen. Penelitian ini diharapkan dapat memberikan wawasan tentang bagaimana teknologi dapat digunakan untuk meningkatkan efisiensi pelayanan pelanggan di sektor ritel, terutama dalam permasalahan permintaan yang meningkat untuk produk herbal.
###

Instruksi:
Gunakan tata bahasa sesuai dengan kaidah penulisan karya ilmiah pada umumnya.
`,
  },
];

const backs = `= = = Data latar belakang penelitian = = =
//
Dalam industri UMKM, responsivitas dan kecepatan pelayanan merupakan faktor yang penting dalam mempertahankan pelanggan dan memenangkan persaingan pasar. Persaingan yang semakin ketat juga menjadi faktor penting dalam kondisi global UMKM terhadap pelayanan pelanggan. Dengan persaingan yang semakin sengit, UMKM dituntut untuk memberikan pelayanan pelanggan yang berkualitas tinggi guna mempertahankan pelanggan dan memenangkan persaingan (Williamson, 2010). Halal Mart BC (Business Center) Cilacap 3 berlokasi di Jl. Nusa Indah, Gligir, Kesugihan Kidul, Kec. Kesugihan, Kabupaten Cilacap, Jawa Tengah. Halal Mart BC Cilacap 3 merupakan agen distributor resmi produk HPAI yang berada dibawah naungan PT. HPAI, Herba Penawar Al Wahida Indonesia (HPAI) adalah salah satu bisnis MLM yang berbasis syariah di Indonesia yang berdiri pada tanggal 19 Maret 2012 (Panduan Sukses HPAI, 2020). MLM (Multi Level Marketing) adalah strategi bisnis yang pemasarannya dilakukan berjenjang atau bertingkat (Agus, 2016). HPAI menjadi salah satu perusahaan bisnis halal network di Indonesia yang tergabung dalam industri kesehatan yang menawarkan produk herbal halal berkualitas (Panduan Sukses HPAI, 2020).
Dalam industri pemasaran, seorang agen memiliki peran yang penting dalam memasarkan produk-produk kepada konsumen. Sebagaimana perusahaan MLM pada umumnya, HPAI juga mempunyai sistem atau aturan penjualan dan pemasaran yang harus dipatuhi oleh para agen. Penyedia produk HPAI yang biasa dikenal dengan stokis tugasnya adalah memaksimalkan pemasaran dan penjualan produk. Stokis ini merupakan pelaku usaha dalam bisnis yang bertugas memberikan informasi kepada konsumen, menerima dan memberikan testimoni produk, memasarkan, sampai pada penjualan (PBLS, 2009). Berikut adalah gambar diagram alur distribusi produk HPAI mulai dari gudang, Business Center (BC), Agency Center (AC), Distribution Center (DC), Stokis (SC), dan Member atau konsumen.
Halal Mart BC Cilacap 3 menerapkan sitem pre-order (PO) untuk setiap pemesanan produk, baik itu kepada sesama agen (dibawah level agen Business Center) atau pelanggan. Hal ini diterapkan dikarenakan banyaknya permintaan produk dan meminimalisir konflik dalam penjualan produk, tercatat pada saat wabah covid-19 tahun 2021 silam, Halal Mart BC Cilacap 3 mampu menjual ribuan produk dalam kurun waktu sebulan. Permasalahan yang dihadapi pada Halal Mart BC Cilacap 3 sekarang ini adalah kurangnya responsivitas dan lambatnya respon terhadap permintaan informasi produk dan pemesanan produk. Hal ini disebabkan oleh banyaknya pesan yang masuk melalui aplikasi perpesanan whatsapp dan keterbatasan tenaga kerja, permasalahan ini disusul dengan Halal Mart BC Cilacap 3 yang melayani pemesanan atau pembelanjaan dari empat channel yaitu Agency Center, Distribution Center, Stokis, dan Member atau konsumen yang dapat dilihat pada Gambar 1.1.
Namun, sistem permintaan informasi dan pemesanan yang menggunakan chat pesan WhatsApp ditambah dengan keterbatasan tenaga kerja menimbulkan permasalahan dalam responsivitas dan kecepatan pelayanan. Banyaknya chat pesan yang harus ditangani oleh admin mengakibatkan keterlambatan dalam memberikan respon balasan kepada calon pembeli atau agen. Hal ini tentunya dapat menghambat proses penjualan dan mengurangi kepuasan konsumen. Permasalahan tersebut berkaitan dengan penelitian yang dilakukan oleh Cho (2015) menemukan bahwa responsivitas pelanggan yang baik dapat meningkatkan kepuasan pelanggan, loyalitas, dan kepercayaan pelanggan terhadap merek atau organisasi tertentu. Penelitian tersebut menekankan pentingnya komunikasi yang terbuka, sistematis, dan fleksibel sebagai faktor penentu responsivitas yang sukses.
Penting untuk mencari solusi yang mampu meningkatkan responsivitas dan kecepatan pelayanan. Salah satu solusi yang dapat diimplementasikan adalah penggunaan chatbot sebagai asisten dalam pelayanan. Chatbot adalah program komputer yang dirancang untuk meniru interaksi manusia melalui pesan teks atau suara dalam komunikasi satu lawan satu dengan pengguna (Bradlow, 2017). Chatbot dapat membantu dalam menangani hal-hal yang bersifat repetitif, seperti memberikan informasi produk atau menerima pemesanan produk dari agen atau konsumen. Mengingat pentingnya responsivitas dan kecepatan dalam pelayanan konsumen, penelitian ini akan mengidentifikasi dan menganalisis permasalahan kurangnya responsivitas dan lambatnya respon dalam pelayanan Halal Mart BC Cilacap 3. Selain itu, penelitian ini juga akan mengusulkan solusi dalam bentuk pengimplementasian chatbot sebagai asisten dalam pelayanan untuk meningkatkan responsivitas dan kecepatan pelayanan.
Dengan mengimplementasikan chatbot, diharapkan dapat mengurangi beban kerja bagi admin dan mempercepat respon terhadap permintaan informasi produk dan pemesanan produk. Hal ini diharapkan dapat meningkatkan kepuasan konsumen serta memperkuat hubungan bisnis antara distributor, agen, dan konsumen. Penelitian lain yang dilakukan oleh Fornell (1996), menunjukkan bahwa kepuasan pelanggan memiliki dampak yang signifikan terhadap kesetiaan pelanggan, niat membeli ulang, dan rekomendasi produk atau layanan kepada orang lain. Dalam penelitian tersebut, menyoroti pentingnya mencapai kepuasan pelanggan yang tinggi agar dapat membangun hubungan jangka panjang yang menguntungkan dengan pelanggan.
Kedepannya penelitian ini dapat memberikan manfaat baik dalam pengembangan ilmu di bidang Teknik Industri khususnya pemasaran, maupun praktik dalam meningkatkan kualitas pelayanan pada industri UMKM. Hasil penelitian ini diharapkan dapat memberikan rekomendasi bagi Halal Mart BC Cilacap 3 dalam meningkatkan responsivitas dan kecepatan pelayanan demi kepuasan konsumen.
//
= = = Data latar belakang penelitian selesai = = =`;

export default BackgroundChat;
