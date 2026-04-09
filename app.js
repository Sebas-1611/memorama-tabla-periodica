'use strict';

// ============================================================
// DATA: ELEMENTS
// Each element has core data + facts (with hint that does NOT
// expose the value, and an explanation for formative feedback)
// ============================================================
const ELEMENTS = [
  {z:1,sym:'H',name:'Hidrógeno',mass:1.008,group:1,period:1,block:'s',family:'no-metal',config:'1s¹',ox:[-1,+1],
    en:2.20,ie:1312,radius:53,ea:-73,
    hints:{en:'Único en su grupo, no es alcalino',ie:'Solo tiene un electrón',radius:'Átomo más pequeño tras el helio',ea:'Forma hidruros'},
    expl:'El hidrógeno tiene 1 protón y 1 electrón. Aunque está en el grupo 1 NO es metal alcalino: forma H₂, es gas y puede ganar (H⁻) o perder (H⁺) un electrón. Es el elemento más abundante del universo.'},
  {z:2,sym:'He',name:'Helio',mass:4.003,group:18,period:1,block:'s',family:'gas-noble',config:'1s²',ox:[0],
    en:null,ie:2372,radius:31,ea:0,
    hints:{en:'No tiene tendencia a formar enlaces',ie:'La más alta de toda la tabla periódica',radius:'El átomo más pequeño',ea:'Capa cerrada total'},
    expl:'El helio tiene 2 electrones que llenan completamente el nivel 1s². Esto le da máxima estabilidad: es el elemento con mayor energía de ionización (2372 kJ/mol) y no forma compuestos en condiciones normales.'},
  {z:3,sym:'Li',name:'Litio',mass:6.94,group:1,period:2,block:'s',family:'alcalino',config:'[He]2s¹',ox:[+1],
    en:0.98,ie:520,radius:167,ea:-60,
    hints:{en:'Bajo, típico de los alcalinos',ie:'Pierde su único electrón de valencia con facilidad',radius:'Crece respecto al helio al estrenar capa 2',ea:'Forma cationes con facilidad'},
    expl:'El litio inicia el período 2 con configuración [He]2s¹. Pierde fácilmente su electrón externo formando Li⁺. Es el metal más ligero y se usa en baterías de alta densidad energética.'},
  {z:4,sym:'Be',name:'Berilio',mass:9.012,group:2,period:2,block:'s',family:'alcalinotérreo',config:'[He]2s²',ox:[+2],
    en:1.57,ie:899,radius:112,ea:0,
    hints:{en:'Mayor que el litio, menor que el boro',ie:'Subcapa 2s llena, cuesta ionizarlo',radius:'Más pequeño que el litio',ea:'No suele captar electrones'},
    expl:'El berilio tiene la 2s² completa, lo que explica su alta E.Ion frente a B (excepción de tendencia). Forma Be²⁺ pero con marcado carácter covalente por su pequeño tamaño.'},
  {z:5,sym:'B',name:'Boro',mass:10.81,group:13,period:2,block:'p',family:'metaloide',config:'[He]2s²2p¹',ox:[+3],
    en:2.04,ie:801,radius:87,ea:-27,
    hints:{en:'Empieza a ser apreciable, metaloide',ie:'Curiosamente menor que la del Be (excepción)',radius:'Más pequeño que el Be',ea:'Tendencia moderada'},
    expl:'El boro estrena el subnivel 2p, por lo que su E.Ion es menor que la del berilio (excepción al patrón general). Es metaloide, forma enlaces covalentes y compuestos como el ácido bórico.'},
  {z:6,sym:'C',name:'Carbono',mass:12.011,group:14,period:2,block:'p',family:'no-metal',config:'[He]2s²2p²',ox:[-4,-3,-2,-1,+1,+2,+3,+4],
    en:2.55,ie:1086,radius:67,ea:-122,
    hints:{en:'Intermedia, base de la química orgánica',ie:'Aumenta respecto al boro',radius:'Continúa la contracción del período 2',ea:'Capta electrones moderadamente'},
    expl:'El carbono forma 4 enlaces covalentes y es la base de toda la química orgánica. Tiene varios alótropos: diamante, grafito, grafeno, fullerenos. Sus estados de oxidación van de -4 a +4.'},
  {z:7,sym:'N',name:'Nitrógeno',mass:14.007,group:15,period:2,block:'p',family:'no-metal',config:'[He]2s²2p³',ox:[-3,-2,-1,+1,+2,+3,+4,+5],
    en:3.04,ie:1402,radius:56,ea:7,
    hints:{en:'Alta, segunda mayor del período 2',ie:'Mayor que la del oxígeno (excepción 2p³ semilleno)',radius:'Pequeño',ea:'Casi no acepta electrones (excepción)'},
    expl:'El nitrógeno tiene 2p³ semilleno, configuración estable que le da E.Ion mayor que el oxígeno. Su afinidad electrónica es prácticamente nula. Forma N₂ con un triple enlace muy fuerte: 78% de la atmósfera.'},
  {z:8,sym:'O',name:'Oxígeno',mass:15.999,group:16,period:2,block:'p',family:'no-metal',config:'[He]2s²2p⁴',ox:[-2],
    en:3.44,ie:1314,radius:48,ea:-141,
    hints:{en:'Muy alta, segunda solo después del flúor',ie:'Curiosamente menor que la del N',radius:'Más pequeño que el N',ea:'Capta electrones con facilidad'},
    expl:'El oxígeno tiene 2p⁴: al añadir un electrón al 2p³ semilleno aparece repulsión, por eso su E.Ion es menor que la del N. Forma el O²⁻ y es esencial para la respiración celular.'},
  {z:9,sym:'F',name:'Flúor',mass:18.998,group:17,period:2,block:'p',family:'halógeno',config:'[He]2s²2p⁵',ox:[-1],
    en:3.98,ie:1681,radius:42,ea:-328,
    hints:{en:'La más alta de toda la tabla',ie:'Muy alta, casi máxima del período',radius:'Muy pequeño',ea:'Le falta solo 1 electrón para completar la capa'},
    expl:'El flúor es el elemento más electronegativo (3.98 Pauling). Curiosamente su afinidad electrónica (-328) es menor en magnitud que la del Cl (-349) por la repulsión en su pequeña capa 2p. Reacciona con casi todo.'},
  {z:10,sym:'Ne',name:'Neón',mass:20.180,group:18,period:2,block:'p',family:'gas-noble',config:'[He]2s²2p⁶',ox:[0],
    en:null,ie:2081,radius:38,ea:0,
    hints:{en:'No reactivo',ie:'Muy alta, capa cerrada',radius:'Muy pequeño',ea:'No capta electrones'},
    expl:'El neón completa el período 2 con la capa de valencia llena (2s²2p⁶). Es químicamente inerte y se usa en luces de neón (emisión rojo-anaranjada característica).'},
  {z:11,sym:'Na',name:'Sodio',mass:22.990,group:1,period:3,block:'s',family:'alcalino',config:'[Ne]3s¹',ox:[+1],
    en:0.93,ie:496,radius:190,ea:-53,
    hints:{en:'Muy bajo, alcalino',ie:'Baja: solo un electrón externo lejano',radius:'Mayor que el del Li (nueva capa)',ea:'Forma Na⁺ fácilmente'},
    expl:'El sodio inicia el período 3 con [Ne]3s¹. Pierde su electrón externo con facilidad formando Na⁺, esencial en señalización nerviosa y abundante en sales como NaCl.'},
  {z:12,sym:'Mg',name:'Magnesio',mass:24.305,group:2,period:3,block:'s',family:'alcalinotérreo',config:'[Ne]3s²',ox:[+2],
    en:1.31,ie:738,radius:145,ea:0,
    hints:{en:'Algo mayor que el sodio',ie:'Subcapa 3s llena',radius:'Más pequeño que el Na',ea:'No suele captar electrones'},
    expl:'El magnesio tiene 3s². Forma Mg²⁺ y es central en la clorofila. Su E.Ion es mayor que la del Al (excepción por subcapa llena).'},
  {z:13,sym:'Al',name:'Aluminio',mass:26.982,group:13,period:3,block:'p',family:'metal-postransicion',config:'[Ne]3s²3p¹',ox:[+3],
    en:1.61,ie:577,radius:118,ea:-43,
    hints:{en:'Moderado',ie:'Curiosamente menor que la del Mg (excepción)',radius:'Menor que el Mg',ea:'Capta electrones moderadamente'},
    expl:'El aluminio empieza el subnivel 3p, por eso su E.Ion es menor que la del Mg (paralelo al caso B-Be). Es el metal más abundante en la corteza terrestre.'},
  {z:14,sym:'Si',name:'Silicio',mass:28.085,group:14,period:3,block:'p',family:'metaloide',config:'[Ne]3s²3p²',ox:[-4,+4],
    en:1.90,ie:786,radius:111,ea:-134,
    hints:{en:'Intermedio, metaloide',ie:'Aumenta respecto al Al',radius:'Continúa contrayéndose el período',ea:'Capta moderadamente'},
    expl:'El silicio es la base de la electrónica moderna y el segundo elemento más abundante de la corteza. Forma cristales tetraédricos como el carbono pero con enlaces más débiles.'},
  {z:15,sym:'P',name:'Fósforo',mass:30.974,group:15,period:3,block:'p',family:'no-metal',config:'[Ne]3s²3p³',ox:[-3,+3,+5],
    en:2.19,ie:1012,radius:98,ea:-72,
    hints:{en:'Alta',ie:'Mayor que la del azufre (excepción 3p³ semilleno)',radius:'Pequeño',ea:'Capta moderadamente'},
    expl:'El fósforo tiene 3p³ semilleno (excepción análoga al N): su E.Ion supera la del S. Esencial para el ADN, ATP y huesos.'},
  {z:16,sym:'S',name:'Azufre',mass:32.06,group:16,period:3,block:'p',family:'no-metal',config:'[Ne]3s²3p⁴',ox:[-2,+4,+6],
    en:2.58,ie:1000,radius:88,ea:-200,
    hints:{en:'Muy alta para no metal',ie:'Menor que la del P (paralelo al O-N)',radius:'Más pequeño que el P',ea:'Capta electrones con facilidad'},
    expl:'El azufre tiene 3p⁴: la repulsión electrónica reduce su E.Ion respecto al P. Forma S²⁻, sulfatos y sulfuros, y anillos S₈.'},
  {z:17,sym:'Cl',name:'Cloro',mass:35.45,group:17,period:3,block:'p',family:'halógeno',config:'[Ne]3s²3p⁵',ox:[-1,+1,+3,+5,+7],
    en:3.16,ie:1251,radius:79,ea:-349,
    hints:{en:'Alta, halógeno',ie:'Muy alta, casi capa cerrada',radius:'Pequeño',ea:'La mayor en magnitud de toda la tabla'},
    expl:'El cloro tiene la mayor afinidad electrónica en magnitud (-349 kJ/mol), incluso mayor que la del flúor por su radio más amplio que reduce repulsión. Forma sales de cloruro.'},
  {z:18,sym:'Ar',name:'Argón',mass:39.948,group:18,period:3,block:'p',family:'gas-noble',config:'[Ne]3s²3p⁶',ox:[0],
    en:null,ie:1521,radius:71,ea:0,
    hints:{en:'No reactivo',ie:'Alta, capa cerrada',radius:'Pequeño',ea:'No capta electrones'},
    expl:'El argón es el tercer gas más abundante de la atmósfera (0.93%, más que el CO₂). Inerte: se usa en bombillas y soldadura para aislar materiales reactivos.'},
  {z:19,sym:'K',name:'Potasio',mass:39.098,group:1,period:4,block:'s',family:'alcalino',config:'[Ar]4s¹',ox:[+1],
    en:0.82,ie:419,radius:243,ea:-48,
    hints:{en:'Bajísimo, alcalino pesado',ie:'Una de las más bajas de la tabla',radius:'Muy grande, nueva capa',ea:'Forma K⁺ con extrema facilidad'},
    expl:'El potasio comienza el período 4 con [Ar]4s¹. Es esencial para el potencial de membrana en células nerviosas y musculares. Reacciona violentamente con agua.'},
  {z:20,sym:'Ca',name:'Calcio',mass:40.078,group:2,period:4,block:'s',family:'alcalinotérreo',config:'[Ar]4s²',ox:[+2],
    en:1.00,ie:590,radius:194,ea:-2,
    hints:{en:'Bajo',ie:'Subcapa 4s llena',radius:'Grande',ea:'No suele captar electrones'},
    expl:'El calcio forma Ca²⁺, esencial en huesos, dientes y contracción muscular. Es el quinto elemento más abundante en la corteza terrestre.'},
  {z:24,sym:'Cr',name:'Cromo',mass:51.996,group:6,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d⁵4s¹',ox:[+2,+3,+6],
    en:1.66,ie:653,radius:128,ea:-64,
    hints:{en:'Típica de metal de transición',ie:'Configuración especial 3d⁵4s¹',radius:'Mediano',ea:'Moderada'},
    expl:'El Cr presenta una excepción a la regla de Madelung: su configuración real es [Ar]3d⁵4s¹ (no 3d⁴4s²) porque la subcapa d semillena es más estable. Sus estados +3 y +6 son los más comunes.'},
  {z:25,sym:'Mn',name:'Manganeso',mass:54.938,group:7,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d⁵4s²',ox:[+2,+4,+6,+7],
    en:1.55,ie:717,radius:127,ea:0,
    hints:{en:'Moderada',ie:'3d⁵ semillena, estable',radius:'Mediano',ea:'No favorable'},
    expl:'El Mn tiene 3d⁵ semilleno, lo que le da estabilidad extra y muchos estados de oxidación: +2 (más estable), +4 (MnO₂), +6 y +7 (KMnO₄ violeta intenso, fuerte oxidante).'},
  {z:26,sym:'Fe',name:'Hierro',mass:55.845,group:8,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d⁶4s²',ox:[+2,+3,+6],
    en:1.83,ie:762,radius:126,ea:-16,
    hints:{en:'Típica de metal de transición',ie:'Aumenta respecto al Mn',radius:'Mediano',ea:'Moderada'},
    expl:'El hierro forma Fe²⁺ y Fe³⁺. Es el componente central de la hemoglobina (transporte de O₂) y el metal más usado por la humanidad. Su núcleo tiene la mayor energía de enlace por nucleón.'},
  {z:29,sym:'Cu',name:'Cobre',mass:63.546,group:11,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d¹⁰4s¹',ox:[+1,+2],
    en:1.90,ie:746,radius:128,ea:-119,
    hints:{en:'Moderada-alta',ie:'Configuración especial 3d¹⁰4s¹',radius:'Mediano',ea:'Capta moderadamente'},
    expl:'El Cu es otra excepción a Madelung: 3d¹⁰4s¹ (en vez de 3d⁹4s²) porque la subcapa d completa estabiliza la energía. Excelente conductor eléctrico y térmico.'},
  {z:30,sym:'Zn',name:'Zinc',mass:65.38,group:12,period:4,block:'d',family:'grupo-12',config:'[Ar]3d¹⁰4s²',ox:[+2],
    en:1.65,ie:906,radius:139,ea:0,
    hints:{en:'Moderada',ie:'3d¹⁰4s² muy estable',radius:'Mediano',ea:'No favorable'},
    expl:'El Zn tiene 3d¹⁰4s² (subcapa d completa). Forma solo Zn²⁺ y es esencial en numerosas enzimas. Algunos textos no lo consideran metal de transición porque no usa orbitales d en sus compuestos.'},
  {z:35,sym:'Br',name:'Bromo',mass:79.904,group:17,period:4,block:'p',family:'halógeno',config:'[Ar]3d¹⁰4s²4p⁵',ox:[-1,+1,+5],
    en:2.96,ie:1140,radius:94,ea:-325,
    hints:{en:'Alta, halógeno',ie:'Alta, casi capa cerrada',radius:'Mayor que el Cl',ea:'Muy negativa'},
    expl:'El bromo es el único no-metal líquido a temperatura ambiente (p.f. -7°C, p.eb. 59°C). Halógeno reactivo, forma bromuros y se usaba en compuestos antidetonantes.'},
  {z:47,sym:'Ag',name:'Plata',mass:107.868,group:11,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d¹⁰5s¹',ox:[+1],
    en:1.93,ie:731,radius:144,ea:-126,
    hints:{en:'Moderada-alta',ie:'Excepción análoga al Cu: 4d¹⁰5s¹',radius:'Mediano-grande',ea:'Capta moderadamente'},
    expl:'La plata es excepción a Madelung (4d¹⁰5s¹). Mejor conductor eléctrico conocido. Su único estado común es +1 (Ag⁺).'},
  {z:53,sym:'I',name:'Yodo',mass:126.904,group:17,period:5,block:'p',family:'halógeno',config:'[Kr]4d¹⁰5s²5p⁵',ox:[-1,+1,+5,+7],
    en:2.66,ie:1008,radius:115,ea:-295,
    hints:{en:'La menor de los halógenos comunes',ie:'Menor que la del Br',radius:'Mayor que el Br',ea:'Negativa'},
    expl:'El yodo es el halógeno más pesado estable. Sólido violeta oscuro a temperatura ambiente, sublima fácilmente. Esencial para la tiroides (T3/T4).'},
  {z:55,sym:'Cs',name:'Cesio',mass:132.905,group:1,period:6,block:'s',family:'alcalino',config:'[Xe]6s¹',ox:[+1],
    en:0.79,ie:376,radius:298,ea:-46,
    hints:{en:'La más baja entre los elementos estables',ie:'Una de las más bajas de la tabla',radius:'Enorme',ea:'Fácil formación de catión'},
    expl:'El cesio tiene la electronegatividad más baja entre los elementos estables (0.79). Su único electrón 6s¹ está muy lejos del núcleo, por eso se ioniza con facilidad. Reloj atómico de Cs define el segundo SI.'},
  {z:74,sym:'W',name:'Tungsteno',mass:183.84,group:6,period:6,block:'d',family:'metal-transicion',config:'[Xe]4f¹⁴5d⁴6s²',ox:[+4,+6],
    en:2.36,ie:770,radius:139,ea:-79,
    hints:{en:'Sorprendentemente alta para un metal',ie:'Alta por contracción lantánida',radius:'Pequeño por contracción lantánida',ea:'Negativa'},
    expl:'El tungsteno (W) tiene el punto de fusión más alto de todos los metales (3422°C). Su pequeño tamaño y alta densidad provienen de la contracción lantánida (los lantánidos comprimen el período 6).'},
  {z:78,sym:'Pt',name:'Platino',mass:195.084,group:10,period:6,block:'d',family:'metal-transicion',config:'[Xe]4f¹⁴5d⁹6s¹',ox:[+2,+4],
    en:2.28,ie:870,radius:139,ea:-205,
    hints:{en:'Alta para un metal',ie:'Excepción de Madelung',radius:'Pequeño por contracción lantánida',ea:'Muy negativa'},
    expl:'El platino tiene configuración especial 5d⁹6s¹. Inerte químicamente, catalizador esencial en convertidores catalíticos y en hidrogenación.'},
  {z:79,sym:'Au',name:'Oro',mass:196.967,group:11,period:6,block:'d',family:'metal-transicion',config:'[Xe]4f¹⁴5d¹⁰6s¹',ox:[+1,+3],
    en:2.54,ie:890,radius:144,ea:-223,
    hints:{en:'Sorprendentemente alta',ie:'Alta por efectos relativistas',radius:'Comprimido por efectos relativistas',ea:'Muy negativa'},
    expl:'El oro tiene 5d¹⁰6s¹ (excepción) y muestra efectos relativistas: los electrones 6s viajan tan rápido que su masa relativista los contrae, dando al oro su color amarillo característico (absorbe azul).'},
  {z:80,sym:'Hg',name:'Mercurio',mass:200.59,group:12,period:6,block:'d',family:'grupo-12',config:'[Xe]4f¹⁴5d¹⁰6s²',ox:[+1,+2],
    en:2.00,ie:1007,radius:132,ea:0,
    hints:{en:'Alta para un metal',ie:'Muy alta por efectos relativistas',radius:'Comprimido relativisticamente',ea:'No favorable'},
    expl:'El mercurio es líquido a temperatura ambiente (p.f. -39°C) por efectos relativistas que debilitan los enlaces metálicos. Su 6s² está fuertemente sujeto, por eso casi no comparte electrones.'},
  {z:82,sym:'Pb',name:'Plomo',mass:207.2,group:14,period:6,block:'p',family:'metal-postransicion',config:'[Xe]4f¹⁴5d¹⁰6s²6p²',ox:[+2,+4],
    en:2.33,ie:716,radius:154,ea:-35,
    hints:{en:'Moderada',ie:'Pareja inerte 6s²',radius:'Mediano-grande',ea:'Negativa'},
    expl:'El plomo muestra el "efecto par inerte": su 6s² no participa en enlaces, por eso prefiere el estado +2 sobre el +4. Tóxico, pero usado históricamente en tuberías y pinturas.'},
  {z:58,sym:'Ce',name:'Cerio',mass:140.116,group:3,period:6,block:'f',family:'lantanido',config:'[Xe]4f¹5d¹6s²',ox:[+3,+4],
    en:1.12,ie:534,radius:182,ea:-50,
    hints:{en:'Baja, lantánido',ie:'Baja',radius:'Grande, bloque f',ea:'Moderada'},
    expl:'El cerio es el lantánido más abundante. Único lantánido que muestra estabilidad notable en estado +4 (Ce⁴⁺), por la estabilidad del 4f⁰ que resulta tras perder 4 electrones. Usado en cristales y catalizadores.'},
  {z:60,sym:'Nd',name:'Neodimio',mass:144.242,group:3,period:6,block:'f',family:'lantanido',config:'[Xe]4f⁴6s²',ox:[+3],
    en:1.14,ie:533,radius:181,ea:-50,
    hints:{en:'Baja, lantánido',ie:'Baja',radius:'Grande',ea:'Moderada'},
    expl:'El neodimio se usa en los imanes permanentes más fuertes conocidos (Nd₂Fe₁₄B). Su estado característico es +3, típico de los lantánidos.'},
  {z:92,sym:'U',name:'Uranio',mass:238.029,group:3,period:7,block:'f',family:'actinido',config:'[Rn]5f³6d¹7s²',ox:[+3,+4,+5,+6],
    en:1.38,ie:598,radius:196,ea:-51,
    hints:{en:'Moderada, actínido',ie:'Moderada',radius:'Muy grande',ea:'Moderada'},
    expl:'El uranio es el elemento natural más pesado. Su isótopo U-235 sostiene reacciones nucleares en cadena (fisión). Forma compuestos en estados +3 a +6, siendo el +6 (UO₂²⁺) el más estable en disolución.'},
  /* ===== Bloque d/p del período 4 (ampliación) ===== */
  {z:21,sym:'Sc',name:'Escandio',mass:44.956,group:3,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d¹4s²',ox:[+3],en:1.36,ie:633,radius:184,ea:-18,
    hints:{en:'Baja, similar a alcalinotérreos',ie:'Inicia el bloque d',radius:'Grande',ea:'Casi nula'},
    expl:'El escandio inicia el bloque d. Solo presenta estado +3 y se comporta más como un lantánido ligero. Escaso pero usado en aleaciones de aluminio para aviación.'},
  {z:22,sym:'Ti',name:'Titanio',mass:47.867,group:4,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d²4s²',ox:[+2,+3,+4],en:1.54,ie:659,radius:176,ea:-8,
    hints:{en:'Moderada',ie:'Aumenta respecto al Sc',radius:'Grande',ea:'Pequeña'},
    expl:'El titanio destaca por su alta resistencia y baja densidad. Su estado más estable es +4 (TiO₂, pigmento blanco). Esencial en implantes médicos por biocompatibilidad.'},
  {z:23,sym:'V',name:'Vanadio',mass:50.942,group:5,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d³4s²',ox:[+2,+3,+4,+5],en:1.63,ie:651,radius:171,ea:-51,
    hints:{en:'Moderada',ie:'Sigue la tendencia del bloque d',radius:'Grande',ea:'Moderada'},
    expl:'El vanadio presenta 4 estados de oxidación con colores distintivos en disolución (V²⁺ violeta, V³⁺ verde, VO²⁺ azul, VO₂⁺ amarillo). Usado en aceros de alta resistencia.'},
  {z:27,sym:'Co',name:'Cobalto',mass:58.933,group:9,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d⁷4s²',ox:[+2,+3],en:1.88,ie:760,radius:125,ea:-64,
    hints:{en:'Típica de transición',ie:'Similar al Fe',radius:'Mediano',ea:'Moderada'},
    expl:'El cobalto es ferromagnético como Fe y Ni. Componente central de la vitamina B₁₂. Sus complejos suelen ser azules intensos (Co²⁺) o rosados.'},
  {z:28,sym:'Ni',name:'Níquel',mass:58.693,group:10,period:4,block:'d',family:'metal-transicion',config:'[Ar]3d⁸4s²',ox:[+2,+3],en:1.91,ie:737,radius:124,ea:-112,
    hints:{en:'Moderada-alta',ie:'Aumenta',radius:'Mediano',ea:'Negativa'},
    expl:'El níquel es ferromagnético y muy resistente a la corrosión. Catalizador en hidrogenación. Su estado más común es +2 (Ni²⁺ verde).'},
  {z:31,sym:'Ga',name:'Galio',mass:69.723,group:13,period:4,block:'p',family:'metal-postransicion',config:'[Ar]3d¹⁰4s²4p¹',ox:[+3],en:1.81,ie:579,radius:136,ea:-41,
    hints:{en:'Moderada',ie:'Vuelve a bajar tras llenar 3d',radius:'Grande',ea:'Negativa'},
    expl:'El galio funde en la mano (29.8°C) pero hierve a 2400°C, el mayor rango líquido de cualquier metal. Componente clave del GaAs en LEDs y semiconductores de alta velocidad.'},
  {z:32,sym:'Ge',name:'Germanio',mass:72.630,group:14,period:4,block:'p',family:'metaloide',config:'[Ar]3d¹⁰4s²4p²',ox:[+2,+4],en:2.01,ie:762,radius:125,ea:-119,
    hints:{en:'Moderada',ie:'Aumenta',radius:'Mediano',ea:'Negativa'},
    expl:'El germanio fue el primer semiconductor usado en transistores (1947) antes del silicio. Mendeleev lo predijo como "eka-silicio" antes de su descubrimiento.'},
  {z:33,sym:'As',name:'Arsénico',mass:74.922,group:15,period:4,block:'p',family:'metaloide',config:'[Ar]3d¹⁰4s²4p³',ox:[-3,+3,+5],en:2.18,ie:947,radius:114,ea:-78,
    hints:{en:'Alta',ie:'4p³ semilleno',radius:'Pequeño',ea:'Moderada'},
    expl:'El arsénico tiene 4p³ semilleno (excepción análoga a N y P). Tóxico, pero esencial en semiconductores GaAs y antiguos pigmentos verdes.'},
  {z:34,sym:'Se',name:'Selenio',mass:78.971,group:16,period:4,block:'p',family:'no-metal',config:'[Ar]3d¹⁰4s²4p⁴',ox:[-2,+4,+6],en:2.55,ie:941,radius:103,ea:-195,
    hints:{en:'Alta, no-metal',ie:'Menor que el As (paralelo al O-N)',radius:'Pequeño',ea:'Muy negativa'},
    expl:'El selenio es esencial en trazas (selenocisteína, "21º aminoácido"). Su conductividad varía con la luz: usado en fotocopiadoras y células solares.'},
  {z:36,sym:'Kr',name:'Kriptón',mass:83.798,group:18,period:4,block:'p',family:'gas-noble',config:'[Ar]3d¹⁰4s²4p⁶',ox:[0,+2],en:3.00,ie:1351,radius:88,ea:0,
    hints:{en:'No reactivo',ie:'Alta, capa cerrada',radius:'Pequeño',ea:'No capta'},
    expl:'El kriptón fue el segundo gas noble en formar compuestos (KrF₂). Hasta 1960, el metro estaba definido por la longitud de onda de una línea espectral del Kr-86.'},
  /* ===== Período 5 ===== */
  {z:37,sym:'Rb',name:'Rubidio',mass:85.468,group:1,period:5,block:'s',family:'alcalino',config:'[Kr]5s¹',ox:[+1],en:0.82,ie:403,radius:265,ea:-47,
    hints:{en:'Muy baja',ie:'Muy baja',radius:'Enorme',ea:'Forma Rb⁺'},
    expl:'El rubidio es extremadamente reactivo: arde espontáneamente en aire. Usado en relojes atómicos y como trazador biológico.'},
  {z:38,sym:'Sr',name:'Estroncio',mass:87.62,group:2,period:5,block:'s',family:'alcalinotérreo',config:'[Kr]5s²',ox:[+2],en:0.95,ie:549,radius:219,ea:-5,
    hints:{en:'Baja',ie:'5s² lleno',radius:'Grande',ea:'Casi nula'},
    expl:'El estroncio da color rojo a los fuegos artificiales. Su isótopo Sr-90 es un peligroso producto de fisión que se acumula en huesos.'},
  {z:39,sym:'Y',name:'Itrio',mass:88.906,group:3,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d¹5s²',ox:[+3],en:1.22,ie:600,radius:212,ea:-30,
    hints:{en:'Baja',ie:'Inicia bloque d del período 5',radius:'Grande',ea:'Moderada'},
    expl:'El itrio se comporta como un lantánido ligero. Componente del YBa₂Cu₃O₇, primer superconductor a más de 77 K (nitrógeno líquido).'},
  {z:40,sym:'Zr',name:'Zirconio',mass:91.224,group:4,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d²5s²',ox:[+4],en:1.33,ie:640,radius:206,ea:-41,
    hints:{en:'Baja-moderada',ie:'Aumenta',radius:'Grande',ea:'Moderada'},
    expl:'El zirconio resiste corrosión y captura mal neutrones, por eso se usa en revestimientos de combustible nuclear. ZrO₂ (circonia) imita diamantes.'},
  {z:41,sym:'Nb',name:'Niobio',mass:92.906,group:5,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d⁴5s¹',ox:[+3,+5],en:1.6,ie:652,radius:198,ea:-86,
    hints:{en:'Moderada',ie:'Excepción de Madelung 4d⁴5s¹',radius:'Grande',ea:'Negativa'},
    expl:'El niobio es excepción de Madelung (4d⁴5s¹ en lugar de 4d³5s²). Superconductor por debajo de 9.2 K, base de aleaciones para imanes de RMN.'},
  {z:42,sym:'Mo',name:'Molibdeno',mass:95.95,group:6,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d⁵5s¹',ox:[+4,+6],en:2.16,ie:684,radius:190,ea:-72,
    hints:{en:'Moderada',ie:'Excepción análoga al Cr (4d⁵5s¹)',radius:'Grande',ea:'Negativa'},
    expl:'El molibdeno es excepción análoga al Cr: 4d⁵5s¹ por estabilidad de subcapa semillena. Cofactor de enzimas como la nitrogenasa que fija N₂ atmosférico.'},
  {z:43,sym:'Tc',name:'Tecnecio',mass:98,group:7,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d⁵5s²',ox:[+4,+7],en:1.9,ie:702,radius:183,ea:-53,
    hints:{en:'Moderada',ie:'Análoga al Mn',radius:'Grande',ea:'Negativa'},
    expl:'El Tc es el primer elemento sintético (1937). Todos sus isótopos son radiactivos. Tc-99m es el radiotrazador más usado en medicina nuclear.'},
  {z:44,sym:'Ru',name:'Rutenio',mass:101.07,group:8,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d⁷5s¹',ox:[+3,+4],en:2.2,ie:710,radius:178,ea:-101,
    hints:{en:'Alta para metal',ie:'Excepción 4d⁷5s¹',radius:'Mediano',ea:'Negativa'},
    expl:'El rutenio es otra excepción de Madelung. Catalizador clave en procesos industriales (Haber, hidrogenación) y en celdas solares de Grätzel.'},
  {z:45,sym:'Rh',name:'Rodio',mass:102.906,group:9,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d⁸5s¹',ox:[+3],en:2.28,ie:720,radius:173,ea:-110,
    hints:{en:'Alta',ie:'Excepción 4d⁸5s¹',radius:'Mediano',ea:'Muy negativa'},
    expl:'El rodio es uno de los metales más caros del mundo. Catalizador esencial en convertidores catalíticos para reducir NOₓ.'},
  {z:46,sym:'Pd',name:'Paladio',mass:106.42,group:10,period:5,block:'d',family:'metal-transicion',config:'[Kr]4d¹⁰',ox:[+2,+4],en:2.20,ie:804,radius:169,ea:-54,
    hints:{en:'Alta',ie:'Excepción extrema: 4d¹⁰ sin 5s',radius:'Mediano',ea:'Negativa'},
    expl:'El Pd es la excepción más extrema a Madelung: configuración [Kr]4d¹⁰ sin electrones 5s. Absorbe hasta 900 veces su volumen en H₂; catalizador clave en química orgánica.'},
  {z:48,sym:'Cd',name:'Cadmio',mass:112.414,group:12,period:5,block:'d',family:'grupo-12',config:'[Kr]4d¹⁰5s²',ox:[+2],en:1.69,ie:868,radius:161,ea:0,
    hints:{en:'Moderada',ie:'4d¹⁰5s² lleno',radius:'Mediano-grande',ea:'No favorable'},
    expl:'El cadmio (grupo 12) tiene la d¹⁰ completa. IUPAC no lo considera metal de transición porque sus compuestos no usan orbitales d. Tóxico y carcinogénico.'},
  {z:49,sym:'In',name:'Indio',mass:114.818,group:13,period:5,block:'p',family:'metal-postransicion',config:'[Kr]4d¹⁰5s²5p¹',ox:[+1,+3],en:1.78,ie:558,radius:156,ea:-29,
    hints:{en:'Moderada',ie:'Vuelve a bajar tras llenar d',radius:'Grande',ea:'Negativa'},
    expl:'El indio es muy blando (se raya con la uña). El óxido de indio-estaño (ITO) es transparente y conductor: base de pantallas táctiles.'},
  {z:50,sym:'Sn',name:'Estaño',mass:118.71,group:14,period:5,block:'p',family:'metal-postransicion',config:'[Kr]4d¹⁰5s²5p²',ox:[+2,+4],en:1.96,ie:709,radius:145,ea:-107,
    hints:{en:'Moderada',ie:'Empieza a notarse el par inerte',radius:'Mediano-grande',ea:'Negativa'},
    expl:'El estaño tiene dos alótropos: blanco (metálico) y gris (semiconductor). A temperaturas frías el blanco se transforma en gris ("peste del estaño"). Componente del bronce.'},
  {z:51,sym:'Sb',name:'Antimonio',mass:121.760,group:15,period:5,block:'p',family:'metaloide',config:'[Kr]4d¹⁰5s²5p³',ox:[-3,+3,+5],en:2.05,ie:834,radius:133,ea:-103,
    hints:{en:'Alta',ie:'5p³ semilleno',radius:'Mediano',ea:'Negativa'},
    expl:'El antimonio es metaloide. Sus compuestos se usaban en cosmética antigua (kohl). Catalizador en producción de PET y retardante de llama.'},
  {z:52,sym:'Te',name:'Telurio',mass:127.60,group:16,period:5,block:'p',family:'metaloide',config:'[Kr]4d¹⁰5s²5p⁴',ox:[-2,+4,+6],en:2.10,ie:869,radius:123,ea:-190,
    hints:{en:'Alta',ie:'Aumenta respecto al Sb',radius:'Mediano',ea:'Muy negativa'},
    expl:'El telurio es uno de los elementos más raros en la corteza terrestre. CdTe es un semiconductor usado en paneles solares de película fina.'},
  {z:54,sym:'Xe',name:'Xenón',mass:131.293,group:18,period:5,block:'p',family:'gas-noble',config:'[Kr]4d¹⁰5s²5p⁶',ox:[0,+2,+4,+6,+8],en:2.60,ie:1170,radius:108,ea:0,
    hints:{en:'No reactivo (con excepciones)',ie:'Alta, capa cerrada',radius:'Mediano',ea:'No capta'},
    expl:'El xenón fue el primer gas noble en formar compuestos (XeF₄, 1962, Bartlett). Anestésico raro y eficaz, propelente iónico para sondas espaciales.'},
  /* ===== Período 6 (extra) ===== */
  {z:56,sym:'Ba',name:'Bario',mass:137.327,group:2,period:6,block:'s',family:'alcalinotérreo',config:'[Xe]6s²',ox:[+2],en:0.89,ie:503,radius:253,ea:-14,
    hints:{en:'Baja',ie:'6s² lleno',radius:'Enorme',ea:'Casi nula'},
    expl:'El bario da color verde a la pirotecnia. BaSO₄ es opaco a rayos X y se usa como contraste digestivo (no tóxico por insolubilidad).'},
  {z:57,sym:'La',name:'Lantano',mass:138.905,group:3,period:6,block:'d',family:'lantanido',config:'[Xe]5d¹6s²',ox:[+3],en:1.10,ie:538,radius:226,ea:-48,
    hints:{en:'Baja',ie:'Encabeza los lantánidos',radius:'Grande',ea:'Moderada'},
    expl:'El lantano da nombre a los lantánidos. Aunque está en grupo 3 y bloque d formalmente, abre la serie 4f. Usado en lentes de cámara de alta refracción.'},
  {z:72,sym:'Hf',name:'Hafnio',mass:178.49,group:4,period:6,block:'d',family:'metal-transicion',config:'[Xe]4f¹⁴5d²6s²',ox:[+4],en:1.3,ie:659,radius:208,ea:-14,
    hints:{en:'Baja-moderada',ie:'Similar al Zr por contracción lantánida',radius:'Casi igual al Zr',ea:'Pequeña'},
    expl:'El hafnio es química y físicamente casi indistinguible del Zr por la contracción lantánida. Captura neutrones eficazmente: barras de control en reactores nucleares.'},
  {z:73,sym:'Ta',name:'Tantalio',mass:180.948,group:5,period:6,block:'d',family:'metal-transicion',config:'[Xe]4f¹⁴5d³6s²',ox:[+5],en:1.5,ie:761,radius:200,ea:-31,
    hints:{en:'Baja-moderada',ie:'Aumenta',radius:'Grande pero comprimido',ea:'Negativa'},
    expl:'El tantalio resiste corrosión incluso a aguas regias. Sus condensadores son la base de teléfonos móviles. Coltán es su mineral, fuente de conflicto en RDC.'},
  {z:83,sym:'Bi',name:'Bismuto',mass:208.980,group:15,period:6,block:'p',family:'metal-postransicion',config:'[Xe]4f¹⁴5d¹⁰6s²6p³',ox:[+3,+5],en:2.02,ie:703,radius:143,ea:-91,
    hints:{en:'Moderada',ie:'Par inerte 6s²',radius:'Mediano-grande',ea:'Negativa'},
    expl:'El bismuto fue considerado el elemento estable más pesado hasta 2003 (decae con t½ = 1.9·10¹⁹ años, mayor que la edad del universo). Bonitos cristales arcoíris por óxido superficial.'},
  {z:86,sym:'Rn',name:'Radón',mass:222,group:18,period:6,block:'p',family:'gas-noble',config:'[Xe]4f¹⁴5d¹⁰6s²6p⁶',ox:[0,+2],en:2.2,ie:1037,radius:120,ea:0,
    hints:{en:'No reactivo',ie:'Capa cerrada',radius:'Grande',ea:'No capta'},
    expl:'El radón es radiactivo y radiógeno (proviene del decay del Ra y U). Segunda causa de cáncer de pulmón tras el tabaco; se acumula en sótanos mal ventilados.'}
];

