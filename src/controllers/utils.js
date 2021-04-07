const bcrypt = require('bcryptjs');

const encodePassword = (password) => {
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password,salt);

    return password;
}

const decodePassword = () => {

}

module.exports = {
    encodePassword,
    decodePassword
}