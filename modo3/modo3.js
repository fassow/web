const elements = [
    { symbol: 'H', name: 'Hidrógeno', atomicNumber: 1, discoverer: 'Henry Cavendish', type: 'representative-elements' },
    { symbol: 'He', name: 'Helio', atomicNumber: 2, discoverer: 'Pierre Janssen', type: 'noble-gases' },
    { symbol: 'Li', name: 'Litio', atomicNumber: 3, discoverer: 'Johan August Arfvedson', type: 'representative-elements' },
    { symbol: 'Be', name: 'Berilio', atomicNumber: 4, discoverer: 'Friedrich Wöhler', type: 'representative-elements' },
    { symbol: 'B', name: 'Boro', atomicNumber: 5, discoverer: 'Joseph-Louis Gay-Lussac', type: 'representative-elements' },
    { symbol: 'C', name: 'Carbono', atomicNumber: 6, discoverer: 'Desconocido', type: 'representative-elements' },
    { symbol: 'N', name: 'Nitrógeno', atomicNumber: 7, discoverer: 'Daniel Rutherford', type: 'representative-elements' },
    { symbol: 'O', name: 'Oxígeno', atomicNumber: 8, discoverer: 'Joseph Priestley', type: 'representative-elements' },
    { symbol: 'F', name: 'Flúor', atomicNumber: 9, discoverer: 'Henri Moissan', type: 'representative-elements' },
    { symbol: 'Ne', name: 'Neón', atomicNumber: 10, discoverer: 'Morris Travers', type: 'noble-gases' },
    { symbol: 'Na', name: 'Sodio', atomicNumber: 11, discoverer: 'Humphry Davy', type: 'representative-elements' },
    { symbol: 'Mg', name: 'Magnesio', atomicNumber: 12, discoverer: 'Joseph Black', type: 'representative-elements' },
    { symbol: 'Al', name: 'Aluminio', atomicNumber: 13, discoverer: 'Hans Christian Ørsted', type: 'representative-elements' },
    { symbol: 'Si', name: 'Silicio', atomicNumber: 14, discoverer: 'Jöns Jacob Berzelius', type: 'representative-elements' },
    { symbol: 'P', name: 'Fósforo', atomicNumber: 15, discoverer: 'Hennig Brand', type: 'representative-elements' },
    { symbol: 'S', name: 'Azufre', atomicNumber: 16, discoverer: 'Desconocido', type: 'representative-elements' },
    { symbol: 'Cl', name: 'Cloro', atomicNumber: 17, discoverer: 'Carl Wilhelm Scheele', type: 'representative-elements' },
    { symbol: 'Ar', name: 'Argón', atomicNumber: 18, discoverer: 'Lord Rayleigh', type: 'noble-gases' },
    { symbol: 'K', name: 'Potasio', atomicNumber: 19, discoverer: 'Humphry Davy', type: 'representative-elements' },
    { symbol: 'Ca', name: 'Calcio', atomicNumber: 20, discoverer: 'Humphry Davy', type: 'representative-elements' },
    { symbol: 'Sc', name: 'Escandio', atomicNumber: 21, discoverer: 'Lars Fredrik Nilson', type: 'transition-metals' },
    { symbol: 'Ti', name: 'Titanio', atomicNumber: 22, discoverer: 'William Gregor', type: 'transition-metals' },
    { symbol: 'V', name: 'Vanadio', atomicNumber: 23, discoverer: 'Andrés Manuel del Río', type: 'transition-metals' },
    { symbol: 'Cr', name: 'Cromo', atomicNumber: 24, discoverer: 'Louis Nicolas Vauquelin', type: 'transition-metals' },
    { symbol: 'Mn', name: 'Manganeso', atomicNumber: 25, discoverer: 'Johan Gottlieb Gahn', type: 'transition-metals' },
    { symbol: 'Fe', name: 'Hierro', atomicNumber: 26, discoverer: 'Desconocido', type: 'transition-metals' },
    { symbol: 'Co', name: 'Cobalto', atomicNumber: 27, discoverer: 'Georg Brandt', type: 'transition-metals' },
    { symbol: 'Ni', name: 'Níquel', atomicNumber: 28, discoverer: 'Axel Fredrik Cronstedt', type: 'transition-metals' },
    { symbol: 'Cu', name: 'Cobre', atomicNumber: 29, discoverer: 'Desconocido', type: 'transition-metals' },
    { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, discoverer: 'Andreas Sigismund Marggraf', type: 'transition-metals' },
    { symbol: 'Ga', name: 'Galio', atomicNumber: 31, discoverer: 'Lecoq de Boisbaudran', type: 'representative-elements' },
    { symbol: 'Ge', name: 'Germanio', atomicNumber: 32, discoverer: 'Clemens Winkler', type: 'representative-elements' },
    { symbol: 'As', name: 'Arsénico', atomicNumber: 33, discoverer: 'Albertus Magnus', type: 'representative-elements' },
    { symbol: 'Se', name: 'Selenio', atomicNumber: 34, discoverer: 'Jöns Jacob Berzelius', type: 'representative-elements' },
    { symbol: 'Br', name: 'Bromo', atomicNumber: 35, discoverer: 'Antoine Jérôme Balard', type: 'representative-elements' },
    { symbol: 'Kr', name: 'Kriptón', atomicNumber: 36, discoverer: 'William Ramsay', type: 'noble-gases' },
    { symbol: 'Rb', name: 'Rubidio', atomicNumber: 37, discoverer: 'Robert Bunsen', type: 'representative-elements' },
    { symbol: 'Sr', name: 'Estroncio', atomicNumber: 38, discoverer: 'William Cruickshank', type: 'representative-elements' },
    { symbol: 'Y', name: 'Itrio', atomicNumber: 39, discoverer: 'Johan Gadolin', type: 'transition-metals' },
    { symbol: 'Zr', name: 'Circonio', atomicNumber: 40, discoverer: 'Martin Heinrich Klaproth', type: 'transition-metals' },
    { symbol: 'Nb', name: 'Niobio', atomicNumber: 41, discoverer: 'Charles Hatchett', type: 'transition-metals' },
    { symbol: 'Mo', name: 'Molibdeno', atomicNumber: 42, discoverer: 'Carl Wilhelm Scheele', type: 'transition-metals' },
    { symbol: 'Tc', name: 'Tecnecio', atomicNumber: 43, discoverer: 'Emilio Segrè', type: 'transition-metals' },
    { symbol: 'Ru', name: 'Rutenio', atomicNumber: 44, discoverer: 'Karl Ernst Claus', type: 'transition-metals' },
    { symbol: 'Rh', name: 'Rodio', atomicNumber: 45, discoverer: 'William Hyde Wollaston', type: 'transition-metals' },
    { symbol: 'Pd', name: 'Paladio', atomicNumber: 46, discoverer: 'William Hyde Wollaston', type: 'transition-metals' },
    { symbol: 'Ag', name: 'Plata', atomicNumber: 47, discoverer: 'Desconocido', type: 'transition-metals' },
    { symbol: 'Cd', name: 'Cadmio', atomicNumber: 48, discoverer: 'Friedrich Stromeyer', type: 'transition-metals' },
    { symbol: 'In', name: 'Indio', atomicNumber: 49, discoverer: 'Ferdinand Reich', type: 'representative-elements' },
    { symbol: 'Sn', name: 'Estaño', atomicNumber: 50, discoverer: 'Desconocido', type: 'representative-elements' },
    { symbol: 'Sb', name: 'Antimonio', atomicNumber: 51, discoverer: 'Desconocido', type: 'representative-elements' },
    { symbol: 'Te', name: 'Telurio', atomicNumber: 52, discoverer: 'Franz-Joseph Müller von Reichenstein', type: 'representative-elements' },
    { symbol: 'I', name: 'Yodo', atomicNumber: 53, discoverer: 'Bernard Courtois', type: 'representative-elements' },
    { symbol: 'Xe', name: 'Xenón', atomicNumber: 54, discoverer: 'William Ramsay', type: 'noble-gases' },
    { symbol: 'Cs', name: 'Cesio', atomicNumber: 55, discoverer: 'Robert Bunsen', type: 'representative-elements' },
    { symbol: 'Ba', name: 'Bario', atomicNumber: 56, discoverer: 'Humphry Davy', type: 'representative-elements' },
    { symbol: 'La', name: 'Lantano', atomicNumber: 57, discoverer: 'Carl Gustaf Mosander', type: 'inner-transition-metals' },
    { symbol: 'Ce', name: 'Cerio', atomicNumber: 58, discoverer: 'Martin Heinrich Klaproth', type: 'inner-transition-metals' },
    { symbol: 'Pr', name: 'Praseodimio', atomicNumber: 59, discoverer: 'Carl Auer von Welsbach', type: 'inner-transition-metals' },
    { symbol: 'Nd', name: 'Neodimio', atomicNumber: 60, discoverer: 'Carl Auer von Welsbach', type: 'inner-transition-metals' },
    { symbol: 'Pm', name: 'Prometio', atomicNumber: 61, discoverer: 'Jacob A. Marinsky', type: 'inner-transition-metals' },
    { symbol: 'Sm', name: 'Samario', atomicNumber: 62, discoverer: 'Paul-Émile Lecoq de Boisbaudran', type: 'inner-transition-metals' },
    { symbol: 'Eu', name: 'Europio', atomicNumber: 63, discoverer: 'Eugène-Anatole Demarçay', type: 'inner-transition-metals' },
    { symbol: 'Gd', name: 'Gadolinio', atomicNumber: 64, discoverer: 'Jean Charles Galissard de Marignac', type: 'inner-transition-metals' },
    { symbol: 'Tb', name: 'Terbio', atomicNumber: 65, discoverer: 'Carl Gustaf Mosander', type: 'inner-transition-metals' },
    { symbol: 'Dy', name: 'Disprosio', atomicNumber: 66, discoverer: 'Paul-Émile Lecoq de Boisbaudran', type: 'inner-transition-metals' },
    { symbol: 'Ho', name: 'Holmio', atomicNumber: 67, discoverer: 'Marc Delafontaine', type: 'inner-transition-metals' },
    { symbol: 'Er', name: 'Erbio', atomicNumber: 68, discoverer: 'Carl Gustaf Mosander', type: 'inner-transition-metals' },
    { symbol: 'Tm', name: 'Tulio', atomicNumber: 69, discoverer: 'Per Teodor Cleve', type: 'inner-transition-metals' },
    { symbol: 'Yb', name: 'Iterbio', atomicNumber: 70, discoverer: 'Jean Charles Galissard de Marignac', type: 'inner-transition-metals' },
    { symbol: 'Lu', name: 'Lutecio', atomicNumber: 71, discoverer: 'Georges Urbain', type: 'inner-transition-metals' },
    { symbol: 'Hf', name: 'Hafnio', atomicNumber: 72, discoverer: 'Dirk Coster', type: 'transition-metals' },
    { symbol: 'Ta', name: 'Tantalio', atomicNumber: 73, discoverer: 'Anders Ekeberg', type: 'transition-metals' },
    { symbol: 'W', name: 'Wolframio', atomicNumber: 74, discoverer: 'Juan José Elhuyar', type: 'transition-metals' },
    { symbol: 'Re', name: 'Renio', atomicNumber: 75, discoverer: 'Walter Noddack', type: 'transition-metals' },
    { symbol: 'Os', name: 'Osmio', atomicNumber: 76, discoverer: 'Smithson Tennant', type: 'transition-metals' },
    { symbol: 'Ir', name: 'Iridio', atomicNumber: 77, discoverer: 'Smithson Tennant', type: 'transition-metals' },
    { symbol: 'Pt', name: 'Platino', atomicNumber: 78, discoverer: 'Julius Scaliger', type: 'transition-metals' },
    { symbol: 'Au', name: 'Oro', atomicNumber: 79, discoverer: 'Desconocido', type: 'transition-metals' },
    { symbol: 'Hg', name: 'Mercurio', atomicNumber: 80, discoverer: 'Desconocido', type: 'transition-metals' },
    { symbol: 'Tl', name: 'Talio', atomicNumber: 81, discoverer: 'William Crookes', type: 'representative-elements' },
    { symbol: 'Pb', name: 'Plomo', atomicNumber: 82, discoverer: 'Desconocido', type: 'representative-elements' },
    { symbol: 'Bi', name: 'Bismuto', atomicNumber: 83, discoverer: 'Desconocido', type: 'representative-elements' },
    { symbol: 'Po', name: 'Polonio', atomicNumber: 84, discoverer: 'Marie Curie', type: 'representative-elements' },
    { symbol: 'At', name: 'Astato', atomicNumber: 85, discoverer: 'Dale R. Corson', type: 'representative-elements' },
    { symbol: 'Rn', name: 'Radón', atomicNumber: 86, discoverer: 'Friedrich Ernst Dorn', type: 'noble-gases' },
    { symbol: 'Fr', name: 'Francio', atomicNumber: 87, discoverer: 'Marguerite Perey', type: 'representative-elements' },
    { symbol: 'Ra', name: 'Radio', atomicNumber: 88, discoverer: 'Pierre Curie', type: 'representative-elements' },
    { symbol: 'Ac', name: 'Actinio', atomicNumber: 89, discoverer: 'Friedrich Oskar Giesel', type: 'inner-transition-metals' },
    { symbol: 'Th', name: 'Torio', atomicNumber: 90, discoverer: 'Jöns Jacob Berzelius', type: 'inner-transition-metals' },
    { symbol: 'Pa', name: 'Protactinio', atomicNumber: 91, discoverer: 'Otto Hahn', type: 'inner-transition-metals' },
    { symbol: 'U', name: 'Uranio', atomicNumber: 92, discoverer: 'Martin Heinrich Klaproth', type: 'inner-transition-metals' },
    { symbol: 'Np', name: 'Neptunio', atomicNumber: 93, discoverer: 'Edwin McMillan', type: 'inner-transition-metals' },
    { symbol: 'Pu', name: 'Plutonio', atomicNumber: 94, discoverer: 'Glenn T. Seaborg', type: 'inner-transition-metals' },
    { symbol: 'Am', name: 'Americio', atomicNumber: 95, discoverer: 'Glenn T. Seaborg', type: 'inner-transition-metals' },
    { symbol: 'Cm', name: 'Curio', atomicNumber: 96, discoverer: 'Glenn T. Seaborg', type: 'inner-transition-metals' },
    { symbol: 'Bk', name: 'Berkelio', atomicNumber: 97, discoverer: 'Lawrence Berkeley National Laboratory', type: 'inner-transition-metals' },
    { symbol: 'Cf', name: 'Californio', atomicNumber: 98, discoverer: 'Lawrence Berkeley National Laboratory', type: 'inner-transition-metals' },
    { symbol: 'Es', name: 'Einsteinio', atomicNumber: 99, discoverer: 'Lawrence Berkeley National Laboratory', type: 'inner-transition-metals' },
    { symbol: 'Fm', name: 'Fermio', atomicNumber: 100, discoverer: 'Lawrence Berkeley National Laboratory', type: 'inner-transition-metals' },
    { symbol: 'Md', name: 'Mendelevio', atomicNumber: 101, discoverer: 'Lawrence Berkeley National Laboratory', type: 'inner-transition-metals' },
    { symbol: 'No', name: 'Nobelio', atomicNumber: 102, discoverer: 'Lawrence Berkeley National Laboratory', type: 'inner-transition-metals' },
    { symbol: 'Lr', name: 'Lawrencio', atomicNumber: 103, discoverer: 'Lawrence Berkeley National Laboratory', type: 'inner-transition-metals' },
    { symbol: 'Rf', name: 'Rutherfordio', atomicNumber: 104, discoverer: 'Joint Institute for Nuclear Research', type: 'transition-metals' },
    { symbol: 'Db', name: 'Dubnio', atomicNumber: 105, discoverer: 'Joint Institute for Nuclear Research', type: 'transition-metals' },
    { symbol: 'Sg', name: 'Seaborgio', atomicNumber: 106, discoverer: 'Lawrence Berkeley National Laboratory', type: 'transition-metals' },
    { symbol: 'Bh', name: 'Bohrio', atomicNumber: 107, discoverer: 'Gesellschaft für Schwerionenforschung', type: 'transition-metals' },
    { symbol: 'Hs', name: 'Hassio', atomicNumber: 108, discoverer: 'Gesellschaft für Schwerionenforschung', type: 'transition-metals' },
    { symbol: 'Mt', name: 'Meitnerio', atomicNumber: 109, discoverer: 'Gesellschaft für Schwerionenforschung', type: 'transition-metals' },
    { symbol: 'Ds', name: 'Darmstatio', atomicNumber: 110, discoverer: 'Gesellschaft für Schwerionenforschung', type: 'transition-metals' },
    { symbol: 'Rg', name: 'Roentgenio', atomicNumber: 111, discoverer: 'Gesellschaft für Schwerionenforschung', type: 'transition-metals' },
    { symbol: 'Cn', name: 'Copernicio', atomicNumber: 112, discoverer: 'Gesellschaft für Schwerionenforschung', type: 'transition-metals' },
    { symbol: 'Nh', name: 'Nihonio', atomicNumber: 113, discoverer: 'RIKEN', type: 'representative-elements' },
    { symbol: 'Fl', name: 'Flerovio', atomicNumber: 114, discoverer: 'Joint Institute for Nuclear Research', type: 'representative-elements' },
    { symbol: 'Mc', name: 'Moscovio', atomicNumber: 115, discoverer: 'Joint Institute for Nuclear Research', type: 'representative-elements' },
    { symbol: 'Lv', name: 'Livermorio', atomicNumber: 116, discoverer: 'Joint Institute for Nuclear Research', type: 'representative-elements' },
    { symbol: 'Ts', name: 'Tenesino', atomicNumber: 117, discoverer: 'Joint Institute for Nuclear Research', type: 'representative-elements' },
    { symbol: 'Og', name: 'Oganesón', atomicNumber: 118, discoverer: 'Joint Institute for Nuclear Research', type: 'noble-gases' }
];

