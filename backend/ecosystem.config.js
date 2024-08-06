module.exports = {
  apps: [
    {
      name: "dungeonborne-backend",
      script: "node_modules/.bin/strapi",
      args: "start",
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
      path: "/root/site/dungeonborne/backend",
      "pre-deploy-local": "sh ./bin/copy-envs.sh",
      "post-deploy": "sh ./backend/bin/post-deploy.sh",
      "post-setup": "",
    },
  },
};
