

const frutas = [];
const verduras = [];
const fruta = prompt( 'Feria de mercado ¿ que fruta desea comprar hoy?');
frutas.push(fruta);

while(confirm('¿Desea comprar otra fruta?'))
{   
    const fruta = prompt( '¿ que fruta desea comprar')
    frutas.push(fruta);

}

console.log("compraste ");
console.log("compraste ");
    
for (const fruta of frutas )
{   
    console.log(fruta);
}
