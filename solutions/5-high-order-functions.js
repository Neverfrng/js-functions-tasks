import _ from 'lodash';

// BEGIN
import { sortBy } from 'lodash';

export default function takeOldest(users, count = 1) {
  const sorted = sortBy(users, (user) => Date.parse(user.birthday));
  return sorted.slice(0, count);
}
// END