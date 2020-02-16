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
            steps {
                script {
                    unstash 'distfiles'
                    sh 'ls -l -R'
                    echo "$BUILD_NUMBER"
                }
            }
        }
    }
}