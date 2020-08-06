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

# add and install requirements
# COPY requirements.txt .
RUN pip install -r requirements.txt

# add entrypoint.sh
# COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]



# The main command to run server when the container starts
EXPOSE 5000
CMD ["python", "server/main.py"]