document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.table');
    elements.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('element', element.type);
        div.textContent = element.symbol;
        div.addEventListener('click', () => toggleElementDetails(element, div));
        table.appendChild(div);
    });
});

function toggleHighlight(type) {
    const elements = document.querySelectorAll('.element');
    elements.forEach(el => {
        if (el.classList.contains(type)) {
            el.classList.toggle('highlight');
        } else {
            el.classList.remove('highlight');
        }
    });
    changeButtonColor(type);
}

function changeButtonColor(type) {
    const button = document.getElementById(`${type}-btn`);
    const color = getComputedStyle(document.querySelector(`.${type}`)).backgroundColor;
    button.style.backgroundColor = color;
}

function toggleElementDetails(element, div) {
    const detailsContainer = document.getElementById('element-details');
    const detailsContent = document.getElementById('element-details-content');

    if (detailsContainer.style.display === 'none' || detailsContent.textContent !== getElementDetailsText(element)) {
        detailsContent.textContent = getElementDetailsText(element);
        detailsContainer.style.display = 'block';
    } else {
        detailsContainer.style.display = 'none';
    }
}

function getElementDetailsText(element) {
    return `Nombre: ${element.name}\nNúmero Atómico: ${element.atomicNumber}\nDescubridor: ${element.discoverer}`;
}

document.getElementById("exit-button").addEventListener("click", () => {
    window.location.href = '/interfaz/index.html';
});