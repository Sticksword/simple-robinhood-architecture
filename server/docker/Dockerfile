# base image
FROM python:3.8.1-slim

# install netcat
RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean

# set working directory
WORKDIR /usr/src/app

# add server app to app dir
COPY . ./

# install requirements
RUN pip install -r requirements.txt

# add entrypoint
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

# The main command to run server when the container starts
EXPOSE 5000
CMD ["python", "server/main.py"]