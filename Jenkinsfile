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
    
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    
    stage('Deploy to Staging') {
      steps {
        echo 'Deploying to staging environment...'
        // Example deployment commands:
        // sh 'rsync -avz dist/ user@staging-server:/var/www/app/'
        // sh 'ssh user@staging-server "pm2 restart app"'
        // Or use Docker:
        // sh 'docker build -t note-app:staging .'
        // sh 'docker push note-app:staging'
        echo 'Deployment to staging completed!'
      }
    }
    
    stage('Deploy to Production') {
      when {
        branch 'main'
      }
      steps {
        input message: 'Deploy to production?', ok: 'Deploy'
        echo 'Deploying to production environment...'
        // Example production deployment:
        // sh 'rsync -avz dist/ user@prod-server:/var/www/app/'
        // sh 'ssh user@prod-server "pm2 restart app"'
        // Or use Docker:
        // sh 'docker build -t note-app:latest .'
        // sh 'docker push note-app:latest'
        // sh 'kubectl apply -f k8s/deployment.yaml'
        echo 'Deployment to production completed!'
      }
    }
  }
  
  post {
    success {
      echo '✅ Pipeline completed successfully!'
      // Email notification for success
      // emailext (
      //   subject: "✅ SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      //   body: """
      //     <p>Build succeeded!</p>
      //     <p>Job: ${env.JOB_NAME}</p>
      //     <p>Build Number: ${env.BUILD_NUMBER}</p>
      //     <p>Check console output at: ${env.BUILD_URL}</p>
      //   """,
      //   to: 'your-email@example.com',
      //   mimeType: 'text/html'
      // )
    }
    failure {
      echo '❌ Pipeline failed!'
      // Email notification for failure
      // emailext (
      //   subject: "❌ FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      //   body: """
      //     <p>Build failed!</p>
      //     <p>Job: ${env.JOB_NAME}</p>
      //     <p>Build Number: ${env.BUILD_NUMBER}</p>
      //     <p>Check console output at: ${env.BUILD_URL}</p>
      //   """,
      //   to: 'your-email@example.com',
      //   mimeType: 'text/html'
      // )
    }
    always {
      echo 'Cleaning up workspace...'
      cleanWs()
    }
  }
}
