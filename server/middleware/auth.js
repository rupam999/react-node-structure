/* eslint-disable consistent-return */
// import jwt from 'jsonwebtoken';

const skipMiddleWare = ['/'];

const authenticateToken = (req, res, next) => {
  //   if (req) {
  //     console.log('PATH PATH', req.path);
  //   }
  if (skipMiddleWare.includes(req.path)) {
    next();
  } else {
    next();
    // const authHeader = req.headers.authorization;
    // const token = authHeader && authHeader.split(' ')[1];
    // if (token == null) return res.sendStatus(401); // if there isn't any token found
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //   if (err) return res.sendStatus(403);
    //   req.user = user;
    //   next(); // pass the execution off to whatever request the client intended
    // });
  }
};

export default authenticateToken;
