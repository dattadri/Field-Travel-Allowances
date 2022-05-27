class DynamicForm{

formRelatedUi_KRA_Performance(SelectedValuesArray, gradeLevel, typeOfMarksTitle){

var kra_Relatedui='<div class="tab KRA_tab-1 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">KRA-Performance</h1>'+
    '<form id="form_KRA" class="formSubmit" data-id="KRA_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;KRA 1.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : 9</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(9,SelectedValuesArray.get("Q1"))+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;KRA 2.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : 9</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(9,SelectedValuesArray.get("Q2"))+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;KRA 3.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : 9</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(9,SelectedValuesArray.get("Q3"))+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">4. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;KRA 4.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : 8</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(8,SelectedValuesArray.get("Q4"))+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        ' </td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">5. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;KRA 5.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : 0</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5">'+
                                        '<option>0</option></select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_KRA_Performance_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+// if L3, L4, L5 extra questions will added
            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary d-none submit"><span class="span">Submit</span> <i class="fa fa-spinner d-none fa-spin KRA_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success KRA_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_2">Skip</a>'+
    '<a href="#" class="inputTabs button btn btn-success d-none" id="question-tab_1" data-id="question-tab_1"></a>'+
    '</div>';
return kra_Relatedui;


}
formRelatedUi_KRA_Allocation_Self(SelectedValuesArray, gradeLevel, typeOfMarksTitle){

var kra_Relatedui='<div class="tab KRA_tab-1 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">KRA-Target For Next Year Evaluation</h1>'+
    '<form id="form_KRA_Allocation" class="formSubmit" data-id="KRA_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;'+this.getRelatedQuestion('KRA 1.',SelectedValuesArray.question1)+'</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+SelectedValuesArray.MaxMarks_Q1+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.KRA_allocationOptionTag(SelectedValuesArray.MaxMarks_Q1,'')+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;'+this.getRelatedQuestion('KRA 2',SelectedValuesArray.question2)+'</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks :'+SelectedValuesArray.MaxMarks_Q2+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.KRA_allocationOptionTag(SelectedValuesArray.MaxMarks_Q2,'')+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;'+this.getRelatedQuestion('KRA 3',SelectedValuesArray.question3)+'</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks :'+SelectedValuesArray.MaxMarks_Q3+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.KRA_allocationOptionTag(SelectedValuesArray.MaxMarks_Q3,'')+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">4. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;'+this.getRelatedQuestion('KRA 4.',SelectedValuesArray.question4)+'</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+SelectedValuesArray.MaxMarks_Q4+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.KRA_allocationOptionTag(SelectedValuesArray.MaxMarks_Q4,'')+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">5. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;'+this.getRelatedQuestion('KRA 5.',SelectedValuesArray.question5)+'</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks :'+SelectedValuesArray.MaxMarks_Q5+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.KRA_allocationOptionTag(SelectedValuesArray.MaxMarks_Q5,'')+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_KRA_Allocation_Self_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+// if L3, L4, L5 extra questions will added
            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary d-none submit"><span class="span">Submit</span> <i class="fa fa-spinner d-none fa-spin KRA_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success KRA_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_2">Skip</a>'+
    '<a href="#" class="inputTabs button btn btn-success d-none" id="question-tab_1" data-id="question-tab_1"></a>'+
    '</div>';
return kra_Relatedui;


}
    formRelatedUi_KRA_Allocation_Manager(SelectedValuesArray, gradeLevel, maximumMarks, allocatedMarksTotal){

var kra_Relatedui='<div class="tab KRA_tab-1 mb-5">'+
    '<h1 class="font-weight-bold mb-4 text-dark">KRA-Target For Next Year Evaluation</h1>'+
    '<form id="form_KRA_Allocation" class="formSubmit" data-id="KRA_tab">'+this.KRA_noteMessage(gradeLevel)+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block w-100">'+
                            '<textarea class="text-left mb-3 question w-100 p-2" name="question1" maxlength="300" placeholder="write your Question here" required>'+this.getRelatedQuestion('',SelectedValuesArray.question1)+'</textarea>'+
                            '<div>'+ 
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">Allocation-marks :<input type="number" class="maxMarksInput text-center w-50 ml-2" name="Q1_MaxMarks"  value='+SelectedValuesArray.MaxMarks_Q1+' min=0 required/></p>'+
                               '<div class="d-inline-block float-right">'+
                                 '<p class="d-inline-block mr-2 m-0 remaining-marks score-board text-success">(<span class="inputTotal">'+allocatedMarksTotal+'</span><span>/'+maximumMarks+'</span>)</p>'+
                                 '<p class="d-inline-block float-right m-0 remaining-marks text-success">Remaining Marks Available :<span class="availableMarks">'+maximumMarks+'</span></p>'+
                                '</div>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block w-100">'+
                            '<textarea class="text-left mb-3 question w-100 p-2" name="question2" maxlength="300" placeholder="write your Question here" required>'+this.getRelatedQuestion('',SelectedValuesArray.question2)+'</textarea>'+
                            '<div>'+ 
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">Allocation-marks :<input type="number" class="maxMarksInput text-center w-50 ml-2" name="Q2_MaxMarks" value='+SelectedValuesArray.MaxMarks_Q2+' min=0 required /></p>'+
                               '<div class="d-inline-block float-right">'+
                                 '<p class="d-inline-block mr-2 m-0 remaining-marks score-board text-success">(<span class="inputTotal">'+allocatedMarksTotal+'</span><span>/'+maximumMarks+'</span>)</p>'+
                                 '<p class="d-inline-block float-right m-0 remaining-marks text-success">Remaining Marks Available :<span class="availableMarks">'+maximumMarks+'</span></p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</td>'+
                '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block w-100">'+
                            '<textarea class="text-left mb-3 question w-100 p-2" name="question3" maxlength="300" placeholder="write your Question here" required>'+this.getRelatedQuestion('',SelectedValuesArray.question3)+'</textarea>'+
                            '<div>'+ 
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">Allocation-marks :<input type="number" class="maxMarksInput text-center w-50 ml-2" name="Q3_MaxMarks" value='+SelectedValuesArray.MaxMarks_Q3+' min=0 required /></p>'+
                               '<div class="d-inline-block float-right">'+
                                 '<p class="d-inline-block mr-2 m-0 remaining-marks score-board text-success">(<span class="inputTotal">'+allocatedMarksTotal+'</span><span>/'+maximumMarks+'</span>)</p>'+
                                 '<p class="d-inline-block float-right m-0 remaining-marks text-success">Remaining Marks Available :<span class="availableMarks">'+maximumMarks+'</span></p>'+
                                '</div>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">4. </h6>'+
                        '<div class="d-inline-block w-100">'+
                            '<textarea class="text-left mb-3 question w-100 p-2" name="question4" maxlength="300" placeholder="write your Question here" required>'+this.getRelatedQuestion('',SelectedValuesArray.question4)+'</textarea>'+
                            '<div>'+ 
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">Allocation-marks :<input type="number" class="maxMarksInput text-center w-50 ml-2" name="Q4_MaxMarks"  value='+SelectedValuesArray.MaxMarks_Q4+' min=0 required/></p>'+
                               '<div class="d-inline-block float-right">'+
                                 '<p class="d-inline-block mr-2 m-0 remaining-marks score-board text-success">(<span class="inputTotal">'+allocatedMarksTotal+'</span><span>/'+maximumMarks+'</span>)</p>'+
                                 '<p class="d-inline-block float-right m-0 remaining-marks text-success">Remaining Marks Available :<span class="availableMarks">'+maximumMarks+'</span></p>'+
                                '</div>'+
                               '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_KRA_Allocation_Manager_L3_L4_L5(gradeLevel, SelectedValuesArray, maximumMarks, allocatedMarksTotal)+'</tbody>'+// if L3, L4, L5 extra questions will added
            '</table>'+
        '<button type="submit" class="btn btn-primary KRA_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin KRA_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success KRA_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_2">Skip</a>'+
    '<a href="#" class="inputTabs button btn btn-success d-none" id="question-tab_1" data-id="question-tab_1"></a>'+
    '</div>';
return kra_Relatedui;


}

formRelatedUi_technical_Knowledge(formSubmitStatus, SelectedValuesArray, gradeLevel, typeOfMarksTitle,LinkType){
console.log(SelectedValuesArray.Q1);
var technical_knowledge='<div class="tab TAK_tab-2 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Technical Knowledge &amp; Ability</h1>'+
    '<form id="form_Technical_Knowledge" class="formSubmit" data-id="TAK_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Possesses technical skills and competence to execute job duties.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select " name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Possesses diagramatic skills and attention to details to execute job duties.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp; Understanding of the duties and responsibilities & gives the outcome with almost nil or minimal errors. Does not hesitate to take guidance when required.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">4. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Ability to learn new skills and apply appropriately.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">5. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Submit atleast 5 reports spread across every quarter to show consistency in the work done.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+''+this.getFileSelectedStatus(LinkType,formSubmitStatus,SelectedValuesArray.reportFilePath,gradeLevel,SelectedValuesArray.Q5,"selectedTag_file1","Q5")+'</p>'+
                            '</div>'+this.getFileuploadRelatedUi(LinkType,SelectedValuesArray.reportFilePath,'file1','REPORT')+
                        '</div>'+
                    '</td>'+
                '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">6. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Proof of atleast one training or presentation to internal or external clients which showcases the candidates depth in knowledge.</h6>'+
                            '<div>'+
                         '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                          '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+''+this.getFileSelectedStatus(LinkType,formSubmitStatus,SelectedValuesArray.presentationFilePath,gradeLevel,SelectedValuesArray.Q6,"selectedTag_file2","Q6")+'</p>'+
                            '</div>'+this.getFileuploadRelatedUi(LinkType,SelectedValuesArray.presentationFilePath,'file2','PRESENTATION')+
                        '</div>'+
                    '</td>'+
                '</tr>'+this.formRelatedUi_technical_Knowledge_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+
            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary TAK_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin TAK_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success TAK_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_1">&#8249;&#8249; Back</a>'+
    '<a href="#" id="nextBtnTAK_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_3">Next &#8250;&#8250;</a>'+
    '</div>';

return technical_knowledge;

}
formRelatedUi_efficiency_Innovation(formSubmitStatus, SelectedValuesArray, gradeLevel, typeOfMarksTitle, LinkType){
var innovationformUi='<div class="tab EI_tab-3 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Efficiency and Innovation</h1>'+
    '<form id="form_Efficency_Innovation" class="formSubmit" data-id="EI_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Expresses ideas and plan in a creative manner including sketching as needed so that everyone can understand easily.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Uses Technology (Excel formulae / Programming skills) effectively so that templates are made in such way that it is useful in future also .</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+''+this.getFileSelectedStatus(LinkType,formSubmitStatus,SelectedValuesArray.tecTemplatesFilePath,gradeLevel,SelectedValuesArray.Q2,"selectedTag_file3","Q2")+'</p>'+
                            '</div>'+this.getFileuploadRelatedUi(LinkType, SelectedValuesArray.tecTemplatesFilePath,'file3','TEC_TEMPLATES')+
                        '</div>'+
                    '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp; If repetitive works are given, he / she clearly demonstrates skill and innovative methods to taper the time required to accomplish the task.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">4. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Focuses on innovative method to showcase value of the work done to clients / other stakeholders.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_efficiency_Innovation_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+
            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary EI_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin EI_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success EI_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_2">&#8249; &#8249; Back</a>'+
    '<a href="#" id="nextBtnEI_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_4">Next &#8250;&#8250;</a>'+
    '</div>';
return innovationformUi;
}
formRelatedUi_qualityOfWork(SelectedValuesArray, gradeLevel, typeOfMarksTitle){

var qualityUi='<div class="tab QOW_tab-4 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Quality of Works</h1>'+
    '<form id="form_qualityOfWork" class="formSubmit" data-id="QOW_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Is diligent at work and ensures accuracy, tidiness and focuses on details and not only the speed.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Ensures adherence to processes, works towards creating processes as needed to ensure systematic and consistent output at work.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp; Is aware of ISO certification of the company, and hence pays importance to all process compliances. </h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_qualityOfWork_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+
            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary QOW_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin QOW_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success QOW_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_3">&#8249; &#8249; Back</a>'+
    '<a href="#" id="nextBtnQOW_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_5">Next &#8250;&#8250;</a>'+
    '</div>';
return qualityUi;
}
formRelatedUi_workHabits_Attitude_drives(SelectedValuesArray, gradeLevel, typeOfMarksTitle){
var workHabitAttitudeUi='<div class="tab WHAD_tab-5 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Work Habits - Attitude and drive</h1>'+
    '<form id="form_workHabits_Attitude_drives" class="formSubmit" data-id="WHAD_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Maintains office timings, does not apply leaves unnecessarily also gives advance intimation of leaves, applies leaves in a timely manner.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Stays late as needed to complete the task on hand. Works as per responsibility and works responsibly.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp; Shows proactiveness to get works / new works allocated to himself rather than prolonging existing works on hand.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">4. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Focuses on productivity and maintaining commitment - "beating the deadline".</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_workHabits_Attitude_drives_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+

            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary WHAD_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin WHAD_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success WHAD_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_4">&#8249; &#8249; Back</a>'+
    '<a href="#" id="nextBtnWHAD_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_6">Next &#8250;&#8250;</a>'+

    '</div>';
return workHabitAttitudeUi;
}

formRelatedUi_interpersonal_Relations_Teamwork_Behaviour(SelectedValuesArray, gradeLevel, typeOfMarksTitle){

var relatedUi='<div class="tab IRTB_tab-6 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Interpersonal Relations/Teamwork/Behaviour</h1>'+
    '<form id="form_Interpersonal_relations" class="formSubmit" data-id="IRTB_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Responds and contributes to team efforts.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Responds positively to suggestions,instructions,criticism and adapts well to changing circumstances.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp; Shows pride when representing organization in market place/clients.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_interpersonal_Relations_Teamwork_Behaviour_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+

            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary IRTB_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin IRTB_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success IRTB_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_5">&#8249; &#8249; Back</a>'+
    '<a href="#" id="nextBtnIRTB_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_7">Next &#8250;&#8250;</a>'+

    '</div>';
return relatedUi;
}

formRelatedUi_companyValues(SelectedValuesArray, gradeLevel, typeOfMarksTitle){

var relatedUi='<div class="tab CVHSE_tab-7 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Company Values, HSE</h1>'+
    '<form id="form_CompanyValues" class="formSubmit" data-id="CVHSE_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Is aware of MVV, Company Motto & HSE and pays attention to understanding the same and imbibing the same in his/her personality.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Always demonstrates & ensures adherence of company value & Motto at work.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp; Always demonstrates & ensures adherence of HSE practices at work.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_companyValues_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+
            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary CVHSE_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin CVHSE_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success CVHSE_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_6">&#8249; &#8249; Back</a>' +
    '<a href="#" id="nextBtnCVHSE_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_8">Next &#8250;&#8250;</a>' +
    '</div>';
return relatedUi;

}


formRelatedUi_commercialAwareness(SelectedValuesArray, gradeLevel, typeOfMarksTitle){

var relatedUi='<div class="tab CAI_tab-8 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Commercial awareness and initiatives</h1>'+
    '<form id="form_commercialAwareness" class="formSubmit" data-id="CAI_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Always ensures that there are no time and cost overruns in the projects handled and works with result oriented action.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Understands the scope clearly before taking up the work and ensures that there are no repetition of efforts.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Interacts with customers to ensure delivery satisfaction and to understand client project pipeline and works for repeat orders.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_commercialAwareness_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+

            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary CAI_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin CAI_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success CAI_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_7">&#8249; &#8249; Back</a>'+
    '<a href="#" id="nextBtnCAI_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_9">Next &#8250;&#8250;</a>'+

    '</div>' ;
return relatedUi;

}
formRelatedUi_comm_personalSkillsAndPlanning(SelectedValuesArray, gradeLevel, typeOfMarksTitle){
var relatedUi='<div class="tab CPSPS_tab-9 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Communication / Presentation skills and Planning skills</h1>'+
    '<form id="form_comm_personalSkillsAndPlanning" class="formSubmit" data-id="CPSPS_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Exhibits effective listening, oral and written skills.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Keeps the presentation / communication crisp, attractive and ensures communication of the summary / conclusion clearly.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Skillfully demonstrates the eagerness to engage and willing to go extra mile in fulling the engagement.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">4. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Understands the planning is key to success and hence ensures that it is chalked out and aligned with superior before execution.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_comm_personalSkillsAndPlanning_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+

            '</table>'+this.noteMessage()+
        '<button type="submit" class="btn btn-primary CPSPS_tab submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin CPSPS_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success CPSPS_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_8">&#8249; &#8249; Back</a>'+
    '<a href="#" id="nextBtnCPSPS_tab" class="inputTabs button btn btn-success float-right nextbtn" data-id="question-tab_10">Next &#8250;&#8250;</a>'+

    '</div>';
return relatedUi;
}

formRelatedUi_managerial_LeadershipSkill(SelectedValuesArray, gradeLevel, linkType, typeOfMarksTitle){

var relatedUi='<div class="tab MLS_tab-10 mb-5">'+
    '<h1 class="font-weight-bold mb-3 text-dark">Managerial and Leadership Skills</h1>'+
    '<form id="form_ManagerialLeadershipSkill" class="formSubmit" data-id="MLS_tab">'+
        '<table class="m-auto w-100">'+
            '<thead class="mb-2">'+
                '<th class="text-left text-dark">Question</th>'+
                '</thead>'+
            '<tbody>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">1. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Gathers detailed / first hand information about customer / client needs and accordingly works towards solution building.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q1" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q1)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">2. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Accepts responsibility in a competent manner for own and subordinates work. Also works collaboratively with other stakeholders, to ensure tangible benefits to the company through sustainable relationships.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q2" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q2)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+

                    '</tr>'+
                '<tr class="mb-5 ">'+

                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">3. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;Aspirant to climb up the ladder, accepts challenges, new responsibilities and roles.</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q3)+'</select></p>'+

                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+this.formRelatedUi_managerial_LeadershipSkill_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle)+'</tbody>'+

            '</table>'+this.formRelatedUi_overAllProgress(SelectedValuesArray,linkType, typeOfMarksTitle)+
        '<button type="submit" class="btn btn-primary MLS_tab submit"><span class="span">Submit</span> <i class="fa fa-spinner d-none fa-spin MLS_tab" aria-hidden="true"></i></button>'+
        '<p class=" mt-2 message success MLS_tab"></p>'+
        '</form>'+
    '<a href="#" class="inputTabs button btn btn-success float-left" data-id="question-tab_9">&#8249; &#8249; Back</a>'+

    '</div>';

return relatedUi;
}

