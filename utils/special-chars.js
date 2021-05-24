function toChars(str) {
  return str.toLowerCase().replace(/[\W_ ]/g, "");
}

// export { toChars };

let str = "the lazy dog *&^ run over big fox ??!!";
console.log(toChars(str));
