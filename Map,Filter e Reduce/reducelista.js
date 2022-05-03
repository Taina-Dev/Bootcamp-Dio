const lista = [
    {
        produto: 'Pelicula 3D',
        preco: 35,
    },
    {
        produto: 'Smart Fone Samsung a52',
        preco: 1550,
    },
    {
        produto: 'Carregador Iphone',
        preco: 150,
    },
];

const saldoDisponivel = 2250;

function calcularSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log(index + 1);
        console.log({prev});
        console.log({current});
      return prev - current.preco;
    },saldoDisponivel)
}

console.log( 'Saldo Disponivel:',calcularSaldo( saldoDisponivel,lista));