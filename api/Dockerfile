FROM node:10.15.3-alpine as node_base

FROM node_base as deps
WORKDIR /usr/app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

FROM node_base as dev
WORKDIR /usr/app
COPY --from=deps /usr/app/node_modules /usr/app/node_modules
COPY . .
CMD ["yarn", "dev"]