const Z_TO_EL = {};
ELEMENTS.forEach(e=>Z_TO_EL[e.z]=e);

// ============================================================
// DATA: ENLACES QUÍMICOS
// ============================================================
const BONDS = [
  {a:'Na',b:'Cl',type:'iónico',expl:'ΔEN ≈ 2.23 (>1.7) → enlace iónico. Na cede su 3s¹ a Cl que completa 3p⁶.'},
  {a:'K',b:'F',type:'iónico',expl:'ΔEN ≈ 3.16 → fuertemente iónico. KF tiene punto de fusión muy alto (858°C).'},
  {a:'Mg',b:'O',type:'iónico',expl:'ΔEN ≈ 2.13 → iónico. MgO es refractario (p.f. 2852°C).'},
  {a:'H',b:'O',type:'covalente polar',expl:'ΔEN ≈ 1.24 → covalente polar. El O atrae más los electrones; el H queda parcialmente positivo (δ+).'},
  {a:'H',b:'N',type:'covalente polar',expl:'ΔEN ≈ 0.84 → covalente polar (NH₃). Permite puentes de hidrógeno.'},
  {a:'C',b:'H',type:'covalente apolar',expl:'ΔEN ≈ 0.35 (<0.4) → prácticamente apolar. Base de hidrocarburos.'},
  {a:'C',b:'C',type:'covalente apolar',expl:'ΔEN = 0 → covalente puro. Base de la cadena carbonada orgánica.'},
  {a:'O',b:'O',type:'covalente apolar',expl:'ΔEN = 0 → covalente apolar. O₂ tiene doble enlace (π+σ).'},
  {a:'N',b:'N',type:'covalente apolar',expl:'ΔEN = 0 → triple enlace en N₂ (885 kJ/mol, muy estable).'},
  {a:'C',b:'O',type:'covalente polar',expl:'ΔEN ≈ 0.89 → polar. Presente en CO, CO₂, alcoholes, ácidos.'},
  {a:'Fe',b:'Fe',type:'metálico',expl:'Mar de electrones deslocalizados entre cationes Fe en una red metálica.'},
  {a:'Cu',b:'Cu',type:'metálico',expl:'Enlace metálico: alta conductividad eléctrica y térmica por electrones libres.'},
  {a:'Au',b:'Au',type:'metálico',expl:'Enlace metálico con efectos relativistas que dan al oro su color amarillo.'},
  {a:'Ca',b:'F',type:'iónico',expl:'ΔEN ≈ 2.98 → iónico. CaF₂ (fluorita) es muy estable.'},
  {a:'H',b:'Cl',type:'covalente polar',expl:'ΔEN ≈ 0.96 → polar. HCl en agua se ioniza dando ácido clorhídrico.'},
  {a:'Si',b:'O',type:'covalente polar',expl:'ΔEN ≈ 1.54 → polar. Base de silicatos y vidrios (SiO₂).'}
];

