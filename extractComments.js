function loadingComments () {
    let elem = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gpro0wi8 oo9gr5id lrazzd5p")
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].innerText === 'Vezi mai mult') {
            elem[i].click();
        }
    }
}

function revealComments () {
    nameList = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn mdeji52x sq6gx45u j5wam9gi lrazzd5p oo9gr5id");
    commentList = document.getElementsByClassName("ecm0bbzt e5nlhep0 a8c37x1j");

    for (let i = 0; i < commentList.length; i++) {
        userName += nameList[i].innerText + ", ";
        comments += "Numele autorului: " + nameList[i].innerText + "\n Comentariul postarii: " + commentList[i].innerText + "\n";
    }
    userName = userName.slice(0, -2);
    console.log(comments);
    console.log(userName);

    userNameArray = userName.split(", ");
    console.log(userNameArray);

    const countDuplicate = {};
    userNameArray.forEach(name => {
        countDuplicate[name] = (countDuplicate[name] || 0) + 1;
    });
    // returneaza un array 
    const numberOfUsers = Object.getOwnPropertyNames(countDuplicate);
    console.log(numberOfUsers.length);

    alert("Sunt " + commentList.length + " de comentarii de la " + numberOfUsers.length + " persoane.");



}

const waitForLoadingComments = setTimeout(loadingComments, 5000);
const waitForDisplayComments = setTimeout(revealComments, 6000);

