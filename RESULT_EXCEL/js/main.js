$(document).ready(function () {
    var linkType, empId, managerId, authendication;


    var URLParamsObj = new URLParams();
    linkType = URLParamsObj.GetUrlParameter("linkType");
    empId = URLParamsObj.GetUrlParameter("empId");
    managerId = URLParamsObj.GetUrlParameter("managerId");
    authendication = URLParamsObj.GetUrlParameter("auth");
    mail = URLParamsObj.GetUrlParameter("mail");

    console.log(BASE_URL + empId+"authendication"+authendication);

    $.ajax({
        type: "GET",
        url:BASE_URL + "EmployeeFullReport?empId=" + empId,
        success: function (response) {

            if (response.length == 0) {
                $(".loading-page .loading-content").html("Invalid URL");
                $(".loading-page .loading-content").css("font-size", "32px");
                $(".loading-page i").addClass("d-none");

            } else {

                $(".loading-page").addClass("d-none");
            }
            appendTheValuesToUI(response);


            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $(".loading-page .loading-content").html("URL Invalid");
            $(".loading-page .loading-content").css("font-size", "32px");
            $(".loading-page i").addClass("d-none");

            console.log("error while getting data from EmployeeFullReport API");

        }
    });




    function appendTheValuesToUI(responseAPI) {
        console.log(responseAPI);
        var commonUi;
        var Obj_AppraisalOverAllResultUi = new AppraisalOverAllResultUi();

        if (responseAPI.gradeLevel == "L1" || responseAPI.gradeLevel == "L2") {
            commonUi = Obj_AppraisalOverAllResultUi.get_L1_L2_RelatedUi(responseAPI, authendication);
        } else {
            commonUi = Obj_AppraisalOverAllResultUi.get_L3_L4_L5_RelatedUi(responseAPI, authendication);
        }
         $("#appraisal_form_body .container-fuild").append(commonUi);
        //  modal popup values
            $("#modelEmployeeIdTd").html(responseAPI.empId);
            $("#modelEmployeeNameTd").html(responseAPI.empName);
            $("#modelEmployeeEmailTd").html(responseAPI.empEmail);
      
       $("#sendMailBtnToEmplyeeForm").click(function(){
           var sendMailbtn=$(this);
           sendMailbtn.children("i").removeClass("d-none");
          var mapObject=new Map();
              mapObject.set("empId",responseAPI.empId);
              mapObject.set("empName",responseAPI.empName);
              mapObject.set("managerId",responseAPI.managerId);
              mapObject.set("managerName",responseAPI.managerName);
              mapObject.set("managerEmail",responseAPI.managerEmail)
              mapObject.set("empEmail",responseAPI.empEmail);
              mapObject.set("gradeLevel",responseAPI.gradeLevel);
              var content=strMapToJson(mapObject);
              console.log(content);
           $.ajax({
                 type:"POST",
                 url:BASE_URL+"sendResults",
                 data:{
                     value:content
                 },
                 success:function(response){
                     console.log(response);
                       sendMailbtn.children("i").addClass("d-none");
                       $("#modelPopupConfirmation .modal-footer h6").html(response.message);
                        if (response.error) {
                               $("#modelPopupConfirmation .modal-footer h6").addClass("text-danger");
                          }
                     
                 },
                  error: function (jqXHR, textStatus, errorThrown) {
                      sendMailbtn.children("i").addClass("d-none");
                     console.log("error on send Request to sentResult API");
                 }
                  
              });
          
          
          
        });  
        
        
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
       
        
    // }


});
