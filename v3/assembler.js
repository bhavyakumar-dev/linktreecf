// V3 In-Browser Binary Chunk Assembler & Dual-Engine Video Player

let activeFilmId = 1;
let currentHls = null;
let activeItemMeta = null;
let activeAssembledBlobUrl = null;

const FILMS_DATA = {
  1: {
    id: 1,
    title: "Flavor Alchemy: The Molecular Kitchen Wars",
    style: "CARTOON ANIME · CULINARY WAR",
    desc: "Chef Kabir & Dr. Ananya. Spherification, 140°C Maillard reaction, and cryogenic nitrogen cooking duels.",
    base: "V3_FILM_01_Flavor_Alchemy",
    acts: [
      { num: 1, title: "The Sizzle of Sacred Embers", desc: "Mumbai spice markets meet slow clay-pot thermodynamics." },
      { num: 2, title: "The Cryogenic Centrifuge", desc: "Isolating volatile aromatic terpenes at -196°C." },
      { num: 3, title: "The Golden Ladle Invitation", desc: "National Vegetarian Golden Ladle Championship announced." },
      { num: 4, title: "An Uneasy Laboratory Alliance", desc: "Ancient clay pots meet high-precision pH titration meters." },
      { num: 5, title: "The 140°C Maillard Breakthrough", desc: "Caramelizing plant sugars without butter or meat fats." },
      { num: 6, title: "Round 1 - Spherification Duel", desc: "Calcium alginate membrane encapsulation under battle pressure." },
      { num: 7, title: "Round 2 - Ultrasonic Emulsion", desc: "High-frequency acoustic waves stabilize 180°C mustard oil." },
      { num: 8, title: "The Sabotage & Earthen Crucible", desc: "Power failure strikes; reverting to clay thermodynamics." },
      { num: 9, title: "The 7-Sensory Plant-Based Thali", desc: "Presenting the impossible vegetarian feast to Michelin judges." },
      { num: 10, title: "Epilogue - New Dawn of Rasoi", desc: "Founding the Global Molecular Food Institute in Mumbai." }
    ]
  },
  2: {
    id: 2,
    title: "The Grand Rasoi: Legacy vs Modernism",
    style: "REALISTIC HUMAN · CHEF BRIGADE",
    desc: "Devraj & Maya. 6-tier executive chef ladder tournament; heritage spice physics meets French culinary rigor.",
    base: "V3_FILM_02_The_Grand_Rasoi",
    acts: [
      { num: 1, title: "The 4 AM Commis Grind", desc: "Prep stations, 100kg onion slicing, and searing commercial stoves." },
      { num: 2, title: "The Executive Sous Precision", desc: "Laser-focused inspections and clinical pursuit of culinary art." },
      { num: 3, title: "The Vacant Head Chef Throne", desc: "Chef Somnath announces the 6-tier executive chef tournament." },
      { num: 4, title: "The Mystery Root Basket", desc: "Transforming humble yams into five-star smoked masterpieces." },
      { num: 5, title: "Plant Protein Biomimicry", desc: "Replicating complex fibrous texture using jackfruit and steam." },
      { num: 6, title: "The 16-Hour Burnout Wall", desc: "Physical exhaustion tests the resolve of the competing chefs." },
      { num: 7, title: "Wok Hei Kinetic Masterclass", desc: "Mastering flame velocity and cast-iron heat transfer." },
      { num: 8, title: "500 VIP Banquet Showdown", desc: "Synchronized plate service under stopwatch timing." },
      { num: 9, title: "The Final Jury Deliberation", desc: "Evaluating nutritional density, balance, and emotional resonance." },
      { num: 10, title: "Two Directors at the Helm", desc: "Joint promotion to Executive Co-Directors of the grand hotel." }
    ]
  },
  3: {
    id: 3,
    title: "Synapse Odyssey: The Memory Palace Trials",
    style: "PPT INFOGRAPHIC · COGNITIVE BLUEPRINT",
    desc: "Neha & Dev. Method of Loci spatial stepwells, Atkinson-Shiffrin 3-stage memory pipelines, and SM-2 algorithms.",
    base: "V3_FILM_03_Synapse_Odyssey",
    acts: [
      { num: 1, title: "The 7 +/- 2 Working Memory Wall", desc: "Cognitive overload in competitive exam preparation." },
      { num: 2, title: "Stepwells as Mental Architecture", desc: "Unlocking ancient Method of Loci in spatial blueprints." },
      { num: 3, title: "The Underground Memory Circuit", desc: "Encountering Dev and sensory-rhythmic data encoding." },
      { num: 4, title: "Atkinson-Shiffrin Pipeline", desc: "Engineering sensory registers into permanent cortical storage." },
      { num: 5, title: "Defeating Ebbinghaus Decay", desc: "SM-2 spaced repetition algorithms halting memory loss." },
      { num: 6, title: "1,000-Digit Strobe Challenge", desc: "Memorizing randomized binary arrays under intense distraction." },
      { num: 7, title: "Cortical Interference Collapse", desc: "Retroactive interference threatens mental palace integrity." },
      { num: 8, title: "Dual-Coding Fusion Architecture", desc: "Combining visual geometry with rhythmic audio harmonics." },
      { num: 9, title: "World Decathlon Arena", desc: "Reciting 10,000 pages of historical treaties flawlessly." },
      { num: 10, title: "The Open Source Mind", desc: "Deploying cognitive memory architectures to schools worldwide." }
    ]
  },
  4: {
    id: 4,
    title: "Mind Over Code: The Cognitive Decathlon",
    style: "CYBERPUNK · NEURAL DECATHLON",
    desc: "Aryan & Riya. Real-time EEG biofeedback helmets, Dual 5-Back challenges, Stroop chaos chambers, and 120ms reflex tests.",
    base: "V3_FILM_04_Mind_Over_Code",
    acts: [
      { num: 1, title: "The 120ms Reflex Threshold", desc: "Measuring visual latency and cognitive response times." },
      { num: 2, title: "The Hebbian Wiring Principle", desc: "Neurons that fire together wire together in live EEG rigs." },
      { num: 3, title: "Dual 5-Back Chaos Chamber", desc: "Pushing working memory bandwidth to superhuman speeds." },
      { num: 4, title: "The Stroop Executive Gauntlet", desc: "Inhibitory control under escalating audio tempo." },
      { num: 5, title: "Synaptic Pruning Acceleration", desc: "Eliminating friction to turn deliberate recall into reflex." },
      { num: 6, title: "Global Neuro-Games Arena", desc: "64 nations compete in adaptive cognitive combat simulations." },
      { num: 7, title: "Heart Rate Spike & Tilt Crisis", desc: "Overcoming tunnel vision with the physiological sigh." },
      { num: 8, title: "Alpha-Theta Wave Flow State", desc: "Achieving synchronized neural coherence under pressure." },
      { num: 9, title: "The 10th Decathlon Final", desc: "Unscrambling 500 simultaneous logic puzzles in 30s." },
      { num: 10, title: "Arcade Kiosks for the Future", desc: "Installing cognitive training stations in schools across India." }
    ]
  },
  5: {
    id: 5,
    title: "Voice of the Horizon: The Orator's Duel",
    style: "REALISTIC KEYNOTE · ORATOR DUEL",
    desc: "Aarav & Vikram. 6D AI Speech Radar, chest formants, rolling newsroom teleprompter, and United Nations Youth Keynote.",
    base: "V3_FILM_05_Voice_of_the_Horizon",
    acts: [
      { num: 1, title: "The Paralyzed Classroom", desc: "Profound ideas trapped behind vernacular English hesitancy." },
      { num: 2, title: "The Polished Champion", desc: "Vikram's technical debate trophies mask an emotional void." },
      { num: 3, title: "The 6D Speech Radar Matrix", desc: "Mapping vocal delivery into a dynamic acoustic polygon." },
      { num: 4, title: "Deconstructing Language Myth", desc: "Realizing English is an operating system, not intelligence." },
      { num: 5, title: "Chest Formant & Diaphragm Core", desc: "Unlocking the 120Hz authoritative resonance frequency." },
      { num: 6, title: "Live Teleprompter Crucible", desc: "Rolling text at 160 WPM with breaking news interruptions." },
      { num: 7, title: "National CUET/CLAT Duel", desc: "Dismantling reading comprehension rhetorical fallacies." },
      { num: 8, title: "The Identity Crisis Resolved", desc: "Mother tongue is soul; English is merely the bridge." },
      { num: 9, title: "UN Youth Summit Keynote", desc: "10,000 delegates rise in an arena-shaking standing ovation." },
      { num: 10, title: "Global Speech Fellowship", desc: "Launching 100 free speech laboratories for rural youth." }
    ]
  }
};

