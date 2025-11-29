# Menggunakan image Node.js resmi sebagai base image
FROM node:lts-alpine

# Set working directory di dalam container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 secara global
RUN npm install -g nodemon

# Menyalin seluruh kode sumber ke dalam container
COPY . .

# Mengekspos port yang digunakan oleh aplikasi (misal: 3000)
EXPOSE 3000

# Menggunakan PM2 untuk menjalankan aplikasi Express.js
CMD ["nodemon","index.js"]
