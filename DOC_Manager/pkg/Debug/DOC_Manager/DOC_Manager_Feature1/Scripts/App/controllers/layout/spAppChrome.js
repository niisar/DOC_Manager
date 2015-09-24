(function() {
  'use strict';

  // define controller
  var controllerId = 'spAppChrome';
  angular.module('docapp').controller(controllerId,
    ['$rootScope', 'common', spAppChrome]);

  // create controller
  function spAppChrome($rootScope, common) {
    var vm = this;
    var logger = common.logger;
    var hostWebUrl, hostWebTitle, hostWebLogoUrl;
    var spChromeControlData;

    // init, then activate the controller
    init();

    function init() {
      // get app's hostweb url, title & logo image
      hostWebUrl = decodeURIComponent($.getQueryStringValue("SPHostUrl"));
      hostWebTitle = decodeURIComponent($.getQueryStringValue("SPHostTitle"));
      hostWebLogoUrl = decodeURIComponent($.getQueryStringValue("SPHostLogoUrl"));

      // create chrome control constructor
      spChromeControlData = {
        siteUrl: hostWebUrl,
        siteTitle: hostWebTitle,
        appIconUrl: hostWebLogoUrl,
        appTitle: "Task Manager",
        settingsLinks: [
          {
            linkUrl: "../Lists/List1",
            displayName: "[SHAREPOINT LIST] List1"
          },
          {
            linkUrl: "../Lists/List2",
            displayName: "[SHAREPOINT LIST] List2"
          }
        ]
      };

      // create the chrome control
      var nav = new SP.UI.Controls.Navigation("chrome_ctrl_container", spChromeControlData);

      // show chrome control
      nav.setVisible(true);

      // hide top app chrome (image & app name)
      nav.setBottomHeaderVisible(false);

      logger.log("spAppChrome loaded", null, controllerId);
      common.activateController([], controllerId);
    }

  }

})();