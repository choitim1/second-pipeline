FROM cypress/browsers:node16.5.0-chrome94-ff93

WORKDIR /dockertest
COPY package.json .
COPY package-lock.json .
COPY cypress.config.js .
COPY cypress .
RUN npm install
ENTRYPOINT ["npx","cypress","run"]
CMD [""]
