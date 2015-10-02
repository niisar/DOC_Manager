<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">

    <meta name="WebPartPageExpansion" content="full" />

    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <script src="../Scripts/jquery-extensions.js"></script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script type="text/javascript" src="/_layouts/15/SP.UI.Controls.js"></script>

    <script type="text/javascript" src="/_layouts/15/core.js"></script>

    <script src="../Scripts/ChromeLoader.js"></script>



    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <link href="../Scripts/App/frameworks/ngToast/angular-toastr.css" rel="stylesheet" />
    <link href="../Scripts/App/frameworks/angular-wizard/angular-wizard.css" rel="stylesheet" />
    <link href="../Content/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
    <link href="../Content/css/angular/angular-motion.css" rel="stylesheet" />
    <link href="../Content/css/angular.css" rel="stylesheet" />
    <link href="../Content/css/loading-bar.css" rel="stylesheet" />
    <link href="../Content/css/libs/font-awesome.css" rel="stylesheet" />
    <link href="../Scripts/App/frameworks/css/ngDialog.css" rel="stylesheet" />
    <link href="../Scripts/App/frameworks/css/ngDialog-custom-width.css" rel="stylesheet" />
    <link href="../Scripts/App/frameworks/css/ngDialog-theme-default.css" rel="stylesheet" />
    <link href="../Scripts/App/frameworks/aggrid/angular-grid.css" rel="stylesheet" />
    <link href="../Scripts/App/frameworks/aggrid/theme-fresh.css" rel="stylesheet" />
    <link href="../Scripts/App/frameworks/dropdown/angular-dropdowns.css" rel="stylesheet" />
    
    <link href="../Content/css/compiled/theme_styles.css" rel="stylesheet" />
    <link href='//fonts.googleapis.com/css?family=Open+Sans:400,600,700,300|Titillium+Web:200,300,400' rel='stylesheet' type='text/css'>
    <link href="../Scripts/App/frameworks/ui-tree/angular-ui-tree.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.10.0/angular-material.min.css">

    <script src="../Content/js/jquery.nanoscroller.min.js"></script>
    <script src="../Content/js/lodash.js"></script>
    <script src="../Content/js/demo.js"></script>
    <script src="../Content/js/bootstrap.js"></script>
    <script src="../Content/js/scripts.js"></script>
    <script src="../Scripts/App.js"></script>
    <!--<script src="../Scripts/App/frameworks/angular.min.js"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/0.10.0/angular-material.min.js"></script>
    <script src="../Scripts/App/frameworks/angular-route.min.js"></script>
    <script src="../Scripts/App/frameworks/loading-bar.js"></script>
    <script src="../Scripts/App/frameworks/angular-animate.js"></script>
    <script src="../Scripts/App/frameworks/ngDialog.js"></script>
    <script src="../Scripts/App/frameworks/ngToast/angular-toastr.js"></script>
    <script src="../Scripts/App/frameworks/ngToast/angular-toastr.tpls.js"></script>
    <script src="../Scripts/App/frameworks/angular-sanitize.js"></script>
    <script src="../Scripts/App/frameworks/angular-strap.js"></script>
    <script src="../Scripts/App/frameworks/angular-strap.tpl.js"></script>
    <script src="../Scripts/App/frameworks/parse-options.js"></script>
    <link href="../Scripts/App/frameworks/xeditable/css/xeditable.css" rel="stylesheet" />
    <script src="../Scripts/App/frameworks/xeditable/js/xeditable.js"></script>
    <script src="../Scripts/App/frameworks/ui-tree/angular-ui-tree.js"></script>


    <script src="../Scripts/App/frameworks/angular-file-upload.js"></script>
    <script src="../Scripts/App/frameworks/aggrid/angular-grid.js"></script>
    <%--Todo: delete dropdown. it is not in use--%>
    <script src="../Scripts/App/frameworks/dropdown/angular-dropdowns.js"></script>
    <script src="../Scripts/App/frameworks/angular-wizard/angular-wizard.js"></script>

    <script src="../Scripts/App/modules/app.js"></script>
    <script src="../Scripts/App/configs/config.js"></script>
    <script src="../Scripts/App/configs/config.exceptionHandeler.js"></script>

    <script src="../Scripts/App/common/common.js"></script>
    <script src="../Scripts/App/common/logger.js"></script>

    <script src="../Scripts/App/services/baseSvc.js"></script>
    <script src="../Scripts/App/services/task/taskSvc.js"></script>

    <script src="../Scripts/App/controllers/Document/FileList.js"></script>
    <script src="../Scripts/App/controllers/layout/spAppChrome.js"></script>
    <script src="../Scripts/App/controllers/mainCtrl.js"></script>
    <script src="../Scripts/App/controllers/Task/AddTask.js"></script>
    
    <script src="../Scripts/App/controllers/Task/MyTask.js"></script>
    <%-- this are not in use
    <script src="../Scripts/App/controllers/Task/AllTask.js"></script>
    <script src="../Scripts/App/controllers/Task/DashBoard.js"></script>
    <script src="../Scripts/App/controllers/Task/DeleteTask.js"></script>
    
    <script src="../Scripts/App/controllers/Task/UpdateTask.js"></script>--%>