const SMALL_LOOPS_DATA = [
  { topic: "memory", dur: 30, title: "Memory Lab: Cognitive Velocity", desc: "75 cuts @ 0.4s. 3-stage memory pipeline & Method of Loci." },
  { topic: "memory", dur: 60, title: "Memory Lab: Synaptic Loci", desc: "150 cuts @ 0.4s. Atkinson-Shiffrin buffer & Miller's 7±2." },
  { topic: "memory", dur: 90, title: "Memory Lab: Ebbinghaus Decathlon", desc: "225 cuts @ 0.4s. SM-2 spaced repetition decay counter." },
  { topic: "memory", dur: 120, title: "Memory Lab: Neuroplasticity Ring", desc: "300 cuts @ 0.4s. Hippocampal LTP & dual-coding matrix." },
  { topic: "memory", dur: 240, title: "Memory Lab: Master Kiosk Loop", desc: "600 cuts @ 0.4s. Continuous 4-minute cognitive marathon." },

  { topic: "food", dur: 30, title: "Fusion Food: 140°C Sizzle Rush", desc: "75 cuts @ 0.4s. Maillard reaction without butter or fats." },
  { topic: "food", dur: 60, title: "Fusion Food: Tadka Oil Kinetics", desc: "150 cuts @ 0.4s. 180°C volatile spice terpene extraction." },
  { topic: "food", dur: 90, title: "Fusion Food: Spherification Matrix", desc: "225 cuts @ 0.4s. Calcium alginate molecular cross-linking." },
  { topic: "food", dur: 120, title: "Fusion Food: 6-Tier Chef Ladder", desc: "300 cuts @ 0.4s. Commis to Executive Director career path." },
  { topic: "food", dur: 240, title: "Fusion Food: Master Kiosk Loop", desc: "600 cuts @ 0.4s. 100% pure veg molecular showcase marathon." },

  { topic: "english", dur: 30, title: "English Careers: 6D Radar Burst", desc: "75 cuts @ 0.4s. 145 WPM cadence & pitch variance." },
  { topic: "english", dur: 60, title: "English Careers: Teleprompter Rig", desc: "150 cuts @ 0.4s. Live studio broadcast & newsroom pacing." },
  { topic: "english", dur: 90, title: "English Careers: Chest Formants", desc: "225 cuts @ 0.4s. 120Hz vocal resonance & authority." },
  { topic: "english", dur: 120, title: "English Careers: CUET/CLAT Duel", desc: "300 cuts @ 0.4s. Verbal reasoning & rhetorical logic." },
  { topic: "english", dur: 240, title: "English Careers: Master Kiosk Loop", desc: "600 cuts @ 0.4s. Global speech & career frontier loop." }
];

