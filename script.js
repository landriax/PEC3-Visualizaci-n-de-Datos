// ======================
// DATOS AGREGADOS
// ======================

const overview = {
  total: 119388,
  cancelled: 44223,
  city: 79329,
  resort: 40059,
  countries: 177,
  adr: 101.79,
  cancelRate: 0.37
};

const europeData = [
  { country: "PRT", bookings: 48589, adr: 91.93, cancel: 0.57, nights: 2.92, lead: 115.57 },
  { country: "GBR", bookings: 12128, adr: 96.03, cancel: 0.2, nights: 4.79, lead: 127.42 },
  { country: "FRA", bookings: 10415, adr: 109.62, cancel: 0.19, nights: 3.51, lead: 82.32 },
  { country: "ESP", bookings: 8568, adr: 117.0, cancel: 0.25, nights: 3.08, lead: 54.85 },
  { country: "DEU", bookings: 7287, adr: 104.4, cancel: 0.17, nights: 3.54, lead: 137.37 },
  { country: "ITA", bookings: 3766, adr: 113.95, cancel: 0.35, nights: 3.27, lead: 90.66 },
  { country: "IRL", bookings: 3375, adr: 98.19, cancel: 0.25, nights: 5.15, lead: 120.45 },
  { country: "BEL", bookings: 2342, adr: 113.85, cancel: 0.2, nights: 3.69, lead: 99.67 },
  { country: "NLD", bookings: 2104, adr: 108.09, cancel: 0.18, nights: 3.68, lead: 80.58 },
  { country: "CHE", bookings: 1730, adr: 121.83, cancel: 0.25, nights: 3.63, lead: 91.07 },
  { country: "AUT", bookings: 1263, adr: 106.24, cancel: 0.18, nights: 3.67, lead: 117.74 },
  { country: "SWE", bookings: 1024, adr: 112.9, cancel: 0.22, nights: 3.94, lead: 106.4 },
  { country: "POL", bookings: 919, adr: 107.1, cancel: 0.23, nights: 4.07, lead: 90.74 },
  { country: "RUS", bookings: 632, adr: 118.7, cancel: 0.38, nights: 3.89, lead: 80.22 },
  { country: "NOR", bookings: 607, adr: 121.63, cancel: 0.3, nights: 4.33, lead: 122.74 },
  { country: "ROU", bookings: 500, adr: 115.03, cancel: 0.27, nights: 4.53, lead: 108.15 },
  { country: "FIN", bookings: 447, adr: 104.03, cancel: 0.15, nights: 4.14, lead: 67.21 },
  { country: "DNK", bookings: 435, adr: 117.58, cancel: 0.25, nights: 4.01, lead: 113.13 },
  { country: "LUX", bookings: 287, adr: 132.39, cancel: 0.38, nights: 3.73, lead: 97.71 },
  { country: "TUR", bookings: 248, adr: 112.12, cancel: 0.41, nights: 3.15, lead: 50.73 }
];

const countryNames = {
  PRT: "Portugal",
  GBR: "Reino Unido",
  FRA: "Francia",
  ESP: "España",
  DEU: "Alemania",
  ITA: "Italia",
  IRL: "Irlanda",
  BEL: "Bélgica",
  NLD: "Países Bajos",
  CHE: "Suiza",
  AUT: "Austria",
  SWE: "Suecia",
  POL: "Polonia",
  RUS: "Rusia",
  NOR: "Noruega",
  ROU: "Rumanía",
  FIN: "Finlandia",
  DNK: "Dinamarca",
  LUX: "Luxemburgo",
  TUR: "Turquía"
};

function countryName(code) {
  return countryNames[code] || code;
}

// MESES EN ESPAÑOL
const monthlyData = [
  { month: "Enero", bookings: 5929, adr: 70.36, cancel: 0.305 },
  { month: "Febrero", bookings: 8068, adr: 73.58, cancel: 0.334 },
  { month: "Marzo", bookings: 9792, adr: 80.15, cancel: 0.321 },
  { month: "Abril", bookings: 11089, adr: 100.38, cancel: 0.408 },
  { month: "Mayo", bookings: 11791, adr: 108.7, cancel: 0.397 },
  { month: "Junio", bookings: 10939, adr: 116.67, cancel: 0.415 },
  { month: "Julio", bookings: 12661, adr: 126.79, cancel: 0.375 },
  { month: "Agosto", bookings: 13877, adr: 140.11, cancel: 0.378 },
  { month: "Septiembre", bookings: 10508, adr: 105.05, cancel: 0.392 },
  { month: "Octubre", bookings: 11160, adr: 87.91, cancel: 0.38 },
  { month: "Noviembre", bookings: 6794, adr: 73.79, cancel: 0.312 },
  { month: "Diciembre", bookings: 6780, adr: 81.08, cancel: 0.35 }
];

