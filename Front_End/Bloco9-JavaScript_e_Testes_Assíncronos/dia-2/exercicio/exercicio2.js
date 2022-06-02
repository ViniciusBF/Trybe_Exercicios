const fetchCripto = async () => {
  const cUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl.min.json`;

  const final = await fetch(cUrl)
    .then((response) => response.json())
    .then((data) => data['brl'])
    .catch((err) => console.log('vish deu muito ruim'));

  return final;
}

const fetchApi = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const final = await fetch(url)
    .then((response) => response.json())
    .then((data) => data['data'])
    .catch((err) => console.log('deu ruim dnv'));
    
  return final;
};

const criar = async () => {
  const valor = await fetchCripto();
  const moeda = await fetchApi();

  moeda.filter(({ rank }) => rank <= 10)
    .forEach(({ symbol, name }) => {
      const ul = document.getElementById('lista');
      const newLi = document.createElement('li');

      const value = valor[symbol.toLowerCase()];
      newLi.innerText = `${name} (${symbol}): ${value}`;

      ul.appendChild(newLi);
    });
};

window.onload = criar;