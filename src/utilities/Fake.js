
// use local storage to manage cart data
const addToDb = (id) => {
  let manCart = getmanCart();
  // add quantity
  const quantity = manCart[id];
  if (!quantity) {
    manCart[id] = 1;
    alert('sucess')
  } else {
    alert('added ')
  }
  localStorage.setItem("man-cart", JSON.stringify(manCart));
};



const removeFromDb = (id) => {
  const manCart = getmanCart();
  if (id in manCart) {
    delete manCart[id];
    localStorage.setItem("man-cart", JSON.stringify(manCart));
  }
};

const getmanCart = () => {
  let manCart = {};

  //get the man cart from local storage
  const storedCart = localStorage.getItem("man-cart");
  if (storedCart) {
    manCart = JSON.parse(storedCart);
  }
  return manCart;
};

const deletemanCart = () => {
  localStorage.removeItem("man-cart");
};

export { addToDb, removeFromDb, getmanCart, deletemanCart };
