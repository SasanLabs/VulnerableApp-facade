FROM --platform=$BUILDPLATFORM node:14 as BUILDER
WORKDIR /usr/src/app
COPY ./facade-app/package.json .
COPY ./facade-app/package-lock.json .
RUN npm install 
COPY ./facade-app .
RUN npm run build

FROM openresty/openresty:alpine
COPY --from=BUILDER /usr/src/app/build /usr/share/nginx/html/
COPY nginx.conf /usr/local/openresty/nginx/conf
COPY lua-modules/vulnerableapp_utility.lua ./vulnerableapp_utility.lua
