require('dotenv').config()

const SUPABASE_URL : String | undefined = process.env.SUPABASE_URL;
const SUPABASE_KEY : String | undefined = process.env.SUPABASE_KEY;
const ACCESS_TOKEN_SECRET : String | undefined = process.env.ACCESS_TOKEN_SECRET
const REFRESH_TOKEN_SECRET : String | undefined = process.env.REFRESH_TOKEN_SECRET

let config = {
    SUPABASE_URL,
    SUPABASE_KEY,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
};

module.exports = config;