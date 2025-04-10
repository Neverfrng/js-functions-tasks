import _ from 'lodash';

// BEGIN
export default function average(...args) {
    if (args.length === 0) {
        return null;
    }

    const total = _.sum(args);

    return total / args.length;
}
// END