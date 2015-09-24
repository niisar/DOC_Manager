//#region initial code
        /// <reference path="c:\users\adminlocal\documents\visual studio 2013\projects\doc_manager\doc_manager\templates\common\footer.html" />
        /// <reference path="c:\users\adminlocal\documents\visual studio 2013\projects\doc_manager\doc_manager\templates\common\footer.html" />
        'use strict';

        var context = SP.ClientContext.get_current();
        var user = context.get_web().get_currentUser();

        // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
        $(document).ready(function () {
            getUserName();
        });

        // This function prepares, loads, and then executes a SharePoint query to get the current users information
        function getUserName() {
            context.load(user);
            context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
        }

        // This function is executed if the above call is successful
        // It replaces the contents of the 'message' element with the user name
        function onGetUserNameSuccess() {
            $('#message').text('Hello ' + user.get_title());
        }

        // This function is executed if the above call fails
        function onGetUserNameFail(sender, args) {
            alert('Failed to get user name. Error:' + args.get_message());
        }
//#endregion 

$(document).ready(function () {
    //#region crome top navigation bar
    //function getQueryStringParameter(paramToRetrieve) {
    //    var params =
    //        document.URL.split("?")[1].split("&");
    //    var strParams = "";
    //    for (var i = 0; i < params.length; i = i + 1) {
    //        var singleParam = params[i].split("=");
    //        if (singleParam[0] == paramToRetrieve)
    //            return singleParam[1];
    //    }
    //}
    

    //var hostWebUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    //var hostWebTitle = decodeURIComponent(getQueryStringParameter("SPHostTitle"));
    //var hostWebLogoUrl = decodeURIComponent(getQueryStringParameter("SPHostLogoUrl"));

    //// crome control setting
    //var options = {
    //    siteUrl: hostWebUrl,
    //    siteTitle: hostWebTitle,
    //    siteIconUrl: hostWebLogoUrl,
    //    appTitle: "KS Site",
        
    //    settingsLink: [
    //        {
    //            linkUrl: "../Lists/newlist",
    //            displayUrl:"LIST: newList"
    //        },
    //        {
    //            linkUrl: "../List/oldlist",
    //            displayUrl: "LIST: oldlist"
    //        }
    //    ]
    //}

    //var nav = new SP.UI.Controls.Navigation("crome_ctrl_container", options);
    //nav.setVisible(true);
    //nav.setBottomHeaderVisible(false);
    //#endregion
});
