<!DOCTYPE html>
<html lang="en">

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, user-scalable=false"/>
    <link  rel="icon" href="../images/Favicon.png"/>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
     <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
   

    <title>Appraisal Form</title>
    <style>
        /*        @import url("https://fonts.googleapis.com/css?family=Nunito:400,900");*/
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');


        * {
            box-sizing: border-box;
        }

        body {
            font-size: 12px;
            font-family: Poppins;
        }

        nav.navbar {
            background-color: #ffffff !important;
            box-shadow: 1px 1px 3px 1px #00000012;
            position: sticky;
            top: 0;
            z-index: 10;

        }


        body .progress_inner__bar,
        body .progress_inner__bar--set {
            background: repeating-linear-gradient(45deg, #1ea4ec, #1ea4ec 4px, #1f8bc5 4px, #1f8bc5 10px);
            -webkit-transition: width 800ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            transition: width 800ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            transition: width 800ms;
            border-radius: 6px;
            position: relative;
            z-index: -1;
            top: 65px;
            width: 0;
        }

        body .L3-L4-L5.progress_inner__bar--set,
        body .L3-L4-L5.progress_inner__bar {
            height: 6px;
            left: 6%;
        }

        body .L3-L4-L5.progress_inner__bar--set {
            width: 88%;
            background: #70afd047;
            z-index: -2;
            top: 4.7%;
        }

        body .L3-L4-L5.progress_inner__bar {
            width: 10%;
            top: 5.6%;
        }

        body .checkedIcon {
            padding: 11.1px 10.8px;
            border-radius: 29px;
            color: #006fc952;
            font-size: 12px;
            border: 1px solid #006fc963 !important;
            background: #fff;
        }

        body .checkedIcon.active {
            background: #006fc9;
            color: #fff;

        }

        #user-info-data {
            height: 100vh;

        }


        .divEmployeeInfo:hover {
            background: aliceblue;
        }

        .divEmployeeInfo.active {
            background: aliceblue;
        }

        .divEmployeeInfo {
            padding: 10px;
            border-bottom: 1px solid #00000017;
            cursor: pointer;

        }

        .Assessment-status {
            text-align: center;
            width: 14%;
            height: 20%;
            vertical-align: middle;
        }

        .btn-primary:hover {
            background: #343a40;
            border-color: #343a40;
        }

        .btn-primary {
            color: #fff;
            background-color: #009edb;
            border-color: #009edb;
        }

        .user-info-Header {
            padding: 30px 0;

        }
/*
        .divEmployeeInfo:nth-child(1) {
            margin-top: 84.3px;
        }*/

        #searchById_Name:focus {
            outline: 0;
        }

        #searchById_NameForm button {
            padding: 6px 11px;
            background: #009edb;
            color: #fff;
            border: 0;
        }

        #searchById_NameForm input {
            border-color: #0000000d;
            height: 31.5px;
        }

        div#loader-sideNav {
            background: #f0f8ffad;
            margin-top: 92px;
            height: 100%;
            width: 16.6%;
            z-index: 10;
            display: flex;
        }

        #refreshSpan {
            cursor: pointer;
            padding: 7px 10px;
    right: 0;
    top: 0;
        }

        #refreshSpan:hover {
            background: #212529;

            color: #fff;
        }

        #searchById_NameInput {
/*            width: 80%;*/
                width: 73%;
        }
        .sideNavbarRow .col-md-2{
            background-color: #fff;
            z-index:5;
        }
        #backBtnToAllEmpInfo{
          display: none;
        }
        #bulkExcelModalCenter .modal-dialog{
            max-width: 50%;
            margin: 1.75rem auto;
            width: 75%;
        }
        #dashBoardModalCenter .modal-dialog {
            max-width: 100%;
            margin: 1.75rem auto;
            width: 85%;
        }
          button.dprButton{
            color: #fff;
            background: #343a40;
            border-color: #343a40;
        }

        button.dprButton:hover{
            color: #fff;
            background-color: #009edb;
            border-color: #009edb;
        }

        /*-------------media query--------------*/
        @media (min-width: 768px) {
            .sideNavbarRow .col-md-2 {
                -ms-flex: 0 0 16.666667%;
                flex: 0 0 16.666667%;
                max-width: 17.666667%;
            }
          
        }
         @media (max-width: 768px) {
          #searchById_NameForm{
                    text-align: center;
    width: 90%;
            }
        }

        /*-------------End media query--------------*/

        /*  ----------------------media query-----------------------------------*/

    </style>

