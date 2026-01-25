# CI/CD Pipeline Configuration

## Pipeline Stages

This Jenkins pipeline includes the following stages:

### 1. **Install Dependencies**
- Runs `npm install` to install all project dependencies

### 2. **Run Tests**
- Executes `npm test -- --run` to run all Vitest unit tests
- Pipeline fails if any tests fail

### 3. **Build**
- Runs `npm run build` to create production-ready build
- Generates optimized static files in the `dist/` directory

### 4. **Deploy to Staging**
- Automatically deploys to staging environment after successful build
- Currently configured with placeholder commands
- **To enable**: Uncomment and configure the deployment commands in the Jenkinsfile

### 5. **Deploy to Production**
- Only runs on the `main` branch
- Requires manual approval before deploying
- Prompts user with "Deploy to production?" confirmation
- **To enable**: Uncomment and configure the production deployment commands

## Email Notifications

The pipeline includes email notification support for build status.

### Setup Email Notifications

1. **Install Email Extension Plugin** in Jenkins:
   - Go to **Manage Jenkins** → **Manage Plugins**
   - Search for "Email Extension Plugin"
   - Install and restart Jenkins

2. **Configure SMTP Settings**:
   - Go to **Manage Jenkins** → **Configure System**
   - Scroll to **Extended E-mail Notification**
   - Configure:
     - SMTP server (e.g., `smtp.gmail.com`)
     - SMTP port (e.g., `587` for TLS)
     - Credentials (add your email and app password)
     - Default recipients

3. **Enable Notifications in Jenkinsfile**:
   - Uncomment the `emailext` blocks in the `post` section
   - Replace `'your-email@example.com'` with your actual email address

### Email Notification Examples

**Success Email:**
```
Subject: ✅ SUCCESS: Job 'ci_cd_assiment [42]'
Body: Build succeeded!
      Job: ci_cd_assiment
      Build Number: 42
      Check console output at: http://jenkins-url/job/ci_cd_assiment/42/
```

**Failure Email:**
```
Subject: ❌ FAILED: Job 'ci_cd_assiment [43]'
Body: Build failed!
      Job: ci_cd_assiment
      Build Number: 43
      Check console output at: http://jenkins-url/job/ci_cd_assiment/43/
```

## Deployment Configuration

### Staging Deployment Options

**Option 1: SSH/Rsync**
```groovy
sh 'rsync -avz dist/ user@staging-server:/var/www/app/'
sh 'ssh user@staging-server "pm2 restart app"'
```

**Option 2: Docker**
```groovy
sh 'docker build -t note-app:staging .'
sh 'docker push your-registry/note-app:staging'
sh 'ssh user@staging-server "docker pull your-registry/note-app:staging && docker-compose up -d"'
```

### Production Deployment Options

**Option 1: SSH/Rsync**
```groovy
sh 'rsync -avz dist/ user@prod-server:/var/www/app/'
sh 'ssh user@prod-server "pm2 restart app"'
```

**Option 2: Docker + Kubernetes**
```groovy
sh 'docker build -t note-app:latest .'
sh 'docker push your-registry/note-app:latest'
sh 'kubectl apply -f k8s/deployment.yaml'
sh 'kubectl rollout status deployment/note-app'
```

**Option 3: Cloud Platforms**
- **AWS S3 + CloudFront**: `aws s3 sync dist/ s3://your-bucket/ --delete`
- **Netlify**: `netlify deploy --prod --dir=dist`
- **Vercel**: `vercel --prod`

## Running the Pipeline

1. Push changes to GitHub
2. Jenkins automatically triggers the pipeline
3. Pipeline runs through all stages
4. For production deployment, manually approve when prompted
5. Receive email notification on completion

## Troubleshooting

- **Build fails**: Check console output for errors
- **Tests fail**: Run `npm test` locally to debug
- **Deployment fails**: Verify server credentials and network access
- **No email received**: Check SMTP configuration and spam folder
