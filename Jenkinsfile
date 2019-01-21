pipeline {
    agent any 
    stages {
        stage('Checkout') { 
            steps {
                step([$class: 'WsCleanup'])
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh '''npm install
                npm run build'''
            }
        }
       stage('Deploy') {
            steps {
                sh '''cd /opt/apache-tomcat-8.5.37/bin
./shutdown.sh
cp -rf /var/lib/jenkins/workspace/Test_Pipeline_FrontEnd/bundle /opt/apache-tomcat-8.5.37/webapps/
export JENKINS_NODE_COOKIE=dontKillMe
./startup.sh
'''
            }
        }
    }
} 
