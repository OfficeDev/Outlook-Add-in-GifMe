---
author: rick-kirkham
ms.author: rickki
ms.topic: include
ms.service: microsoft-365
ms.subservice: developer
ms.date: 11/11/2025
---

## Apps for Microsoft 365 icons

The app package for any App for Microsoft 365 must include two icons that represent the extension in several places including the following: 

- The app stores in the various Microsoft 365 applications, such as the Teams app store.
- The **Manage your apps** page that can be accessed from various Microsoft 365 applications.
- The app bars of Teams, Outlook, and the Microsoft 365 Copilot application. 

One of these must be a color icon and the other an outline icon and both must be PNG format. These icons must meet certain size requirements. This article specifies the requirements and best practices for designing these icons.

### Balanced layout

The icons are intended to create a uniform layout. These guidelines help you create your app icon.

:::image type="content" source="../media/app-icon-balanced-layout.png" alt-text="Diagram that shows the uniform layout for app icons.":::

### Creating your assets

Microsoft 365 needs two assets during app submission to generate the icons.

:::image type="content" source="../media/app-icon-asset-needed.png" alt-text="Diagram that shows the two assets to generate app icons.":::

|Counter|Description|
|----------|-----------|
|1|A full bleed PNG format at 192 x 192 pixels. Utilize the full asset space as the background. This is used, for example, in the Teams Store or fly-outs.|
|2|A default or rest PNG format icon at 32 x 32 pixels. This icon is used as **rest/default** state in the app bar and other locations in the product. |