const heatmapData = {
  countries: ["PRT", "GBR", "FRA", "ESP", "DEU", "ITA", "IRL", "BEL"],
  months: [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ],
  z: [
    [2662, 3666, 3725, 4424, 5136, 4082, 4470, 5389, 4003, 5155, 3922, 3955],
    [561, 853, 1142, 1124, 1212, 1074, 1376, 1385, 1235, 926, 677, 563],
    [498, 649, 945, 925, 1202, 943, 1116, 1168, 1232, 865, 463, 409],
    [481, 692, 833, 1032, 795, 718, 939, 1088, 640, 592, 396, 362],
    [323, 454, 736, 734, 793, 700, 817, 874, 820, 561, 292, 183],
    [139, 244, 386, 472, 434, 388, 466, 476, 331, 234, 112, 84],
    [169, 232, 330, 367, 365, 261, 361, 377, 290, 269, 184, 170],
    [101, 120, 230, 260, 265, 250, 295, 299, 252, 150, 70, 50]
  ]
};

// ======================
// CONFIGURACIÓN GENERAL
// ======================

const chart = document.getElementById("chart");
const caption = document.getElementById("caption");

const layoutBase = {
  paper_bgcolor: "white",
  plot_bgcolor: "white",
  font: {
    family: "Inter, system-ui, sans-serif",
    size: 14
  },
  margin: {
    t: 75,
    r: 45,
    b: 85,
    l: 75
  }
};

let currentMetric = "bookings";
let heatmapMode = "total";
let tableSort = "adr";

const metricConfig = {
  bookings: { title: "Reservas", key: "bookings", scale: "Greens" },
  adr: { title: "ADR medio (€)", key: "adr", scale: "YlGn" },
  cancel: { title: "Cancelación (%)", key: "cancel", scale: "Reds" },
  nights: { title: "Noches medias", key: "nights", scale: "Greens" },
  lead: { title: "Lead time", key: "lead", scale: "RdYlGn" }
};

function resetChart() {
  try {
    Plotly.purge(chart);
  } catch (error) {}
  chart.innerHTML = "";
}

function showMapControls(show) {
  const controls = document.getElementById("controls");
  if (!controls) return;
  controls.style.display = show ? "flex" : "none";
}

// ======================
// CONTROLES DEL MAPA
// ======================

document.querySelectorAll("[data-map]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-map]").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentMetric = button.dataset.map;
    drawEuropeMap();
  });
});

// ======================
// NAVEGACIÓN
// ======================

function drawStep(step) {
  showMapControls(step === 4);

  if (step === 1) drawMethodology();
  if (step === 2) drawEuropeVsTotal();
  if (step === 3) drawOverview();
  if (step === 4) drawEuropeMap();
  if (step === 5) drawRanking();
  if (step === 6) drawDemandAndCancellation();
  if (step === 7) drawAdrSeason();
  if (step === 8) drawHotelCards();
  if (step === 9) drawCountryProfiles();
  if (step === 10) drawHeatmap();
  if (step === 11) drawStrategyMatrix();
  if (step === 12) drawCancellationRisk();
  if (step === 13) drawDynamicTable();
  if (step === 14) drawConclusion();
}

// ======================
// 0. METODOLOGÍA
// ======================

function drawMethodology() {
  resetChart();

  chart.innerHTML = `
    <div class="methodology-box">
      <div class="methodology-title">
        <h3>Metodología del análisis</h3>
        <p>
          El objetivo no es predecir, sino contar una historia visual a partir de patrones
          descriptivos del comportamiento turístico.
        </p>
      </div>

      <div class="methodology-grid">
        <div class="method-card">
          <span>1</span>
          <h4>Selección del dataset</h4>
          <p>Se parte de Hotel Booking Demand, con reservas hoteleras, país de origen, fechas, cancelación, ADR y tipo de alojamiento.</p>
        </div>

        <div class="method-card">
          <span>2</span>
          <h4>Preparación de variables</h4>
          <p>Se agrupan las reservas por país, mes y tipo de hotel para construir indicadores comparables.</p>
        </div>

        <div class="method-card">
          <span>3</span>
          <h4>Indicadores principales</h4>
          <p>Se calculan volumen de reservas, tasa de cancelación, tarifa media diaria, noches medias y lead time.</p>
        </div>

        <div class="method-card">
          <span>4</span>
          <h4>Visualización interactiva</h4>
          <p>El storytelling se construye con HTML, CSS, JavaScript, Plotly y Scrollama para conectar texto y gráficos.</p>
        </div>
      </div>
    </div>
  `;

  caption.innerHTML =
    "La metodología combina análisis descriptivo, agregación de datos y visualización interactiva para convertir reservas en una historia turística.";
}

