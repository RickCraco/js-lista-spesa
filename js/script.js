let listaSpesa = [];

let basta = false;

while(stop === false){

  const prodotto = prompt('inserire un prodotto da comprare');
  

  if(prodotto === 'stop'){
    basta = true;
  }else{
    listaSpesa.push(prodotto);
  }
 
}

for(let i = 0; i < listaSpesa.length; i++){
  console.log(listaSpesa[i]);
}