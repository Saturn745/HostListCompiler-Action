FROM node:alpine

WORKDIR /app

COPY ./entrypoint.sh /app/entrypoint.sh

RUN npm i @adguard/hostlist-compiler

CMD [ "sh", "entrypoint.sh" ]