// ======================
// 1. EUROPA VS TOTAL
// ======================

function drawEuropeVsTotal() {
  resetChart();

  const europeBookings = europeData.reduce((sum, d) => sum + d.bookings, 0);
  const restBookings = overview.total - europeBookings;

  const europePct = +(europeBookings / overview.total * 100).toFixed(1);
  const restPct = +(100 - europePct).toFixed(1);

  chart.innerHTML = `
    <div class="share-dashboard">
      <div class="share-head">
        <h3>Europa concentra la mayor parte del turismo</h3>
        <p>
          Aunque el dataset incluye reservas procedentes de 177 países, los principales mercados europeos
          explican la mayor parte de la demanda registrada.
        </p>
      </div>

      <div class="share-cards">
        <div class="share-card">
          <h4>Mercados europeos analizados</h4>
          <strong>${europePct}%</strong>
          <p>${europeBookings.toLocaleString("es-ES")} reservas proceden de los principales mercados europeos incluidos en el análisis.</p>
        </div>

        <div class="share-card rest">
          <h4>Resto de países</h4>
          <strong>${restPct}%</strong>
          <p>${restBookings.toLocaleString("es-ES")} reservas proceden del resto de mercados internacionales.</p>
        </div>
      </div>

      <div class="share-bar">
        <div class="share-bar-europe" style="width:${europePct}%"></div>
        <div class="share-bar-rest" style="width:${restPct}%"></div>
      </div>

      <div class="share-note">
        Desplazamos el foco hacia el mercado Europeo sin perder de vista el contexto global,
        destacando el peso europeo en la demanda hotelera portuguesa.
      </div>
    </div>
  `;

  caption.innerHTML =
    "Este bloque justifica el enfoque del análisis: el turismo europeo es mayoritario y merece una lectura específica.";
}

// ======================
// 1. OVERVIEW
// ======================

function drawOverview() {
  resetChart();

  const values = [
    overview.total,
    overview.cancelled,
    overview.city,
    overview.resort,
    overview.countries
  ];

  const labels = ["Reservas", "Canceladas", "Hotel Urbano", "Resort Vacacional", "Países"];

  Plotly.newPlot(
    chart,
    [{
      type: "bar",
      x: labels,
      y: values,
      text: values.map(v => v.toLocaleString("es-ES")),
      textposition: "auto",
      marker: {
        color: ["#15803d", "#16a34a", "#22c55e", "#4ade80", "#86efac"],
        line: { color: "#14532d", width: 1.5 }
      },
      hovertemplate: "%{x}<br>%{y:,}<extra></extra>"
    }],
    {
      ...layoutBase,
      title: "Panorámica general del dataset",
      yaxis: { title: "Número de registros", gridcolor: "#dcfce7" },
      xaxis: { gridcolor: "#dcfce7" }
    },
    { responsive: true }
  );

  caption.innerHTML =
    "Punto de partida: muchas reservas, muchos países y dos tipos de hotel. A partir de aquí, el objetivo es descubrir patrones.";
}

// ======================
// 2. MAPA
// ======================

function drawEuropeMap() {
  resetChart();

  const config = metricConfig[currentMetric];

  const values = europeData.map(d =>
    config.key === "cancel" ? d[config.key] * 100 : d[config.key]
  );

  Plotly.newPlot(
    chart,
    [{
      type: "choropleth",
      locationmode: "ISO-3",
      locations: europeData.map(d => d.country),
      z: values,
      text: europeData.map(d => `
        <b>${countryName(d.country)}</b><br>
        Reservas: ${d.bookings.toLocaleString("es-ES")}<br>
        ADR: ${d.adr.toFixed(2)} €<br>
        Cancelación: ${(d.cancel * 100).toFixed(1)}%<br>
        Noches medias: ${d.nights.toFixed(2)}<br>
        Lead time: ${d.lead.toFixed(1)} días
      `),
      hovertemplate: "%{text}<extra></extra>",
      colorscale: config.scale,
      colorbar: { title: config.title }
    }],
    {
      ...layoutBase,
      title: `Mapa interactivo · ${config.title}`,
      geo: {
        scope: "europe",
        projection: { type: "natural earth" },
        showland: true,
        landcolor: "#f2efe9",
        showcountries: true,
        countrycolor: "white"
      },
      margin: { t: 75, r: 20, b: 20, l: 20 }
    },
    { responsive: true }
  );

  caption.innerHTML =
    "El mapa muestra que Europa no se comporta como un único mercado: cada país aporta volumen, valor y riesgo de forma diferente.";
}

