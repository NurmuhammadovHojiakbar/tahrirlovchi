import { exceptionList } from "./exception-list";

const alpha = [
  //kirill-lotin uchun lotin alfaviti
  "A",
  "B",
  "V",
  "G",
  "D",
  "E",
  "Yo",
  "J",
  "Z",
  "I",
  "Y",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "F",
  "X",
  "Ts",
  "Ch",
  "Sh",
  "Sh",
  "'",
  "I",
  "",
  "E",
  "Yu",
  "Ya",
  "G‘",
  "Q",
  "H",
  "O‘",
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "yo",
  "j",
  "z",
  "i",
  "y",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "x",
  "ts",
  "ch",
  "sh",
  "sh",
  "'",
  "i",
  "",
  "e",
  "yu",
  "ya",
  "g‘",
  "q",
  "h",
  "o‘",
];

const alphaLatin = [
  //lotin-kirill uchun lotin alfaviti
  "A",
  "B",
  "V",
  "G",
  "D",
  "E",
  "‡",
  "J",
  "Z",
  "I",
  "Y",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "F",
  "X",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "Q",
  "H",
  "‡",
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "‡",
  "j",
  "z",
  "i",
  "y",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "x",
  "‡",
  "‡",
  "‡",
  "‡",
  "'",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "q",
  "h",
  "‡",
];
const alphaRus = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
  "Ғ",
  "Қ",
  "Ҳ",
  "Ў",
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
  "ғ",
  "қ",
  "ҳ",
  "ў",
];

const exceptionArray = Object.entries(exceptionList);
const capExceptionArray = exceptionArray.map((w) => {
  return [capitalizeFirstLetter(w[0]), capitalizeFirstLetter(w[1])];
});