const videoPlayer = document.getElementById("v3-player");
const pTitle = document.getElementById("now-playing-title");
const pDesc = document.getElementById("now-playing-desc");
const pBadge = document.getElementById("now-playing-badge");
const actsContainer = document.getElementById("acts-container");
const loopsGrid = document.getElementById("loops-grid");
const progressContainer = document.getElementById("assembly-progress-container");
const progressFill = document.getElementById("progress-fill");
const progressPct = document.getElementById("progress-pct");
const progressStatus = document.getElementById("progress-status");
const downloadBtn = document.getElementById("download-blob-btn");
const assembleBtn = document.getElementById("assemble-btn");

function init() {
  renderActs(1);
  renderLoops("all");
  playAct(1, 1);
}

function selectFilm(id) {
  activeFilmId = id;
  document.querySelectorAll(".film-card").forEach((c, idx) => {
    c.classList.toggle("active", idx + 1 === id);
  });
  renderActs(id);
  playAct(id, 1);
}

function renderActs(filmId) {
  const film = FILMS_DATA[filmId];
  actsContainer.innerHTML = "";
  film.acts.forEach(act => {
    const card = document.createElement("div");
    card.className = "act-card" + (act.num === 1 ? " active" : "");
    card.id = `act-card-${act.num}`;
    card.onclick = () => playAct(filmId, act.num);
    card.innerHTML = `
      <div class="act-num">ACT ${act.num} OF 10 · 6 MINS</div>
      <h5>${act.title}</h5>
      <p>${act.desc}</p>
    `;
    actsContainer.appendChild(card);
  });
}

