/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = {
   images: {
      domains: ["utfs.io"]
   },
   ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
}),
};

export default nextConfig;
