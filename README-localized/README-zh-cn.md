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
description: "GifMe 是一个 Outlook 加载项，它演示与 Outlook 加载项的第三方集成（使用 Giphy API）。"
---

# GifMe

**GifMe** 是一个 Outlook 加载项，它演示与 Outlook 加载项的第三方集成（使用 [Giphy API](https://github.com/giphy/GiphyAPI)）、如何将图像和文本插入到 Outlook 项、如何利用 [Outlook 加载项命令](https://msdn.microsoft.com/library/office/mt267546.aspx)，以及如何使用 [Office UI Fabric](http://dev.office.com/fabric) 来获取 Office 外观。

![GifMe gif](/readme_assets/demo.gif)

## 先决条件
* 需要使用 [npm](https://www.npmjs.com/)（节点包管理器）安装开发依赖项。
* 需要使用 [Bower](http://bower.io/) 安装前端依赖项。 
* [Gulp](http://gulpjs.com/) 用作任务运行程序，包括在开发服务器上为应用程序提供服务。
* Office 365 帐户。如果你没有该帐户，可以[参加 Office 365 开发人员计划并获取为期 1 年的免费 Office 365 订阅](https://aka.ms/devprogramsignup)。

## 配置加载项
1. 克隆此存储库。
2. 运行 `npm install` 以安装 npm 和 Bower 依赖项以及 jQuery typings。
3. 运行 `npm start`，以便使用 Gulp 从本地为应用程序提供服务。
4. 转到 [mail.office365.com](http://mail.office365.com) 并使用你的 Office 365 帐户登录。
5. 单击右上角的齿轮图标，然后选择“*管理加载项*”。
6. 单击加号图标，然后选择“*从文件添加*”。
7. 浏览到此存储库文件夹，然后选择 *manifest.xml*。
8. 随后完成向导（“*下一步*”、“*安装*”、“*确定*”），使该加载项在 Office 365 帐户上可用。
9. 最后，必须在浏览器中打开[应用](https://localhost:8443/appcompose/home/home.html)，并信任 `localhost:8443` 的证书。如果计算机不信任该证书，则加载项不会运行。

## 在 Outlook 网页版中运行加载项
1. 安装加载项后，转到 [mail.office365.com](mail.office365.com)。 
2. 单击“*新建*”以打开邮件撰写窗格。
3. 单击“*加载项*”（在“*收件人*”行的正上方），查看所有可用的加载项。
4. 单击 *GifMe* 以启动该加载项。

## 在 Windows 版 Outlook 中运行加载项
1. 安装加载项后，重新启动 Outlook。 
2. 单击“*新建电子邮件*”以打开邮件撰写窗口。
3. 在功能区中，单击标签为“*搜索所有 GIF*”的加载项命令按钮，以启动该加载项。

  > 注意：如果是在 localhost 上运行加载项，则可能会看到“**已取消到该网页的导航。**”这一消息。单击“*刷新页面。*”，然后选择“*继续访问此网站*”以启动加载项。

## 问题和意见
* 如果有有关此示例的任何反馈或问题，请[在此存储库中记录问题](https://github.com/OfficeDev/Outlook-Add-in-GifMe/issues)。
* 请在 [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins) 上提问有关 Microsoft Graph 的问题。另外，别忘了使用 [office-addins] 或 [outlook-addin] 来标记你的问题。

## 其他资源
* [Yeoman 生成器](https://github.com/OfficeDev/generator-office) - 生成与 Microsoft Office 相关的项目（包括加载项）的 Yeoman 生成器。本项目便是使用该生成器生成的。
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - 用于生成 Office 365 体验的前端框架。本项目使用 Fabric 来获取 Office 的外观。 
* [dev.office.com](http://dev.office.com) - 查找与 Office 开发相关的文档、示例和其他有用信息。
* [在 Outlook 加载项清单中定义加载项命令](https://msdn.microsoft.com/library/office/mt267547.aspx) - 一篇 MSDN 文章，介绍了要在应用清单中包含哪些内容，以便充分利用加载项命令。

## 版权信息
版权所有 (c) 2015 Microsoft。保留所有权利。

此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
