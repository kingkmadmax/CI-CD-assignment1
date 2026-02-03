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

    stage('Deliver') {
      steps {
        sh 'chmod +x jenkins/scripts/*.sh'
        sh './jenkins/scripts/deliver.sh'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }

  post {
    success {
        emailext (
            subject: "✅ Build Success: ${env.JOB_NAME}",
            body: "The build completed successfully.\nBuild Number: ${env.BUILD_NUMBER}",
            to: "your-email@gmail.com"
        )
    }
    failure {
        emailext (
            subject: "❌ Build Failed: ${env.JOB_NAME}",
            body: "The build failed.\nCheck logs in Jenkins.",
            to: "your-email@gmail.com"
        )
    }
  }
}
