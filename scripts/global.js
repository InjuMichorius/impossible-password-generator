// Must contain...
// 1: a lowercase letter
// 2: a uppercase letter
// 3: a digit
// 4: a special character
// 5: at least 4 digits
// 6: A, B or C
// 7: a random color
// 8: capitol of switzerland
// 9: a season in the year
// 10: an instrument
// 11: valid email
// 12: valid phone number
// 13: random car brand
// 14: ë
// 15: a periodic element
// 16: current date in YYYY-MM-DD
// 17: my full name with capital letters
// 18: random sum with answer
// 19: 30 spaces next to each other
// 20: wall between rule 8 and 9
// 21: this site url
// 22: scientist that discovered ...
// 23: my favorite color
// 24: one of the big 5 companies
// 25: latin name for a part of the body
// 26: your favorite color in HEX
// 27: the bingo number that represents two little ducks
// 28: According to Greek mythology, who was the first woman on earth? Pandora
// 29: the softest mineral in the world? Talc
// 30: the hottest in the solar system Venus

const rule1 = document.getElementById("rule1");
const rule2 = document.getElementById("rule2");
const rule3 = document.getElementById("rule3");
const rule4 = document.getElementById("rule4");
const rule5 = document.getElementById("rule5");
const rule6 = document.getElementById("rule6");
const rule7 = document.getElementById("rule7");
const rule8 = document.getElementById("rule8");
const rule9 = document.getElementById("rule9");
const rule10 = document.getElementById("rule10");
const rule11 = document.getElementById("rule11");
const rule12 = document.getElementById("rule12");
const rule13 = document.getElementById("rule13");
const rule14 = document.getElementById("rule14");
const rule15 = document.getElementById("rule15");
const rule16 = document.getElementById("rule16");
const rule17 = document.getElementById("rule17");
const rule18 = document.getElementById("rule18");
const rule19 = document.getElementById("rule19");
const rule20 = document.getElementById("rule20");
const rule21 = document.getElementById("rule21");
const rule22 = document.getElementById("rule22");
const rule23 = document.getElementById("rule23");
const rule24 = document.getElementById("rule24");
const rule25 = document.getElementById("rule25");
const rule26 = document.getElementById("rule26");
const rule27 = document.getElementById("rule27");
const rule28 = document.getElementById("rule28");
const rule29 = document.getElementById("rule29");
const rule30 = document.getElementById("rule30");

const passwordInput = document.getElementById("password-input");
passwordInput.addEventListener("keyup", checkPassword);

