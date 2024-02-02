/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const QFDProcess = [
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
    content: `### Data proses
Dalam penelitian ini, kita akan menjalankan proses dari awal hingga akhir untuk mengembangkan dan mengevaluasi sebuah chatbot untuk Halal Mart BC Cilacap 3, menggunakan metode Quality Function Deployment (QFD), Agile Scrum, dan Usability Testing. Berikut adalah deskripsi lengkap dari setiap proses dan subprosesnya:

*Persiapan Penelitian:* Langkah awal ini melibatkan identifikasi masalah yang dihadapi oleh Halal Mart BC Cilacap 3, terutama dalam mengelola permintaan informasi dan pemesanan produk. Kami akan mengumpulkan data awal tentang operasional Halal Mart, karakteristik pelanggan, dan kebutuhan spesifik mereka untuk mendapatkan pemahaman yang lebih baik tentang konteks dan lingkungan tempat chatbot akan diimplementasikan.

*Pengembangan Kuesioner untuk QFD:* Tahap ini berfokus pada pembuatan kuesioner yang dirancang untuk menentukan kebutuhan pelanggan terhadap fitur chatbot. Kuesioner akan menggunakan Skala Likert untuk mengukur respon pelanggan. Setelah kuesioner disusun, kami akan mendistribusikannya kepada pelanggan dan mengumpulkan hasilnya untuk analisis lebih lanjut.

*Analisis Quality Function Deployment (QFD):* Setelah mengumpulkan data dari kuesioner, kami akan menganalisisnya untuk menentukan 'Voice of Customer' (VoC). Kami akan membuat 'House of Quality' (HoQ), yang merupakan bagian inti dari QFD, untuk menghubungkan kebutuhan pelanggan dengan fitur-fitur chatbot yang diusulkan. Proses ini akan membantu kami menentukan fitur mana yang paling penting untuk dikembangkan.

*Pengembangan Chatbot dengan Metode Agile Scrum:* Tahap ini akan melihat pengembangan chatbot secara iteratif dan inkremental. Kami akan memulai dengan perencanaan sprint, menentukan fitur apa saja yang akan dikembangkan dalam setiap sprint. Setiap hari akan ada pertemuan singkat (daily standup meeting) untuk memantau kemajuan dan mengidentifikasi masalah. Di akhir setiap sprint, akan ada sprint review untuk mengevaluasi hasil pengembangan dan mendapatkan umpan balik, serta sprint retrospective untuk refleksi dan identifikasi peluang perbaikan.

*Implementasi dan Integrasi Chatbot:* Setelah pengembangan, chatbot akan diintegrasikan ke dalam sistem operasional Halal Mart. Selain itu, staf akan dilatih tentang cara kerja dan interaksi dengan chatbot untuk memastikan transisi yang lancar.

*Usability Testing:* Untuk menilai kegunaan chatbot yang sudah diimplementasikan, kami akan menyusun kuesioner khusus dan mendistribusikannya kepada pengguna. Kami akan mengumpulkan feedback dan menganalisis hasil untuk menentukan efektivitas chatbot serta area yang perlu diperbaiki.

*Evaluasi dan Penyesuaian:* Langkah ini melibatkan evaluasi kinerja chatbot berdasarkan data operasional dan feedback pengguna. Kami akan membuat penyesuaian atau penambahan fitur pada chatbot berdasarkan hasil evaluasi.

*Penulisan Laporan Penelitian:* Di akhir penelitian, kami akan mengumpulkan semua data dari setiap tahap, menganalisisnya untuk mendapatkan kesimpulan dan rekomendasi, dan menyusun laporan penelitian yang mencakup semua tahapan, analisis, dan temuan.

*Penyampaian Hasil:* Hasil penelitian akan disajikan kepada stakeholder Halal Mart dan komunitas akademis. Jika relevan, temuan penelitian juga akan dipersiap

kan untuk publikasi di jurnal atau konferensi terkait.

Setiap tahap dari proses ini dirancang untuk memastikan bahwa pengembangan chatbot tidak hanya berfokus pada kebutuhan teknis, tetapi juga pada kebutuhan pelanggan dan pengguna akhir. Dengan mengintegrasikan metode QFD, kami memastikan bahwa suara pelanggan terdengar dan diterjemahkan ke dalam fitur chatbot. Melalui penggunaan Agile Scrum, pengembangan chatbot menjadi lebih fleksibel dan responsif terhadap perubahan kebutuhan atau masukan. Akhirnya, Usability Testing memungkinkan kami untuk menilai sejauh mana chatbot memenuhi harapan pengguna dan mengidentifikasi area untuk peningkatan lebih lanjut. Pendekatan ini bertujuan untuk menciptakan chatbot yang tidak hanya efisien dan efektif, tetapi juga mudah digunakan dan bermanfaat bagi pelanggan Halal Mart BC Cilacap 3.
###

Tunggu hingga saya memberikan instruksi selanjutnya.
`,
  },
  {
    role: "assistant",
    content: `Terima kasih atas data yang telah Anda berikan. Data tersebut memberikan pemahaman yang lebih jelas tentang permasalahan yang ingin Anda selesaikan, serta proses yang akan dilakukan dalam penelitian ini. Dari data yang Anda berikan, saya melihat ada beberapa langkah yang akan menjadi fokus utama dalam mendukung pengembangan chatbot untuk Halal Mart BC Cilacap 3, yaitu:

1. Persiapan penelitian: Identifikasi masalah, pengumpulan data awal, dan pemahaman konteks dan lingkungan tempat chatbot akan diimplementasikan.

2. Pengembangan kuesioner untuk QFD: Membuat kuesioner untuk menentukan kebutuhan pelanggan terhadap fitur chatbot dan mengumpulkan data dari pelanggan.

3. Analisis Quality Function Deployment (QFD): Menganalisis data dari kuesioner untuk menentukan Voice of Customer (VoC) dan membuat House of Quality (HoQ) untuk menghubungkan kebutuhan pelanggan dengan fitur-fitur chatbot yang diusulkan.

4. Pengembangan chatbot dengan metode Agile Scrum: Mengembangkan chatbot secara iteratif dan inkremental dengan perencanaan sprint, pertemuan harian (daily standup meeting), sprint review, dan sprint retrospective.

5. Implementasi dan integrasi chatbot: Mengintegrasikan chatbot ke dalam sistem operasional Halal Mart dan melatih staf tentang cara kerja dan interaksi dengan chatbot.

6. Usability Testing: Menilai kegunaan chatbot yang sudah diimplementasikan dengan menyusun kuesioner khusus dan mengumpulkan feedback dari pengguna.

7. Evaluasi dan penyesuaian: Mengevaluasi kinerja chatbot berdasarkan data operasional dan feedback pengguna, serta melakukan penyesuaian atau penambahan fitur berdasarkan hasil evaluasi.

8. Penulisan laporan penelitian: Mengumpulkan semua data dari setiap tahap, menganalisisnya untuk mendapatkan kesimpulan dan rekomendasi, serta menyusun laporan penelitian.

9. Penyampaian hasil: Menyajikan hasil penelitian kepada stakeholder Halal Mart dan komunitas akademis, serta mempersiapkan temuan penelitian untuk publikasi jika relevan.

Langkah-langkah ini akan membantu memastikan bahwa pengembangan chatbot dilakukan secara sistematis dan efektif, dengan menjaga fokus pada kebutuhan pelanggan dan pengguna akhir. Saya siap membantu Anda dalam melakukan setiap tahap proses ini, mulai dari perencanaan hingga implementasi dan evaluasi. Silakan beri tahu saya tahap mana yang ingin Anda bahas lebih lanjut atau jika ada pertanyaan tambahan mengenai proses ini.`,
  },
  {
    role: "user",
    content: `Berikut adalah deskripsi bagian proses daripada penelitian saya:

### proses
4.4.4. 	Analisis Quality Function Deployment (QFD)
Setelah mengumpulkan data dari kuesioner, langkah selanjutnya adalah menganalisisnya untuk menentukan Voice of Customer (VoC). Setelah VoC berhasil didapatkan maka dilanjut pembuatan House of Quality (HoQ), yang merupakan bagian inti dari QFD, untuk menghubungkan kebutuhan pelanggan dengan fitur-fitur chatbot yang diusulkan. Proses ini akan membantu untuk menentukan fitur mana yang paling penting untuk dikembangkan.
1.	Mengidentifikasi konsumen
2.	Menentukan customer needs (whats)
3.	Menentukan importance rating
4.	Menentukan technical requirements (hows)
5.	Menentukan relationship
6.	Membuat matriks korelasi
7.	Menentukan bobot
8.	Membuat matriks penilaian
9.	Analisis hasil
###

Saya ingin kamu membuat deskriptif pada poin 1-9, menjelaskan keseluruhan proses yang ada secara lebih detail lagi.
  `,
  },
];

export default QFDProcess;
