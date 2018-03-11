pipeline {
    agent { docker { image 'node:8.9' } }
    stages {
        stage('build') {
            steps {
                sh 'echo "Hello World"'  
                sh 'npm --version'
            }
        }
        post {
        always {
            echo 'Executou ws....'
        }
        success {
            echo 'Sucesso Ws!'
        }
        failure {
            echo 'Falha Ws!!!'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
    }
}
