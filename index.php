<!DOCTYPE html>
<html lang="en">

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, user-scalable=false"/>
    <link  rel="icon" href="../images/Favicon.png"/>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<!--    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>-->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


    <title>Appraisal Form</title>
    <style>
        /*        @import url("https://fonts.googleapis.com/css?family=Nunito:400,900");*/
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');


        * {
            box-sizing: border-box;
        }

        body .progress_inner__step:before,
        body .progress_inner {
            position: absolute;
            left: 8%;
            right: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            margin: auto;
        }

        body .progress_inner__bar,
        body .progress_inner__bar--set {
            height: 6px;
            left: 5%;
            background: repeating-linear-gradient(45deg, #1ea4ec, #1ea4ec 4px, #1f8bc5 4px, #1f8bc5 10px);
            -webkit-transition: width 800ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            transition: width 800ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            border-radius: 6px;
            width: 0;
            position: relative;
            z-index: -1;
            top: 65px;
        }

        body .progress_inner__step:before {
            width: 30px;
            height: 30px;
            color: #70afd0;
            background: white;
            line-height: 30px;
            border: 3px solid #00000017;
            font-size: 12px;
            top: 3px;
            border-radius: 100%;
            -webkit-transition: all .4s;
            transition: all .4s;
            cursor: pointer;
            pointer-events: none;
        }

        .pointEventNone {
            pointer-events: none;
        }

        body .progress_inner__step {
            width: 9.1%;
            font-size: 14px;
            padding: 0 10px;
            -webkit-transition: all .4s;
            transition: all .4s;
            float: left;
            text-align: center;
            position: relative;
            top: 60px;
        }

        body .progress_inner__step label {
            padding-top: 50px;
            top: -20px;
            display: block;
            position: relative;
            cursor: pointer;
            font-size: 12px;
        }

        /*
        body .progress_inner__step:hover {
            color: white;
        }
*/

        body .progress_inner__step:hover:before,
        body .progress_inner__step:active:before {
            color: white;
            background: #006fc9 !important;
        }

        body .progress_inner__step.active:before {
            color: white;
            /*            background: #66ce92;*/
            background: #0062cc;
        }

        body {
            font-family: 'Poppins', sans-serif;
            /*            background: #a6cde2;*/
            /*                background: #f8f8f8;*/
            /*            color: #2e6c8e;*/
            color: #2f2f2fcc;
            text-align: center;
            font-weight: 900;
        }

        .max-marks_title {
            color: #2e6c8e;
        }

/*        .max-marks-self-select {
            width: 60px;
            text-align-last: center;

        }*/

        .max-marks-self {
            color: #2e6c8e;
        }


        .progress {
            background: #fff;
        }


        body .progress_inner__step:nth-of-type(1):before {
            content: "1";
        }

        body .progress_inner__step:nth-of-type(2):before {
            content: "2";
        }

        body .progress_inner__step:nth-of-type(3):before {
            content: "3";
        }

        body .progress_inner__step:nth-of-type(4):before {
            content: "4";
        }

        body .progress_inner__step:nth-of-type(5):before {
            content: "5";
        }

        body .progress_inner__step:nth-of-type(6):before {
            content: "6";
        }

        body .progress_inner__step:nth-of-type(7):before {
            content: "7";
        }

        body .progress_inner__step:nth-of-type(8):before {
            content: "8";
        }

        body .progress_inner__step:nth-of-type(9):before {
            content: "9";
        }

        body .progress_inner__step:nth-of-type(10):before {
            content: "10";
        }

        body .progress_inner__bar--set {
            width: 81%;
            top: 60px;
            background: #70afd047;
            position: relative;
            z-index: -2;
            left: 70px;
        }

        body .progress_inner__tabs .tab {
            opacity: 0;
            width: 91.4%;
            position: absolute;
            top: 100px;
            text-align: center;
            margin-top: 80px;
            padding: 30px;
            border-radius: 10px;
            -webkit-transition: all .2s;
            transition: all .2s;
        }

        body .progress_inner__tabs .tab h1 {
            margin: 0;
        }

        body .progress_inner__tabs .tab p {
            font-weight: 400;
            opacity: 0.8;
        }

        body .progress_inner__status {
            width: 40px;
            height: 40px;
            top: -80px;
            -webkit-transition: right 800ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            transition: right 800ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            -webkit-transform: translateX(50%);
            transform: translateX(50%);
            position: absolute;
        }

        body .progress_inner__status div {
            opacity: 0;
            -webkit-transition: all 600ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            transition: all 600ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
            -webkit-transition-delay: 300ms;
            transition-delay: 300ms;
        }

        body .progress_inner__status div {
            position: absolute;
        }

        body .progress_inner__status .box_bow__left,
        body .progress_inner__status .box_bow__right {
            width: 6px;
            height: 10px;
            background: #be0c21;
            position: absolute;
            z-index: 3;
            opacity: 1;
            border-radius: 1px;
        }

        body .progress_inner__status .box_bow {
            top: -6px;
            z-index: 1;
            -webkit-transition-delay: 500ms;
            transition-delay: 500ms;
        }

        body .progress_inner__status .box_bow__left {
            left: 6px;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        body .progress_inner__status .box_bow__right {
            left: -4px;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }

        body .progress_inner__status .box_tag {
            width: 20px;
            height: 10px;
            background: #487ac7;
            z-index: 4;
            -webkit-transform: rotate(-10deg) translateX(-40px) translateY(0px);
            transform: rotate(-10deg) translateX(-40px) translateY(0px);
            border-radius: 2px;
            -webkit-transition-delay: 500ms;
            transition-delay: 500ms;
        }

        body .progress_inner__status .box_string {
            width: 17px;
            height: 2px;
            background: #343434;
            z-index: 4;
            -webkit-transform: rotate(-39deg) translateX(-22px) translateY(-12px);
            transform: rotate(-39deg) translateX(-22px) translateY(-12px);
        }

        body .progress_inner input[type="radio"] {
            display: none;
        }

        tbody tr {
            border-radius: 6px;
            box-shadow: 1px 1px 2px 1px #7f94a48c;
        }

        #three60degreeMailTable tr {
            border-radius: 0;
            box-shadow: none;
        }

        .question,
        .question_sno {
            line-height: 1.5;
        }

        /*--------------------------------------------------------*/
        body {
            font-size: 15px
        }

        .user-input-wrp {
            position: relative;
            display: inline-block;
        }

        .user-input-wrp .inputText {
            width: 90%;
            outline: none;
            border: none;
            border-bottom: 1px solid #ffffff3d;
            box-shadow: none !important;
            background: transparent;
            color: #fff;
        }

        .user-input-wrp .inputText:focus {
            border-color: blue;
            border-width: medium medium 2px;
        }

        .user-input-wrp .floating-label {
            position: absolute;
            pointer-events: none;
            /*            top: 0px;*/
            transition: 0.2s ease all;
            font-weight: 100;
            left: 30px;
            color: #000;
            top: -18px;
            font-size: 10px;
            opacity: 1;
        }

        .user-input-wrp input:focus~.floating-label,
        .user-input-wrp input:not(:focus):valid~.floating-label {
            top: -18px;
            font-size: 10px;
            opacity: 1;
        }

        .box2 {
            display: inline-block;
            width: 100%;
            height: 100px;
            margin: 1em;
        }

        .Appraisal-form-title {

            width: 100%;
        }

        .max-marks-self select {
            outline: 1px solid #0000002e;
            border: 0;
            cursor:pointer;
        }

        .inputTabs.button.inputDisable {
            pointer-events: none;
            color: #0062cc;
            background-color: #fff;
            border-color: #0062cc;
        }

        .tab {
            opacity: 0;
            z-index: 0;
            display: none;

        }

        .progress_inner__tabs .tab.tabDispalyBlock {
            opacity: 1;
            z-index: 10;
            display: block;
        }

        .date-picker input {
            color: #fff;
            background: transparent;
            border: 1px solid #fff;
            padding: 4px;
        }

        table {
            border-collapse: separate;
            border-spacing: 0 3em;
        }



        input[type="date"]::-webkit-calendar-picker-indicator {
            color: #fff;
            opacity: 1;
            display: block;
            /*    background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;*/
            width: 20px;
            height: 20px;
            border-width: thin;
        }

        .submit:hover {
            box-shadow: 1px 1px 5px #020202;
        }

        .submit {
            background-color: #222222;
            border-color: #222222;
            margin-top: 25px;
            padding: 15px 39px;
            box-shadow: 3px 2px 9px 2px #35333329;

        }



        .success.message {
            color: #03a507;
            font-weight: 500;
            font-size: 18px;
            text-shadow: 0px 0px 1.2px #000;
        }

        .error.message {
            color: #e40707;

        }

        .inputTabs.button {
            color: #fff;
            background-color: #0062cc;
            border-color: #0062cc;
        }

        .inputTabs.button:hover,
        .inputTabs.button:active {
            color: #fff !important;
            background-color: #0062cc !important;
            box-shadow: 1px 1px 5px #020202 !important;
        }

        #appraisal_form_body .company-logo img {
            border-radius: .25rem;

        }

        #appraisal_form_body .company-logo img.manager-logo {
            display: block;
            margin: auto;
            position: relative;
            top: 26%;
            width: 50px !important;

        }

        #appraisal_form_body .company-logo .manager-title {
            font-size: 15px;
            position: absolute;
            top: 110%;
            /*left: 35%;*/
            width: 100%;

        }

        #appraisal_form_body .loading-page,
        #appraisal_form_body .startUp-guid {
            display: flex;
            background: #000000a1;
            z-index: 110;
        }

        #appraisal_form_body .loading-page {
            z-index: 120;
        }

        #appraisal_form_body .loading-page section {
            width: 300px;
            height: 250px;
            margin: auto;
        }

        #appraisal_form_body .loading-page div {
            background: #fff;
            display: grid;
            border-radius: 11px;
            box-shadow: 3px 5px 6px 1px #4d5965;
        }

        #appraisal_form_body .loading-page div i {
            font-size: 60px;
            color: #0062cc;
        }

        .date-picker fieldset {
            border: 1px solid #00000047;
        }

        .date-picker fieldset legend {
            top: -8px !important;
            width: fit-content;
            background: #006fc9;
            width: -moz-fit-content;
        }

        nav.navbar {
            z-index: 100;
        }

        #appraisal_form_body .static-mark-description.is-pulsed {
            right: 30px;
            bottom: 56%;
            z-index: 111;
            border-radius: 35px;
            padding: 9px 13px;
            background: #006fc9;
            color: #fff;
            box-shadow: 1px 1px 2px 2px #0000004a;
            border: 0;
            animation: is-pulsed 1s ease infinite;
            transition: all .5s ease;
            outline: 0;
        }

        #appraisal_form_body .static-mark-description.is-pulsed:hover {
            animation: none;
            transform: scale(1.3);
        }

        #start_up_icon {
            opacity: 0;
        }

        #startUp_guid_popover_btn {
            background: #007bff;
            color: #fff;
            border-radius: 35px;
            border: 0;
            padding: 5px 10px;
        }

        .uploadFileReprort.success::-webkit-file-upload-button {
            background: #2222225c;
        }

        .uploadFileReprort.success {
            font-weight: 700;
        }

        .uploadFileReprort::-webkit-file-upload-button {
            color: white;
            display: inline-block;
            background: #212529e0;
            border: none;
            padding: 7px 15px;
            font-weight: 600;
            border-radius: 3px;
            white-space: nowrap;
            cursor: pointer;
            font-size: 10pt;
        }


        .uploadFileReprort_icon {
            background: #fff;
            border: 2px solid #007bff;
            padding: 1.6px 1.7px;
            border-radius: 10px;
            color: #007bff;
            font-size: 9px;
        }

        .reportDownloadBtn {
            background: aliceblue;
        }

        .reportDownloadBtn:hover {
            color: #fff;
            background: #000000c9 !important;
        }

        .popover.fade.show.bs-popover-left {
            border-radius: 20px;
            box-shadow: 0 6px 26px 0 rgba(19, 55, 82, .3);
        }

        .KRA_tab-1 textarea {
            height: 50px;
            border-color: #0000001a;
            border-radius: 4px;
        }

        .popover table {
            border-collapse: collapse;
        }

        .popover table tbody {
            height: 10px;
        }

        .popover table tbody tr {
            box-shadow: none;
        }

        .popover table tbody td {
            padding: 14px;
            border: 1px solid #0000000a;
        }

        #form_ManagerialLeadershipSkill input.radioButtons {
            width: 23px;
            height: 1.6em;
            cursor: pointer;
        }
        
        #three60DegreeModalCenter .modal-dialog form table {
             font-size: 12px;    
            border-collapse: collapse;
            border-radius: 6px;
            box-shadow: 1px 1px 2px 1px #7f94a48c;
            margin: auto;
        }
        #three60DegreeModalCenter .modal-dialog form table tr{
               border-radius: 0;
            box-shadow: none;
        }
       
        .tab.success_tab-11  .mailSendingToast{
            right:0;
        }

        @keyframes is-pulsed {
            0% {
                transform: scale(1.15);
            }

            50% {
                transform: scale(1.3);
            }

            100% {
                transform: scale(1.15);
            }
        }

        /*        ----------------------media query-----------------------------------*/
        @media only screen and (max-width: 1496px) and (min-width: 992px) {
            body .progress_inner {

                top: 64%;
            }

            .form-inline.date-picker fieldset {
                width: 100% !important;
            }

        }

        @media (min-width: 576px) {
            #three60DegreeModalCenter .modal-dialog {
                max-width: 1302px;
                margin: 1.75rem auto;
            }
        }

        /*@media only screen and (max-width: 1496px) and (min-width: 992px) {}*/
        /*        ----------------------media query-----------------------------------*/

    </style>
    <script>
        window.console = window.console || function(t) {};

    </script>
    <script>
        if (document.location.search.match(/type=embed/gi)) {
            window.parent.postMessage("resize", "*");
        }

    </script>
