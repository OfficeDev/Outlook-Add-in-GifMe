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
description: "GifMe es un complemento de Outlook que muestra la integración de terceros (mediante la API Giphy) con los complementos de Outlook."
---

# GifMe

**GifMe** es un complemento de Outlook que muestra cómo integrar servicios de terceros (mediante la [API de Giphy](https://github.com/giphy/GiphyAPI)) con complementos de Outlook, cómo insertar imágenes y texto en elementos de Outlook, cómo aprovechar los [comandos de complemento de Outlook](https://msdn.microsoft.com/library/office/mt267546.aspx), y cómo obtener una apariencia de Office con [Office UI Fabric](http://dev.office.com/fabric).

![gif GifMe](/readme_assets/demo.gif)

## Requisitos previos
* [npm](https://www.npmjs.com/), el Administrador de paquetes de nodos, es necesario para instalar las dependencias de desarrollo.
* [Bower](http://bower.io/) es necesario para instalar las dependencias front-end. 
* [Gulp](http://gulpjs.com/) se utiliza como ejecutor de tareas, incluyendo el servicio a la aplicación en un servidor de desarrollo.
* Una cuenta de Office 365. Si no tienes ninguno de los dos, puedes[unirte al Programa de Desarrolladores de Office 365 y obtener una suscripción gratuita de 1 año a Office 365](https://aka.ms/devprogramsignup).

## Configurar el complemento
1. Clone este repositorio.
2. Ejecute `npm install` para instalar las dependencias npm y Bower, así como la escritura jQuery.
3. Ejecute `npm start` para dar servicio a la aplicación de forma local mediante Gulp.
4. Vaya a [mail.office365.com](http://mail.office365.com) e inicie sesión con su cuenta de Office 365.
5. Haga clic en el icono de engranaje en la esquina superior derecha y elija *Administrar complementos*.
6. Haga clic en el icono de signo más y luego elija *Agregar desde un archivo*.
7. Vaya a esta carpeta del repositorio y elija *manifest.xml*.
8. Luego complete el asistente (*Siguiente*, *Instalar*, *Aceptar*) para que el complemento esté disponible en su cuenta de Office 365.
9. Por último, tendrá que abrir la [aplicación](https://localhost:8443/appcompose/home/home.html) en un explorador y confiar en el certificado para `localhost:8443`. El complemento no se ejecutará si su ordenador no es de confianza.

## Ejecutar el complemento en la web
1. Después de instalar el complemento, vaya a [mail.office365.com](mail.office365.com). 
2. Haga clic en *Nuevo* para abrir el panel de composición de mensajes.
3. Haga clic en *Complementos*, directamente encima de la línea *Para* y así ver todos los complementos disponibles.
4. Haga clic en *GifMe* para iniciar el complemento.

## Ejecutar el complemento en Outlook para Windows
1. Después de instalar el complemento, reinicie Outlook. 
2. Haga clic en *Nuevo correo electrónico* para abrir una ventana de composición de mensajes.
3. En la cinta de opciones, haga clic en el botón de comando del complemento denominado *Buscar en todos los GIFs* para iniciar el complemento.

  > Nota: Si está ejecutando el complemento en localhost, es posible que vea un mensaje de **La navegación a la página web se ha cancelado.** Haga clic en *Actualizar la página.* y después, *Continuar a este sitio web* para iniciar el complemento.

## Preguntas y comentarios
* Si lo desea, [Registre un problema en este repositorio](https://github.com/OfficeDev/Outlook-Add-in-GifMe/issues) con cualquier comentario o preguntas acerca de este ejemplo.
* Realice preguntas sobre Microsoft Graph en [Desbordamiento de pila](http://stackoverflow.com/questions/tagged/office-addins). No olvide etiquetar sus preguntas con [office-addins] o [outlook-addin].

## Recursos adicionales
* [Generador de Yeoman](https://github.com/OfficeDev/generator-office): Generador de Yeoman para la creación de proyectos relacionados con Microsoft Office (incluyendo complementos). Este proyecto se compiló utilizándolo.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/): El marco de trabajo front-end para crear experiencias de Office 365. Este proyecto usa Fabric para obtener la apariencia de Office. 
* [dev.office.com](http://dev.office.com): Encuentre documentación, ejemplos y otra información útil relevante para el desarrollo de Office.
* [Definir comandos de complementos en el manifiesto de complemento de Outlook](https://msdn.microsoft.com/library/office/mt267547.aspx): Un artículo en MSDN en el que se explica qué se debe incluir en el manifiesto de la aplicación para aprovechar los comandos de complemento.

## Copyright
Copyright (c) 2015 Microsoft. Todos los derechos reservados.

Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
