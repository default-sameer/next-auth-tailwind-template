const env = process.env.NODE_ENV



let BASE_URL : string

if (env == "development") {
    BASE_URL = "http://localhost:3000";
} else if (env == "production") {
    BASE_URL = "https://next-auth-cc.vercel.app/";
}

export {BASE_URL}
