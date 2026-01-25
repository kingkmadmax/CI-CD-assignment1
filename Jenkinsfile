pipeline {
  agent any

  stages {
    stage('Setup Node.js') {
      steps {
        sh '''
          # Install Node.js if not present
          if ! command -v node &> /dev/null; then
            curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
            apt-get install -y nodejs
          fi
          node --version
          npm --version
        '''
      }
    }
    
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}
