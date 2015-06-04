# IMCI (Integrated Management of Childhood Illness) Nurse Training Appication
The purpose of our IMCI Nurse Training Application is to help Nurses in Capetown, South Africa gain knowledge and skills to help them conduct proper medical assessments, make accurate diagnoses, and deliver appropriate treatments.  The application with be provided on a tablet, and will give Nurses the opportunity to learn about the IMCI approach to medical practice (with a particular focus on child care), do case studies, and test their knowledge by playing a multiple choice game.

## Current Features
* Create personal account with username and password
* Log in with username and password
* Introduction to IMCI
  *  Rationale for an integrated approach
  *  IMCI objectives, components, and interventions
  *  Integrated case management as the core IMCI intervention
  *  IMCI benefits
  *  Principles of the integrated clinical case management guidelines
  *  Steps in integrated case management
* 13 Interactive case studies with personal feedback to each response
* Interactive multiple choice game.  Timed and scored.  Play on 8 topics including:
  *  Ear Problems
  *  Measles
  *  Malaria
  *  General Danger Signs
  *  Pneumonia
  *  Wheeze
  *  Diarrhoea
  *  Meningitis


+## System Requirements
+* Android 4.4+ (KitKat)
+* iOS 8.0.0+
+* AngularJS 1.3+
+* Node.js 0.12.0+
+* Steroids
 
 ## Download and Installation
-1. Get source code from the github: `git clone https://github.com/eecs394-spr15/ProjectCapetown.git`
+
+1. Get source code from the github. Run this command in your terminal/cmd: `git clone https://github.com/eecs394-spr15/ProjectCapetown.git` 
 2. Install the Steroids tooling. Head on over to the [Install Wizard](https://academy.appgyver.com/installwizard) page and follow the instructions there.
-3. Using the command `cd` to the dirctory ProjectCapetown, then enter the following command: `steroids connect`
-4. Then the Steroids CLI will open up the Connect Screen in a new browser window. To run your app on a real device, all you have to do is open the AppGyver Scanner you installed previously and scan the displayed QR code. The Scanner app will then start your app.
+3. Using the command `cd` to navigate to the application directory 'ProjectCapetown'.
+4. Run `steroids update` if it is your first time.
+5. Run `steroids connect`.    
+6. Then the Steroids CLI will open up the Connect Screen in a new browser window. To run your app on a real device, all you have to do is open the AppGyver Scanner you installed previously and scan the displayed QR code. The Scanner app will then start your app.
 
 ## Build and Deploy
 - [Deploying to clould](http://docs.appgyver.com/tooling/build-service/build-settings/deploying-to-cloud/)
 @@ -24,6 +35,8 @@ The IMCI Nurse Training Application is... (Ben will complete this)
 - [iOS build types](http://docs.appgyver.com/tooling/build-service/build-settings/ios-build-types/)
 
 ## Going Forward
+* Build other types of games.
+* Implement a better way of adding new case materials
 
 ## Limitations of the app
+* This application was built to run on android tablets to train nurses in Cape Town. One of the major restrictions was not using WIFI. Therefore, we have saved all of the contents inside our application. It is much harder for the application managers to change contents of this application since they would have to reprogramm every tablet (no updates via WIFI).
