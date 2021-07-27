import axios from "axios";

const base_URL = "https://react-shop-3db09-default-rtdb.firebaseio.com";

export const createNewAdv = async (product) => {
  try {
    const response = await axios.post(
      base_URL + `/adv/${product.category}.json`,
      product
    );
    return response;
  } catch (error) {
    console.dir(error);
  }
};

export const deleteAdv = async (id, category) => {
  try {
    const response = await axios.delete(
      base_URL + `/adv/${category}/${id}.json`
    );
    return response;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const createNewOrder = async (order) => {
  try {
    const response = await axios.post(base_URL + `/orders.json`, order);
    return response;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const getAllAdvByCategory = async (category) => {
  try {
    const response = await axios.get(base_URL + `/adv/${category}.json`);
    return response;
  } catch (error) {
    console.log(`error`, error);
  }
};
