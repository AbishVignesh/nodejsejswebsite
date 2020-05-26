import path from 'path';
import dotenv from 'dotenv';

// Parse Environmental Vars
dotenv.config({
    path: path.resolve('./.env')
});
const {
    PORT,
    TRAFIC_MANAGER
} = process.env;

module.exports = {
    PORT: PORT||3000,
    TRAFIC_MANAGER
};