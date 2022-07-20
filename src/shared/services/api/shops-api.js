import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62d032381cc14f8c088661c2.mockapi.io',
  params: {
    l: 10,
    sortBy: 'createdAt',
    order: 'desc',
  },
});

const fetchAllShops = async (p = 1) => {
  const { data } = await instance('/shops', {
    params: {
      p,
    },
  });
  return data;
};

const addOrderToApi = async order => {
  const { data } = await instance.post('/orders', order);
  return data;
};

export { fetchAllShops, addOrderToApi };
