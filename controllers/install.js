

export function getInstallerInfo(app) {
    return  function (req, res) {
        const serverProtocol = req.protocol
        const serverIP = app.get('ip')
        const serverPort = app.get('port')
        const url = `${serverProtocol}://${serverIP}:${serverPort}`
        res.json({ serverProtocol, serverIP, serverPort, url})
    }
}