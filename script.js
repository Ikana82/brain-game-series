// ==========================================
// DATA DAFTAR 20 GAME (SERIES)
// ==========================================
const gamesList = [
  {
    id: 1,
    title: "Tebak Rumah Hewan",
    emoji: "🐶🏡",
    color: "from-sky-300 to-blue-400",
    active: true,
  },
  {
    id: 2,
    title: "Hitung Buah Segar",
    emoji: "🍎🔢",
    color: "from-emerald-300 to-green-400",
    active: true,
  },
  {
    id: 3,
    title: "Klasifikasi Warna",
    emoji: "🎨🔴",
    color: "from-amber-300 to-orange-400",
    active: true,
  },
  {
    id: 4,
    title: "Bayangan Misterius",
    emoji: "👥🐱",
    color: "from-purple-300 to-indigo-400",
    active: true,
  },
  {
    id: 5,
    title: "Pasangan Ibu & Anak",
    emoji: "🐔🐤",
    color: "from-rose-300 to-pink-400",
    active: true,
  },
  {
    id: 6,
    title: "Suara Hewan Jinak",
    emoji: "🐱🎵",
    color: "from-cyan-300 to-teal-400",
    active: true,
  },
  {
    id: 7,
    title: "Puzzle Bentuk Geometri",
    emoji: "🔺⭐",
    color: "from-yellow-300 to-amber-400",
    active: true,
  },
  {
    id: 8,
    title: "Logika Ukuran Besar Kecil",
    emoji: "🐘🐭",
    color: "from-lime-300 to-emerald-400",
    active: true,
  },
  {
    id: 9,
    title: "Mencari Jalan (Maze)",
    emoji: "🐹🧀",
    color: "from-orange-300 to-red-400",
    active: true,
  },
  {
    id: 10,
    title: "Lawan Kata (Antonim)",
    emoji: "☀️🌧️",
    color: "from-pink-300 to-fuchsia-400",
    active: true,
  },
  {
    id: 11,
    title: "Tebak Profesi Cita-cita",
    emoji: "👩‍🍳👨‍✈️",
    color: "from-sky-400 to-indigo-500",
    active: true,
  },
  {
    id: 12,
    title: "Pola Berulang (Pattern)",
    emoji: "🔴🔵🔴",
    color: "from-teal-300 to-cyan-400",
    active: true,
  },
  {
    id: 13,
    title: "Benda di Kamar Tidur",
    emoji: "🛏️🧸",
    color: "from-purple-400 to-pink-500",
    active: true,
  },
  {
    id: 14,
    title: "Kendaraan Darat Laut Udara",
    emoji: "🚗🚢✈️",
    color: "from-blue-400 to-sky-500",
    active: true,
  },
  {
    id: 15,
    title: "Memori Kartu Kembar",
    emoji: "🃏🧠",
    color: "from-amber-400 to-yellow-500",
    active: true,
  },
  {
    id: 16,
    title: "Tebak Huruf Vokal",
    emoji: "🅰️🐝",
    color: "from-emerald-400 to-teal-500",
    active: true,
  },
  {
    id: 17,
    title: "Hewan Nokturnal (Malam)",
    emoji: "🦉🦇",
    color: "from-violet-400 to-indigo-600",
    active: true,
  },
  {
    id: 18,
    title: "Kebiasaan Hidup Sehat",
    emoji: "🦷🍏",
    color: "from-rose-400 to-red-500",
    active: true,
  },
  {
    id: 19,
    title: "Mengenal Emosi Wajah",
    emoji: "😀😢",
    color: "from-orange-400 to-amber-500",
    active: true,
  },
  {
    id: 20,
    title: "Asal Makanan Kita",
    emoji: "🐄🥛",
    color: "from-fuchsia-400 to-purple-600",
    active: true,
  },
];

let globalStars = 0;
let currentGameId = null;

// ==========================================
// INITIALIZATION
// ==========================================
window.onload = function () {
  renderDashboard();
  loadStars();
};

function loadStars() {
  globalStars = parseInt(localStorage.getItem("brain_series_stars")) || 0;
  document.getElementById("total-stars").innerText = globalStars;
}

function addStars(points) {
  globalStars += points;
  document.getElementById("total-stars").innerText = globalStars;
  localStorage.setItem("brain_series_stars", globalStars);
}

function renderDashboard() {
  const container = document.getElementById("screen-dashboard");
  container.innerHTML = "";

  gamesList.forEach((game) => {
    const card = document.createElement("button");
    card.className = `group bg-gradient-to-b ${game.color} p-4 rounded-3xl border-4 border-white shadow-lg flex flex-col items-center justify-between h-44 transform hover:scale-105 hover:shadow-2xl active:scale-95 transition relative`;

    if (!game.active) {
      card.className += " opacity-60 cursor-not-allowed";
      card.onclick = () =>
        alertBiasa(
          "🔒 Coming Soon!",
          `Game "${game.title}" sedang dipersiapkan!`,
        );
    } else {
      card.onclick = () => launchGame(game.id);
    }

    card.innerHTML = `
      ${!game.active ? '<span class="absolute top-2 right-2 text-md">🔒</span>' : '<span class="absolute top-2 right-2 bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse">MAIN</span>'}
      <span class="text-5xl my-auto group-hover:animate-bounce">${game.emoji}</span>
      <div class="bg-white/90 text-indigo-900 font-bubble text-xs font-bold py-1.5 w-full rounded-xl text-center shadow-inner tracking-wide truncate px-1">
          ${game.id}. ${game.title}
      </div>
    `;
    container.appendChild(card);
  });
}