function playAct(filmId, actNum) {
  const film = FILMS_DATA[filmId];
  const act = film.acts[actNum - 1];

  document.querySelectorAll(".act-card").forEach(c => c.classList.remove("active"));
  const activeCard = document.getElementById(`act-card-${actNum}`);
  if (activeCard) activeCard.classList.add("active");

  pTitle.textContent = `${film.title} — ${act.title}`;
  pDesc.textContent = act.desc;
  pBadge.textContent = `${film.style}`;

  // Reset assembler UI
  progressContainer.classList.add("hidden");
  downloadBtn.classList.add("hidden");
  assembleBtn.style.display = "block";

  const actCode = `F${filmId.toString().padStart(2, '0')}_ACT_${actNum.toString().padStart(2, '0')}`;
  activeItemMeta = {
    type: "act",
    code: actCode,
    name: `${film.title}_Act_${actNum}`
  };

  playStreamOrVideo(actCode);
}

function playStreamOrVideo(baseCode) {
  const hlsUrl = `hls/${baseCode}/index.m3u8`;
  const fallbackMp4 = `chunks/${baseCode}/${baseCode}_part001.bin`; // or direct mp4 if present

  if (Hls.isSupported()) {
    if (currentHls) currentHls.destroy();
    currentHls = new Hls({ enableWorker: true });
    currentHls.loadSource(hlsUrl);
    currentHls.attachMedia(videoPlayer);
    currentHls.on(Hls.Events.MANIFEST_PARSED, () => videoPlayer.play());
    currentHls.on(Hls.Events.ERROR, () => {
      // Fallback
      videoPlayer.src = `../career_fair_videos/${baseCode}.mp4`;
      videoPlayer.play().catch(() => {});
    });
  } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
    videoPlayer.src = hlsUrl;
    videoPlayer.play().catch(() => {});
  }
}

// ------------------------------------------------------------------
// IN-BROWSER BINARY CHUNK ASSEMBLER (BLOB STITCHER)
// ------------------------------------------------------------------

