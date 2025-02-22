require('dotenv').config()

const SUPABASE_URL : String | undefined = process.env.SUPABASE_URL;

let config = {
    SUPABASE_URL
};

module.exports = config;