formRelatedUi_KRA_Performance_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){
var relatedUi ='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">6. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;KRA 6.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : 8</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q6" required>'+this.OptionTag(8,SelectedValuesArray.get("Q6"))+'</select></p>'+
                '</div>'+
            '</div>'+
        ' </td>'+
    '</tr>';

if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}


}
    
    formRelatedUi_KRA_Allocation_Self_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){
var relatedUi ='<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">6. </h6>'+
                        '<div class="d-inline-block">'+
                            '<h6 class="text-left mb-3 question">&nbsp;'+this.getRelatedQuestion('KRA 6',SelectedValuesArray.question6)+'</h6>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+SelectedValuesArray.MaxMarks_Q6+'</p>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q3" required>'+this.KRA_allocationOptionTag(SelectedValuesArray.MaxMarks_Q6,'')+'</select></p>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>';

if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}


}    
    formRelatedUi_KRA_Allocation_Manager_L3_L4_L5(gradeLevel, SelectedValuesArray, maximumMarks, allocatedMarksTotal){
        
var relatedUiL1_L2 = '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">5. </h6>'+
                        '<div class="d-inline-block w-100">'+
                            '<textarea class="text-left mb-3 question w-100 p-2 optional-textarea" name="question5" maxlength="300" placeholder="write your Question here(optional)">'+this.getRelatedQuestion('',SelectedValuesArray.question5)+'</textarea>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">Allocation-marks :<input type="number" class="maxMarksInput text-center w-50 ml-2 optional-input" name="Q5_MaxMarks" value='+SelectedValuesArray.MaxMarks_Q5+' min=0 /></p>'+
                               '<div class="d-inline-block float-right">'+
                                 '<p class="d-inline-block mr-2 m-0 remaining-marks score-board text-success">(<span class="inputTotal">'+allocatedMarksTotal+'</span><span>/'+maximumMarks+'</span>)</p>'+
                                 '<p class="d-inline-block float-right m-0 remaining-marks text-success">Remaining Marks Available :<span class="availableMarks">'+maximumMarks+'</span></p>'+
                                '</div>'+
                                '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>';
var relatedUiL3_L4_L5=  '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">5. </h6>'+
                        '<div class="d-inline-block w-100">'+
                            '<textarea class="text-left mb-3 question w-100 p-2" name="question5" maxlength="300" placeholder="write your Question here" required>'+this.getRelatedQuestion('',SelectedValuesArray.question5)+'</textarea>'+
                            '<div>'+
                                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">Allocation-marks :<input type="number" class="maxMarksInput text-center w-50 ml-2" name="Q5_MaxMarks"  value='+SelectedValuesArray.MaxMarks_Q5+' min=0 required/></p>'+
                               '<div class="d-inline-block float-right">'+
                                 '<p class="d-inline-block mr-2 m-0 remaining-marks score-board text-success">(<span class="inputTotal">'+allocatedMarksTotal+'</span><span>/'+maximumMarks+'</span>)</p>'+
                                 '<p class="d-inline-block float-right m-0 remaining-marks text-success">Remaining Marks Available :<span class="availableMarks">'+maximumMarks+'</span></p>'+
                                '</div>'+
                                 '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+ '<tr class="mb-5 ">'+
                    '<td class="text-left  p-4 d-flex">'+
                        '<h6 class="d-inline-block question_sno">6. </h6>'+
                        '<div class="d-inline-block w-100">'+
                            '<textarea class="text-left mb-3 question w-100 p-2 optional-textarea" name="question6" maxlength="300" placeholder="write your Question here(optional)">'+this.getRelatedQuestion('',SelectedValuesArray.question6)+'</textarea>'+
                            '<div>'+
                                 '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">Allocation-marks :<input type="number" class="maxMarksInput text-center w-50 ml-2 optional-input" name="Q6_MaxMarks" value='+SelectedValuesArray.MaxMarks_Q6+' min=0 /></p>'+
                               '<div class="d-inline-block float-right">'+
                                 '<p class="d-inline-block mr-2 m-0 remaining-marks score-board text-success">(<span class="inputTotal">'+allocatedMarksTotal+'</span><span>/'+maximumMarks+'</span>)</p>'+
                                 '<p class="d-inline-block float-right m-0 remaining-marks text-success">Remaining Marks Available :<span class="availableMarks">'+maximumMarks+'</span></p>'+
                                '</div>'+
                               '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>';

       // alert(gradeLevel);
if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
  
return relatedUiL1_L2;
    
}else{
return relatedUiL3_L4_L5;
}


}
formRelatedUi_technical_Knowledge_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){

var relatedUi='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">7. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Prepare or publish technical paper for internal or external seminar.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q7" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q7)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">8. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Possesses analytical thinking and problem solving abilities to execute job duties.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q8" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q8)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">9. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Possesses critical thinking and mathematical skills to execute job duties.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q9" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q9)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>';
if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}

}
formRelatedUi_efficiency_Innovation_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){

var relatedUi='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">5. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Ability to recast the work / service from time to time so that Revenue Vs Costs to complete the work is kept profitable overtime.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q5)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">6. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Contributes to skill and portfolio diversification of the company year on year so that company can stay ahead of the competitors.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q6" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q6)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>';

if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}
}
formRelatedUi_qualityOfWork_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){

var relatedUi= '<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">4. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Synchronization with Organization / functional goals on impeccable output to the client.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>';
if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}
}
formRelatedUi_workHabits_Attitude_drives_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){
var relatedUi='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">5. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Exhibits excellent skill when it comes to expressing ideas and opinions with clarity.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q5)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">6. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp; Leads by example in positivity at work, maintains transperancy and demonstrates good fairness in work distribution to team members. </h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q6" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q6)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>';


if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}
}
formRelatedUi_interpersonal_Relations_Teamwork_Behaviour_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){

var relatedUi='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">4. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Keeps subordinates informed of all details & instructs them to improve.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">5. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Defends the organization when outsider/employee criticize it.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q5)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">6. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp; Conducts periodic team events to ensure group bonding, team interaction, knowledge sharing etc .</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q6" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q6)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>';

if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}
}

