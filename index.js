const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const emailIds = {
  "General query": "SECDinfo@sharpsec.com",
  "R-IGZO Displays": "SECDinfo@sharpsec.com",
  "8K Display": "SECDinfo@sharpsec.com",
  "Custom Camera Module": "changa@sharpsec.com",
  "Memory-in-pixel Landing":
    "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "5-inch R-IGZO Landing": "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "Low Power Display": "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "O'Donnell": "carrollb@sharpsec.com,karamy@xposureunlimited.com,lberndt@odonnell.com",
  "TCS": "carrollb@sharpsec.com,karamy@xposureunlimited.com,ashley@tc-sales.com",
  "IntelliMark": "carrollb@sharpsec.com,karamy@xposureunlimited.com,secdintellimarkwebcontact@sharpsec.com",
  "Control Sales": "carrollb@sharpsec.com,karamy@xposureunlimited.com,lisay@controlsales.com",
  "O'Donnell Low Power": "carrollb@sharpsec.com,karamy@xposureunlimited.com,LBerndt@odonnell.com",
  "ePoster": "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "Control Sales R-IGZO": "ashley@tc-sales.com,carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "Reflective LCD Landing Page":
    "carrollb@sharpsec.com,karamy@xposureunlimited.com",
};
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const _app_folder = "./build";
app.get("/api", (req, res) => {
  res.send("SHARP SECD");
});

app.post("/api/form", (req, res) => {
  // debugger;

  let data = req.body;
  var sEmail = [];
  data.subject.forEach((element) => {
    sEmail.push(emailIds[element]);
  });
  // res.send(data.name);
  let smtpTransport = nodemailer.createTransport({
    host: "172.29.12.236",
    port: 25,
  });
  // res.send(sEmail.join(","));
  let mailOptions = {
    from: "SECDinfo@sharpsec.com",
    to: sEmail.join(","),
    subject: data.subject.join(","),
    html: `<h3>Name: ${data.name}</h3><h3>Email: ${data.email}</h3><h3>Mobile: ${data.mobile}</h3><h3>Message: ${data.message}</h3>`,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("Mail sent unsuccessfull", error);
      res.send(error);
    } else {
      console.log("Mail sent succeessfully to:" + sEmail.join(","));
    }
  });
  res.send("Success");
  smtpTransport.close();
});
app.get(
  "*.*",
  express.static(_app_folder, {
    maxAge: "1y",
  })
);

app.all("*", function (req, res) {
  res.status(200).sendFile("/", {
    root: _app_folder,
  });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server running at ${PORT} `);
});
