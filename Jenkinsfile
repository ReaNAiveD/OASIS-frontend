pipeline {
    agent any

    stages {
        stage("build") {
            agent {
                docker {
                    image 'node:12'
                }
            }
            steps {
                sh 'npm install && npm run build'
                stash includes: 'dist/**', name: 'distfiles'
            }
        }

        stage("build image") {
            options { timeout(time: 15, unit: 'MINUTES') }
            steps {
                script {
                    unstash 'distfiles'
                    sh 'ls -l -R'
                    sh 'pwd'
                    dockerImage = docker.build "justdevnoops/frontend-oasis:$BUILD_NUMBER"
                    sh './clear-deploy.sh'
                    sh 'docker run --name frontend-oasis -d -p 8088:80 justdevnoops/frontend-oasis:$BUILD_NUMBER'
                }
            }
        }
    }
}