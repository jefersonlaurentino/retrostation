/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif' , 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'media-rockstargames-com.akamaized.net',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
