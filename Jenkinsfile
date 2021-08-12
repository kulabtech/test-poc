pipeline {
 agent any
 tools{
     maven 'M2_HOME'
      }
     stages{
         stage('CheckoutCode')
          {
            steps
             {
                git credentialsId: 'GIT_CREDS', url: 'https://github.com/shaanu1998/allstates_demo.git' , branch: 'backend'
             }
          }
         stage ('Build') 
         {
            steps 
            {
                sh 'mvn clean package'
            }
        }
        stage('CodeAnalysis') 
         {
            steps 
            {
              withSonarQubeEnv('sonarserver') 
                {
                   sh 'mvn sonar:sonar'
                }
            }
          }
          
         stage("CodeQualityCheck")
          {
           steps
            {
              script
               {
                 timeout(time: 20, unit: 'MINUTES') 
                 {
                   def qg = waitForQualityGate()
                   if (qg.status != 'OK') 
                     {
                       error "Pipeline aborted due to quality gate failure: ${qg.status}"
                     }
                 }
               }
            }
          
          }
          
           stage ('AppDeploy') 
           {
             steps 
             {
               pushToCloudFoundry cloudSpace: 'allstatepoc', credentialsId: 'CF_CREDS', organization: 'testing', selfSigned: 'true', target: 'https://api.169.50.202.75.nip.io',  pluginTimeout: '600'
             }
           }
    }
}
