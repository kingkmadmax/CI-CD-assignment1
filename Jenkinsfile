pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    
    stage('Test Stage') {
      steps {
        sh 'npm test -- --run'
      }
    }
  }
}
