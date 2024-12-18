// Liste des références de versets
const versets = [
    "genese-1-1",
    "exode-14-14",
    "levitique-19-18",
    "deuteronome-31-6",
    "josue-1-9",
    "juges-5-31",
    "ruth-1-16",
    "1-samuel-16-7",
    "2-samuel-22-31",
    "1-rois-8-57",
    "2-rois-6-16",
    "1-chroniques-16-11",
    "2-chroniques-7-14",
    "esdras-10-4",
    "nehemie-8-10",
    "esther-4-14",
    "job-8-7",
    "psaume-27-1",
    "psaume-34-8",
    "psaume-46-1",
    "psaume-119-105",
    "proverbes-3-5",
    "proverbes-17-22",
    "ecclesiaste-3-1",
    "cantique-des-cantiques-2-16",
    "esaie-40-31",
    "esaie-41-10",
    "esaie-53-5",
    "jeremie-29-11",
    "lamentations-3-22-23",
    "ezechiel-36-26",
    "daniel-12-3",
    "oshee-6-6",
    "joel-2-13",
    "amos-5-24",
    "jonas-2-2",
    "michee-6-8",
    "nahoum-1-7",
    "habacuc-2-4",
    "sophonie-3-17",
    "aggée-2-9",
    "zacharie-4-6",
    "malachie-3-10",
    "matthieu-5-14",
    "matthieu-6-33",
    "matthieu-7-7",
    "matthieu-11-28",
    "matthieu-22-37",
    "matthieu-28-19-20",
    "marc-10-27",
    "marc-12-30",
    "luc-6-31",
    "luc-11-9",
    "luc-18-27",
    "jean-1-1",
    "jean-3-16",
    "jean-8-12",
    "jean-10-10",
    "jean-11-25",
    "jean-13-34",
    "jean-14-6",
    "jean-15-5",
    "actes-1-8",
    "actes-2-38",
    "romains-3-23",
    "romains-5-8",
    "romains-6-23",
    "romains-8-1",
    "romains-8-28",
    "romains-8-38-39",
    "romains-12-2",
    "romains-12-12",
    "1-corinthiens-10-13",
    "1-corinthiens-13-4-7",
    "2-corinthiens-4-16-18",
    "2-corinthiens-5-17",
    "galates-2-20",
    "galates-5-22-23",
    "ephesiens-2-8",
    "ephesiens-3-20",
    "ephesiens-6-10",
    "philippiens-1-6",
    "philippiens-4-4",
    "philippiens-4-6-7",
    "philippiens-4-13",
    "colossiens-3-23",
    "1-thessaloniciens-5-16-18",
    "2-thessaloniciens-3-3",
    "1-timothee-4-12",
    "2-timothee-1-7",
    "hebreux-4-12",
    "hebreux-10-23",
    "hebreux-11-1",
    "hebreux-12-2",
    "jacques-1-2-3",
    "jacques-1-5",
    "jacques-4-7",
    "1-pierre-5-7",
    "2-pierre-3-9",
    "1-jean-1-9",
    "1-jean-3-1",
    "1-jean-4-7",
    "1-jean-4-18",
    "apocalypse-1-8",
    "apocalypse-3-20",
    "apocalypse-21-4",
    "apocalypse-22-13",
    "psaume-121-1-2",
    "psaume-37-4",
    "psaume-91-2",
    "proverbes-4-23",
    "proverbes-16-9",
    "esdras-10-4",
    "esaie-26-3",
    "psaume-118-24",
    "psaume-34-18",
    "psaume-103-12",
    "romains-15-13",
    "ephesiens-4-2",
    "ephesiens-5-8",
    "philippiens-3-13-14",
    "philippiens-2-3",
    "colossiens-2-6-7",
    "colossiens-3-2",
    "1-thessaloniciens-5-11",
    "2-timothee-3-16",
    "hebreux-13-8",
    "1-pierre-2-9",
    "2-corinthiens-12-9",
    "1-corinthiens-15-58",
    "jean-16-33",
    "romains-14-8",
    "romains-8-18",
    "psaume-55-22",
    "esaie-43-2",
    "matthieu-19-26",
    "jean-15-13",
    "philippiens-4-19",
    "psaume-56-3",
    "psaume-46-10",
    "esaie-54-10",
    "proverbes-18-10",
    "jean-14-27",
    "2-corinthiens-1-3-4",
    "romains-8-37"
];


