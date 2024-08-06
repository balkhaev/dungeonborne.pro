module.exports = {
  apps: [
    {
      name: "dungeonborne-backend",
      script: "backend/node_modules/.bin/strapi",
      args: "start",
      pwd: "./backend",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
    {
      name: "dungeonborne-frontend",
      script: "frontend/node_modules/next/dist/bin/next",
      args: "start",
      // exec_mode: "cluster",
      pwd: "./frontend",
      // instances: "max",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "83.69.236.25",
      ref: "origin/main",
      repo: "git@github.com:balkhaev/dungeonborne.pro.git",
      path: "/root/site/dungeonborne",
      "pre-deploy-local": "sh ./bin/copy-envs.sh",
      "post-deploy": "sh ./bin/post-deploy.sh",
      "post-setup": "",
    },
  },
}