</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div data-ng-app="docapp" data-ng-controller="mainCtrl" class="v4master">
        <div data-ng-include="'../Templates/layout/spAppChrome.html'"></div>

        <div id="theme-wrapper">
            <header class="navbar" id="header-navbar">
            <div class="container">
                <a href="#/dasboard" id="logo" class="navbar-brand">
                    <img src="img/logo.png" alt="" class="normal-logo logo-white" />
                    <img src="img/logo-black.png" alt="" class="normal-logo logo-black" />
                    <img src="img/logo-small.png" alt="" class="small-logo hidden-xs hidden-sm hidden" />
                </a> 
                <div class="clearfix">
                    <button class="navbar-toggle" data-target=".navbar-ex1-collapse" data-toggle="collapse" type="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="nav-no-collapse navbar-left pull-left hidden-sm hidden-xs">
                        <ul class="nav navbar-nav pull-left">
                            <li>
                                <a class="btn" id="make-small-nav">
                                    <i class="fa fa-bars"></i>
                                </a>
                            </li>
                            <li class="dropdown hidden-xs">
                                <a class="btn dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-bell"></i>
                                    <span class="count">8</span>
                                </a>
                                <ul class="dropdown-menu notifications-list">
                                    <li class="pointer">
                                        <div class="pointer-inner">
                                            <div class="arrow"></div>
                                        </div>
                                    </li>
                                    <li class="item-header">You have 6 new notifications</li>
                                    <li class="item">
                                        <a href="">
                                            <i class="fa fa-comment"></i>
                                            <span class="content">New comment on ‘Awesome P...</span>
                                            <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="">
                                            <i class="fa fa-plus"></i>
                                            <span class="content">New user registration</span>
                                            <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="">
                                            <i class="fa fa-envelope"></i>
                                            <span class="content">New Message from George</span>
                                            <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="">
                                            <i class="fa fa-shopping-cart"></i>
                                            <span class="content">New purchase</span>
                                            <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="">
                                            <i class="fa fa-eye"></i>
                                            <span class="content">New order</span>
                                            <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>
                                        </a>
                                    </li>
                                    <li class="item-footer">
                                        <a href="">
                                            View all notifications
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown hidden-xs" data-ng-click="addTaskOpen();">
                                <a class="btn dropdown-toggle">
                                    New Task
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div class="nav-no-collapse pull-right" id="header-nav">
                        <ul class="nav navbar-nav pull-right">
                            <li class="mobile-search">
                                <a class="btn">
                                    <i class="fa fa-search"></i>
                                </a>
                                <div class="drowdown-search">
                                    <form role="search">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Search...">
                                            <i class="fa fa-search nav-search-icon"></i>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="dropdown profile-dropdown">
                               
                               <a buttons="no" href="#" editable-select="LoginUser.status" e-style="margin-top:10px;" e-ng-options="s.value as s.text for s in AllUsers" class="btn pull-left" onaftersave="getMyTask()">
                            {{showLoginUser()}}
                        </a>
                            </li>
                            <li class="hidden-xxs">
                                <a class="btn">
                                    <i class="fa fa-power-off"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        </header>
            <div id="page-wrapper" class="container">
                <div class="row">
                    <div id="nav-col">
                        <section id="col-left" class="col-left-nano">
                        <div id="col-left-inner" class="col-left-nano-content">
                            <div id="user-left-box" class="clearfix hidden-sm hidden-xs dropdown profile2-dropdown">
                                <img src="img/users/ryan-300.jpg" />
                                <div class="user-box">
                                    <span class="name">
                                        <a class="dropdown-toggle" data-toggle="dropdown">
                                            {{LoginUser.status}}
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#/pages/user-profile"><i class="fa fa-user"></i>Profile</a></li>
                                            <li><a href=""><i class="fa fa-cog"></i>Settings</a></li>
                                            <li><a href=""><i class="fa fa-envelope-o"></i>Messages</a></li>
                                            <li><a href=""><i class="fa fa-power-off"></i>Logout</a></li>
                                        </ul>
                                    </span>
                                    <span class="status">
                                        <i class="fa fa-circle"></i> Online
                                    </span>
                                </div>
                            </div>
                            <div class="collapse navbar-collapse navbar-ex1-collapse" id="sidebar-nav" bs-navbar>
                                <ul class="nav nav-pills nav-stacked">
                                    <li class="nav-header nav-header-first hidden-sm hidden-xs">
                                        NAVIGATION
                                    </li>

                                    <!--<li data-match-route="/dashboard/dashboard">
                                        <a href="#/dashboard/dashboard">
                                            <i class="fa fa-dashboard"></i>
                                            <span>My Dashboard</span>
                                        </a>
                                    </li>-->

                                    <li data-match-route="/Task*">
                                        <a href="" class="dropdown-toggle">
                                            <i class="fa fa-users"></i>
                                            <span>Task</span>
                                            <i class="fa fa-angle-right drop-icon"></i>
                                        </a>
                                        <ul class="submenu">
                                            <li data-match-route="/Task/MyTask">
                                                <a href="#/Task/MyTask">
                                                    My Task
                                                </a>
                                            </li>
                                            <li data-match-route="/Task/AllTask">
                                                <a href="#/Task/AllTask">
                                                    All Task
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="active" data-match-route="/claim">
                                        <a href="#/claim">
                                            <i class="fa fa-dashboard"></i>
                                            <span>Contract</span>
                                        </a>
                                    </li>
                                    <li data-match-route="/lobby*">
                                        <a href="" class="dropdown-toggle">
                                            <i class="fa fa-user"></i>
                                            <span>Lobby</span>
                                            <i class="fa fa-angle-right drop-icon"></i>
                                        </a>
                                        <ul class="submenu">
                                            <li>
                                                <a data-match-route="/lobby/Desk" href="#/lobby/Desk">
                                                    My Desk
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li data-match-route="/admin*">
                                        <a href="" class="dropdown-toggle">
                                            <i class="fa fa-cogs"></i>
                                            <span>Admin Section</span>
                                            <i class="fa fa-angle-right drop-icon"></i>
                                        </a>
                                        <ul class="submenu">
                                            <li data-match-route="/admin/EmployeeDesk">
                                                <a href="#/admin/EmployeeDesk">
                                                    Upload Employee Master
                                                </a>
                                            </li>
                                            <li data-match-route="/admin/ParkingDesk">
                                                <a href="#/admin/ParkingDesk">
                                                    Parking Master
                                                </a>
                                            </li>
                                            <li data-match-route="/admin/MeetingDesk">
                                                <a href="#/admin/MeetingDesk">
                                                    Meeting Management
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </section>
                        <div id="nav-col-submenu"></div>
                    </div>
                    <div id="content-wrapper">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="slide-main-container">
                                    <div ng-view autoscroll="true" class="slide-main-animation"></div>
                                </div>
                            </div>
                        </div>


                        <div ng-include='"../Templates/Common/Footer.html"'></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</asp:Content>
