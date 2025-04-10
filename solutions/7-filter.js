// BEGIN
export default function getGirlFriends(users) {
    return users
      .map((user) => user.friends)
      .flat()
      .filter((friend) => friend.gender === 'female');
  }
// END