FROM ubuntu
RUN apt-get update
RUN apt-get install -y nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

ADD conf/default /etc/nginx/sites-available/default

EXPOSE 80

CMD ["nginx"]
