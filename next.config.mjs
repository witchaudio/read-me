/** @type {import('next').NextConfig} */

const nextConfig = {
        webpack: (config, { isServer }) => {
            // Adds a rule for handling .md files
            config.module.rules.push({
                test: /\.md$/,
                use: 'raw-loader',
            });
    
            // Return the altered config
            return config;
        },
    };
export default nextConfig;
