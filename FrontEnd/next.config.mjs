/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname: "utfs.io"}],
        domains: ['api.dicebear.com'],
    },
    
};

export default nextConfig;