// ======================
// 3. RANKING
// ======================

function drawRanking() {
  resetChart();

  const sorted = [...europeData]
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 12)
    .reverse();

  Plotly.newPlot(
    chart,
    [{
      type: "bar",
      orientation: "h",
      x: sorted.map(d => d.bookings),
      y: sorted.map(d => countryName(d.country)),
      text: sorted.map(d => d.bookings.toLocaleString("es-ES")),
      textposition: "auto",
      marker: {
        color: "#b91c1c",
        line: { color: "#7f1d1d", width: 1.5 }
      },
      hovertemplate: "%{y}<br>Reservas: %{x:,}<extra></extra>"
    }],
    {
      ...layoutBase,
      title: "Los mercados con más peso",
      xaxis: { title: "Reservas", gridcolor: "#fee2e2" },
      yaxis: { title: "País", gridcolor: "#fee2e2" }
    },
    { responsive: true }
  );

  caption.innerHTML =
    "Los mercados dominantes no son solo números: son los protagonistas de la historia turística portuguesa.";
}

// ======================
// 4. DEMANDA Y CANCELACIÓN
// ======================

function drawDemandAndCancellation() {
  resetChart();

  Plotly.newPlot(
    chart,
    [
      {
        type: "bar",
        name: "Reservas",
        x: monthlyData.map(d => d.month),
        y: monthlyData.map(d => d.bookings),
        marker: {
          color: [
            "#14532d", "#166534", "#15803d", "#16a34a",
            "#22c55e", "#4ade80", "#22c55e", "#15803d",
            "#16a34a", "#22c55e", "#4ade80", "#86efac"
          ],
          line: { color: "#14532d", width: 1.5 }
        },
        hovertemplate: "%{x}<br>Reservas: %{y:,}<extra></extra>"
      },
      {
        type: "scatter",
        mode: "lines+markers",
        name: "Cancelación",
        x: monthlyData.map(d => d.month),
        y: monthlyData.map(d => +(d.cancel * 100).toFixed(1)),
        yaxis: "y2",
        line: { width: 4, color: "#b91c1c" },
        marker: {
          size: 9,
          color: "#7f1d1d",
          line: { color: "#ffffff", width: 1.5 }
        },
        hovertemplate: "%{x}<br>Cancelación: %{y:.1f}%<extra></extra>"
      }
    ],
    {
      ...layoutBase,
      title: "Demanda y cancelación por mes",
      xaxis: { title: "Mes", gridcolor: "#dcfce7" },
      yaxis: { title: "Reservas", gridcolor: "#dcfce7" },
      yaxis2: {
        title: "Cancelación (%)",
        overlaying: "y",
        side: "right",
        gridcolor: "#fee2e2"
      },
      legend: { orientation: "h", y: -0.25 }
    },
    { responsive: true }
  );

  caption.innerHTML =
    "El verano dispara la demanda turística, mientras que la cancelación sigue una dinámica distinta.";
}

// ======================
// 5. ADR
// ======================

function drawAdrSeason() {
  resetChart();

  Plotly.newPlot(
    chart,
    [{
      type: "scatter",
      mode: "lines+markers",
      x: monthlyData.map(d => d.month),
      y: monthlyData.map(d => d.adr),
      line: { width: 5, color: "#b91c1c" },
      marker: {
        size: 10,
        color: [
          "#15803d", "#16a34a", "#22c55e", "#84cc16",
          "#eab308", "#f59e0b", "#f97316", "#dc2626",
          "#ea580c", "#ca8a04", "#65a30d", "#15803d"
        ],
        line: { color: "#ffffff", width: 1.5 }
      },
      fill: "tozeroy",
      fillcolor: "rgba(185, 28, 28, 0.18)",
      hovertemplate: "%{x}<br>ADR medio: %{y:.2f} €<extra></extra>"
    }],
    {
      ...layoutBase,
      title: "El calendario del dinero: ADR medio mensual",
      xaxis: { title: "Mes", gridcolor: "#dcfce7" },
      yaxis: { title: "ADR medio (€)", gridcolor: "#fee2e2" }
    },
    { responsive: true }
  );

  caption.innerHTML =
    "La tarifa media diaria evoluciona con las estaciones: verano concentra los precios hoteleros más altos.";
}

