# 📦 Backend para Formulario - Guardado en Excel

Este es el backend del proyecto de formulario, desarrollado con:

- Node.js + Express
- exceljs (para manipular archivos Excel)
- CORS + body-parser
- Render (para despliegue gratuito del backend)

Su objetivo es recibir los datos enviados desde el frontend y guardarlos en un archivo Excel (Datos_Formulario.xlsx), ya sea localmente o desde un servidor en línea (como Render).

---

## 📬 Endpoints
POST /save
Recibe los datos enviados desde el frontend en formato JSON y los guarda en el archivo Excel.

Ejemplo de cuerpo (JSON)
{
  "firstName": "Juan",
  "lastName": "Pérez",
  "favoriteSport": "Fútbol",
  "gender": "Masculino",
  "state": "Guatemala",
  "isAdult": true,
  "cars": ["Toyota", "Nissan"]
}

## ☁️ Despliegue en Render
Este backend está desplegado en:
🔗 https://formulario-backend-xns6.onrender.com