formRelatedUi_companyValues_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){

var relatedUi='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">4. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Keeps subordinates informed of MVV, Company Motto & HSE and drives adherence.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+
                '</div>'+
            '</div>'+
        '</td>'+
    '</tr>'+
'<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">5. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Is constantly working on improving his performance on key value attributes while at work viz., Empathy, Commitment, Agility.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q5)+'</select></p>'+
                '</div>'+
            '</div>'+
        '</td>'+
    '</tr>';
if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}


}
formRelatedUi_commercialAwareness_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){

var relatedUi='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">4. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Puts efforts to go through the customer contracts and ensure alignment of deliverables in accordance to the contract and fees paid.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">5. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Gives enough importance to Quality of the deliverable. Hence encourages teams to be innovative in their presentation. </h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q5)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">6. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Takes initiative to plan the work before and reviews the same for adherence and course correction as needed. </h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q6" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q6)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">7. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Understands the importance of Efficiency in company P&L and ensures that teams are productive and efficient on tasks assigned to them. </h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q7" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q7)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>';
if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}

}
formRelatedUi_comm_personalSkillsAndPlanning_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){
var relatedUi='<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">5. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Pays enough importance to the grammatical accuracy of the communication since it affects the company brand image. </h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q5)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">6. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Ensures proactive submission of progress reports to all stakeholders and keeps them engaged.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q6" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q6)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>';
if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}
}
formRelatedUi_managerial_LeadershipSkill_L3_L4_L5(gradeLevel, SelectedValuesArray, typeOfMarksTitle){
var relatedUi='<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">4. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Skillfully settles differences by using a win-win approach to maintain relationships.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q4" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q4)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+
    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">5. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Possess an enhanced forecasting ability and predicts future trends with a high level of accuracy and overcomes any fierce competition. </h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q5" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q5)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+

    '</tr>'+