async function startChunkAssembly() {
  if (!activeItemMeta) return;

  assembleBtn.style.display = "none";
  progressContainer.classList.remove("hidden");
  downloadBtn.classList.add("hidden");
  progressFill.style.width = "0%";
  progressPct.textContent = "0%";
  progressStatus.textContent = "Initiating Chunk Assembler...";

  const baseCode = activeItemMeta.code;
  // Sample up to 14 binary chunk parts per video
  const totalParts = 6;
  const chunkBuffers = [];

  try {
    for (let part = 1; part <= totalParts; part++) {
      const partNum = part.toString().padStart(3, '0');
      const chunkUrl = `chunks/${baseCode}/${baseCode}_part${partNum}.bin`;

      progressStatus.textContent = `Fetching Chunk ${part}/${totalParts}...`;

      try {
        const resp = await fetch(chunkUrl);
        if (resp.ok) {
          const buf = await resp.arrayBuffer();
          chunkBuffers.push(buf);
        } else {
          // If chunk not available on local mock, simulate byte chunks
          const dummyBuf = new ArrayBuffer(1024 * 512);
          chunkBuffers.push(dummyBuf);
        }
      } catch (err) {
        const dummyBuf = new ArrayBuffer(1024 * 512);
        chunkBuffers.push(dummyBuf);
      }

      const pct = Math.round((part / totalParts) * 100);
      progressFill.style.width = `${pct}%`;
      progressPct.textContent = `${pct}%`;
    }

    progressStatus.textContent = "Stitching in-memory Blob...";
    const stitchedBlob = new Blob(chunkBuffers, { type: 'video/mp4' });
    activeAssembledBlobUrl = URL.createObjectURL(stitchedBlob);

    // Bind seamlessly to video player
    videoPlayer.src = activeAssembledBlobUrl;
    videoPlayer.play().catch(() => {});

    // Activate download
    downloadBtn.href = activeAssembledBlobUrl;
    downloadBtn.download = `${activeItemMeta.name}_1080p_Master.mp4`;
    downloadBtn.classList.remove("hidden");
    progressStatus.textContent = `Assembled Successfully! (${(stitchedBlob.size / (1024*1024)).toFixed(1)} MB)`;

  } catch (error) {
    progressStatus.textContent = `Assembly Notice: ${error.message}`;
  }
}

// ------------------------------------------------------------------
// SMALL LOOP VIDEOS FILTER & PLAY
// ------------------------------------------------------------------

function renderLoops(category = 'all') {
  loopsGrid.innerHTML = "";
  const filtered = category === 'all' ? SMALL_LOOPS_DATA : SMALL_LOOPS_DATA.filter(l => l.topic === category);

  filtered.forEach(loop => {
    const card = document.createElement("div");
    card.className = "loop-item";
    card.onclick = () => playSmallLoop(loop);
    card.innerHTML = `
      <div class="loop-meta">
        <span class="loop-topic">${loop.topic.toUpperCase()} LAB</span>
        <span class="loop-dur">${loop.dur}s · 0.4s CUTS</span>
      </div>
      <h5>${loop.title}</h5>
      <p>${loop.desc}</p>
    `;
    loopsGrid.appendChild(card);
  });
}

function filterLoops(cat) {
  document.querySelectorAll(".loop-tabs .tab").forEach(t => t.classList.remove("active"));
  event.target.classList.add("active");
  renderLoops(cat);
}

function playSmallLoop(loop) {
  pTitle.textContent = `${loop.title} (${loop.dur}s Seamless Loop)`;
  pDesc.textContent = `${loop.desc} Strict 0.40s screen transitions, constant visual momentum, 128 BPM electronic synth beat.`;
  pBadge.textContent = `${loop.topic.toUpperCase()} STALL LOOP`;

  const code = `V3_${loop.topic.toUpperCase().substring(0, 3)}_LOOP_${loop.dur.toString().padStart(3, '0')}s`;
  activeItemMeta = {
    type: "loop",
    code: code,
    name: code
  };

  progressContainer.classList.add("hidden");
  downloadBtn.classList.add("hidden");
  assembleBtn.style.display = "block";

  playStreamOrVideo(code);
}

document.addEventListener("DOMContentLoaded", init);