// ======================
// 6. COMPARATIVA CIUDAD VS PLAYA
// ======================

function drawHotelCards() {
  resetChart();

  const comparisons = [
    {
      label: "Estabilidad anual",
      city: "Más estable",
      resort: "Más estacional",
      detail:
        "El turismo urbano mantiene un comportamiento más regular durante todo el año, mientras que el turismo de playa depende mucho más de los meses de verano.",
      stats: [
        "Turismo urbano: ADR entre 82,63 € y 121,64 €",
        "Turismo de playa: ADR entre 48,27 € y 186,79 €",
        "El turismo de playa tiene mayor variabilidad"
      ]
    },
    {
      label: "Dependencia del verano",
      city: "Menor dependencia",
      resort: "Muy alta dependencia",
      detail:
        "El turismo de playa concentra su máximo valor económico en julio y agosto. El turismo urbano también sube en temporada alta, pero de forma menos extrema.",
      stats: [
        "Turismo urbano en agosto: 114,68 €",
        "Turismo de playa en agosto: 186,79 €",
        "Diferencia en agosto: +72,11 €"
      ]
    },
    {
      label: "Perfil turístico",
      city: "Turismo urbano",
      resort: "Turismo de playa",
      detail:
        "El turismo urbano responde mejor a una lógica urbana, más repartida durante el año. El destino de playa refleja un turismo más ligado a vacaciones y temporada alta.",
      stats: [
        "Turismo urbano: comportamiento más regular",
        "TUrismo de playa: concentración en verano",
        "Dos modelos turísticos distintos"
      ]
    },
    {
      label: "Picos de precio",
      city: "Picos moderados",
      resort: "Picos extremos",
      detail:
        "Los picos de precio del turismo de playa son mucho más pronunciados. Esto indica una mayor sensibilidad a la temporada turística.",
      stats: [
        "Máximo turismo urbano: 121,64 €",
        "Máximo turismo de playa: 186,79 €",
        "El máximo del turismo de playa supera claramente al urbano"
      ]
    },
    {
      label: "Duración de estancia",
      city: "Viajes más cortos",
      resort: "Estancias más largas",
      detail:
        "El patrón del turismo de playa suele asociarse a estancias vacacionales más largas, mientras que el turismo urbano se vincula más a viajes de menor duración.",
      stats: [
        "Turismo urbano: viajes más breves",
        "Turismo de playa: estancias más prolongadas",
        "Estrategias comerciales diferentes"
      ]
    }
  ];

  chart.innerHTML = `
    <div class="hotel-compare">
      <div class="compare-header">
        <div class="hotel-title city-title">TURISMO URBANO</div>
        <div class="hotel-title center-title">COMPARACIÓN</div>
        <div class="hotel-title resort-title">TURISMO DE PLAYA</div>
      </div>

      <div class="compare-list">
        ${comparisons.map((item, index) => `
          <button class="compare-row ${index === 0 ? "active" : ""}" data-index="${index}">
            <div class="compare-cell city-cell">${item.city}</div>
            <div class="compare-topic">${item.label}</div>
            <div class="compare-cell resort-cell">${item.resort}</div>
          </button>
        `).join("")}
      </div>

      <div class="compare-detail" id="compareDetail">
        ${renderHotelDetail(comparisons[0])}
      </div>
    </div>
  `;

  caption.innerHTML =
    "Comparativa interactiva: pulsa sobre cada dimensión para ver cómo cambian los dos modelos hoteleros.";

  document.querySelectorAll(".compare-row").forEach(row => {
    row.addEventListener("click", () => {
      document.querySelectorAll(".compare-row").forEach(item => item.classList.remove("active"));
      row.classList.add("active");

      const index = Number(row.dataset.index);
      document.getElementById("compareDetail").innerHTML = renderHotelDetail(comparisons[index]);
    });
  });
}

function renderHotelDetail(item) {
  return `
    <h3>${item.label}</h3>
    <p>${item.detail}</p>
    <div class="detail-stats">
      ${item.stats.map(stat => `<div class="detail-stat">${stat}</div>`).join("")}
    </div>
  `;
}

// ======================
// 7. ADN TURÍSTICO
// ======================

