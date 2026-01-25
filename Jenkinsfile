pipeline {
  agent any

  tools {
    nodejs 'NodeJS'  // This references the NodeJS installation configured in Jenkins
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}
