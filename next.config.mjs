/** @type {import('next').NextConfig} */
const nextConfig = {

    // Need to configure the hostname to ba able to access the image from googleusercontent
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
