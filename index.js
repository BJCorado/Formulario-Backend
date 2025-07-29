const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { writeToExcel } = require("./excelWriter");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/save", async (req, res) => {
  try {
    await writeToExcel(req.body);
    res.status(200).send("Datos guardados en Excel.");
  } catch (err) {
    res.status(500).send("Error al guardar los datos.");
  }
});

app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));

const excelPath = path.join(__dirname, "Datos_Formulario.xlsx");

app.get("/descargar-excel", (req, res) => {
  res.download(excelPath, "Datos_Formulario.xlsx", (err) => {
    if (err) {
      console.error("❌ Error al enviar el archivo:", err.message);
      res.status(500).send("Error al descargar el archivo.");
    }
  });
});