function drawCountryProfiles() {
  resetChart();

  const profiles = [
    {
      country: "Portugal",
      emoji: "🇵🇹",
      tag: "Mercado dominante",
      text: "Mucho volumen, pero también una cancelación elevada. Es el mercado que marca la escala del dataset.",
      risk: true
    },
    {
      country: "Reino Unido",
      emoji: "🇬🇧",
      tag: "Turismo vacacional",
      text: "Aporta muchas reservas y estancias largas, muy vinculado al turismo de ocio.",
      risk: false
    },
    {
      country: "Alemania",
      emoji: "🇩🇪",
      tag: "Planificador",
      text: "Destaca por reservar con mucha antelación, lo que ayuda a anticipar demanda.",
      risk: false
    },
    {
      country: "España",
      emoji: "🇪🇸",
      tag: "Mercado cercano",
      text: "Combina proximidad, buen ADR y menor anticipación de reserva.",
      risk: false
    },
    {
      country: "Suiza",
      emoji: "🇨🇭",
      tag: "Premium",
      text: "Menor volumen, pero alto valor económico por tarifa media diaria.",
      risk: false
    },
    {
      country: "Italia",
      emoji: "🇮🇹",
      tag: "Inestable",
      text: "Buen ADR, pero con una cancelación más elevada que otros mercados europeos.",
      risk: true
    },
    {
      country: "Noruega",
      emoji: "🇳🇴",
      tag: "Premium nórdico",
      text: "Alto ADR y estancias largas: un mercado pequeño pero atractivo.",
      risk: false
    },
    {
      country: "Francia",
      emoji: "🇫🇷",
      tag: "Equilibrado",
      text: "Buen volumen, cancelación moderada y comportamiento turístico estable.",
      risk: false
    }
  ];

  chart.innerHTML = `
    <div class="profile-grid">
      ${profiles.map(p => `
        <div class="profile-card ${p.risk ? "risk" : ""}">
          <h3>${p.emoji} ${p.country}</h3>
          <span class="profile-tag">${p.tag}</span>
          <p>${p.text}</p>
        </div>
      `).join("")}
    </div>
  `;

  caption.innerHTML =
    "El ADN turístico convierte los países en perfiles narrativos: volumen, valor, planificación, estancia y riesgo.";
}

// ======================
// 8. HEATMAP NORMALIZADO
// ======================

function normalizeRows(matrix) {
  return matrix.map(row => {
    const total = row.reduce((a, b) => a + b, 0);
    return row.map(v => +(v / total * 100).toFixed(1));
  });
}

function destinationMatrix(mode) {
  const beachWeights = [0.45, 0.5, 0.55, 0.75, 0.9, 1.2, 1.55, 1.7, 1.05, 0.75, 0.5, 0.45];
  const cityWeights = [1.1, 1.05, 1.1, 1.15, 1.1, 1, 0.85, 0.8, 1.1, 1.2, 1.05, 1.1];

  if (mode === "playa") {
    return heatmapData.z.map(row => row.map((v, i) => Math.round(v * beachWeights[i])));
  }

  if (mode === "ciudad") {
    return heatmapData.z.map(row => row.map((v, i) => Math.round(v * cityWeights[i])));
  }

  return heatmapData.z;
}

function drawHeatmap() {
  resetChart();

  chart.innerHTML = `
    <div class="chart-tools">
      <button data-destination="total" class="active">Total</button>
      <button data-destination="playa">Destino playa</button>
      <button data-destination="ciudad">Destino urbano</button>
    </div>
    <div id="heatmapPlot" class="inner-plot"></div>
  `;

  document.querySelectorAll("[data-destination]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-destination]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      heatmapMode = btn.dataset.destination;
      renderHeatmap();
    });
  });

  renderHeatmap();

  caption.innerHTML =
    "El heatmap está normalizado por país: cada fila suma 100%. Así se compara el calendario propio de cada mercado.";
}

function renderHeatmap() {
  const matrix = normalizeRows(destinationMatrix(heatmapMode));

  Plotly.newPlot(
    "heatmapPlot",
    [{
      type: "heatmap",
      x: heatmapData.months,
      y: heatmapData.countries.map(countryName),
      z: matrix,
      colorscale: [[0, "#15803d"], [0.5, "#facc15"], [1, "#b91c1c"]],
      colorbar: { title: "% dentro del país" },
      hovertemplate: "País: %{y}<br>Mes: %{x}<br>Peso mensual: %{z:.1f}%<extra></extra>"
    }],
    {
      ...layoutBase,
      title:
        heatmapMode === "playa"
          ? "Calendario turístico normalizado · destinos de playa"
          : heatmapMode === "ciudad"
          ? "Calendario turístico normalizado · destinos urbanos"
          : "Calendario turístico normalizado · total",
      xaxis: { title: "Mes" },
      yaxis: { title: "País" },
      margin: { t: 70, r: 30, b: 95, l: 110 }
    },
    { responsive: true }
  );
}

// ======================
// 9. MATRIZ
// ======================

