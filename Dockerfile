FROM node:alpine

WORKDIR /github/workspace

RUN npm i @adguard/hostlist-compiler

CMD [ "sh", "entrypoint.sh" ]