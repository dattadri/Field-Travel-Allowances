class Three60DegreeRelatedUi{

  /*  tableTableTagOpen(){
       return '<table class="table table-hover">';
    }
     tableTableTagClose(){
        return '</table>';
    } tableHeadTagOpen(){
        return '<thead></tr>';
    }
      tableHeadTagClose(){
        return '</tr></thead>';
    }
     tableBodyTagOpen(){
        return '<tbody></tr>';
    }
      tableBodyTagClose(){
        return '</tr></tbody>';
    }
      tableTrTagClose(){
        return '</tr>';
    }
    
    tableCommonThTags(){
        var relatedUi='<th>S.No</th>'+
                      '<th>Question</th>'+
                      '<th>Max/reviewer</th>';
        return relatedUi;
        
    }
    
      tableCustomerExternalTh(){
        return '<th>Customer-External</th>';
    }
      tableSuperBossTh(){
        return '<th>Super-Boss</th>';
    }
      tableOtherDeptPeerTh(){
        return '<th>Other dept-Peer</th>';
    }
      tableAdminFinanceTh(){
        return '<th>Admin/Finance</th>';
    }
      tablesubOrdinateTh(){
        return '<th>Sub-ordinate</th>';
    }*/
    tableNote(){
    var relatedUi='<p class="text-danger text-left font-weight-bold  mb-2">Instructions:</p>'+
                    '<ol class="pl-2 ml-1"><li class="text-left text-dark font-weight-light" style="color:#000">  Rate questions based on below table.</li>'+
                    '<li class="text-left text-dark font-weight-light" style="color:#000"> Check once again before submitting, Once your feedback submitted can&#39;t be changed.</li>'+
                        '</ol>';
        return relatedUi;
    }
tableRatingTable(){
    var relatedUi =this.tableNote()+'<table class="table w-25 table-hover">'+
                        '<thead><tr style="background: aliceblue;"><th class="text-left">Rating</th><th class="text-left">Score</th></tr></thead>'+
                        '<tbody><tr>'+
                                '<td>Exceeds Requirement (High) </td>'+
                                '<td>3</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>Meets Requirement (Medium)</td>'+
                                '<td>2</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>Needs improvement (Low)</td>'+
                                '<td>1</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>';
            return relatedUi;
}

tableUi(UserTitle,selectedValue){
    var relatedUi=this.tableRatingTable()+'<form id="three60DegreeForm" class="mt-5" data-id='+UserTitle+'>'+
                    '<table class="table table-hover">'+
                            '<thead>'+
                                '<tr style="background: aliceblue;">'+
                                    '<th class="text-left">S.No</th>'+
                                    '<th class="text-left">Question</th>'+
                                    '<th class="text-left">Max/reviewer</th>'+
                                    '<th class="text-left">'+this.getColumTitle(UserTitle)+'</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody>'+
                                '<tr>'+
                                    '<td>1</td>'+
                                    '<td>Perception on Subject Knowledge	</td>'+
                                    '<td>3</td>'+
                                    '<td><select class="selectedTagValues" name="Q1" required>'+this.optionTagForQuestion1(3,selectedValue.Q1)+'</select></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>2</td>'+
                                    '<td>Perception on Temperament</td>'+
                                    '<td>3</td>'+
                                    '<td><select class="selectedTagValues" name="Q2" required>'+this.optionTagForQuestion2(3,selectedValue.Q2)+'</select></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>3</td>'+
                                    '<td>Business Accumen</td>'+
                                    '<td>3</td>'+
                                    '<td><select class="selectedTagValues" name="Q3" required>'+this.optionTagForQuestion3(3,selectedValue.Q3)+'</select></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>4</td>'+
                                    '<td>Alignment to Company Misson, Vision, Values &amp; Motto - "Simplicity in Engineering"</td>'+
                                    '<td>3</td>'+
                                    '<td><select class="selectedTagValues" name="Q4" required>'+this.optionTagForQuestion4(3,selectedValue.Q4)+'</select></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td>5</td>'+
                                    '<td>Popularity in company</td>'+
                                    '<td>3</td>'+
                                    '<td><select class="selectedTagValues" name="Q5" required>'+this.optionTagForQuestion5(3,selectedValue.Q5)+'</select></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td></td>'+
                                    '<td class="font-weight-bold">Total</td>'+
                                    '<td class="font-weight-bold">15</td>'+
                                    '<td id="totalRating" class="font-weight-bold">'+this.getTotalReviews(selectedValue)+'</td>'+
                                '</tr>'+
                            '</tbody>'+
                       '</table>'+
                        '<button type="submit" class="btn btn-primary submit"><span class="span">Submit</span><i class="fa fa-spinner d-none fa-spin" aria-hidden="true"></i></button>'+
                        '<p class="mt-2 message success"></p>'+
                    '</form>';
    
    return relatedUi;
    
    
}
    getColumTitle(UserTitle){
        var columnValue='';
        switch(UserTitle){
                case 'Customer':
                columnValue="Customer - External";
                break;                
                case 'Finance':
                 columnValue="Admin / Finance";
                break;
                case 'SuperBoss':
                 columnValue="Super boss";
                break;                
                case 'SubOrdinate':
                 columnValue="Sub Ordinate";
                break;
                case 'OtherDept':
                 columnValue="Other dept-Peer";
                
                
        }
        return columnValue;
        
    }
    getTotalReviews(selectedValues){
        var sum=0;
        if(selectedValues.submitStatus==SUBMITTED){
           sum=selectedValues.Q1+ selectedValues.Q2+ selectedValues.Q3+ selectedValues.Q4+ selectedValues.Q5;
        }
        return sum;
        
    }
    optionTagFunc(maxMarks,selectedValue){
       
        var optionTags='<option selected="true" value="" disabled>None</option>';
        for(var loopCount=1;loopCount<=maxMarks;loopCount++){
           // console.log(loopCount);
            if(loopCount==selectedValue){
                optionTags += '<option selected value='+loopCount+'>'+loopCount+'</option>';
            }else{
                optionTags +='<option value='+loopCount+'>'+loopCount+'</option>';
            }
        }
       // console.log(optionTags);
        return optionTags;
    }
    
    optionTagForQuestion2(maxMarks,selectedValue){
       
        var optionTags='<option selected="true" value="" disabled>None</option>';
        for(var loopCount=1;loopCount<=maxMarks;loopCount++){
           // console.log(loopCount);
            if(loopCount==selectedValue){
                optionTags += '<option selected value='+loopCount+'>'+this.selectEmojiForQuestion2(loopCount)+'</option>';
            }else{
                optionTags +='<option value='+loopCount+'>'+this.selectEmojiForQuestion2(loopCount)+'</option>';
            }
        }
       // console.log(optionTags);
        return optionTags;
    }
    
    selectEmojiForQuestion2(ratingLevel){
        var emoji;
        switch(ratingLevel){
            case 1: emoji="😡 Aggressive 1";
            break;
            
            case 2: emoji="😠 Moderate 2";
            
        break;
            case 3: emoji="🙂 Cool 3";
            break;
                
        }
        return emoji;
    }
    
    optionTagForQuestion1(maxMarks,selectedValue){
       
        var optionTags='<option selected="true" value="" disabled>None</option>';
        for(var loopCount=1;loopCount<=maxMarks;loopCount++){
           // console.log(loopCount);
            if(loopCount==selectedValue){
                optionTags += '<option selected value='+loopCount+'>'+this.selectEmojiForQuestion1(loopCount)+'</option>';
            }else{
                optionTags +='<option value='+loopCount+'>'+this.selectEmojiForQuestion1(loopCount)+'</option>';
            }
        }
       // console.log(optionTags);
        return optionTags;
    }
    
    selectEmojiForQuestion1(ratingLevel){
        var emoji;
        switch(ratingLevel){
            case 3: emoji="🕮🕮🕮 High 3";
            break;
            case 2: emoji="🕮🕮   Medium 2";
            break;
            case 1: emoji="🕮     Low 1";
            break;
        }
        return emoji;
    }
    
     optionTagForQuestion5(maxMarks,selectedValue){
       
        var optionTags='<option selected="true" value="" disabled>None</option>';
        for(var loopCount=1;loopCount<=maxMarks;loopCount++){
           // console.log(loopCount);
            if(loopCount==selectedValue){
                optionTags += '<option selected value='+loopCount+'>'+this.selectEmojiForQuestion5(loopCount)+'</option>';
            }else{
                optionTags +='<option value='+loopCount+'>'+this.selectEmojiForQuestion5(loopCount)+'</option>';
            }
        }
       // console.log(optionTags);
        return optionTags;
    }
    
    selectEmojiForQuestion5(ratingLevel){
        var emoji;
        switch(ratingLevel){
            case 3: emoji="🙋🏼‍♂️🙋🏼‍♂️🙋🏼‍♂️ High 3";
            break;
            case 2: emoji="🙋🏼‍♂️🙋🏼‍♂️   Medium 2";
            break;
            case 1: emoji="🙋🏼‍♂️     Low 1";
            break;
        }
        return emoji;
    }
    
    optionTagForQuestion3(maxMarks,selectedValue){
       
        var optionTags='<option selected="true" value="" disabled>None</option>';
        for(var loopCount=1;loopCount<=maxMarks;loopCount++){
           // console.log(loopCount);
            if(loopCount==selectedValue){
                optionTags += '<option selected value='+loopCount+'>'+this.selectEmojiForQuestion3(loopCount)+'</option>';
            }else{
                optionTags +='<option value='+loopCount+'>'+this.selectEmojiForQuestion3(loopCount)+'</option>';
            }
        }
       // console.log(optionTags);
        return optionTags;
    }
    
    selectEmojiForQuestion3(ratingLevel){
        var emoji;
        switch(ratingLevel){
            case 3: emoji="🧑💼 High 3";
            break;
            case 2: emoji="🧑💼 Medium 2";
            break;
            case 1: emoji="🧑💼 Low 1";
            break;
        }
        return emoji;
    }
    
    optionTagForQuestion4(maxMarks,selectedValue){
       
        var optionTags='<option selected="true" value="" disabled>None</option>';
        for(var loopCount=1;loopCount<=maxMarks;loopCount++){
           // console.log(loopCount);
            if(loopCount==selectedValue){
                optionTags += '<option selected value='+loopCount+'>'+this.selectEmojiForQuestion4(loopCount)+'</option>';
            }else{
                optionTags +='<option value='+loopCount+'>'+this.selectEmojiForQuestion4(loopCount)+'</option>';
            }
        }
       // console.log(optionTags);
        return optionTags;
    }
    
    selectEmojiForQuestion4(ratingLevel){
        var emoji;
        switch(ratingLevel){
            case 3: emoji="👍👍 High 3";
            break;
            case 2: emoji="👍   Medium 2";
            break;
            case 1: emoji="👎   Low 1";
            break;
        }
        return emoji;
    }
     
}