// ============================================================
// DATA: ISÓTOPOS (educación básica)
// ============================================================
const ISOTOPES = [
  {sym:'H', items:[{a:1,name:'protio',pct:99.98,note:'estable'},{a:2,name:'deuterio',pct:0.02,note:'estable'},{a:3,name:'tritio',pct:0,note:'radiactivo β⁻, t½=12.3 a'}]},
  {sym:'C', items:[{a:12,name:'C-12',pct:98.9,note:'estable, define la uma'},{a:13,name:'C-13',pct:1.1,note:'estable'},{a:14,name:'C-14',pct:0,note:'radiactivo, datación arqueológica'}]},
  {sym:'O', items:[{a:16,name:'O-16',pct:99.76,note:'estable'},{a:17,name:'O-17',pct:0.04,note:'estable'},{a:18,name:'O-18',pct:0.20,note:'estable, paleotermometría'}]},
  {sym:'U', items:[{a:235,name:'U-235',pct:0.72,note:'fisil, reactores y armas'},{a:238,name:'U-238',pct:99.27,note:'fértil, decay alfa'}]},
  {sym:'Cl', items:[{a:35,name:'Cl-35',pct:75.78,note:'estable'},{a:37,name:'Cl-37',pct:24.22,note:'estable'}]}
];

// ============================================================
// DATA: PROBLEMAS OLIMPIADA (educación intermedia)
// ============================================================
const OLYMPIAD_PROBLEMS = [
  {q:'¿Cuántos moles hay en 36 g de H₂O? (M=18 g/mol)', opts:['1','2','0.5','3'], correct:'2', expl:'n = m/M = 36/18 = 2 mol'},
  {q:'¿Cuál es el pH de una disolución 0.01 M de HCl?', opts:['1','2','12','7'], correct:'2', expl:'HCl es ácido fuerte: pH = -log(0.01) = 2'},
  {q:'En la reacción 2H₂ + O₂ → 2H₂O, ¿cuántos moles de O₂ se necesitan para producir 4 moles de H₂O?', opts:['1','2','3','4'], correct:'2', expl:'Estequiometría 2:1 → 4 mol H₂O necesitan 2 mol O₂'},
  {q:'¿Cuál es la masa de 0.5 mol de NaCl? (M=58.5 g/mol)', opts:['29.25 g','58.5 g','117 g','11.7 g'], correct:'29.25 g', expl:'m = n·M = 0.5·58.5 = 29.25 g'},
  {q:'¿Qué tiene mayor energía de ionización: Na o Mg?', opts:['Na','Mg','Iguales','Depende'], correct:'Mg', expl:'Mg (3s² lleno) > Na (3s¹). EI aumenta de izquierda a derecha en el período.'},
  {q:'Para A + B ⇌ C con Kc = 100, ¿hacia dónde se desplaza si Q=1?', opts:['Reactivos','Productos','Equilibrio','No se mueve'], correct:'Productos', expl:'Q<Kc → la reacción avanza hacia productos.'},
  {q:'¿Cuántos gramos de CO₂ produce la combustión completa de 16 g de CH₄? (M CH₄=16, CO₂=44)', opts:['16 g','22 g','44 g','88 g'], correct:'44 g', expl:'CH₄ + 2O₂ → CO₂ + 2H₂O. 1 mol CH₄ (16g) → 1 mol CO₂ (44g).'},
  {q:'¿Cuál es el pOH de una disolución con [OH⁻] = 10⁻⁴ M?', opts:['4','10','7','14'], correct:'4', expl:'pOH = -log(10⁻⁴) = 4'},
  {q:'¿Cuántos electrones de valencia tiene el azufre (Z=16)?', opts:['4','6','8','2'], correct:'6', expl:'Configuración [Ne]3s²3p⁴ → 2+4 = 6 electrones de valencia'},
  {q:'En NaOH + HCl → NaCl + H₂O, si reaccionan 0.1 mol de cada uno, ¿cuántos moles de sal se forman?', opts:['0.05','0.1','0.2','1'], correct:'0.1', expl:'Estequiometría 1:1 → 0.1 mol NaCl'},
  {q:'¿Cuál es el estado de oxidación del S en SO₄²⁻?', opts:['+4','+6','-2','+2'], correct:'+6', expl:'O = -2 ×4 = -8; total = -2 → S = +6'},
  {q:'Si ΔH < 0 y ΔS > 0, la reacción es:', opts:['No espontánea','Espontánea a toda T','Espontánea solo a alta T','Espontánea solo a baja T'], correct:'Espontánea a toda T', expl:'ΔG = ΔH - TΔS. Si ΔH<0 y ΔS>0, ΔG<0 siempre.'},
  {q:'Volumen de O₂ (CNTP) liberado al descomponer 0.5 mol KClO₃ → KCl + 3/2 O₂', opts:['11.2 L','16.8 L','22.4 L','5.6 L'], correct:'16.8 L', expl:'0.5·(3/2) = 0.75 mol O₂ → 0.75·22.4 = 16.8 L'},
  {q:'¿Cuál es el ácido conjugado del NH₃?', opts:['NH₂⁻','NH₄⁺','N₂','OH⁻'], correct:'NH₄⁺', expl:'Ácido conjugado = base + H⁺ → NH₃ + H⁺ = NH₄⁺'},
  {q:'¿Qué tipo de hibridación tiene el carbono en CH₄?', opts:['sp','sp²','sp³','sp³d'], correct:'sp³', expl:'4 enlaces sigma → sp³ (geometría tetraédrica)'}
];

// ============================================================
// CONFIG: MODES, LEVELS
// ============================================================
const MODE_LABELS = {
  basico:'Básico',avanzado:'Avanzado',propiedades:'Propiedades',iones:'Iones',
  config:'Config. Electrónica',contrarreloj:'Contrarreloj',quiz:'Quiz',elite:'Élite',
  enlaces:'Enlaces',olimpiada:'Olimpiada',repaso:'Repaso',daily:'Reto del día'
};
const PAIRS_BY_LEVEL = {1:8, 2:12, 3:16};

// Element subsets per mode/level (pedagogical progression)
const POOLS = {
  // Level 1: bloque s + halógenos + gases nobles + C/N/O (estructurales)
  1: [1,2,3,6,7,8,9,10,11,17,19,20],
  // Level 2: añade bloque d común + algunos p del período 4
  2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,26,28,29,30,35,36,53],
  // Level 3: todo + lantánidos + posttransición + período 5
  3: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,47,50,53,54,55,56,74,78,79,80,82],
  // Élite: anomalías de Madelung, lantánidos, efectos relativistas
  elite: [24,25,29,30,41,42,44,45,46,47,57,58,60,72,73,74,78,79,80,82,83,92]
};

// ============================================================
// STATE
// ============================================================
const state = {
  mode:'basico',
  level:1,
  cards:[],            // [{id,type,el,prop?}]
  selected:null,
  matched:0,
  totalPairs:0,
  turns:0,
  errors:0,
  score:0,
  streak:0,
  maxStreak:0,
  multiplier:1,
  startTime:0,
  elapsed:0,
  timer:null,
  timeLimit:0,         // contrarreloj
  locked:false,
  hintUsed:false,
  hintCount:0,
  pairedElements:[],   // Z values of correctly matched elements
  // Persistent state
  xp:0,
  collection:new Set(),// Z values ever paired
  achievements:new Set(),
  muted:false,
  musicOn:false,
  easyMode:false,      // arranca en modo memoria por defecto
  extremeMode:false,
  lives:3,
  maxLives:3,
  powerups:{reveal:1, freeze:1, double:1, _doubleNext:0},
  errorBag:[],         // Z de elementos fallados (para modo Repaso)
  history:[],          // últimos pares emparejados con explicación
  unlocked:{basico:3,avanzado:3,propiedades:3,iones:3,config:3,contrarreloj:3,quiz:3,elite:3,enlaces:1,olimpiada:1,repaso:1,daily:1},
  starsByMode:{},      // {modo: {1:n,2:n,3:n}}
  dailyDone:null,      // {seed,score}
  a11y:{theme:'dark',scale:1,reduceMotion:false,bgAnimated:true},
  audioVol:{music:0.5,fx:0.6},
  firstPlay:true,
  records:[],
  // Quiz
  quiz:{q:0,total:10,score:0,current:null,opts:[],lives:3}
};

const RANKS = [
  {min:0,name:'Estudiante'},
  {min:100,name:'Aprendiz'},
  {min:300,name:'Químico Jr'},
  {min:600,name:'Químico'},
  {min:1000,name:'Científico'},
  {min:1500,name:'Maestro'},
  {min:2500,name:'Genio'},
  {min:4000,name:'Leyenda'}
];

const ACHIEVEMENTS = [
  {id:'first_match',icon:'🎯',name:'Primer acierto',desc:'Empareja tu primer par'},
  {id:'first_win',icon:'🏆',name:'Primera victoria',desc:'Completa una partida'},
  {id:'no_errors',icon:'💎',name:'Perfecto',desc:'Termina una partida sin errores'},
  {id:'combo_5',icon:'🔥',name:'En llamas',desc:'Consigue una racha de 5'},
  {id:'combo_10',icon:'⚡',name:'Imparable',desc:'Consigue una racha de 10'},
  {id:'level3',icon:'🎖️',name:'Nivel máximo',desc:'Completa el Nivel 3'},
  {id:'all_modes',icon:'🌈',name:'Variedad',desc:'Juega los 8 modos al menos una vez'},
  {id:'collect_20',icon:'🔬',name:'Coleccionista',desc:'Colecciona 20 elementos'},
  {id:'collect_all',icon:'👑',name:'Tabla completa',desc:'Colecciona todos los elementos disponibles'},
  {id:'elite_win',icon:'🧬',name:'Olimpiada',desc:'Completa el modo Élite'},
  {id:'speed_run',icon:'⏱️',name:'Velocista',desc:'Termina nivel 1 en menos de 30 segundos'},
  {id:'rank_master',icon:'🌟',name:'Maestro',desc:'Alcanza el rango Maestro (1500 XP)'}
];

const modesPlayed = new Set();

// ============================================================
// PERSISTENCE
// ============================================================
function loadState(){
  try{
    const raw = localStorage.getItem('ptv5');
    if(!raw) return;
    const d = JSON.parse(raw);
    state.xp = d.xp || 0;
    state.muted = !!d.muted;
    state.musicOn = !!d.musicOn;
    if(typeof d.easyMode === 'boolean') state.easyMode = d.easyMode;
    state.collection = new Set(d.collection || []);
    state.achievements = new Set(d.achievements || []);
    state.records = d.records || [];
    if(d.powerups) state.powerups = Object.assign(state.powerups, d.powerups);
    if(Array.isArray(d.errorBag)) state.errorBag = d.errorBag;
    if(Array.isArray(d.history)) state.history = d.history;
    if(d.unlocked) state.unlocked = Object.assign(state.unlocked, d.unlocked);
    if(d.starsByMode) state.starsByMode = d.starsByMode;
    if(d.dailyDone) state.dailyDone = d.dailyDone;
    if(d.a11y) state.a11y = Object.assign(state.a11y, d.a11y);
    if(d.audioVol) state.audioVol = Object.assign(state.audioVol, d.audioVol);
    if(typeof d.firstPlay === 'boolean') state.firstPlay = d.firstPlay;
    if(typeof d._xpBank === 'number') state._xpBank = d._xpBank;
    if(d.modesPlayed) d.modesPlayed.forEach(m=>modesPlayed.add(m));
  }catch(e){console.warn('loadState fail',e)}
}
function saveState(){
  try{
    const d = {
      xp:state.xp,
      muted:state.muted,
      musicOn:state.musicOn,
      easyMode:state.easyMode,
      collection:[...state.collection],
      achievements:[...state.achievements],
      records:state.records,
      powerups:state.powerups,
      errorBag:state.errorBag,
      history:state.history,
      unlocked:state.unlocked,
      starsByMode:state.starsByMode,
      dailyDone:state.dailyDone,
      a11y:state.a11y,
      audioVol:state.audioVol,
      firstPlay:state.firstPlay,
      _xpBank:state._xpBank||0,
      modesPlayed:[...modesPlayed]
    };
    localStorage.setItem('ptv5', JSON.stringify(d));
  }catch(e){console.warn('saveState fail',e)}
}

