const express = require("express");
const req = require("express/lib/request");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// app.get("/hello",(req, res, next)=>{
//     res.send("<h1> Hello world</h1>")
// })
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.get("/",(req, res, next)=>{
  res.send("backend")
}) 
app.get("/infomation", (req, res, next) => {
  try {
    const data = {
        project: ["• Continental wastewater plant PLC replacement ABB to SIEMENS"],
      education: [
        "• King Mongkut's University of Technology North Bangkok",
        "Bachelor of Instrument engineer",
        "GPA 2.65",
        "• 2021 Rayong technical collage",
        "High Voc. Cert of Electrical "
      ],
      experience: [
        "2020-2021",
        "• Continental WIL Program in C&D engineering",
        "April-June 2023",
        "• Internship at Inspire Tech Co.,Ltd."
      ],
      skill: [
        "• PLC Programing",
        "• Experience using Microsoft office suite",
        "• Enjoy working under pressure and challenge"
      ],
      talent: ["• Play the guitar", "• Play the basketball"]
    };
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});
app.listen(4000, () => {
  console.log("backend");
});
