pipeline {
 agent any
 tools{
     nodejs 'NodeJS'
      }
     stages{
         stage('CheckoutCode')
          {
            steps
             {
                git credentialsId: 'GIT_CREDS', url: 'https://github.com/shaanu1998/allstates_demo.git', branch: 'main'
             }
          }
          
           stage("Build") 
           {
            steps 
            {
                sh 'npm --version'
                sh 'npm install'
            
            }
        }

          stage ('Deploy') 
           {
             steps 
             {
               pushToCloudFoundry cloudSpace: 'allstatepoc', credentialsId: 'CF_CREDS', organization: 'testing', selfSigned: 'true', target: 'https://api.169.50.202.75.nip.io',  pluginTimeout: '240'
             }
           }

     }
}
