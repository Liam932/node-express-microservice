FROM node:9-alpine

COPY package.json package.json

RUN npm install --production -q

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
