function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const generateBg = () => {
  let rgb = [];
  for (let i = 0; i < 3; i++) rgb.push(getRandomIntInclusive(0, 255));
  return `rgb(${rgb.join(`, `)})`;
};

export { generateBg };