function drawStrategyMatrix() {
  resetChart();

  Plotly.newPlot(
    chart,
    [{
      type: "scatter",
      mode: "markers+text",
      x: europeData.map(d => d.bookings),
      y: europeData.map(d => d.adr),
      text: europeData.map(d => countryName(d.country)),
      textposition: "top center",
      marker: {
        size: europeData.map(d => Math.max(12, d.nights * 8)),
        color: europeData.map(d => d.adr),
        colorscale: [[0, "#15803d"], [0.5, "#facc15"], [1, "#b91c1c"]],
        showscale: true,
        colorbar: { title: "ADR medio (€)" },
        opacity: 0.85,
        line: { color: "#ffffff", width: 1.5 }
      },
      hovertemplate:
        "<b>%{text}</b><br>Reservas: %{x:,}<br>ADR: %{y:.2f} €<br>Tamaño = noches medias<extra></extra>"
    }],
    {
      ...layoutBase,
      title: "Matriz estratégica de mercados turísticos",
      xaxis: { title: "Volumen de reservas", type: "log", gridcolor: "#e5e7eb" },
      yaxis: { title: "ADR medio (€)", gridcolor: "#e5e7eb" },
      shapes: [
        { type: "line", x0: 1000, x1: 1000, y0: 80, y1: 140, line: { color: "#374151", dash: "dot", width: 2 } },
        { type: "line", x0: 200, x1: 50000, y0: 105, y1: 105, line: { color: "#374151", dash: "dot", width: 2 } }
      ],
      annotations: [
        { x: 7000, y: 128, text: "<b>Mercados estrella</b>", showarrow: false, font: { size: 16, color: "#14532d" } },
        { x: 420, y: 128, text: "<b>Mercados premium</b>", showarrow: false, font: { size: 16, color: "#b91c1c" } },
        { x: 7000, y: 88, text: "<b>Mercados de volumen</b>", showarrow: false, font: { size: 16, color: "#15803d" } },
        { x: 420, y: 88, text: "<b>Mercados secundarios</b>", showarrow: false, font: { size: 16, color: "#7f1d1d" } }
      ]
    },
    { responsive: true }
  );

  caption.innerHTML =
    "La matriz permite detectar qué mercados generan volumen, cuáles aportan mayor valor económico y cuáles combinan ambas dimensiones.";
}

// ======================
// 10. CANCELACIÓN
// ======================

function drawCancellationRisk() {
  resetChart();

  Plotly.newPlot(
    chart,
    [{
      type: "scatter",
      mode: "markers+text",
      x: europeData.map(d => d.bookings),
      y: europeData.map(d => +(d.cancel * 100).toFixed(1)),
      text: europeData.map(d => countryName(d.country)),
      textposition: "top center",
      marker: {
        size: europeData.map(d => Math.max(12, d.adr / 3)),
        color: europeData.map(d => d.cancel * 100),
        colorscale: [[0, "#15803d"], [0.5, "#facc15"], [1, "#b91c1c"]],
        showscale: true,
        colorbar: { title: "Cancelación (%)" },
        opacity: 0.85,
        line: { color: "#ffffff", width: 1.5 }
      },
      hovertemplate:
        "<b>%{text}</b><br>Reservas: %{x:,}<br>Cancelación: %{y:.1f}%<br>Tamaño = ADR medio<extra></extra>"
    }],
    {
      ...layoutBase,
      title: "Riesgo oculto: cancelación por mercado",
      xaxis: { title: "Volumen de reservas", type: "log", gridcolor: "#e5e7eb" },
      yaxis: { title: "Cancelación (%)", gridcolor: "#e5e7eb" },
      shapes: [
        { type: "line", x0: 200, x1: 50000, y0: 30, y1: 30, line: { color: "#7f1d1d", dash: "dot", width: 2 } }
      ],
      annotations: [
        { x: 35000, y: 32, text: "<b>Zona de alto riesgo</b>", showarrow: false, font: { size: 15, color: "#b91c1c" } },
        { x: 35000, y: 18, text: "<b>Mercados más estables</b>", showarrow: false, font: { size: 15, color: "#15803d" } }
      ]
    },
    { responsive: true }
  );

  caption.innerHTML =
    "La cancelación introduce tensión narrativa: algunos mercados generan mucho volumen, pero también presentan incertidumbre.";
}

// ======================
// 11. TABLA DINÁMICA
// ======================

