FROM node:12.17-alpine3.9

ENV NODE_PATH dist/src

RUN yarn global add @nestjs/cli

WORKDIR /api

RUN apk update && \
  apk upgrade && \
  apk add git

CMD ["yarn", "start"]
