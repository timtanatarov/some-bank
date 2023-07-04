FROM node:18-alpine as node
WORKDIR /app
COPY *.json *.lock ./

RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=node /app/build /usr/share/nginx/html
COPY /react/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
