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


        * {
            box-sizing: border-box;
        }

        body {
            font-size: 14px;
            font-family: Poppins;
        }

        table.table {
            /*box-shadow: 1px 1px 3px 1px #00000026;*/
             border: 1px solid #00000021;
        }

        table.table th,
        table.table td {
            vertical-align: middle !important;
        }

        .AttitudeAndDriveTR td,
        .LeadershipTR td {
            background: #5f9ea099;
            border: 1px solid #5f9ea099;
        }

        thead>tr {

            background: #ececec;

        }

        #functionSkillsRelatedUi table tbody tr:last-child td,
        #administrativeSkillsRelatedUi table tbody tr:last-child td {
            background: #5f9ea099;
            border: 1px solid #5f9ea099;
        }

        #finalGradeValue {
            vertical-align: middle;
            background: #28a745c9;
        }
        .bg-blue{
            background-color:#006fc9!important;
        }
        .commonEmployeeDetails th {
            background: #ececec5e;
        }

        .ManagerCommentDiv {
            box-shadow: 1px 1px 3px 1px #00000026;
            height: 120px;
            overflow: auto;
        }
         #appraisal_form_body .loading-page {
            display: flex;
            background: #0000005c;
            z-index: 100;
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
        .reportDownloadBtn:hover {
    background: #000000c9 !important;
}
        
        .header{
               background: #ffffff;
                box-shadow: 1px -2px 4px 3px rgb(0 0 0 / 21%);
        }
        .header h3.companyName{
            color: #006fc9;
            font-weight: 600;
            margin-bottom: 1px;
        }
        .header p{
            font-size:10px;
        }
        .header h6{
            font-size: 14px
        }
        /*----------need remove------------*/
        .table {
                margin-bottom:10px;
        }
        /*#grandTotalRelatedUi{*/
        /*    margin-top: 40%;*/
        /*}*/
        .table td, .table th {
        border: 1px solid #c5c5c5b0;
         font-size: 12px;
        }

        
        /*-----------------------changes done on 06-12-2021---*/
        @media print {
         .kraTable tbody tr:not(:last-child){
                height: 73px;
        }
         table td, table th{
            padding:0px 2px !important;
        }
      .fileAttachmentQn1,.fileAttachmentQn2,.fileAttachmentQn4{
              height: 65px;
      }
        .fileAttachmentQn3{
          height: 48px;
      }
       

     .pageBreakTwo{
            page-break-before: always;
        }
         .pageBreakOne{
            page-break-after: always;
        }
        
    .efficny_InvtnTable td .d-flex div,.techKnwTable td .d-flex div{
        padding: 0!important;
    margin: 0!important;
    }
    .efficny_InvtnTable td .d-flex div a, .techKnwTable td .d-flex div a{
        padding: 0 2px!important;
    }
    .sendResultsBtn{
        display:none;
    }
    .bg-blue{
        color:#000!important;
    }
        }
  /*- ----------------------------------end changes done on 06-12-2021---*/
        
        
        

        /*  ----------------------media query-----------------------------------*/
@media (min-width: 576px){
.modal-dialog {
    max-width: 544px;
    margin: 1.75rem auto;
}
}
     /*  ----------------------/media query-----------------------------------*/
    </style>

</head>

<body translate="no" id="appraisal_form_body">
    <div class="loading-page position-fixed vw-100 vh-100">
        <section>
            <div class="align-content-center text-center m-auto w-100 h-100">
                <p><i class="fa fa-circle-o-notch fa-spin m-auto"></i></p>
                <p class="loading-content">Loading Your Appraisal Form</p>
            </div>

        </section>
    </div>
    <div class="container-fuild">

    </div>
    <div class="modal fade" id="modelPopupConfirmation" tabindex="-1" role="dialog" aria-labelledby="Title" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content m-auto">
                <div class="modal-header">
                    <h5 class="modal-title">Send Results</h5>
                    <button type="button" class="close" data-dismiss="modal" arial-label="close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                </div>
                <div class="modal-body">
                    <table>
                        <tbody><tr style="line-height: 2;">
                            <th class="pr-2">Employee Id:</th>
                            <td id="modelEmployeeIdTd"></td>
                            </tr>
                            <tr style="line-height: 2;">
                                <th>Employee Name:</th>
                                <td id="modelEmployeeNameTd"></td>
                            </tr>
                             <tr style="line-height: 2;">
                                 <th>Employee Email:</th>
                                 <td id="modelEmployeeEmailTd"></td>
                                 </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <h6 class="mr-auto text-success"></h6>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button id="sendMailBtnToEmplyeeForm" type="submit" class="btn btn-primary">Send Mail <i class="fa fa-spinner fa-spin d-none ml-1"></i></button>
                </div>
            </div>
        </div>        
    </div>

</body>
<script src="js/constants.js?version=1.0"></script>
<script src="js/main.js?version=1.4"></script>
<script src="js/getParamsFromURL.js?version=1.0"></script>
<script src="js/AppraisalOverAllResultUi.js?version=1.8"></script>

</html>
