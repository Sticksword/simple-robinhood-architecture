# docs

Running in plain old terminal process:

``` bash
pipenv run python server/main.py
```

To view available routes:

``` bash
FLASK_APP=server/main.py pipenv run flask routes
```

To build a docker container:

``` bash
docker build -f docker/Dockerfile --tag sticksword/simdaq:0.1 .
```

[Dockerfile reference](https://docs.docker.com/engine/reference/builder/)

Then to run the newly built container:

``` bash
docker run --publish 5000:5000 simdaq:0.1
```

[Building and running your image](https://docs.docker.com/get-started/part2/)

Creating requirements.txt for container image:

``` bash
pipenv run pip freeze > requirements.txt
```

Deploying built image to Docker Hub:

``` bash
docker push sticksword/simdaq:0.1
```

Deploying container to Minikube:

``` bash

```

Our Ingress resource acts like an nginx load balancer, guiding traffic to the correct pods.
