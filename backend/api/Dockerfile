FROM node:18
WORKDIR /myapp

COPY src/package*.json .

RUN npm install

COPY  src/ ./

EXPOSE 5432

CMD [ "node", "app.js"]
# CMD ["/bin/ls", "-lR", "controllers" ]