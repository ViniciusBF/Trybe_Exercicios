function transformaNumerosRomanos(par1) {
  let romanos = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let resultado = 0;
  let manobra = '';

  for(let index = 0; index < par1.length; index += 1) {
    for(let i2 = 0; i2 <= 13; i2 += 1) {
      if(par1[index] == romanos[i2]) {
        if(romanos[par1[index]] > romanos[par1[index + 1]]) {
          resultado += romanos[par1[index]];
        } else if(romanos[par1[index]] < romanos[par1[index + 1]]) {
          manobra = romanos[par1[index]] + romanos[par1[index + 1]];
          resultado += romanos[manobra];
        }
      }
    }
  }
  console.log(romanos[10])
  return resultado;
}

console.log(transformaNumerosRomanos('MC'))