'<tr class="mb-5 ">'+

    '<td class="text-left  p-4 d-flex">'+
        '<h6 class="d-inline-block question_sno">6. </h6>'+
        '<div class="d-inline-block">'+
            '<h6 class="text-left mb-3 question">&nbsp;Demonstrates Innovative thinking - Shares strategic vision and influences others towards its realisation.</h6>'+
            '<div>'+
                '<p class="font-weight-bold d-inline-block max-marks_title mb-0">Max-marks : '+this.getEachQuestionMaxMarks(gradeLevel)+'</p>'+
                '<p class="font-weight-bold d-inline-block ml-5 max-marks-self mb-0">'+typeOfMarksTitle+'<select class="inputMarks max-marks-self-select" name="Q6" required>'+this.OptionTag(gradeLevel,SelectedValuesArray.Q6)+'</select></p>'+

                '</div>'+
            '</div>'+
        '</td>'+
    '</tr>';

if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
return '';
}else{
return relatedUi;
}
}

formRelatedUi_overAllProgress(SelectedValuesArray,linkType, typeOfMarksTitle){
     var commentValue,selectedValuesFromMap=0, option1Selected, option2Selected, option3Selected,vq1Option='',vq2Option='',vq3Option='';
    
    if(SelectedValuesArray.VQ1=="Yes"){
        selectedValuesFromMap=1;
        
    }else
    if(SelectedValuesArray.VQ2=="Yes"){
        selectedValuesFromMap=2;
    }else
    if(SelectedValuesArray.VQ3=="Yes"){
        selectedValuesFromMap=3;
    }
    
    switch(selectedValuesFromMap){
        case 1:
            option1Selected="checked";
            vq2Option='No';
            vq3Option='No';
            vq1Option="Yes";
            
            break;
        case 2:
            option2Selected="checked";
            vq2Option='Yes';
            vq3Option='No';
            vq1Option="No";
            break;
        case 3:
              option3Selected="checked";
              vq3Option="Yes";
              vq2Option='No';
              vq1Option="No";
            break;
           
           }
    
    
var overAllRelatedUi= '<table class="m-auto w-100">'+
    '<thead class="mb-2">'+
        '<tr><th class="text-center text-dark"><h1 class="font-weight-bold mb-3 text-dark">Overall Progress</h1></th></tr>'+
        '<tr><th class="text-center text-dark"><h5 class="font-weight-bold mb-0 text-dark text-left">Choose any one of the following:</h5></th></tr>'+
        '</thead>'+
    '<tbody>'+
        '<tr class="mb-5 ">'+

            '<td class="text-left  p-4 d-flex">'+
                '<h6 class="d-inline-block question_sno">a). </h6>'+
                '<div class="d-inline-block">'+
                    '<h6 class="text-left mb-3 question">&nbsp;Employee performance and learning is unsatisfactory and is failing to improve at a satisfactory rate.</h6>'+
                '</div>'+
                '<span class="ml-auto align-self-center"><input type="radio" class="d-block radioButtons" name="VQ" value="1" '+option1Selected+' data-id="option1Value" required/></span>'+
                '<span class="ml-4 align-self-center selectedValue" id="option1Value">'+vq1Option+'</span>'+
                '</td>'+

            '</tr>'+
        '<tr class="mb-5 ">'+

            '<td class="text-left  p-4 d-flex">'+
                '<h6 class="d-inline-block question_sno">b). </h6>'+
                '<div class="d-inline-block">'+
                    '<h6 class="text-left mb-3 question">&nbsp;Employee performance and learning is acceptable and is improving at a satisfactory rate.</h6>'+
                '</div>'+
                '<span class="ml-auto align-self-center"><input type="radio" class="d-block radioButtons" name="VQ" value="2" '+option2Selected+' data-id="option2Value" required/></span>'+
                '<span class="ml-4 align-self-center selectedValue" id="option2Value">'+vq2Option+'</span>'+
                '</td>'+

            '</tr>'+
        '<tr class="mb-5 ">'+

            '<td class="text-left  p-4 d-flex">'+
                '<h6 class="d-inline-block question_sno">c). </h6>'+
                '<div class="d-inline-block">'+
                    '<h6 class="text-left mb-3 question">&nbsp;Employee has successfully demonstrated outstanding overall performance.</h6>'+
                '</div>'+
                '<span class="ml-auto align-self-center"><input type="radio" class="d-block radioButtons" name="VQ" value="3" '+option3Selected+' data-id="option3Value" required/></span>'+
                '<span class="ml-4 align-self-center selectedValue" id="option3Value">'+vq3Option+'</span>'+
                '</td>'+

            '</tr>'+
        '</tbody>'+
    '</table>'+this.noteMessage();
    
    if(SelectedValuesArray.CR==null){
        commentValue="";
    }else{
        commentValue=SelectedValuesArray.CR;
    }
    var commentRelatedUi='<table class="comment-tab m-auto w-100">'+
                            '<thead class="mb-2">'+
                                '<tr><th class="text-center text-dark">'+
                                    '<h1 class="font-weight-bold mb-3 text-dark">Comment & Recommendation</h1>'+
                                '</th></tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr class="mb-5 ">'+
                                    '<td class="text-left  p-4 d-flex">'+
                                        '<div style="width: 100%;">'+
                                            '<div><textarea style="width:100%;padding: 50px;"placeholder=" Write comment & recommendation here(optional)..."  name="CR">'+commentValue+'</textarea></div>'+
                                        '</div>'+
                                     '</td>'+
                                '</tr>'+
                            '</tbody></table>';

if(linkType== MANAGER_ASSESSMENT){
return overAllRelatedUi+commentRelatedUi;
}else{
return '';
}

}

 
    
    formRelated_successMessageTab(linkType){
        var relatedUi;
        
        if(linkType== MANAGER_ASSESSMENT){
           relatedUi='<div class="tab success_tab-11 mb-5">'+
                        '<h1 class="font-weight-bold mb-3 text-dark" style="color: #2E6CFE!important;">Thank you for reviewing  Appraisal Form. </h1>'+
                     '</div>';
           }else{
           relatedUi='<div class="tab success_tab-11 mb-5">'+
                        '<h1 class="font-weight-bold mb-3 text-dark" style="color: #2E6CFE!important;">Your Self Assessment Successfully Submitted to your Manager.</h1>'+
                        '<p>Click on re-send button, if your manager have not received your mail of  Appraisal Form.</p>'+
                        '<button id="reSendMailToManager" class="btn btn-primary"><i class="fa fa-spinner d-none fa-spin mr-2" aria-hidden="true"></i>Re-send Mail</button>'+
                        '<p class="mt-2 message success mailing_tab"></p>'+
                      '</div>';
           }
        
        return relatedUi;
    }


