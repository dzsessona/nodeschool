var net = require('net')

function currentDate(){
	return "diego"
}

var server = net.createServer(function (socket) {
  socket.end(currentDate() + '\n')
})
var port = Number(process.argv[2])
console.log("port" + port)
server.listen(Number(process.argv[2]))