# FROM node:current-alpine3.12

# ENV TZ="Europe/Paris"
# COPY ./ /home/node/app/
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.2/wait /wait
# RUN chmod +x /wait
# WORKDIR /home/node/app/
# RUN npm install

# CMD sh -c "/wait && npm start"

FROM node:16 as base

WORKDIR /home/node/app

# COPY ./backend/package.json ./

# COPY ./backend/.env ./

# COPY package.json ./

COPY . /home/node/app

CMD [ "cd backend && yarn install" ] 