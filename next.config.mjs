/** @type {import('next').NextConfig} */
// Here we need reactStrictMode so the mount of components doesnt ocurre twice
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'**',
                port: "",
            },
        ],
    },
    reactStrictMode: false,
    env: {
        BASE_URLS: process.env.BASE_URL, // pulls from .env file
    },
};

export default nextConfig;
