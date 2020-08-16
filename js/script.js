
//폼요소 실행 함수
//이름, 아이디, 비밀번호, 이메일, 14세 이상, 전체동의 확인
function submitFrm() {

    let uName = document.querySelector("#uName");
    let uName_Value = uName.value;
    let uID = document.querySelector("#uID");
    let uID_Value = uID.value;
    let uPW = document.querySelector("#uPW");
    let uPW_Value = uPW.value;
    let uPW_Re = document.querySelector("#uPW_Re");
    let uPW_Re_Value = uPW_Re.value;
    let uEmail = document.querySelector("#uEmail");
    let uEmail_Value = uEmail.value;
    let chk14 = document.querySelector("#check14").checked;
    let chkAll = document.querySelector("#all").checked;

    if (uName_Value == "") {
        alert("이름을 입력해주세요");
        uName.focus();
    } else if (uID_Value == "") {
        alert("아이디를 입력해주세요");
        uID.focus();
    } else if (uPW_Value == "") {
        alert("비밀번호를 입력해주세요");
        uPW.focus();
    } else if (uPW_Re_Value == "") {
        alert("비밀번호 확인을 입력해주세요");
        uPW_Re.focus();
    } else if (uPW_Value !== uPW_Re_Value) {
        alert("비밀번호가 일치하지 않습니다");
        uPW_Value = "";
        uPW.focus();
    } else if (uEmail_Value == "") {
        alert("이메일을 입력해주세요");
        uEmail.focus();
    } else if (chk14 == false) {
        alert("14세 이상만 가입 가능합니다");
        
    } else if (chkAll == false) {
        alert("전체 동의해주세요");
    } else {
        document.frm.submit();
    }
}

//년,월,일 생성 함수
    let today = new Date();
    let todayYear = today.getFullYear();
    let choose_Year = document.querySelector("#year");
    let choose_Month = document.querySelector("#month");
    let index = 0;
    for (let i = 1970; i <= todayYear; i++) {
        choose_Year.options[index] = new Option(i,i);
        index++;
    }
    index = 0;
    for (let j = 1; j <= 12; j++) {
        choose_Month.options[index] = new Option(j,j);   
        index++; 
    } 
//년, 월에 따른 일 option 
choose_lastday();
function choose_lastday() {
    let year = choose_Year.value;
    let month = choose_Month.value;
    let day = document.querySelector("#day");

    let choose_Day = new Date(new Date(year, month, 1) - 86400000).getDate();
    let dayIdx_Len = day.length;

    if (choose_Day > dayIdx_Len) {
        for (let k = (dayIdx_Len + 1); k <= choose_Day; k++) {
            day.options[k-1] = new Option(k,k);
        }
    } else if (choose_Day < dayIdx_Len) {
        for (let k = dayIdx_Len; k >= choose_Day; k--) {
            day.options[k] = null;
        }
    }
}

//전체선택, 전체해제
let chkAll = document.querySelector("#all");
chkAll.addEventListener("click", function(){
    let chk = document.querySelectorAll(".chk");
    for (let i = 0; i < chk.length; i++) {
        chk[i].checked = chkAll.checked;
    };
}, false);

let chk = document.querySelectorAll(".chk");
for (let i = 0; i<chk.length; i++) {
    chk[i].addEventListener("click", function(){
        let chkAll = document.querySelector("#all");
        for (var j = 0; j < chk.length; j++) {
            if (chk[j].checked === false) {
            chkAll.checked = false;
            return;
        };
    };
    chkAll.checked = true;
    }, false);
}