/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const Paraphrase = [
  {
    role: "system",
    content: `Asumsikan kamu adalah seorang mentor (asisten) profesional yang berlandaskan ilmu pengetahuan di bidang Teknik Industri, Marketing, dan Teknologi.
Kamu diwajibkan untuk memahami, menganalisis permasalahan, berdasarkan konteks dari seorang Klien, serta membimbing Klien demi menyelesaikan permasalahan mereka`,
  },
  {
    role: "user",
    content: `Hal apa saja yang perlu diperhatikan untuk melakukan parafrase?`,
  },
  {
    role: "assistant",
    content: `Untuk melakukan parafrase dengan baik, ada beberapa hal yang perlu diperhatikan:

1. Memahami Konteks Asli:
   - Penting untuk memahami konteks kalimat atau teks asli dengan baik sebelum mencoba melakukan parafrase. Ini termasuk pemahaman terhadap pesan yang ingin disampaikan dan makna yang ingin diungkapkan.

2. Ubah Struktur Kalimat:
   - Salah satu aspek utama dalam parafrase adalah mengubah struktur kalimat asli. Ini bisa berarti mengubah urutan kata, mengganti kata-kata dengan sinonim, atau mengubah bentuk kalimat (dari kalimat langsung menjadi kalimat tidak langsung atau sebaliknya).

3. Menggunakan Sinonim:
   - Mengganti kata-kata dengan sinonim yang sesuai adalah cara umum untuk melakukan parafrase. Namun, perlu berhati-hati agar sinonim yang digunakan benar-benar sesuai dengan konteks.

4. Menghindari Plagiarisme:
   - Pastikan untuk tidak mengulangi struktur kalimat atau frasa secara harfiah dari sumber asli. Parafrase harus mencerminkan pemahaman dan interpretasi Anda sendiri atas konten tersebut.

5. Jaga Kesesuaian Konteks:
   - Pastikan bahwa parafrase yang Anda hasilkan masih sesuai dengan konteks umum dari teks asli. Jangan sampai mengubah makna aslinya secara signifikan.

6. Tidak Menambahkan Informasi Baru:
   - Jangan menambahkan informasi atau ide baru dalam parafrase, kecuali jika diminta. Parafrase seharusnya hanya merupakan reinterpretasi kata-kata yang sudah ada.

7. Konsultasi Sumber Referensi:
   - Jika Anda merasa kesulitan untuk melakukan parafrase, Anda dapat merujuk pada sumber referensi seperti kamus sinonim atau tesaurus untuk mencari kata-kata yang sesuai.

8. Latihan:
   - Parafrase adalah keterampilan yang dapat ditingkatkan melalui latihan. Cobalah untuk melakukan parafrase dari teks yang berbeda-beda untuk meningkatkan kemampuan Anda.

9. Periksa Plagiarisme:
   - Setelah melakukan parafrase, pastikan untuk menjalankan cek plagiarisme untuk memastikan bahwa teks yang Anda hasilkan tidak memiliki kesamaan signifikan dengan teks asli.

Dengan memperhatikan hal-hal di atas, Anda dapat melakukan parafrase dengan lebih efektif dan menghasilkan teks yang lebih orisinal serta sesuai dengan kebutuhan Anda.`,
  },
  {
    role: "user",
    content: `Asumsikan kamu adalah peneliti yang sedang akan melakukan parafrase.`,
  },
  {
    role: "assistant",
    content: `Tentu, sebagai seorang peneliti yang ingin melakukan parafrase, ada beberapa hal yang perlu saya perhatikan. Parafrase dalam konteks penelitian seringkali digunakan untuk menghindari plagiarisme dan untuk mengungkapkan ide atau temuan dalam bahasa yang berbeda. Berikut adalah beberapa langkah yang saya akan ambil:

1. Pahami Materi Asli:
   - Pertama-tama, saya akan memahami dengan baik materi asli yang ingin saya parafrase. Ini mencakup pemahaman mendalam tentang konsep, teori, atau temuan yang terkandung dalam teks asli.

2. Identifikasi Poin Utama:
   - Saya akan mengidentifikasi poin-poin utama atau pesan yang ingin saya pertahankan dalam parafrase. Ini akan membantu saya memastikan bahwa inti dari materi asli tetap terjaga.

3. Jangan Ubah Makna Asli:
   - Salah satu prinsip utama dalam melakukan parafrase dalam penelitian adalah untuk tidak mengubah makna asli dari teks tersebut. Saya akan memastikan bahwa ide dan konsep utama tetap sama.

4. Ganti Kata-Kata dengan Bijak:
   - Saya akan mengganti kata-kata atau frasa dengan bijak, menggunakan sinonim atau variasi kata yang tepat, tanpa mengorbankan makna. Penggunaan kata-kata yang benar dan sesuai konteks sangat penting.

5. Sesuaikan Struktur Kalimat:
   - Saya akan memperhatikan struktur kalimat asli dan berusaha untuk mengubahnya agar menjadi unik dalam parafrase, tetapi masih mudah dimengerti.

6. Cek Plagiarisme:
   - Setelah melakukan parafrase, saya akan menjalankan cek plagiarisme untuk memastikan bahwa teks yang saya hasilkan tidak memiliki kesamaan signifikan dengan sumber asli.

7. Beri Kredit yang Sesuai:
   - Jika saya menggunakan ide atau temuan dari sumber asli, saya akan memberikan kredit yang sesuai dengan mengutip sumber tersebut sesuai dengan gaya penulisan yang diperlukan.

8. Review dan Koreksi:
   - Saya akan melakukan review terhadap parafrase yang telah saya hasilkan dan memastikan bahwa itu sesuai dengan kebutuhan penelitian saya. Jika diperlukan, saya akan melakukan koreksi.

Parafrase dalam penelitian adalah penting untuk menjaga integritas akademik dan menghindari plagiarisme. Selain itu, kemampuan untuk melakukan parafrase dengan baik juga membantu dalam mengkomunikasikan ide atau temuan dengan cara yang lebih jelas atau tepat.`,
  },
  {
    role: "user",
    content: `Kedepannya saya akan memberikan kalimat dengan tanda "###" sebagai pemisah antara kalimat lainnya.
Hal yang harus kamu lakukan adalah parafrase kalimat tersebut untuk digunakan dalam makalah akademis.
Respon dengan format:
[no urut kalimat]
[kalimat yang setelah di parafrase]

Tunggu hingga saya memberikan kalimatnya.`,
  },
  {
    role: "assistant",
    content: `Tentu, saya siap membantu Anda dalam melakukan parafrase kalimat-kalimat tersebut. Silakan berikan kalimat-kalimat yang perlu diparafrase dengan menggunakan tanda "###" sebagai pemisah antara kalimat.

Saya akan menanggapi setiap kalimat yang Anda berikan dengan format yang Anda minta. Silakan berikan kalimat nya.`,
  },
  {
    role: "user",
    content: `Berikut adalah kumpulan kalimat dengan tanda "###" sebagai pemisah:

###
Customer needs sering juga disebut dengan voice of customers. Item ini mengandung hal – hal yang dibutuhkan oleh konsumen dan masih bersifat umum, sehingga sulit untuk langsung diimplementasikan. Customer needs dapat dilakukan dengan melalui penelitian terhadap keinginan konsumen.
###
Importance rating merupakan tingkat kepentingan dari voice of customer dan diperoleh dari hasil perhitungan kuesioner yang disebarkan kepada pelanggan. Perhitungan kuesioner ini bisa dilakukan dengan berbagai cara baik dengan menggunakan skala likert ataupun menggunakan matriks paired comparison.
###
Analisis ini dibuat berdasarkan pengumpulan data yang diperoleh dari konsumen tentang penyebaran produk di pasar dibandingkan dengan pesaing produk sejenis dan segmen pasar yang sama.
###
Technical requirements merupakan pengembangan dari customer needs atau merupakan penerjemahan kebutuhan konsumen dalam bentuk teknis agar sebuah produk dapat dibentuk secara langsung.
###
Agar diperoleh nilai secara kualitatif maka antara Whats dan Hows merupakan langkah selanjutnya untuk menemukan bobot. Dalam menggambarkan hubungan menggunakan simbol – simbol, yang umumnya digunakan dalam menjelaskan hubungan tersebut antara lain:
###
Matrik korelasi terletak diatas House of Quality yang merupakan atap dan sebagai penentu dari struktur hubungan setiap item HOWs.
###
Bobot ditentukan dari hubungan korelasi antara customer requirement dan technical requirement yang ditentukan dari jenis hubungan yang berlangsung.
###
`,
  },
];

export default Paraphrase;
