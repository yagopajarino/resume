export default async function getAdvice(state, setState) {
  const url = "https://api.adviceslip.com/advice";
  const data = await fetch(url).then((response) => response.json());
  const advice = data.slip.advice;
  setState(advice);
}
