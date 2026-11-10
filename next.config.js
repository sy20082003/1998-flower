/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        // Sổ đơn hàng là trang nội bộ: không cho Google lập chỉ mục / lưu bản sao
        source: '/donhang/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
    ];
  },
};

module.exports = nextConfig;
