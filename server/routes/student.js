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
    /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                $name: 'John Doe',
                $age: 29,
                about: ''
            }
    } */
})

studentRouter.get('/security', (req,res) => {
    res.send("security")
    /* #swagger.security = [{
        "apiKeyAuth": []
}] */
})

studentRouter.get('/test', (req, res) => {
    res.send("test")
    /* #swagger.responses[001] = {
   description: 'myBoolean',
   schema: { $ref: '#/definitions/myBoolean' }
} */

    /* #swagger.responses[002] = {
        description: 'myNumber',
        schema: { $ref: '#/definitions/myNumber' }
    } */
})

studentRouter.get('/:id', (req,res) => {
    res.send("student id")
    /* #swagger.responses[001] = {
    description: 'myBoolean',
    schema: { $ref: '#/definitions/myBoolean' }
} */

    /* #swagger.responses[002] = {
        description: 'myNumber',
        schema: { $ref: '#/definitions/myNumber' }
    } */

    /* #swagger.responses[003] = {
        description: 'myString',
        schema: { $ref: '#/definitions/myString' }
    } */

    /* #swagger.responses[004] = {
        description: 'myObject',
        schema: { $ref: '#/definitions/myObject' }
    } */

    /* #swagger.responses[005] = {
        description: 'myArrayOfBooleans',
        schema: { $ref: '#/definitions/myArrayOfBooleans' }
    } */

    /* #swagger.responses[006] = {
        description: 'myArrayOfNumbers',
        schema: { $ref: '#/definitions/myArrayOfNumbers' }
    } */

    /* #swagger.responses[007] = {
        description: 'myArrayOfStrings',
        schema: { $ref: '#/definitions/myArrayOfStrings' }
    } */

    /* #swagger.responses[008] = {
        description: 'myArrayOfObjects',
        schema: { $ref: '#/definitions/myArrayOfObjects' }
    } */

    /* #swagger.responses[009] = {
        description: 'myReferencedObjectArray',
        schema: { $ref: '#/definitions/myReferencedObjectArray' }
    } */
})
