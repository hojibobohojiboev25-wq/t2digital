const bcrypt = require('bcryptjs');

async function generatePasswordHash() {
    const password = 'admin123'; // Change this to your desired password
    const saltRounds = 10;

    try {
        const hash = await bcrypt.hash(password, saltRounds);
        console.log('Password hash:', hash);
        console.log('Use this hash in your .env file as ADMIN_PASSWORD_HASH');
    } catch (error) {
        console.error('Error generating hash:', error);
    }
}

generatePasswordHash();