pipeline {
  agent {
    docker {
      image 'node:22-alpine'
      args '-p 3000:3000'
    }
  }

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

    stage('Deliver') {
  steps {
    sh 'chmod +x jenkins/scripts/*.sh'
    sh './jenkins/scripts/deliver.sh'
    input message: 'Finished using the web site? (Click "Proceed" to continue)'
    sh './jenkins/scripts/kill.sh'
  }
   }
  }
}
