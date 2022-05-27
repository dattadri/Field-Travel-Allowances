$(document).ready(function () {
    var below767px;
    $('[data-toggle="tooltip"]').tooltip();
    var navbarHeight = $("nav.navbar").outerHeight(true);
    //console.log('calc(100% - ' + navbarHeight + 'px)');
    $("#user-info-data").css({
        'height': 'calc(100vh - ' + navbarHeight + 'px)'
    });
    $("#loader-sideNav").hide();
    checkPosition();
    var dynamicUiObj = new dynamicUi();

    var multiDimensionMap = new Map();
    sidenavBarEmployeeInfo(GET_ALL_EMPLOYEE_INFO);

    function sidenavBarEmployeeInfo(searchKey) {
        $("#user-info-data").html("");
        $("#loader-sideNav").show();
        $.ajax({
            type: "GET",
            url: BASE_URL + "searchEmployeeDetails?value=" + searchKey,
            success: function (response) {
                $("#loader-sideNav").hide();
                console.log(response);
                if (response.length == 0) {
                    $("#user-info-data").append('<h5 class="text-center p-4  font-weight-bold">No Employee Details Found.</h5>');
                }

                for (var loopCount = 0; loopCount < response.length; loopCount++) {

                    //console.log(response[loopCount]);
                    var allUser_info_dataUi = dynamicUiObj.allUser_info_data(response[loopCount].empId, response[loopCount].empName, response[loopCount].selfSubmit, response[loopCount].managerSubmit);
                    $("#user-info-data").append(allUser_info_dataUi);

                    multiDimensionMap.set(response[loopCount].empId, response[loopCount]); // storing employee data in array with employeeid reference eg:--> 180291[]
                }
                afterAppendingUiLoadFunctionalities();
            },
            error: function (jqXHR) {
                console.log("error on getting data from API");

            }

        });
    }

    $("#searchById_NameForm").submit(function (e) {
        e.preventDefault();
        sidenavBarEmployeeInfo($("input#searchById_NameInput").val());

    });
    $("#refreshSpan").click(function () {
        sidenavBarEmployeeInfo(GET_ALL_EMPLOYEE_INFO);
    });



    function afterAppendingUiLoadFunctionalities() {

        $(".divEmployeeInfo").click(function () {
            $(".divEmployeeInfo").removeClass("active");
            $("#submissionStatusTab").html("");
            $(this).addClass("active");
            var empID = $(this).attr("data-id");
            var employeeFullInfoObj = getEmployeeAppraisalInfo(empID);
            console.log(employeeFullInfoObj);
            if (employeeFullInfoObj.gradeLevel == GRADE_LEVEL3 || employeeFullInfoObj.gradeLevel == GRADE_LEVEL4 || employeeFullInfoObj.gradeLevel == GRADE_LEVEL5) {

                var submissionStatusTabUi = dynamicUiObj.L3_L4_L5_AppraisalSumitionStatusRelatedUi(employeeFullInfoObj);

            } else {
                var submissionStatusTabUi = dynamicUiObj.L1_L2_AppraisalSumitionStatusRelatedUi(employeeFullInfoObj);
            }

            $("#submissionStatusTab").append(submissionStatusTabUi);
            if (below767px) { //if device is mobie or tab
                $(".sideNavbarRow").hide();
                $("#backBtnToAllEmpInfo").show();
            }
        });


        if (!below767px) { //if device is desktop
            $(".divEmployeeInfo").first().trigger("click");
        }

    }


    $("#dashboardPopUpButton").click(function () {
        $("#dashboardModalBody").html('<h2 class="text-center"><i class="fa fa-spinner fa-pulse" aria-hidden="true"></i></h2>');
        $.ajax({
            type: "POST",
            url: BASE_URL + "dashBord",
            success: function (responseData) {

                var modalPopupcontent = dynamicUiObj.getDashBoardContent(responseData);
               // console.log(modalPopupcontent);
               get360degreeResponse(modalPopupcontent);
                //$("#dashboardModalBody").html(modalPopupcontent);
            },
            error: function (error) {
                console.log("error on getting DashBoard modal popup content");

            }
        });
      


    });
      // model-popup content 360degree 
        function get360degreeResponse(modalPopupcontent){
            
        $.ajax({
            type:"POST",
            url:BASE_URL+"dashBordL3TOL5",
            success: function(responseData){
                var modalPopup360DegreeContent=dynamicUiObj.get360DegreeDashBoardContent(responseData);
                console.log(modalPopup360DegreeContent);
                $("#dashboardModalBody").html(modalPopupcontent+modalPopup360DegreeContent);
            },
            error: function(error){
                console.log("error on getting DashBoard L3 to L5 360degree popup response");
            }
        });
        }
    $("#formBulkExcelDownload").submit(function(e){
        $("#submitBtn i").removeClass("d-none");
        //$(this).serialize();
        $.ajax({
            type: "POST",
            url:BASE_URL+"createExcel",
            data:$(this).serialize(),
            success: function(data){
                console.log(data);
                $("#submitBtn i").addClass("d-none");
            },
            error: function(error){
                console.log("error on getting response of downloading excel  API");
            }
        });
        
    });

    $("#backBtnToAllEmpInfo").click(function () { // in mobile
        $(".sideNavbarRow").show();
    });



    function getEmployeeAppraisalInfo(empID) {

        return multiDimensionMap.get(empID);

    }

    function checkPosition() {
        below767px = false;
        if (window.matchMedia('(max-width: 767px)').matches) {
            below767px = true;
        }
    }


});
