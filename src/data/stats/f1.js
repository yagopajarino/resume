function nextRaceDate(data) {
  const races = data.MRData.RaceTable.Races;
  const now = new Date();
  const futureRaces = races
    .filter(
      (item) =>
        // console.log(
        //   `${item.date}, ${item.time.slice(0, item.time.length - 1)} UTC`
        // )
        Date.parse(
          `${item.date}, ${item.time.slice(0, item.time.length - 1)} UTC`
        ) > now
    )
    .map((item) =>
      Date.parse(
        `${item.date}, ${item.time.slice(0, item.time.length - 1)} UTC`
      )
    );
  const nextRaceDate = Math.min(...futureRaces);
  return nextRaceDate;
}

function diffToString(d) {
  const comps = [24, 60, 60, 1000];
  const els = [];
  for (let index = 0; index < comps.length; index++) {
    let factor = comps.slice(index, comps.length).reduce((a, b) => a * b, 1);
    els.push(Math.floor(d / factor));
    d = d % factor;
  }
  return `${els[0]}d ${els[1]}h ${els[2]}m ${els[3]}s`;
}

export default async function timeToNextRace(state, setState) {
  let url = "https://ergast.com/api/f1/current.json";
  const data = await fetch(url).then((response) => response.json());
  const raceDate = nextRaceDate(data);

  setInterval(() => {
    const now = new Date();
    const diff = raceDate - now;
    setState(diffToString(diff));
  }, 1000);
}
