# Command line client for ZeroMQ Base-85 encoding
FROM        mhart/alpine-node:latest
MAINTAINER  Bjoern Kimminich <docker.com@kimminich.de>

RUN npm install z85-cli -g

CMD /bin/bash