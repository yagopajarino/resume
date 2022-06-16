export default function getAge(state, setState) {
  setInterval(() => {
    let now = new Date();
    let nacimiento = Date.parse("Aug 11, 1997 10:40:00 GMT-03");
    let ageDiff = now - nacimiento;
    let milisec_per_year = 365 * 24 * 60 * 60 * 1000;
    setState((ageDiff / milisec_per_year).toFixed(11));
  }, 10);
}
