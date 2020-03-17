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
description: "GifMe é um suplemento do Outlook que demonstra a integração de terceiros (usando a API Giphy) com os suplementos do Outlook."
---

# GifMe

**GifMe** é um suplemento do Outlook que demonstra a integração de terceiros (usando a [Giphy API](https://github.com/giphy/GiphyAPI)) com os suplementos do Outlook, como inserir imagens e texto em itens do Outlook, como aproveitar os [comandos de suplemento do Outlook](https://msdn.microsoft.com/library/office/mt267546.aspx), e como obter a aparência do Office usando o [Office UI Fabric](http://dev.office.com/fabric).

![Gif GifMe](/readme_assets/demo.gif)

## Pré-requisitos
* [NPM](https://www.npmjs.com/), Gerenciador de pacotes de nó, é necessário para instalar dependências do desenvolvedor.
* [Bower](http://bower.io/) é necessário para instalar as dependências de frontend. 
* o [Gulp](http://gulpjs.com/) é usado como um executor de tarefas, incluindo a disponibilização do aplicativo em um servidor de desenvolvimento.
* Uma conta do Office 365. Caso não tenha nenhuma delas, [participar do Programa para Desenvolvedores do Office 365 e obter uma assinatura gratuita de 1 ano do Office 365](https://aka.ms/devprogramsignup).

## Configurar o suplemento
1. Clone este repositório.
2. Execute `NPM instalar` para instalar as dependências do NPM e do Bower, além das digitações de jQuery.
3. Execute `NPM inicie o` para servir o aplicativo localmente usando o Gulp.
4. Vá para [mail.office365.com](http://mail.office365.com) e entre com sua conta do Office 365.
5. Escolha o ícone de engrenagem no canto superior direito e escolha *Gerenciar Suplementos.
6. Clique no ícone de adição e, em seguida, escolha *adicionar de um arquivo*.
7. Navegue até essa pasta do repositório e escolha *manifest. xml*.
8. Em seguida, conclua o assistente (*próximo*, *instalar*, *OK*) para disponibilizar o suplemento em sua conta do Office 365.
9. Por fim, você precisará abrir o [aplicativo](https://localhost:8443/appcompose/home/home.html) em um navegador e confiar no certificado para `localhost: 8443`. O suplemento não será executado se o seu computador não confiar.

## Executar o suplemento na Web
1. Depois de instalar o suplemento, vá para [mail.office365.com](mail.office365.com). 
2. Clique em *nova* para abrir o painel de composição de mensagens.
3. Clique em *suplementos*, diretamente acima da *a* linha, para exibir todos os suplementos disponíveis.
4. Clique em *GifMe* para iniciar o suplemento.

## Execute o Suplemento no Outlook para Windows
1. Depois de instalar o suplemento, reinicie o Outlook. 
2. Clique em *novo email* para abrir uma janela de composição de mensagem.
3. Na faixa de opções, clique no botão de comando do suplemento rotulado *pesquise em todos os GIFs* para iniciar o suplemento.

  > Observação: Se você estiver executando o suplemento no localhost, poderá ver uma ** mensagem navegação para a página da Web foi cancelada.**. Clique *atualizar a página.* e *continuar neste site* para iniciar o suplemento.

## Perguntas e comentários
* [registre um problema neste repositório](https://github.com/OfficeDev/Outlook-Add-in-GifMe/issues) com comentários ou dúvidas sobre esse exemplo.
* Faça perguntas sobre o Microsoft Graph no](http://stackoverflow.com/questions/tagged/office-addins)Stack Overflow[. Não se esqueça de marcar as suas perguntas com [Office-suplementos] ou [Outlook-AddIn].

## Recursos adicionais
* [Gerador do Yeoman](https://github.com/OfficeDev/generator-office) - Gerador do Yeoman para compilar projetos relacionados do Microsoft Office (incluindo suplementos). Esse projeto foi criado usando-o.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - A estrutura de front-end para criar experiências para o Office 365. Esse projeto usa esse recurso para obter uma aparência do Office. 
* [dev.office.com](http://dev.office.com)-encontre a documentação, os exemplos e outras informações úteis relevantes para o desenvolvimento do Office.
* o [define comandos de suplemento no manifesto de suplemento do Outlook](https://msdn.microsoft.com/library/office/mt267547.aspx)-um artigo do MSDN explicando o que incluir no manifesto do aplicativo para aproveitar os comandos de suplemento.

## Direitos autorais
Copyright © 2015 Microsoft. Todos os direitos reservados.

Este projeto adotou o [Código de Conduta do Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