// ============================================================
// AUDIO (singleton context, iOS-safe)
// ============================================================
const AudioEngine = (()=>{
  let ctx=null, musicNode=null, musicGain=null;
  function ensure(){
    if(ctx) return ctx;
    try{
      ctx = new (window.AudioContext||window.webkitAudioContext)();
    }catch(e){return null}
    return ctx;
  }
  function resume(){
    if(ctx && ctx.state==='suspended') ctx.resume();
  }
  function tone(freq,dur,type,vol){
    if(state.muted) return;
    const c = ensure(); if(!c) return;
    resume();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type||'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(vol||0.15, c.currentTime+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime+dur);
    o.connect(g).connect(c.destination);
    o.start();
    o.stop(c.currentTime+dur+0.02);
  }
  function correct(streak){
    const base = 600 * (1 + Math.min(streak,8)*0.06);
    tone(base, 0.12, 'sine', 0.18);
    setTimeout(()=>tone(base*1.5, 0.12, 'sine', 0.18), 70);
    if(streak>=3) setTimeout(()=>tone(base*2, 0.16, 'triangle', 0.2), 140);
  }
  function wrong(){
    tone(180, 0.12, 'sawtooth', 0.18);
    setTimeout(()=>tone(140, 0.12, 'sawtooth', 0.18), 80);
  }
  function click(){tone(800, 0.04, 'square', 0.06)}
  function win(){
    [523,659,784,1046].forEach((f,i)=>setTimeout(()=>tone(f,0.18,'triangle',0.18),i*120));
  }
  function lose(){
    [400,300,200].forEach((f,i)=>setTimeout(()=>tone(f,0.18,'sawtooth',0.18),i*150));
  }
  function startMusic(){
    if(!state.musicOn) return;
    const c = ensure(); if(!c) return;
    resume();
    if(musicNode) return;
    // Master gain with slow "breathing" via LFO on amplitude
    musicGain = c.createGain();
    musicGain.gain.value = 0;
    musicGain.gain.linearRampToValueAtTime(0.04, c.currentTime + 2);
    // Low-pass filter for warmth
    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.5;
    filter.connect(musicGain);
    musicGain.connect(c.destination);
    // C major 7 chord — smooth, consonant, no frequency modulation
    const notes = [130.81, 164.81, 196.00, 246.94, 329.63];
    const oscs = notes.map((f,i)=>{
      const o = c.createOscillator();
      o.type = 'sine';
      o.frequency.value = f;
      const g = c.createGain();
      g.gain.value = i===0 ? 0.6 : (i===4 ? 0.25 : 0.4);
      o.connect(g).connect(filter);
      o.start();
      return {o,g};
    });
    // Slow amplitude LFO on master ("breathing")
    const lfo = c.createOscillator();
    const lfoGain = c.createGain();
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 0.015;
    lfo.connect(lfoGain).connect(musicGain.gain);
    lfo.start();
    musicNode = {oscs, lfo, filter};
  }
  function stopMusic(){
    if(!musicNode) return;
    const c = ctx;
    try{
      if(c && musicGain){
        musicGain.gain.cancelScheduledValues(c.currentTime);
        musicGain.gain.linearRampToValueAtTime(0, c.currentTime + 0.4);
      }
      setTimeout(()=>{
        try{
          musicNode.oscs.forEach(o=>o.o.stop());
          musicNode.lfo.stop();
          if(musicGain) musicGain.disconnect();
          if(musicNode.filter) musicNode.filter.disconnect();
        }catch(e){}
        musicNode = null;
      }, 450);
    }catch(e){musicNode=null}
  }
  // ===== Métodos extra =====
  let _fxVol = 1, _musicVol = 1;
  function setFxVol(v){ _fxVol = Math.max(0, Math.min(1, v)); }
  function setMusicVol(v){
    _musicVol = Math.max(0, Math.min(1, v));
    if(musicGain){
      try{ musicGain.gain.linearRampToValueAtTime(0.04 * _musicVol, ctx.currentTime + 0.2); }catch(e){}
    }
  }
  function whoosh(){
    if(state.muted) return;
    const c = ensure(); if(!c) return; resume();
    const o = c.createOscillator();
    const g = c.createGain();
    const f = c.createBiquadFilter();
    f.type='bandpass'; f.frequency.value = 800; f.Q.value = 2;
    o.type='sawtooth'; o.frequency.value = 400;
    o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.08);
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.05 * _fxVol, c.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.1);
    o.connect(f).connect(g).connect(c.destination);
    o.start(); o.stop(c.currentTime + 0.12);
  }
  function riser(combo){
    if(state.muted) return;
    const base = 400;
    for(let i=0;i<3;i++){
      setTimeout(()=>tone(base*(1+i*0.5+combo*0.05), 0.08, 'triangle', 0.12*_fxVol), i*60);
    }
  }
  function stinger(){
    if(state.muted) return;
    [261.63, 329.63, 392.00, 523.25].forEach((f,i)=>setTimeout(()=>tone(f, 0.4, 'triangle', 0.16*_fxVol), i*40));
  }
  return {tone,correct,wrong,click,win,lose,startMusic,stopMusic,resume,whoosh,riser,stinger,setFxVol,setMusicVol};
})();

