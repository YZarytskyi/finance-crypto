import axios from 'axios';
import { Notify } from 'notiflix';
import { notifyApiOptions } from '../utils/notify';


export const articlesApi = {
  async getArticles(page = 0) {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=crypto&page=${page}&api-key=mScVMtCvTO7fBzSIQmgG1N6TAs3IXnic`
      );
      return data.response;
    } catch ({ message }) {
      Notify.failure(message as string, notifyApiOptions);
    }
  },
};