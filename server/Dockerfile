FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /usr
COPY . ./
RUN yarn install
RUN yarn build
EXPOSE 4000
CMD ["yarn", "start"]
