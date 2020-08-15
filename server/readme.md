# docs

The client will be built into a static folder and served from this Flask server app.

Running in plain old terminal process:

``` bash
pipenv run python server/main.py
```

To build a docker container:

``` bash
docker build -f docker/Dockerfile --tag sticksword/budget-robinhood-server:0.1 .
```

[Dockerfile reference](https://docs.docker.com/engine/reference/builder/)

Then to run the newly built container:

``` bash
docker run --publish 5000:5000 budget-robinhood-server:0.1
```

[Building and running your image](https://docs.docker.com/get-started/part2/)

Creating requirements.txt for container image:

``` bash
pipenv run pip freeze > requirements.txt
```

Deploying built image to Docker Hub:

``` bash
docker push sticksword/budget-robinhood-server:0.1
```

Deploying container to Minikube:

``` bash
kubectl apply -f kubernetes/deployment.yml
```

Our Ingress resource acts like an nginx load balancer, guiding traffic to the correct pods.

[troubleshooting ingress](https://kubernetes.github.io/ingress-nginx/troubleshooting/)
