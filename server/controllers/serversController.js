let servers = [{name: "", information: "", kits: ""}]

const getServers = (req, res) => {
    res.json(servers)
}
const addServers = (req, res) => {
    console.log(req.body)
    servers.push(req.body);
    res.json(servers)
}


module.exports = {
    getServers,
    addServers
}