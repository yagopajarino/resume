export default async function getGasPrice(state, setState) {
  const url = "https://apis.is/petrol";
  const data = await fetch(url).then((response) => response.json());
  const results = data.results;
  let k = Math.floor(Math.random() * results.length);
  const station = results[k];
  if (state == "Loading...") {
    setState(station.bensin95);
  }
}
