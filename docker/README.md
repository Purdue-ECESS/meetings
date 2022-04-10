# Getting Started with Docker
You can install Docker by using this link. https://docs.docker.com/get-docker/

# What is Docker
Docker is a development tool that helps software developers isolate their program and run it. It is like
having a second computer just to test that your code will work on all computer. This is useful because
before dockers, if one was to create another instance of their program, it would take weeks to be 
able to debug why their program will not work on their new server. As a result, Docker is like testing 
your code on another computer while using the same computer. It utilitzes the same resources as your machine,
unlike a virtual machine, and it helps create an isolated environment for you to develop and test your code.

# Who uses Docker
Literally everybody. From the top tech computers, to even your professor, if you take ECE 468. They will tell
you to install a docker container with all the required libraries to do the lab. 

# Let's get started
In this directory, there are three repository.

## 1. alexa-docker: Teaches you to create a seperate environment to build a program.
How to build
```bash
$ docker build . -t alexa-docker
```


## 2. nextjs-docker: Teaches you to create a seperate environment to run a website.
```bash
$ docker build . -t nextjs-docker
```

## 3. node-docker: Teaches you to create a seperate environment to run server code.
Building Docker Container
```bash
$ docker build . -t node-docker
```
Running Docker Container
```bash
$ docker run -d --env-file env.list \
            -v dir:/usr/src/bucket \
            --name node-docker \
            --restart always \
            -p 2000:8000 \
            -p 2001:8001 \
            -p 2002:8002/udp \
            node-docker"
```

