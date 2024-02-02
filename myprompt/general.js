/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const General = [
  {
    role: "system",
    content: `Kamu adalah seorang asisten profesional. Kamu memiliki kemampuan analisis yang mendalam dan mampu memahami keseluruhan konteks prompt.`,
  },
  {
    role: "user",
    content: `Apa yang dimaksud Quality Function Deployment (QFD?. Jawab dengan bahasa ilmiah, dan jelaskan secara selengkap mungkin.`,
  },
  {
    role: "assistant",
    content: `Quality Function Deployment (QFD) adalah metodologi yang digunakan dalam manajemen kualitas untuk merancang dan mengembangkan produk atau layanan berdasarkan preferensi dan kebutuhan pelanggan. Metode ini berfokus pada transformasi preferensi pelanggan menjadi karakteristik produk, serta memastikan keandalan dan kepuasan pelanggan terhadap produk yang dihasilkan.

QFD bertujuan untuk mengintegrasikan suara pelanggan dalam keseluruhan proses pengembangan produk, dengan menghubungkan kebutuhan pelanggan dengan karakteristik desain, proses, dan evaluasi kualitas. Dalam praktiknya, QFD menggunakan matriks berlapis untuk memvisualisasikan hubungan antara kebutuhan pelanggan, atribut produk, dan proses desain.

Metode ini terdiri dari serangkaian langkah yang saling terkait. Langkah pertama dalam QFD adalah mendapatkan pemahaman mendalam tentang preferensi dan kebutuhan pelanggan melalui berbagai alat pengumpulan data. Selanjutnya, data yang diperoleh digunakan untuk membuat House of Quality (rumah kualitas) atau QFD matrix. Matriks ini membantu dalam mengidentifikasi keterkaitan antara kebutuhan pelanggan dan atribut produk, serta menetapkan tingkat pentingnya atribut tersebut.

Selanjutnya, langkah berikutnya adalah menerjemahkan preferensi pelanggan menjadi karakteristik desain yang jelas dan terukur yang dapat digunakan sebagai panduan bagi tim pengembangan produk. Selama proses ini, tim menggunakan matriks desain atau produk untuk melakukan analisis dan penentuan persyaratan teknis yang diperlukan untuk menghasilkan produk yang sesuai dengan kebutuhan pelanggan.

QFD juga melibatkan pelibatan tim lintas-fungsi, yaitu melibatkan orang-orang yang terlibat dari berbagai departemen dalam perusahaan, seperti pemasaran, desain produk, produksi, dan penelitian dan pengembangan. Hal ini penting untuk memastikan informasi yang tepat tentang kebutuhan pelanggan diteruskan ke setiap tahap pengembangan produk, dan juga untuk memastikan keberlanjutan kolaborasi selama proses pengembangan produk.

Melalui penerapan QFD, perusahaan dapat mengoptimalkan kepuasan pelanggan dan mengurangi risiko kegagalan produk. Metode ini juga mendukung pengambilan keputusan berdasarkan data dan fakta, serta mendorong perubahan budaya dalam perusahaan menuju orientasi yang lebih kuat pada kebutuhan dan kepuasan pelanggan. Dengan ini, perusahaan dapat meningkatkan daya saingnya dan menghasilkan produk atau layanan yang lebih baik.`,
  },
  {
    role: "user",
    content: `Sebagai permisalan, saya ingin membuat chatbot untuk pelayanan pelanggan pada sebuah toko obat-obatan herbal. Kapan waktu digunakannya QFD?, setelah penerapan chatbot atau sebelum penerapan chatbot?, jelaskan secara detail, berikan alasannya, dan gunakan pembahasan ilmiah.`,
  },
  {
    role: "assistant",
    content: `Penggunaan Quality Function Deployment (QFD) dapat sangat bermanfaat dalam mengembangkan chatbot untuk pelayanan pelanggan di sebuah toko obat-obatan herbal. Dalam rangkaian pembangunan chatbot, QFD dapat diterapkan sebelum penerapan chatbot itu sendiri. Berikut adalah alasan dan penjelasan secara terperinci untuk itu:

1. Dapat memahami preferensi dan kebutuhan pelanggan: Melalui langkah awal QFD, yaitu pengumpulan dan analisis data pelanggan, dapat diketahui preferensi dan kebutuhan mereka secara mendalam. Untuk chatbot yang efektif, penting untuk memahami keinginan dan ekspektasi pelanggan terkait dengan layanan dan interaksi dengan chatbot. Dengan menerapkan QFD di awal, toko obat herbal dapat mengidentifikasi dan mempelajari preferensi pelanggan terkait dengan penggunaan chatbot, seperti tampilan yang digemari atau jenis pertanyaan yang sering diajukan.

2. Menghubungkan kebutuhan pelanggan dengan fitur chatbot: QFD memungkinkan toko obat herbal untuk menghubungkan preferensi pelanggan dengan karakteristik dan fitur chatbot yang harus dikembangkan. Pada tahap matriks QFD, kebutuhan pelanggan direfleksikan dalam bentuk atribut yang harus ada pada chatbot. Misalnya, jika pelanggan menginginkan keterhubungan yang cepat dengan chatbot, toko obat herbal dapat menetapkan kebutuhan tersebut sebagai atribut dan mencari solusi teknis yang sesuai untuk mengatasi kebutuhan tersebut, seperti penggunaan teknologi pemrosesan bahasa alami atau algoritma yang cepat.

3. Meningkatkan kualitas interaksi chatbot-pelanggan: Dengan menerapkan QFD sebelum penerapan chatbot, toko obat herbal dapat merancang chatbot dengan mempertimbangkan kebutuhan dan ekspektasi pelanggan secara lebih holistik. Misalnya, QFD dapat membantu memprioritaskan atribut-atribut chatbot yang paling penting bagi pelanggan, seperti kemudahan penggunaan atau keakuratan dalam menjawab pertanyaan. Hal ini akan memberikan pemahaman yang lebih baik tentang apa yang diharapkan pelanggan dari chatbot mereka dan kemudian menghasilkan chatbot yang lebih adaptif dan efektif dalam memberikan pelayanan pelanggan yang berkualitas.

4. Meminimalkan risiko dan kesalahan: Dengan kejelasan kebutuhan pelanggan dan alur komunikasi yang didokumentasikan dalam matriks QFD, toko obat herbal dapat mengurangi potensi risiko implementasi chatbot yang tidak memenuhi harapan pelanggan. Dengan melakukan perencanaan dan analisis awal menggunakan QFD, mereka dapat secara proaktif menghindari fitur yang tidak sesuai atau mengadaptasi perubahan yang lebih disesuaikan dengan preferensi pelanggan.

Menerapkan QFD sebelum penerapan chatbot dalam toko obat herbal membantu menciptakan chatbot yang lebih memadai dan sesuai dengan kebutuhan pelanggan. Hal ini memungkinkan pengoptimalan pelayanan pelanggan serta pengembangan chatbot yang lebih efisien dan efektif. Dengan memahami preferensi pelanggan dalam tahap awal menggunakan QFD, toko obat herbal dapat mengurangi risiko, menghemat waktu dan sumber daya, serta meningkatkan pengalaman pelanggan melalui penerapan chatbot yang berkualitas.`,
  },
  {
    role: "user",
    content: `Jika penerapan QFD dilakukan sebelum pembuatan chatbot, maka parameter-parameter apa saya yang diperlukan dalam melakukan penerapan QFD?. Jabarkan dan jelaskan keseluruhan proses dalam penerapan QFD dimulai dari awal hingga akhir.`,
  },
  {
    role: "assistant",
    content: `Dalam penerapan QFD sebelum pembuatan chatbot untuk toko obat-obatan herbal, beberapa parameter yang diperlukan adalah:

1. Kebutuhan Pelanggan: Data pelanggan dan pemahaman tentang preferensi mereka terkait interaksi dengan chatbot harus dikumpulkan. Parameter ini dapat mencakup tingkat kecepatan, akurasi, kemudahan penggunaan, ketepatan jawaban, kepersonalan, dan lainnya yang dianggap penting oleh pelanggan dalam berinteraksi dengan chatbot.

2. Fitur-fitur Chatbot: Anda harus mengidentifikasi dan mengembangkan fitur-fitur yang akan dimiliki oleh chatbot sebagai tanggapan terhadap kebutuhan pelanggan. Misalnya, fitur seperti sistem pengenalan suara, pemrosesan bahasa alami (NLP), saran produk berdasarkan gejala, interaksi dengan riwayat pesanan pelanggan, dan penjelasan mengenai dosis penggunaan herbal bisa menjadi bagian dari fitur-fitur chatbot.

3. Keandalan dan Kualitas Mustahil: Perhatikan keandalan dan kualitas chatbot. Matriks QFD harus mencakup parameter-parameter yang berkaitan dengan keandalan sistem dan standar kualitas. Misalnya, bagaimana kestiakan server, vektor tanggapan jika hasil EBC sudah berbadan hukum, serta berapa sering terjadi error atau pemadaman sistem.

Berikut adalah panduan umum langkah-langkah dalam menerapkan QFD:

1. Identifikasi Kebutuhan Pelanggan: Lakukan studi pasar dan interaksi dengan pelanggan untuk membawa kebutuhan mereka ke dalam pemahaman yang lebih jelas dan spesifik terkait chatbot yang diinginkan.

2. Susun Matriks QFD: Dalam matriks QFD, buat baris yang mewakili kebutuhan pelanggan dan kolom yang mewakili fitur-fitur chatbot. Berikan bobot atau prioritas untuk setiap kebutuhan pelanggan sesuai dengan tingkat pentingannya. Kemudian, identifikasi tingkat kepentingan fitur-fitur chatbot terhadap kebutuhan pelanggan dan lamanya waktu yang diperlukan agar fitur tersebut dipenuhi.

3. Prioritaskan dan Tentukan Tujuan: Gunakan matriks QFD untuk menganalisis dan menentukan fitur-fitur yang harus menjadi fokus utama dalam pengembangan chatbot. Prioritaskan fitur-fitur yang paling penting dengan menggabungkan nilai pentingnya untuk kebutuhan pelanggan dan ukuran kinerja atau tingkatan fitur tersebut.

4. Analisis Teknis dan Desain: Setelah mendapatkan prioritas fitur, lakukan analisis teknis dan desain detail, menggabungkan peluang dan kendala teknologi untuk setiap fitur chatbot. Serahkan tugas pengembangan kepada tim yang tepat, mengkomunikasikan pentingnya mewujudkan fitur-fitur yang telah ditentukan sebelumnya.

5. Verifikasi dan Validasi: Verifikasi tahapan pra-akuisisi (sebelum chatbot dirilis secara live) adalah bagian penting dalam proses QFD sehingga kesesuaian dengan preferensi dan kebutuhan pelanggan dapat diukur secara objektif. Ujilah fitur-fitur chatbot dengan pengguna potensial atau gunakan monitoring proses pengguna yang ada untuk menganalisis tingkat kepuasan pelanggan dan apakah misi pengembangan tersampaikan dengan baik.

6. Evaluasi dan Perbaikan: Lakukan evaluasi terhadap kinerja chatbot setelah dirilis, gunakan umpan balik dari pelanggan untuk memperbaiki fitur jika diperlukan, dan pastikan chatbot terus mengikuti perkembangan kebutuhan pelanggan dan teknologi yang ada.

Dengan mengikuti langkah-langkah tersebut, QFD membantu perpindahan dari preferensi pelanggan menjadi karakteristik nyata chatbot dengan menghadirkan tanggapan yang langsung dan tepat bagi pelanggan toko obat herbal. QFD membantu memprioritaskan fitur-fitur yang tepat dan mendekati harapan pelanggan, menghasilkan sebuah chatbot yang efektif dan efisien dalam memberikan pelayanan pelanggan yang berkualitas tinggi.`,
  },
  {
    role: "user",
    content: `Dalam melakukan proses identifikasi kebutuhan pelanggan (voice of customer) demi memenuhi kebutuhan matriks QFD, jika lebutuhan data tersebut berupa kuesioner maka hal apa saja yang perlu dilakukan?, jelaskan secara detail dan selengkap mungkin.`,
  },
  {
    role: "assistant",
    content: `Untuk mengidentifikasi kebutuhan pelanggan dalam rangka memenuhi matriks Quality Function Deployment (QFD) melalui kuesioner, berikut adalah langkah-langkah detail yang dapat dilakukan:

1. Tentukan Tujuan Kuesioner: Definisikan tujuan dari kuesioner tersebut. Apakah Anda ingin memahami preferensi pelanggan terkait dengan penggunaan chatbot, kebutuhan mereka terkait dengan produk obat-obatan herbal, atau mungkin preferensi mereka terkait dengan layanan pelanggan secara umum. Penetapan tujuan akan membantu membuat pertanyaan kuesioner yang lebih fokus.

2. Identifikasi Pertanyaan Pokok (Open-Ended Questions): Mulailah dengan pertanyaan terbuka untuk memberikan kesempatan pada pelanggan untuk menyampaikan pandangan mereka secara bebas. Ajukan pertanyaan-pertanyaan yang luas, misalnya "Apa yang Anda harapkan dari sebuah chatbot dalam toko obat-obatan herbal?", "Apa kendala yang Anda hadapi dalam berinteraksi dengan chatbot?", atau "Apakah ada fitur tertentu yang Anda inginkan pada chatbot dalam hal obat-obatan herbal?".

3. Rancang Pertanyaan Tertutup (Closed-Ended Questions): Setelah memberikan kesempatan kepada pelanggan untuk menyampaikan jawaban secara luas, gunakan pertanyaan tertutup untuk mendapatkan jawaban yang lebih kuantitatif. Ada beberapa jenis pertanyaan tertutup yang dapat digunakan, termasuk skala likert (mis., 1-5 untuk mengukur tingkat persetujuan), pilihan ganda (mis., "Ya" atau "Tidak"), atau pengelompokan berdasarkan kategori pertanyaan.

4. Rangkum Pertanyaan Demografi: Sertakan beberapa pertanyaan demografi sebagai bagian dari kuesioner Anda. Data ini akan membantu Anda memahami karakteristik demografis pelanggan (misalnya, usia, gender, lokasi geografis, atau pendapatan) yang dapat mempengaruhi preferensi dan kebutuhan mereka.

5. Verifikasi dan Uji Coba: Lakukan verifikasi pada kuesioner dengan melibatkan pihak pendukung terkait (seperti anggota tim, manajemen, atau ahli di bidangnya). Ujicobakan kuesioner tersebut pada sejumlah pelanggan sebagai bentuk pengujian dan validasi awal. Perhatikan tanggapan mereka dan perbaiki serta revisi pertanyaan yang diperlukan agar lebih tepat mencerminkan preferensi pemohon.

6. Distribusi Kuesioner: Setelah semua persiapan, distribusikan kuesioner ke pelanggan yang diinginkan. Pastikan memberikan instruksi yang jelas terkait pengisian dan menghindari ambigu dalam pertanyaan. Penggunaan platform atau alat online seperti Surveymonkey, Google Forms atau email dapat memudahkan pengambilan data dan pemrosesan.

7. Olah Data: Setelah data dikumpulkan melalui kuesioner, lakukan analisis data dengan bantuan software statistik (jika memungkinkan) atau dengan metode manual. Analisis ini akan membantu memahami preferensi pelanggan secara kualitatif, menentukan atribut yang penting, dan memberikan dasar untuk matriks QFD.

Setelah proses identifikasi kebutuhan pelanggan yang mendalam melalui dendata, data dianalisis dan diinterpretasikan untuk mendapatkan wawasan yang lebih mendalam tentang preferensi pelanggan. Hasil identifikasi ini kemudian dapat dikaitkan dengan pengembangan matriks QFD, transformasi preferensi pelanggan menjadi atribut chatbot yang lebih spesifik, dan penentuan prioritas fitur-fitur yang diharapkan oleh pelanggan.`,
  },
  {
    role: "user",
    content: `Pada sebelumnya telah dibahas mengenai QFD dan keseluruhan prosesnya, berikut adalah instruksi selanjutnya yang harus kamu simak:

Array latar belakang:
[
  "Dengan akses melalui aplikasi whatsapp dan admin yang membalas setiap pesan dari pelanggan yang menghubungi."
  "Terdapat masalah responsivitas (kecepatan tanggap balas pesan, terbatasanya waktu jam kerja, dan antrian balasan pesan) yang berakibat terhambatnya proses bisnis (jual/beli)",
  "Solusinya adalah melakukan implementasi chatbot untuk pelayanan pelanggan, dengan fitur yang meliputi pelayanan informasi seputar produk dan pemesanan produk",
  "Data rancangan, fitur-fitur fungisonalitas chatbot belum didapatkan, akan didapatkan melalui voice of customer via kuesioner."
  "Chatbot belum di rilis atau belum di implmentasikan."
]

simpan array latar belakang tersebut, tidak perlu melakukan analisis dan sebagainya.`,
  },
  {
    role: "assistant",
    content: `Array latar belakang telah disimpan sebelumnya.`,
  },
  {
    role: "user",
    content: `Asumsikan "kamu adalah salah satu pelanggan" yang mewakili suara pelanggan lainnya.
Kamu memiliki kemampuan analisis yang baik, Kamu harus memiliki setidaknya 15 pertanyaan terkait dengan kebutuhan pelanggan (voice of customer) mengenai elemen-elemen apa saja yang harus ada pada rancangan fitur-fitur/fungsionalitas chatbot sesuai dengan ekspektasi pelanggan.
Setiap atau beberapa pertanyaan harus memiliki tema indeks parameter beserta opsi pilihan jawaban (bisa berupa apa saja dengan menerapkan skala likert, atau setidaknya terdapat opsi yang merepresentasikan ekspektasi pelanggan).
Buatlah dengan ketelitian dan analisis yang tinggi, gunakan bahasa yang baik dan benar serta mudah dipahami.`,
  },
];

export default General;
