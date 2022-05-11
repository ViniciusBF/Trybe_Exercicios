const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const entregador = order['order']['delivery']['deliveryPerson'];
  const nome = order['name'];
  const telefone = order['phoneNumber'];
  const rua = order.address['street'];
  const numero = order.address['number'];
  const ap = order.address['apartment'];

  console.log(`Olá ${entregador}, entrega para: ${nome}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${ap}`);
}
// console.log(Object.keys(order.order.pizza).join(', '));
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const nome = order['name'];
  const pizzas = Object.keys(order.order.pizza).join(', ');
  const drink = order.order.drinks.coke.type;
  const total = order.payment.total;

  console.log(`Olá ${nome}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${total},00.`)
}

orderModifier(order);