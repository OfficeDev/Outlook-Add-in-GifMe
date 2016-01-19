/*
 * Copyright (c) Microsoft Corporation All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/*global Office, $ */

(function () {
  'use strict';

  var item;
  var query;

  // The initialize function must be run each time a new page is loaded.
  Office.initialize = function (reason) {
    item = Office.context.mailbox.item;

    $(document).ready(function () {
      // Initialize the form.
      $('#query-SearchBox').SearchBox();
      $('#query-form').submit(searchForGifs);
      $('#loading-message').hide();

      // Attach handlers to insert buttons.
      $('#results').on('click', '#insert-gif', insertGif);
      $('#results').on('click', '#insert-link', insertLink);

      // Hover styling on results list.
      $('#results').on('mouseenter', '#result', function (event) {
        $(event.currentTarget).addClass('hovering');
      });

      $('#results').on('mouseleave', '#result', function (event) {
        $(event.currentTarget).removeClass('hovering');
      });
    });
  };

  /**
   * @name searchForGifs
   * @desc Gets the query from the form, searches for GIFs using the Giphy API,
   *       and updates the UI with the results.
   */
  function searchForGifs (event) {
    event.preventDefault();

    // Get search box and the query value.
    var $queryInput = $('#query-input');
    query = $queryInput.val();

    // Block empty queries.
    if (query.trim() === '') {
      return;
    }

    // Get results list and clear it.
    var $results = $('#results');
    $results.empty();

    // Show loading message so user knows something is happening.
    $('#loading-message').show();

    // Make a request to Giphy API with query.
    $.get('https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=' + encodeURIComponent(query), function (response) {
      // Handle case where query returns nothing.
      if (response.data.length === 0) {
        // Hide loading message if there are no results.
        $('#loading-message').hide();

        $results.append('<p class="ms-font-l">No results for "' + query + '".</p>');
      } else {
        $results.append('<p class="ms-font-l">Results for "' + query + '":</p>');

        // Build out the results list.
        for (var i = 0; i < response.data.length; i++) {
          var resultHtml = '<div class="result ms-u-fadeIn400" id="result"><img class="result-gif" src="' + response.data[i].images.original.url + '" />';
          resultHtml += '<div class="button-holder"><button id="insert-gif" class="ms-Button ms-Button--command" type="submit"><span class="ms-Button-icon"><i class="ms-Icon ms-Icon--picture"></i></span> Insert GIF</button><button id="insert-link" class="ms-Button ms-Button--command" type="submit"><span class="ms-Button-icon"><i class="ms-Icon ms-Icon--link"></i> Insert link</span></button></div></div>';

          // Hide the containing div until all images have loaded.
          $results.hide();
          $results.waitForImages(function () {
            // Hide loading message when images are ready to show.
            $('#loading-message').hide();

            $results.show();
          });

          // Add results to containing div.
          $results.append(resultHtml);
        }
      }
    });

    // Clear the input and remove focus from search box.
    $queryInput.val('');
    $queryInput.blur();
  }

  /**
   * @name insertGif
   * @desc Inserts the GIF (in image format) into the body of the email being
   *       composed.
   */
  function insertGif (event) {
    event.preventDefault();

    setItemBody(event.currentTarget.parentElement.parentElement.children[0].src, 'gif');
  }

  /**
   * @name isnertLink
   * @desc Inserts the GIf (in hyperlink format) into the body of the email being
   *       composed.
   */
  function insertLink (event) {
    event.preventDefault();

    setItemBody(event.currentTarget.parentElement.parentElement.children[0].src, 'link');
  }

  /**
   * @name setItemBody
   * @desc Inserts a GIF into the body of the email being composed.
   * @param url The URL of the GIF.
   * @param type The type of insertion. Can be either 'gif' or 'link'.
   *
   * This function is mostly copied from "Insert data in the body when composing
   * an appointment or message in Outlook" (https://msdn.microsoft.com/library/office/dn574748.aspx).
   */
  function setItemBody (url, type) {
    item.body.getTypeAsync(
      function (result) {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(result.error.message);
        } else {
          // If the item type is HTML and user clicked "Insert GIF", add an
          // img element with the url as the source.
          if (result.value === Office.MailboxEnums.BodyType.Html && type === 'gif') {
            // Body is of HTML type.
            // Specify HTML in the coercionType parameter of setSelectedDataAsync.
            item.body.setSelectedDataAsync(
              '<img src="' + url + '" style="height: 200px;"></img>',
              { coercionType: Office.CoercionType.Html,
              asyncContext: { var3: 1, var4: 2 } },
              function (asyncResult) {
                if (asyncResult.status ===
                  Office.AsyncResultStatus.Failed) {
                  console.error(asyncResult.error.message);
                } else {
                  // Successfully set data in item body.
                }
              });
          // If the item type is HTML and user clicked "Insert link", add an
          // anchor element with the url as the source.
          } else if (result.value === Office.MailboxEnums.BodyType.Html && type === 'link') {
            // Body is of HTML type.
            // Specify HTML in the coercionType parameter of setSelectedDataAsync.
            item.body.setSelectedDataAsync(
              '<a href="' + url + '">' + query + '</a>',
              { coercionType: Office.CoercionType.Html,
              asyncContext: { var3: 1, var4: 2 } },
              function (asyncResult) {
                if (asyncResult.status ===
                  Office.AsyncResultStatus.Failed) {
                  console.error(asyncResult.error.message);
                } else {
                  // Successfully set data in item body.
                }
              });
          // If the item type is text, just add the URL directly.
          } else {
            // Body is of text type.
            item.body.setSelectedDataAsync(
              url,
              { coercionType: Office.CoercionType.Text,
              asyncContext: { var3: 1, var4: 2 } },
              function (asyncResult) {
                if (asyncResult.status ===
                  Office.AsyncResultStatus.Failed) {
                  console.error(asyncResult.error.message);
                } else {
                  // Successfully set data in item body.
                }
              });
          }
        }
      });
  }
})();
