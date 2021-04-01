module.exports = {
  checkValidString: (req, res, next) => {
    const { string } = req.body
    if(typeof string === 'string'){
      next();
    } else {
      res.status(400).send({ error: 'the datatype was not a string' })
    }
  }
}