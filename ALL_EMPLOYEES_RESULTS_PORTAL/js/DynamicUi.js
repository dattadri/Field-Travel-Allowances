class dynamicUi{
    commonEmployeeInfo(responseFromAPI){
        var relatedUi='<div class="col-md-12 commonEmployeeDetails">'+
                        '<div class="row m-0 ">'+
                            '<div class="col-md-4">'+
                                '<table class="table table-hover border">'+
                                    '<tbody><tr><th>Name of the Employee</th><td>'+responseFromAPI.empName+'</td></tr><tr><th>Employee Id</th><td>'+responseFromAPI.empId+'</td></tr><tr><th>Employee Email</th> <td>'+responseFromAPI.empEmail+'</td></tr><tr><th>Designation</th><td>'+responseFromAPI.designation+'</td></tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</div>'+
                            '<div class="col-md-4">'+
                                '<table class="table table-hover border">'+
                                    '<tbody><tr><th>Department</th><td>'+responseFromAPI.department+'</td></tr><tr><th>Grade Level</th><td>'+responseFromAPI.gradeLevel+'</td></tr><tr><th>Manager Name &amp; Id</th><td>'+responseFromAPI.managerName+'('+responseFromAPI.managerId+')</td></tr><tr><th>Manager Email</th><td>'+responseFromAPI.managerEmail+'</td></tr></tbody></table>'+
                            '</div>'+
                            '<div class="col-md-4">'+
                                '<table class="table table-hover border">'+
                                    '<tbody><tr><th>Joining Date</th><td>'+responseFromAPI.employeeJoiningdate+'</td></tr><tr><th>Evaluation Purpose</th><td>Appraisal</td></tr><tr><th>Review Period</th><td>01-11-2020 <span class="font-weight-bold"> TO </span>31-10-2021</td></tr><tr><th>Total OverAll Score</th><td>'+this.getTotalOverallScore(responseFromAPI.gradeLevel)+'</td></tr>'+
                                    '</tbody>'+
                               '</table>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
        return relatedUi;
    }

    
        
    L1_L2_submissionStatusTable(responseFromAPI){
         var relatedUi='<table class="table table-hover border font-weight-light text-left w-50  m-auto">'+
                                    '<thead><tr style="background: aliceblue;">'+
                                                '<th class="text-left">S.No</th>'+
                                                '<th class="text-left">USER</th>'+
                                                '<th class="text-left">SUBMISSION STATUS</th>'+
                                            '</tr>'+
                                    '</thead><tbody>'+
                                            '<tr>'+
                                                '<td class="align-middle">1. </td>'+
                                                '<td class="align-middle">Appraisal Form Self Assessment</td>'+
                                                '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.selfSubmit)+'"></i></h5></td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td class="align-middle">2. </td><td>Appraisal Form Manager Assessment</td><td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.managerSubmit)+'"></i></h5></td>'+
                                            '</tr></tbody></table>'+
             '<p class="text-center mt-2"><a href="'+responseFromAPI.finalResultLink+'" class="btn btn-success" target="_blank">Check Result</button></p>';
        return relatedUi;
    }
    
    L3_L4_L5_submissionStatusTable(responseFromAPI){
        var relatedUi='<div class="col-md-6 m-auto"><table class="table table-hover border font-weight-light text-left  m-auto">'+
                '<thead>'+
                    '<tr style="background: aliceblue;">'+
                        '<th class="text-left">S.No</th>'+
                        '<th class="text-left">USER</th>'+
                        '<th class="text-left">SUBMISSION STATUS</th>'+
                        '</tr>'+
                '</thead>'+
                '<tbody>'+
                    '<tr>'+
                        '<td class="align-middle">1. </td>'+
                        '<td class="align-middle">Appraisal Form Self Assessment</td>'+
                        '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.selfSubmit)+'"></i></h5></td>'+
                        '</tr>'+
                    '<tr>'+
                        '<td class="align-middle">2. </td>'+
                        '<td class="align-middle">Appraisal Form Manager Assessment</td>'+
                        '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.managerSubmit)+'"></i></h5></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td class="align-middle">3.</td>'+
                        '<td class="align-middle">360 Customer/ External FeedBack</td>'+
                        '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.customerExternalSubmit)+'"></i></h5></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td class="align-middle">4. </td>'+
                        '<td class="align-middle">360 Superboss FeedBack</td>'+
                        '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.superBossSubmit)+'"></i></h5></td>'+
                        '</tr>'+
                    '<tr>'+
                        '<td class="align-middle">5. </td>'+
                        '<td class="align-middle">360 Subordinate FeedBack</td>'+
                        '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.subOrdinateSubmit)+'"></i></h5></td>'+
                        '</tr>'+
                    '<tr>'+
                        '<td class="align-middle">6. </td>'+
                        '<td class="align-middle">360 Other Dept-peer FeedBack</td>'+
                        '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.otherDeptSubmit)+'"></i></h5></td>'+
                        '</tr>'+
                    '<tr>'+
                        '<td class="align-middle">7. </td>'+
                        '<td class="align-middle">360 Admin/Finance FeedBack</td>'+
                        '<td class="border-left font-weight-bold text-center"><h5 class="mb-0"><i class="fa '+this.getSubmittedStatus(responseFromAPI.financeSubmit)+'"></i></h5></td>'+
                        '</tr>'+
                '</tbody>'+
            '</table>'+
            '<p class="text-center mt-2"><a href="'+responseFromAPI.finalResultLink+'" class="btn btn-success" target="_blank">Check Result</button></p></div>';
        return relatedUi;
    }
    
    allUser_info_data(empId, empName, selfSubmitStatus, managerSubmitStatus){
        var allUserInfoUi='<div class="divEmployeeInfo p-4 pl-3" data-id="'+empId+'">'+
                                '<p class=" font-weight-bold">'+empName+'(<span class="font-weight-light">'+empId+'</span>)</p>'+
                                '<p class="mb-1">'+
                                    '<span class="float-left">Self <i class="fa '+this.getSubmittedStatus(selfSubmitStatus)+'"></i></span>'+
                                    '<span class="float-right">Manager <i class="fa '+this.getSubmittedStatus(managerSubmitStatus)+'"></i></span>'+
                                '</p>'+
                               // '<p class="m-0"><span class="font-weight-bold">ID: </span>'+empId+'</p>'+
                           '</div>';
        return allUserInfoUi;        
    }
    
    getTotalOverallScore(gradeLevel){
        if(gradeLevel==GRADE_LEVEL1 || gradeLevel==GRADE_LEVEL2){
           return GRADE_L1_L2_MAXSCORE;
        }else{
        return  GRADE_L3_L4_L5_MAXSCORE;         
           }
        
    }
    getSubmittedStatus(status){
        var className;
        if(status==FORM_SUBMITED){
            className="fa-check text-success";
        }else{
             className="text-warning fa-clock-o";
        }
        return className;
    }
    
    
    L1_L2_AppraisalSumitionStatusRelatedUi(responseFromAPI){
        var relatedUI= this.commonEmployeeInfo(responseFromAPI)+this.L1_L2_submissionStatusTable(responseFromAPI);
        return relatedUI;
    }

    L3_L4_L5_AppraisalSumitionStatusRelatedUi(responseFromAPI){
        var relatedUI= this.commonEmployeeInfo(responseFromAPI)+this.L3_L4_L5_submissionStatusTable(responseFromAPI);
    return relatedUI;
    }
  
    getDashBoardContent(data){
        var tableContent,reportingStaffTotal=0, completedSelfTotal=0, pendingSelfTotal=0,  completedManagerTotal=0, pendingManagerTotal=0;
         tableContent='<table class="table table-hover border font-weight-light text-left  m-auto">'+
                            '<thead><tr style="background: aliceblue;"><th class="text-left align-middle" style="width:5%;">S.No</th>'+
                                        '<th class="align-middle" style="width:45%;">Manager Name</th>'+
                                        '<th class="align-middle"  style="width:10%;">Count Of Reporting Staff</th>'+
                                        '<th class="align-middle"  style="width:10%;">Count Staffs Completed Self Assessment</th>'+
                                        '<th class="align-middle"  style="width:10%;">Pending Self Assessment</th>'+
                                        '<th class="align-middle"  style="width:10%;">Count Of Manager Assessment Completed</th>'+
                                        '<th class="align-middle"  style="width:10%;">Pending  Manager Assessment</th></tr></thead><tbody>';
        for(var loopCount=0;loopCount<data.length;loopCount++){
            
            reportingStaffTotal+=Number(data[loopCount].reportingStafCount);
            completedSelfTotal+=Number(data[loopCount].completedSelfAssCount);
            pendingSelfTotal+=Number(data[loopCount].pendingSelfAssCount);
            completedManagerTotal+=Number(data[loopCount].completedManagerAssCount);
            pendingManagerTotal+=Number(data[loopCount].pandingManagerAssCount);
            
            tableContent+='<tr>'+
                            '<td>'+(loopCount+1)+'</td>'+
                            '<td>'+data[loopCount].managerName+'</td>'+
                            '<td>'+data[loopCount].reportingStafCount+'</td>'+
                            '<td>'+data[loopCount].completedSelfAssCount+'</td>'+
                            '<td>'+data[loopCount].pendingSelfAssCount+'</td>'+
                            '<td>'+data[loopCount].completedManagerAssCount+'</td>'+
                            '<td>'+data[loopCount].pandingManagerAssCount+'</td></tr>';            
        }
         tableContent+='<tr  style="background: aliceblue;">'+
                            '<th ></th>'+
                            '<th >Grand Total</th>'+
                            '<th>'+reportingStaffTotal+'</th>'+
                            '<th>'+completedSelfTotal+'</th>'+
                            '<th>'+pendingSelfTotal+'</th>'+
                            '<th>'+completedManagerTotal+'</th>'+
                            '<th>'+pendingManagerTotal+'</th></tr></tbody></table>';
        return tableContent;
    }
    get360DegreeDashBoardContent(data){
        var tableContent,selfCompletedCount=0,managerCompletedCount=0,customerCompletedCount=0,superBossCompletedCount=0,otherDeptCompletedCount=0,financeCompletedCount=0,subOrdinateCompletedCount=0;
        
        tableContent='<table class="mt-5 table table-hover text-left font-weight-light" id="three60degreeMailTable" style="border-collapse: collapse;border-radius: 6px;box-shadow: 1px 1px 2px 1px #7f94a48c;margin: auto;"><thead><tr style="background: aliceblue;">'+
                        '<th class="text-center align-middle border-right" rowspan="2" >S.no</th>'+
                        '<th class="text-center align-middle border-right" rowspan="2">Employee Name</th>'+
                        '<th class="text-center align-middle border-right" rowspan="2">Manager Name</th>'+
                        '<th class="text-center align-middle border-right" rowspan="2">Self Appraisal</th>'+
                        '<th class="text-center align-middle border-right" rowspan="2">Manager Appraisal</th>'+
                        '<th class="text-center border-left" colspan="5">360 Degree Feedback</th></tr>'+
                        '<tr style="background: aliceblue;">'+
                        '<th class="text-center align-middle">Customer</th>'+
                        '<th class="text-center align-middle">Super Boss</th>'+
                        '<th class="text-center align-middle px-4" >Other dept Peer</th>'+
                        '<th class="text-center align-middle">Admin / Finance</th>'+
                        '<th class="text-center align-middle">Subordinate</th></tr></thead><tbody>';
        for(var loopCount=0;loopCount<data.length;loopCount++){
            selfCompletedCount+=Number(data[loopCount].selfSubmit);
            managerCompletedCount+=Number(data[loopCount].managerSubmit);
            customerCompletedCount+=Number(data[loopCount].customerEternalSubmit);
            superBossCompletedCount+=Number(data[loopCount].superBossSubmit);
            otherDeptCompletedCount+=Number(data[loopCount].otherDeptSubmit);
            financeCompletedCount+=Number(data[loopCount].adminFinanceSubmit);
            subOrdinateCompletedCount+=Number(data[loopCount].subOrdinateSubmit);
            
            tableContent+='<tr>'+
                                '<td class="align-middle text-center border-right">'+(loopCount+1)+'</td>'+
                                '<td class="align-middle text-center border-right">'+data[loopCount].empName+'</td>'+
                                '<td class="align-middle text-center border-right">'+data[loopCount].managerName+'</td>'+
                                '<td class="align-middle text-center border-right">'+this.getSubmitStatus(data[loopCount].selfSubmit)+'</td>'+
                                '<td class="align-middle text-center border-right">'+this.getSubmitStatus(data[loopCount].managerSubmit)+'</td>'+
                                '<td class="align-middle text-center border-right">'+this.getSubmitStatus(data[loopCount].customerEternalSubmit)+'</td>'+
                                '<td class="align-middle text-center border-right">'+this.getSubmitStatus(data[loopCount].superBossSubmit)+'</td>'+
                                '<td class="align-middle text-center border-right">'+this.getSubmitStatus(data[loopCount].otherDeptSubmit)+'</td>'+
                                '<td class="align-middle text-center border-right">'+this.getSubmitStatus(data[loopCount].adminFinanceSubmit)+'</td>'+
                                '<td class="align-middle text-center ">'+this.getSubmitStatus(data[loopCount].subOrdinateSubmit)+'</td>'+
                            '</tr>';
        }
        tableContent+='<tr  style="background: aliceblue;">'+
                            '<th class="align-middle text-center border-right" colspan="3">Total</th>'+
                            '<th class="align-middle text-center border-right"><span style="font-size: 9px;">completed['+selfCompletedCount+'], pending['+(data.length-selfCompletedCount)+']</span></th>'+
                            '<th class="align-middle text-center border-right"><span style="font-size: 9px;">completed['+managerCompletedCount+'], pending['+(data.length-managerCompletedCount)+']</span></th>'+
                            '<th class="align-middle text-center border-right"><span style="font-size: 9px;">completed['+customerCompletedCount+'], pending['+(data.length-customerCompletedCount)+']</span></th>'+
                            '<th class="align-middle text-center border-right"><span style="font-size: 9px;">completed['+superBossCompletedCount+'], pending['+(data.length-superBossCompletedCount)+']</span></th>'+
                            '<th class="align-middle text-center border-right"><span style="font-size: 9px;">completed['+otherDeptCompletedCount+'], pending['+(data.length-otherDeptCompletedCount)+']</span></th>'+
                            '<th class="align-middle text-center border-right"><span style="font-size: 9px;">completed['+financeCompletedCount+'], pending['+(data.length-financeCompletedCount)+']</span></th>'+
                            '<th class="align-middle text-center border-right"><span style="font-size: 9px;">completed['+subOrdinateCompletedCount+'], pending['+(data.length-subOrdinateCompletedCount)+']</span></th>'+
                            '</tbody></table>';
                                
        return tableContent;
    }
    
    getSubmitStatus(status){
        if(status==1){
            // return '<i class="fa fa-check text-success"></i>';
            return '<span class="text-success">completed</span>';
        }else{
            // return '<i class="fa text-warning fa-clock-o"></i>';
             return '<span class="text-warning">pending</span>';
        }
        
    }
//------------------------------------------------------------

}