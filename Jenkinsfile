pipeline {                     
    agent any  // run on any available agent

    stages {
        stage('Build') {  // build stage
            steps {
                bat 'echo Building Project'
            }
        }

        stage('Test') {  // test stage
            steps {
                bat 'echo Running Tests'
            }
        }

        stage('Deploy') {  // deploy stage
            steps {
                bat 'echo Deploying Application'
            }
        }
    }
}
