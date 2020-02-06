## STAGE 1: Build Angular Application ##

FROM node:latest AS builder

WORKDIR /app


COPY . .

RUN npm install

RUN npm run build --prod


# ## nginx

# FROM nginx:alpine

# COPY --from=builder /app/dist/html-template  /usr/share/nginx/html
