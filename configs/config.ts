require('dotenv').config()

const SUPABASE_URL : String | undefined = process.env.SUPABASE_URL;
const SUPABASE_KEY : String | undefined = process.env.SUPABASE_KEY;

let config = {
    SUPABASE_URL,
    SUPABASE_KEY
};

module.exports = config;