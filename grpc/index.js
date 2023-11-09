import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
const packageDefinition = protoLoader.loadSync('grpc/proto/schedule.proto')
const scheduleProto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server();

server.addService(scheduleProto.ScheduleService.service, {
    GetStudent: (req,res) => {
        console.log(req.request.studentId)
        res({name: "", surname: ""})
    }
})


server.bindAsync('127.0.0.1:9090', grpc.ServerCredentials.createInsecure(), (err) => {
    if(err!==null){
        console.error(err)
    }
    console.log('start on port 9090');
    server.start()
})
