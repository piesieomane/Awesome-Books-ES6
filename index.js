/* eslint-disable import/extensions */

import createDate from './modules/date.js';
import Navigation from './modules/navigation.js';
import * as bookview from './modules/bookView.js';

createDate();

const nav = new Navigation();
nav.navigate();

bookview();
