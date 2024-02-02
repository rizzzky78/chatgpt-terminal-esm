/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const AgileMethod = [
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
    content: `Tentu, saya sangat menghargai data yang Anda berikan sebagai acuan dalam membahas permasalahan Anda. Silakan kirimkan data yang Anda miliki dan akan saya pelajari dengan seksama untuk menyusun lingkup pembahasan lebih lanjut. Jika ada format khusus yang Anda inginkan untuk pengiriman data, mohon beri tahu saya sehingga saya dapat menyesuaikan dengan permintaan Anda. Terima kasih.`,
  },
  {
    role: "user",
    content: `Berikut adalah data latar belakang proposal penelitian saya:

### Data Latar Belakang ###
Di tengah tren kesehatan global yang berkembang, permintaan terhadap obat-obatan herbal mengalami peningkatan yang signifikan. Menurut laporan dari Grand View Research (2021) pasar global produk herbal diperkirakan akan tumbuh dengan cepat, didorong oleh kesadaran konsumen yang meningkat mengenai manfaat kesehatan dan keberlanjutan dari penggunaan produk alami. Hal ini didukung juga dari Global Industry Analysts Inc (2020) pasar obat-obatan herbal global diperkirakan mencapai nilai sebesar 123,7 miliar dolar AS, dan diperkirakan akan terus tumbuh dengan laju pertumbuhan tahunan sebesar 5,88% antara tahun 2021 hingga 2027. Faktor-faktor yang mendorong pertumbuhan pasar ini termasuk peningkatan kesadaran konsumen terhadap gaya hidup sehat, peningkatan minat pada pengobatan alami, dan meningkatnya permintaan akan produk-produk herbal yang aman dan bebas efek samping. Tren ini mencerminkan perubahan dalam perilaku konsumen, yang semakin memilih produk yang lebih alami dan etis dalam praktik keseharian mereka.
Halal Mart BC Cilacap 3 merupakan toko ritel yang menjual berbagai produk herbal berkualitas HNI (Halal Network International) dari PT. HPAI (Herba Penawar Alwahida Indonesia). Toko ini berperan penting dalam distribusi produk-produk HNI, melayani berbagai tingkatan distribusi dari Business Center hingga konsumen akhir. Meskipun permintaan produk herbal meningkat, Halal Mart menghadapi tantangan dalam mengelola permintaan informasi dan pemesanan produk, terutama karena beban kerja yang tinggi pada satu admin yang mengelola pelayanan pelanggan dan pemesanan produk.
Sebagai respon terhadap tantangan ini, peneliti berencana mengimplementasikan solusi berbasis teknologi, yaitu rule based chatbot pada akun WhatsApp mereka. Tujuan dari implementasi ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk. Rencana ini meliputi pengumpulan data fitur, analisis dengan metode Quality Function Deployment (QFD), pengembangan dengan metode Agile Scrum, dan evaluasi dampak penerapan chatbot menggunakan Usability Testing. Tujuan dari implementasi chatbot ini adalah untuk meningkatkan efisiensi dalam menyediakan informasi dan proses pemesanan produk kepada agen maupun konsumen. Penelitian ini diharapkan dapat memberikan wawasan tentang bagaimana teknologi dapat digunakan untuk meningkatkan layanan pelanggan di sektor ritel, terutama dalam permasalahan permintaan yang meningkat untuk produk herbal.
### Akhir Data Latar Belakang ###

Tunggu hingga saya memberikan instruksi selanjutnya.
`,
  },
  {
    role: "assistant",
    content: `Terima kasih atas data latar belakang proposal penelitian Anda. Dari data yang Anda berikan, terlihat bahwa ada peningkatan signifikan dalam permintaan produk herbal dan ada tantangan yang dihadapi oleh Halal Mart BC Cilacap 3 dalam mengelola permintaan informasi dan pemesanan produk secara efisien.

Berikut langkah-langkah umum yang dapat kami lakukan untuk membahas permasalahan ini:

1. Analisis Permasalahan: Saya akan menganalisis permasalahan utama yang Anda tunjukkan dalam data latar belakang. Misalnya, bagaimana beban kerja yang tinggi satu admin dalam mengelola pelayanan pelanggan dan pemesanan produk dan bagaimana hal itu mempengaruhi efisiensi dan kepuasan pelanggan.

2. Pengumpulan Informasi Tambahan: Saya mungkin membutuhkan informasi tambahan tentang Halal Mart BC Cilacap 3, seperti struktur organisasi, proses pemesanan saat ini, alur informasi, dan alur kerja saat ini. Informasi tambahan ini akan membantu saya lebih memahami situasi saat ini dan memungkinkan saya memberikan rekomendasi yang lebih spesifik.

3. Identifikasi Solusi Potensial: Saya akan mencari solusi yang mungkin untuk mengatasi permasalahan yang dihadapi oleh Halal Mart BC Cilacap 3 dalam hal pelayanan pelanggan dan pemesanan produk. Berdasarkan latar belakang yang Anda berikan, solusi yang mungkin adalah implementasi chatbot berbasis aturan pada akun WhatsApp mereka.

4. Analisis Keuntungan dan Kerugian: Saya akan menganalisis manfaat dan potensi kerugian dari implementasi chatbot berbasis aturan. Hal ini termasuk meningkatkan efisiensi, meningkatkan kepuasan pelanggan, mengurangi beban kerja admin, dan potensi masalah yang mungkin timbul dengan implementasi chatbot.

5. Penyusunan Lingkup Pembahasan: Berdasarkan analisis yang telah dilakukan, saya akan menyusun lingkup pembahasan yang dapat meliputi langkah-langkah apa yang perlu diambil untuk implementasi chatbot, faktor-faktor yang perlu dipertimbangkan, dan dampak yang diharapkan dari implementasi tersebut.

Tentu saja, langkah-langkah ini masih bersifat umum dan dapat disesuaikan dengan kebutuhan dan kompleksitas permasalahan yang Anda hadapi. Mohon beri tahu saya jika ada aspek yang ingin Anda diskusikan lebih mendalam atau jika ada data tambahan yang perlu Anda sertakan.`,
  },
  {
    role: "user",
    content: `Saya ingin kamu membuat tahapan atau diagram alir peneltiian secara lengkap, yang meliputi keseluruhan proses awal hingga akhir penelitian.`,
  },
  {
    role: "assistant",
    content: `Tentu, berikut adalah tahapan atau diagram alir penelitian secara lengkap yang meliputi keseluruhan proses dari awal hingga akhir penelitian:

1. Analisis Permasalahan:
- Menganalisis permasalahan yang dihadapi oleh Halal Mart BC Cilacap 3 dalam mengelola permintaan informasi dan pemesanan produk.
- Memahami dampak dari permasalahan tersebut terhadap efisiensi dan kepuasan pelanggan.

2. Pengumpulan Informasi Tambahan:
- Mengumpulkan informasi tambahan tentang Halal Mart BC Cilacap 3, seperti struktur organisasi, proses pemesanan saat ini, alur informasi, dan alur kerja saat ini.

3. Penentuan Metode Penelitian:
- Memilih metode penelitian yang sesuai dengan tujuan penelitian dan permasalahan yang dihadapi oleh Halal Mart BC Cilacap 3.
- Misalnya, metode penelitian yang digunakan bisa mencakup metode Quality Function Deployment (QFD) dan Agile Scrum.

4. Pengumpulan Data:
- Mengumpulkan data tentang kebutuhan dan preferensi agen dan konsumen terkait pelayanan pelanggan dan pemesanan produk.
- Mengumpulkan data tentang fitur-fitur yang diharapkan dari chatbot.

5. Analisis Data:
- Menganalisis data yang telah terkumpul menggunakan metode QFD untuk mengidentifikasi kebutuhan dan preferensi agen dan konsumen.
- Mengidentifikasi fitur-fitur yang harus ada dalam implementasi chatbot.

6. Pengembangan Chatbot:
- Mengembangkan chatbot berbasis aturan menggunakan Agile Scrum sebagai metodologi pengembangan.
- Menerapkan fitur-fitur yang telah diidentifikasi pada tahap sebelumnya.

7. Evaluasi Dampak Penerapan Chatbot:
- Melakukan usability testing untuk mengevaluasi dampak penerapan chatbot.
- Mengumpulkan umpan balik dari agen dan konsumen terkait pengalaman menggunakan chatbot.

8. Analisis Hasil:
- Menganalisis hasil dari evaluasi dampak penerapan chatbot.
- Menilai efisiensi dan efektivitas chatbot dalam menyediakan informasi dan proses pemesanan produk.

9. Rekomendasi dan Tindak Lanjut:
- Memberikan rekomendasi berdasarkan analisis hasil untuk meningkatkan pelayanan pelanggan dan pemesanan produk.
- Merumuskan tindakan yang perlu diambil oleh Halal Mart BC Cilacap 3 berdasarkan rekomendasi tersebut.

10. Penulisan Laporan:
- Menyusun laporan penelitian yang berisi ringkasan permasalahan, metodologi penelitian, hasil analisis, rekomendasi, dan tindak lanjut.

Tahapan-tahapan di atas bisa disesuaikan sesuai dengan kebutuhan dan kompleksitas penelitian. Jika ada tahapan khusus yang ingin anda bahas lebih dalam atau informasi tambahan yang perlu ditambahkan dalam tahapan ini, mohon beri tahu saya.`,
  },
  {
    role: "user",
    content: `Berdasarkan urutan pada diagram alir penelitian yang telah kamu buat sebelumnya, saya melakukan beberapa revisi mengenai tahapan alur proses penelitian sebagai berikut:

### Urutan Proses Versi Saya ###

- [terminator] mulai
- [proses] permasalahan
- [proses] studi literatur
- [proses] pembuatan kuesioner fitur fungsionalitas chatbot
- [proses] penyebaran kuesioner fitur fungsionalitas chatbot
- [multi dokumen] data kuesioner fitur fungsionalitas chatbot
- [proses] analisa kebutuhan perancangan
- [data] data kebutuhan perancangan
- [proses] penetapan fitur fungsionlitas chatbot
- [data] data fitur fungsionlitas chatbot
- [proses] perancangan sistem chatbot
- [proses] pengembangan chatbot
- [proses] pengujian chatbot
- [proses] penerapan chatbot pada Halal Mart BC Cilacap 3
- [proses] pembuatan parameter usablity testing
- [proses] penyebaran kuesioner usability testing
- [multi dokumen] data kuesioner usability testing
- [proses] mengevaluasi dampak penerapan
- [data] data hasil evaluasi
- [proses] kesimpulan
- [terminator] selesai

### ###

INSTRUKSI:
Saya ingin kamu membuat penjelasan lengkap sedetail mungkin pada setiap tahapan yang ada pada proses urutan penelitian versi saya.
Gunakan pembahasan yang baik dan sejelas mungkin, pastikan setiap proses memiliki penjelasan sejelas-jelasnya.
Asumsikan orang yang akan menilai penjelasan proses urut penelitian adalah orang yang kurang paham, sehingga kamu membuat penjelasn deskriptifnya jelas dan mudah dimengerti.

INSTRUKSI TAMBAHAN:
gunakan keseluruhan token prompt semaksimal mungkin.
`,
  },
  {
    role: "assistant",
    content: `Berikut adalah penjelasan lengkap setiap tahapan dalam proses penelitian versi Anda:

1. [terminator] Mulai: Tahap ini menandakan awal dari proses penelitian yang akan dilakukan untuk mengatasi permasalahan yang dihadapi oleh Halal Mart BC Cilacap 3 dalam mengelola permintaan informasi dan pemesanan produk.

2. [proses] Permasalahan: Tahap ini merupakan identifikasi dan analisis terhadap permasalahan yang dihadapi oleh Halal Mart BC Cilacap 3, yaitu beban kerja yang tinggi pada satu admin yang mengelola pelayanan pelanggan dan pemesanan produk.

3. [proses] Studi Literatur: Tahap ini melibatkan penelitian dan analisis literatur yang relevan tentang penggunaan chatbot dalam meningkatkan pelayanan pelanggan dan pemesanan produk di sektor ritel.

4. [proses] Pembuatan Kuesioner Fitur Fungsionalitas Chatbot: Tahap ini melibatkan pembuatan kuesioner yang akan digunakan untuk mengumpulkan data mengenai fitur-fitur yang diinginkan dari chatbot oleh agen dan konsumen Halal Mart BC Cilacap 3.

5. [proses] Penyebaran Kuesioner Fitur Fungsionalitas Chatbot: Tahap ini melibatkan penyebaran kuesioner kepada agen dan konsumen untuk mengumpulkan data tentang preferensi mereka terkait fitur-fitur chatbot.

6. [multi dokumen] Data Kuesioner Fitur Fungsionalitas Chatbot: Tahap ini melibatkan pengumpulan dan dokumentasi data yang diperoleh dari kuesioner fitur fungsionalitas chatbot yang telah disebar.

7. [proses] Analisa Kebutuhan Perancangan: Tahap ini melibatkan analisis data kuesioner fitur fungsionalitas chatbot untuk mengidentifikasi kebutuhan dan preferensi agen dan konsumen yang akan digunakan sebagai dasar dalam perancangan chatbot.

8. [data] Data Kebutuhan Perancangan: Tahap ini melibatkan dokumentasi hasil analisis kebutuhan dan preferensi yang telah diidentifikasi pada tahap sebelumnya.

9. [proses] Penetapan Fitur Fungsionalitas Chatbot: Tahap ini melibatkan penetapan fitur-fitur chatbot berdasarkan kebutuhan dan preferensi yang telah diidentifikasi pada tahap sebelumnya.

10. [data] Data Fitur Fungsionalitas Chatbot: Tahap ini melibatkan dokumentasi fitur-fitur chatbot yang telah ditentukan pada tahap sebelumnya.

11. [proses] Perancangan Sistem Chatbot: Tahap ini melibatkan merancang sistem chatbot yang mencakup desain antarmuka, logika, dan integrasi dengan platform WhatsApp.

12. [proses] Pengembangan Chatbot: Tahap ini melibatkan pengembangan chatbot berdasarkan perancangan sistem yang telah dilakukan.

13. [proses] Pengujian Chatbot: Tahap ini melibatkan pengujian chatbot untuk memastikan bahwa chatbot berfungsi dengan baik dan memenuhi fitur-fitur yang telah ditentukan.

14. [proses] Penerapan Chatbot pada Halal Mart BC Cilacap 3: Tahap ini melibatkan implementasi chatbot di Halal Mart BC Cilacap 3 untuk digunakan oleh agen dan konsumen dalam menyediakan informasi dan proses pemesanan produk.

15. [proses] Pembuatan Parameter Usability Testing: Tahap ini melibatkan menyusun parameter dan kriteria yang akan digunakan dalam usability testing untuk mengevaluasi performa dan pengalaman pengguna dengan chatbot.

16. [proses] Penyebaran Kuesioner Usability Testing: Tahap ini melibatkan penyebaran kuesioner kepada agen dan konsumen untuk mengumpulkan data mengenai pengalaman menggunakan chatbot.

17. [multi dokumen] Data Kuesioner Usability Testing: Tahap ini melibatkan pengumpulan dan dokumentasi data yang diperoleh dari kuesioner usability testing yang telah disebar.

18. [proses] Mengevaluasi Dampak Penerapan: Tahap ini melibatkan analisis dan evaluasi terhadap data hasil kuesioner usability testing untuk mengevaluasi dampak penerapan chatbot.

19. [data] Data Hasil Evaluasi: Tahap ini melibatkan dokumentasi hasil evaluasi mengenai dampak penerapan chatbot pada efisiensi dan kepuasan pelanggan.

20. [proses] Kesimpulan: Tahap ini melibatkan merumuskan kesimpulan berdasarkan hasil analisis dan evaluasi yang telah dilakukan serta memberikan rekomendasi untuk meningkatkan pelayanan pelanggan dan pemesanan produk.

21. [terminator] Selesai: Tahap ini menandakan akhir dari proses penelitian yang telah dilakukan untuk mengatasi permasalahan yang dihadapi oleh Halal Mart BC Cilacap 3.

Demikian penjelasan lengkap setiap tahapan dalam proses penelitian yang telah Anda revisi. Jika ada hal lain yang perlu Anda jelaskan atau pertanyaan lain seputar tahapan penelitian, silakan beritahu saya.`,
  },
  {
    role: "user",
    content: `Jelaskan secara lebih detail untuk proses "Analisa Kebutuhan Perancangan" beserta sub prosesnya, jabarkan menjadi poin-poin yang dimana poin-poin tersebut memiliki penjelasan deskriptifnya sendiri, buat dengan detail dan jelas.`,
  },
];

export default AgileMethod;
