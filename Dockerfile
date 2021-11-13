FROM node:12.22.1-alpine as build-step
WORKDIR /app
#EXPOSE 8000 9000

#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
#COPY package-lock.json ./
#RUN npm install --silent
RUN npm install
# add app
COPY . ./
RUN npm run build
# RUN npm install react-scripts@3.4.1 -g --silent

# start app
#CMD ["npm", "run", "serve"]

# Stage 2

#FROM nginx:1.17.1-alpine
FROM nginx
EXPOSE 80
#WORKDIR /src
COPY --from=build-step /app/public /usr/share/nginx/html
COPY --from=build-step /app/nginxconfig/default.conf /etc/nginx/conf.d/default.conf

