import jwt from 'jsonwebtoken'

//create key...
const jwt_secret = 'secret_key_1417'

// authmiddleware.js
const verifytoken = (req, res, next) => {
  const authheader = req.headers.authorization;

  if (!authheader || !authheader.startsWith("Bearer ")) {
    return res.status(401).send('no token provided');
  }

  const token = authheader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, jwt_secret); // 👈 Verify secret matches login!
    req.user = decoded; 
    next();
  } catch (e) {
    console.log("JWT Error Reason:", e.message); // 👈 THIS WILL PRINT THE EXACT REASON IN YOUR NODE TERMINAL
    return res.status(403).send('invalid token');
  }
};
export default verifytoken