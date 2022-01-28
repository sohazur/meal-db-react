const addToDb = (id) => {
  const exists = getDb();
  let meal_cart = {};
  if (exists) {
    meal_cart = JSON.parse(exists);
  }
  updateDb(meal_cart);
};

const getDb = () => localStorage.getItem("shopping_cart");

const updateDb = (cart) => {
  localStorage.setItem("meal_cart", JSON.stringify(cart));
};

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

export { addToDb, getStoredCart };
