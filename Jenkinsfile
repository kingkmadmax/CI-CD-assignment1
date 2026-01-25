pipeline {
  agent {
    docker {
      image 'node:18-alpine'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
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
