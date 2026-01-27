/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable if using simple export, otherwise standard build works for Vercel/Node
    // output: 'export', 
    generateBuildId: async () => {
        return `build-${Date.now()}`
    },
};

export default nextConfig;
