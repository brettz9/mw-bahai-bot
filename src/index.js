/* eslint-disable no-console -- CLI */
import MWBot from 'mwbot';

// eslint-disable-next-line max-len -- Long
// eslint-disable-next-line node/no-unpublished-import -- Not yet for public consumption
import {apiUrl, username, password} from '../credentials.js';

const bot = new MWBot({
  verbose: true
});

try {
  const resp = await bot.loginGetEditToken({
    apiUrl,
    username,
    password
  });
  console.log('Response', resp);
  const creating = await bot.create(
    'Test17', '=Some more Wikitext=', 'Test Upload'
  );
  console.log('creating', creating);
  console.log('Ok!');
} catch (err) {
  console.log('err', err);
}
