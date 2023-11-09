import express from "express";
import fs from "fs";

export const studentRouter = express.Router()

studentRouter.get('/:id/plan/:startDate/:endDate', (req,res) => {
    let rawdata = fs.readFileSync('C:\\Users\\48534\\WebstormProjects\\TAPI\\tapi\\src\\assets\\MOCK_DATA.json');
    let data = JSON.parse(rawdata);

    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    const mappedSubjects = data.filter( (item) => item.id == req.params.id).map((item) => `Lekcja: ${item.lekcja}, Sala ${item.Sala} o godz ${item.Godzina} <br>`)


    res.send(`Plan da studenta ${req.params.id} od ${startDate} do ${endDate} <br> ${mappedSubjects}`)
})

studentRouter.get('/:id', (req,res) => {
    res.send("student id")
})
