import { STAY_LIST } from './stays-data';

const stayApi = {
  getAll: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(STAY_LIST);
      }, 250);
    });
  },
};

export default stayApi;