</head>

<body translate="no" id="appraisal_form_body">
    <!-- Navbar start -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-light">
        <a class="navbar-brand ml-2" href="./index.php">
            <img src="../images/Principle+ACS-Logo-PNG-Small.png" width="150px" alt="Navbar" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button id="dashboardPopUpButton"class="btn dprButton px-4 ml-auto" data-toggle="modal" data-target="#dashBoardModalCenter" data-type="DashBoardButton">DPR</button>
            <button class="btn btn-primary  ml-2  mainDownloadButton modalPopupButton" data-toggle="modal" data-target="#bulkExcelModalCenter" data-type="DownLoadButton">Download BulkExcel<i class="fa fa-download ml-2 "></i></button>
        </div>
    </nav>

    <!-- Navbar end -->
    <div class="container-fluid p-0">

        <div class="row sideNavbarRow">
            <div class="col-md-2 position-fixed p-0 border-right  start-0">
                <div id="loader-sideNav" class="position-fixed justify-content-center">
                    <h2 class="align-self-center"><i class="fa fa-spinner fa-pulse" aria-hidden="true"></i></h2>
                </div>
                <div id="searchEmployeeInfo" class="user-info-Header  w-100  bg-white border-bottom text-center py-4">
                    <form id="searchById_NameForm" class="d-inline-block w-100 p-2"><input type="search" id="searchById_NameInput" class="ml-2" placeholder="name/ Id/ GradeLevel" name="searchInput" required />
                        <button type="submit"><i class="fa fa-search" style="cursor: pointer;"></i></button>
                    </form>

                    <span id="refreshSpan" class="position-absolute end-0 top-0" data-toggle="tooltip" data-placement="left" title="refresh"><i class="fa fa-refresh" style="cursor: pointer;"></i></span>
                </div>
                <div id="user-info-data" class="user-info-data overflow-auto">

                </div>
            </div>
        </div>
        <div class="row w-100 m-0 justify-content-end">
            <button id="backBtnToAllEmpInfo" class="btn btn-primary m-2 mr-auto"><i class="fa fa-arrow-circle-left"></i></button>
            <div id="submissionStatusTab" class="col-md-10 mt-3 p-0">
                
            </div>
        </div>
    </div>
    <!-------------------------------------------- DownloadExcel popup------------------------------>
    <div class="modal fade" id="bulkExcelModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content m-auto">
                <form id="formBulkExcelDownload" method="post" action="https://principleacs.net/Appraisal_Form_2022_API/public/createExcel">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Bulk Excel</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <span class="font-weight-bold mr-2">Type Of Excel</span>
                        <select class="form-control w-50 mt-2" name="levelType">
                            <option value="Low Level">L1 &amp; L2 Bulk Excel</option>
                            <option value="High Level">L3, L4 &amp; L5 Bulk Excel</option>
                        </select>
                        <input class="d-none" type="text" value="WEB" name="platform"/>
                    </div>
                    <div class="modal-footer">
                        <button id="submitBtn" type="submit" class="btn btn-primary">DOWNLOAD EXCEL <i class="fa fa-spinner fa-spin ml-1 d-none"></i></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>    
     <!-------------------------------------------- end DownloadExcel popup------------------------------>   
<!--    -----------------------------------------dash board popup----------------------------------------->
    <div class="modal fade" id="dashBoardModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content m-auto">
             <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLongTitle">Dashboard</h5>
                      <button type="button" class="close" data-dismiss="modal" arial-label="close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                   </div>
            <div id="dashboardModalBody" class="modal-body">
                   </div>
                   <div class="modal-footer">
                    </div>
            </div>
        </div>
    </div>
<!------------------------------------ end-dash board popup -------------------------------------------------->
</body>
<script src="js/constants.js?version= 1.1"></script>
<script src="js/main.js?version= 1.6"></script>
<script src="js/getParamsFromURL.js?version= 1.1"></script>
<script src="js/DynamicUi.js?version= 1.5"></script>

</html>
