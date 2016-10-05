# Command line client for ZeroMQ Base-85 encoding
FROM        node:4-onbuild
MAINTAINER  Bjoern Kimminich <docker.com@kimminich.de>

RUN npm install z85-cli -g

CMD /bin/bash