OptionTag(gradeLevel,selectedValue){
    console.log("gradeLevel"+gradeLevel+"selectedValue"+selectedValue);
    var maxMarks=9;
    if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
    maxMarks=5;
    }else if(gradeLevel==GRADE_LEVEL3 || gradeLevel==GRADE_LEVEL4 || gradeLevel==GRADE_LEVEL5){
    maxMarks=4;
    }
    var optionTags='<option selected="true" disabled="disabled" value="">None</option>';
    for(var optionCount=1;optionCount<=maxMarks;optionCount++){ if(optionCount==selectedValue){ optionTags=optionTags+'<option selected value='+optionCount+'>'+optionCount+'</option>';
        }else{
        optionTags=optionTags+'<option value='+optionCount+'>'+optionCount+'</option>';
        }
        }
        return optionTags;
    }
    
    
    
    KRA_allocationOptionTag(maxMarks,selectedValue){
    var optionTags='<option selected="true" disabled="disabled" value="">None</option>';
    for(var optionCount=1;optionCount<=maxMarks;optionCount++){ if(optionCount==selectedValue){ optionTags=optionTags+'<option selected value='+optionCount+'>'+optionCount+'</option>';
        }else{
        optionTags=optionTags+'<option value='+optionCount+'>'+optionCount+'</option>';
        }
        }
        return optionTags;
    }

