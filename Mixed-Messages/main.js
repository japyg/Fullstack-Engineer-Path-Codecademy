const kdramaSeriesList = [
  "All of Us Are Dead",
  "Juvenile Justice",
  "Twenty Five, Twenty One,",
  "Forecasting Love and Weather",
  "Thirty Nine",
  "Tomorrow",
  "Business Proposal",
  "The Sound of Magic",
  "Remarriage and Desires",
  "A Model Family",
  "Glitch",
  "The Accidental Narco (WT)",
  "Money Heist: Korea – Joint Economic Area",
];

const seriesGenerator = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length - 1);

  if (randomIndex === -1) return 0;

  for (let i = 0; i < arr.length; i++) {
    return arr[randomIndex];
  }
};
