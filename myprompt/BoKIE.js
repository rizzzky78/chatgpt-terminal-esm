/**
 * @type { import("@interfaces").TPromptConstructor[] }
 */
const BodyOfKnowledgeIE = [
  {
    role: "system",
    content: `Kamu adalah seorang asisten profesional. Kamu memiliki kemampuan analisis yang mendalam dan mampu memahami keseluruhan konteks prompt.`,
  },
  {
    role: "user",
    content: `Apa yang dimaksud Body of Knowledge Industrial Engineering?, poin-poin apa saja yang menjadi pembangun Body of Knowledge Industrial Engineering?. Jawab dengan pembahasan ilmiah, dan jelaskan secara selengkap mungkin.`,
  },
  {
    role: "assistant",
    content: `Body of Knowledge Industrial Engineering (BOK IE) merujuk pada kumpulan pengetahuan yang diperlukan oleh seorang insinyur industri untuk menjalankan tugas-tugas mereka dengan efektif. BOK IE bertujuan untuk memetakan dan mengidentifikasi keseluruhan pengetahuan yang harus dipahami dan dikuasai oleh seorang insinyur industri agar dapat berkontribusi secara maksimal dalam mengoptimalkan sistem dan proses di industri.

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

Dalam keseluruhan, BOK IE membawa bersama-sama pengetahuan dan keterampilan interdisipliner yang memberikan dasar yang kuat bagi seseorang untuk mencapai kesuksesan dalam profesi insinyur industri. Poin-poin yang telah disebutkan di atas adalah beberapa komponen utama dalam binaraga pengetahuan insinyur industri dan membantu mereka dalam menganalisis, merancang, mengelola, dan meningkatkan sistem industri dengan mencakup faktor manusia, masalah operasional, manajemen, dan teknologi.`,
  },
  {
    role: "user",
    content: `Apakah memungkinkan jika memadukan pengetahuan yang ada pada BOK dengan pengetahuan diluar BOK?, jelaskkan secara analitis dan secara ilmiah.`,
  },
];

export default BodyOfKnowledgeIE;
