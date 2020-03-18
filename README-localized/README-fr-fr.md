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
description: "GifMe est un complément Outlook qui illustre l’intégration tierce (à l’aide de l’API Giphy) à l'aide de compléments Outlook."
---

# GifMe

**GifMe** est un complément Outlook qui illustre l’intégration tierce (à l’aide de l’[API Giphy](https://github.com/giphy/GiphyAPI)) avec les compléments Outlook, comment insérer des images et du texte dans des éléments Outlook, comment tirer parti des [commandes de complément pour Outlook](https://msdn.microsoft.com/library/office/mt267546.aspx) et comment obtenir une apparence Office en utilisant la [structure de l’interface utilisateur Office](http://dev.office.com/fabric).

![Gif GifMe](/readme_assets/demo.gif)

## Conditions préalables
* [npm](https://www.npmjs.com/), Node Package Manager, est nécessaire pour installer des dépendances de développement.
* [Bower](http://bower.io/) est nécessaire pour installer des dépendances frontales. 
* [Gulp](http://gulpjs.com/) est utilisée en tant qu'exécuteur de tâches, y compris l'utilisation de l’application sur un serveur de développement.
* Un compte Office 365. Si vous n’en avez pas, vous pouvez [participer au programme pour les développeurs Office 365 et obtenir un abonnement gratuit d’un an à Office 365](https://aka.ms/devprogramsignup).

## Configurer le complément
1. Clonez ce référentiel.
2. Exécutez `npm install` pour installer les dépendances npm et Bower, ainsi que les typages de jQuery.
3. Exécutez `npm start` pour servir l’application localement à l’aide de Gulp.
4. Accédez à [mail.office365.com](http://mail.office365.com) et connectez-vous avec votre compte Office 365.
5. Cliquez sur l’icône d’engrenage en haut à droite, puis choisissez *Gérer les compléments*.
6. Cliquez sur l’icône plus, puis sélectionnez *Ajouter à partir d’un fichier*.
7. Parcourez ce dossier de référentiel et sélectionnez *manifest.xml*.
8. Terminez l’Assistant (*Suivant*, *Installer*, *OK*) pour rendre le complément disponible sur votre compte Office 365.
9. Enfin, vous devez ouvrir l'[application](https://localhost:8443/appcompose/home/home.html) dans un navigateur et faire confiance au certificat pour `localhost:8443`. Le complément ne s’exécute pas si votre ordinateur ne l’approuve pas.

## Exécuter le complément sur le web
1. Une fois le complément installé, accédez à [mail.office365.com](mail.office365.com). 
2. Cliquez sur *Nouveau* pour ouvrir le volet composition de message.
3. Cliquez sur *Compléments*, directement au-dessus de la ligne *À*, pour afficher tous les compléments disponibles.
4. Cliquez sur *GifMe* pour démarrer le complément.

## Exécutez le complément dans Outlook pour Windows
1. Une fois le complément installé, redémarrez Outlook. 
2. Cliquez sur *Nouveau courrier* pour ouvrir la fenêtre de composition d’un message.
3. Dans le ruban, cliquez sur le bouton de commande de complément intitulé *Rechercher tous les GIF* pour démarrer le complément.

  > Remarque : Si vous exécutez le complément sur localhost, vous pouvez lire un message indiquant que la **Navigation vers la page web a été annulée**. Cliquez sur *Actualiser la page*, puis *Continuer vers ce site web* pour démarrer le complément.

## Questions et commentaires
* Merci de [signaler tout problème dans ce référentiel](https://github.com/OfficeDev/Outlook-Add-in-GifMe/issues) accompagné de vos commentaires ou questions sur cet exemple.
* Veuillez poser vos questions relatives à Microsoft Graph sur [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). N'oubliez pas de baliser vos questions avec [office-addins] ou [office-addin].

## Ressources supplémentaires
* [Générateur Yeoman](https://github.com/OfficeDev/generator-office) : Générateur Yeoman pour la création de projets relatifs à Microsoft Office (y compris les compléments). Ce projet a été créé à l’aide de celui-ci.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) : Infrastructure frontale permettant de créer des expériences pour Office 365. Ce projet l’utilise pour obtenir « l’apparence » d’Office. 
* [dev.office.com](http://dev.office.com) : trouvez de la documentation, des exemples et d’autres informations utiles relatives au développement d’Office.
* [Définir des commandes de complément dans votre manifeste de complément Outlook](https://msdn.microsoft.com/library/office/mt267547.aspx) : un article MSDN expliquant les éléments à inclure dans le manifeste de votre application pour tirer parti des commandes de complément.

## Copyright
Copyright (c) 2015 Microsoft. Tous droits réservés.

Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
