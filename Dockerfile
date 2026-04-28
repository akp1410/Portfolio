# # -------- Stage 1: Build --------
# FROM node:20-alpine AS build

# WORKDIR /app

# # Copy only package files first (better caching)
# COPY package*.json ./

# # Install dependencies
# RUN npm ci --legacy-peer-deps

# # Copy rest of the code
# COPY . .

# # Build the app
# RUN npm run build

# # -------- Stage 2: Serve --------
# FROM nginx:1.27-alpine

# # Remove default nginx static files
# RUN rm -rf /usr/share/nginx/html/*

# # Copy build output
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]