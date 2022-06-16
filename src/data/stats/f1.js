export default function timeToNextRace(state, setState) {
  let url = "https://ergast.com/api/f1/current.json";
  fetch(url).then((response) => console.log(response));
}
