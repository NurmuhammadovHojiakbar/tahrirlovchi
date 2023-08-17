const unli = ["a", "e", "i", "u", "o", "ŏ", "A", "E", "I", "U", "O", "Õ"];

export default function ajratgich(incoming) {
  const letters = incoming
    .replace("-", "")
    .replace(".", "")
    .replace("‘", "'")
    .replace("`", "'")
    .replace("ʻ", "'")
    .replace("ʼ", "'")
    .replace("'", "'")
    .replace("`", "'")
    .replace(/G'/g, "Ğ")
    .replace(/g'/g, "ğ")
    .replace(/O'/g, "Õ")
    .replace(/o'/g, "ŏ")
    .replace(/sh/g, "š")
    .replace(/sH/g, "š")
    .replace(/ch/g, "č")
    .replace(/cH/g, "č")
    .replace(/Sh/g, "Š")
    .replace(/SH/g, "Š")
    .replace(/Ch/g, "Č")
    .replace(/CH/g, "Č")
    .split("");

  let word = "";
  if (incoming.length < 3) {
    if (unli.includes(letters[0]) && unli.includes(letters[1])) {
      word += `${letters[0]}-${letters[1]}`;
    } else {
      word = incoming;
    }
    return word;
  }
  if (incoming.length === 3) {
    if (
      unli.includes(letters[0]) &&
      !unli.includes(letters[1]) &&
      unli.includes(letters[2])
    ) {
      word += `${letters[0]}-${letters[1]}${letters[2]}`;
    } else if (
      unli.includes(letters[0]) &&
      unli.includes(letters[1]) &&
      !unli.includes(letters[2])
    ) {
      word += `${letters[0]}-${letters[1]}${letters[2]}`;
    } else if (
      unli.includes(letters[0]) &&
      unli.includes(letters[1]) &&
      unli.includes(letters[2])
    ) {
      word += `${letters[0]}-${letters[1]}-${letters[2]}`;
    } else {
      word = incoming;
    }
    return word;
  }
  word += letters[0];

  for (let i = 1; i < letters.length; i++) {
    if (letters[i + 1] && !unli.includes(letters[i])) {
      if (unli.includes(letters[i - 1]) && unli.includes(letters[i + 1])) {
        word += `-${letters[i]}`;
      } else if (
        unli.includes(letters[i - 1]) &&
        !unli.includes(letters[i + 1]) &&
        !unli.includes(letters[i + 2])
      ) {
        word += letters[i];
      } else if (
        !unli.includes(letters[i - 1]) &&
        !unli.includes(letters[i + 1]) &&
        unli.includes(letters[i + 2])
      ) {
        word += `-${letters[i]}`;
      } else if (
        unli.includes(letters[i - 1]) &&
        !unli.includes(letters[i + 1]) &&
        letters[i + 1] !== "'" &&
        letters[i + 2]
      ) {
        word += `${letters[i]}-`;
      } else if (letters[i] === "'") {
        word += `${letters[i]}-`;
      } else {
        word += `${letters[i]}`;
      }
    } else if (
      !letters[i - 2] &&
      unli.includes(letters[i - 1]) &&
      unli.includes(letters[i]) &&
      !unli.includes(letters[i + 1])
    ) {
      word += `-${letters[i]}`;
    } else if (
      !unli.includes(letters[i - 1]) &&
      unli.includes(letters[i]) &&
      unli.includes(letters[i + 1])
    ) {
      word += `${letters[i]}-`;
    } else if (
      unli.includes(letters[i - 1]) &&
      unli.includes(letters[i]) &&
      unli.includes(letters[i + 1])
    ) {
      word += `${letters[i]}-`;
    } else {
      word += letters[i];
    }
  }
  return word
    .replace(/Ğ/g, "G'")
    .replace(/Õ/g, "O'")
    .replace(/ğ/g, "g'")
    .replace(/ŏ/g, "o'")
    .replace(/š/g, "sh")
    .replace(/Š/g, "Sh")
    .replace(/č/g, "ch")
    .replace(/Č/g, "Ch");
}
