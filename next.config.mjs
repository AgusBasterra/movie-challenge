/** @type {import('next').NextConfig} */
// Tuve que agregar el reactStrictMode para que no se ejecute 2 veces el componente

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
};

export default nextConfig;