// ============================================================
// BG ENGINE — fondo animado de símbolos químicos
// ============================================================
const BgEngine = (()=>{
  const SYMBOLS = ['H','He','Li','Be','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Fe','Cu','Zn','Br','Ag','Au','Hg','Pb','I','U'];
  let canvas, ctx, dpr=1, w=0, h=0;
  let particles = [];
  let raf = null;
  let animated = true;
  let initialized = false;

  function resize(){
    if(!canvas) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w+'px';
    canvas.style.height = h+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function spawn(){
    const count = Math.max(14, Math.min(28, Math.floor((w*h)/55000)));
    particles = [];
    for(let i=0;i<count;i++){
      particles.push({
        x: Math.random()*w,
        y: Math.random()*h,
        sym: SYMBOLS[Math.floor(Math.random()*SYMBOLS.length)],
        size: 28 + Math.random()*48,
        vx: (Math.random()-0.5)*0.18,
        vy: -0.08 - Math.random()*0.22,
        rot: (Math.random()-0.5)*0.4,
        vrot: (Math.random()-0.5)*0.002,
        hue: 200 + Math.random()*80, // azul-violeta
        alpha: 0.08 + Math.random()*0.14,
        pulse: Math.random()*Math.PI*2
      });
    }
  }
  function drawOne(p){
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    const grad = ctx.createLinearGradient(0,-p.size,0,p.size);
    grad.addColorStop(0, 'hsla('+p.hue+',80%,75%,'+(p.alpha*1.2)+')');
    grad.addColorStop(1, 'hsla('+(p.hue+40)+',70%,55%,'+(p.alpha*0.6)+')');
    ctx.fillStyle = grad;
    ctx.font = 'bold '+p.size+'px "Space Mono", ui-monospace, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'hsla('+p.hue+',90%,70%,'+(p.alpha*0.8)+')';
    ctx.shadowBlur = 18;
    ctx.fillText(p.sym, 0, 0);
    ctx.restore();
  }
  function frame(){
    ctx.clearRect(0,0,w,h);
    for(const p of particles){
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vrot;
      p.pulse += 0.01;
      // wrap
      if(p.y < -p.size) { p.y = h + p.size; p.x = Math.random()*w; }
      if(p.x < -p.size) p.x = w + p.size;
      if(p.x > w + p.size) p.x = -p.size;
      drawOne(p);
    }
    if(animated) raf = requestAnimationFrame(frame);
  }
  function drawStatic(){
    ctx.clearRect(0,0,w,h);
    for(const p of particles) drawOne(p);
  }
  function init(){
    if(initialized) return;
    canvas = document.getElementById('bgCanvas');
    if(!canvas) return;
    ctx = canvas.getContext('2d');
    initialized = true;
    resize();
    spawn();
    window.addEventListener('resize', ()=>{ resize(); spawn(); if(!animated) drawStatic(); });
    if(animated) raf = requestAnimationFrame(frame);
    else drawStatic();
  }
  function setAnimated(on){
    animated = !!on;
    document.body.classList.toggle('bg-static', !animated);
    if(!initialized) return;
    if(animated){
      if(!raf) raf = requestAnimationFrame(frame);
    }else{
      if(raf){ cancelAnimationFrame(raf); raf = null; }
      drawStatic();
    }
  }
  return { init, setAnimated };
})();

// ============================================================
// UTILS
// ============================================================
const $ = id => document.getElementById(id);
function shuffle(a){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function pickN(arr,n){return shuffle(arr).slice(0,n)}
function fmtTime(s){const m=Math.floor(s/60),x=s%60;return m>0?m+':'+String(x).padStart(2,'0'):x+'s'}
function vibrate(ms){if(navigator.vibrate)navigator.vibrate(ms)}
function isReducedMotion(){return matchMedia('(prefers-reduced-motion:reduce)').matches}

// ============================================================
// TOAST
// ============================================================
function toast(msg, type, opts){
  opts = opts || {};
  const root = $('toastRoot');
  const t = document.createElement('div');
  t.className = 'toast ' + (type||'info');
  const icon = {good:'✅',bad:'❌',info:'ℹ️',warn:'⚠️'}[type||'info'];
  const ico = document.createElement('span');
  ico.className = 'toast-ico';
  ico.textContent = icon;
  const txt = document.createElement('span');
  txt.textContent = msg;
  t.appendChild(ico);
  t.appendChild(txt);
  if(opts.more){
    const b = document.createElement('button');
    b.className = 'toast-more';
    b.type = 'button';
    b.textContent = 'Saber más';
    b.addEventListener('click', ()=>{opts.more();dismiss()});
    t.appendChild(b);
  }
  // Botón pin: fija el toast indefinidamente
  const pinBtn = document.createElement('button');
  pinBtn.className='toast-more';
  pinBtn.type='button';
  pinBtn.textContent='📌';
  pinBtn.title='Fijar este mensaje';
  pinBtn.setAttribute('aria-label','Fijar mensaje');
  let pinned = false;
  pinBtn.addEventListener('click', ()=>{
    pinned = !pinned;
    pinBtn.textContent = pinned ? '📍' : '📌';
    if(pinned){
      // Añadir botón de cerrar
      if(!t.querySelector('.toast-x')){
        const x = document.createElement('button');
        x.className='toast-more toast-x'; x.type='button'; x.textContent='✕';
        x.addEventListener('click', dismiss);
        t.appendChild(x);
      }
    }
  });
  t.appendChild(pinBtn);
  root.appendChild(t);
  function dismiss(){
    if(pinned) return;
    t.classList.add('hide');
    setTimeout(()=>t.remove(), 320);
  }
  setTimeout(()=>{ if(!pinned) dismiss(); }, opts.duration || 2600);
}

// ============================================================
// BUILD CARDS BY MODE
// ============================================================
function getElementsForMode(){
  if(state.mode==='elite') return POOLS.elite.map(z=>Z_TO_EL[z]);
  if(state.mode==='repaso'){
    const els = state.errorBag.map(z=>Z_TO_EL[z]).filter(Boolean);
    return els.length ? els : POOLS[1].map(z=>Z_TO_EL[z]);
  }
  if(state.mode==='daily'){
    // Selección determinística por seed del día
    const seed = dailySeed();
    const rng = mulberry32(hashCode(seed));
    const all = POOLS[2].slice();
    // Fisher-Yates con RNG sembrado
    for(let i=all.length-1;i>0;i--){
      const j = Math.floor(rng()*(i+1));
      [all[i],all[j]] = [all[j],all[i]];
    }
    return all.slice(0, 12).map(z=>Z_TO_EL[z]);
  }
  return POOLS[state.level].map(z=>Z_TO_EL[z]);
}
function getPairCount(){
  if(state.mode==='quiz' || state.mode==='olimpiada') return 0;
  if(state.mode==='elite') return Math.min(POOLS.elite.length, PAIRS_BY_LEVEL[state.level]);
  if(state.mode==='daily') return 12;
  if(state.mode==='repaso') return Math.min(state.errorBag.length||8, PAIRS_BY_LEVEL[state.level]);
  return PAIRS_BY_LEVEL[state.level];
}
// PRNG determinístico
function hashCode(str){
  let h = 0;
  for(let i=0;i<str.length;i++){h = ((h<<5)-h) + str.charCodeAt(i); h |= 0;}
  return h>>>0;
}
function mulberry32(seed){
  return function(){
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function dailySeed(){
  const d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

function buildCards(){
  const els = getElementsForMode();
  const want = getPairCount();
  const chosen = pickN(els, Math.min(want, els.length));
  state.totalPairs = chosen.length;
  const cards = [];
  let id = 0;
  chosen.forEach(el => {
    const pairId = el.z;
    cards.push({id:id++, pairId, type:'element', el});
    cards.push({id:id++, pairId, type:'property', el, propType: pickPropType(el)});
  });
  state.cards = shuffle(cards);
}

function pickPropType(el){
  // Returns the property "category" used to render the property card
  switch(state.mode){
    case 'basico':       return 'name';
    case 'avanzado':     return 'zgroup';
    case 'propiedades':  return pickPropertyKey(el);
    case 'iones':        return 'ox';
    case 'config':       return 'config';
    case 'contrarreloj': return pickPropertyKey(el);
    case 'elite':        return pickElitePropKey(el);
    default:             return 'name';
  }
}
function pickPropertyKey(el){
  const opts = [];
  if(el.en!=null) opts.push('en');
  if(el.ie!=null) opts.push('ie');
  if(el.radius!=null) opts.push('radius');
  if(el.ea!=null) opts.push('ea');
  return opts[Math.floor(Math.random()*opts.length)];
}
function pickElitePropKey(el){
  // Élite usa configuración o estados de oxidación variados
  return ['config','ox','en'][Math.floor(Math.random()*3)];
}

function renderPropCard(c){
  const el = c.el;
  const t = c.propType;
  switch(t){
    case 'name':   return {tag:'NOMBRE',icon:'📛',value:el.name,desc:''};
    case 'zgroup': return {tag:'IDENTIDAD',icon:'🔢',value:'Z='+el.z,desc:'P'+el.period+' · G'+el.group};
    case 'config': return {tag:'CONFIGURACIÓN',icon:'🧪',value:el.config,desc:'Bloque '+el.block};
    case 'ox':     return {tag:'IONES',icon:'⚡',value:el.ox.map(o=>(o>0?'+'+o:o)).join(' '),desc:el.family};
    case 'en':     return {tag:'ELECTRONEG.',icon:'🧲',value:el.en==null?'—':el.en.toFixed(2),desc:'Pauling'};
    case 'ie':     return {tag:'E. IONIZACIÓN',icon:'⚡',value:el.ie,desc:'kJ/mol'};
    case 'radius': return {tag:'RADIO ATÓM.',icon:'⚛️',value:el.radius,desc:'pm'};
    case 'ea':     return {tag:'AF. ELECTRÓNICA',icon:'➖',value:el.ea,desc:'kJ/mol'};
  }
  return {tag:'',icon:'',value:'',desc:''};
}

// ============================================================
// MATCH LOGIC
// ============================================================
function isMatch(a,b){return a.pairId===b.pairId && a.type!==b.type}

// ============================================================
// RENDER GRID
// ============================================================
function renderGrid(){
  const grid = $('grid');
  grid.innerHTML = '';
  if(state.mode==='quiz'){grid.style.display='none';return}
  grid.style.display='grid';
  state.cards.forEach((c,idx)=>{
    const wrap = document.createElement('button');
    wrap.type = 'button';
    wrap.className = 'card-wrap';
    wrap.dataset.id = c.id;
    wrap.dataset.idx = idx;
    // Roving tabindex: solo la primera carta es focusable inicialmente
    wrap.setAttribute('tabindex', idx===0 ? '0' : '-1');
    wrap.setAttribute('aria-label', c.type==='element'?('Carta elemento '+(idx+1)):('Carta propiedad '+(idx+1)));
    const inner = document.createElement('div');
    inner.className = 'card-inner';
    const back = document.createElement('div');
    back.className = 'card-face ' + (c.type==='element'?'card-back-el':'card-back-pr');
    const front = document.createElement('div');
    front.className = 'card-face card-front ' + (c.type==='element'?'element':'property');
    if(c.type==='element'){
      front.innerHTML = '';
      const z = document.createElement('span');z.className='z-num';z.textContent=c.el.z;front.appendChild(z);
      const s = document.createElement('span');s.className='symbol';s.textContent=c.el.sym;front.appendChild(s);
      const n = document.createElement('span');n.className='name';n.textContent=c.el.name;front.appendChild(n);
      const g = document.createElement('span');g.className='group-tag';g.textContent=c.el.family;front.appendChild(g);
    }else{
      const p = renderPropCard(c);
      const tg = document.createElement('span');tg.className='prop-tag';tg.textContent=p.tag;front.appendChild(tg);
      const ic = document.createElement('span');ic.className='prop-icon';ic.textContent=p.icon;front.appendChild(ic);
      const vl = document.createElement('span');vl.className='prop-value';vl.textContent=p.value;front.appendChild(vl);
      if(p.desc){const ds = document.createElement('span');ds.className='prop-desc';ds.textContent=p.desc;front.appendChild(ds)}
    }
    const chk = document.createElement('div');
    chk.className = 'check-overlay';
    chk.textContent = '✓';
    inner.appendChild(back);
    inner.appendChild(front);
    inner.appendChild(chk);
    wrap.appendChild(inner);
    // EASY MODE: cards visible from the start (no memory required)
    if(state.easyMode) wrap.classList.add('flipped');
    grid.appendChild(wrap);
  });
}

// ============================================================
// CLICK HANDLER (delegated)
// ============================================================
function onGridClick(e){
  const wrap = e.target.closest('.card-wrap');
  if(!wrap || !wrap.parentElement) return;
  if(state.locked) return;
  if(wrap.classList.contains('matched')) return;
  // In hard (memory) mode, ignore already-flipped cards. In easy mode they are always flipped.
  if(!state.easyMode && wrap.classList.contains('flipped')) return;
  // In easy mode prevent clicking the same card as the first selection
  if(state.easyMode && state.selected && state.selected.wrap===wrap) return;
  AudioEngine.click();
  AudioEngine.resume();
  const id = +wrap.dataset.id;
  const card = state.cards.find(c=>c.id===id);
  if(!card) return;
  flipCard(wrap, card);
}

function flipCard(wrap, card){
  AudioEngine.whoosh && AudioEngine.whoosh();
  wrap.classList.add('flipped');
  if(!state.selected){
    state.selected = {wrap,card};
    wrap.classList.add('selected');
    if(card.type==='element') showElemInfo(card.el);
    return;
  }
  // Second card
  const first = state.selected;
  if(first.card.id===card.id) return;
  state.selected = null;
  state.turns++;
  $('statTurns').textContent = state.turns;
  state.locked = true;
  if(isMatch(first.card, card)){
    onMatch(first.wrap, wrap, card.el);
  }else{
    onMiss(first.wrap, wrap, first.card, card);
  }
}

function onMatch(w1,w2,el){
  state.matched++;
  state.streak++;
  if(state.streak > state.maxStreak) state.maxStreak = state.streak;
  // Multiplier
  const prevMult = state.multiplier;
  state.multiplier = state.streak >= 5 ? 3 : (state.streak >= 3 ? 2 : 1);
  // Bonus por velocidad: hasta +5 si emparejas en menos de 5s desde la última carta
  const now = performance.now();
  const dt = state._lastFlipTime ? (now - state._lastFlipTime)/1000 : 99;
  state._lastFlipTime = now;
  const speedBonus = Math.max(0, Math.round(5 - dt));
  // Bonus extra si hay power-up "double" activo
  const doubleMul = (state.powerups && state.powerups._doubleNext) ? 2 : 1;
  if(doubleMul===2 && state.powerups) state.powerups._doubleNext = 0;
  const gain = (10 * state.multiplier + speedBonus) * doubleMul;
  state.score += gain;
  // Screen-shake / flash en combo (solo si combo escala o es x3)
  if(!isReducedMotion() && (state.streak>=3 && state.multiplier>prevMult)){
    document.body.classList.add('screen-shake');
    setTimeout(()=>document.body.classList.remove('screen-shake'), 220);
  }
  if(!isReducedMotion() && state.multiplier===3){
    const flash = document.createElement('div');
    flash.className = 'combo-flash';
    document.body.appendChild(flash);
    setTimeout(()=>flash.remove(), 320);
  }
  // Visual
  w1.classList.add('burst');
  w2.classList.add('burst');
  w1.classList.remove('selected');
  setTimeout(()=>{w1.classList.add('matched');w2.classList.add('matched')}, 250);
  spawnXpPop(w2, '+'+gain);
  spawnParticles(w2);
  // Sound + haptic
  AudioEngine.correct(state.streak);
  if(state.multiplier>prevMult && AudioEngine.riser) AudioEngine.riser(state.streak);
  vibrate(20);
  // Collection + tracking
  state.collection.add(el.z);
  state.pairedElements.push(el.z);
  // Stats UI
  updateStats();
  // Toast (non-blocking) instead of forced modal
  const factShort = el.expl.split('.')[0] + '.';
  toast(el.sym + ' (' + el.name + '): ' + factShort, 'good', {
    more: ()=>showExplanation(el),
    duration: 2400
  });
  // Check end
  if(state.matched >= state.totalPairs){
    state.locked = false;
    setTimeout(endGame, 900);
    return;
  }
  // Achievements check
  if(!state.achievements.has('first_match')){
    state.achievements.add('first_match');
    unlockAch('first_match');
  }
  if(state.streak>=5 && !state.achievements.has('combo_5')){
    state.achievements.add('combo_5');unlockAch('combo_5');
  }
  if(state.streak>=10 && !state.achievements.has('combo_10')){
    state.achievements.add('combo_10');unlockAch('combo_10');
  }
  setTimeout(()=>{state.locked=false}, 350);
}

function onMiss(w1,w2,c1,c2){
  state.errors++;
  state.streak = 0;
  state.multiplier = 1;
  state.score = Math.max(0, state.score - 3);
  // Visual: shake + flash
  if(!isReducedMotion()){
    w1.classList.add('shake','err-flash');
    w2.classList.add('shake','err-flash');
  }
  AudioEngine.wrong();
  vibrate(60);
  // Sistema de vidas
  const usesLives = ['elite','contrarreloj','olimpiada','repaso','daily'].includes(state.mode);
  if(usesLives){
    state.lives = Math.max(0, state.lives - 1);
    updateLivesUI();
    if(state.lives<=0){
      setTimeout(()=>endGame(false), 600);
    }
  }
  // Errorbag para modo Repaso
  const elFail = c1.type==='element' ? c1.el : c2.el;
  if(elFail && !state.errorBag.includes(elFail.z)){
    state.errorBag.unshift(elFail.z);
    if(state.errorBag.length>30) state.errorBag.length = 30;
  }
  updateStats();
  // Toast con feedback formativo (NO bloqueante)
  const el = c1.type==='element' ? c1.el : c2.el;
  const propC = c1.type==='property' ? c1 : c2;
  const propInfo = renderPropCard(propC);
  toast('No coinciden. ' + el.sym + ' no tiene ' + propInfo.tag.toLowerCase() + ' = ' + propInfo.value, 'bad', {
    more: ()=>showWhy(el, propC),
    duration: 2200
  });
  setTimeout(()=>{
    w1.classList.remove('selected','shake','err-flash');
    w2.classList.remove('shake','err-flash');
    // Only flip back in memory mode (in easy mode they stay visible)
    if(!state.easyMode){
      w1.classList.remove('flipped');
      w2.classList.remove('flipped');
    }
    state.locked = false;
  }, 900);
}

// ============================================================
// XP POP + PARTICLES
// ============================================================
function spawnXpPop(wrap, txt){
  if(isReducedMotion()) return;
  const r = wrap.getBoundingClientRect();
  const pop = document.createElement('div');
  pop.className = 'xp-pop';
  pop.textContent = txt;
  pop.style.left = (r.left + r.width/2 - 20)+'px';
  pop.style.top = (r.top + r.height/2)+'px';
  pop.style.fontSize = '1.2rem';
  document.body.appendChild(pop);
  setTimeout(()=>pop.remove(), 1200);
}

const particleCanvas = $('particleCanvas');
const pctx = particleCanvas.getContext('2d');
let particles = [];
let pAnim = null;
function resizeP(){
  const dpr = window.devicePixelRatio || 1;
  particleCanvas.width = innerWidth * dpr;
  particleCanvas.height = innerHeight * dpr;
  particleCanvas.style.width = innerWidth + 'px';
  particleCanvas.style.height = innerHeight + 'px';
  pctx.setTransform(1,0,0,1,0,0);
  pctx.scale(dpr, dpr);
}
addEventListener('resize', resizeP);resizeP();
function spawnParticles(wrap){
  if(isReducedMotion()) return;
  const r = wrap.getBoundingClientRect();
  const cx = r.left + r.width/2, cy = r.top + r.height/2;
  for(let i=0;i<10;i++){
    particles.push({
      x:cx,y:cy,
      vx:(Math.random()-0.5)*5,vy:(Math.random()-0.5)*5-2,
      life:40, color:'#ffe566'
    });
  }
  if(!pAnim) pAnim = requestAnimationFrame(animateParticles);
}
function animateParticles(){
  pctx.clearRect(0,0,innerWidth,innerHeight);
  particles = particles.filter(p=>p.life>0);
  particles.forEach(p=>{
    p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life--;
    pctx.globalAlpha = Math.max(0,p.life/40);
    pctx.fillStyle = p.color;
    pctx.beginPath();
    pctx.arc(p.x,p.y,3,0,Math.PI*2);
    pctx.fill();
  });
  pctx.globalAlpha = 1;
  if(particles.length>0){
    pAnim = requestAnimationFrame(animateParticles);
  }else{
    pAnim = null;
  }
}

// ============================================================
// CONFETTI (win)
// ============================================================
const confettiCanvas = $('confettiCanvas');
const cctx = confettiCanvas.getContext('2d');
let confettiBits = [];
let cAnim = null;
function resizeC(){
  const dpr = window.devicePixelRatio || 1;
  confettiCanvas.width = innerWidth * dpr;
  confettiCanvas.height = innerHeight * dpr;
  confettiCanvas.style.width = innerWidth + 'px';
  confettiCanvas.style.height = innerHeight + 'px';
  cctx.setTransform(1,0,0,1,0,0);
  cctx.scale(dpr, dpr);
}
addEventListener('resize',resizeC);resizeC();
function fireConfetti(){
  if(isReducedMotion()) return;
  for(let i=0;i<140;i++){
    confettiBits.push({
      x:Math.random()*innerWidth,
      y:-20-Math.random()*100,
      vx:(Math.random()-0.5)*3,
      vy:Math.random()*4+2,
      sz:Math.random()*6+3,
      color:['#ffe566','#4ecdc4','#ff6b6b','#9fa8da','#a5d6a7'][Math.floor(Math.random()*5)],
      rot:Math.random()*Math.PI
    });
  }
  if(!cAnim) cAnim = requestAnimationFrame(animateConfetti);
  setTimeout(()=>{confettiBits=[]},4500);
}
function animateConfetti(){
  cctx.clearRect(0,0,innerWidth,innerHeight);
  confettiBits = confettiBits.filter(p=>p.y < innerHeight + 20);
  confettiBits.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;p.rot+=0.1;
    cctx.save();
    cctx.translate(p.x,p.y);
    cctx.rotate(p.rot);
    cctx.fillStyle=p.color;
    cctx.fillRect(-p.sz/2,-p.sz/2,p.sz,p.sz);
    cctx.restore();
  });
  if(confettiBits.length>0){
    cAnim = requestAnimationFrame(animateConfetti);
  }else{
    cAnim = null;
    cctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  }
}

// ============================================================
// ELEMENT INFO PANEL
// ============================================================
function showElemInfo(el){
  const div = $('elemInfo');
  div.classList.add('visible');
  div.innerHTML = '';
  // Symbol
  const s = document.createElement('div');
  s.className = 'ei-symbol';
  s.textContent = el.sym;
  div.appendChild(s);
  // Data
  const d = document.createElement('div');
  d.className = 'ei-data';
  const r1 = document.createElement('div');r1.className='ei-row';
  const sb1 = document.createElement('strong'); sb1.textContent = 'Z='+el.z;
  const sb2 = document.createElement('strong'); sb2.textContent = el.name;
  r1.appendChild(sb1); r1.appendChild(document.createTextNode(' · '));
  r1.appendChild(sb2); r1.appendChild(document.createTextNode(' · período '+el.period+' · grupo '+el.group));
  d.appendChild(r1);
  const r2 = document.createElement('div');r2.className='ei-row';
  r2.textContent = 'Familia: '+el.family+' · Bloque '+el.block+' · Masa '+el.mass+' · Radio (calc., Slater): '+(el.radius||'—')+' pm';
  d.appendChild(r2);
  // Hint cualitativa (no expone valor)
  const r3 = document.createElement('div');r3.className='ei-row';
  const hk = Object.keys(el.hints||{});
  if(hk.length){
    const h = el.hints[hk[Math.floor(Math.random()*hk.length)]];
    const ico = document.createTextNode('💡 ');
    const em = document.createElement('em'); em.textContent = h;
    r3.appendChild(ico); r3.appendChild(em);
  }
  d.appendChild(r3);
  div.appendChild(d);
  // Period strip
  const strip = document.createElement('div');
  strip.className = 'pt-strip';
  for(let i=1;i<=18;i++){
    const c = document.createElement('div');
    c.className = 'pt-cell';
    if(i===el.group) c.className+=' active';
    strip.appendChild(c);
  }
  div.appendChild(strip);
}

// ============================================================
// EXPLANATION (only on demand via "Saber más")
// ============================================================
function showExplanation(el){
  const ov = document.createElement('div');
  ov.className = 'modal-overlay open';
  ov.setAttribute('role','dialog');
  ov.setAttribute('aria-modal','true');
  const md = document.createElement('div');
  md.className = 'modal';
  // Construcción segura con createElement / textContent
  const closeBtn = document.createElement('button');
  closeBtn.className='modal-close';closeBtn.type='button';
  closeBtn.setAttribute('aria-label','Cerrar');closeBtn.textContent='✕';
  md.appendChild(closeBtn);
  const h2 = document.createElement('h2'); h2.textContent = el.sym+' · '+el.name; md.appendChild(h2);
  const meta = document.createElement('p'); meta.style.cssText='font-size:.78rem;color:var(--text-2)';
  meta.textContent = 'Z='+el.z+' · '+el.config+' · '+el.family; md.appendChild(meta);
  const h3a = document.createElement('h3'); h3a.textContent='Explicación'; md.appendChild(h3a);
  const pa = document.createElement('p'); pa.textContent = el.expl; md.appendChild(pa);
  const h3b = document.createElement('h3'); h3b.textContent='Estados de oxidación'; md.appendChild(h3b);
  const pb = document.createElement('p'); pb.textContent = el.ox.map(o=>(o>0?'+'+o:o)).join(', '); md.appendChild(pb);
  // Notas pedagógicas
  const h3c = document.createElement('h3'); h3c.textContent='Notas'; md.appendChild(h3c);
  const pc = document.createElement('p');
  pc.textContent = 'Radio: ' + (el.radius||'—') + ' pm (radio calculado, Slater). EN: ' + (el.en==null?'—':el.en) + ' (Pauling). AE: ' + (el.ea==null?'—':el.ea) + ' kJ/mol (convención termodinámica: negativo = exotérmico, energía liberada).';
  md.appendChild(pc);
  ov.appendChild(md);
  document.body.appendChild(ov);
  closeBtn.addEventListener('click',()=>ov.remove());
  ov.addEventListener('click', e=>{if(e.target===ov)ov.remove()});
  // Focus el botón de cerrar
  closeBtn.focus();
}

function showWhy(el, propCard){
  const p = renderPropCard(propCard);
  const ov = document.createElement('div');
  ov.className = 'modal-overlay open';
  ov.setAttribute('role','dialog');
  ov.setAttribute('aria-modal','true');
  const md = document.createElement('div');
  md.className = 'modal';
  const cb = document.createElement('button');
  cb.className='modal-close'; cb.type='button';
  cb.setAttribute('aria-label','Cerrar'); cb.textContent='✕';
  md.appendChild(cb);
  const h = document.createElement('h2'); h.textContent='¿Por qué no coinciden?'; md.appendChild(h);
  const p1 = document.createElement('p');
  p1.appendChild(document.createTextNode('El elemento '));
  const sb = document.createElement('strong'); sb.textContent = el.sym+' ('+el.name+')'; p1.appendChild(sb);
  p1.appendChild(document.createTextNode(' NO tiene '));
  const sb2 = document.createElement('strong'); sb2.textContent = p.tag.toLowerCase()+' = '+p.value; p1.appendChild(sb2);
  p1.appendChild(document.createTextNode('.'));
  md.appendChild(p1);
  const h3 = document.createElement('h3'); h3.textContent = 'Sobre '+el.sym; md.appendChild(h3);
  const p2 = document.createElement('p'); p2.textContent = el.expl; md.appendChild(p2);
  ov.appendChild(md);
  document.body.appendChild(ov);
  cb.addEventListener('click',()=>ov.remove());
  ov.addEventListener('click', e=>{if(e.target===ov)ov.remove()});
  cb.focus();
}

// ============================================================
// STATS UI
// ============================================================
function updateStats(){
  $('statTurns').textContent = state.turns;
  $('statMatches').textContent = state.matched + '/' + state.totalPairs;
  $('statStreak').textContent = state.streak;
  $('statScore').textContent = state.score;
  const sb = $('streakBox');
  if(state.streak>=3) sb.classList.add('streak-active');else sb.classList.remove('streak-active');
  const mb = $('multiBadge');
  if(state.multiplier>1){mb.style.display='inline-block';mb.textContent='x'+state.multiplier}
  else mb.style.display='none';
  const pct = state.totalPairs>0 ? (state.matched/state.totalPairs*100) : 0;
  $('progressFill').style.width = pct+'%';
}

// ============================================================
// TIMER (drift-resistant)
// ============================================================
function updateLevelLocks(){
  const max = (state.unlocked && state.unlocked[state.mode]) || 3;
  document.querySelectorAll('.level-btn[data-level]').forEach(b=>{
    const lvl = +b.dataset.level;
    const locked = lvl > max;
    b.disabled = locked;
    b.style.opacity = locked ? '0.4' : '';
    if(locked && !b.querySelector('.lock-icon')){
      const lk = document.createElement('span');
      lk.className='lock-icon';
      lk.textContent=' 🔒';
      b.appendChild(lk);
    }else if(!locked){
      const ex = b.querySelector('.lock-icon');
      if(ex) ex.remove();
    }
  });
  // Total de estrellas en xp-block
  let total = 0;
  Object.values(state.starsByMode||{}).forEach(m=>{
    Object.values(m).forEach(s=>total+=s);
  });
  const lbl = $('starsTotal');
  if(lbl) lbl.textContent = '★ '+total;
}
function applyA11y(){
  const a = state.a11y || {theme:'dark',scale:1,reduceMotion:false};
  document.documentElement.setAttribute('data-theme', a.theme || 'dark');
  document.documentElement.style.setProperty('--scale-factor', String(a.scale || 1));
  if(a.reduceMotion){
    document.documentElement.style.setProperty('--dur-fast','0.01ms');
    document.documentElement.style.setProperty('--dur-base','0.01ms');
    document.documentElement.style.setProperty('--dur-slow','0.01ms');
  }else{
    document.documentElement.style.removeProperty('--dur-fast');
    document.documentElement.style.removeProperty('--dur-base');
    document.documentElement.style.removeProperty('--dur-slow');
  }
}
function isReducedMotionOrUserPref(){
  return isReducedMotion() || (state.a11y && state.a11y.reduceMotion);
}
function updatePowerupsUI(){
  const cs = document.querySelectorAll('#powerupsRow .pu-count');
  if(cs.length>=3 && state.powerups){
    cs[0].textContent = state.powerups.reveal;
    cs[1].textContent = state.powerups.freeze;
    cs[2].textContent = state.powerups.double;
  }
  // Deshabilitar si 0
  if(state.powerups){
    $('puReveal').disabled = state.powerups.reveal<=0;
    $('puFreeze').disabled = state.powerups.freeze<=0;
    $('puDouble').disabled = state.powerups.double<=0;
  }
}
function powerupReveal(){
  if(!state.powerups || state.powerups.reveal<=0 || state.locked) return;
  if(state.mode==='quiz') return toast('No disponible en Quiz','info');
  state.powerups.reveal--;
  updatePowerupsUI();
  // Encuentra una pareja no emparejada y revélala 2s
  const wraps = [...document.querySelectorAll('.card-wrap:not(.matched)')];
  const ids = wraps.map(w=>+w.dataset.id);
  const cards = state.cards.filter(c=>ids.includes(c.id));
  const els = cards.filter(c=>c.type==='element');
  if(!els.length) return;
  const e = els[Math.floor(Math.random()*els.length)];
  const p = cards.find(c=>c.pairId===e.pairId && c.type==='property');
  if(!p) return;
  const we = wraps.find(w=>+w.dataset.id===e.id);
  const wp = wraps.find(w=>+w.dataset.id===p.id);
  if(!we||!wp) return;
  const wfe = we.classList.contains('flipped');
  const wfp = wp.classList.contains('flipped');
  we.classList.add('flipped'); wp.classList.add('flipped');
  toast('🔍 Revelando 2s','info',{duration:2000});
  state.locked = true;
  setTimeout(()=>{
    if(!state.easyMode){
      if(!wfe) we.classList.remove('flipped');
      if(!wfp) wp.classList.remove('flipped');
    }
    state.locked = false;
  }, 2000);
  saveState();
}
function powerupFreeze(){
  if(!state.powerups || state.powerups.freeze<=0) return;
  if(state.mode!=='contrarreloj') return toast('Solo en Contrarreloj','info');
  state.powerups.freeze--;
  updatePowerupsUI();
  // Sumar 5s al límite
  state.timeLimit += 5;
  toast('❄️ +5 segundos','info');
  saveState();
}
function powerupDouble(){
  if(!state.powerups || state.powerups.double<=0) return;
  state.powerups.double--;
  state.powerups._doubleNext = 1;
  updatePowerupsUI();
  toast('✖2 Próximo match valdrá doble','info');
  saveState();
}
function updateLivesUI(){
  const el = $('statLives');
  if(!el) return;
  const full = '❤'.repeat(Math.max(0,state.lives));
  const empty = '♡'.repeat(Math.max(0, state.maxLives - state.lives));
  el.textContent = full + empty;
  // Pequeño shake al perder vida
  const box = $('livesBox');
  if(box && !isReducedMotion()){
    box.classList.add('shake');
    setTimeout(()=>box.classList.remove('shake'), 350);
  }
}
function startTimer(){
  state.startTime = performance.now();
  if(state.timer){
    if(typeof state.timer === 'number' && state.timer > 0){
      cancelAnimationFrame(state.timer);
    }
    clearInterval(state.timer);
  }
  let lastSec = -1;
  const tick = ()=>{
    const sec = Math.floor((performance.now()-state.startTime)/1000);
    if(sec !== lastSec){
      lastSec = sec;
      state.elapsed = sec;
      if(state.mode==='contrarreloj'){
        const left = Math.max(0, state.timeLimit - sec);
        $('statTime').textContent = left+'s';
        if(left<=0){
          state.timer = null;
          endGame(true);
          return;
        }
      }else{
        $('statTime').textContent = sec+'s';
      }
    }
    state.timer = requestAnimationFrame(tick);
  };
  state.timer = requestAnimationFrame(tick);
}

// ============================================================
// END GAME / RESULTS
// ============================================================
function getStars(){
  const t = state.elapsed || 1;
  const optTurns = state.totalPairs;
  const turnEff = Math.min(1, optTurns/Math.max(state.turns, optTurns));
  const timeEff = Math.min(1, (state.totalPairs*4)/t);
  const streakEff = state.maxStreak / state.totalPairs;
  const score = turnEff*0.5 + timeEff*0.3 + streakEff*0.2;
  if(score >= 0.85) return 3;
  if(score >= 0.6) return 2;
  return 1;
}

function endGame(timeUp){
  if(state.timer){
    cancelAnimationFrame(state.timer);
    clearInterval(state.timer);
    state.timer = null;
  }
  state.locked = true;
  modesPlayed.add(state.mode);
  // XP gain
  const gained = 10 + state.matched*5 + state.maxStreak*3 + (state.errors===0?20:0);
  state.xp += gained;
  // Recompensa power-ups: cada 100 XP ganados (acumulado), 1 powerup aleatorio
  if(state.powerups){
    state._xpBank = (state._xpBank||0) + gained;
    while(state._xpBank>=100){
      state._xpBank -= 100;
      const k = ['reveal','freeze','double'][Math.floor(Math.random()*3)];
      state.powerups[k] = (state.powerups[k]||0) + 1;
    }
    updatePowerupsUI();
  }
  // Achievements
  if(!state.achievements.has('first_win') && state.matched===state.totalPairs){
    state.achievements.add('first_win');unlockAch('first_win');
  }
  if(state.matched===state.totalPairs && state.errors===0 && !state.achievements.has('no_errors')){
    state.achievements.add('no_errors');unlockAch('no_errors');
  }
  if(state.level===3 && state.matched===state.totalPairs && !state.achievements.has('level3')){
    state.achievements.add('level3');unlockAch('level3');
  }
  if(state.mode==='elite' && state.matched===state.totalPairs && !state.achievements.has('elite_win')){
    state.achievements.add('elite_win');unlockAch('elite_win');
  }
  if(state.level===1 && state.elapsed<30 && state.matched===state.totalPairs && !state.achievements.has('speed_run')){
    state.achievements.add('speed_run');unlockAch('speed_run');
  }
  if(modesPlayed.size>=8 && !state.achievements.has('all_modes')){
    state.achievements.add('all_modes');unlockAch('all_modes');
  }
  if(state.collection.size>=20 && !state.achievements.has('collect_20')){
    state.achievements.add('collect_20');unlockAch('collect_20');
  }
  if(state.collection.size>=ELEMENTS.length && !state.achievements.has('collect_all')){
    state.achievements.add('collect_all');unlockAch('collect_all');
  }
  const rk = currentRank();
  if(rk.name==='Maestro' && !state.achievements.has('rank_master')){
    state.achievements.add('rank_master');unlockAch('rank_master');
  }
  // Record
  const stars = state.matched===state.totalPairs ? getStars() : 0;
  state.records.push({
    mode:state.mode, level:state.level, score:state.score,
    time:state.elapsed, stars, date:new Date().toISOString().slice(0,10)
  });
  state.records.sort((a,b)=>b.score-a.score);
  state.records = state.records.slice(0,15);
  // Mapa de progresión: registrar estrellas y desbloquear siguiente nivel
  if(stars>0){
    state.starsByMode[state.mode] = state.starsByMode[state.mode] || {};
    const prev = state.starsByMode[state.mode][state.level] || 0;
    if(stars>prev) state.starsByMode[state.mode][state.level] = stars;
    if(stars>=2 && state.level<3){
      state.unlocked[state.mode] = Math.max(state.unlocked[state.mode]||1, state.level+1);
    }
  }
  updateLevelLocks();
  // Daily Challenge: registrar resultado
  if(state.mode==='daily' && state.matched>0){
    state.dailyDone = {seed:dailySeed(), score:state.score};
  }
  // Historial de pares emparejados
  if(state.history && state.pairedElements && state.pairedElements.length){
    state.pairedElements.forEach(z=>{
      const el = Z_TO_EL[z];
      if(!el) return;
      state.history.unshift({sym:el.sym, name:el.name, expl:el.expl, time:Date.now()});
    });
    if(state.history.length>50) state.history.length = 50;
  }
  saveState();
  updateXpBar();
  // Render results
  if(state.matched===state.totalPairs){
    AudioEngine.win();
    fireConfetti();
  }else{
    AudioEngine.lose();
  }
  showResults(timeUp, gained, stars);
}

function showResults(timeUp, gained, stars){
  const sum = $('resultsSummary');
  sum.textContent = '';
  const mkP = (parts)=>{
    const p = document.createElement('p');
    parts.forEach(part=>{
      if(typeof part === 'string') p.appendChild(document.createTextNode(part));
      else { const s = document.createElement('strong'); s.textContent = part.bold; p.appendChild(s); }
    });
    return p;
  };
  sum.appendChild(mkP([{bold: state.matched===state.totalPairs?'¡Lo lograste!':(timeUp?'⏰ Se acabó el tiempo':'Partida terminada')}]));
  sum.appendChild(mkP(['Modo: '+MODE_LABELS[state.mode]+' · Nivel '+state.level]));
  sum.appendChild(mkP(['Puntos: ',{bold:String(state.score)},' · Tiempo: '+fmtTime(state.elapsed)+' · Intentos: '+state.turns+' · Errores: '+state.errors]));
  sum.appendChild(mkP(['Racha máxima: '+state.maxStreak+' · XP ganada: ',{bold:'+'+gained}]));
  // Animar XP de 0 → gained
  const xpSpan = sum.querySelector('strong:last-child');
  if(xpSpan && !isReducedMotion()){
    let cur = 0; const start = performance.now(); const dur = 1200;
    const step = (t)=>{
      const k = Math.min(1, (t-start)/dur);
      cur = Math.floor(gained * (1 - Math.pow(1-k, 3)));
      xpSpan.textContent = '+' + cur;
      if(k<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  $('resultsStars').textContent = stars>0 ? '★'.repeat(stars)+'☆'.repeat(3-stars) : '—';
  // Pares
  const list = $('resultsList');
  list.innerHTML = '';
  state.pairedElements.forEach(z=>{
    const el = Z_TO_EL[z];
    const item = document.createElement('div');
    item.className = 'result-item';
    const sy = document.createElement('span');sy.className='ri-sym';sy.textContent=el.sym;
    const nm = document.createElement('span');nm.className='ri-name';nm.textContent=el.name;
    const pr = document.createElement('span');pr.className='ri-prop';pr.textContent='Z='+el.z+' · '+el.family;
    item.appendChild(sy);item.appendChild(nm);item.appendChild(pr);
    list.appendChild(item);
  });
  // Share text
  $('shareText').value =
    '⚗️ Memorama Tabla Periódica\n'+
    'Modo: '+MODE_LABELS[state.mode]+' · Nivel '+state.level+'\n'+
    'Puntos: '+state.score+' · '+fmtTime(state.elapsed)+'\n'+
    'Racha máx: '+state.maxStreak+' · '+(stars>0?'★'.repeat(stars):'')+'\n'+
    '#TablaPeriódica #Química';
  // CTA: ocultar "Siguiente nivel" si ya estamos en el último nivel o no se completó
  const nextBtn = $('btnNextLevel');
  if(nextBtn){
    const completed = state.matched===state.totalPairs;
    nextBtn.style.display = (completed && state.level<3) ? '' : 'none';
  }
  openModal('modalResults');
}

// ============================================================
// MODALS
// ============================================================
let lastFocused = null;
const _modalControllers = new Map();
function openModal(id){
  lastFocused = document.activeElement;
  const m = $(id);
  m.classList.add('open');
  trapFocus(id, m.querySelector('.modal'));
}
function closeModal(id){
  $(id).classList.remove('open');
  // Limpiar listener de trapFocus para evitar leaks
  const ctrl = _modalControllers.get(id);
  if(ctrl){ ctrl.abort(); _modalControllers.delete(id); }
  if(lastFocused) lastFocused.focus();
}
function trapFocus(modalId, container){
  // Abortar listener anterior si existía
  const prev = _modalControllers.get(modalId);
  if(prev) prev.abort();
  const ctrl = new AbortController();
  _modalControllers.set(modalId, ctrl);
  const focusables = container.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
  if(focusables.length){focusables[0].focus()}
  container.addEventListener('keydown', e=>{
    if(e.key!=='Tab') return;
    const f = container.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    const first = f[0], last = f[f.length-1];
    if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus()}
  }, {signal: ctrl.signal});
}

// ============================================================
// COLLECTION (Mi Tabla Periódica)
// ============================================================
// Build a 18 col x 9 row layout (with lanthanide/actinide rows)
const PT_LAYOUT = (()=>{
  // Map z -> {row,col}
  const map = {};
  // Period 1
  map[1]={r:1,c:1}; map[2]={r:1,c:18};
  // Period 2
  map[3]={r:2,c:1}; map[4]={r:2,c:2};
  [5,6,7,8,9,10].forEach((z,i)=>map[z]={r:2,c:13+i});
  // Period 3
  map[11]={r:3,c:1}; map[12]={r:3,c:2};
  [13,14,15,16,17,18].forEach((z,i)=>map[z]={r:3,c:13+i});
  // Period 4
  map[19]={r:4,c:1}; map[20]={r:4,c:2};
  for(let z=21,c=3;z<=30;z++,c++)map[z]={r:4,c};
  for(let z=31,c=13;z<=36;z++,c++)map[z]={r:4,c};
  // Period 5
  map[37]={r:5,c:1}; map[38]={r:5,c:2};
  for(let z=39,c=3;z<=48;z++,c++)map[z]={r:5,c};
  for(let z=49,c=13;z<=54;z++,c++)map[z]={r:5,c};
  // Period 6
  map[55]={r:6,c:1}; map[56]={r:6,c:2}; map[57]={r:6,c:3};
  // Lanthanides 58-71 row 8
  for(let z=58,c=4;z<=71;z++,c++)map[z]={r:8,c};
  for(let z=72,c=4;z<=80;z++,c++)map[z]={r:6,c};
  for(let z=81,c=13;z<=86;z++,c++)map[z]={r:6,c};
  // Period 7
  map[87]={r:7,c:1}; map[88]={r:7,c:2}; map[89]={r:7,c:3};
  for(let z=90,c=4;z<=103;z++,c++)map[z]={r:9,c};
  for(let z=104,c=4;z<=112;z++,c++)map[z]={r:7,c};
  for(let z=113,c=13;z<=118;z++,c++)map[z]={r:7,c};
  return map;
})();

function renderCollection(){
  const grid = $('colGrid');
  grid.innerHTML = '';
  // Show only the elements available in the game
  const available = ELEMENTS.map(e=>e.z);
  const max = Math.max(...available);
  // Build a sparse 9x18 grid only with cells that have an available element
  // For simplicity render all 9 rows × 18 cols where applicable
  for(let r=1;r<=9;r++){
    for(let c=1;c<=18;c++){
      const cell = document.createElement('div');
      cell.className = 'col-cell';
      // Find the element at (r,c)
      const z = Object.keys(PT_LAYOUT).find(k=>{
        const p = PT_LAYOUT[k];
        return p.r===r && p.c===c && available.includes(+k);
      });
      if(z){
        const el = Z_TO_EL[+z];
        cell.textContent = el.sym;
        cell.title = el.name+' (Z='+el.z+')';
        if(state.collection.has(+z)){
          cell.classList.add('unlocked');
          if(el.family==='lantanido') cell.classList.add('lanthanide');
          if(el.family==='actinido') cell.classList.add('actinide');
        }
      }
      grid.appendChild(cell);
    }
  }
  $('colProgress').textContent = state.collection.size + ' / ' + ELEMENTS.length + ' elementos';
}

// ============================================================
// ACHIEVEMENTS
// ============================================================
function renderAch(){
  const list = $('achList');
  list.innerHTML = '';
  ACHIEVEMENTS.forEach(a=>{
    const item = document.createElement('div');
    item.className = 'ach-item' + (state.achievements.has(a.id)?' unlocked':'');
    const ic = document.createElement('div');ic.className='ach-icon';ic.textContent=a.icon;
    const info = document.createElement('div');
    const nm = document.createElement('div');nm.className='ach-name';nm.textContent=a.name;
    const ds = document.createElement('div');ds.className='ach-desc';ds.textContent=a.desc;
    info.appendChild(nm);info.appendChild(ds);
    item.appendChild(ic);item.appendChild(info);
    list.appendChild(item);
  });
}
function unlockAch(id){
  const a = ACHIEVEMENTS.find(x=>x.id===id);
  if(!a) return;
  toast('🏆 ¡Logro! '+a.name, 'warn', {duration:3200});
}

// ============================================================
// LEADERBOARD
// ============================================================
function renderLB(){
  const tb = $('lbBody');
  tb.innerHTML = '';
  if(!state.records.length){
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 6;
    td.textContent = 'Aún no hay récords. ¡Juega una partida!';
    td.style.textAlign='center';td.style.color='var(--text-3)';
    tr.appendChild(td);
    tb.appendChild(tr);
    return;
  }
  state.records.forEach((r,i)=>{
    const tr = document.createElement('tr');
    [String(i+1), MODE_LABELS[r.mode]||r.mode, 'N'+r.level, String(r.score), fmtTime(r.time), '★'.repeat(r.stars||0)]
      .forEach(t=>{const td=document.createElement('td');td.textContent=t;tr.appendChild(td)});
    tb.appendChild(tr);
  });
}

function renderProfileStats(){
  const box = $('profileStats');
  if(!box) return;
  const stats = [
    {val: state.xp || 0,                       lbl: 'XP'},
    {val: (currentRank()||{name:'—'}).name,    lbl: 'Rango'},
    {val: state.collection ? state.collection.size : 0, lbl: 'Elementos'},
    {val: state.achievements ? state.achievements.size : 0, lbl: 'Logros'},
    {val: state.records ? state.records.length : 0, lbl: 'Récords'}
  ];
  box.innerHTML = '';
  stats.forEach(s=>{
    const it = document.createElement('div');
    it.className = 'ps-item';
    const v = document.createElement('div'); v.className='ps-val'; v.textContent = s.val;
    const l = document.createElement('div'); l.className='ps-lbl'; l.textContent = s.lbl;
    it.appendChild(v); it.appendChild(l);
    box.appendChild(it);
  });
}

// ============================================================
// XP / RANK
// ============================================================
function currentRank(){
  let cur = RANKS[0];
  for(const r of RANKS){if(state.xp>=r.min)cur=r}
  return cur;
}
function nextRank(){
  for(const r of RANKS){if(r.min>state.xp)return r}
  return null;
}
function updateXpBar(){
  const cur = currentRank();
  const nxt = nextRank();
  $('rankBadge').textContent = cur.name;
  $('xpLabel').textContent = state.xp+' XP';
  if(nxt){
    const range = nxt.min - cur.min;
    const into = state.xp - cur.min;
    $('xpFill').style.width = Math.min(100, (into/range)*100)+'%';
  }else{
    $('xpFill').style.width = '100%';
  }
}

// ============================================================
// QUIZ MODE
// ============================================================
function startQuiz(){
  $('grid').style.display = 'none';
  $('quizArea').classList.add('active');
  state.quiz.q = 0;
  state.quiz.score = 0;
  state.quiz.lives = 3;
  if(state.mode==='olimpiada'){
    state.quiz.total = state.level===1?5:state.level===2?10:15;
    // Mezclar problemas
    state.quiz._oly = shuffle(OLYMPIAD_PROBLEMS).slice(0, state.quiz.total);
  }else if(state.mode==='enlaces'){
    state.quiz.total = state.level===1?6:state.level===2?10:14;
    // Construir banco de preguntas enlace + isótopos
    const bondQs = BONDS.map(b=>({
      q:'¿Qué tipo de enlace forman '+b.a+' y '+b.b+'?',
      opts:['iónico','covalente polar','covalente apolar','metálico'],
      correct:b.type, expl:b.expl
    }));
    const isoQs = [];
    ISOTOPES.forEach(it=>{
      it.items.forEach(is=>{
        if(is.note.includes('radiactivo') || is.note.includes('fisil')){
          isoQs.push({
            q:'¿Cuál es la principal característica del isótopo '+is.name+' de '+it.sym+'?',
            opts:[is.note, 'estable y abundante', 'el más ligero', 'no existe'],
            correct: is.note, expl:'Datos de IUPAC'
          });
        }
      });
    });
    state.quiz._oly = shuffle([...bondQs, ...isoQs]).slice(0, state.quiz.total);
  }else{
    state.quiz.total = state.level===1?6:state.level===2?10:14;
  }
  $('statMatches').textContent = '0/'+state.quiz.total;
  state.totalPairs = state.quiz.total;
  state.matched = 0;
  nextQuiz();
}
function nextQuiz(){
  if(state.quiz.q>=state.quiz.total){endGame();return}
  // ===== MODOS OLIMPIADA / ENLACES: banco de problemas =====
  if(state.mode==='olimpiada' || state.mode==='enlaces'){
    const prob = state.quiz._oly[state.quiz.q];
    const ico = state.mode==='olimpiada' ? '🏆' : '🔗';
    state.quiz.current = {sym:ico,name:'Problema',z:state.quiz.q+1,family:state.mode,expl:prob.expl,config:'',ox:[]};
    $('qSym').textContent = ico;
    $('qName').textContent = (state.mode==='olimpiada'?'Problema ':'Pregunta ')+(state.quiz.q+1);
    $('qZ').textContent = MODE_LABELS[state.mode];
    $('quizQuestion').textContent = prob.q;
    state.quiz.opts = shuffle(prob.opts);
    state.quiz.correct = prob.correct;
    const optsBox = $('quizOpts');
    optsBox.innerHTML = '';
    state.quiz.opts.forEach(o=>{
      const b = document.createElement('button');
      b.type='button'; b.className='quiz-opt'; b.textContent=o;
      b.addEventListener('click',()=>answerQuiz(b,o));
      optsBox.appendChild(b);
    });
    $('quizProgress').textContent = 'Pregunta '+(state.quiz.q+1)+'/'+state.quiz.total;
    $('quizScore').textContent = 'Puntos: '+state.quiz.score;
    return;
  }
  const pool = ELEMENTS;
  const el = pool[Math.floor(Math.random()*pool.length)];
  state.quiz.current = el;
  $('qSym').textContent = el.sym;
  $('qName').textContent = el.name;
  $('qZ').textContent = 'Z='+el.z+' · '+el.family;
  // Question type — añadidos symbol y compare
  const types = ['config','group','en','symbol','compare'];
  const qt = types[Math.floor(Math.random()*types.length)];
  let correct, label, distractors;
  if(qt==='config'){
    label = '¿Cuál es la configuración electrónica de '+el.sym+'?';
    correct = el.config;
    // Distractores plausibles: mismo bloque y período cercano (±1)
    distractors = pool.filter(e=>e.z!==el.z && e.block===el.block && Math.abs(e.period-el.period)<=1).map(e=>e.config);
    if(distractors.length<3){
      // Fallback: mismo bloque cualquier período
      distractors = pool.filter(e=>e.z!==el.z && e.block===el.block).map(e=>e.config);
    }
  }else if(qt==='group'){
    label = '¿En qué grupo está '+el.sym+'?';
    correct = 'Grupo '+el.group;
    // Distractores: TODOS los grupos 1-18, no solo un subconjunto arbitrario
    const ALL_GROUPS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    // Priorizar grupos cercanos (±2) para que sean plausibles
    const close = ALL_GROUPS.filter(g=>g!==el.group && Math.abs(g-el.group)<=3);
    const far = ALL_GROUPS.filter(g=>g!==el.group && Math.abs(g-el.group)>3);
    distractors = [...shuffle(close), ...shuffle(far)].map(g=>'Grupo '+g);
  }else{
    label = '¿Cuál es la electronegatividad (Pauling) de '+el.sym+'?';
    if(el.en==null){return nextQuiz()}
    correct = el.en.toFixed(2);
    // Distractores: valores cercanos al real (±1.0) para que sean plausibles
    distractors = pool.filter(e=>e.z!==el.z && e.en!=null && Math.abs(e.en-el.en)<=1.2).map(e=>e.en.toFixed(2));
    if(distractors.length<3){
      distractors = pool.filter(e=>e.z!==el.z && e.en!=null).map(e=>e.en.toFixed(2));
    }
  }
  // ===== Tipos extra: symbol y compare =====
  if(qt==='symbol'){
    label = 'Escribe el símbolo químico de '+el.name;
    $('quizQuestion').textContent = label;
    const optsBox = $('quizOpts');
    optsBox.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.style.cssText='grid-column:1/-1;display:flex;gap:8px';
    const inp = document.createElement('input');
    inp.type='text'; inp.placeholder='Símbolo'; inp.maxLength=3;
    inp.style.cssText='flex:1;padding:14px;background:var(--bg-2);border:1px solid var(--border);border-radius:8px;color:var(--text-0);font-size:1.2rem;font-family:monospace;text-align:center';
    const sb = document.createElement('button');
    sb.type='button'; sb.className='btn-primary'; sb.textContent='Comprobar';
    sb.addEventListener('click', ()=>{
      const v = inp.value.trim();
      const ok = v.toLowerCase()===el.sym.toLowerCase();
      // Reuse answerQuiz pipeline pero con strings
      state.quiz.correct = el.sym;
      answerQuiz(sb, ok ? el.sym : v);
    });
    inp.addEventListener('keydown', e=>{if(e.key==='Enter')sb.click()});
    wrap.appendChild(inp); wrap.appendChild(sb);
    optsBox.appendChild(wrap);
    state.quiz.correct = el.sym;
    setTimeout(()=>inp.focus(),50);
    $('quizProgress').textContent = 'Pregunta '+(state.quiz.q+1)+'/'+state.quiz.total;
    $('quizScore').textContent = 'Puntos: '+state.quiz.score;
    return;
  }
  if(qt==='compare'){
    // Pick another element to compare against
    const others = pool.filter(e=>e.z!==el.z && e.en!=null && el.en!=null);
    if(!others.length || el.en==null){return nextQuiz()}
    const e2 = others[Math.floor(Math.random()*others.length)];
    label = '¿Cuál tiene MAYOR electronegatividad: '+el.sym+' o '+e2.sym+'?';
    correct = (el.en>=e2.en) ? el.sym : e2.sym;
    distractors = []; // solo 2 opciones
    state.quiz.opts = shuffle([el.sym, e2.sym]);
    state.quiz.correct = correct;
    $('quizQuestion').textContent = label;
    const optsBox = $('quizOpts');
    optsBox.innerHTML = '';
    state.quiz.opts.forEach(o=>{
      const b = document.createElement('button');
      b.type='button'; b.className='quiz-opt'; b.textContent=o;
      b.addEventListener('click',()=>answerQuiz(b,o));
      optsBox.appendChild(b);
    });
    $('quizProgress').textContent = 'Pregunta '+(state.quiz.q+1)+'/'+state.quiz.total;
    $('quizScore').textContent = 'Puntos: '+state.quiz.score;
    return;
  }
  $('quizQuestion').textContent = label;
  // Plausible distractors: pick 3 unique
  distractors = shuffle([...new Set(distractors)]).slice(0,3);
  state.quiz.opts = shuffle([correct, ...distractors]);
  state.quiz.correct = correct;
  const optsBox = $('quizOpts');
  optsBox.innerHTML = '';
  state.quiz.opts.forEach(o=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'quiz-opt';
    b.textContent = o;
    b.addEventListener('click', ()=>answerQuiz(b,o));
    optsBox.appendChild(b);
  });
  $('quizProgress').textContent = 'Pregunta '+(state.quiz.q+1)+'/'+state.quiz.total;
  $('quizScore').textContent = 'Puntos: '+state.quiz.score;
}
function answerQuiz(btn,opt){
  const allBtns = document.querySelectorAll('.quiz-opt');
  allBtns.forEach(b=>b.classList.add('disabled'));
  if(opt===state.quiz.correct){
    btn.classList.add('correct');
    state.quiz.score+=10;
    state.score = state.quiz.score;
    state.matched++;
    AudioEngine.correct(1);
    state.collection.add(state.quiz.current.z);
  }else{
    btn.classList.add('wrong');
    allBtns.forEach(b=>{if(b.textContent===state.quiz.correct)b.classList.add('correct')});
    state.errors++;
    AudioEngine.wrong();
    vibrate(60);
    // Sistema de vidas también para modos quiz-based que lo usan (olimpiada)
    const usesLives = ['elite','contrarreloj','olimpiada','repaso','daily'].includes(state.mode);
    if(usesLives){
      // Asegura que la caja de vidas sea visible (por si quedó oculta)
      const lb = $('livesBox'); if(lb) lb.style.display = '';
      state.lives = Math.max(0, (typeof state.lives==='number'?state.lives:state.maxLives) - 1);
      updateLivesUI();
      toast('💔 Vida perdida ('+state.lives+' restantes)','bad',{duration:1400});
      if(state.lives<=0){
        setTimeout(()=>endGame(false), 900);
        return;
      }
    }
  }
  state.quiz.q++;
  $('statMatches').textContent = state.matched+'/'+state.quiz.total;
  $('progressFill').style.width = (state.matched/state.quiz.total*100)+'%';
  setTimeout(nextQuiz, 1100);
}

// ============================================================
// INIT GAME
// ============================================================
function initGame(){
  // Reset state
  state.cards = [];
  state.selected = null;
  state.matched = 0;
  state.turns = 0;
  state.errors = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.multiplier = 1;
  state.elapsed = 0;
  state.locked = false;
  state.hintUsed = false;
  state.hintCount = state.level===1?3:state.level===2?2:1;
  state.pairedElements = [];
  if(state.timer){cancelAnimationFrame(state.timer);clearInterval(state.timer);state.timer=null;}
  // Vidas: solo en Élite, Contrarreloj, Olimpiada y Repaso
  state.lives = state.maxLives;
  state._lastFlipTime = 0;
  const usesLives = ['elite','contrarreloj','olimpiada','repaso','daily'].includes(state.mode);
  $('livesBox').style.display = usesLives ? '' : 'none';
  if(usesLives) updateLivesUI();
  // Hide quiz
  $('quizArea').classList.remove('active');
  $('elemInfo').classList.remove('visible');
  $('elemInfo').innerHTML='';
  $('grid').style.display = 'grid';
  if(state.mode==='quiz' || state.mode==='olimpiada' || state.mode==='enlaces'){
    startQuiz();
    startTimer();
    updateStats();
    return;
  }
  // Daily Challenge: si ya está completado hoy, mostrar mensaje
  if(state.mode==='daily' && state.dailyDone && state.dailyDone.seed===dailySeed()){
    toast('🌟 Ya completaste el reto de hoy con '+state.dailyDone.score+' pts. Vuelve mañana.','info',{duration:4000});
  }
  // Repaso vacío
  if(state.mode==='repaso' && (!state.errorBag || state.errorBag.length<2)){
    toast('🎯 ¡Sin errores recientes! Juega otros modos para practicar elementos que falles.','info',{duration:4000});
  }
  if(state.mode==='contrarreloj'){
    // Tiempos más exigentes (modo extremo se activa con btn ⚡)
    state.timeLimit = state.extremeMode ? 30 : (state.level===1?45:state.level===2?70:100);
  }
  buildCards();
  renderGrid();
  updateStats();
  startTimer();
  // Instruction text
  setInstruction();
}
function setInstruction(){
  const txt = {
    basico:'Empareja cada símbolo con su nombre',
    avanzado:'Empareja cada símbolo con su número atómico, período y grupo',
    propiedades:'Empareja cada símbolo con la propiedad indicada (EN, radio, E.Ion, AE)',
    iones:'Empareja cada símbolo con sus estados de oxidación más comunes',
    config:'Empareja cada símbolo con su configuración electrónica',
    contrarreloj:'¡Termina antes de que se acabe el tiempo!',
    quiz:'Selecciona la respuesta correcta',
    elite:'👑 Modo olimpiada — lantánidos, actínidos y excepciones de Madelung'
  }[state.mode] || '';
  const prefix = state.easyMode ? '😊 Fácil — todas las cartas visibles. ' : '🧠 Memoria — voltea cartas. ';
  $('instruction').textContent = prefix + txt;
}

// ============================================================
// HINT
// ============================================================
function useHint(){
  if(state.hintCount<=0 || state.locked) return;
  if(state.mode==='quiz') return;
  // Find a pair that hasn't been matched yet
  const wraps = [...document.querySelectorAll('.card-wrap:not(.matched)')];
  if(wraps.length<2) return;
  // If user has one card selected, reveal its match
  let elemWrap, propWrap;
  if(state.selected){
    const sel = state.selected.card;
    const partner = state.cards.find(c => c.pairId===sel.pairId && c.id!==sel.id);
    if(partner){
      elemWrap = state.selected.wrap;
      propWrap = wraps.find(w => +w.dataset.id===partner.id);
    }
  }
  // Otherwise pick a random unmatched pair and reveal both
  if(!propWrap){
    const unmatchedIds = wraps.map(w=>+w.dataset.id);
    const unmatchedCards = state.cards.filter(c=>unmatchedIds.includes(c.id));
    const elements = unmatchedCards.filter(c=>c.type==='element');
    if(!elements.length) return;
    const pickEl = elements[Math.floor(Math.random()*elements.length)];
    const pickPr = unmatchedCards.find(c=>c.pairId===pickEl.pairId && c.type==='property');
    if(!pickPr) return;
    elemWrap = wraps.find(w => +w.dataset.id===pickEl.id);
    propWrap = wraps.find(w => +w.dataset.id===pickPr.id);
  }
  if(!elemWrap || !propWrap) return;
  // Reveal both temporarily (flip them, pulse, then flip back if not in easy mode)
  const wasEasy = state.easyMode;
  const wasFlippedE = elemWrap.classList.contains('flipped');
  const wasFlippedP = propWrap.classList.contains('flipped');
  elemWrap.classList.add('flipped','hint-pulse');
  propWrap.classList.add('flipped','hint-pulse');
  // Pista CONCEPTUAL — texto descriptivo en lugar de solo pulse visual
  const targetEl = state.cards.find(c=>c.type==='element' && c.id===+elemWrap.dataset.id);
  const elObj = targetEl ? targetEl.el : null;
  let conceptual = 'Estos dos forman pareja';
  if(elObj){
    const fam = elObj.family.replace(/-/g,' ');
    conceptual = 'Busca el ' + fam + ' del período ' + elObj.period + ' (grupo ' + elObj.group + ')';
    if(state.mode==='propiedades' || state.mode==='contrarreloj'){
      const hk = Object.keys(elObj.hints||{});
      if(hk.length){
        const k = hk[Math.floor(Math.random()*hk.length)];
        conceptual += '. Pista química: ' + elObj.hints[k];
      }
    }
  }
  toast('💡 ' + conceptual, 'warn', {duration:3500});
  state.locked = true;
  setTimeout(()=>{
    elemWrap.classList.remove('hint-pulse');
    propWrap.classList.remove('hint-pulse');
    if(!wasEasy){
      if(!wasFlippedE) elemWrap.classList.remove('flipped');
      if(!wasFlippedP) propWrap.classList.remove('flipped');
    }
    state.locked = false;
  }, 2400);
  state.score = Math.max(0, state.score-5);
  state.hintCount--;
  $('btnHint').textContent = '💡 Pista ('+state.hintCount+')';
  if(state.hintCount<=0) $('btnHint').disabled = true;
  updateStats();
}

// ============================================================
// MENU INTERACTIVO
// ============================================================
const MENU_MODES = [
  {id:'basico',      icon:'🟡', label:'Básico',         desc:'Símbolo ↔ nombre del elemento'},
  {id:'avanzado',    icon:'🔴', label:'Avanzado',       desc:'Símbolo ↔ número atómico, período y grupo'},
  {id:'propiedades', icon:'🔵', label:'Propiedades',    desc:'EN, radio y energía de ionización'},
  {id:'iones',       icon:'⚡', label:'Iones',          desc:'Estados de oxidación más comunes'},
  {id:'config',      icon:'🧪', label:'Config. e⁻',     desc:'Configuración electrónica de valencia'},
  {id:'contrarreloj',icon:'⏱️', label:'Contrarreloj',   desc:'Propiedades con tiempo límite'},
  {id:'quiz',        icon:'🧠', label:'Quiz',           desc:'Opción múltiple sobre elementos'},
  {id:'elite',       icon:'👑', label:'Élite',          desc:'Lantánidos, actínidos y excepciones'},
  {id:'enlaces',     icon:'🔗', label:'Enlaces',        desc:'Tipos de enlace e interacciones'},
  {id:'olimpiada',   icon:'🏆', label:'Olimpiada',      desc:'Problemas estilo olimpiada'},
  {id:'repaso',      icon:'🔁', label:'Repaso',         desc:'Errores anteriores que cometiste'},
  {id:'daily',       icon:'🌟', label:'Reto del día',   desc:'Una partida única cada día'}
];
const _menuSel = {mode:'basico', level:1, easy:true, extreme:false};

function buildMenu(){
  const grid = $('menuModeGrid');
  if(!grid) return;
  grid.innerHTML = '';
  MENU_MODES.forEach(m=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'menu-mode-card';
    b.setAttribute('role','radio');
    b.setAttribute('aria-checked','false');
    b.dataset.menuMode = m.id;
    b.innerHTML = '<span class="mc-title">'+m.icon+' '+m.label+'</span><span class="mc-desc">'+m.desc+'</span>';
    b.addEventListener('click', ()=>selectMenuMode(m.id));
    grid.appendChild(b);
  });
  // Level pills
  document.querySelectorAll('#menuLevelRow [data-menu-level]').forEach(b=>{
    b.addEventListener('click', ()=>selectMenuLevel(+b.dataset.menuLevel));
  });
  $('menuExtreme').addEventListener('click', ()=>{
    _menuSel.extreme = !_menuSel.extreme;
    $('menuExtreme').classList.toggle('active', _menuSel.extreme);
    $('menuExtreme').setAttribute('aria-pressed', _menuSel.extreme?'true':'false');
    updateMenuSummary();
  });
  // Difficulty pills
  document.querySelectorAll('[data-menu-diff]').forEach(b=>{
    b.addEventListener('click', ()=>{
      _menuSel.easy = (b.dataset.menuDiff === 'easy');
      document.querySelectorAll('[data-menu-diff]').forEach(x=>{
        const on = x.dataset.menuDiff === b.dataset.menuDiff;
        x.classList.toggle('active', on);
        x.setAttribute('aria-checked', on?'true':'false');
      });
      updateMenuSummary();
    });
  });
}

function selectMenuMode(mode){
  _menuSel.mode = mode;
  document.querySelectorAll('#menuModeGrid .menu-mode-card').forEach(c=>{
    const on = c.dataset.menuMode === mode;
    c.classList.toggle('active', on);
    c.setAttribute('aria-checked', on?'true':'false');
  });
  // Mostrar Extremo solo en contrarreloj
  const ext = $('menuExtreme');
  if(mode === 'contrarreloj'){
    ext.hidden = false;
  }else{
    ext.hidden = true;
    _menuSel.extreme = false;
    ext.classList.remove('active');
    ext.setAttribute('aria-pressed','false');
  }
  // Algunos modos no usan nivel (quiz/olimpiada/enlaces igual usan, daily/repaso fijos)
  updateMenuSummary();
}

function selectMenuLevel(level){
  _menuSel.level = level;
  document.querySelectorAll('#menuLevelRow [data-menu-level]').forEach(b=>{
    const on = +b.dataset.menuLevel === level;
    b.classList.toggle('active', on);
    b.setAttribute('aria-checked', on?'true':'false');
  });
  updateMenuSummary();
}

function updateMenuSummary(){
  const m = MENU_MODES.find(x=>x.id===_menuSel.mode) || MENU_MODES[0];
  const diffTxt = _menuSel.easy ? '😊 Fácil' : '🧠 Memoria';
  const lvlTxt = (_menuSel.mode==='contrarreloj' && _menuSel.extreme)
    ? '⚡ Extremo (30s)'
    : 'Nivel '+_menuSel.level;
  $('menuSummary').innerHTML = 'Vas a jugar <strong>'+m.icon+' '+m.label+'</strong> · <strong>'+lvlTxt+'</strong> · <strong>'+diffTxt+'</strong>';
}

function openMenu(){
  // Sincroniza selección con el estado actual
  _menuSel.mode = state.mode || 'basico';
  _menuSel.level = state.level || 1;
  _menuSel.easy = state.easyMode !== false;
  _menuSel.extreme = !!state.extremeMode;
  selectMenuMode(_menuSel.mode);
  selectMenuLevel(_menuSel.level);
  document.querySelectorAll('[data-menu-diff]').forEach(x=>{
    const on = (x.dataset.menuDiff==='easy') === _menuSel.easy;
    x.classList.toggle('active', on);
    x.setAttribute('aria-checked', on?'true':'false');
  });
  if(_menuSel.mode==='contrarreloj' && _menuSel.extreme){
    $('menuExtreme').classList.add('active');
    $('menuExtreme').setAttribute('aria-pressed','true');
  }
  updateMenuSummary();
  $('menuScreen').classList.remove('hidden');
}

function closeMenu(){
  // Aplica selección al estado del juego
  state.mode = _menuSel.mode;
  state.level = _menuSel.level;
  state.easyMode = _menuSel.easy;
  state.extremeMode = (_menuSel.mode==='contrarreloj') ? _menuSel.extreme : false;
  // Sincroniza clases activas en los botones (ocultos) que la lógica del juego sigue mirando
  document.querySelectorAll('.mode-btn').forEach(x=>x.classList.toggle('active', x.dataset.mode===state.mode));
  document.querySelectorAll('.level-btn[data-level]').forEach(x=>{
    const on = +x.dataset.level === state.level;
    x.classList.toggle('active', on);
    x.setAttribute('aria-checked', on?'true':'false');
  });
  const be=$('btnEasy'), bh=$('btnHard');
  if(be && bh){
    be.classList.toggle('active', state.easyMode);
    bh.classList.toggle('active', !state.easyMode);
    be.setAttribute('aria-pressed', state.easyMode?'true':'false');
    bh.setAttribute('aria-pressed', state.easyMode?'false':'true');
  }
  saveState();
  $('menuScreen').classList.add('hidden');
}

// ============================================================
// EVENT BINDINGS
// ============================================================
function bind(){
  // Splash → abre menú interactivo
  $('splashPlay').addEventListener('click', ()=>{
    $('splash').classList.add('hidden');
    AudioEngine.resume();
    if(state.musicOn) AudioEngine.startMusic();
    openMenu();
  });
  $('splashRules').addEventListener('click', ()=>openModal('modalRules'));

  // Menu interactivo
  buildMenu();
  $('menuStart').addEventListener('click', ()=>{
    closeMenu();
    initGame();
    if(state.firstPlay){
      setTimeout(()=>{ $('onboarding').classList.add('open'); }, 300);
    }
  });
  $('menuBack').addEventListener('click', ()=>{
    closeMenu();
    $('splash').classList.remove('hidden');
  });
  $('btnMenu').addEventListener('click', openMenu);

  // Modes
  document.querySelectorAll('.mode-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('.mode-btn').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      state.mode = b.dataset.mode;
      // Reset al nivel 1 si el actual está bloqueado
      const max = (state.unlocked && state.unlocked[state.mode]) || 1;
      if(state.level > max){
        state.level = 1;
        document.querySelectorAll('.level-btn[data-level]').forEach(x=>{
          const lvl=+x.dataset.level;
          x.classList.toggle('active', lvl===1);
          x.setAttribute('aria-checked', lvl===1?'true':'false');
        });
      }
      updateLevelLocks();
      initGame();
    });
  });
  // Levels
  document.querySelectorAll('.level-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('.level-btn').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-checked','false')});
      b.classList.add('active');b.setAttribute('aria-checked','true');
      state.level = +b.dataset.level;
      initGame();
    });
  });
  // Difficulty toggle
  function setDifficulty(easy){
    state.easyMode = easy;
    $('btnEasy').classList.toggle('active', easy);
    $('btnHard').classList.toggle('active', !easy);
    $('btnEasy').setAttribute('aria-pressed', easy?'true':'false');
    $('btnHard').setAttribute('aria-pressed', easy?'false':'true');
    saveState();
    initGame();
  }
  $('btnEasy').addEventListener('click', ()=>setDifficulty(true));
  $('btnHard').addEventListener('click', ()=>setDifficulty(false));
  // Init difficulty button visual state
  $('btnEasy').classList.toggle('active', state.easyMode);
  $('btnHard').classList.toggle('active', !state.easyMode);
  $('btnEasy').setAttribute('aria-pressed', state.easyMode?'true':'false');
  $('btnHard').setAttribute('aria-pressed', state.easyMode?'false':'true');

  // Buttons
  $('btnRestart').addEventListener('click', initGame);
  // Power-ups
  $('puReveal').addEventListener('click', powerupReveal);
  $('puFreeze').addEventListener('click', powerupFreeze);
  $('puDouble').addEventListener('click', powerupDouble);
  updatePowerupsUI();
  // Modo Extremo (solo contrarreloj)
  $('btnExtreme').addEventListener('click', ()=>{
    state.extremeMode = !state.extremeMode;
    $('btnExtreme').setAttribute('aria-pressed', state.extremeMode?'true':'false');
    $('btnExtreme').classList.toggle('active', state.extremeMode);
    if(state.mode==='contrarreloj') initGame();
  });
  $('btnHint').addEventListener('click', useHint);
  $('btnRules').addEventListener('click', ()=>openModal('modalRules'));
  $('btnTrends').addEventListener('click', ()=>{
    $('trendsPanel').classList.toggle('open');
  });
  // ===== Help hub =====
  $('btnHelp').addEventListener('click', ()=>openModal('modalHelp'));
  $('helpHint').addEventListener('click', ()=>{ closeModal('modalHelp'); useHint(); });
  $('helpRules').addEventListener('click', ()=>{ closeModal('modalHelp'); openModal('modalRules'); });
  $('helpTrends').addEventListener('click', ()=>{ closeModal('modalHelp'); $('trendsPanel').classList.add('open'); });
  // ===== Profile hub =====
  $('btnProfile').addEventListener('click', ()=>{ renderProfileStats(); openModal('modalProfile'); });
  $('profileCol').addEventListener('click', ()=>{ closeModal('modalProfile'); renderCollection(); openModal('modalCollection'); });
  $('profileAch').addEventListener('click', ()=>{ closeModal('modalProfile'); renderAch(); openModal('modalAch'); });
  $('profileLB').addEventListener('click', ()=>{ closeModal('modalProfile'); renderLB(); openModal('modalLB'); });
  $('profileHist').addEventListener('click', ()=>{ closeModal('modalProfile'); $('btnHist').click(); });
  // ===== Fondo animado toggle =====
  $('btnBg').addEventListener('click', ()=>{
    state.a11y.bgAnimated = !state.a11y.bgAnimated;
    BgEngine.setAnimated(state.a11y.bgAnimated);
    $('btnBg').classList.toggle('bg-on', state.a11y.bgAnimated);
    $('btnBg').setAttribute('aria-pressed', state.a11y.bgAnimated?'true':'false');
    toast(state.a11y.bgAnimated?'🌌 Fondo animado activado':'🪨 Fondo estático','info',{duration:1200});
    saveState();
  });
  $('btnCol').addEventListener('click', ()=>{renderCollection();openModal('modalCollection')});
  $('btnAch').addEventListener('click', ()=>{renderAch();openModal('modalAch')});
  $('btnLB').addEventListener('click', ()=>{renderLB();openModal('modalLB')});
  // Onboarding
  let obStep = 1;
  function showObStep(n){
    document.querySelectorAll('.ob-slide').forEach(s=>s.style.display='none');
    const s = document.querySelector('.ob-slide[data-step="'+n+'"]');
    if(s) s.style.display='';
    $('obNext').textContent = n>=3 ? '¡Empezar!' : 'Siguiente';
  }
  $('obNext').addEventListener('click', ()=>{
    if(obStep>=3){
      $('onboarding').classList.remove('open');
      state.firstPlay = false;
      saveState();
    }else{
      obStep++;
      showObStep(obStep);
    }
  });
  $('obSkip').addEventListener('click', ()=>{
    $('onboarding').classList.remove('open');
    state.firstPlay = false;
    saveState();
  });
  $('btnHist').addEventListener('click', ()=>{
    const list = $('historyList');
    list.textContent = '';
    if(!state.history || !state.history.length){
      const p = document.createElement('p');
      p.style.cssText='color:var(--text-3);font-size:.85rem';
      p.textContent='Aún no hay explicaciones guardadas. ¡Empareja elementos para verlas aquí!';
      list.appendChild(p);
    }else{
      state.history.slice(0,30).forEach(h=>{
        const item = document.createElement('div');
        item.style.cssText='padding:8px 0;border-bottom:1px solid var(--border-subtle)';
        const sym = document.createElement('strong');
        sym.style.color='var(--primary)';
        sym.textContent = h.sym + ' ('+h.name+')';
        item.appendChild(sym);
        const p = document.createElement('p');
        p.style.cssText='font-size:.78rem;margin-top:4px';
        p.textContent = h.expl;
        item.appendChild(p);
        list.appendChild(item);
      });
    }
    openModal('modalHistory');
  });
  // Modal A11y
  $('btnA11y').addEventListener('click', ()=>{
    // Sincronizar UI con state
    $('rangeFontScale').value = state.a11y.scale;
    $('fontScaleVal').textContent = Math.round(state.a11y.scale*100)+'%';
    $('chkReduceMotion').checked = !!state.a11y.reduceMotion;
    $('rangeVolMusic').value = state.audioVol.music;
    $('rangeVolFx').value = state.audioVol.fx;
    openModal('modalA11y');
  });
  document.querySelectorAll('[data-theme-set]').forEach(b=>{
    b.addEventListener('click', ()=>{
      state.a11y.theme = b.getAttribute('data-theme-set');
      applyA11y();
      saveState();
    });
  });
  $('rangeFontScale').addEventListener('input', e=>{
    state.a11y.scale = parseFloat(e.target.value);
    $('fontScaleVal').textContent = Math.round(state.a11y.scale*100)+'%';
    applyA11y();
    saveState();
  });
  $('chkReduceMotion').addEventListener('change', e=>{
    state.a11y.reduceMotion = e.target.checked;
    applyA11y();
    saveState();
  });
  $('rangeVolMusic').addEventListener('input', e=>{
    state.audioVol.music = parseFloat(e.target.value);
    if(AudioEngine.setMusicVol) AudioEngine.setMusicVol(state.audioVol.music);
    saveState();
  });
  $('rangeVolFx').addEventListener('input', e=>{
    state.audioVol.fx = parseFloat(e.target.value);
    if(AudioEngine.setFxVol) AudioEngine.setFxVol(state.audioVol.fx);
    saveState();
  });
  $('btnClearLB').addEventListener('click', ()=>{
    if(confirm('¿Borrar todos los récords?')){state.records=[];saveState();renderLB()}
  });
  // Mute
  $('btnMute').addEventListener('click', ()=>{
    state.muted = !state.muted;
    $('btnMute').textContent = state.muted?'🔇':'🔊';
    saveState();
  });
  // Music
  $('btnMusic').addEventListener('click', ()=>{
    state.musicOn = !state.musicOn;
    $('btnMusic').style.opacity = state.musicOn?'1':'0.5';
    if(state.musicOn) AudioEngine.startMusic(); else AudioEngine.stopMusic();
    saveState();
  });
  // Modal close
  document.querySelectorAll('[data-close]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const ov = b.closest('.modal-overlay');
      if(ov) ov.classList.remove('open');
      if(lastFocused) lastFocused.focus();
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(ov=>{
    ov.addEventListener('click', e=>{
      if(e.target===ov){ov.classList.remove('open');if(lastFocused) lastFocused.focus()}
    });
  });
  // Copy share
  $('btnCopy').addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText($('shareText').value);
      toast('Copiado al portapapeles', 'good');
    }catch(e){
      $('shareText').select();document.execCommand('copy');
      toast('Copiado','good');
    }
  });
  $('btnAgain').addEventListener('click', ()=>{
    closeModal('modalResults');
    initGame();
  });
  $('btnNextLevel').addEventListener('click', ()=>{
    closeModal('modalResults');
    if(state.level < 3){
      state.level += 1;
      // Sincronizar UI de nivel
      document.querySelectorAll('.level-btn').forEach(b=>{
        const lvl = +b.dataset.level;
        b.classList.toggle('active', lvl===state.level);
        b.setAttribute('aria-checked', lvl===state.level ? 'true':'false');
      });
    }
    initGame();
  });
  // Grid delegation
  $('grid').addEventListener('click', onGridClick);
  $('grid').addEventListener('keydown', e=>{
    const w = e.target.closest('.card-wrap');
    if(!w) return;
    if(e.key==='Enter'||e.key===' '){
      e.preventDefault();
      onGridClick({target:w});
      return;
    }
    // Roving tabindex con flechas
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key)){
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.card-wrap'));
      const idx = cards.indexOf(w);
      if(idx<0) return;
      // Calcular columnas según ancho del grid
      const gridEl = $('grid');
      const cs = getComputedStyle(gridEl);
      const cols = cs.gridTemplateColumns.split(' ').length || 1;
      let next = idx;
      if(e.key==='ArrowLeft') next = Math.max(0, idx-1);
      else if(e.key==='ArrowRight') next = Math.min(cards.length-1, idx+1);
      else if(e.key==='ArrowUp') next = Math.max(0, idx-cols);
      else if(e.key==='ArrowDown') next = Math.min(cards.length-1, idx+cols);
      else if(e.key==='Home') next = 0;
      else if(e.key==='End') next = cards.length-1;
      cards.forEach((c,i)=>c.setAttribute('tabindex', i===next?'0':'-1'));
      cards[next].focus();
    }
  });
  // Keyboard shortcuts
  document.addEventListener('keydown', e=>{
    // Close modals with Esc
    if(e.key==='Escape'){
      const open = document.querySelector('.modal-overlay.open');
      if(open){open.classList.remove('open');return}
    }
    if(e.target.tagName==='TEXTAREA'||e.target.tagName==='INPUT') return;
    // Bloquear shortcuts si hay un modal abierto
    if(document.querySelector('.modal-overlay.open')) return;
    if(e.key==='r'||e.key==='R'){initGame()}
    if(e.key==='h'||e.key==='H'){useHint()}
    // Numbers select cards
    if(/^[1-9]$/.test(e.key)){
      const idx = +e.key - 1;
      const wraps = document.querySelectorAll('.card-wrap:not(.matched)');
      if(wraps[idx]) wraps[idx].click();
    }
  });
}

// ============================================================
// BOOT
// ============================================================
loadState();
applyA11y();
updateXpBar();
updateLevelLocks();
$('btnMute').textContent = state.muted?'🔇':'🔊';
$('btnMusic').style.opacity = state.musicOn?'1':'0.5';
// Inicializa fondo animado de elementos químicos
if(typeof state.a11y.bgAnimated !== 'boolean') state.a11y.bgAnimated = true;
BgEngine.init();
BgEngine.setAnimated(state.a11y.bgAnimated && !isReducedMotion());
$('btnBg').classList.toggle('bg-on', state.a11y.bgAnimated);
$('btnBg').setAttribute('aria-pressed', state.a11y.bgAnimated?'true':'false');
bind();

// Show splash on first load (not when rebooted via restart)
// initGame() is called when pressing splashPlay
