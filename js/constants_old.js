const baseURL="http://principleacs.net/Appraisal_Form_API/public/";
const MANAGER_ASSESSMENT='manager';
const SELF_ASSESSMENT='self';
const FORM_SUBMITED=1;
const FORM_NOT_AT_SUBMITED=0;
const GRADE_L1_L2_MAXSCORE="200";
const GRADE_L3_L4_L5_MAXSCORE="335";
const GRADE_L1_L2_KRA_MAXSCORE=35;
const GRADE_L3_L4_L5_KRA_MAXSCORE=40;
const GRADE_LEVEL1="L1";
const GRADE_LEVEL2="L2";
const GRADE_LEVEL3="L3";
const GRADE_LEVEL4="L4";
const GRADE_LEVEL5="L5";

const SelectedValuesArrayMap = new Map();
    SelectedValuesArrayMap.set("Q1", null);
    SelectedValuesArrayMap.set("Q2", null);
    SelectedValuesArrayMap.set("Q3", null);
    SelectedValuesArrayMap.set("Q4", null);
    SelectedValuesArrayMap.set("Q5", null);
    SelectedValuesArrayMap.set("Q6", null);
    SelectedValuesArrayMap.set("Q7", null);
    SelectedValuesArrayMap.set("Q8", null);
    SelectedValuesArrayMap.set("Q9", null);