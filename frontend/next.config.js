/** @type {import('next').NextConfig} */
const path = require("path")

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["yjs"] = path.resolve(__dirname, "node_modules/yjs")
    }
    return config
  },
  async rewrites() {
    return [
      // {
      //   source: "/api/:path(!auth$)",
      //   destination: "http://localhost:1337/api/:path*",
      // },
      {
        source: "/uploads/:path",
        destination: "http://localhost:1337/uploads/:path*",
      },
    ]
  },
}
