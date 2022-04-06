import { getDummyData } from '../controllers/dummy.js';

const dummyData = (router) => {
  router.get('/dummy', getDummyData);
};

export { dummyData };
