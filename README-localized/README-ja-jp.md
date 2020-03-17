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
description: "GifMe は、Outlook アドインとのサードパーティの統合 (Giphy API を使用) を示す Outlook アドインです。"
---

# GifMe

**GifMe** は Outlook アドインで、サードパーティの Outlook アドインとの統合 ([Giphy API](https://github.com/giphy/GiphyAPI) を使用)、Outlook アイテムに画像とテキストを挿入する方法、[Outlook アドイン コマンド](https://msdn.microsoft.com/library/office/mt267546.aspx)を活用する方法、[Office UI Fabric](http://dev.office.com/fabric) を使用して Office の外観に合わせる方法を示します。

![GifMe gif](/readme_assets/demo.gif)

## 前提条件
* [npm](https://www.npmjs.com/) (ノード パッケージ マネージャー) は、開発の依存関係をインストールするのに必要です。
* [Bower](http://bower.io/) は、フロントエンドの依存関係をインストールするのに必要です。 
* [Gulp](http://gulpjs.com/) は、開発サーバーにアプリケーションをサービスするなど、タスク ランナーとして使用されます。
* Office 365 アカウント。お持ちでない場合は、[Office 365 Developer プログラムに参加して、Office 365 の 1 年間無料のサブスクリプションを取得](https://aka.ms/devprogramsignup)できます。

## アドインを構成する
1. このリポジトリの複製を作成します。
2. `npm install` を実行し、npm と Bower の依存関係および jQuery Typings をインストールします。
3. Gulp を使用してアプリケーションをローカルに提供するために、`npm start` を実行します。
4. [mail.office365.com](http://mail.office365.com) に移動し、Office 365 アカウントでサインインします。
5. 右上隅にある歯車アイコンをクリックし、 [*アドインの管理*] を選択します。
6. プラス記号のアイコンをクリックし、[*ファイルから追加*] を選択します。
7. このリポジトリ フォルダーを参照し、[*manifest.xml*] を選択します。
8. [*次へ*]、[*インストール*]、[*OK*] の順に選択してウィザードを完了し、アドインが Office 365 アカウントで使用できるようにします。
9. 最後に、[アプリ](https://localhost:8443/appcompose/home/home.html)をブラウザーで開き、`localhost:8443` の証明書を信頼する必要があります。この証明書がコンピューターにより信頼されない場合、アドインは実行されません。

## Web 上でアドインを実行する
1. アドインをインストールしたら、[mail.office365.com](mail.office365.com) に移動します。 
2. [*新規*] をクリックして、メッセージ構成ウィンドウを開きます。
3. [*宛先*] 行のすぐ上にある [*アドイン*] をクリックして、使用可能なすべてのアドインを表示します。
4. [*GifMe*] をクリックして、アドインを起動します。

## Outlook for Windows でアドインを実行する
1. アドインをインストールした後、Outlook を再起動します。 
2. [*新規メール*] をクリックして、メッセージ構成ウィンドウを開きます。
3. リボンで、[*すべての GIF を検索*] というラベルのアドイン コマンド ボタンをクリックして、アドインを開始します。

  > 注:localhost でアドインを実行している場合、「**Web ページへの移動が取り消されました。**」というメッセージが表示される場合があります。[*ページの更新*] をクリックします。次に、[*この Web サイトの閲覧を続行する*] をクリックし、アドインを起動します。

## 質問とコメント
* このサンプルに関するフィードバックや質問がある場合は、[このリポジトリに問題を記録](https://github.com/OfficeDev/Outlook-Add-in-GifMe/issues)してください。
* 「[Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins)」で Microsoft Graph について質問してください。質問に [office-addins]、または [outlook-addin] とタグ付けすることを忘れないでください。

## その他のリソース
* [Yeoman ジェネレーター](https://github.com/OfficeDev/generator-office) - Microsoft Office 関連のプロジェクト (アドインなど) を構築するための Yeoman ジェネレーターです。このプロジェクトは、Yeoman ジェネレーターを使って構築されました。
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - Office 365 のエクスペリエンスを構築するためのフロント エンドのフレームワークです。Office の外観と操作性を持たせるために、このプロジェクトでは Fabric が使用されています。 
* [dev.office.com](http://dev.office.com) - Office 開発に関連するドキュメント、サンプル、およびその他の役に立つ情報が見つかります。
* [Outlook アドイン マニフェストでアドイン コマンドを定義する](https://msdn.microsoft.com/library/office/mt267547.aspx) - アドイン コマンドを利用するためにアプリのマニフェストに何を含めるかについて説明する MSDN の記事です。

## 著作権
Copyright (c) 2015 Microsoft.All rights reserved.

このプロジェクトでは、[Microsoft オープン ソース倫理規定](https://opensource.microsoft.com/codeofconduct/)が採用されています。詳細については、「[倫理規定の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
