$(document).ready(function () {



    var formSubmitedStatus, LinkType, empId, empName, empEmail, managerId, managerName, managerEmail, gradeLevel, submitFormSubBaseURL, getFormDetailsSubBaseURL, cookiesObj, typeOfMarks = "Self-marks:";


    getDataFromDatabase();

    function getDataFromDatabase() {

        var obj = new getEmpid();

        LinkType = obj.GetUrlParameter("linkType");
        var EmployeeID = obj.GetUrlParameter("empId");
        var ManagerID = obj.GetUrlParameter("managerId");

        if (LinkType == SELF_ASSESSMENT) { // SELF_ASSESSMENT is costant variable  constant.js
            submitFormSubBaseURL = "insertSelf";
            getFormDetailsSubBaseURL = "EmployeeFullInfo?empId=" + EmployeeID;

            $(".manager-title").html("Self Assessment");

        } else if (LinkType == MANAGER_ASSESSMENT) {
            submitFormSubBaseURL = "insertManager";
            getFormDetailsSubBaseURL = "EmployeeManagerFullInfo?empId=" + EmployeeID + "&mId=" + ManagerID;
            typeOfMarks = "Manager-marks: ";
        }

        //alert(EmployeeID);
        //var eID= $("#empId").val();


        // console.log("http://principleacs.net/Appraisal_Form_API/public/EmployeeFullInfo?empId="+EmployeeID,);
        console.log(baseURL + getFormDetailsSubBaseURL);
        $.ajax({
            type: "GET",
            url: baseURL + getFormDetailsSubBaseURL,
            success: function (response) {

                if (response.length == 0) {
                    $(".loading-page .loading-content").html("Invalid URL");
                    $(".loading-page .loading-content").css("font-size", "32px");
                    $(".loading-page i").addClass("d-none");

                } else if (!response.expire) {

                    $(".loading-page").addClass("d-none");

                    appendTheValuesToUI(response);

                    cookiesObj = new cookiesContent();
                    var cookies = cookiesObj.checkCookie();
                    if (!cookies) {
                        $("#start_up_icon").trigger("click");
                    } else {
                        $(".startUp-guid").remove();
                        $("#start_up_icon").remove();
                    }

                } else {
                    $(".loading-page .loading-content").html(response.expireMessage);
                    $(".loading-page .loading-content").css("font-size", "23px");
                    $(".loading-page i").addClass("d-none");

                }
                // console.log(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $(".loading-page .loading-content").html("URL Invalid");
                $(".loading-page .loading-content").css("font-size", "32px");
                $(".loading-page i").addClass("d-none");

                console.log("error while getting data from EmployeeFullReport API");

            }
        });


    }









    function appendTheValuesToUI(responseData) {
        formSubmitedStatus = new Map();
        formSubmitedStatus.set("KRA_tab", responseData.KRA);
        formSubmitedStatus.set("TAK_tab", responseData.TAK);
        formSubmitedStatus.set("EI_tab", responseData.EI);
        formSubmitedStatus.set("QOW_tab", responseData.QOW);
        formSubmitedStatus.set("WHAD_tab", responseData.WHAD);
        formSubmitedStatus.set("IRTB_tab", responseData.IRTB);
        formSubmitedStatus.set("CVHSE_tab", responseData.CVHSE);
        formSubmitedStatus.set("CAI_tab", responseData.CAI);
        formSubmitedStatus.set("CPSPS_tab", responseData.CPSPS);
        formSubmitedStatus.set("MLS_tab", responseData.MLS);

        empId = responseData.empId;
        empName = responseData.empName;
        empEmail = responseData.empEmail;
        managerId = responseData.managerId;
        managerName = responseData.managerName;
        managerEmail = responseData.managerEmail;
        gradeLevel = responseData.gradeLevel;

        $("#employeeName").val(empName);
        $("#employeeID").val(empId);
        $("#employeeDesignation").val(responseData.designation);
        $("#employeeGradeLevel").val(gradeLevel);
        $("#employeeDepartment").val(responseData.department);
        $("#employeeManagerName").val(managerName + "-" + managerId);
        $("#empoyeeJoiningDate").val(responseData.employeeJoiningdate);

        var form = new DynamicForm();
        //var tab1 = form.formRelatedUi_KRA_Performance(SelectedValuesArrayMap, 'L3', typeOfMarks); // //sample const variable in constant.js
        var tab1 = getSelectedTab1Ui(form, responseData.kra_allocation, responseData.KRA); // //sample const SelectedValuesArrayMap
        console.log(responseData.kra_allocation);
        console.log(responseData.kra_allocation.MaxMarks_Q1);
        // var tab1 = form.formRelatedUi_KRA_Allocation(SelectedValuesArrayMap, 'L3', typeOfMarks); // //sample const SelectedValuesArrayMap
        var tab2 = form.formRelatedUi_technical_Knowledge(responseData.TAK, responseData.technical_ability_and_knowledge, gradeLevel, typeOfMarks, LinkType);
        var tab3 = form.formRelatedUi_efficiency_Innovation(responseData.EI, responseData.efficiency_and_innovation, gradeLevel, typeOfMarks, LinkType);
        var tab4 = form.formRelatedUi_qualityOfWork(responseData.quality_of_work, gradeLevel, typeOfMarks);
        var tab5 = form.formRelatedUi_workHabits_Attitude_drives(responseData.work_habits_attude_and_drive, gradeLevel, typeOfMarks);
        var tab6 = form.formRelatedUi_interpersonal_Relations_Teamwork_Behaviour(responseData.interpersonal_relations_teamwork_behaviour, gradeLevel, typeOfMarks);
        var tab7 = form.formRelatedUi_companyValues(responseData.company_values_hse, gradeLevel, typeOfMarks);
        var tab8 = form.formRelatedUi_commercialAwareness(responseData.commercial_awareness_and_initiatives, gradeLevel, typeOfMarks);
        var tab9 = form.formRelatedUi_comm_personalSkillsAndPlanning(responseData.comm_presentation_skills_and_planning_skills, gradeLevel, typeOfMarks);
        var tab10 = form.formRelatedUi_managerial_LeadershipSkill(responseData.managerial_and_leadership_skills, gradeLevel, LinkType, typeOfMarks);
        var tab11 = form.formRelated_successMessageTab(LinkType);


        if (gradeLevel == GRADE_LEVEL1 || gradeLevel == GRADE_LEVEL2) {
            $("#employeeTotalScore").val(GRADE_L1_L2_MAXSCORE);
        } else {
            $("#employeeTotalScore").val(GRADE_L3_L4_L5_MAXSCORE);
        }

        $(".progress_inner__tabs").append(tab1 + tab2 + tab3 + tab4 + tab5 + tab6 + tab7 + tab8 + tab9 + tab10 + tab11);
        onloadNavigation();
        UpdateProgressBarTabsStatus(true); // 


        $('[data-toggle="popover2"]').popover({
            html: true,
            sanitize: false,
            storage: false,
            selector: false,
            content: function () {
                return staticMarksDescription(gradeLevel);
            }

        });
        $('[data-toggle="startUp_guid_popover"]').popover({
            html: true,
            sanitize: false,
            storage: false,
            selector: false,
            content: function () {
                return startUp_guid_popover_content();
            }

        });




    }


    function onloadNavigation() {
        $(".inputTabs").click(function () {



            var id = $(this).attr("data-id");
            $(".tab").removeClass("tabDispalyBlock");
            $(".message").removeClass("error");
            $(".message").html("");

            switch (id) {
                case 'question-tab_1':

                    $('.tab.KRA_tab-1').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "0%"
                    });
                    if (formSubmitedStatus.get("KRA_tab") == FORM_SUBMITED) {
                        $(".btn.btn-primary.KRA_tab.submit span").html("Update");
                    }
                    break;
                case 'question-tab_2':

                    $('.tab.TAK_tab-2').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "8%"
                    });
                    if (formSubmitedStatus.get("TAK_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.TAK_tab-2 .inputTabs.float-right.nextbtn').addClass("inputDisable");
                    } else {
                        $('.tab.TAK_tab-2 .submit').remove();
                        $('.tab.TAK_tab-2  select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.TAK_tab').addClass("active");

                    }
                    break;
                case 'question-tab_3':

                    $('.tab.EI_tab-3').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "19%"
                    });
                    if (formSubmitedStatus.get("EI_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.EI_tab-3 .inputTabs.float-right.nextbtn').addClass("inputDisable");
                    } else {
                        $('.tab.EI_tab-3 .submit').remove();
                        $('.tab.EI_tab-3  select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.EI_tab').addClass("active");

                    }
                    break;
                case 'question-tab_4':
                    $('.tab.QOW_tab-4').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "27%"
                    });
                    if (formSubmitedStatus.get("QOW_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.QOW_tab-4 .inputTabs.float-right.nextbtn').addClass("inputDisable");
                    } else {
                        $('.tab.QOW_tab-4 .submit').remove();
                        $('.tab.QOW_tab-4  select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.QOW_tab').addClass("active");

                    }
                    break;
                case 'question-tab_5':
                    //alert(WHAD);
                    $('.tab.WHAD_tab-5').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "37%"
                    });
                    if (formSubmitedStatus.get("WHAD_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.WHAD_tab-5 .inputTabs.float-right.nextbtn').addClass("inputDisable");
                    } else {
                        $('.tab.WHAD_tab-5 .submit').remove();
                        $('.tab.WHAD_tab-5  select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.WHAD_tab').addClass("active");

                    }
                    break;
                case 'question-tab_6':
                    //alert(IRTB);
                    $('.tab.IRTB_tab-6').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "46%"
                    });
                    if (formSubmitedStatus.get("IRTB_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.IRTB_tab-6 .inputTabs.float-right.nextbtn').addClass("inputDisable");
                    } else {
                        $('.tab.IRTB_tab-6 .submit').remove();
                        $('.tab.IRTB_tab-6  select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.IRTB_tab').addClass("active");

                    }
                    break;
                case 'question-tab_7':
                    $('.tab.CVHSE_tab-7').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "54%"
                    });
                    if (formSubmitedStatus.get("CVHSE_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.CVHSE_tab-7 .inputTabs.float-right.nextbtn').addClass("inputDisable");

                    } else {
                        $('.tab.CVHSE_tab-7 .submit').remove();
                        $('.tab.CVHSE_tab-7  select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.CVHSE_tab').addClass("active");

                    }
                    break;
                case 'question-tab_8':
                    $('.tab.CAI_tab-8').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "63%"
                    });
                    if (formSubmitedStatus.get("CAI_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.CAI_tab-8 .inputTabs.float-right.nextbtn').addClass("inputDisable");

                    } else {
                        $('.tab.CAI_tab-8 .submit').remove();
                        $('.tab.CAI_tab-8  select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.CAI_tab').addClass("active");

                    }
                    break;
                case 'question-tab_9':
                    $('.tab.CPSPS_tab-9').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "72%"
                    });
                    if (formSubmitedStatus.get("CPSPS_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.CPSPS_tab-9 .inputTabs.float-right.nextbtn').addClass("inputDisable");

                    } else {
                        $('.tab.CPSPS_tab-9 .submit').remove();
                        $('.tab.CPSPS_tab-9 select').css("pointer-events", "none");
                        //                         $('.progress_inner__step.CPSPS_tab').addClass("active");

                    }
                    break;
                case 'question-tab_10':
                    $('.tab.MLS_tab-10').addClass("tabDispalyBlock");
                    $('.progress_inner__bar').css({
                        "width": "81%"
                    });
                    if (formSubmitedStatus.get("MLS_tab") == FORM_NOT_AT_SUBMITED) {
                        $('.tab.MLS_tab-10 .inputTabs.float-right.nextbtn').addClass("inputDisable");
                    } else {
                        $('.tab.MLS_tab-10 .submit').remove();
                        $('.tab.MLS_tab-10 select').css("pointer-events", "none");
                        $('.tab.MLS_tab-10 .comment-tab textarea').css("pointer-events", "none");
                        $('.tab.MLS_tab-10 input.radioButtons').css("pointer-events", "none");
                        //                         $('.progress_inner__step.MLS_tab').addClass("active");
                    }
                    break;


            }

        });
        loadFileUploadingFunctionality();




        $("#form_KRA_Allocation input.maxMarksInput").change(function () {
            if ((getKRA_MaximumMarks() - getKRAInputTotal()) < 0) {
                $("#form_KRA_Allocation .remaining-marks").addClass("text-danger");
            } else {
                $("#form_KRA_Allocation .remaining-marks").removeClass("text-danger");
            }
            $("#form_KRA_Allocation .remaining-marks span.availableMarks").html(getKRA_MaximumMarks() - getKRAInputTotal());
            $("#form_KRA_Allocation .remaining-marks.score-board span.inputTotal").html(getKRAInputTotal());
        });

        $("#form_KRA_Allocation input.maxMarksInput.optional-input").change(function () {
            if ($(this).val() > 0) {
                $("#form_KRA_Allocation textarea.optional-textarea").attr("required", "true");
            } else {
                $("#form_KRA_Allocation textarea.optional-textarea").removeAttr("required", "true");
            }
        });

        $("#form_ManagerialLeadershipSkill input[name='VQ']").click(function () {
            var data_id = $(this).attr("data-id");

            $("#form_ManagerialLeadershipSkill .selectedValue").html("No");
            $("#form_ManagerialLeadershipSkill #" + data_id).html("Yes");
        });





        $(".formSubmit").submit(function (e) {

            e.preventDefault();
            var formValueMap = new Map();
            var thisForm = $(this);
            var serialisedData = thisForm.serializeArray();
            var data_id = thisForm.attr("data-id");
            $('.message.' + data_id).html("");



            var submitFormDetailsTo = getSubmitFormDetailsValue(data_id);
            storeFromSerializedvaluesToMap(serialisedData, formValueMap, data_id);


            var content = strMapToJson(formValueMap);

            // var content = thisForm.serialize() + "&empId=" + empId + "&managerId=" + managerId + "&gradeLevel=" + gradeLevel;
            console.log("content" + content);

            if (data_id == "KRA_tab") {
                if (checkRequirement() == "EqualTo") {
                    sendRequestThroughAjax(submitFormDetailsTo, content, thisForm, data_id);

                } else if (checkRequirement() == "LessThan") {

                    alert("Allocated Marks " + getKRAInputTotal() + ", Required " + getKRA_MaximumMarks());
                } else {
                    alert("Maximum Allocated Marks exceeded");

                }
            } else {

                sendRequestThroughAjax(submitFormDetailsTo, content, thisForm, data_id);
            }







        });
        $("#reSendMailToManager").click(function () {
            $("#reSendMailToManager i").removeClass("d-none");
            var resendMailValueMap = new Map();
            resendMailValueMap.set("empId", empId);
            resendMailValueMap.set("managerId", managerId);
            resendMailValueMap.set("managerName", managerName);
            resendMailValueMap.set("empName", empName);
            resendMailValueMap.set("empEmail", empEmail);
            resendMailValueMap.set("managerEmail", managerEmail);
            resendMailValueMap.set("gradeLevel", gradeLevel);
            var content = strMapToJson(resendMailValueMap);
            console.log(content);

            $.ajax({
                type: "POST",
                url: baseURL + "reSendMailToManager",
                data: {
                    value: content

                },
                success: function (response) {
                    $("#reSendMailToManager i").addClass("d-none");
                    console.log(response);
                    $('.message.mailing_tab').html(response.message);
                    if (!response.error) {

                    } else {
                        $('.message.mailing_tab').addClass("error");
                    }

                }
            });

        });
    }


    function UpdateProgressBarTabsStatus(triggerLastSubmittedTab) {

        // if (formSubmitedStatus.get("KRA_tab") == FORM_NOT_AT_SUBMITED ) {

        // }
        if (triggerLastSubmittedTab == true) {
            $("#step-1").trigger("click");
        }
        if (formSubmitedStatus.get("KRA_tab") == FORM_SUBMITED) {
            $('.progress_inner__step.KRA_tab').addClass("active");
        }

        if ((formSubmitedStatus.get("TAK_tab") == FORM_SUBMITED && formSubmitedStatus.get("EI_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("EI_tab") == FORM_SUBMITED) {
            //alert();
            $("#step-3").removeAttr("disabled");
            $('.progress_inner__step.TAK_tab').addClass("active");
            if (LinkType == SELF_ASSESSMENT) {
                $('.progress_inner__step.KRA_tab   ').addClass("active");
            }
            if (triggerLastSubmittedTab == true) {
                $("#step-2").trigger("click");
            }

        } else {
            //alert();
            //$("body .progress_inner__step:nth-of-type(2):before").css("background", "green");


        }

        if ((formSubmitedStatus.get("EI_tab") == FORM_SUBMITED && formSubmitedStatus.get("QOW_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("QOW_tab") == FORM_SUBMITED) {
            $("#step-4").removeAttr("disabled");
            $('.progress_inner__step.EI_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-3").trigger("click");
            }
        } else {}


        if ((formSubmitedStatus.get("QOW_tab") == FORM_SUBMITED && formSubmitedStatus.get("WHAD_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("WHAD_tab") == FORM_SUBMITED) {
            $("#step-5").removeAttr("disabled");
            $('.progress_inner__step.QOW_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-4").trigger("click");
            }
        } else {


        }

        if ((formSubmitedStatus.get("WHAD_tab") == FORM_SUBMITED && formSubmitedStatus.get("IRTB_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("IRTB_tab") == FORM_SUBMITED) {
            $("#step-6").removeAttr("disabled");
            $('.progress_inner__step.WHAD_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-5").trigger("click");
            }
        } else {


        }

        if ((formSubmitedStatus.get("IRTB_tab") == FORM_SUBMITED && formSubmitedStatus.get("CVHSE_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("CVHSE_tab") == FORM_SUBMITED) {

            $("#step-7").removeAttr("disabled");
            $('.progress_inner__step.IRTB_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-6").trigger("click");
            }
        } else {


        }

        if ((formSubmitedStatus.get("CVHSE_tab") == FORM_SUBMITED && formSubmitedStatus.get("CAI_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("CAI_tab") == FORM_SUBMITED) {
            $("#step-8").removeAttr("disabled");
            $('.progress_inner__step.CVHSE_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-7").trigger("click");
            }
        } else {


        }

        if ((formSubmitedStatus.get("CAI_tab") == FORM_SUBMITED && formSubmitedStatus.get("CPSPS_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("CPSPS_tab") == FORM_SUBMITED) {
            $("#step-9").removeAttr("disabled");
            $('.progress_inner__step.CAI_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-8").trigger("click");
            }
        } else {


        }

        if ((formSubmitedStatus.get("CPSPS_tab") == FORM_SUBMITED && formSubmitedStatus.get("MLS_tab") == FORM_NOT_AT_SUBMITED) || formSubmitedStatus.get("MLS_tab") == FORM_SUBMITED) {
            $("#step-10").removeAttr("disabled");
            $('.progress_inner__step.CPSPS_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-9").trigger("click");
            }
        } else {


        }

        if (formSubmitedStatus.get("MLS_tab") == FORM_SUBMITED) {
            $('.progress_inner__step.MLS_tab').addClass("active");
            if (triggerLastSubmittedTab == true) {
                $("#step-10").trigger("click");

                if (LinkType == SELF_ASSESSMENT) {
                    $(".tab").removeClass("tabDispalyBlock");
                    $('.tab.success_tab-11').addClass("tabDispalyBlock");
                }
            }
        } else {


        }

    }

    function startUp_guid_popover_content() {


        var popoverContent = '<p>Click on this hand icon to view <br> Performance score details. <br> Give your score as per table.</p>' +
            '<button id="startUp_guid_popover_btn" onclick=removeGuidePopover()>Got It</button>';

        return popoverContent;
    }


    function staticMarksDescription(gradeLevel) {

        var staticMarksDescription_L1_and_L2 = '<table>' +
            '<thead><tr>' +
            '<th>Attribute</th>' +
            '<th>Score</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>Outstanding</td>' +
            '<td>5</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Exceeds Requirements</td>' +
            '<td>4</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Meets Requirements</td>' +
            '<td>3</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Need Improvement</td>' +
            '<td>2</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Unsatisfactory / Poor</td>' +
            '<td>1</td>' +
            '</tr>' +

            '</tbody>' +
            '</table>';

        var staticMarksDescription_L3_L4_and_L5 = '<table>' +
            '<thead><tr>' +
            '<th>Attribute</th>' +
            '<th>Score</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>Outstanding</td>' +
            '<td>4</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Exceeds Requirements</td>' +
            '<td>3</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Meets Requirements</td>' +
            '<td>2</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Need Improvement</td>' +
            '<td>1</td>' +
            '</tr>' +

            '</tbody>' +
            '</table>';


        if (gradeLevel == GRADE_LEVEL1 || gradeLevel == GRADE_LEVEL2) {

            return staticMarksDescription_L1_and_L2;
        } else {
            return staticMarksDescription_L3_L4_and_L5;
        }
    }

    removeGuidePopover = function () {

        cookiesObj.setCookie("gotItClicked", "Shown", 60);

        $('[data-toggle="startUp_guid_popover"]').popover('hide');
        $(".startUp-guid").remove();
        $("#start_up_icon").remove();

    }

    function getSelectedTab1Ui(form, KRA_ValuesArray, KRA_SubmitStatus) {
        var Tab1Ui, allocatedMarksTotal = 0;
        if (KRA_SubmitStatus == 1) {
            allocatedMarksTotal = getKRA_MaximumMarks();
        }
        if (LinkType == MANAGER_ASSESSMENT) {
            Tab1Ui = form.formRelatedUi_KRA_Allocation_Manager(KRA_ValuesArray, gradeLevel, getKRA_MaximumMarks(), allocatedMarksTotal);
        } else {
            Tab1Ui = form.formRelatedUi_KRA_Allocation_Self(KRA_ValuesArray, gradeLevel, typeOfMarks);
        }

        return Tab1Ui;

    }


    function getSubmitFormDetailsValue(data_id) {
        var submitFormDetailsTo;
        switch (data_id) {
            case "KRA_tab":
                submitFormDetailsTo = "AllocateEmployeeKRA";
                break;
            case "TAK_tab":
                submitFormDetailsTo = "TAK";
                break;
            case "EI_tab":
                submitFormDetailsTo = "EI";
                break;
            case "QOW_tab":
                submitFormDetailsTo = "QOW";
                break;
            case "WHAD_tab":
                submitFormDetailsTo = "WHAD";
                break;
            case "IRTB_tab":
                submitFormDetailsTo = "IRTB";
                break;
            case "CVHSE_tab":
                submitFormDetailsTo = "CVHSE";
                break;
            case "CAI_tab":
                submitFormDetailsTo = "CAI";
                break;
            case "CPSPS_tab":
                submitFormDetailsTo = "CPSPS";
                break;
            case "MLS_tab":
                submitFormDetailsTo = "MLS";
                break;
        }
        return submitFormDetailsTo;
    }

    function storeFromSerializedvaluesToMap(serialisedData, formValueMap, data_id) {

        for (var index = 0; index < serialisedData.length; index++) {
            formValueMap.set(serialisedData[index].name, serialisedData[index].value);
        }
        formValueMap.set("empId", empId);
        formValueMap.set("managerId", managerId);
        formValueMap.set("gradeLevel", gradeLevel);
        formValueMap.set("managerName", managerName);

        if (data_id == "MLS_tab") {

            formValueMap.set("empName", empName);
            formValueMap.set("empEmail", empEmail);
            formValueMap.set("managerEmail", managerEmail);
            formValueMap.set("VQ1", $("#form_ManagerialLeadershipSkill #option1Value").html());
            formValueMap.set("VQ2", $("#form_ManagerialLeadershipSkill #option2Value").html());
            formValueMap.set("VQ3", $("#form_ManagerialLeadershipSkill #option3Value").html());


        }


    }



    function sendRequestThroughAjax(submitFormDetailsTo, content, thisForm, data_id) {
        $(".fa.fa-spinner." + data_id).removeClass("d-none");
        $.ajax({
            type: "POST",
            url: baseURL + submitFormSubBaseURL + submitFormDetailsTo,
            data: {
                formValues: content

            },
            success: function (response) {

                console.log(response);

                if (response.error == false) {
                    $('#nextBtn' + data_id).removeClass("inputDisable");

                    thisForm.find('select').css("pointer-events", "none");
                    $('.progress_inner__step.' + data_id).addClass("active");
                    //                    formSubmitedStatus.get("CPSPS_tab")

                    formSubmitedStatus.set(data_id, 1);
                    UpdateProgressBarTabsStatus(false);

                    if (data_id == "MLS_tab") {
                        $(".tab").removeClass("tabDispalyBlock");
                        $('.tab.success_tab-11').addClass("tabDispalyBlock");
                    }

                    if (data_id == "KRA_tab") {
                        $("button.KRA_tab.submit span").html("Update");
                    } else {
                        $('.submit.' + data_id).remove();
                    }

                } else {
                    $('.message.' + data_id).addClass("error");
                    $('.submit.' + data_id + ' .span').html("Retry");
                }
                $('.message.' + data_id).html(response.message);
                $(".fa.fa-spinner." + data_id).addClass("d-none");



            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('.submit.' + data_id + ' .span').html("Retry");
                $('.submit.' + data_id + ' i').addClass("d-none");
            }



        });
    }



    function loadFileUploadingFunctionality() {
        var thisFileData_id, subFolderName, fileName, thisFile;
        $(".uploadFileReprort").change(function () {

            thisFile = $(this);
            thisFile.removeClass("text-danger");
            var file = thisFile.prop('files')[0];
            if (file.size <= 26214400) {// less than 25mb.
                thisFileData_id = thisFile.attr("data-id");
                $(".progress_status_" + thisFileData_id).removeClass("d-none");
                subFolderName = thisFile.attr("data-name");
                console.log(file);
                fileName = file.name;
                var nameAttr = thisFile.attr("name");
                var formdata = new FormData();
                formdata.append(nameAttr, file);
                formdata.append("empId", empId);
                formdata.append("subFolder", subFolderName);
                formdata.append("fileRelatedTo", subFolderName);
                var ajax = new XMLHttpRequest();
                ajax.upload.addEventListener("progress", progressHandler, false);
                ajax.addEventListener("load", completeHandler, false);
                ajax.addEventListener("error", errorHandler, false);
                ajax.addEventListener("abort", abortHandler, false);
                ajax.open("POST", baseURL + "uploadFile");
                // console.log("empId="+empId+"&subFolder="+subFolderName+"&myFile="+formdata+"&fileRelatedTo="+subFolderName);
                ajax.send(formdata);
            } else {
                alert("file-size larger than 25MB.");
                thisFile.addClass("text-danger");
            }
        });

        function progressHandler(event) {

            var percent = (event.loaded / event.total) * 100;
            //console.log(percent);
            $("#progressBar_" + thisFileData_id).val(Math.round(percent));
            // console.log("math" + Math.round(percent));
            $("#status_" + thisFileData_id).html(Math.round(percent) + "%");
            if (Math.round(percent) == 100) {
                $("#progressBar_" + thisFileData_id).hide();
                //  $("#status_"+thisFileData_id).hide();
            }

        }

        function completeHandler(event) {
            $("#progressBar_" + thisFileData_id).val(100);
            // $("#status_"+thisFileData_id).html(event.target.responseText);// handle this exception.
            //  console.log(event.target);
            var jsonResponse = JSON.parse(event.target.response);
            if (!jsonResponse.error) {
                $("#" + thisFileData_id).attr("disabled", "disabled");
                $("#" + thisFileData_id).addClass("success");
                $("#status_" + thisFileData_id).html("<i class='fa fa-check uploadFileReprort_icon'></i>");
                $("#status_" + thisFileData_id).addClass("text-success");
                /*$('#selectedTag_'+thisFileData_id+' option:selected').removeAttr("selected");
                $('#selectedTag_'+thisFileData_id+' option[value=" "]').removeAttr("selected");*/
                 var form = new DynamicForm();
                $('#selectedTag_'+thisFileData_id+' option').remove();
                $('#selectedTag_'+thisFileData_id).append(form.OptionTag(gradeLevel,null));
                $('#selectedTag_'+thisFileData_id).removeClass("pointEventNone");
            } else {

            }
        }

        function errorHandler(event) {

            $("#status_" + thisFileData_id).html("upload failed");
        }

        function abortHandler(event) {
            $("#status_" + thisFileData_id).html("upload aborted");
        }


    }

    function strMapToJson(strMap) {
        return JSON.stringify(strMapToObj(strMap));
    }

    function strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }



    /*------------------------------KRA Related Function-----------------------------------*/



    function checkRequirement() {


        if (getKRAInputTotal() == getKRA_MaximumMarks()) {
            return "EqualTo";
        } else if (getKRAInputTotal() < getKRA_MaximumMarks()) {
            return "LessThan";
        } else {
            return "GraterThan";
        }

    }


    function getKRAInputTotal() {

        var sumOftheAllMarks = 0;
        $("#form_KRA_Allocation input.maxMarksInput").each(function () {
            sumOftheAllMarks += Number($(this).val());
        });

        return sumOftheAllMarks;
    }

    function getKRA_MaximumMarks() {
        var fixedKRA_MaxMarks;
        if (gradeLevel == GRADE_LEVEL1 || gradeLevel == GRADE_LEVEL2) {
            fixedKRA_MaxMarks = GRADE_L1_L2_KRA_MAXSCORE;
        } else {
            fixedKRA_MaxMarks = GRADE_L3_L4_L5_KRA_MAXSCORE;
        }
        return fixedKRA_MaxMarks;
    }
    /*------------------------------KRA END-----------------------------------*/




});
