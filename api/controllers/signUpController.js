const mongoose = require('mongoose');
const Signup = mongoose.model('Signup');

exports.createSignup = (req, res) => {
    let signup = new Signup(req.body);

    signup.save(function(err, signup) {
        if (err)
          res.send(err);
        res.json(signup);
      });
}