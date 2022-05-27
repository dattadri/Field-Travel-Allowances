<!DOCTYPE html>
<html lang="en">

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>



    <title>Appraisal Form</title>
    <style>
        /*        @import url("https://fonts.googleapis.com/css?family=Nunito:400,900");*/
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');


        body {
            font-family: 'Poppins', sans-serif;
            color: #2f2f2fcc;
            text-align: center;
            font-weight: 900;
            font-size: .75rem;
        }

        /*--------------------------------------------------------*/
     

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


        .date-picker input {
            color: #fff;
            background: transparent;
            border: 1px solid #fff;
            padding: 4px;
        }

        table.table {
            border-collapse: collapse;
            border-spacing: 0 3em;
        }

        table.table td {
            font-weight: 100;
            text-align: start;
        }

        table.table {
            border-radius: 6px;
            box-shadow: 1px 1px 2px 1px #7f94a48c;

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
        select{
                border: 1px solid #00000030;
                width:100%;
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
        .pointerNone{
            pointer-events: none;
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

        #appraisal_form_body .company-logo .typeOfUserName {
            font-size: 15px;
            position: absolute;
            top: 110%;
            /*left: 35%;*/
            width: 100%;

        }

        #appraisal_form_body .loading-page {
            display: flex;
            background: #0000005c;
            z-index: 101;
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


        /*        ----------------------media query-----------------------------------*/
        @media only screen and (max-width: 1496px) and (min-width: 992px) {
            body .progress_inner {

                top: 64%;
            }

            .form-inline.date-picker fieldset {
                width: 100% !important;
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

    <div class="loading-page position-fixed vw-100 vh-100">
        <section>
            <div class="align-content-center m-auto w-100 h-100">
                <p><i class="fa fa-circle-o-notch fa-spin m-auto"></i></p>
                <p id="loading_page_content">Loading FeedBack Form</p>
            </div>

        </section>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <section class="py-5" style="background: #006fc9;box-shadow: 0 12px 45px -8px rgba(0,111,201,.35);color: #fff">
                <div class="row w-100">
                    <div class="col-lg-3 company-logo p-0">
                        <img src="../images/Principle+ACS-Logo-PNG-Small.png" height="80px" class="px-4 py-3 bg-white" />
                       
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

                        <div class="form-inline col-lg-9 ml-auto mt-3 date-picker justify-content-end">
                            <fieldset class="col-lg-10 user-input-wrp">
                                <legend class="floating-label"> Review Period</legend>
                                <div class="form-group col-lg-5 mb-2 mt-2 d-inline-block text-sm-left">
                                    <label for="email" class="mr-2 font-weight-light d-inline-block" style="">From:</label>
                                    <input id="reviewPeriodFromDate" type="date" class="w-75 d-inline-block" value="2020-11-01" disabled>
                                </div>

                                <div class="form-group col-lg-5 mb-2 mt-2 d-inline-block text-sm-left">
                                    <label for="pwd" class="mr-2 font-weight-light d-inline-block" style="">To:</label>
                                    <input id="reviewPeriodToDate" type="date" class="w-75 d-inline-block" value="2021-10-31" disabled>
                                </div>
                            </fieldset>
                        </div>




                    </form>
                </div>
            </section>

        </div>
    </nav>

    <!--------------------------------------------------------------------------------------------------------------------------------->
    <div id="DynamicUI" class='mt-4 pt-2 w-75 m-auto pb-4'>
<h3 class="my-3">360 Degree FeedBack</h3>

    </div>
    <!--<script src="https://static.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js"></script>-->
    <script src="js/constants.js?version= 1.0"></script>
    <script src="js/main.js?version= 1.0"></script>
    <script src="js/getPrametersFromUrl.js?version= 1.0"></script>
    <script src="js/DynamicUi.js?version= 1.0"></script>
</body>

</html>
