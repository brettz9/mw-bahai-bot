/* eslint-disable no-console -- CLI */

// Todo: Generate shortcut pages on each relevant server

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

// Todo: Adapt https://github.com/AlaSQL/alasql/blob/develop/src/84from.js#L42-L89
//          so as to support querying URLs and doing joins?
// See https://github.com/AlaSQL/alasql/wiki/User-Defined-Functions
// https://github.com/AlaSQL/alasql/wiki/Html
alasql.from.MYFUN = (a) => {
  console.log('11111112', a);
};

const res = alasql('SELECT * FROM HTML("table", {headers:false})');
console.log('res', res);
