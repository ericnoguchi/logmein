pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') { 
            steps {
                sh 'rm -r /var/www/html/*'
                sh 'cp -R ./build/* /var/www/html'
            }
        }
    }
}