# Deployment & Setup Guide: Falgoon Software Documentation Hub

This guide walks you through setting up and running the application in two environments:
1. **Local Development Machine** (Windows, macOS, or Linux using Visual Studio Code)
2. **Production Linux Server** (Ubuntu 20.04 / 22.04 / 24.04 LTS with Nginx, PM2, or Docker)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Part 1: Local Development in Visual Studio Code](#part-1-local-development-in-visual-studio-code)
  - [1.1 Prerequisites](#11-prerequisites)
  - [1.2 Clone or Download the Project](#12-clone-or-download-the-project)
  - [1.3 Open in VS Code](#13-open-in-vs-code)
  - [1.4 Install Dependencies](#14-install-dependencies)
  - [1.5 Set Up Environment Variables](#15-set-up-environment-variables)
  - [1.6 Start the Local Development Server](#16-start-the-local-development-server)
  - [1.7 Recommended VS Code Extensions](#17-recommended-vs-code-extensions)
- [Part 2: Production Deployment on Ubuntu Linux Server](#part-2-production-deployment-on-ubuntu-linux-server)
  - [2.1 Server Requirements & Initial Setup](#21-server-requirements--initial-setup)
  - [2.2 Install Node.js & Git on Ubuntu](#22-install-nodejs--git-on-ubuntu)
  - [2.3 Transfer / Clone Your Code](#23-transfer--clone-your-code)
  - [2.4 Build the Application for Production](#24-build-the-application-for-production)
  - [2.5 Production Serving Option A: High-Performance Nginx (Recommended)](#25-production-serving-option-a-high-performance-nginx-recommended)
  - [2.6 Production Serving Option B: PM2 + Preview / Node Server](#26-production-serving-option-b-pm2--preview--node-server)
  - [2.7 Production Serving Option C: Docker Container](#27-production-serving-option-c-docker-container)
  - [2.8 Free SSL Certificate Setup (HTTPS via Let's Encrypt)](#28-free-ssl-certificate-setup-https-via-lets-encrypt)
  - [2.9 Firewall Configuration (UFW)](#29-firewall-configuration-ufw)
- [Part 3: Updating Your Production App (CI/CD / Pull Updates)](#part-3-updating-your-production-app-cicd--pull-updates)
- [Part 4: Common Troubleshooting & FAQ](#part-4-common-troubleshooting--faq)

---

## Project Overview

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Architecture:** Client-side SPA with persistent LocalStorage state for CMS updates and full static distribution readiness.

---

## Part 1: Local Development in Visual Studio Code

### 1.1 Prerequisites
Before starting, ensure your local computer has:
1. **Node.js**: Version `20.x` or `22.x` (LTS recommended).
   - Verify by running in terminal:
     ```bash
     node -v
     npm -v
     ```
   - If not installed, download from [nodejs.org](https://nodejs.org/).
2. **Visual Studio Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/).
3. **Git**: (Optional, but recommended) Download from [git-scm.com](https://git-scm.com/).

---

### 1.2 Clone or Download the Project
If using Git:
```bash
git clone <your-repository-url> falgoon-docs-hub
cd falgoon-docs-hub
```
Or simply extract the project ZIP folder onto your computer.

---

### 1.3 Open in VS Code
1. Launch **Visual Studio Code**.
2. Click **File** > **Open Folder...** (or press `Ctrl+K Ctrl+O` on Windows/Linux, `Cmd+O` on Mac).
3. Select the `falgoon-docs-hub` root folder.
4. Open the integrated terminal in VS Code:
   - Shortcut: Press ``Ctrl + ` `` (Backtick) or go to menu **Terminal** > **New Terminal**.

---

### 1.4 Install Dependencies
In the VS Code terminal, execute:
```bash
npm install
```
*This installs all required packages including React, Vite, Tailwind CSS v4, Lucide icons, and TypeScript.*

---

### 1.5 Set Up Environment Variables
Create a `.env` file in the root folder (you can duplicate `.env.example`):

**On Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```

**On macOS / Linux / Git Bash:**
```bash
cp .env.example .env
```

Open `.env` and verify the values:
```env
# Optional Gemini API key if enabling external server-side assistant endpoints
GEMINI_API_KEY="YOUR_KEY_HERE"

# Local URL for testing
APP_URL="http://localhost:3000"
```

---

### 1.6 Start the Local Development Server
In your VS Code terminal, run:
```bash
npm run dev
```

You will see output similar to:
```text
  VITE v8.3.0  ready in 240 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.xxx:3000/
  ➜  press h + enter to show help
```

1. Hold `Ctrl` (or `Cmd` on Mac) and click the `http://localhost:3000/` link in terminal, or open your web browser and navigate to:
   ```
   http://localhost:3000
   ```
2. The **Falgoon Software Documentation Hub** will load immediately.
3. Any edits you make to files in `src/` will instantly hot-reload in your browser.

---

### 1.7 Recommended VS Code Extensions
For the best developer experience, install these free VS Code extensions from the Extensions marketplace (`Ctrl+Shift+X`):
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Autocompletion for Tailwind classes.
- **ESLint** (`dbaeumer.vscode-eslint`) - Code quality checks.
- **Prettier - Code formatter** (`esbenp.prettier-vscode`) - Automatic code formatting on save.

---

## Part 2: Production Deployment on Ubuntu Linux Server

This section covers deploying to any standard cloud virtual machine (e.g., DigitalOcean Droplet, AWS EC2, Linode/Akamai, Hetzner, Google Cloud Compute Engine, or an on-premise Ubuntu server).

### 2.1 Server Requirements & Initial Setup
- **Operating System:** Ubuntu 20.04, 22.04, or 24.04 LTS
- **RAM:** Minimum 1 GB (2 GB recommended if building directly on server)
- **Domain Name:** Point an `A` record for your domain (e.g., `docs.falgoon.co.uk`) to your server's public IP address.

Log in to your server via SSH:
```bash
ssh ubuntu@your-server-ip
```

Update package lists:
```bash
sudo apt update && sudo apt upgrade -y
```

---

### 2.2 Install Node.js & Git on Ubuntu
Install Node.js 20.x LTS via the official NodeSource repository:

```bash
# Install curl and prerequisites
sudo apt install -y curl git build-essential

# Add NodeSource repository for Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify versions
node -v    # Should show v20.x.x
npm -v     # Should show v10.x.x
```

---

### 2.3 Transfer / Clone Your Code
Create an application directory on your server:
```bash
sudo mkdir -p /var/www/falgoon-docs
sudo chown -R $USER:$USER /var/www/falgoon-docs
cd /var/www/falgoon-docs
```

**Option 1: Clone via Git (Recommended)**
```bash
git clone <your-git-repo-url> .
```

**Option 2: Copy from local machine via SCP or RSYNC**
From your local machine terminal:
```bash
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude 'dist' ./ ubuntu@your-server-ip:/var/www/falgoon-docs/
```

---

### 2.4 Build the Application for Production
Inside `/var/www/falgoon-docs`:

```bash
# 1. Install production dependencies
npm install

# 2. Test syntax and build static bundle
npm run build
```

The build process outputs the optimized HTML, JavaScript, and CSS bundle into the `/var/www/falgoon-docs/dist` folder.

> **Tip for 1GB RAM Servers:** If `npm run build` is killed due to memory limit, create a 2GB swap file:
> ```bash
> sudo fallocate -l 2G /swapfile
> sudo chmod 600 /swapfile
> sudo mkswap /swapfile
> sudo swapon /swapfile
> echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
> ```

---

### 2.5 Production Serving Option A: High-Performance Nginx (Recommended)

Because this application is a modern Single Page Application (SPA), the fastest, most secure, and lowest-resource method is serving the `dist/` directory directly through **Nginx**.

#### Step 1: Install Nginx
```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### Step 2: Configure Nginx Virtual Host
Create a new configuration file:
```bash
sudo nano /etc/nginx/sites-available/falgoon-docs
```

Paste the following configuration (replace `docs.yourdomain.com` with your actual domain or server IP):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name docs.yourdomain.com; # Or your server IP if you don't have a domain yet

    root /var/www/falgoon-docs/dist;
    index index.html;

    # Gzip compression for lightning-fast asset loading
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript application/json image/svg+xml;
    gzip_disable "MSIE [1-6]\.";

    # Cache static assets (JS, CSS, images, fonts)
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public, max-age=15552000, immutable";
    }

    # SPA routing: fallback all routes to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    error_log /var/log/nginx/falgoon_docs_error.log;
    access_log /var/log/nginx/falgoon_docs_access.log;
}
```

Save and exit in nano: Press `Ctrl + O`, then `Enter`, then `Ctrl + X`.

#### Step 3: Enable the site and restart Nginx
```bash
# Enable configuration
sudo ln -s /etc/nginx/sites-available/falgoon-docs /etc/nginx/sites-enabled/

# Remove default Nginx welcome page
sudo rm -f /etc/nginx/sites-enabled/default

# Test configuration for syntax errors
sudo nginx -t

# If output says 'syntax is ok', reload Nginx
sudo systemctl reload nginx
```

Your documentation portal is now live at `http://docs.yourdomain.com`!

---

### 2.6 Production Serving Option B: PM2 + Preview / Node Server

If you prefer running a Node process manager or plan to attach backend Express API routes:

#### Step 1: Install PM2 globally
```bash
sudo npm install -g pm2
```

#### Step 2: Create a PM2 ecosystem file
Inside `/var/www/falgoon-docs/ecosystem.config.cjs`:
```javascript
module.exports = {
  apps: [
    {
      name: 'falgoon-docs',
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --port 3000 --host 0.0.0.0',
      cwd: '/var/www/falgoon-docs',
      env: {
        NODE_ENV: 'production'
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: '500M'
    }
  ]
};
```

#### Step 3: Start and Save PM2 Service
```bash
pm2 start ecosystem.config.cjs
pm2 save

# Enable automatic start on server reboot
pm2 startup systemd
# Copy-paste the 'sudo env PATH=...' line that PM2 outputs
```

#### Step 4: Reverse Proxy via Nginx to PM2 Port 3000
In `/etc/nginx/sites-available/falgoon-docs`:
```nginx
server {
    listen 80;
    server_name docs.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Reload Nginx:
```bash
sudo systemctl reload nginx
```

---

### 2.7 Production Serving Option C: Docker Container

If your infrastructure runs on Docker or Docker Compose:

#### 1. Create a `Dockerfile` in the project root:
```dockerfile
# Stage 1: Build static assets
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with lightweight Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Custom Nginx config for SPA routing
RUN printf 'server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### 2. Build and run the container:
```bash
# Build Docker image
docker build -t falgoon-docs-hub:latest .

# Run on port 80
docker run -d --name falgoon-docs -p 80:80 --restart unless-stopped falgoon-docs-hub:latest
```

---

### 2.8 Free SSL Certificate Setup (HTTPS via Let's Encrypt)

Secure your portal with a free SSL certificate using the official Certbot client:

```bash
# 1. Install Certbot and the Nginx plugin
sudo apt install -y certbot python3-certbot-nginx

# 2. Obtain and automatically install the certificate
sudo certbot --nginx -d docs.yourdomain.com
```

- When prompted, enter your administrative email address.
- Agree to the Terms of Service.
- Certbot will automatically configure SSL in your Nginx virtual host, enforce HTTPS redirects, and schedule automatic renewal via a systemd timer.

To test automatic SSL renewal:
```bash
sudo certbot renew --dry-run
```

---

### 2.9 Firewall Configuration (UFW)
Ensure your Ubuntu server only opens necessary ports:

```bash
# Allow SSH (DO NOT SKIP THIS or you might be locked out)
sudo ufw allow OpenSSH

# Allow HTTP and HTTPS traffic
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check firewall status
sudo ufw status
```

---

## Part 3: Updating Your Production App (CI/CD / Pull Updates)

When you make changes to documentation, add new software cards, or update code:

Create a simple deploy script `/var/www/falgoon-docs/deploy.sh`:
```bash
#!/bin/bash
set -e

echo "🚀 Starting Deployment..."

cd /var/www/falgoon-docs

# Pull latest commits
git pull origin main

# Install any new dependencies
npm install

# Rebuild the production dist bundle
npm run build

# If using Nginx static serving, no restart is needed! Dist is updated.
# If using PM2:
# pm2 reload falgoon-docs

echo "✅ Deployment completed successfully!"
```

Make it executable:
```bash
chmod +x /var/www/falgoon-docs/deploy.sh
```

Whenever you want to deploy updates, simply run:
```bash
/var/www/falgoon-docs/deploy.sh
```

---

## Part 4: Common Troubleshooting & FAQ

### Q1: The browser shows a blank page or 404 when refreshing subpages
- **Cause:** Your web server is trying to find a physical directory instead of routing through `index.html`.
- **Solution:** Ensure your Nginx configuration has `try_files $uri $uri/ /index.html;`.

### Q2: Port 3000 is already in use locally
- **Solution:** Specify a different port when running dev:
  ```bash
  npm run dev -- --port 3001
  ```
  Or kill the existing process occupying port 3000:
  ```bash
  # On macOS / Linux:
  lsof -ti:3000 | xargs kill -9

  # On Windows (PowerShell):
  Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
  ```

### Q3: How do I export or backup user guide edits created via the Admin CMS?
- **Answer:** Navigate to **Admin CMS** in the top navigation bar. Click the **Export JSON** button in the top right. This downloads the complete database of software cards, categories, and articles which can be committed to your repository or imported onto another server.

### Q4: How do I view Nginx error logs on Ubuntu?
- Execute:
  ```bash
  sudo tail -f -n 50 /var/log/nginx/error.log
  ```

---

## Part 5: Dedicated Software User Guide Slugs (Email & External Website Linking)

Every software application in the portal has a permanent, dedicated URL slug. You can pass these direct links in emails, share them in support tickets, or embed them into external software navigation bars.

### 5.1 Standard Slugs for Default Falgoon Systems

| Software Application | Portal Purpose | Dedicated Shareable Slug Link |
|---|---|---|
| **Falgoon Nursery Admin System** | Multi-Tenant AI Assistant & IAM | `https://your-domain.com/?app=nursery-admin` |
| **Falgoon Nursery Parent Portal** | Daily logs, photo permissions, fees | `https://your-domain.com/?app=parent-portal` |
| **Falgoon Executive Nursery Portal** | Business intelligence & EYFS ratios | `https://your-domain.com/?app=executive-portal` |
| **Falgoon Corporate Website** | Public admissions & nursery tours | `https://your-domain.com/?app=corporate-website` |

*Note: Hash-based routing is also supported automatically on static hosts: `https://your-domain.com/#/guide/nursery-admin`.*

### 5.2 Deep-Linking to Specific User Guide Chapters

To email or link to an exact article (e.g. Chapter 7: Knowledge Bases or Chapter 8: Live Handoff):
```text
https://your-domain.com/?app=nursery-admin&article=art-knowledge-bases
https://your-domain.com/?app=nursery-admin&article=art-chatbot
https://your-domain.com/?app=parent-portal&article=art-parent-payments
```

### 5.3 One-Click Sharing in the Portal
- **On the Homepage:** Every software card features a **"Share"** button and a **"Copy Link"** button that immediately copies the permanent slug URL.
- **In the Documentation Reader:** Click **"Share Guide"** in the top bar, or click **"Share Article"** at the top of any walkthrough to copy the link or launch an email pre-filled with the guide title and URL.
- **In the Admin CMS:** When adding a new software card, administrators can specify a custom slug (e.g., `/?app=staff-attendance`) which instantly becomes available across the web.

### 5.4 External Website Embed Snippet
To link to a software user guide directly from your corporate website or parent app header:
```html
<a href="https://your-domain.com/?app=nursery-admin" target="_blank" rel="noopener noreferrer">
  📖 View Nursery Admin User Guide
</a>
```

---

## Summary Checklist

| Step | Local (VS Code) | Production (Ubuntu) |
|---|---|---|
| **Node.js** | Install Node.js 20+ LTS | `curl -fsSL https://deb.nodesource.com/setup_20.x \| sudo bash -` |
| **Dependencies** | `npm install` | `npm install` |
| **Run Command** | `npm run dev` | `npm run build` |
| **Web Server** | Built-in Vite Dev Server | Nginx (`/var/www/falgoon-docs/dist`) |
| **Port** | `http://localhost:3000` | Port 80 (HTTP) & 443 (HTTPS) |
| **Slugs** | `/?app=nursery-admin` | `https://your-domain.com/?app=nursery-admin` |
| **Security** | Local sandbox | Let's Encrypt SSL + UFW Firewall |

For further technical support or questions regarding Falgoon nursery software integrations, consult the **System Glossary** or the **Troubleshooting Matrix** within the documentation hub.
