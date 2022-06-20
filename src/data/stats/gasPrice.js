export default async function getGasPrice(setPrice, setMap) {
  const url = "https://apis.is/petrol";
  const data = await fetch(url).then((response) => response.json());
  const results = data.results;
  let k = Math.floor(Math.random() * results.length);
  const station = results[k];
  const factor = 0.008;
  const lat = station.geo.lat;
  const lon = station.geo.lon;
  const link = `https://www.google.com/maps/place/${lat},${lon}`;
  setPrice((station.bensin95 * factor).toFixed(4));
  setMap(link);
  console.log(link);
}
