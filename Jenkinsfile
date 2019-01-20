pipeline {
    agent any 
    stages {
        stage('Checkout') { 
            steps {
                checkout scm
            }
        }
        stage('Build& Deploy') {
            steps {
                sh '''npm install
                npm run start'''
            }
        }
    }
}
