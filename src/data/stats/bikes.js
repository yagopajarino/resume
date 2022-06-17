export default async function getBikes(state, setState) {
  const root = "http://api.citybik.es";
  const endpNetworks = "/v2/networks";
  const data = await fetch(root + endpNetworks).then((response) =>
    response.json()
  );
  const networks = data.networks;
  const k = Math.floor(Math.random() * networks.length);
  const stationNetwork = networks[k];

  const endpStation = stationNetwork.href;
  const dataSt = await fetch(root + endpStation).then((response) =>
    response.json()
  );

  const station = dataSt.network.stations[0];
  const freeBikes = station.free_bikes;
  const lat = station.latitude;
  const lon = station.longitude;
  setState(freeBikes);
}