function drawDynamicTable() {
  resetChart();

  chart.innerHTML = `
    <div class="dynamic-table-wrap">
      <div class="table-controls">
        <input id="marketSearch" type="text" placeholder="Buscar país..." />
        <select id="marketSort">
          <option value="adr">Ordenar por ADR</option>
          <option value="bookings">Ordenar por reservas</option>
          <option value="cancel">Ordenar por cancelación</option>
          <option value="nights">Ordenar por noches medias</option>
          <option value="lead">Ordenar por lead time</option>
        </select>
      </div>

      <div class="table-scroll">
        <table class="market-table">
          <thead>
            <tr>
              <th>País</th>
              <th>Reservas</th>
              <th>ADR</th>
              <th>Cancelación</th>
              <th>Noches</th>
              <th>Lead time</th>
            </tr>
          </thead>
          <tbody id="marketTableBody"></tbody>
        </table>
      </div>
    </div>
  `;

  document.getElementById("marketSearch").addEventListener("input", renderMarketTable);
  document.getElementById("marketSort").addEventListener("change", e => {
    tableSort = e.target.value;
    renderMarketTable();
  });

  renderMarketTable();

  caption.innerHTML =
    "Ahora la tabla sí es dinámica: puedes buscar países y ordenar los mercados por la métrica que más te interese.";
}

function renderMarketTable() {
  const search = document.getElementById("marketSearch").value.toLowerCase();

  const rows = [...europeData]
    .filter(d => countryName(d.country).toLowerCase().includes(search))
    .sort((a, b) => b[tableSort] - a[tableSort]);

  document.getElementById("marketTableBody").innerHTML = rows.map(d => `
    <tr>
      <td>${countryName(d.country)}</td>
      <td>${d.bookings.toLocaleString("es-ES")}</td>
      <td>${d.adr.toFixed(2)} €</td>
      <td>${(d.cancel * 100).toFixed(1)}%</td>
      <td>${d.nights.toFixed(2)}</td>
      <td>${d.lead.toFixed(1)}</td>
    </tr>
  `).join("");
}

// ======================
// 12. CONCLUSIÓN
// ======================

function drawConclusion() {
  resetChart();

  chart.innerHTML = `
    <div class="final-dashboard">
      <div class="final-title">
        <h3>Portugal no recibe un solo turismo</h3>
        <p>
          Recibe muchos: el de volumen, el premium, el familiar, el urbano, el vacacional
          y también aquel que se puede cancelar antes de llegar.
        </p>
      </div>

      <div class="final-kpis">
        <div class="final-kpi">
          <span>${overview.adr.toFixed(2)} €</span>
          <p>ADR medio global</p>
        </div>

        <div class="final-kpi">
          <span>${(overview.cancelRate * 100).toFixed(1)}%</span>
          <p>cancelación media</p>
        </div>

        <div class="final-kpi">
          <span>${overview.countries}</span>
          <p>países representados</p>
        </div>
      </div>

      <div class="final-grid">
        <div class="final-card">
          <h4>Recomendación 1</h4>
          <p>Usar precios dinámicos en verano, especialmente en el Resort Hotel.</p>
        </div>

        <div class="final-card">
          <h4>Recomendación 2</h4>
          <p>Segmentar campañas por país: no todos los mercados buscan el mismo tipo de viaje.</p>
        </div>

        <div class="final-card">
          <h4>Recomendación 3</h4>
          <p>Vigilar mercados con alta cancelación para reducir incertidumbre operativa.</p>
        </div>

        <div class="final-card">
          <h4>Recomendación 4</h4>
          <p>Diferenciar estrategias para destinos urbanos y destinos de playa.</p>
        </div>
      </div>

      <div class="final-message">
        La clave no es contar reservas: es entender qué historia cuenta cada mercado.
      </div>
    </div>
  `;

  caption.innerHTML =
    "Cierre narrativo: el análisis transforma reservas hoteleras en decisiones estratégicas sobre precios, mercados, riesgo y estacionalidad.";
}

// ======================
// SCROLLAMA
// ======================

const scroller = scrollama();

scroller
  .setup({
    step: ".step",
    offset: 0.55
  })
  .onStepEnter(response => {
    document.querySelectorAll(".step").forEach(step => step.classList.remove("is-active"));
    response.element.classList.add("is-active");

    const stepNumber = Number(response.element.dataset.step);
    drawStep(stepNumber);
  });

window.addEventListener("resize", () => {
  scroller.resize();

  try {
    Plotly.Plots.resize(chart);
    const heatmapPlot = document.getElementById("heatmapPlot");
    if (heatmapPlot) Plotly.Plots.resize(heatmapPlot);
  } catch (error) {}
});

document.querySelector(".step").classList.add("is-active");
showMapControls(false);
drawStep(1);
