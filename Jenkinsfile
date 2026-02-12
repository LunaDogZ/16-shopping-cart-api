pipeline {

  environment {
    VERCEL_PROJECT_NAME = 'devops16-quiz1'
    VERCEL_TOKEN = credentials('devops16-vercel-quiz1') 
}
  
   agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: my-builder
            image: node:20-alpine
            command:
            - cat
            tty: true
      '''
    }
  }
  stages {
    stage('Test npm') {
      steps {
        container('my-builder') {
          sh 'npm --version'
          sh 'node --version'
        }
      }
    }
    stage('Build') {
      steps {
        container('my-builder') {
          sh 'npm ci'
        }
      }
    }
    stage('Test Build') {
      steps {
        container('my-builder') {
          sh 'npm run test'
        }
      }
    }
    stage('Deploy') {
      steps {
        container('my-builder') {
          sh 'npm install -g vercel@latest'
          sh '''
            vercel link --project $VERCEL_PROJECT_NAME --token $VERCEL_TOKEN --yes
            vercel --token $VERCEL_TOKEN --prod --confirm
          '''
        }
      }
    }
                                                                          
  }
}