function checkPassword(e) {
  const value = e.target.value;

  // Rule 1
  if (/[a-z]/.test(value)) {
    rule1.classList.add("valid");
  } else {
    rule1.classList.remove("valid");
  }
  //Rule 2
  if (/[A-Z]/.test(value)) {
    rule2.classList.add("valid");
  } else {
    rule2.classList.remove("valid");
  }
  //Rule 3
  if (/\d/.test(value)) {
    rule3.classList.add("valid");
  } else {
    rule3.classList.remove("valid");
  }
  //Rule 4
  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value)) {
    rule4.classList.add("valid");
  } else {
    rule4.classList.remove("valid");
  }
  //Rule 5
  if (/\d{4,}/.test(value)) {
    rule5.classList.add("valid");
  } else {
    rule5.classList.remove("valid");
  }
  // Rule 6
  if (/[abc]+/g.test(value)) {
    rule6.classList.add("valid");
  } else {
    rule6.classList.remove("valid");
  }
  // Rule 7
  const popularColors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Magenta",
    "Cyan",
    "Black",
    "White",
    "Gray",
    "Brown",
    "Purple",
    "Orange",
    "Pink",
    "Turquoise",
    "Lavender",
    "Lime",
    "Teal",
    "Gold",
    "Silver",
    "Beige",
  ];

  const colorsPattern = new RegExp(
    `[a-zA-Z0-9]*(${popularColors.join("|")})`,
    "i"
  );
  if (colorsPattern.test(value)) {
    rule7.classList.add("valid");
  } else {
    rule7.classList.remove("valid");
  }

  //Rule 8
  if (/Bern/g.test(value)) {
    rule8.classList.add("valid");
  } else {
    rule8.classList.remove("valid");
  }

  //Rule 9
  const seasonsInYear = [
    "Spring",
    "Summer",
    "Fall",
    "Autumn", // "Autumn" is an alternative name for "Fall"
    "Winter",
  ];

  const seasonRegex = new RegExp(`(${seasonsInYear.join("|")})`, "i");
  if (seasonRegex.test(value)) {
    rule9.classList.add("valid");
  } else {
    rule9.classList.remove("valid");
  }

  //Rule 10
  const popularInstruments = [
    "Piano",
    "Violin",
    "Guitar",
    "Drums",
    "Trumpet",
    "Flute",
    "Clarinet",
    "Saxophone",
    "Cello",
    "Bass Guitar",
    "Harp",
    "Accordion",
    "Trombone",
    "Oboe",
    "Xylophone",
    "Banjo",
    "Harmonica",
    "Bagpipes",
    "Mandolin",
    "Sitar",
  ];

  const instrumentPattern = new RegExp(
    `(${popularInstruments.join("|")})`,
    "i"
  );

  if (instrumentPattern.test(value)) {
    rule10.classList.add("valid");
  } else {
    rule10.classList.remove("valid");
  }

  //Rule 11
  const emailValidationRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

  if (emailValidationRegex.test(value)) {
    rule11.classList.add("valid");
  } else {
    rule11.classList.remove("valid");
  }
  const dutchPhoneNumberRegex = /(?:(?:\+31|0|0031)?6\d{8})/;

  //Rule 12
  if (dutchPhoneNumberRegex.test(value)) {
    rule12.classList.add("valid");
  } else {
    rule12.classList.remove("valid");
  }

  //Rule 13
  const popularCarBrands = [
    "Toyota",
    "Volkswagen",
    "Ford",
    "Chevrolet",
    "Nissan",
    "Honda",
    "Hyundai",
    "Kia",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Lexus",
    "Subaru",
    "Mazda",
    "Jeep",
    "Tesla",
    "Ram",
    "Porsche",
    "Cadillac",
    "GMC",
  ];
  const carPattern = new RegExp(`(${popularCarBrands.join("|")})`, "i");
  if (carPattern.test(value)) {
    rule13.classList.add("valid");
  } else {
    rule13.classList.remove("valid");
  }

  //Rule 14
  if (/ë/.test(value)) {
    rule14.classList.add("valid");
  } else {
    rule14.classList.remove("valid");
  }

  //Rule 15
  const elementAbbreviations = [
    "H",
    "He",
    "Li",
    "Be",
    "B",
    "C",
    "N",
    "O",
    "F",
    "Ne",
    "Na",
    "Mg",
    "Al",
    "Si",
    "P",
    "S",
    "Cl",
    "Ar",
    "K",
    "Ca",
    "Sc",
    "Ti",
    "V",
    "Cr",
    "Mn",
    "Fe",
    "Co",
    "Ni",
    "Cu",
    "Zn",
    "Ga",
    "Ge",
    "As",
    "Se",
    "Br",
    "Kr",
    "Rb",
    "Sr",
    "Y",
    "Zr",
    "Nb",
    "Mo",
    "Tc",
    "Ru",
    "Rh",
    "Pd",
    "Ag",
    "Cd",
    "In",
    "Sn",
    "Sb",
    "Te",
    "I",
    "Xe",
    "Cs",
    "Ba",
    "La",
    "Ce",
    "Pr",
    "Nd",
    "Pm",
    "Sm",
    "Eu",
    "Gd",
    "Tb",
    "Dy",
    "Ho",
    "Er",
    "Tm",
    "Yb",
    "Lu",
    "Hf",
    "Ta",
    "W",
    "Re",
    "Os",
    "Ir",
    "Pt",
    "Au",
    "Hg",
    "Tl",
    "Pb",
    "Bi",
    "Po",
    "At",
    "Rn",
    "Fr",
    "Ra",
    "Ac",
    "Th",
    "Pa",
    "U",
    "Np",
    "Pu",
    "Am",
    "Cm",
    "Bk",
    "Cf",
    "Es",
    "Fm",
    "Md",
    "No",
    "Lr",
    "Rf",
    "Db",
    "Sg",
    "Bh",
    "Hs",
    "Mt",
    "Ds",
    "Rg",
    "Cn",
    "Nh",
    "Fl",
    "Mc",
    "Lv",
    "Ts",
    "Og",
  ];

  const elementPattern = new RegExp(`(${elementAbbreviations.join("|")})`, "i");

  if (elementPattern.test(value)) {
    rule15.classList.add("valid");
  } else {
    rule15.classList.remove("valid");
  }

  //Rule 16
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const currentDay = currentDate.getDate().toString().padStart(2, "0");

  const regexPattern = new RegExp(
    `${currentYear}-${currentMonth}-${currentDay}`
  );

  if (regexPattern.test(value)) {
    rule16.classList.add("valid");
  } else {
    rule16.classList.remove("valid");
  }

  //Rule 17
  if (/Inju Michorius/g.test(value)) {
    rule17.classList.add("valid");
  } else {
    rule17.classList.remove("valid");
  }

  //Rule 18
  if (/2001/.test(value)) {
    rule18.classList.add("valid");
  } else {
    rule18.classList.remove("valid");
  }

  //Rule 19
  if (/ {29}/.test(value)) {
    rule19.classList.add("valid");
  } else {
    rule19.classList.remove("valid");
  }

  //Rule 20
  if (/Bernwall(?:Spring|Summer|Fall|Autumn|Winter)/i.test(value)) {
    rule20.classList.add("valid");
  } else {
    rule20.classList.remove("valid");
  }

  //Rule 21
  const currentURL =
    "https://injumichorius.github.io/impossible-password-generator/";
  const urlPattern = new RegExp(currentURL);
  if (urlPattern.test(value)) {
    rule21.classList.add("valid");
  } else {
    rule21.classList.remove("valid");
  }

  //Rule 22
  if (/Isaac Newton/.test(value)) {
    rule22.classList.add("valid");
  } else {
    rule22.classList.remove("valid");
  }

  //Rule 23
  if (/Orange/i.test(value)) {
    rule23.classList.add("valid");
  } else {
    rule23.classList.remove("valid");
  }

  //Rule 24
  if (/(Apple|Amazon|Google|Facebook|Microsoft)/i.test(value)) {
    rule24.classList.add("valid");
  } else {
    rule24.classList.remove("valid");
  }

  //Rule 25
  if (/cranium/i.test(value)) {
    rule25.classList.add("valid");
  } else {
    rule25.classList.remove("valid");
  }

  //Rule 26
  if (/#[0-9A-Fa-f]{6}/.test(value)) {
    rule26.classList.add("valid");
  } else {
    rule26.classList.remove("valid");
  }

  //Rule 27
  if (/22/.test(value)) {
    rule27.classList.add("valid");
  } else {
    rule27.classList.remove("valid");
  }
  //Rule 28
  if (/Pandora/.test(value)) {
    rule28.classList.add("valid");
  } else {
    rule28.classList.remove("valid");
  }
  //Rule 29
  if (/Talc/.test(value)) {
    rule29.classList.add("valid");
  } else {
    rule29.classList.remove("valid");
  }
  //Rule 30
  if (/Venus/.test(value)) {
    rule30.classList.add("valid");
  } else {
    rule30.classList.remove("valid");
  }
}

function createErrorMessage(errorMessage) {
  const listItem = document.createElement("li");
  const textContent = document.createTextNode(errorMessage);
  listItem.appendChild(textContent);
  const list = document.getElementById("error-message-list");
  list.appendChild(listItem);
}
