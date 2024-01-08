pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'https://index.docker.io/v1/'
        DOCKERHUB_CREDENTIALS = 'dockerhub'
        imageTag = "latest-${BUILD_NUMBER}"
        DOCKER_IMAGE = "algabrizaid/reactapp:${imageTag}"
    }

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scmGit(
                    branches: [[name: 'main']],
                    extensions: [],
                    userRemoteConfigs: [[credentialsId: 'git', url: 'https://github.com/zaidgabri/ui.git']]
                )
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm audit fix --force'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                echo "Test"
            }
        }

        stage('Build and Push Docker Image') {
            environment {
                DOCKERFILE_LOCATION = "Dockerfile"
                REGISTRY_CREDENTIALS = credentials('dockerhub')
            }
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                    def dockerImage = docker.image("${DOCKER_IMAGE}")
                    docker.withRegistry('https://index.docker.io/v1/', "dockerhub") {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Clean Up Docker Image') {
            steps {
                script {
                    sh 'docker rmi ${DOCKER_IMAGE}'
                }
            }
        }
    }
}
