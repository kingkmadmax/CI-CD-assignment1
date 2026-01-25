pipeline {
  agent {
    docker {
      image 'node:18'
    }
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
  }