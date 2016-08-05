FROM ubuntu
MAINTAINER Yohay <yohayg@gmail.com>

# install our dependencies and nodejs
RUN apt-get update
RUN apt-get -y install git
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt-get update
RUN apt-get -y install build-essential libssl-dev
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm cache clean
RUN npm install -g bower
RUN apt-get -y install ruby-full
RUN gem install bundler sass
RUN mkdir -p /home/ubuntu/app
RUN cd /home/ubuntu/app ; git clone https://github.com/yohayg/gartner.git
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
