import express from "express";
import fs from "fs";
import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";


const packageDefinition = protoLoader.loadSync('C:\\Users\\48534\\WebstormProjects\\untitled4\\frontend\\vite-project\\grpc\\proto\\schedule.proto')
const scheduleProto = grpc.loadPackageDefinition(packageDefinition)
const client = new scheduleProto.ScheduleService('127.0.0.1:9090', grpc.ChannelCredentials.createInsecure())
export const studentRouter = express.Router()


studentRouter.get('/:id/plan/:startDate/:endDate', (req,res) => {
    client.GetStudent({studentId: '1'}, (err, response) => {
        if(err !== null)
            console.log(err)
        res.send(response)
    })
})

studentRouter.get('/:id', (req,res) => {
    res.send("student id")
})
