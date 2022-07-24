import faker from "faker";

const mount = (elem) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  elem.innerHTML = products;
};

//Context/Situation #1

// We are runnning this file in development in isolation..

//we are using our local index.html file..

//which definitely has an element with an id of 'dev-products'

// we want to immediately render our app into that element

//Context/situation #2..

//we are running this file in development or production

//through the container app

//no guarantee that an element with an id of 'dev-products' exits..

//we do not want to immediately ender the app..

export { mount };
