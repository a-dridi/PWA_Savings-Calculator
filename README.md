# PWA Example: Savings Calculator

Create a savings plan for your yearly savings. This app calculates the future saved money amount for n years. 

![Screenshot of Web Application Project Status](https://raw.githubusercontent.com/a-dridi/PWA_Savings-Calculator/master/screenshot.PNG)

The application needs Angular. All needed dependencies are saved in the package.json. This is a progressive web app (PWA) and it can be installed on several devices as an Android App, Windows App, etc.
A build of this application is in the folder "dist".
## Configuration

Please adjust the file "server.js" in the folder "backend" to your server settings. You need to setup a functioning mongoDB server. 

Do also copy the file "emailCredentials.txt.template" to "emailCredentials.txt" (in the folder "credentials") with the adjusted settings for your mail server and account.



## Run

**Start Frontend server:**
`cd frontend`
`ng serve --open`



## Installation (Deployment)

```
npm install
```
```
ng build --prod=true
```

Copy the content of the folder "public" to your server.


## Authors

* **A. Dridi** - [a-dridi](https://github.com/a-dridi/)
* Check licences of dependencies


## Screenshots

![Screenshot 2 of PWA Savings Calculation](https://raw.githubusercontent.com/a-dridi/PWA_Savings-Calculator/master/screenshot2.PNG)
