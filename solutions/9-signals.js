import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default function getFreeDomainsCount(emails) {
  return emails
    .map((email) => email.split('@')[1])
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      const count = get(acc, domain, 0);
      return { ...acc, [domain]: count + 1 };
    }, {});
}
// END