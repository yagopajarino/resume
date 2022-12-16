const getScores = async () => {
  const url = `${process.env.REACT_APP_API}/paises`;
  const data = await fetch(url).then((r) => r.json());
  data.sort((a, b) => b.count - a.count);
  return data;
};

const postCountry = async (code) => {
  const url = `${process.env.REACT_APP_API}/paises/update`;
  const data = {
    code,
  };
  const status = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((r) => r.json());
  return status;
};

const ping = () => {
  const url = `${process.env.REACT_APP_API}`;
  fetch(url);
};

const getCount = async () => {
  const url = `${process.env.REACT_APP_API}/stats/youtube`;
  const data = await fetch(url).then((r) => r.json());
  return data;
};

const api = {
  ping,
  getScores,
  postCountry,
  getCount,
};

export default api;