// ==========================================
// NAVIGATION ENGINE
// ==========================================
function launchGame(id) {
  currentGameId = id;
  document.getElementById("screen-dashboard").classList.add("hidden");
  document.getElementById("screen-arena").classList.remove("hidden");

  if (id === 1) startGame1();
  if (id === 2) startGame2();
  if (id === 3) startGame3();
  if (id === 4) startGame4();
  if (id === 5) startGame5();
  if (id === 6) startGame6();
  if (id === 7) startGame7();
  if (id === 8) startGame8();
  if (id === 9) startGame9();
  if (id === 10) startGame10();
  if (id === 11) startGame11();
  if (id === 12) startGame12();
  if (id === 13) startGame13();
  if (id === 14) startGame14();
  if (id === 15) startGame15();
  if (id === 16) startGame16();
  if (id === 17) startGame17();
  if (id === 18) startGame18();
  if (id === 19) startGame19();
  if (id === 20) startGame20();
}

function backToDashboard() {
  document.getElementById("screen-arena").classList.add("hidden");
  document.getElementById("screen-dashboard").classList.remove("hidden");
}

// ==========================================
// GAME CORE CODE (1-20 DENGAN BANK SOAL MELIMPAH)
// ==========================================

// --- GAME 1: TEBAK RUMAH HEWAN ---
function startGame1() {
  document.getElementById("game-title").innerText = "Tebak Rumah Hewan 🐶🏡";
  document.getElementById("game-instruction").innerText =
    "Di mana tempat tinggal hewan di bawah ini?";

  const questions = [
    {
      hewan: "🐟 (Ikan)",
      jawaban: "Laut 🌊",
      opsi: ["Darat 🏜️", "Laut 🌊", "Sarang 🪹"],
    },
    {
      hewan: "🐦 (Burung)",
      jawaban: "Sarang 🪹",
      opsi: ["Kandang 🏠", "Sarang 🪹", "Air 💧"],
    },
    {
      hewan: "🦁 (Singa)",
      jawaban: "Goa 🪨",
      opsi: ["Goa 🪨", "Kolam 🌊", "Sarang 🪹"],
    },
    {
      hewan: "🐝 (Lebah)",
      jawaban: "Sarang Pohon 🪵",
      opsi: ["Laut 🌊", "Tanah 🏜️", "Sarang Pohon 🪵"],
    },
    {
      hewan: "🐜 (Semut)",
      jawaban: "Dalam Tanah 🕳️",
      opsi: ["Dalam Tanah 🕳️", "Awan ☁️", "Air 🌊"],
    },
    {
      hewan: "🐸 (Katak)",
      jawaban: "Kolam Air 🐸",
      opsi: ["Sarang 🪹", "Kolam Air 🐸", "Gurun 🏜️"],
    },
    {
      hewan: "🕷️ (Laba-laba)",
      jawaban: "Jaring Sutra 🕸️",
      opsi: ["Jaring Sutra 🕸️", "Goa 🪨", "Laut 🌊"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-7xl mb-6 animate-pulse">${q.hewan.split(" ")[0]}</div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 1)" class="py-3 bg-indigo-50 border-2 border-indigo-200 hover:bg-indigo-500 hover:text-white font-bubble text-lg font-bold rounded-2xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 2: HITUNG BUAH SEGAR ---
function startGame2() {
  document.getElementById("game-title").innerText = "Hitung Buah Segar 🍎🔢";
  document.getElementById("game-instruction").innerText =
    "Ayo hitung ada berapa jumlah buah di bawah ini!";

  const buahList = ["🍎", "🍌", "🍓", "🍇", "🍊", "🍉", "🍍", "🥑"];
  const buahPilihan = buahList[Math.floor(Math.random() * buahList.length)];
  const jumlah = Math.floor(Math.random() * 6) + 2; // Dinamis: Mengacak jumlah 2 sampai 7 buah!

  let urutanBuah = "";
  for (let i = 0; i < jumlah; i++) {
    urutanBuah += buahPilihan;
  }

  const opsiBenar = jumlah.toString();
  const opsiSalah1 = (jumlah + 1).toString();
  const opsiSalah2 = (jumlah - 1).toString();
  const opsiGabungan = [opsiBenar, opsiSalah1, opsiSalah2].sort(
    () => Math.random() - 0.5,
  );

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-5xl tracking-widest mb-8 max-w-md bg-amber-50 p-4 rounded-2xl border-2 border-dashed border-amber-300">${urutanBuah}</div>
    <div class="flex gap-4">
        ${opsiGabungan.map((opt) => `<button onclick="checkAnswer('${opt}', '${opsiBenar}', 2)" class="w-16 h-16 bg-emerald-100 border-3 border-emerald-400 hover:bg-emerald-500 hover:text-white font-bubble text-2xl font-black rounded-2xl transition shadow">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 3: KLASIFIKASI WARNA ---
function startGame3() {
  document.getElementById("game-title").innerText = "Klasifikasi Warna 🎨🔴";
  document.getElementById("game-instruction").innerText =
    "Benda di bawah ini berwarna apa ya?";

  const questions = [
    {
      benda: "🍎 (Apel)",
      jawaban: "Merah 🔴",
      opsi: ["Hijau 🟢", "Merah 🔴", "Kuning 🟡"],
    },
    {
      benda: "🍌 (Pisang)",
      jawaban: "Kuning 🟡",
      opsi: ["Biru 🔵", "Kuning 🟡", "Merah 🔴"],
    },
    {
      benda: "🐸 (Katak)",
      jawaban: "Hijau 🟢",
      opsi: ["Hijau 🟢", "Ungu 🟣", "Oranye 🟠"],
    },
    {
      benda: "🌊 (Laut)",
      jawaban: "Biru 🔵",
      opsi: ["Merah 🔴", "Cokelat 🟤", "Biru 🔵"],
    },
    {
      benda: "🥕 (Wortel)",
      jawaban: "Oranye 🟠",
      opsi: ["Oranye 🟠", "Kuning 🟡", "Hijau 🟢"],
    },
    {
      benda: "🍇 (Anggur)",
      jawaban: "Ungu 🟣",
      opsi: ["Putih ⚪", "Ungu 🟣", "Biru 🔵"],
    },
    {
      benda: "🍫 (Cokelat)",
      jawaban: "Cokelat 🟤",
      opsi: ["Cokelat 🟤", "Merah 🔴", "Kuning 🟡"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-7xl mb-6">${q.benda.split(" ")[0]}</div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 3)" class="py-4 bg-slate-50 border-2 border-slate-200 hover:border-purple-400 font-bold text-sm rounded-2xl transition shadow-sm flex flex-col items-center gap-1">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 4: BAYANGAN MISTERIUS ---
function startGame4() {
  document.getElementById("game-title").innerText = "Bayangan Misterius 👥🐱";
  document.getElementById("game-instruction").innerText =
    "Cari benda asli yang cocok dengan bayangan hitam di bawah!";

  const questions = [
    {
      bayangan: "⚫✈️ (Bayangan Pesawat)",
      jawaban: "✈️ Pesawat",
      opsi: ["🚗 Mobil", "✈️ Pesawat", "🚢 Kapal"],
    },
    {
      bayangan: "⚫🌲 (Bayangan Pohon)",
      jawaban: "🌲 Pohon",
      opsi: ["🌲 Pohon", "🌸 Bunga", "🏠 Rumah"],
    },
    {
      bayangan: "⚫🐘 (Bayangan Gajah)",
      jawaban: "🐘 Gajah",
      opsi: ["🐭 Tikus", "🐱 Kucing", "🐘 Gajah"],
    },
    {
      bayangan: "⚫🦋 (Bayangan Kupu)",
      jawaban: "🦋 Kupu-kupu",
      opsi: ["🪰 Lalat", "🦋 Kupu-kupu", "🐝 Lebah"],
    },
    {
      bayangan: "⚫🦀 (Bayangan Kepiting)",
      jawaban: "🦀 Kepiting",
      opsi: ["🐟 Ikan", "🐙 Gurita", "🦀 Kepiting"],
    },
    {
      bayangan: "⚫🎸 (Bayangan Gitar)",
      jawaban: "🎸 Gitar",
      opsi: ["🎸 Gitar", "🥁 Drum", "🎺 Terompet"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-7xl mb-6 bg-slate-800/10 p-4 rounded-3xl inline-block shadow-inner">${q.bayangan.split(" ")[0]}</div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 4)" class="py-3 bg-purple-50 border-2 border-purple-200 hover:bg-purple-500 hover:text-white font-bubble text-lg font-bold rounded-2xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 5: PASANGAN IBU & ANAK ---
function startGame5() {
  document.getElementById("game-title").innerText = "Pasangan Ibu & Anak 🐔🐤";
  document.getElementById("game-instruction").innerText =
    "Siapakah anak dari Ibu hewan di bawah ini?";

  const questions = [
    {
      ibu: "🐔 Ibu Ayam",
      jawaban: "🐤 Anak Ayam",
      opsi: ["🐤 Anak Ayam", "🐶 Anak Anjing", "🐱 Anak Kucing"],
    },
    {
      ibu: "🐮 Ibu Sapi",
      jawaban: "🐮 Anak Sapi",
      opsi: ["🐷 Anak Babi", "🐮 Anak Sapi", "🐰 Anak Kelinci"],
    },
    {
      ibu: "🐱 Ibu Kucing",
      jawaban: "🐱 Anak Kucing",
      opsi: ["🐯 Anak Harimau", "🐤 Anak Ayam", "🐱 Anak Kucing"],
    },
    {
      ibu: "🦆 Ibu Bebek",
      jawaban: "🦆 Anak Bebek",
      opsi: ["🐤 Anak Burung", "🦆 Anak Bebek", "🐸 Anak Katak"],
    },
    {
      ibu: "🐴 Ibu Kuda",
      jawaban: "🐴 Anak Kuda",
      opsi: ["🐴 Anak Kuda", "🐐 Anak Kambing", "🐭 Anak Tikus"],
    },
    {
      ibu: "🐑 Ibu Domba",
      jawaban: "🐑 Anak Domba",
      opsi: ["🐒 Anak Monyet", "🐑 Anak Domba", "🐶 Anak Anjing"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-4xl font-bubble font-bold text-slate-700 mb-2">Ibu Hewan:</div>
    <div class="text-7xl mb-6">${q.ibu.split(" ")[0]}</div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 5)" class="py-3 bg-rose-50 border-2 border-rose-200 hover:bg-rose-500 hover:text-white font-bubble text-lg font-bold rounded-2xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 6: SUARA HEWAN JINAK ---
function startGame6() {
  document.getElementById("game-title").innerText = "Suara Hewan Jinak 🐱🎵";
  document.getElementById("game-instruction").innerText =
    "Hewan mana yang mengeluarkan suara seperti di bawah?";

  const questions = [
    {
      suara: '"Meeong... Meeong..." 🐾',
      jawaban: "🐱 Kucing",
      opsi: ["🐶 Anjing", "🐱 Kucing", "🐤 Burung"],
    },
    {
      suara: '"Petokk... Petokk..." 🪶',
      jawaban: "🐔 Ayam",
      opsi: ["🐔 Ayam", "🦆 Bebek", "🐐 Kambing"],
    },
    {
      suara: '"Mbeee... Mbeee..." 🌿',
      jawaban: "🐐 Kambing",
      opsi: ["🐮 Sapi", "🦁 Singa", "🐐 Kambing"],
    },
    {
      suara: '"Guk... Guk... Guk..." 🦴',
      jawaban: "🐶 Anjing",
      opsi: ["🐶 Anjing", "🐱 Kucing", "🐵 Monyet"],
    },
    {
      suara: '"Kwek... Kwek... Kwek..." 🌊',
      jawaban: "🦆 Bebek",
      opsi: ["🐔 Ayam", "🦆 Bebek", "🐟 Ikan"],
    },
    {
      suara: '"Mooo... Mooo..." 🥛',
      jawaban: "🐮 Sapi",
      opsi: ["🐮 Sapi", "🐴 Kuda", "🐐 Kambing"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="bg-cyan-50 px-6 py-4 rounded-2xl border-2 border-dashed border-cyan-300 font-bubble text-xl font-bold text-cyan-800 mb-6 max-w-xs mx-auto animate-pulse">
        ${q.suara}
    </div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
        ${q.opsi
          .map(
            (opt) => `
            <button onclick="checkAnswer('${opt}', '${q.jawaban}', 6)" class="py-4 bg-slate-50 border-2 border-slate-200 hover:border-cyan-400 font-bubble text-lg font-bold rounded-2xl transition shadow-sm flex flex-col items-center gap-1">
                <span class="text-4xl">${opt.split(" ")[0]}</span>
                <span class="text-xs text-slate-600">${opt.split(" ")[1]}</span>
            </button>
        `,
          )
          .join("")}
    </div>
  `;
}

// --- GAME 7: PUZZLE BENTUK GEOMETRI ---
function startGame7() {
  document.getElementById("game-title").innerText =
    "Puzzle Bentuk Geometri 🔺⭐";
  document.getElementById("game-instruction").innerText =
    "Benda di bawah ini mirip bentuk geometri apa ya?";

  const questions = [
    {
      benda: "🍕 Potongan Pizza",
      jawaban: "Segitiga 🔺",
      opsi: ["Kotak 🔲", "Lingkaran 🟡", "Segitiga 🔺"],
    },
    {
      benda: "🍩 Donat Manis",
      jawaban: "Lingkaran 🟡",
      opsi: ["Lingkaran 🟡", "Segitiga 🔺", "Kotak 🔲"],
    },
    {
      benda: "🎁 Kotak Kado",
      jawaban: "Kotak 🔲",
      opsi: ["Bintang ⭐", "Kotak 🔲", "Lingkaran 🟡"],
    },
    {
      benda: "🛏️ Kasur Tidur",
      jawaban: "Persegi Panjang 🪵",
      opsi: ["Persegi Panjang 🪵", "Segitiga 🔺", "Lingkaran 🟡"],
    },
    {
      benda: "🪙 Koin Uang",
      jawaban: "Lingkaran 🟡",
      opsi: ["Kotak 🔲", "Bintang ⭐", "Lingkaran 🟡"],
    },
    {
      benda: "🗺️ Atap Rumah",
      jawaban: "Segitiga 🔺",
      opsi: ["Lingkaran 🟡", "Segitiga 🔺", "Kotak 🔲"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-4xl font-bubble font-bold text-slate-700 mb-2">${q.benda}</div>
    <div class="text-7xl mb-6">${q.benda.split(" ")[0]}</div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 7)" class="py-3 bg-yellow-50 border-2 border-yellow-200 hover:bg-amber-400 hover:text-white font-bubble text-lg font-bold rounded-2xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 8: LOGIKA UKURAN BESAR KECIL ---
function startGame8() {
  document.getElementById("game-title").innerText = "Ukuran Besar Kecil 🐘🐭";
  document.getElementById("game-instruction").innerText =
    "Ayo tebak logika ukuran hewan berikut!";

  const questions = [
    {
      tanya: "Hewan mana yang ukurannya LEBIH BESAR? 🏆",
      jawaban: "🐘 Gajah",
      opsi: ["🐭 Tikus", "🐘 Gajah"],
    },
    {
      tanya: "Hewan mana yang ukurannya LEBIH KECIL? 🔍",
      jawaban: "🪰 Lalat",
      opsi: ["🐱 Kucing", "🪰 Lalat"],
    },
    {
      tanya: "Hewan mana yang ukurannya LEBIH BESAR? 🏆",
      jawaban: "🐳 Paus",
      opsi: ["🐳 Paus", "🦀 Kepiting"],
    },
    {
      tanya: "Benda mana yang ukurannya LEBIH KECIL? 🔍",
      jawaban: "🍒 Ceri",
      opsi: ["🍉 Semangka", "🍒 Ceri"],
    },
    {
      tanya: "Benda mana yang ukurannya LEBIH BESAR? 🏆",
      jawaban: "🚌 Bus",
      opsi: ["🚲 Sepeda", "🚌 Bus"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-md font-bold text-slate-600 mb-6 bg-lime-50 p-3 rounded-xl border border-lime-200 max-w-sm">${q.tanya}</div>
    <div class="flex gap-6 justify-center w-full">
        ${q.opsi
          .map(
            (opt) => `
            <button onclick="checkAnswer('${opt}', '${q.jawaban}', 8)" class="p-6 bg-white border-3 border-lime-300 hover:border-lime-500 rounded-3xl transition shadow-md flex flex-col items-center gap-2 transform hover:scale-105 active:scale-95">
                <span class="text-6xl">${opt.split(" ")[0]}</span>
                <span class="font-bubble text-md font-bold text-indigo-900">${opt.split(" ")[1] || opt}</span>
            </button>
        `,
          )
          .join("")}
    </div>
  `;
}

// --- GAME 9: MENCARI JALAN (MAZE LOGIC) ---
function startGame9() {
  document.getElementById("game-title").innerText = "Mencari Jalan 🐹🧀";
  document.getElementById("game-instruction").innerText =
    "Bantu hewan lucu ini menemukan makanan kesukaannya!";

  const questions = [
    {
      subjek: "🐹 Hamster lucu ingin makan...",
      jawaban: "🧀 Keju",
      opsi: ["🍌 Pisang", "🧀 Keju", "🌿 Rumput"],
    },
    {
      subjek: "🐰 Kelinci melompat mencari...",
      jawaban: "🥕 Wortel",
      opsi: ["🥕 Wortel", "🐟 Ikan", "🍖 Daging"],
    },
    {
      subjek: "🐵 Monyet cerdik memanjat pohon mengambil...",
      jawaban: "🍌 Pisang",
      opsi: ["🧀 Keju", "🍖 Daging", "🍌 Pisang"],
    },
    {
      subjek: "🐻 Beruang madu lapar mencari...",
      jawaban: "🍯 Madu",
      opsi: ["🍯 Madu", "🥕 Wortel", "🧀 Keju"],
    },
    {
      subjek: "🐱 Kucing manis mengejar makanan...",
      jawaban: "🐟 Ikan",
      opsi: ["🌿 Rumput", "🐟 Ikan", "🍌 Pisang"],
    },
    {
      subjek: "🐶 Anjing setia mencari makanan...",
      jawaban: "🍖 Daging",
      opsi: ["🍖 Daging", "🧀 Keju", "🥕 Wortel"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="flex items-center gap-4 mb-6 bg-orange-50 p-4 rounded-2xl border border-orange-200 font-bold text-slate-700 text-sm">
        <span class="text-5xl animate-bounce">${q.subjek.split(" ")[0]}</span>
        <span>${q.subjek}</span>
    </div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
        ${q.opsi
          .map(
            (opt) => `
            <button onclick="checkAnswer('${opt}', '${q.jawaban}', 9)" class="py-4 bg-white border-2 border-orange-200 hover:bg-orange-500 hover:text-white font-bubble text-md font-bold rounded-2xl transition shadow-sm flex flex-col items-center gap-1">
                <span class="text-4xl">${opt.split(" ")[0]}</span>
                <span class="text-xs">${opt.split(" ")[1] || opt}</span>
            </button>
        `,
          )
          .join("")}
    </div>
  `;
}

// --- GAME 10: LAWAN KATA (ANTONIM) ---
function startGame10() {
  document.getElementById("game-title").innerText = "Lawan Kata (Antonim) ☀️🌧️";
  document.getElementById("game-instruction").innerText =
    "Apa lawan kata atau kebalikan dari situasi di bawah?";

  const questions = [
    {
      kata: "☀️ SIANG (Terang)",
      jawaban: "🌧️ MALAM (Gelap)",
      opsi: ["🔥 PANAS", "🌧️ MALAM (Gelap)", "❄️ DINGIN"],
    },
    {
      kata: "🔥 PANAS",
      jawaban: "❄️ DINGIN",
      opsi: ["❄️ DINGIN", "☀️ TERANG", "☁️ BERAWAN"],
    },
    {
      kata: "🐘 BESAR",
      jawaban: "🐭 KECIL",
      opsi: ["🦒 TINGGI", "🦁 BERANI", "🐭 KECIL"],
    },
    {
      kata: "🥶 DINGIN",
      jawaban: "🔥 PANAS",
      opsi: ["🌧️ BASAH", "🔥 PANAS", "☀️ TERANG"],
    },
    {
      kata: "🐢 LAMBAT",
      jawaban: "🚀 CEPAT",
      opsi: ["🚀 CEPAT", "💤 TIDUR", "📦 DIAM"],
    },
    {
      kata: "😀 SENANG",
      jawaban: "😢 SEDIH",
      opsi: ["😡 MARAH", "😎 KEREN", "😢 SEDIH"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">Lawan kata dari:</div>
    <div class="text-3xl font-bubble font-black text-rose-500 bg-pink-50 border-2 border-pink-200 px-6 py-2 rounded-2xl mb-6 inline-block">${q.kata}</div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 10)" class="py-3 bg-white border-2 border-pink-200 hover:bg-pink-500 hover:text-white font-bubble text-lg font-bold rounded-2xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 11: TEBAK PROFESI CITA-CITA ---
function startGame11() {
  document.getElementById("game-title").innerText =
    "Tebak Profesi Cita-cita 👩‍🍳👨‍✈️";
  document.getElementById("game-instruction").innerText =
    "Siapakah tokoh pekerjaan yang ditanyakan?";

  const questions = [
    {
      tugas: "Mengendarai pesawat terbang tinggi di awan ✈️",
      jawaban: "👨‍✈️ Pilot",
      opsi: ["👨‍🚒 Pemadam", "👨‍✈️ Pilot", "👨‍⚕️ Dokter"],
    },
    {
      tugas: "Memasak makanan lezat di restoran 🍳",
      jawaban: "👩‍🍳 Koki",
      opsi: ["👩‍🍳 Koki", "👩‍🏫 Guru", "👮 Polisi"],
    },
    {
      tugas: "Membantu menyembuhkan orang yang sakit 🏥",
      jawaban: "👨‍⚕️ Dokter",
      opsi: ["👨‍✈️ Pilot", "👨‍🌾 Petani", "👨‍⚕️ Dokter"],
    },
    {
      tugas: "Mengajar anak-anak di kelas sekolah dengan sabar 📚",
      jawaban: "👩‍🏫 Guru",
      opsi: ["👮 Polisi", "👩‍🏫 Guru", "👩‍🍳 Koki"],
    },
    {
      tugas: "Menjaga keamanan lingkungan dan mengatur lalu lintas 👮",
      jawaban: "👮 Polisi",
      opsi: ["👮 Polisi", "👨‍🚒 Pemadam", "👨‍🌾 Petani"],
    },
    {
      tugas: "Menanam padi di sawah untuk menghasilkan beras 🌾",
      jawaban: "👨‍🌾 Petani",
      opsi: ["👨‍✈️ Pilot", "👨‍⚕️ Dokter", "👨‍🌾 Petani"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="bg-indigo-50 p-4 rounded-2xl border border-indigo-200 font-bold text-slate-700 text-sm mb-6 max-w-sm">${q.tugas}</div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 11)" class="py-3 bg-white border-2 border-indigo-200 hover:bg-indigo-500 hover:text-white font-bubble text-lg font-bold rounded-2xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 12: POLA BERULANG (PATTERN LOGIC) ---
function startGame12() {
  document.getElementById("game-title").innerText =
    "Pola Berulang (Pattern) 🔴🔵🔴";
  document.getElementById("game-instruction").innerText =
    "Lanjutkan pola warna balon di bawah ini!";

  const questions = [
    {
      pola: "🎈🔴 🎈🔵 🎈🔴 🎈🔵 ... ?",
      jawaban: "🎈🔴 Merah",
      opsi: ["🎈🔴 Merah", "🎈🔵 Biru", "🎈🟢 Hijau"],
    },
    {
      pola: "🎈🟢 🎈🟢 🎈🟡 🎈🟢 🎈🟢 ... ?",
      jawaban: "🎈🟡 Kuning",
      opsi: ["🎈🟢 Hijau", "🎈🟡 Kuning", "🎈🟣 Ungu"],
    },
    {
      pola: "🎈🔵 🎈🟡 🎈🔵 🎈🟡 ... ?",
      jawaban: "🎈🔵 Biru",
      opsi: ["🎈🔴 Merah", "🎈🔵 Biru", "🎈🟢 Hijau"],
    },
    {
      pola: "🎈🔴 🎈🔴 🎈🟢 🎈🔴 🎈🔴 ... ?",
      jawaban: "🎈🟢 Hijau",
      opsi: ["🎈🔴 Merah", "🎈🟡 Kuning", "🎈🟢 Hijau"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-3xl tracking-widest bg-teal-50 p-4 rounded-2xl border-2 border-dashed border-teal-300 font-bubble font-bold text-teal-800 mb-6">${q.pola}</div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 12)" class="py-3 bg-white border-2 border-teal-200 hover:bg-teal-500 hover:text-white font-bubble text-sm font-bold rounded-xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 13: BENDA DI SEKITAR ---
function startGame13() {
  document.getElementById("game-title").innerText =
    "Benda di Sekitar Kita 🛏️🧸";
  document.getElementById("game-instruction").innerText =
    "Manakah benda yang sesuai dengan tempatnya?";

  const questions = [
    {
      tempat: "Kamar Tidur 🛏️",
      jawaban: "🧸 Boneka",
      opsi: ["🧸 Boneka", "🍳 Wajan", "🌳 Pohon"],
    },
    {
      tempat: "Dapur Rumah 🍳",
      jawaban: "🍽️ Piring",
      opsi: ["🛏️ Kasur", "🍽️ Piring", "Mobil 🚗"],
    },
    {
      tempat: "Ruang Kelas 🏫",
      jawaban: "📋 Papan Tulis",
      opsi: ["🛋️ Sofa", "📋 Papan Tulis", "🚿 Shower"],
    },
    {
      tempat: "Kamar Mandi 🚿",
      jawaban: "🧼 Sabun",
      opsi: ["🧼 Sabun", "📺 Televisi", "🛏️ Bantal"],
    },
    {
      tempat: "Taman Bermain 🛝",
      jawaban: "Ayunan 🛝",
      opsi: ["Kulkas 🧊", "Kompor 🔥", "Ayunan 🛝"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-md font-bold text-slate-500 mb-4">Cari benda di: <span class="text-indigo-900 font-black">${q.tempat}</span></div>
    <div class="grid grid-cols-3 gap-4 w-full max-w-sm">
        ${q.opsi
          .map(
            (opt) => `
            <button onclick="checkAnswer('${opt}', '${q.jawaban}', 13)" class="p-4 bg-purple-50 border-2 border-purple-200 hover:border-purple-500 rounded-2xl transition shadow flex flex-col items-center gap-2">
                <span class="text-4xl">${opt.split(" ")[0]}</span>
                <span class="text-xs font-bold text-slate-600">${opt.split(" ")[1] || opt}</span>
            </button>
        `,
          )
          .join("")}
    </div>
  `;
}

// --- GAME 14: KENDARAAN DARAT LAUT UDARA ---
function startGame14() {
  document.getElementById("game-title").innerText = "Jalur Kendaraan 🚗🚢✈️";
  document.getElementById("game-instruction").innerText =
    "Di manakah tempat berjalan kendaraan di bawah ini?";

  const questions = [
    {
      unit: "🚢 Kapal Laut",
      jawaban: "Di Air 🌊",
      opsi: ["Di Rel 🛤️", "Di Udara ☁️", "Di Air 🌊"],
    },
    {
      unit: "✈️ Pesawat Terbang",
      jawaban: "Di Udara ☁️",
      opsi: ["Di Udara ☁️", "Di Jalan 🛣️", "Di Air 🌊"],
    },
    {
      unit: "🚂 Kereta Api",
      jawaban: "Di Rel 🛤️",
      opsi: ["Di Jalan 🛣️", "Di Rel 🛤️", "Di Udara ☁️"],
    },
    {
      unit: "🚗 Mobil Keluarga",
      jawaban: "Di Jalan 🛣️",
      opsi: ["Di Air 🌊", "Di Jalan 🛣️", "Di Rel 🛤️"],
    },
    {
      unit: "🚁 Helikopter",
      jawaban: "Di Udara ☁️",
      opsi: ["Di Udara ☁️", "Di Air 🌊", "Di Rel 🛤️"],
    },
    {
      unit: "Submarine 🚢 Kapal Selam",
      jawaban: "Di Dalam Air 🌊",
      opsi: ["Di Jalan 🛣️", "Di Rel 🛤️", "Di Dalam Air 🌊"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-7xl mb-4">${q.unit.split(" ")[0]}</div>
    <div class="text-xl font-bubble font-bold text-indigo-900 mb-6">${q.unit}</div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 14)" class="py-3 bg-blue-50 border-2 border-blue-200 hover:bg-blue-500 hover:text-white font-bubble text-lg font-bold rounded-2xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 15: MEMORI KARTU KEMBAR ---
function startGame15() {
  document.getElementById("game-title").innerText = "Memori Kartu Kembar 🃏🧠";
  document.getElementById("game-instruction").innerText =
    "Cari gambar emoji yang kembar atau sama persis!";

  const sets = [
    ["🦁", " Tiger 🐯", " Monyet 🐵"],
    ["🐼", " Koala 🐨", " Rubah 🦊"],
    ["🚗", " Roket 🚀", " Kereta 🚂"],
    ["🍕", " Burger 🍔", " Donat 🍩"],
    ["⚽", " Basket 🏀", " Tenis 🎾"],
  ];
  const items = sets[Math.floor(Math.random() * sets.length)];
  const target = items[Math.floor(Math.random() * items.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-sm font-bold text-slate-400 mb-2">Cari kembaran dari:</div>
    <div class="text-6xl bg-amber-50 p-4 rounded-full border-2 border-amber-300 inline-block mb-6 animate-pulse">${target.trim().split(" ")[0]}</div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-xs">
        ${items.map((item) => `<button onclick="checkAnswer('${item}', '${target}', 15)" class="py-4 bg-white border-2 border-amber-200 hover:bg-amber-400 hover:text-white text-4xl rounded-2xl transition shadow-md">${item.trim().split(" ")[0]}</button>`).join("")}
    </div>
  `;
}

// --- GAME 16: TEBAK HURUF VOKAL ---
function startGame16() {
  document.getElementById("game-title").innerText = "Tebak Huruf Vokal 🅰️🐝";
  document.getElementById("game-instruction").innerText =
    "Huruf vokal depan yang hilang dari nama hewan ini apa ya?";

  const questions = [
    { teks: "_ K A N (🐟)", jawaban: "I", opsi: ["A", "I", "U"] },
    { teks: "_ L L A (🦙)", jawaban: "U", opsi: ["E", "O", "U"] },
    { teks: "_ Y A M (🐓)", jawaban: "A", opsi: ["A", "I", "E"] },
    { teks: "_ L E T (🦉)", jawaban: "E", opsi: ["I", "E", "O"] },
    { teks: "_ L A N G (🦅)", jawaban: "E", opsi: ["A", "I", "E"] },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-4xl font-bubble font-black text-emerald-600 bg-emerald-50 border-2 border-dashed border-emerald-300 px-8 py-3 rounded-2xl mb-8 tracking-widest">${q.teks}</div>
    <div class="flex gap-4">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 16)" class="w-16 h-16 bg-white border-3 border-emerald-400 hover:bg-emerald-500 hover:text-white font-bubble text-2xl font-black rounded-2xl transition shadow-md">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 17: HEWAN NOKTURNAL (MALAM) ---
function startGame17() {
  document.getElementById("game-title").innerText =
    "Hewan Malam (Nokturnal) 🦉";
  document.getElementById("game-instruction").innerText =
    "Hewan mana yang suka bangun dan mencari makan di malam hari?";

  const questions = [
    {
      waktu: "Malam Hari 🌙",
      jawaban: "🦉 Burung Hantu",
      opsi: ["🐔 Ayam", "🦉 Burung Hantu", "🦋 Kupu-kupu"],
    },
    {
      waktu: "Siang Hari ☀️",
      jawaban: "🦋 Kupu-kupu",
      opsi: ["🦋 Kupu-kupu", "🦉 Burung Hantu", "🦇 Kelelawar"],
    },
    {
      waktu: "Malam Hari 🌙",
      jawaban: "🦇 Kelelawar",
      opsi: ["🐮 Sapi", "🐑 Domba", "🦇 Kelelawar"],
    },
    {
      waktu: "Siang Hari ☀️",
      jawaban: "🐿️ Tupai",
      opsi: ["🐿️ Tupai", "🦉 Burung Hantu", "🦇 Kelelawar"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-md font-bold text-slate-500 mb-4">Aktif di: <span class="text-violet-700 font-black">${q.waktu}</span></div>
    <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
        ${q.opsi.map((opt) => `<button onclick="checkAnswer('${opt}', '${q.jawaban}', 17)" class="py-3 bg-violet-50 border-2 border-violet-200 hover:bg-violet-500 hover:text-white font-bubble text-md font-bold rounded-xl transition shadow-sm">${opt}</button>`).join("")}
    </div>
  `;
}

// --- GAME 18: KEBIASAAN HIDUP SEHAT ---
function startGame18() {
  document.getElementById("game-title").innerText =
    "Kebiasaan Hidup Sehat 🦷🍏";
  document.getElementById("game-instruction").innerText =
    "Benda apa yang sesuai dengan aktivitas kesehatan berikut?";

  const questions = [
    {
      tanya: "Alat membersihkan gigi kita dari kuman 🦷",
      jawaban: "🪥 Sikat Gigi",
      opsi: ["🪥 Sikat Gigi", "🧼 Sabun Mandi", "Sisir 🪮"],
    },
    {
      tanya: "Benda untuk mencuci tangan bersih bebas kuman 🧼",
      jawaban: "🧼 Sabun",
      opsi: ["🪥 Sikat", "🧼 Sabun", "Handuk 🧼"],
    },
    {
      tanya: "Alat untuk merapikan rambut kusut 🪮",
      jawaban: "🪮 Sisir Rambut",
      opsi: ["🪥 Sikat Gigi", "🧼 Sabun", "🪮 Sisir Rambut"],
    },
    {
      tanya: "Cairan segar pelindung tubuh setelah olahraga 💧",
      jawaban: "🥛 Air Putih",
      opsi: ["🧃 Permen", "🥛 Air Putih", "🍕 Pizza"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-md font-bold text-slate-600 mb-6 bg-rose-50 p-3 rounded-xl border border-rose-200 max-w-sm">${q.tanya}</div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
        ${q.opsi
          .map(
            (opt) => `
            <button onclick="checkAnswer('${opt}', '${q.jawaban}', 18)" class="py-4 bg-white border-2 border-rose-200 hover:border-rose-500 font-bubble text-center rounded-2xl transition shadow-sm flex flex-col items-center gap-2">
                <span class="text-4xl">${opt.split(" ")[0]}</span>
                <span class="text-[11px] font-bold text-slate-600 leading-tight">${opt.split(" ")[1] || opt}</span>
            </button>
        `,
          )
          .join("")}
    </div>
  `;
}

// --- GAME 19: MENGENAL EMOSI WAJAH ---
function startGame19() {
  document.getElementById("game-title").innerText = "Mengenal Emosi Wajah 😀😢";
  document.getElementById("game-instruction").innerText =
    "Ekspresi mana yang sesuai dengan emosi di bawah?";

  const questions = [
    {
      emosi: "SENANG / BAHAGIA 🎉",
      jawaban: "😀 Senang",
      opsi: ["😢 Sedih", "😀 Senang", "😡 Marah"],
    },
    {
      emosi: "SEDIH / MENANGIS 💧",
      jawaban: "😢 Sedih",
      opsi: ["😢 Sedih", "😎 Keren", "😀 Senang"],
    },
    {
      emosi: "MARAH / JENGKOL 💢",
      jawaban: "😡 Marah",
      opsi: ["😡 Marah", "😴 Tidur", "😱 Takut"],
    },
    {
      emosi: "TERKEJUT / KAGET 📢",
      jawaban: "😱 Takut",
      opsi: ["😎 Keren", "😴 Tidur", "😱 Takut"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-sm text-slate-400 uppercase tracking-wide font-bold mb-1">Ekspresi wajah:</div>
    <div class="text-2xl font-bubble font-black text-orange-600 mb-6">${q.emosi}</div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
        ${q.opsi
          .map(
            (opt) => `
            <button onclick="checkAnswer('${opt}', '${q.jawaban}', 19)" class="p-4 bg-white border-2 border-orange-200 hover:border-orange-500 rounded-2xl transition shadow-md flex flex-col items-center gap-2 transform hover:scale-105">
                <span class="text-5xl">${opt.split(" ")[0]}</span>
                <span class="text-xs font-bold text-slate-500">${opt.split(" ")[1] || opt}</span>
            </button>
        `,
          )
          .join("")}
    </div>
  `;
}

// --- GAME 20: ASAL MAKANAN KITA ---
function startGame20() {
  document.getElementById("game-title").innerText = "Asal Makanan Kita 🐄🥛";
  document.getElementById("game-instruction").innerText =
    "Dari manakah asal asupan nutrisi sehat di bawah ini?";

  const questions = [
    {
      produk: "🥛 Minuman Susu Segar",
      jawaban: "Sapi 🐄",
      opsi: ["Ayam 🐔", "Sapi 🐄", "Bebek 🦆"],
    },
    {
      produk: "🥚 Telur Dadar Lezat",
      jawaban: "Ayam 🐔",
      opsi: ["Ayam 🐔", "Kambing 🐐", "Ikan 🐟"],
    },
    {
      produk: "🍯 Madu Manis Alami",
      jawaban: "Lebah 🐝",
      opsi: ["Katak 🐸", "Burung 🐦", "Lebah 🐝"],
    },
    {
      produk: "🧀 Keju Lembut",
      jawaban: "Sapi 🐄",
      opsi: ["Sapi 🐄", "Semut 🐜", "Ikan 🐟"],
    },
  ];
  const q = questions[Math.floor(Math.random() * questions.length)];

  const area = document.getElementById("game-content-area");
  area.innerHTML = `
    <div class="text-6xl mb-2 animate-bounce">${q.produk.split(" ")[0]}</div>
    <div class="text-lg font-bubble font-bold text-purple-800 mb-6">Asal dari makanan: ${q.produk}</div>
    <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
        ${q.opsi
          .map(
            (opt) => `
            <button onclick="checkAnswer('${opt}', '${q.jawaban}', 20)" class="py-4 bg-white border-2 border-purple-200 hover:bg-purple-500 hover:text-white rounded-2xl transition shadow-sm font-bubble font-bold text-md flex flex-col items-center gap-1">
                <span class="text-3xl">${opt.split(" ")[1] || opt.split(" ")[0]}</span>
                <span class="text-xs">${opt.split(" ")[0]}</span>
            </button>
        `,
          )
          .join("")}
    </div>
  `;
}

// ==========================================
// VALIDASI DAN POPUP ALERTS
// ==========================================
function checkAnswer(chosen, correct, gameId) {
  if (chosen.trim() === correct.trim()) {
    addStars(10);
    makeBurst();
    showPopupAlert(
      "🎉 Hebat!",
      "Jawabanmu benar! Dapat +10 Bintang Pintar! ⭐",
      "🎁",
    );

    setTimeout(() => {
      closeAlert();
      launchGame(gameId); // Otomatis mengacak variasi soal baru tanpa keluar arena!
    }, 1800);
  } else {
    showPopupAlert(
      "❌ Coba Lagi",
      "Ayo coba dipikirkan lagi sayang, kamu pasti bisa! 🥰",
      "🧠",
    );
  }
}

function showPopupAlert(title, body, emoji) {
  document.getElementById("alert-emoji").innerText = emoji;
  document.getElementById("alert-title").innerText = title;
  document.getElementById("alert-body").innerText = body;
  document.getElementById("alert-modal").classList.remove("hidden");
}

function closeAlert() {
  document.getElementById("alert-modal").classList.add("hidden");
}

function alertBiasa(title, text) {
  showPopupAlert(title, text, "✨");
}

// ==========================================
// CONFETTI BURST EFFECT
// ==========================================
function makeBurst() {
  isCelebrating = true;
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: Math.random() * 6 + 4,
      color: ["#f59e0b", "#10b981", "#3b82f6", "#ec4899", "#ef4444"][
        Math.floor(Math.random() * 5)
      ],
      spX: Math.random() * 6 - 3,
      spY: Math.random() * -6 - 2,
    });
  }

  function run() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach((p) => {
      p.x += p.spX;
      p.y += p.spY;
      p.spY += 0.2;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      if (p.y < canvas.height) alive = true;
    });
    if (alive) requestAnimationFrame(run);
  }
  run();
}
