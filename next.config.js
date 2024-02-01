/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost', 'i.pravatar.cc'],
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*',
			},
		];
	},
};

module.exports = nextConfig;
