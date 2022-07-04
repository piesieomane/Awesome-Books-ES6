/* eslint-disable import/extensions */

import { DateTime } from './luxon.js';

const createDate = () => {
  const now = DateTime.now().c;
  const dateBox = document.createElement('div');
  const listPage = document.querySelector('.date');
  dateBox.innerHTML = `${now.day}-${now.month}-${now.year}, ${now.hour}h:${now.minute}m`;
  document.body.insertBefore(dateBox, listPage);
  dateBox.classList.add('date-box');
};

export default createDate;
