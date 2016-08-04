FROM yohayg/gartner-base
MAINTAINER Yohay <yohayg@gmail.com>

RUN cd /home/ubuntu/app/gartner ; npm install
RUN cd /home/ubuntu/app/gartner ; bower --allow-root install
RUN cd /home/ubuntu/app/gartner ; npm install -g gulp
RUN cd /home/ubuntu/app/gartner ; bundle
#RUN cd /home/ubuntu/app/gartner ; npm start


# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /home/ubuntu/app/gartner
ADD . /home/ubuntu/app/gartner

EXPOSE 8080

CMD ["npm", "start"]