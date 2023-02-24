FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /usr
COPY . ./
RUN yarn install
ENV IS_CONTAINER docker
EXPOSE 3000
CMD [ "yarn", "run", "dev" ]