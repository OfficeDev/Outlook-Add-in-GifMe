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

### Color icon architecture

The color app icon dimensions must be 192 x 192 pixels. If you have a logo icon, the logo needs to fit within the 120 x 120 safe area in the center.

The submitted icon must be a full square. Teams automatically applies masking for consistent icon shapes across the app.

:::image type="content" source="../media/app-icon-color-architecture.png" alt-text="Diagram that shows the color app icon dimensions of your logo icon." lightbox="../media/app-icon-color-architecture.png":::

### Icon attributes

#### Colored

:::image type="content" source="../media/app-icon-color-attribute.png" alt-text="Diagram that shows the icon attributes for a colored icon." lightbox="../media/app-icon-color-attribute.png":::

#### White background

:::image type="content" source="../media/app-icon-attribute-white.png" alt-text="Diagram that shows the color attributes for an icon with white background." lightbox="../media/app-icon-attribute-white.png":::

## App icon utilization

Your icons may appear in other places in Microsoft 365 applications, depending on what types of extensions or capabilities are included in your App for Microsoft 365. The following are some examples.

### Personal app

:::image type="content" source="../media/app-icon-personal-app.png" alt-text="Diagram that shows the app icon in personal app.":::

### App flyout

<!-- :::image type="content" source="../media/app-icon-app-flyout.png" alt-text="Diagram that shows app icon in app flyout."::: -->

![Diagram that shows app icon in app flyout.](../media/app-icon-app-flyout.png)

### Bot (channel view)

:::image type="content" source="../media/app-icon-bot-channel-view.png" alt-text="Diagram that shows an app icon in channel view of bot.":::

### Message extension flyout

:::image type="content" source="../media/app-icon-message-extension.png" alt-text="Diagram that shows an app icon in message extension flyout.":::

### Meeting apps flyout

:::image type="content" source="../media/app-icon-meeting-apps.png" alt-text="Diagram that shows an app icon in meeting app flyout.":::

### Meeting U-bar

:::image type="content" source="../media/app-icon-meeting-u-bar.png" alt-text="Diagram that shows an app icon in meeting U-bar.":::

## Best practices

:::row:::
   :::column span="":::
:::image type="content" source="../media/safe-area-do.png" alt-text="Diagram that shows a logo within the safe area.":::

#### Do: Follow the recommendation for safe area (120 x 120)

If you have a logo, keep it within the 120 x 120 safe area inside of the 192 x 192 PNG format icon.

   :::column-end:::
   :::column span="":::
:::image type="content" source="../media/safe-area-dont.png" alt-text="Diagram that shows a logo that is not within the safe area.":::

#### Don’t: Make the icon bigger than the safe area

The following is an example of a logo inside of the PNG format icon that isn't within the safe area. It creates uneven padding (negative space) around the icon.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="":::
:::image type="content" source="../media/round-corners-do.png" alt-text="Diagram that shows an icon with full bleed.":::

#### Do: Provide full bleed for rounded corners

If you have a full bleed image, just upload a square PNG format at 192 x 192. The corners are rounded dynamically.

   :::column-end:::
   :::column span="":::
:::image type="content" source="../media/round-corners-dont.png" alt-text="Diagram that shows an icon with rounder corners.":::

#### Don’t: Round the corners of your icon

Don’t round the corners. Submit at perfect square at 192 x 192, the corners are rounded dynamically.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="":::
:::image type="content" source="../media/icon-without-border-do.png" alt-text="Diagram that shows an upload of icon without border.":::

#### Do: Upload an icon without a border

Border is added automatically. In this case just upload your PNG format without a border, even if it’s on a white background.

   :::column-end:::
   :::column span="":::
:::image type="content" source="../media/icon-without-border-dont.png" alt-text="Diagram that shows an upload of icon with a border.":::

#### Don’t: Add a border

Borders are added dynamically. If you include a border in your PNG format, it results in unwanted duplication on white backgrounds.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="":::
:::image type="content" source="../media/icon-contrast-do.png" alt-text="Diagram that shows an app icon with enough contrast.":::

#### Do: Provide enough contrast

Ensure that your icon has enough contrast against the background. We recommend a ratio of 4.5:1 for best accessibility.

   :::column-end:::
   :::column span="":::
:::image type="content" source="../media/icon-contrast-dont.png" alt-text="Diagram that shows an app icon which is faded.":::

#### Don’t: Fade the icon

Avoid low contrast for your icons. Ensure that the background and icon you use in your PNG format has enough contrast.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="":::
:::image type="content" source="../media/icon-elevate-brand-do.png" alt-text="Diagram that shows an app icon with your brand elevated.":::

#### Do: Elevate your brand

Focus on your brand by using a full flat color as background.

   :::column-end:::
   :::column span="":::
:::image type="content" source="../media/icon-elevate-brand-dont.png" alt-text="Diagram that shows an app icon with your brand in a circle.":::

#### Don’t: Avoid placing your brand icon in a circle

Elevate your brand by keeping the brand icon within the 96 x 96 safe area.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="":::
:::image type="content" source="../media/icon-abbreviate-do.png" alt-text="Diagram that shows an app icon with abbreviation.":::

#### Do: Abbreviate long words in the app icon

If you have a long app name, try to abbreviate so that it’s easier to read when your icon is resized to 32 x 32 size.

   :::column-end:::
   :::column span="":::
:::image type="content" source="../media/icon-abbreviate-dont.png" alt-text="Diagram that shows an app icon with multiple words.":::

#### Don’t: Include multiple words in app icon

Avoid using multiple words on the icon. It's impossible to read the text when the icon is at smaller sizes, for example, 32 x 32 or 36 x 36.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="":::
:::image type="content" source="../media/icon-balance-do.png "alt-text="Diagram that shows a balanced app icon.":::

#### Do: Create balance (96 x 96)

Elevate your brand by keeping balance. Stick to the 96 x 96 safe area for a sense of equilibrium.

   :::column-end:::
   :::column span="":::
:::image type="content" source="../media/icon-balance-dont.png" alt-text="Diagram that shows a skewed or stretched app icon.":::

#### Don’t: Skew or stretch your icon

Keep your icon within the safe area. Don’t stretch your icon in one direction or another.

   :::column-end:::
:::row-end:::
