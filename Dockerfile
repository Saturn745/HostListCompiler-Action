FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i @adguard/hostlist-compiler

CMD [ "sh", "entrypoint.sh" ]