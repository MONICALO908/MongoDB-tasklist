function validateHTTPMethods(req, res, next) {
    const validMethods = ["GET", "POST", "PUT", "DELETE"];
  
    if (!validMethods.includes(req.method)) {
      return res.status(400).json({ error: "Método HTTP no válido" });
    }
  
    next();
  }
  
  module.exports = {
    validateHTTPMethods
  };
  