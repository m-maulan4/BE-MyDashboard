# Menggunakan image Node.js resmi sebagai base image
FROM node:lts-alpine

# Set working directory di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm audit fix

# Install PM2 secara global
RUN npm install -g pm2

# Menyalin seluruh kode sumber ke dalam container
COPY . .

# Mengekspos port yang digunakan oleh aplikasi (misal: 3000)
EXPOSE 3000

# Menggunakan PM2 untuk menjalankan aplikasi Express.js
CMD ["pm2-runtime","index.js"]
