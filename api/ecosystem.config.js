/**
 * PM2 Ecosystem Configuration
 *
 * This file configures PM2 to manage the API server process.
 *
 * Usage:
 *   pm2 start ecosystem.config.js          # Start all apps
 *   pm2 start ecosystem.config.js --only api  # Start only API
 *   pm2 stop ecosystem.config.js           # Stop all apps
 *   pm2 restart ecosystem.config.js        # Restart all apps
 *   pm2 delete ecosystem.config.js         # Delete all apps
 *   pm2 logs api                           # View logs
 *   pm2 monit                              # Monitor processes
 */

module.exports = {
  apps: [
    {
      name: "api",
      script: "server.js",
      interpreter: "bun",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",

      // Environment variables
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      // Auto restart configuration
      autorestart: true,
      watch: false,
      max_memory_restart: "250M",

      // Logging
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_file: "./logs/pm2-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,

      // Advanced settings
      min_uptime: "10s",
      max_restarts: 10,
      restart_delay: 4000,

      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,

      // Source map support
      source_map_support: true,

      // Ignore watch patterns (if watch is enabled)
      ignore_watch: [
        "node_modules",
        ".git",
        ".wrangler",
        "logs",
        "*.log",
        "data",
        "bun.lock",
        "pnpm-lock.yaml",
      ],
    },
  ],
};