const uppExceptionArray = exceptionArray.map((w) => {
  return [w[0].toUpperCase(), w[1].toUpperCase()];
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/*=================kirillga o'girish=================== */

function kirillga(originalMessage) {
  let CyrillicTranslated = "";

  originalMessage = originalMessage
    .replace(
      /\d+(\s+)?-(\s+)?((yanvar)|(fevral)|(mart)|(aprel)|(may)|(iyun)|(iyul)|(avgust)|(sentyabr)|(oktyabr)|(sentabr)|(oktabr)|(noyabr)|(dekabr)|(yil))/gi,
      (matched) => matched.split("-").join(" ")
    )
    .replace(/sentabr/g, "сентябр[ь]")
    .replace(/sentabr/gi, "Сентябр[ь]")
    .replace(/oktabr/g, "октябр[ь]")
    .replace(/oktabr/gi, "Октябр[ь]");

  exceptionArray.forEach((word) => {
    const reg = new RegExp(`^${word[0]}`);
    if (
      reg.test(
        originalMessage
          .replace(/<p>/, "")
          .replace(/<\/p>/, "")
          .replace(/\d+\s+/, "")
      )
    ) {
      const newreg = new RegExp(`${word[0]}`, "g");
      originalMessage = originalMessage.replace(newreg, word[1]);
    }
  });

  uppExceptionArray.forEach((word) => {
    const reg = new RegExp(`^${word[0]}`);
    if (
      reg.test(
        originalMessage
          .replace(/<p>/, "")
          .replace(/<\/p>/, "")
          .replace(/\d+\s+/, "")
      )
    ) {
      const newreg = new RegExp(`${word[0]}`, "g");
      originalMessage = originalMessage.replace(newreg, word[1]);
    }
  });

  capExceptionArray.forEach((word) => {
    const reg = new RegExp(`^${word[0]}`, "i");
    if (
      reg.test(
        originalMessage
          .replace(/<p>/, "")
          .replace(/\d+\s+/, "")
          .replace(/<\/p>/, "")
      )
    ) {
      const newreg = new RegExp(`${word[0]}`, "ig");
      originalMessage = originalMessage.replace(newreg, word[1]);
    }
  });

  const linkReg = /(((https?:\/\/)|(www\.)|(mailto:))[^\s]+[.][A-Za-z]+)/g;
  if (linkReg.test(originalMessage)) {
    return originalMessage;
  }
  originalMessage = originalMessage
    .replace(/`/g, "'")
    .replace(/ʹ/g, "'")
    .replace(/ʻ/g, "'")
    .replace(/ʼ/g, "'")
    .replace(/ʽ/g, "'")
    .replace(/ˊ/g, "'")
    .replace(/ˋ/g, "'")
    .replace(/‘/g, "'")
    .replace(/’/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#x60;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&nbsp;/g, " ")
    .replace(/&gt;/g, ">");

  originalMessage = originalMessage
    .replace(/Ye/g, "Е")
    .replace(/YE/g, "Е")
    .replace(/Yo'/g, "Йў")
    .replace(/YO'/g, "ЙЎ")
    .replace(/Yo/g, "Ё")
    .replace(/YO/g, "Ё")
    .replace(/Ch/g, "Ч")
    .replace(/CH/g, "Ч")
    .replace(/Sh/g, "Ш")
    .replace(/SH/g, "Ш")
    .replace(/Yu/g, "Ю")
    .replace(/YU/g, "Ю")
    .replace(/Ya/g, "Я")
    .replace(/YA/g, "Я")
    .replace(/Ts/g, "Ц")
    .replace(/TS/g, "Ц")
    .replace(/G'/g, "Ғ")
    .replace(/O'/g, "Ў")
    .replace(/ye/g, "е")
    .replace(/yo'/g, "йў")
    .replace(/yo/g, "ё")
    .replace(/ch/g, "ч")
    .replace(/sh/g, "ш")
    .replace(/yu/g, "ю")
    .replace(/ya/g, "я")
    .replace(/ts/g, "ц")
    .replace(/g'/g, "ғ")
    .replace(/o'/g, "ў")
    .replace(/W/g, "В")
    .replace(/w/g, "в")
    .replace(/C/g, "С")
    .replace(/c/g, "с");

  function Eliser(currentWord) {
    if (currentWord[0] === "E") {
      const E = currentWord.replace(/E/i, "Э");
      return E;
    } else if (currentWord[0] === "e") {
      const e = currentWord.replace(/e/i, "э");
      return e;
    } else {
      return currentWord;
    }
  }
  let letterE = originalMessage.split(" ").map(Eliser).join(" ");
  originalMessage = letterE;

  function encrypt(string) {
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < alphaLatin.length; j++) {
        if (string[i] === "'") {
          const prevLetter = string[i - 1]?.charCodeAt();
          const nextLetter = string[i + 1]?.charCodeAt();
          if (
            prevLetter > 64 &&
            prevLetter < 91 &&
            nextLetter > 64 &&
            nextLetter < 91
          ) {
            CyrillicTranslated += "Ъ";
            break;
          }
          CyrillicTranslated += "ъ";
          break;
        } else if (string[i] === alphaLatin[j]) {
          CyrillicTranslated += alphaRus[j];
          break;
        } else if (
          (string.charCodeAt(i) >= 9 && string.charCodeAt(i) <= 11) ||
          (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 38) ||
          (string.charCodeAt(i) >= 40 && string.charCodeAt(i) <= 64) ||
          (string.charCodeAt(i) >= 91 && string.charCodeAt(i) < 96) ||
          (string.charCodeAt(i) >= 123 && string.charCodeAt(i) <= 1300) ||
          (string.charCodeAt(i) >= 8211 && string.charCodeAt(i) <= 8482)
        ) {
          CyrillicTranslated += string[i];
          break;
        } else if (string.charCodeAt(i) === 32) {
          CyrillicTranslated += " ";
          break;
        }
      }
    }
  }

  encrypt(originalMessage);
  if (
    CyrillicTranslated.split("[ь]")[1] &&
    CyrillicTranslated.split("[ь]")[1].replace(/<\/п>/g, "").length > 0
  ) {
    CyrillicTranslated = CyrillicTranslated.replace("[ь]", "");
  }

  if (
    CyrillicTranslated.split("[Ь]")[1] &&
    CyrillicTranslated.split("[Ь]")[1].replace(/<\/п>/g, "").length > 0
  ) {
    CyrillicTranslated = CyrillicTranslated.replace("[Ь]", "");
  }

  CyrillicTranslated = CyrillicTranslated.replace(/<п>/g, "<p>")
    .replace(/<\/п>/g, "</p>")
    .replace(/<p><\/p>/g, "<p><br /></p>")
    .replace(/<ем>/g, "<em>")
    .replace(/<\/ем>/g, "</em>")
    .replace(/<и>/g, "<i>")
    .replace(/<\/и>/g, "</i>")
    .replace(/<у>/g, "<u>")
    .replace(/<\/у>/g, "</u>")
    .replace(/<ол тйпе="1">/g, "<ol type='1'>")
    .replace(/<\/ол>/g, "</ol>")
    .replace(/<ул>/g, "<ul>")
    .replace(/<\/ул>/g, "</ul>")
    .replace(/<ли>/g, "<li>")
    .replace(/<\/ли>/g, "</li>")
    .replace(/<ҳ1>/g, "<h1>")
    .replace(/<\/ҳ1>/g, "</h1>")
    .replace(/<ҳ2>/g, "<h2>")
    .replace(/<\/ҳ2>/g, "</h2>")
    .replace(/<ҳ3>/g, "<h3>")
    .replace(/<\/ҳ3>/g, "</h3>")
    .replace(/<ҳ4>/g, "<h4>")
    .replace(/<\/ҳ4>/g, "</h4>")
    .replace(/<ҳ5>/g, "<h5>")
    .replace(/<\/ҳ5>/g, "</h5>")
    .replace(/<ҳ6>/g, "<h6>")
    .replace(/<\/ҳ6>/g, "</h6>")
    .replace(/<стронг>/g, "<strong>")
    .replace(/<\/стронг>/g, "</strong>")
    .replace("[ь]", "ь")
    .replace("[Ь]", "Ь");

  return CyrillicTranslated;
}

/*====================lotinga o'girish==============================*/

function lotinga(CyrillicMessage) {
  let LatinTranslated = "";
  exceptionArray.forEach((word) => {
    const newreg = new RegExp(`${word[1]}`, "g");
    CyrillicMessage = CyrillicMessage.replace(newreg, word[0]);
  });
  uppExceptionArray.forEach((word) => {
    const newreg = new RegExp(`${word[1]}`, "g");
    CyrillicMessage = CyrillicMessage.replace(newreg, word[0]);
  });

  capExceptionArray.forEach((word) => {
    const reg = new RegExp(word[1], "ig");
    CyrillicMessage = CyrillicMessage.replace(reg, word[0]);
  });

  function Eliser2(currentWord) {
    if (currentWord[0] === "Ц") {
      currentWord = currentWord.replace(/Ц/, "S");
    } else if (currentWord[0] === "ц") {
      currentWord = currentWord.replace(/ц/, "s");
    }
    for (let r = 0; r < currentWord.length; r++) {
      if (currentWord[r] === "Ё") {
        for (let z = r + 1; z < currentWord.length; z++) {
          if (
            currentWord.charCodeAt(z) >= 1040 &&
            currentWord.charCodeAt(z) <= 1071
          ) {
            currentWord = currentWord.replace(/Ё/i, "YO");
          }
        }
      } else if (currentWord[r] === "Ц") {
        if (
          currentWord.charCodeAt(r - 1) !== 1040 &&
          currentWord.charCodeAt(r - 1) !== 1045 &&
          currentWord.charCodeAt(r - 1) !== 1048 &&
          currentWord.charCodeAt(r - 1) !== 1054 &&
          currentWord.charCodeAt(r - 1) !== 1059 &&
          currentWord.charCodeAt(r - 1) !== 1069 &&
          currentWord.charCodeAt(r - 1) !== 1070 &&
          currentWord.charCodeAt(r - 1) !== 1071 &&
          currentWord.charCodeAt(r - 1) !== 1072 &&
          currentWord.charCodeAt(r - 1) !== 1077 &&
          currentWord.charCodeAt(r - 1) !== 1080 &&
          currentWord.charCodeAt(r - 1) !== 1086 &&
          currentWord.charCodeAt(r - 1) !== 1091 &&
          currentWord.charCodeAt(r - 1) !== 1101 &&
          currentWord.charCodeAt(r - 1) !== 1102 &&
          currentWord.charCodeAt(r - 1) !== 1103
        ) {
          currentWord = currentWord.replace(/Ц/i, "S");
        }
        for (let z = r + 1; z < currentWord.length; z++) {
          if (
            currentWord.charCodeAt(z) >= 1040 &&
            currentWord.charCodeAt(z) <= 1071
          ) {
            currentWord = currentWord.replace(/Ц/i, "TS");
          }
        }
      } else if (currentWord[r] === "ц") {
        if (
          currentWord.charCodeAt(r - 1) !== 1040 &&
          currentWord.charCodeAt(r - 1) !== 1045 &&
          currentWord.charCodeAt(r - 1) !== 1048 &&
          currentWord.charCodeAt(r - 1) !== 1054 &&
          currentWord.charCodeAt(r - 1) !== 1059 &&
          currentWord.charCodeAt(r - 1) !== 1069 &&
          currentWord.charCodeAt(r - 1) !== 1070 &&
          currentWord.charCodeAt(r - 1) !== 1071 &&
          currentWord.charCodeAt(r - 1) !== 1072 &&
          currentWord.charCodeAt(r - 1) !== 1077 &&
          currentWord.charCodeAt(r - 1) !== 1080 &&
          currentWord.charCodeAt(r - 1) !== 1086 &&
          currentWord.charCodeAt(r - 1) !== 1091 &&
          currentWord.charCodeAt(r - 1) !== 1101 &&
          currentWord.charCodeAt(r - 1) !== 1102 &&
          currentWord.charCodeAt(r - 1) !== 1103
        ) {
          currentWord = currentWord.replace(/ц/i, "s");
        }
      } else if (currentWord[r] === "Ч") {
        for (let z = r + 1; z < currentWord.length; z++) {
          if (
            currentWord.charCodeAt(z) >= 1040 &&
            currentWord.charCodeAt(z) <= 1071
          ) {
            currentWord = currentWord.replace(/Ч/i, "Ch");
          }
        }
      } else if (currentWord[r] === "Ш") {
        for (let z = r + 1; z < currentWord.length; z++) {
          if (
            currentWord.charCodeAt(z) >= 1040 &&
            currentWord.charCodeAt(z) <= 1071
          ) {
            currentWord = currentWord.replace(/Ш/i, "Sh");
          }
        }
      } else if (currentWord[r] === "Ю") {
        for (let z = r + 1; z < currentWord.length; z++) {
          if (
            currentWord.charCodeAt(z) >= 1040 &&
            currentWord.charCodeAt(z) <= 1071
          ) {
            currentWord = currentWord.replace(/Ю/i, "YU");
          }
        }
      } else if (currentWord[r] === "Я") {
        for (let z = r + 1; z < currentWord.length; z++) {
          if (
            currentWord.charCodeAt(z) >= 1040 &&
            currentWord.charCodeAt(z) <= 1071
          ) {
            currentWord = currentWord.replace(/Я/i, "YA");
          }
        }
      }
    }

    if (currentWord[0] === "Е") {
      const nextLetter = currentWord[1]?.charCodeAt();
      if (nextLetter >= 1040 && nextLetter <= 1071) {
        const E = currentWord.replace(/Е/i, "YE");
        return E;
      }
      const E = currentWord.replace(/Е/i, "Ye");
      return E;
    } else if (currentWord[0] === "е") {
      const e = currentWord.replace(/е/i, "ye");
      return e;
    } else if (currentWord.includes("е")) {
      const e = currentWord.replace(
        /ае|уе|ое|ые|ие|эе|яе|юе|ёе|ее/gi,
        (rep) => {
          const vowel = rep[0];
          return `${vowel}${"ye"}`;
        }
      );
      return e;
    } else if (currentWord.includes("Е")) {
      const e = currentWord.replace(/е|уе|ое|ые|ие|эе|яе|юе|ёе|ее/gi, (rep) => {
        const vowel = rep[0];
        if (
          ["А", "У", "О", "Ы", "И", "Э", "Я", "Ю", "Ё", "Е"].includes(vowel)
        ) {
          return `${"YE"}`;
        }
        return `${vowel}${"Ye"}`;
      });
      return e;
    } else {
      return currentWord;
    }
  }
  let letterE2 = CyrillicMessage.split(" ").map(Eliser2).join(" ");
  CyrillicMessage = letterE2;

  function decrypt(string) {
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < alphaRus.length; j++) {
        if (string[i] === alphaRus[j]) {
          LatinTranslated += alpha[j];
        } else if (
          (string.charCodeAt(i) >= 9 && string.charCodeAt(i) <= 11) ||
          (string.charCodeAt(i) > 32 && string.charCodeAt(i) < 1000) ||
          string.charCodeAt(i) > 1300
        ) {
          LatinTranslated += string[i];
          break;
        } else if (string.charCodeAt(i) === 32) {
          LatinTranslated += " ";
          break;
        }
      }
    }
  }
  CyrillicMessage = CyrillicMessage.replace("«", "“")
    .replace("»", "”")
    .replace("Ъ", "’")
    .replace("ъ", "’");
  decrypt(CyrillicMessage);
  return LatinTranslated;
}

export default function translate(text, status) {
  if (status) {
    return lotinga(text);
  }

  return kirillga(text);
}
