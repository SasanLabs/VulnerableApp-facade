FROM openresty/openresty:alpine

COPY nginx.conf /usr/local/openresty/nginx/conf
COPY ./WebContent/static /usr/share/nginx/html/

COPY lua-modules/vulnerableapp_utility.lua ./vulnerableapp_utility.lua