import { getShoppingCart } from "../utilities/Fake";


const cartProductLoader = async () => {
  const res = await fetch("/featuresJobs.json");
  const products = await res.json();
  const getCarts =getShoppingCart();
  // getShoppingCart();
  const savedCart = [];
  for (const id in getCarts) {
    const addedProduct = products.find((pd) => pd.id == parseInt(id));
    // console.log('addedProduct',addedProduct);
    if (addedProduct) {
      savedCart.push(addedProduct);
    }
  }

  return (savedCart );
};

export default cartProductLoader;
