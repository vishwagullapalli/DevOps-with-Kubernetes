# Log Output

## Exercises

### Exercise 1.1

- The application is built using Node.js. Source code is available [here](./).
- The image pushed to Docker Hub is available at [pplx/log_output](https://hub.docker.com/r/pplx/log_output).
- Commands used in this exercise are:
    - ```kubectl create deployment log-output --image=pplx/log_output:1.1```
    - ```kubectl get deployments```
    - ```kubectl get pods```
    - ```kubectl logs -f log-output-76d54848b7-bbn86```
- ![Run](assets/1.1.png)