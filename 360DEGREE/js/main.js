$(document).ready(function () {
    var empId, typeOfForm, empName, designation, department, gradeLevel, joiningDate, managerId, managerName, totalOverAllscore = "335";

    var urlParamsObj = new getUrlParams();
    empId = urlParamsObj.GetUrlParameter("empId");
    typeOfForm = urlParamsObj.GetUrlParameter("typeOfForm");
    console.log(typeOfForm);


    if (validateFormType(typeOfForm)) {
        getDataFromApi();
    } else {
        $("div.loading-page").show();
        $("div.loading-page #loading_page_content").html("INVALID URL");
        $("div.loading-page .fa-circle-o-notch").hide();
    }

    function getDataFromApi() {


        $.ajax({
            url: BASEURL + GET_VALUES_URL,
            type: "POST",
            data: {
                empId: empId,
                typeOfForm: typeOfForm
            },
            success: function (responseJson) {
                if (responseJson.length == 0) {
                    $("div.loading-page #loading_page_content").html("INVALID URL");
                    $("div.loading-page .fa-circle-o-notch").hide();
                } else {
                    console.log(responseJson);
                    $("div.loading-page").hide();
                    appendValuesToUi(responseJson);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error on getting(fetching) Values from API resquesting");
                $("div.loading-page .fa-circle-o-notch").hide();
                $("div.loading-page #loading_page_content").html("URL INVALID");
            }

        });
    }


    function appendValuesToUi(responseJson) {

        empName = responseJson.empName;
        designation = responseJson.designation;
        department = responseJson.department;
        managerName = responseJson.managerName;
        managerId = responseJson.managerId;
        gradeLevel = responseJson.gradeLevel;
        joiningDate = responseJson.employeeJoiningdate;
        $("#employeeID").val(empId);
        $("#employeeName").val(empName);
        $("#employeeDesignation").val(designation);
        $("#employeeDepartment").val(department);
        $("#employeeGradeLevel").val(gradeLevel);
        $("#empoyeeJoiningDate").val(joiningDate);
        $("#employeeManagerName").val(managerName);
        $("#employeeTotalScore").val(totalOverAllscore);


        var DynamicUiObj = new Three60DegreeRelatedUi();
        $("#DynamicUI").append(DynamicUiObj.tableUi(typeOfForm, responseJson));
        afterAppendingUi();
        checkSubmissionStatus(responseJson.submitStatus);
    }

    function afterAppendingUi() {
        $("select.selectedTagValues").change(function () {
            $("#totalRating").html(getTotalOfallSelectedValues());
        });


        $("#three60DegreeForm").submit(function (e) {
            e.preventDefault();
            console.log($(this).serializeArray());
            var CurrentForm = $(this);
            var formValueMap = new Map();
            var serialisedDataArray = $(this).serializeArray();
            var data_id = $(this).attr("data-id");
            $(".message").removeClass("text-danger");
            storeSerialisedDataArrayToMapObjects(serialisedDataArray, formValueMap, data_id);
            console.log(formValueMap);
            var content = strMapToJson(formValueMap);
            console.log(content);
            $.ajax({
                url: BASEURL + SUBMIT_VALUES_URL,
                type: "POST",
                data: {
                    formValues: content
                },
                success: function (response) {
                    console.log(response);
                    $(".message").html(response.message);
                    if (!response.error) {
                        CurrentForm.find("select").addClass("pointerNone");
                        $("button.submit").remove();
                    } else {
                        $(".message").addClass("text-danger");
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("error on submitting values to Api");
                }
            });
        });



    }


    function validateFormType(typeOfForm) {
        var valid = false;
        switch (typeOfForm) {
            case CUSTOMER_FILE_TYPE:
            case SUPER_BOSS_FILE_TYPE:
            case OTHER_DEPT_FILE_TYPE:
            case FINANCE_FILE_TYPE:
            case SUB_ORDINATE_FILE_TYPE:
                valid = true;
                break;


        }

        return valid;
    }



    function getTotalOfallSelectedValues() {
        var sumOftheAllMarks = 0;
        $("select.selectedTagValues").each(function () {

            sumOftheAllMarks += Number($(this).val());
        });
        return sumOftheAllMarks;
    }

    function storeSerialisedDataArrayToMapObjects(serialisedDataArray, formValueMap) {
        for (var loopCount = 0; loopCount < serialisedDataArray.length; loopCount++) {
            formValueMap.set(serialisedDataArray[loopCount].name, serialisedDataArray[loopCount].value);
        }
        formValueMap.set("empId", empId);
        formValueMap.set("typeOfForm", typeOfForm);


    }

    function checkSubmissionStatus(submitStatus) {
        if (submitStatus == SUBMITTED) { // SUBMITTED variable constant.js
            $("#three60DegreeForm").find("select").addClass("pointerNone");
            $("button.submit").remove();
        }

    }

    function strMapToJson(strMap) {
        console.log(strMapToObj(strMap));
        return JSON.stringify(strMapToObj(strMap));
    }

    function strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }

});
