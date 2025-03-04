const nextConfig = {
  reactStrictMode: true,
  env: {
    // eslint-disable-next-line no-undef
    OPENAI_API_KEY: process.env.OPENAI_API_KEY, // Exposes it to Next.js (not frontend)
  },
};

export default nextConfig;
