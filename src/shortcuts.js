/* eslint-disable no-console -- CLI */

import fetch from 'node-fetch';
import JSDOM from 'jsdom';

const resp = await fetch(
  'https://bahaipedia.org/Shortcuts'
);

const html = await resp.text();
// console.log('html', html);

const {document} = new JSDOM.JSDOM(html).window;

// For alasql
global.document = document;

const alasql = (await import('alasql')).default;
alasql.from.MYFUN = (a) => {
  console.log('11111112', a);
};

const res = alasql('SELECT * FROM HTML("table", {headers:false})');
console.log('res', res);
