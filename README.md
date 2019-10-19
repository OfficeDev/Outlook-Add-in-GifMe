---
page_type: sample
products:
- office-outlook
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 1/19/2016 11:09:19 AM
description: "GifMe is an Outlook add-in that demonstrates third-party integration (using the Giphy API) with Outlook add-ins."
---

# GifMe

**GifMe** is an Outlook add-in that demonstrates third-party integration (using the [Giphy API](https://github.com/giphy/GiphyAPI)) with Outlook add-ins, how to insert images and text into Outlook items, how to take advantage of [add-in commands for Outlook](https://msdn.microsoft.com/library/office/mt267546.aspx), and how to get an Office look and feel using [Office UI Fabric](http://dev.office.com/fabric).

![GifMe gif](/readme_assets/demo.gif)

## Prerequisites
* [npm](https://www.npmjs.com/), Node Package Manager, is required to install dev dependencies.
* [Bower](http://bower.io/) is required to install front-end dependencies. 
* [Gulp](http://gulpjs.com/) is used as a task runner, including serving the application on a development server.
* An Office 365 account. If you don't have one, you can [join the Office 365 Developer Program and get a free 1 year subscription to Office 365](https://aka.ms/devprogramsignup).

## Configure the add-in
1. Clone this repository.
2. Run `npm install` to install npm and Bower dependencies, as well as jQuery typings.
3. Run `npm start` to serve the application locally using Gulp.
4. Go to [mail.office365.com](http://mail.office365.com) and sign in with your Office 365 account.
5. Click the gear icon on the upper right, then choose *Manage add-ins*.
6. Click the plus icon, then choose *Add from a file*.
7. Browse to this repository folder and choose *manifest.xml*.
8. Then complete the wizard (*Next*, *Install*, *OK*) to make the add-in available on your Office 365 account.
9. Finally, you'll have to open the [app](https://localhost:8443/appcompose/home/home.html) in a browser and trust the certificate for `localhost:8443`. The add-in won't run if your computer doesn't trust it.

## Run the add-in in on the web
1. After installing the add-in, go to [mail.office365.com](mail.office365.com). 
2. Click *New* to open the message composition pane.
3. Click *Add-ins*, directly above the *To* line, to view all available add-ins.
4. Click *GifMe* to start the add-in.

## Run the add-in in Outlook for Windows
1. After installing the add-in, restart Outlook. 
2. Click *New Email* to open a message composition window.
3. In the ribbon, click the add-in command button labeled *Search all the GIFs* to start the add-in.

  > Note: If you're running the add-in on localhost, you may see a **Navigation to the webpage was canceled.** message. Click *Refresh the page.* and then *Continue to this website* to start the add-in.

## Questions and comments
* Please [log an issue in this repository](https://github.com/OfficeDev/Outlook-Add-in-GifMe/issues) with any feedback or questions about this sample.
* Please ask questions about Microsoft Graph on [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Don't forget to tag your questions with [office-addins] or [outlook-addin].

## Additional resources
* [Yeoman generator](https://github.com/OfficeDev/generator-office) - Yeoman generator for building Microsoft Office related projects (including add-ins). This project was built using it.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - The front-end framework for building experiences for Office 365. This project uses Fabric to get an Office look and feel. 
* [dev.office.com](http://dev.office.com) - Find documentation, samples, and other helpful information relevant to Office development.
* [Define add-in commands in your Outlook add-in manifest](https://msdn.microsoft.com/library/office/mt267547.aspx) - A MSDN article explaining what to include in your app's manifest to take advantage of add-in commands.

## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
