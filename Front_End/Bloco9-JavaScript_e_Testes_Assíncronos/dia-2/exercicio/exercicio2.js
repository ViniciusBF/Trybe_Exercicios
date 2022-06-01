const url = 'https://api.coincap.io/v2/assets';

const fetchApi = async () => {
  try {
    const ul = document.getElementById('lista');
    const response = await fetch(url);
    const data = await response.json();
    const keys = Object.keys(data);
    data[keys[0]].filter(({ rank }) => rank <= 10 )
      .map(({ symbol, name, priceUsd }) => {
        const newLi = document.createElement('li');
        newLi.innerText = `${name} (${symbol}): ${priceUsd}`
        ul.appendChild(newLi);
      });
  } catch(err) {
    console.log('deu ruim')
  }
};

window.onload = fetchApi;