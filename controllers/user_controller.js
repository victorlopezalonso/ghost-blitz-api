import users from '../mock/users.js';

const index = (req, res) => res.json({ service: 'users index', users });
const store = (req, res) => res.json({ service: 'users store'});
const update = (req, res) => res.json({ service: 'users update'});
const destroy = (req, res) => res.json({ service: 'users destroy'});

export default { index, store, update, destroy };