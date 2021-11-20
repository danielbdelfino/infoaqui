FROM node:14 as build-step
WORKDIR /app
#EXPOSE 8000 9000

ENV PATH /app/node_modules/.bin:$PATH
# RUN apk add --no-cache --virtual .gyp \
#     python \
#     make \
#     g++

# RUN apk update && \
#     apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat && \
#     apk add git && \
#     apk add python && \
#     apk add util-linux \
#     rm -rf /var/cache/apk/*

# RUN apt-get update -y && \
#     apt-get -y install python

# Add user so we don't need --no-sandbox.
# RUN addgroup -S appgroup && adduser -S pptruser -G appgroup
    # && mkdir -p /home/pptruser/Downloads \
    # && chown -R pptruser:pptruser /home/pptruser \
    # && chown -R pptruser:pptruser /usr/src/app \
    # && chown -R pptruser:pptruser /usr/local/lib/node_modules

# Run everything after as non-privileged user.
# USER pptruser
# RUN npm -g config set user root
# RUN npm install --global gatsby --no-optional gatsby@^3.0.0

# RUN apt-get update

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
#RUN npm install --silent
# COPY . ./
# RUN npm install
# add app
# COPY . ./
# RUN npm run build
# CMD ["npm", "run", "serve"]
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

