module.exports = (app) => {
    const signUp = require('../controllers/signUpController');

    app.route('/api/signup')
        .post(signUp.createSignup);
}