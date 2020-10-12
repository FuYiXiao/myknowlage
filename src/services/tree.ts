import { request } from 'ice';

export default {

  // 格式化返回值
  async getTreeData(params) {
    const data = await request({
      url: `/getKnowlege`,
      params,
    });

    return data.map(item => {
      return {
        ...item
      };
    });
  }
}