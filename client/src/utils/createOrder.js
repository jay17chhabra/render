import axios from 'axios';

const createOrder = async (userId, cartProducts, paymentId) => {
  try {
    const response = await axios.post('https://render-funky-api.onrender.com/api/orders', {
      userId,
      cartProducts,
      paymentId,
    });
    return response.data;
  } catch (error) {
    throw new Error('Order creation failed: ' + error.message);
  }
};

export default createOrder;