</head>

<body translate="no" id="appraisal_form_body">

    <button class="static-mark-description position-fixed is-pulsed" data-toggle="popover2"><i class="fa fa-hand-pointer-o" aria-hidden="true"></i></button>
    <span class="static-mark-description position-fixed is-pulsed " id="start_up_icon" data-toggle="startUp_guid_popover">sd</span>
    <div class="loading-page position-absolute vw-100 vh-100">
        <section>
            <div class="align-content-center m-auto w-100 h-100">
                <p><i class="fa fa-circle-o-notch fa-spin m-auto"></i></p>
                <p class="loading-content">Loading Your Appraisal Form</p>
            </div>

        </section>
    </div>
    <div class="startUp-guid position-fixed vw-100 vh-100">
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <section class="py-5" style="background: #006fc9;box-shadow: 0 12px 45px -8px rgba(0,111,201,.35);color: #fff">
                <div class="row w-100">
                    <div class="col-lg-3 company-logo p-0">
                        <img src="images/Principle+ACS-Logo-PNG-Small.png" height="80px" class="px-4 py-3 bg-white" />
                        <img src="images/managerlogo.png" class="w-50 manager-logo bg-white p-2 rounded-circle" />
                        <p class="text-white manager-title font-weight-light mb-0 mt-2">Manager Assessment</p>
                    </div>
                    <form class="form-inline col-lg-9" action="/action_page.php">

                        <div class=" col-lg-3 user-input-wrp mt-3">
                            <input id="employeeID" type="text" class="inputText" disabled required />
                            <label class="floating-label">Employee Id</label>
                        </div>

                        <div class="col-lg-3 user-input-wrp mt-3">
                            <input id="employeeName" type="text" class="inputText" disabled required />
                            <label class="floating-label">Name of Employee</label>
                        </div>

                        <div class="col-lg-3 user-input-wrp mt-3">
                            <input id="employeeDesignation" type="text" class="inputText" disabled required />
                            <label class="floating-label">Designation </label>
                        </div>
                        <div class=" col-lg-3 user-input-wrp mt-3">
                            <input id="employeeDepartment" type="text" class="inputText" disabled required />
                            <label class="floating-label">Department</label>
                        </div>

                        <div class="col-lg-3 user-input-wrp mt-4">
                            <input id="employeeGradeLevel" type="text" class="inputText" disabled required />
                            <label class="floating-label">Grade Level</label>
                        </div>

                        <div class="col-lg-3 user-input-wrp mt-4">
                            <input id="empoyeeJoiningDate" type="text" class="inputText" disabled required />
                            <label class="floating-label">Joining Date</label>
                        </div>

                        <div class="col-lg-3 user-input-wrp mt-4">
                            <input id="employeeManagerName" type="text" class="inputText" disabled required />
                            <label class="floating-label">Manager Name &amp; Id</label>
                        </div>

                        <div class="col-lg-3 user-input-wrp mt-4">
                            <input id="employeeTotalScore" type="text" class="inputText" disabled required />
                            <label class="floating-label">Total Overall score</label>
                            <!--                    <label class="floating-label">Total Overall score :(Out of 200 points)</label>-->
                        </div>

                        <div class="form-inline col-lg-5 ml-auto mt-3 date-picker justify-content-end">
                            <fieldset class="col-lg-12 user-input-wrp d-flex bg-white" style="border-radius: 4px;">
                                <legend class="floating-label text-white" style="padding: 0px 7px; font-size: 11px;"> Review Period</legend>
                                <div class="form-group col-lg-5 mb-2 mt-2  mx-auto d-flex text-sm-left text-dark">
                                    <label class="mr-2" style="font-weight: 700;">From:</label>
                                    <!--<input id="reviewPeriodFromDate" type="date" class="w-75 d-inline-block" value="2020-11-01" disabled>-->
                                    <p id="reviewPeriodFromDate" class="m-0" style="font-weight: 300;">2020-11-01</p>
                                </div>

                                <div class="form-group col-lg-5 mb-2 mt-2  mx-auto  d-flex text-sm-left  text-dark">
                                    <label  class="mr-2" style="font-weight: 700">To:</label>
                                    <!--<input id="reviewPeriodToDate" type="date" class="w-75 d-inline-block" value="2021-10-31" disabled>-->
                                     <p id="reviewPeriodToDate" class="m-0" style="font-weight: 300;">2021-10-31</p>
                                </div>
                            </fieldset>
                        </div>
                        
                        <!--<div class="form-inline col-lg-9 ml-auto mt-3 date-picker justify-content-end">-->
                        <!--    <fieldset class="col-lg-10 user-input-wrp">-->
                        <!--        <legend class="floating-label"> Review Period</legend>-->
                        <!--        <div class="form-group col-lg-5 mb-2 mt-2 d-inline-block text-sm-left">-->
                        <!--            <label for="email" class="mr-2 font-weight-light d-inline-block" style="">From:</label>-->
                        <!--            <input id="reviewPeriodFromDate" type="date" class="w-75 d-inline-block" value="2020-11-01" disabled>-->
                        <!--        </div>-->

                        <!--        <div class="form-group col-lg-5 mb-2 mt-2 d-inline-block text-sm-left">-->
                        <!--            <label for="pwd" class="mr-2 font-weight-light d-inline-block" style="">To:</label>-->
                        <!--            <input id="reviewPeriodToDate" type="date" class="w-75 d-inline-block" value="2021-10-31" disabled>-->
                        <!--        </div>-->
                        <!--    </fieldset>-->
                        <!--</div>-->




                    </form>
                </div>
            </section>

        </div>
    </nav>

    <!--------------------------------------------------------------------------------------------------------------------------------->
    <div class='mt-4 pt-2 progress'>
        <h1 class="position-absolute Appraisal-form-title">Appraisal Form</h1>
        <div class='progress_inner'>
            <div class='progress_inner__step KRA_tab_ASSISMENT'>
                <label for='step-1'>KRA-Target For Next Year</label>
            </div>
            <div class='progress_inner__step TAK_tab'>
                <label for='step-2'>Technical Knowledge &amp; Ability</label>
            </div>
            <div class='progress_inner__step EI_tab'>
                <label for='step-3'>Efficiency and Innovation</label>
            </div>
            <div class='progress_inner__step QOW_tab'>
                <label for='step-4'>Quality of Works</label>
            </div>
            <div class='progress_inner__step WHAD_tab'>
                <label for='step-5'>Works Habits-Attitude and Drive</label>
            </div>
            <div class='progress_inner__step IRTB_tab'>
                <label for='step-6'>Interpersonal Relations/Team work/Behaviour</label>
            </div>
            <div class='progress_inner__step CVHSE_tab'>
                <label for='step-7'>Company values, HSE</label>
            </div>
            <div class='progress_inner__step CAI_tab'>
                <label for='step-8'>Commercial awareness and initiatives</label>
            </div>
            <div class='progress_inner__step CPSPS_tab'>
                <label for='step-9'>Communication/ Presentation Skills and Planning Skills</label>
            </div>
            <div class='progress_inner__step MLS_tab'>
                <label for='step-10'>Managerial and Leadership Skills</label>
            </div>
            <input checked='checked' id='step-1' class="inputTabs" data-id="question-tab_1" type='radio'>
            <input id='step-2' class="inputTabs" data-id="question-tab_2" type='radio' disabled/>
            <input id='step-3' class="inputTabs" data-id="question-tab_3" type='radio' disabled />
            <input id='step-4' class="inputTabs" data-id="question-tab_4" type='radio' disabled />
            <input id='step-5' class="inputTabs" data-id="question-tab_5" type='radio' disabled />
            <input id='step-6' class="inputTabs" data-id="question-tab_6" type='radio' disabled />
            <input id='step-7' class="inputTabs" data-id="question-tab_7" type='radio' disabled />
            <input id='step-8' class="inputTabs" data-id="question-tab_8" type='radio' disabled />
            <input id='step-9' class="inputTabs" data-id="question-tab_9" type='radio' disabled />
            <input id='step-10' class="inputTabs" data-id="question-tab_10" type='radio' disabled />
            <div class='progress_inner__bar'></div>
            <div class='progress_inner__bar--set'></div>
            <div class='progress_inner__tabs'>

            </div>
        </div>
    </div>
    <!--    modal popup of 36 degrees form feedback-->
    <!-- Button trigger modal -->
    <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#360DegreeModalCenter">
  Launch demo modal
</button>-->

    <!-- Modal -->
    <div class="modal fade" id="three60DegreeModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">360 degree feedback status &amp; results</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">                  
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!--   -------------------->


    <!--<script src="https://static.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js"></script>-->
    <script src="js/constants.js?version= 1.2"></script>
    <script src="js/main.js?version= 1.7"></script>
    <script src="js/DynamicForms.js?version= 2.1"></script>
    <script src="js/getParamsFromURL.js?version= 1.0"></script>
    <script src="js/Cookies.js?version= 1.0"></script>

</body>

</html>
