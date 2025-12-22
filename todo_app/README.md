# Log Output

## Exercises

### Exercise 1.2

- The application is built using Node.js. Source code is available [here](./).
- The image pushed to Docker Hub is available at [pplx/todo_app](https://hub.docker.com/r/pplx/todo_app).
- Docker commands used in this exercise are:
    - ```docker build -t pplx/todo_app:1.2 .```
    - ```docker push pplx/todo_app:1.2```
- Kubernetes commands used in this exercise are:
    - ```kubectl create deployment todo-app --image=pplx/todo-app:1.2```
    - ```kubectl get deployments```
    - ```kubectl get pods```
    - ```kubectl logs -f todo-app-6f5775c755-nxkrn```
![Run](assets/1.2.png)