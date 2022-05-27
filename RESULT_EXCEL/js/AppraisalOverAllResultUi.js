class AppraisalOverAllResultUi{

//L1_L2_gradeLevelRelatedUi(responseFromAPI){
    
    
    get_L1_L2_RelatedUi(responseFromAPI, authentication){
        var buttonUi;
        var UiObject='<div class="gradeLvl12">'+
                        '<div class="row w-100 m-0 d-block">'+
                            '<div class="col-md-12 text-center header py-4">'+
                                '<h3 class="companyName">Principle ACS Engineering India Private limited</h2>'+
                                '<p >Plot No 27, Rao &amp; Raju colony, Road No 2, Banjara Hills, Hyderabad-500034</p>'+
                                '<h6 class="mb-0">L1 &amp; L2 - Employee Evaluation Form -Performance Appraisal '+KRA_YEAR+'</h6>'+
                            '</div>'+
                            '<div class="col-md-12 commonEmployeeDetails mt-3">'+
                                '<div class="row m-0 ">'+
                                    '<div class="col-md-4">'+
                                        '<table class="table table-hover">'+
                                            '<tr>'+
                                                '<th>Name of the Employee</td>'+
                                                '<td>'+responseFromAPI.empName+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Employee Id</td>'+
                                                '<td>'+responseFromAPI.empId+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Employee Email</td>'+
                                                '<td>'+responseFromAPI.empEmail+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Designation</td>'+
                                                '<td>'+responseFromAPI.designation+'</td>'+
                                            '</tr>'+
                                        '</table>'+
                                    '</div>'+
                                    '<div class="col-md-4">'+
                                        '<table class="table table-hover">'+
                                            '<tr>'+
                                                '<th>Department</td>'+
                                                '<td>'+responseFromAPI.department+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Grade Level</td>'+
                                                '<td>'+responseFromAPI.gradeLevel+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Manager Name& Id</td>'+
                                                '<td>'+responseFromAPI.managerName+'('+responseFromAPI.managerId+')'+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Manager Email</td>'+
                                                '<td>'+responseFromAPI.managerEmail+'</td>'+
                                            '</tr>'+
                                        '</table>'+
                                    '</div>'+
                                    '<div class="col-md-4">'+
                                        '<table class="table table-hover">'+
                                            '<tr>'+
                                                '<th>Joining Date</td>'+
                                                '<td>'+responseFromAPI.employeeJoiningdate+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Evaluation Purpose</td>'+
                                                '<td>Appraisal</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Review Period</td>'+
                                                '<td>01-11-2020 <span class="font-weight-bold"> TO </span>31-10-2021</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>Total OverAll Score</td>'+
                                                '<td>200</td>'+
                                            '</tr>'+
                                        '</table>'+
                                    '</div>'+
                                ' </div>'+
                            '</div>'+
                            
                            '<div class="d-flex px-3 pageBreakOne">'+
                                '<div class="w-50 pr-3">'+
                                    '<h2 class="text-center">FUNCTIONAL SKILLS</h2>'+
                                        '<table class="table table-hover d-line-block align-self-center kraTable">'+
                                            '<thead>'+
                                                '<tr class="bg-blue text-white">'+
                                                    '<td scope="col" rowspan="2">CRITERIA</td>'+
                                                     '<td scope="col" rowspan="2">MAX. Marks</td>'+
                                                    '<td scope="col" colspan="2" class="text-center">Assessment</td>'+
                                                    '<td scope="col" rowspan="2" class="text-center">120</td>'+
                                                '</tr>'+
                                                '<tr class="bg-blue text-white">'+
                                                    '<td scope="col">Self</td>'+
                                                    '<td scope="col" class="p-0 px-1">Manager</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<th scope="col">KRA-Allocation - Min 4 for L1, L2. Have to be tangible. </th>'+
                                                     '<th scope="col">SCORE</th>'+
                                                    '<th scope="col">25%</th>'+
                                                    '<th scope="col">75%</th>'+
                                                    '<th scope="col">Weighted Avg</th>'+
                                                '</tr>'+
                                            '</thead>'+
                                            '<tbody>'+
                                                '<tr>'+
                                                    '<td scope="row" class="w-100">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question1," KRA 1 target not allotted.")+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q1 ? responseFromAPI.kra_allocation.py_MaxMarks_Q1 : 0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.S_Q1 ? responseFromAPI.kra_allocation.S_Q1 :0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.M_Q1 ? responseFromAPI.kra_allocation.M_Q1 :0)+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.WAQ1+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question2," KRA 2 target not allotted.")+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q2 ? responseFromAPI.kra_allocation.py_MaxMarks_Q2 :0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.S_Q2 ? responseFromAPI.kra_allocation.S_Q2 :0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.M_Q2 ? responseFromAPI.kra_allocation.M_Q2 :0)+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.WAQ2+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                      '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question3," KRA 3 target not allotted.")+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q3 ? responseFromAPI.kra_allocation.py_MaxMarks_Q3:0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.S_Q3 ? responseFromAPI.kra_allocation.S_Q3 :0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.M_Q3 ? responseFromAPI.kra_allocation.M_Q3 :0)+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.WAQ3+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question4, "KRA 4 target not allotted.")+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q4 ? responseFromAPI.kra_allocation.py_MaxMarks_Q4:0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.S_Q4 ? responseFromAPI.kra_allocation.S_Q4 :0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.M_Q4 ? responseFromAPI.kra_allocation.M_Q4 :0)+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.WAQ4+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question5," KRA 5 target not allotted.")+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q5 ? responseFromAPI.kra_allocation.py_MaxMarks_Q5:0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.S_Q5 ? responseFromAPI.kra_allocation.S_Q5 :0)+'</td>'+
                                                    '<td>'+(responseFromAPI.kra_allocation.M_Q5 ? responseFromAPI.kra_allocation.M_Q5 :0)+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.WAQ5+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<th scope="row">Total</th>'+
                                                    '<td>'+responseFromAPI.kra_allocation.MaxMarks_Total+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.S_SUM+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.M_SUM+'</td>'+
                                                    '<td>'+responseFromAPI.kra_allocation.totalWA+'</td>'+
                                                '</tr>'+
                                            '</tbody>'+
                                        '</table>'+
                                        '<table class="table table-hover techKnwTable">'+
                                            '<thead>'+
                                                '<tr>'+
                                                    '<th scope="col">Technical Knowledge & Ability</th>'+
                                                      '<th scope="col">SCORE</th>'+
                                                    '<th scope="col">25%</th>'+
                                                    '<th scope="col">75%</th>'+
                                                    '<th scope="col">Weighted Avg</th>'+
                                                '</tr>'+
                                            '</thead>'+
                                            '<tbody>'+
                                                '<tr>'+
                                                    '<td scope="row">Possesses technical skills and competence to execute job duties.</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q1+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q1+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ1+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">Possesses diagramatic skills and attention to details to execute job duties</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q2+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q2+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ2+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">Understanding of the duties and responsibilities & gives the outcome with almost nil or minimal errors. Does not hesitate to take guidance when required.</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q3+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q3+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ3+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">Ability to learn new skills and apply appropriately.</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q4+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q4+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ4+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row" class="fileAttachmentQn1">Submit atleast 5 reports spread across every quarter to show consistency in the work done.'+this.getReportButton(responseFromAPI.technical_ability_and_knowledge.reportFilePath)+'</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q5+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q5+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ5+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row" class="fileAttachmentQn2">Proof of atleast one training or presentation to internal or external clients which showcases the candidates depth in knowledge.'+this.getReportButton(responseFromAPI.technical_ability_and_knowledge.presentationFilePath)+'</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q6+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q6+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ6+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<th scope="row">Total</th>'+
                                                    '<td>30</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.S_SUM+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.M_SUM+'</td>'+
                                                    '<td>'+responseFromAPI.technical_ability_and_knowledge.totalWA+'</td>'+
                                                '</tr>'+
                                            '</tbody>'+
                                        '</table>'+
                                        '<table class="table table-hover  efficny_InvtnTable">'+
                                            '<thead>'+
                                                '<tr>'+
                                                    '<th scope="col">Efficiency and Innovation</th>'+
                                                    '<th scope="col">SCORE</th>'+
                                                    '<th scope="col">25%</th>'+
                                                    '<th scope="col">75%</th>'+
                                                    '<th scope="col">Weighted Avg</th>'+
                                                '</tr>'+
                                            '</thead>'+
                                            '<tbody>'+
                                                '<tr>'+
                                                    '<td scope="row">Expresses ideas and plan in a creative manner including sketching as needed so that everyone can understand easily.</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.S_Q1+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.M_Q1+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.WAQ1+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row" class="fileAttachmentQn4">Uses Technology (Excel formulae / Programming skills) effectively so that templates are made in such way that it is useful in future also.'+this.getReportButton(responseFromAPI.efficiency_and_innovation.tecTemplatesFilePath)+'</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.S_Q2+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.M_Q2+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.WAQ2+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">If repetitive works are given, he / she clearly demonstrates skill and innovative methods to taper the time required to accomplish the task.</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.S_Q3+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.M_Q3+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.WAQ3+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td scope="row">Focuses on innovative method to showcase value of the work done to clients / other stakeholders.</td>'+
                                                    '<td>5</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.S_Q4+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.M_Q4+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.WAQ4+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                '<tr>'+
                                                    '<th scope="row">Total</th>'+
                                                    '<td>20</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.S_SUM+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.M_SUM+'</td>'+
                                                    '<td>'+responseFromAPI.efficiency_and_innovation.totalWA+'</td>'+
                                                '</tr>'+
                                            '</tbody>'+
                                        '</table>'+
                                '</div>'+
                                '<div class="w-50">'+
                                     '<h2 class="text-center">ADMINISTRATIVE SKILLS</h2>'+
                                     '<table class="table table-hover">'+
                                        '<thead>'+
                                                '<tr class="bg-blue text-white">'+
                                                    '<td scope="col" rowspan="2">CRITERIA</td>'+
                                                     '<td scope="col" rowspan="2">MAX. Marks</td>'+
                                                    '<td scope="col" colspan="2" class="text-center">Assessment</td>'+
                                                    '<td scope="col" rowspan="2" class="text-center">80</td>'+
                                                '</tr>'+
                                                '<tr class="bg-blue text-white">'+
                                                    '<td scope="col">Self</td>'+
                                                    '<td scope="col" class="p-0 px-1">Manager</td>'+
                                                '</tr>'+
                                            '<tr>'+
                                                '<th scope="col">Interpersonal Relations/Teamwork/Behaviour.</th>'+
                                                  '<th scope="col">SCORE</th>'+
                                                '<th scope="col">25%</th>'+
                                                '<th scope="col">75%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row" class="w-100">Responds and contributes to team efforts</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Responds positively to suggestions,instructions,criticism and adapts well to changing circumstances</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Shows pride when representing organization in market place/clients</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>15</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover ">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Company Values, HSE</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">25%</th>'+
                                                '<th scope="col">75%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Is aware of MVV, Company Motto & HSE and pays attention to understanding the same and imbibing the same in his/her personality</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Always demonstrates & ensures adherence of company value & Motto at work.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Always demonstrates & ensures adherence of HSE practices at work.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>15</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Commercial awareness and initiatives</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">25%</th>'+
                                                '<th scope="col">75%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Always ensures that there are no time and cost overruns in the projects handled and works with result oriented action.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Understands the scope clearly before taking up the work and ensures that there are no repetition of efforts.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Interacts with customers to ensure delivery satisfaction and to understand client project pipeline and works for repeat orders.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>15</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Comm / Presentation skills and Planning skills</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">25%</th>'+
                                                '<th scope="col">75%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Exhibits effective listening, oral and written skills.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Keeps the presentation / communication crisp, attractive and ensures communication of the summary / conclusion clearly.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Skillfully demonstrates the eagerness to engage and willing to go extra mile in fulling the engagement.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Understands the planning is key to success and hence ensures that it is chalked out and aligned with superior before execution.		</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>20</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div>'+
                            '</div>'+
                            '<div class="d-flex px-3">'+
                                '<div class="w-50 pr-3">'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Quality of Works</th>'+
                                                  '<th scope="col">SCORE</th>'+
                                                '<th scope="col">25%</th>'+
                                                '<th scope="col">75%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Is diligent at work and ensures accuracy, tidyness and focuses on details and not only the speed. </td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Ensures adherence to processes, works towards creating processes as needed to ensure systematic and consistent output at work.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Is aware of ISO certification of the company, and hence pays importance to all process compliances.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>15</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Work Habits - Attitude and drive</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">25%</th>'+
                                                '<th scope="col">75%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Maintains office timings, does not apply leaves unnecessarily also gives advance intimation of leaves, applies leaves in a timely manner.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Stays late as needed to complete the task on hand. Works as per responsibility and works responsibly.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Shows proactiveness to get works / new works allocated to himself rather than prolonging existing works on hand.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Focuses on productivity and maintaining commitment - "beating the deadline".</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr class="AttitudeAndDriveTR">'+
                                                '<th scope="row">Total</th>'+
                                                '<td>20</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.totalWA+'</td>'+
                                            '</tr>'+
            
                                            '<tr class="bg-blue text-white">'+
                                                '<th scope="row" class=" border ">Total (Functional Skills )</th>'+
                                                '<td class="bg-blue text-white">120</td>'+
                                                '<td class="bg-blue text-white">'+responseFromAPI.functionSkillsTotalSelfMarks+'</td>'+
                                                '<td class="bg-blue text-white">'+responseFromAPI.functionSkillsTotalManagerMarks+'</td>'+
                                                '<td class="bg-blue text-white">'+responseFromAPI.functionalSkillsTotalWeightedAverage+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div>'+
                                '<div class="w-50">'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Managerial and Leadership Skills</th>'+
                                                  '<th scope="col">SCORE</th>'+
                                                '<th scope="col">25%</th>'+
                                                '<th scope="col">75%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Gathers detailed / first hand information about customer / client needs and accordingly works towards solution building.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Accepts responsibility in a competent manner for own and subordinates work. Also works collaboratively with other stakeholders, to ensure tangible benefits to the company through sustainable relationships.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Aspirant to climb up the ladder, accepts challenges, new responsibilities and roles.</td>'+
                                                '<td>5</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr class="LeadershipTR">'+
                                                '<th scope="row">Total</th>'+
                                                '<td>15</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.totalWA+'</td>'+
                                            '</tr>'+
                
                                            '<tr class="bg-blue text-white">'+
                                                '<th scope="row" class="border  ">Total (Administrative Skills )</th>'+
                                                '<td class="bg-blue text-white">80</td>'+
                                                '<td class="bg-blue text-white">'+responseFromAPI.adminstrativeSkillsTotalSelfMarks+'</td>'+
                                                '<td class="bg-blue text-white">'+responseFromAPI.adminstrativeSkillsTotalManagerMarks+'</td>'+
                                                '<td class="bg-blue text-white">'+responseFromAPI.adminstrativeSkillsTotalWeightedAverage+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div>'+
                            '</div>'+

            '<div id="grandTotalRelatedUi" class="col-md-12">'+
                '<table class="table table-hover">'+
                    '<thead>'+
                        '<tr>'+
                            '<th>Self -Assessment</td>'+
                            '<th>Manager- Assessment</td>'+
                            '<th>Grand Total</td>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                        '<tr>'+
                            '<td>'+responseFromAPI.grandTotalSelf+'</td>'+
                            '<td>'+responseFromAPI.grandTotalManager+'</td>'+
                            '<td>'+responseFromAPI.grandTotalWeightedAvg+'/200</td>'+
                            '</tr>'+
                    '</tbody>'+
                '</table>'+
            '</div>'+
                    
            '<div class="d-flex">'+        
                '<div id="overAllProgressRelatedUi" class="col-md-6" >'+
                    '<h4> OVERALL PROGRESS</h4>'+
                    '<table class="table table-hover">'+
                        '<tbody>'+
                            '<tr>'+
                                '<td scope="row">Employee performance and learning is unsatisfactory and is failing to improve at a satisfactory rate.</td>'+
                                '<td>'+responseFromAPI.managerial_and_leadership_skills.VQ1+'</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Employee performance and learning is acceptable and is improving at a satisfactory rate.</td>'+
                                '<td>'+responseFromAPI.managerial_and_leadership_skills.VQ2+'</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Employee has successfully demonstrated outstanding overall performance.</td>'+
                                '<td>'+responseFromAPI.managerial_and_leadership_skills.VQ3+'</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>'+
                '<div class="col-md-3">'+
                    '<h3> Scoring System</h3>'+
                    '<table class="table table-hover">'+
                        '<thead>'+
                            '<tr>'+
                                '<th>Attribute</td>'+
                                '<th>Score</td>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<tr>'+
                                '<td scope="row">Outstanding</td>'+
                                '<td>5</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Exceeds Requirements.</td>'+
                                '<td>4</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Meets Requirements.</td>'+
                                '<td>3</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Need Improvement</td>'+
                                '<td>2</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Unsatisfactory / Poor</td>'+
                                '<td>1</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>'+
                '<div class="col-md-3">'+
                    '<h3> Scoring System</h3>'+
                    '<table class="table table-hover">'+
                        '<thead>'+
                            '<tr>'+
                                '<th>Grade</td>'+
                                '<th>%</td>'+
                                '<th>Final Grade</td>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<tr>'+
                                '<td scope="row">A+</td>'+
                                '<td> >=95-100%</td>'+
                                '<td rowspan="5" id="finalGradeValue" class="text-center">'+responseFromAPI.finalGrade+'</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">A</td>'+
                                '<td> >=85-94%</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">B+</td>'+
                                '<td> >=65-84%</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">B</td>'+
                                '<td>  >=51-64%</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">C</td>'+
                                '<td>  &#60;=50%</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>'+
            '</div>'+
            '<div class="col-md-12 mb-4">'+
                '<h3>MANAGER COMMENTS &amp; RECOMMENDATION</h3>'+
                '<div class="w-50 mb-3 p-3 ManagerCommentDiv  border ">'+responseFromAPI.managerial_and_leadership_skills.CR+'</div>'+
                this.getNextYearKRA(GRADE_LOW_LEVEL,responseFromAPI)+
        '</div>';

                  
         
         if(authentication=="authentication"){
             
               buttonUi='<button class="btn btn-success float-right sendResultsBtn" data-toggle="modal" data-target="#modelPopupConfirmation">Send Results</button>'+
                    '</div>';
         }else{
              buttonUi='</div>';
         }
        return UiObject+buttonUi;
        
        
    }
      get_L3_L4_L5_RelatedUi(responseFromAPI, authentication){
          var buttonUi;
        var UiObject='<div class="gradeLvl345">'+
                    '<div class="row w-100 m-0 d-block">'+
                        '<div class="col-md-12 text-center header  py-4">'+
                        '<h3 class="companyName">Principle ACS Engineering India Private limited</h2>'+
                        '<p >Plot No 27, Rao &amp; Raju colony, Road No 2, Banjara Hills, Hyderabad-500034</p>'+
                        '<h6 class="mb-0">L3, L4 &amp; L5 - Employee Evaluation Form -Performance Appraisal '+KRA_YEAR+'</h6>'+
                    '</div>'+
                    '<div class="col-md-12 commonEmployeeDetails mt-3">'+
                        '<div class="row m-0 ">'+
                            '<div class="col-md-4">'+
                                '<table class="table table-hover">'+
                                    '<tr>'+
                                        '<th>Name of the Employee</td>'+
                                        '<td>'+responseFromAPI.empName+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Employee Id</td>'+
                                        '<td>'+responseFromAPI.empId+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Employee Email</td>'+
                                        '<td>'+responseFromAPI.empEmail+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Designation</td>'+
                                        '<td>'+responseFromAPI.designation+'</td>'+
                                    '</tr>'+
                                    '</table>'+
                            '</div>'+
                            '<div class="col-md-4">'+
                                '<table class="table table-hover">'+
                                    '<tr>'+
                                        '<th>Department</td>'+
                                        '<td>'+responseFromAPI.department+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Grade Level</td>'+
                                        '<td>'+responseFromAPI.gradeLevel+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Manager Name& Id</td>'+
                                        '<td>'+responseFromAPI.managerName+'('+responseFromAPI.managerId+')'+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Manager Email</td>'+
                                        '<td>'+responseFromAPI.managerEmail+'</td>'+
                                    '</tr>'+
                                '</table>'+
                            '</div>'+
    
                            '<div class="col-md-4">'+
                                '<table class="table table-hover">'+
                                    '<tr>'+
                                        '<th>Joining Date</td>'+
                                        '<td>'+responseFromAPI.employeeJoiningdate+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Evaluation Purpose</td>'+
                                        '<td>Appraisal</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Review Period</td>'+
                                        '<td>01-11-2020 <span class="font-weight-bold"> TO </span>31-10-2021</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>Total OverAll Score</td>'+
                                        '<td>335</td>'+
                                    '</tr>'+
    
                                    '</table>'+
                            '</div>'+
                        ' </div>'+
                    '</div>'+
                    '<div class="d-flex px-3 pageBreakOne">'+
                        '<div class="w-50 pr-3">'+
                            '<h5 class="text-center ">FUNCTIONAL SKILLS</h2>'+
                                '<table class="table table-hover kraTable">'+
                                        '<thead>'+
                                            '<tr class="bg-blue text-white">'+
                                                '<td scope="col" rowspan="2">CRITERIA</td>'+
                                                 '<td scope="col" rowspan="2">MAX. Marks</td>'+
                                                '<td scope="col" colspan="2" class="text-center">Assessment</td>'+
                                                '<td scope="col" rowspan="2" class="text-center">140</td>'+
                                            '</tr>'+
                                            '<tr class="bg-blue text-white">'+
                                                '<td scope="col">Self</td>'+
                                                '<td scope="col" class="p-0 px-1">Manager</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="col">KRA-Allocation - Min 4 for L1, L2. Have to be tangible. </th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row" class="w-100">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question1," KRA 1 not allotted.")+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q1 ? responseFromAPI.kra_allocation.py_MaxMarks_Q1: 0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.S_Q1 ? responseFromAPI.kra_allocation.S_Q1 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.M_Q1 ? responseFromAPI.kra_allocation.M_Q1 :0)+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question2," KRA 2 not allotted.")+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q2 ? responseFromAPI.kra_allocation.py_MaxMarks_Q2 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.S_Q2 ? responseFromAPI.kra_allocation.S_Q2 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.M_Q2 ? responseFromAPI.kra_allocation.M_Q2 :0)+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                  '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question3," KRA 3 not allotted.")+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q3 ? responseFromAPI.kra_allocation.py_MaxMarks_Q3: 0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.S_Q3 ? responseFromAPI.kra_allocation.S_Q3 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.M_Q3 ? responseFromAPI.kra_allocation.M_Q3:0)+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question4," KRA 4 not allotted.")+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q4 ? responseFromAPI.kra_allocation.py_MaxMarks_Q4 : 0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.S_Q4 ? responseFromAPI.kra_allocation.S_Q4 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.M_Q4 ? responseFromAPI.kra_allocation.M_Q4 :0)+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question5, " KRA 5 not allotted.")+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q5 ? responseFromAPI.kra_allocation.py_MaxMarks_Q5 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.S_Q5 ? responseFromAPI.kra_allocation.S_Q5 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.M_Q5 ? responseFromAPI.kra_allocation.M_Q5 :0)+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">'+this.getKRAQuestion(responseFromAPI.kra_allocation.previousYear_question6, " KRA 6 not allotted.")+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.py_MaxMarks_Q6 ? responseFromAPI.kra_allocation.py_MaxMarks_Q6 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.S_Q6 ? responseFromAPI.kra_allocation.S_Q6 :0)+'</td>'+
                                                '<td>'+(responseFromAPI.kra_allocation.M_Q6 ? responseFromAPI.kra_allocation.M_Q6: 0)+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.WAQ6+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>'+responseFromAPI.kra_allocation.MaxMarks_Total+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.kra_allocation.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover techKnwTable" >'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Technical Knowledge & Ability</th>'+
                                                  '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Possesses technical skills and competence to execute job duties.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Possesses diagramatic skills and attention to details to execute job duties</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Understanding of the duties and responsibilities & gives the outcome with almost nil or minimal errors. Does not hesitate to take guidance when required.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Ability to learn new skills and apply appropriately.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row" class="fileAttachmentQn1">Submit atleast 5 reports spread across every quarter to show consistency in the work done.'+this.getReportButton(responseFromAPI.technical_ability_and_knowledge.reportFilePath)+'</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row" class="fileAttachmentQn2">Proof of atleast one training or presentation to internal or external clients which showcases the candidates depth in knowledge.'+this.getReportButton(responseFromAPI.technical_ability_and_knowledge.presentationFilePath)+'</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q6+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q6+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ6+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row" class="fileAttachmentQn3">Prepare or publish technical paper for internal or external seminar.'+this.getReportButton(responseFromAPI.technical_ability_and_knowledge.seminarFilePath)+'</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q7+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q7+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ7+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Possesses analytical thinking and problem solving abilities to execute job duties.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q8+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q8+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ8+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Possesses critical thinking and mathematical skills to execute job duties.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_Q9+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_Q9+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.WAQ9+'</td>'+
                                            '</tr>'+
            
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>36</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.technical_ability_and_knowledge.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div>'+
                                '<div class="w-50">'+
                                    '<h5 class="text-center ">ADMINISTRATIVE SKILLS</h2>'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+'<tr class="bg-blue text-white">'+
                                                    '<td scope="col" rowspan="2">CRITERIA</td>'+
                                                     '<td scope="col" rowspan="2">MAX. Marks</td>'+
                                                    '<td scope="col" colspan="2" class="text-center">Assessment</td>'+
                                                    '<td scope="col" rowspan="2" class="text-center">120</td>'+
                                                '</tr>'+
                                                '<tr class="bg-blue text-white">'+
                                                    '<td scope="col">Self</td>'+
                                                    '<td scope="col" class="p-0 px-1">Manager</td>'+
                                                '</tr>'+
                                            '<tr>'+
                                                '<th scope="col">Interpersonal Relations/Teamwork/Behaviour.</th>'+
                                                  '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row" class="w-100">Responds and contributes to team efforts</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Responds positively to suggestions,instructions,criticism and adapts well to changing circumstances</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Shows pride when repesenting organization in market place/clients</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Keeps subordinates informed of all details & instructs them to improve</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Defends the organization when outsider/employee criticize it.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Conducts periodic team events to ensure group bonding, team interaction, knowledge sharing etc</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_Q6+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_Q6+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.WAQ6+'</td>'+
                                            '</tr>'+
                
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>24</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.interpersonal_relations_teamwork_behaviour.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Company Values, HSE</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Is aware of MVV, Company Motto & HSE and pays attention to understanding the same and imbibing the same in his/her personality</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Always demonstrates & ensures adherence of company value & Motto at work.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Always demonstrates & ensures adherence of HSE practices at work.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Keeps subordinates informed of MVV, Company Motto & HSE and drives adherence</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Is constantly working on improving his performance on key value attributes while at work viz., Empathy, Commitment, Agility.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.WAQ5+'</td>'+
                                            '</tr>'+
                
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>20</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.company_values_hse.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover commercialQnsTable" >'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Commercial awareness and initiatives</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Always ensures that there are no time and cost overruns in the projects handled and works with result oriented action.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Understands the scope clearly before taking up the work and ensures that there are no repetition of efforts.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Interacts with customers to ensure delivery satisfaction and to understand client project pipeline and works for repeat orders.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Puts efforts to go through the customer contracts and ensure alignment of deliverables in accordance to the contract and fees paid	</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Gives enough importance to Quality of the deliverable. Hence encourages teams to be innovative in their presentation.</td><td>4</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Takes initiative to plan the work before and reviews the same for adherence and course correction as needed.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q6+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q6+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ6+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Understands the importance of Efficiency in company P&L and ensures that teams are productive and efficient on tasks assigned to them.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_Q7+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_Q7+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.WAQ7+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>28</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.commercial_awareness_and_initiatives.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div>'+
                            '</div>'+
                            '<div class="d-flex px-3">'+
                                '<div class="w-50 pr-3">'+
                                    '<table class="table table-hover efficny_InvtnTable">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Efficiency and Innovation</th>'+
                                                '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Expresses ideas and plan in a creative manner including sketching as needed so that everyone can understand easily.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row" class="fileAttachmentQn4">Uses Technology (Excel formulae / Programming skills) effectively so that templates are made in such way that it is useful in future also.'+this.getReportButton(responseFromAPI.efficiency_and_innovation.tecTemplatesFilePath)+'</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">If repetitive works are given, he / she clearly demonstrates skill and innovative methods to taper the time required to accomplish the task.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Focuses on innovative method to showcase value of the work done to clients / other stakeholders.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Ability to recast the work / service from time to time so that Revenue Vs Costs to complete the work is kept profitable overtime.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Contributes to skill and portfolio diversification of the company year on year so that company can stay ahead of the competitors </td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.S_Q6+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.M_Q6+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.WAQ6+'</td>'+
                                            '</tr>'+
            
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>24</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.efficiency_and_innovation.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
            
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Quality of Works</th>'+
                                                  '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Is diligent at work and ensures accuracy, tidyness and focuses on details and not only the speed. </td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Ensures adherence to processes, works towards creating processes as needed to ensure systematic and consistent output at work.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Is aware of ISO certification of the company, and hence pays importance to all process compliances.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Synchronization with Organization / functional goals on impeccable output to the client.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.WAQ4+'</td>'+
                                            '</tr>'+
            
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>16</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.quality_of_work.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
            
            
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Work Habits - Attitude and drive</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Maintains office timings, does not apply leaves unnecssarily also gives advance intimatation of leaves, applies leaves in a timely manner.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Stays late as needed to complete the task on hand. Works as per responsibility and works responsibly.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Shows proactiveness to get works / new works allocated to himself rather than prolonging existing works on hand.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Focuses on productivity and maintaining commitment - "beating the deadline".</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Exhibits excellent skill when it comes to expressing ideas and opinions with clarity.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Leads by example in positivity at work, maintains transparancy and demonstrates good fairness in work distribution to team members.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_Q6+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_Q6+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.WAQ6+'</td>'+
                                            '</tr>'+
            
                                            '<tr class="AttitudeAndDriveTR">'+
                                                '<th scope="row" >Total</th>'+
                                                '<td>24</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.work_habits_attude_and_drive.totalWA+'</td>'+
                                            '</tr>'+
            
                                            '<tr class="bg-blue text-white">'+
                                                '<th scope="row" class=" border ">Total (Functional Skills )</th>'+
                                                '<td class="bg-blue text-white ">140</td>'+
                                                '<td class="bg-blue text-white  ">'+responseFromAPI.functionSkillsTotalSelfMarks+'</td>'+
                                                '<td class="bg-blue text-white  ">'+responseFromAPI.functionSkillsTotalManagerMarks+'</td>'+
                                                '<td class="bg-blue text-white  ">'+responseFromAPI.functionalSkillsTotalWeightedAverage+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div>'+
                                '<div class="w-50">'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Comm / Presentation skills and Planning skills</th>'+
                                                 '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Exhibits effective listening, oral and written skills.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Keeps the presentation / communication crisp, attractive and ensures communication of the summary / conclusion clearly.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Skillfully demonstrates the eagerness to engage and willing to go extra mile in fulling the engagement.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Understands the planning is key to success and hence ensures that it is chalked out and aligned with superior before execution.		</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Pays enough importance to the grammatical accuracy of the communication since it affects the company brand image</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Ensures proactive submission of progress reports to all stakeholders and keeps them engaged.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_Q6+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_Q6+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.WAQ6+'</td>'+
                                            '</tr>'+
                
                                            '<tr>'+
                                                '<th scope="row">Total</th>'+
                                                '<td>24</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.comm_presentation_skills_and_planning_skills.totalWA+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                    '<table class="table table-hover">'+
                                        '<thead>'+
                                            '<tr>'+
                                                '<th scope="col">Managerial and Leadership Skills</th>'+
                                                  '<th scope="col">SCORE</th>'+
                                                '<th scope="col">40%</th>'+
                                                '<th scope="col">60%</th>'+
                                                '<th scope="col">Weighted Avg</th>'+
                                            '</tr>'+
                                        '</thead>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td scope="row">Gathers detailed / first hand information about customer / client needs and accordingly works towards solution building.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q1+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q1+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ1+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Accepts responsibility in a competent manner for own and subordinates work. Also works collaboratively with other stakeholders, to ensure tangible benefits to the company through sustainable relationships.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q2+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q2+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ2+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Aspirant to climb up the ladder, accepts challenges, new responsibilities and roles.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q3+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q3+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ3+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Skillfully settles differences by using a win-win approach to maintain relationships.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q4+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q4+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ4+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Possess an enhanced forecasting ability and predicts future trends with a high level of accuracy and overcomes any fierce competition</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q5+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q5+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ5+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<td scope="row">Demonstrates Innovative thinking - Shares strategic vision and influences others towards its realisation.</td>'+
                                                '<td>4</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_Q6+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_Q6+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.WAQ6+'</td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<tr class="LeadershipTR">'+
                                                '<th>Total</th>'+
                                                '<td>24</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.S_SUM+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.M_SUM+'</td>'+
                                                '<td>'+responseFromAPI.managerial_and_leadership_skills.totalWA+'</td>'+
                                            '</tr>'+
                
                                             '<tr class="bg-blue text-white ">'+
                                                '<th scope="row" class="border  ">Total (Administrative Skills )</th>'+
                                                '<td  class="bg-blue text-white ">120</td>'+
                                                '<td  class="bg-blue text-white ">'+responseFromAPI.adminstrativeSkillsTotalSelfMarks+'</td>'+
                                                '<td  class="bg-blue text-white ">'+responseFromAPI.adminstrativeSkillsTotalManagerMarks+'</td>'+
                                                '<td  class="bg-blue text-white ">'+responseFromAPI.adminstrativeSkillsTotalWeightedAverage+'</td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div>'+
                            '</div>'+
                            
            // '<div id="functionSkillsRelatedUi" class="col-md-6 gradeLvl345">'+
                    
                       
            //     '</div>'+ 
            //     '<div id="administrativeSkillsRelatedUi" class="col-md-6">'+
                    
                    
            //     '</div>'+
           
            '<div id="grandTotalRelatedUi" class="col-md-12">'+
            '<table class="table table-hover">'+
                        '<thead><tr>'+
                                        '<th>360°</td>'+
                                        '<th>Self -Assessment</td>'+
                                        '<th>Manager- Assessment</td>'+
                                        '<th>Grand Total</td>'+
                                '</tr>'+
                        '</thead>'+
                        '<tbody><tr>'+
                                    '<td>'+responseFromAPI.feedBack_360.Total_AVG+'</td>'+
                                    '<td>'+responseFromAPI.grandTotalSelf+'</td>'+
                                    '<td>'+responseFromAPI.grandTotalManager+'</td>'+
                                    '<td>'+responseFromAPI.grandTotalWeightedAvg+'/335</td>'+
                                '</tr>'+
                        '</tbody>'+
                     '</table>'+
                    '</div>'+
                 '<div class="d-flex pageBreakTwo">'+
                    '<div id="overAllProgressRelatedUi" class="col-md-6" >'+
                    '<h4> OVERALL PROGRESS</h4>'+
                    '<table class="table table-hover">'+
                        '<tbody>'+
                            '<tr>'+
                                '<td scope="row">Employee performance and learning is unsatisfactory and is failing to improve at a satisfactory rate.</td>'+
                                '<td>'+responseFromAPI.managerial_and_leadership_skills.VQ1+'</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Employee performance and learning is acceptable and is improving at a satisfactory rate.</td>'+
                                '<td>'+responseFromAPI.managerial_and_leadership_skills.VQ2+'</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td scope="row">Employee has successfully demonstrated outstanding overall performance.</td>'+
                                '<td>'+responseFromAPI.managerial_and_leadership_skills.VQ3+'</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                    '</div>'+
                     '<div class="col-md-3">'+
                    '<h3> Scoring System</h3>'+
                    '<table class="table table-hover">'+
                        '<thead>'+
                            '<tr>'+
                                '<th>Attribute</td>'+
                                '<th>Score</td>'+
                            '</tr>'+
                        '</thead>'+
                            '<tbody>'+
                                '<tr>'+
                                    '<td scope="row">Outstanding</td>'+
                                    '<td>4</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td scope="row">Exceeds Requirements.</td>'+
                                    '<td>3</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td scope="row">Meets Requirements.</td>'+
                                    '<td>2</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td scope="row">Need Improvement</td>'+
                                    '<td>1</td>'+
                                '</tr>'+

                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                    '<div class="col-md-3">'+
                    '<h3> Scoring System</h3>'+
                    '<table class="table table-hover">'+
                        '<thead>'+
                            '<tr>'+
                                '<th>Grade</td>'+
                                '<th>%</td>'+
                                '<th>Final Grade</td>'+
                            '</tr>'+
                        '</thead>'+
                            '<tbody>'+
                                '<tr>'+
                                    '<td scope="row">A+</td>'+
                                    '<td> >=95-100%</td>'+
                                    '<td rowspan="5" id="finalGradeValue" class="text-center">'+responseFromAPI.finalGrade+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td scope="row">A</td>'+
                                    '<td> >=85-94%</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td scope="row">B+</td>'+
                                    '<td> >=65-84%</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td scope="row">B</td>'+
                                    '<td>  >=51-64%</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td scope="row">C</td>'+
                                    '<td>  &#60;=50%</td>'+
                                '</tr>'+

                            '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>'+
                    this.getthree60DegreeformData(authentication,responseFromAPI)+
                    '<div class="col-md-12 mb-4">'+
                        '<h3>MANAGER COMMENTS &amp; RECOMMENDATION</h3>'+

                    '<div class="w-50 mb-3 p-3 ManagerCommentDiv">'+responseFromAPI.managerial_and_leadership_skills.CR+'</div>'+
                    this.getNextYearKRA(GRADE_HIGH_LEVEL,responseFromAPI)+
            '</div>';
          
         
          if(authentication=="authentication"){
             
              buttonUi='<button class="btn btn-success float-right sendResultsBtn" data-toggle="modal" data-target="#modelPopupConfirmation">Send Results</button>'+
                    '</div>';
         }else{
              buttonUi='</div>';
         }
         
        
        return UiObject+buttonUi;
        
        
    }
    /*download images*/
    getReportButton(filePath){
         var relatedUi; 
          if (filePath == null || filePath == "") {
            relatedUi = '';
        } else {
            relatedUi ='<div class="d-flex"><div class="mt-2 pl-2 d-flex border bg-primary text-white">'+
                            '<p class="mb-0 align-self-center overflow-hidden" style="max-width:200px;text-overflow: ellipsis; white-space: nowrap;">'+this.getfileName(filePath) + '</p>'+
                                '<a class="btn rounded-0 ml-2 border-left reportDownloadBtn text-white" href="/Appraisal_Form_API/public/files/' + filePath + '"  download>'+
                                    '<i class="fa fa-arrow-down p" style="font-size: 12px;"></i>'+
                                '</a>'+
                        '</div></div>';
        }
        return relatedUi;
        
    }
    
      getthree60DegreeformData(authentication,responseFromAPI){
           if(authentication=="authentication"){
              return '<div id="three60DegreeFeedBackStaus" class="col-md-10">'
                    +'<h2>360 degree feedback status & results</h2><form id="three60DegreeFormOverAllReport" class="mt-2"><table class="table table-hover border font-weight-light text-left">'
                                    +'<thead><tr>'
                                            +'<th class="text-left"></th>'
                                            +'<th class="text-left">360 Degree Feedback Status</th>'
                                            +'<th class="text-left"></th>'
                                            +'<th class="text-left '+responseFromAPI.feedBack_360.uiClassCE+'">'+responseFromAPI.feedBack_360.statusCE+'</th>'
                                            +'<th class="text-left '+responseFromAPI.feedBack_360.uiClassSB+'">'+responseFromAPI.feedBack_360.statusSB+'</th>'
                                            +'<th class="text-left '+responseFromAPI.feedBack_360.uiClassAF+'">'+responseFromAPI.feedBack_360.statusAF+'</th>'
                                            +'<th class="text-left '+responseFromAPI.feedBack_360.uiClassOD+'">'+responseFromAPI.feedBack_360.statusOD+'</th>'
                                            +'<th class="text-left '+responseFromAPI.feedBack_360.uiClassSO+'">'+responseFromAPI.feedBack_360.statusSO+'</th>'
                                            +'<th></th></tr>'
                                    +'</thead>'
                                    +'<thead><tr style="background: aliceblue;">'
                                        +'<th class="text-left">S.No</th>'
                                        +'<th class="text-left">Question</th>'
                                        +'<th class="text-left">Max/reviewer</th>'
                                        +'<th class="text-left">Customer - External</th>'
                                        +'<th class="text-left">Super Boss</th>'
                                        +'<th class="text-left">Admin/Finance</th>'
                                        +'<th class="text-left">Other Dept-Peer</th>'
                                        +'<th class="text-left">Sub-Ordinate</th>'
                                        +'<th class="text-left border-left">Average</th></tr>'
                                    +'</thead><tbody>'
                                    +'<tr><td>1</td><td>Perception on Subject Knowledge	</td>'
                                            +'<td>3</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.CE_Q1+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SB_Q1+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.AF_Q1+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.OD_Q1+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SO_Q1+'</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q1_AVG+'</td></tr>'
                                    +'<tr><td>2</td><td>Perception on Temperament</td>'
                                            +'<td>3</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.CE_Q2+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SB_Q2+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.AF_Q2+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.OD_Q2+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SO_Q2+'</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q2_AVG+'</td></tr>'
                                    +'<tr><td>3</td><td>Business Acumen</td>'
                                            +'<td>3</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.CE_Q3+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SB_Q3+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.AF_Q3+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.OD_Q3+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SO_Q3+'</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q3_AVG+'</td></tr>'
                                    +'<tr><td>4</td><td>Alignment to Company Mission, Vision, Values &amp; Motto - "Simplicity in Engineering"</td>'
                                            +'<td>3</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.CE_Q4+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SB_Q4+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.AF_Q4+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.OD_Q4+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SO_Q4+'</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q4_AVG+'</td></tr>'
                                    +'<tr><td>5</td><td>Popularity in company</td>'
                                            +'<td>3</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.CE_Q5+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SB_Q5+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.AF_Q5+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.OD_Q5+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SO_Q5+'</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q5_AVG+'</td></tr>'
                                    +'<tr class="font-weight-bold"><td></td><td class="font-weight-bold">Total</td>'
                                            +'<td class="font-weight-bold">15</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.CE_Total+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SB_Total+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.AF_Total+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.OD_Total+'</td>'
                                            +'<td>'+responseFromAPI.feedBack_360.SO_Total+'</td>'
                                            +'<td class="border-left" style="background-color:#28a745b0">'+responseFromAPI.feedBack_360.Total_AVG+'</td></tr>'
                                    +'</tbody></table><p class="mt-2 message success"></p></form>'
                    +'</div>';
          }else{
              return '<div id="three60DegreeFeedBackStaus" class="col-md-8">'
                    +'<h2>360 degree feedback status & results</h2><form id="three60DegreeFormOverAllReport" class="mt-2"><table class="table table-hover border font-weight-light text-left">'
                                   +'<thead><tr style="background: aliceblue;">'
                                        +'<th class="text-left">S.No</th>'
                                        +'<th class="text-left">Question</th>'
                                        +'<th class="text-center">Max Total Average</th>'
                                        +'<th class="text-left border-left">Average</th></tr>'
                                    +'</thead><tbody>'
                                    +'<tr><td>1</td><td>Perception on Subject Knowledge	</td>'
                                            +'<td class="text-center">15</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q1_AVG+'</td></tr>'
                                    +'<tr><td>2</td><td>Perception on Temperament</td>'
                                            +'<td class="text-center">15</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q2_AVG+'</td></tr>'
                                    +'<tr><td>3</td><td>Business Acumen</td>'
                                            +'<td class="text-center">15</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q3_AVG+'</td></tr>'
                                    +'<tr><td>4</td><td>Alignment to Company Mission, Vision, Values &amp; Motto - "Simplicity in Engineering"</td>'
                                            +'<td class="text-center">15</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q4_AVG+'</td></tr>'
                                    +'<tr><td>5</td><td>Popularity in company</td>'
                                            +'<td class="text-center">15</td>'
                                            +'<td class="border-left font-weight-bold">'+responseFromAPI.feedBack_360.Q5_AVG+'</td></tr>'
                                    +'<tr class="font-weight-bold"><td></td><td class="font-weight-bold">Total</td>'
                                            +'<td class="font-weight-bold text-center">75</td>'
                                            +'<td class="border-left" style="background-color:#28a745b0">'+responseFromAPI.feedBack_360.Total_AVG+'</td></tr>'
                                    +'</tbody></table><p class="mt-2 message success"></p></form>'
                    +'</div>';
              }
          
      }
      
    getNextYearKRA(gradeLvl, JsonArrayObject){
        
        
        var nextKRA_UI=`<div class="mb-4  pt-5 w-75">
                            <h3>KRA-Target For Next Year Evaluation</h3>
                            <table class="table table-hover kraTable" style="box-shadow: 1px 1px 3px 1px #00000026;">
                                <thead>
                                        <tr class="bg-blue text-white">
                                            <th scope="col">KRA-Target For Next Year Evaluation</th>
                                            <th scope="col">Max Marks</th>
                                        </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row" class="w-100">${this.getKRAQuestion(JsonArrayObject.kra_allocation.nextYear_question1,"KRA 1 target not allotted.")}</td>
                                        <td>${JsonArrayObject.kra_allocation.ny_MaxMarks_Q1 ? JsonArrayObject.kra_allocation.ny_MaxMarks_Q1 : 0}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">${this.getKRAQuestion(JsonArrayObject.kra_allocation.nextYear_question2,"KRA 2 target not allotted.")}</td>
                                        <td>${JsonArrayObject.kra_allocation.ny_MaxMarks_Q2 ? JsonArrayObject.kra_allocation.ny_MaxMarks_Q2 : 0}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">${this.getKRAQuestion(JsonArrayObject.kra_allocation.nextYear_question3,"KRA 3 target not allotted.")}</td>
                                        <td>${JsonArrayObject.kra_allocation.ny_MaxMarks_Q3 ? JsonArrayObject.kra_allocation.ny_MaxMarks_Q3 :0}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">${this.getKRAQuestion(JsonArrayObject.kra_allocation.nextYear_question4,"KRA 4 target not allotted.")}</td>
                                        <td>${JsonArrayObject.kra_allocation.ny_MaxMarks_Q4 ? JsonArrayObject.kra_allocation.ny_MaxMarks_Q4 :0}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">${this.getKRAQuestion(JsonArrayObject.kra_allocation.nextYear_question5,"KRA 5 target not allotted.")}</td>
                                        <td>${JsonArrayObject.kra_allocation.ny_MaxMarks_Q5 ? JsonArrayObject.kra_allocation.ny_MaxMarks_Q5 :0}</td>
                                    </tr>
                                    ${(gradeLvl==GRADE_HIGH_LEVEL) ? `<tr>
                                                                            <td scope='row'>${this.getKRAQuestion(JsonArrayObject.kra_allocation.nextYear_question6,'KRA 6 target not allotted.')}</td>
                                                                            <td>${JsonArrayObject.kra_allocation.ny_MaxMarks_Q6 ? JsonArrayObject.kra_allocation.ny_MaxMarks_Q6 :'0'}</td>
                                                                    </tr>`:``
                                        
                                    }
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td>${this.getNextYearKRA_allotedTotalMaxMarks(JsonArrayObject.kra_allocation)}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>`;
        
        return nextKRA_UI;
    }
    
    getNextYearKRA_allotedTotalMaxMarks(jsonArray){
        let sum=0;
        for(let index=1; index<=6;index++){
            sum+=jsonArray["ny_MaxMarks_Q"+index];
            console.log(jsonArray);
        }
        
        return sum;
    }
    getfileName(filePath){
        var fileName=filePath.split("/");
        fileName=fileName[fileName.length-1];
        return fileName;
    }
    
    getKRAQuestion(KRA_Question,defaultMessage){
        if(KRA_Question==null || KRA_Question==''){
            KRA_Question=KRA_YEAR+defaultMessage;
        }
        return KRA_Question;
    }

}
