export default async function getBikes(setBikes, setMap) {
  const root = "https://api.citybik.es";
  const endpNetworks = "/v2/networks";
  const data = await fetch(root + endpNetworks).then((response) =>
    response.json()
  );
  const networks = data.networks;
  const k = Math.floor(Math.random() * networks.length);
  const stationNetwork = networks[k];

  const endpStation = stationNetwork.href;
  let qStations = 0;
  let dataSt;
  while (qStations == 0) {
    dataSt = await fetch(root + endpStation).then((response) =>
      response.json()
    );
    qStations = dataSt.network.stations.length;
  }

  const station = dataSt.network.stations[0];
  const freeBikes = station.free_bikes;
  const emptySlots = station.empty_slots;

  const lat = station.latitude;
  const lon = station.longitude;
  let stationURL = `https://www.google.com/maps/place/${lat},${lon}`;
  setBikes(`${freeBikes}/${emptySlots}`);
  setMap(stationURL);
}
