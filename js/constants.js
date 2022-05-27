const baseURL="https://principleacs.net/Appraisal_Form_2022_API/public/";
const MANAGER_ASSESSMENT='manager';
const SELF_ASSESSMENT='self';
const MARKS_TITLE_SELF="Self-marks: ";
const MARKS_TITLE_MANAGER="Manager-marks: ";

const FORM_SUBMITED=1;
const FORM_NOT_AT_SUBMITED=0;

const KRA_NOT_ASSIGNED=0;

const GRADE_L1_L2_MAXSCORE="200";
const GRADE_L3_L4_L5_MAXSCORE="335";
const GRADE_L1_L2_KRA_MAXSCORE=35;
const GRADE_L3_L4_L5_KRA_MAXSCORE=40;
const GRADE_LEVEL1="L1";
const GRADE_LEVEL2="L2";
const GRADE_LEVEL3="L3";
const GRADE_LEVEL4="L4";
const GRADE_LEVEL5="L5";
const EMAIL_SENT=101;
const EMAIL_NOT_SENT=102;

const KRA_MESSAGE="target not allotted.";
// const KRA_YEAR=new Date().getFullYear();//current year
const KRA_YEAR="2021";//current year

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
