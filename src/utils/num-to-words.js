const th = [
  "",
  "ming",
  "million",
  "milliard",
  "trillion",
  "kvadrillion",
  "kvintilion",
  "sekstilion",
  "septillion ",
  "oktilion",
];
const dg = [
  "nol",
  "bir",
  "ikki",
  "uch",
  "to‘rt",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "to‘qqiz",
];
const tn = [
  "o‘n",
  "o‘n bir",
  "o‘n ikki",
  "o‘n uch",
  "o‘n to‘rt",
  "o‘n besh",
  "o‘n olti",
  "o‘n yetti",
  "o‘n sakkiz",
  "o‘n to‘qqiz",
];
const tw = [
  "yigirma",
  "o‘ttiz",
  "qirq",
  "ellik",
  "oltmish",
  "yetmish",
  "sakson",
  "to‘qson",
];
const xr = [
  "o‘n",
  "yuz",
  "ming",
  "o‘n ming",
  "yuz ming",
  "million",
  "o‘n million",
  "yuz million",
  "milliard",
  "o‘n milliard",
  "yuz milliard",
  "trillion",
  "o‘n trillion",
  "yuz trillion",
  "kvadrillion",
  "o‘n kvadrillion",
  "yuz kvadrillion",
  "kvintilion",
  "o‘n kvintilion",
  "yuz kvintilion",
  "sekstilion",
  "o‘n sekstilion",
  "yuz sekstilion",
  "septillion ",
  "o‘n septillion ",
  "yuz septillion ",
  "oktilion",
  "o‘n oktilion",
  "yuz oktilion",
  "nonillion",
];

export default function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  if (s != parseFloat(s)) return "Raqam emas!";
  let x = s.indexOf(".");
  if (x == -1) x = s.length;
  if (x > 30) return "Juda katta son!";
  let n = s.split("");
  let str = "";
  let xona = "";
  let sk = 0;
  for (let i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == "1") {
        str += tn[Number(n[i + 1])] + " ";
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + " ";
        sk = 1;
      }
    } else if (n[i] != 0) {
      str += dg[n[i]] + " ";
      if ((x - i) % 3 == 0) str += "yuz ";
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk) str += th[(x - i - 1) / 3] + " ";
      sk = 0;
    }
  }

  if (x != s.length) {
    let y = s.length;
    if (y > 31 + x) return "Juda katta son!";
    str += "butun ";
    for (let i = x + 1; i < y; i++) {
      if ((y - i) % 3 == 2) {
        if (n[i] == "1") {
          str += tn[Number(n[i + 1])] + " ";
          i++;
          sk = 1;
        } else if (n[i] != 0) {
          str += tw[n[i] - 2] + " ";
          sk = 1;
        }
      } else if (n[i] != 0) {
        str += dg[n[i]] + " ";
        if ((y - i) % 3 == 0) {
          str += "yuz ";
        }
        sk = 1;
      }
      if ((y - i) % 3 == 1) {
        if (sk) {
          xona = `${xr[y - x - 2]}dan`;
          str += th[(y - i - 1) / 3] + " ";
        }
        sk = 0;
      }
    }
    // meme: Ha kod rasvo yozilgan lekin bu endi seni muammoying
  }
  return str
    .replace(/butun/g, (matched) => `${matched} ${xona}`)
    .replace(/\s+/g, " ");
}
