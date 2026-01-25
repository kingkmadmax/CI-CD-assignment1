pipeline {
  agent any

  stages {
    stage('Check Environment') {
      steps {
        sh '''
          echo "Checking Node.js and npm versions..."
          which node || echo "Node.js not found in PATH"
          which npm || echo "npm not found in PATH"
        '''
      }
    }
    
    stage('Install Dependencies') {
      steps {
        sh '''
          # Try to use npm if available, otherwise skip
          if command -v npm &> /dev/null; then
            npm install
          else
            echo "npm not available - skipping dependency installation"
            exit 1
          fi
        '''
      }
    }
  }
}
