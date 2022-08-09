export default function getAge(state, setState) {
  const getDateCumpleaños = (año) => {
    return Date.parse(`Aug 11, ${año} 10:55:00 GMT-03`);
  };

  setInterval(() => {
    const now = new Date();
    const añoActual = now.getFullYear();
    const cumpleaños = getDateCumpleaños(añoActual);
    let añosCumplidos, milisec, total;
    if (now >= cumpleaños) {
      añosCumplidos = añoActual;
      milisec = now - cumpleaños;
      total = getDateCumpleaños(añoActual + 1) - cumpleaños;
    } else {
      let año_pasado = getDateCumpleaños(añoActual - 1);
      añosCumplidos = añoActual - 1;
      milisec = now - año_pasado;
      total = cumpleaños - año_pasado;
    }

    setState((añosCumplidos - 1997 + milisec / total).toFixed(11));
  }, 10);
}