noteMessage(){
    
    return '<p  class="text-left text-dark" style="color:#000"><span class="text-danger font-weight-bold">Note:</span> check once again before submitting, once submitted can&#39;t be editable.</p>';
}
KRA_noteMessage(gradeLevel){
    var L1_L2_note, L3_L4_L5_note;
    L1_L2_note='<p class="text-danger text-left font-weight-bold pl-4 mb-2">Instructions:</p>'+
                    '<ol><li  class="text-left text-dark font-weight-light" style="color:#000"> Minimum 4 KRA need to be allocated.</li>'+
                    '<li  class="text-left text-dark font-weight-light" style="color:#000"> Total marks for this section shall be 35.</li>'+
                    '<li  class="text-left text-dark font-weight-light" style="color:#000"> Marks for each question shall be allocated against the weighted average.</li>'+
                    '<li  class="text-left text-dark font-weight-light" style="color:#000">Once dynamic KRA is kept reserved  and can be allocated during the progress of the year.</li></ol>';
                    
    L3_L4_L5_note='<p class="text-danger text-left font-weight-bold pl-4 mb-2">Instructions:</p>'+
                    '<ol><li  class="text-left text-dark font-weight-light" style="color:#000"> Minimum 5 KRA need to be allocated.</li>'+
                    '<li class="text-left text-dark font-weight-light" style="color:#000"> Total marks for this section shall be 40.</li>'+
                    '<li class="text-left text-dark font-weight-light" style="color:#000"> Marks for each question shall be allocated against the weighted average.</li>'+
                    '<li class="text-left text-dark font-weight-light" style="color:#000">Once dynamic KRA is kept reserved  and can be allocated during the progress of the year.</li></ol>';
                    
    if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
        return L1_L2_note;
    }else{
        return L3_L4_L5_note;
    }
}


    getRelatedQuestion(deafaultValue, SelectedValuesArray) {

        if (SelectedValuesArray==null) {
            return deafaultValue;

        } else {
            return SelectedValuesArray;
        }

    }
    
    getEachQuestionMaxMarks(gradeLevel){
        var maxMarks;
         if(gradeLevel==GRADE_LEVEL1 || gradeLevel== GRADE_LEVEL2){
    maxMarks=5;
    }else if(gradeLevel==GRADE_LEVEL3 || gradeLevel==GRADE_LEVEL4 || gradeLevel==GRADE_LEVEL5){
    maxMarks=4;
    }
    return maxMarks;
    }
    
    getFileuploadRelatedUi(LinkType, filePath,fileId,questionName){ 
        var relatedUi;
            
           if(LinkType== MANAGER_ASSESSMENT){
                if(filePath==null||filePath ==""){
                    relatedUi='';
                }else{
               relatedUi='<div class="mt-2 pl-2 d-inline-block border"><span>'+this.getfileName(filePath)+'</span>'+
                                '<a class="btn rounded-0 ml-2 border-left reportDownloadBtn" href="http://principleacs.net/Appraisal_Form_API/public/files/'+filePath+'" download>'+
                                '<i class="fa fa-arrow-down" style="font-size: 12px;"></i></a>'+
                                '</div>';
                }
               
           }else if(LinkType== SELF_ASSESSMENT){
               
               if(filePath==null||filePath ==""){
                    relatedUi= '<div class="mt-3 d-flex"><input type="file" id="'+fileId+'" class="uploadFileReprort" name="myFile"  data-id="'+fileId+'" data-name="'+questionName+'"style="overflow:hidden;color:#000">'+
                            '<progress id="progressBar_'+fileId+'" value="50" max="100" class="align-self-center ml-3 progress_status_'+fileId+' d-none" style="width: 82px;" ></progress>'+
                            '<span id="status_'+fileId+'" class="mt-1  align-self-center ml-2 progress_status_'+fileId+' d-none">0%</span></div>';
                }else{
                    relatedUi='<div class="mt-3 d-flex"><span id="status_'+fileId+'" class="align-self-center mr-2 progress_status_'+fileId+' text-success"><i class="fa fa-check uploadFileReprort_icon"></i></span><span style=" white-space: nowrap;width: 200px;overflow: hidden;text-overflow: ellipsis; ">'+this.getfileName(filePath)+'</span></div>';
                    
                    
                     }
               
           }
             return relatedUi;
    }
    
    
    getFileSelectedStatus(linkType,formSubmitStatus, filePath,gradeLevel,selectedValue,id,name){
        var value;
        if(formSubmitStatus==0){
            value=null;
        }else{
            value=selectedValue;
            
        }
         if(filePath==null||filePath ==""){
             if(linkType==SELF_ASSESSMENT){
             }else{
                 if(selectedValue==0){
                    selectedValue=1;     
                 }
                
             }
             
             return '<select id="'+id+'" class="inputMarks max-marks-self-select pointEventNone" name="'+name+'" required>'+this.OptionTag(gradeLevel,selectedValue)+'</select>';
         }else{
              return '<select id="'+id+'" class="inputMarks max-marks-self-select" name="'+name+'" required>'+this.OptionTag(gradeLevel,value)+'</select>';
         }
        
    }
     getfileName(filePath){
        var fileName=filePath.split("/");
        fileName=fileName[fileName.length-1];
        return fileName;
    }
/*    
    overAllTabOpionTag(selectedValue){
    var optionTags='<option selected="true"  disabled="disabled" value="">None</option>';
    if(selectedValue=="Yes"){
    optionTags=optionTags+'<option selected value="Yes">Yes</option>'+
    '<option value="No">No</option>';
    }else if(selectedValue=="No"){
    optionTags=optionTags+'<option value="Yes">Yes</option>'+
    '<option selected value="No">No</option>';
    }else{
         optionTags=optionTags+'<option value="Yes">Yes</option>'+
    '<option  value="No">No</option>';
    }
    return optionTags;
    }*/



    }
