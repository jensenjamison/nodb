let servers = []

const getServers = (req, res) => {
    res.json(servers)
}

const addServers = (req, res) => {
    console.log(req.body)
    servers.push(req.body);
    res.json(servers)
}

const deleteServers = (req, res) => {
    console.log(servers)
    servers.splice(+req.params.id, 1);
    res.json(servers);
  };

module.exports = {
    getServers,
    addServers,
    deleteServers
}