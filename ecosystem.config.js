module.exports = {
  apps: [
    {
      name: "ru-frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "cluster",
      instances: "max",
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
