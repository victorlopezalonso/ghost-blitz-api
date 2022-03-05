const index = (req, res) => res.json({ service: 'sessions index' })

const store = (req, res) => res.json({ service: 'sessions update' })

const update = (req, res) => res.json({ service: 'sessions update' })

const destroy = (req, res) => res.json({ service: 'sessions destroy' })

export default { index, store, update, destroy }
