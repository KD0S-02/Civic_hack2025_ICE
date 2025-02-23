"use strict";
require('dotenv').config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
let config = {
    SUPABASE_URL,
    SUPABASE_KEY
};
module.exports = config;
