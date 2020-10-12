import { IRootDispatch } from 'ice';
import treeService from '@/services/tree';
const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

export default {
  state: {
    count: 0,
    data: []
  },

  reducers: {
    increment(prevState) {
      prevState.count += 1;
    },
    decrement(prevState) {
      prevState.count -= 1;
    },
    update(prevState, payload) {
      prevState.data = payload;
    }
  },

  effects: (dispatch: IRootDispatch) => ({
    async decrementAsync() {
      await delay(10);
      dispatch.tree.decrement();
    },
    async getTreeData() {
      const data = await treeService.getTreeData({});
      console.log("data", data);
      dispatch.tree.update(data);
    }
  }),
};