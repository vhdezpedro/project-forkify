import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export async function getJSON(url) {
  const fetchPro = await fetch(url);
  const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
  return await res.json();
}