// Récupérer les boutons et la zone d'affichage
const complimentBtn = document.getElementById('compliment-btn');
const versetBtn = document.getElementById('verset-btn');
const output = document.getElementById('output');

// Ajouter des événements aux boutons
complimentBtn.addEventListener('click', () => {
    const compliments = [
    "Tu es le fromage de la raclette, tu es indispensable!",
    "Tu es la meilleure petite sœur du monde !",
    "Ton sourire rend chaque journée plus belle.",
    "Tu es un véritable rayon de soleil.",
    "Je suis tellement chanceux(se) de t'avoir dans ma vie.",
    "Tu es plus forte que tu ne le penses.",
    "Tu as un talent incroyable pour rendre les gens heureux.",
    "Tu es belle à l'intérieur comme à l'extérieur.",
    "Tu as un rire qui réchauffe le cœur.",
    "Tu es pleine d'énergie positive.",
    "Tu rends notre maison plus joyeuse chaque jour.",
    "Tu es une source d'inspiration pour moi.",
    "Ta gentillesse est contagieuse.",
    "Tu as un cœur en or.",
    "Tu es une personne unique et spéciale.",
    "Tu es un véritable trésor.",
    "Tu sais toujours comment remonter le moral des gens.",
    "Tu es incroyablement courageuse.",
    "Tu es brillante et pleine de ressources.",
    "Tu as une imagination débordante.",
    "Tu es incroyablement créative.",
    "Ta voix est comme une douce mélodie.",
    "Tu rends tout autour de toi plus beau.",
    "Tu as le pouvoir de transformer une mauvaise journée en une bonne journée.",
    "Tu es une personne tellement attentionnée.",
    "Tu as une énergie qui illumine les autres.",
    "Tu es une vraie artiste dans tout ce que tu fais.",
    "Tu as un talent inné pour la gentillesse.",
    "Tu es la définition même de la joie.",
    "Ta présence est toujours apaisante.",
    "Tu es toujours prête à aider, et ça compte beaucoup.",
    "Tu es une véritable étoile brillante.",
    "Ton amour pour les autres est inspirant.",
    "Tu es toujours fidèle à toi-même, et c'est génial.",
    "Tu es tellement courageuse face aux défis.",
    "Tu es une force de la nature.",
    "Tu rends chaque moment passé avec toi spécial.",
    "Tu as un sens de l'humour incroyable.",
    "Tu es un véritable petit génie.",
    "Tu es comme une boîte à surprises pleine de bonheur.",
    "Tu as le don de faire sourire les gens autour de toi.",
    "Tu es douce comme un nuage de coton.",
    "Tu es une petite sœur qu'on ne peut qu'aimer.",
    "Tu as une âme tellement belle.",
    "Ta créativité est vraiment impressionnante.",
    "Tu es un exemple pour beaucoup.",
    "Tu es une vraie combattante.",
    "Ta curiosité est admirable.",
    "Tu es une aventurière dans l'âme.",
    "Tu es comme un rayon de lumière dans l'obscurité.",
    "Tu as une énergie qui inspire les autres.",
    "Tu es toujours pleine de surprises.",
    "Ta gentillesse rend le monde meilleur.",
    "Tu as le plus grand cœur que je connaisse.",
    "Tu es un véritable cadeau pour notre famille.",
    "Tu es une source infinie d'amour.",
    "Tu es incroyablement intelligente.",
    "Tu es forte et courageuse.",
    "Tu es une véritable fée des temps modernes.",
    "Tu es une étoile qui brille même dans la tempête.",
    "Tu es une personne sur qui on peut toujours compter.",
    "Tu es une véritable artiste dans l'âme.",
    "Tu es une source de bonheur pour tous ceux qui te connaissent.",
    "Tu as un talent naturel pour faire sourire les gens.",
    "Tu as une personnalité lumineuse.",
    "Tu es une véritable perle rare.",
    "Tu es quelqu'un de tellement attentionné.",
    "Tu es pleine d'amour et de compassion.",
    "Tu es une personne sur laquelle je peux toujours compter.",
    "Tu es un véritable arc-en-ciel après la pluie.",
    "Tu as une joie de vivre qui est contagieuse.",
    "Tu es incroyablement unique.",
    "Tu as une sagesse qui dépasse ton âge.",
    "Tu es une vraie magicienne du bonheur.",
    "Tu es une source de lumière dans ma vie.",
    "Tu es la personne la plus adorable que je connaisse.",
    "Tu es une aventurière avec un grand cœur.",
    "Tu as une douceur qui apaise les cœurs.",
    "Tu es une princesse au cœur noble.",
    "Tu es une source d'espoir et de joie.",
    "Tu as un talent naturel pour rendre les gens heureux.",
    "Tu es un véritable rayon de bonheur.",
    "Tu es la meilleure confidente qu'on puisse avoir.",
    "Tu as un esprit vif et brillant.",
    "Tu es une vraie guerrière de la vie.",
    "Tu es une petite boule d'énergie positive.",
    "Tu as un sourire qui illumine tout.",
    "Tu es comme un trésor qu'on découvre chaque jour.",
    "Tu es une artiste dans ton propre monde.",
    "Tu es une petite étoile qui brille toujours.",
    "Tu es une personne pleine de surprises.",
    "Tu es un ange gardien sur terre.",
    "Tu as une aura qui réchauffe les cœurs.",
    "Tu es une source constante de joie et de rires.",
    "Tu es une reine dans tout ce que tu fais.",
    "Tu es une petite sœur qu'on ne peut qu'adorer.",
    "Tu es la définition de la beauté intérieure.",
    "Tu es une véritable encyclopédie d'amour et de gentillesse.",
    "Tu es plus précieuse que tu ne le penses.",
    "Tu es une source d'inspiration et d'admiration.",
    "Tu as un don spécial pour illuminer les journées.",
    "Tu es une protectrice pour tous ceux que tu aimes.",
    "Tu es un diamant brut plein d'éclat.",
    "Tu es une étoile qui guide les autres.",
    "Tu es une vraie alchimiste du bonheur.",
    "Tu es la meilleure alliée qu'on puisse avoir.",
    "Tu es une vraie philosophe en herbe.",
    "Tu es une magicienne du bonheur.",
    "Tu es une merveilleuse petite sœur.",
    "Tu es comme un livre rempli de belles histoires.",
    "Tu es un soleil dans les moments sombres.",
    "Tu es un véritable chef-d'œuvre.",
    "Tu es un trésor inestimable.",
    "Tu es une petite flamme qui éclaire les cœurs.",
    "Tu es une vraie protectrice des sourires.",
    "Tu es une exploratrice de la vie.",
    "Tu es une petite merveille de créativité.",
    "Tu es une reine du courage et de la joie.",
    "Tu es un véritable ange parmi nous.",
    "Tu es une étoile filante de bonheur.",
    "Tu es une source d'amour inépuisable.",
    "Tu es une aventurière qui rend tout excitant.",
    "Tu es une petite bulle de bonheur pur.",
    "Tu es une petite fée bienveillante.",
    "Tu es un chef-d'œuvre du bonheur.",
    "Tu es une véritable explosion de gentillesse."
];

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    output.textContent = randomCompliment;
    output.style.display = "block"; // Pour s'assurer que le texte s'affiche correctement
});

// Générer un verset sous forme d'image
versetBtn.addEventListener('click', () => {
    const randomReference = versets[Math.floor(Math.random() * versets.length)];
    const imageUrl = `https://dailyverses.net/images/fr/sg21/xl/${randomReference}.jpg`;

    // Afficher l'image dans le conteneur
    output.innerHTML = `<img src="${imageUrl}" alt="Verset de la Bible" style="max-width: 100%; height: auto; border-radius: 10px;">`;
    output.style.display = "block";
});
