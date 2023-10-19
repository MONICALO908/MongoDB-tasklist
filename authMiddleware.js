// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();
 
// const SECRET_KEY = process.env.SECRET_KEY || "secretkey";


// function JWTValidation(req, res, next) {
//     const token = req.headers.authorization;
//    console.log(token)
//     if (!token) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }
  
//     jwt.verify(token, SECRET_KEY, (error, decoded) => {
//       if (error) {
//         console.log(error)
//         return res.status(401).json({ error: "Invalid token" });
//       }
  
//       const { role } = decoded;
  
//       req.headers = { ...req.headers, role }; // Añadir el rol a los cabeceros del request
//       next();
//     });
//   }

//   module.exports = {JWTValidation}