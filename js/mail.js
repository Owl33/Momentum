
const MODAL = document.querySelector('#modal');
const ModalOn = document.querySelector('.mail');
const ModalClose = document.querySelector('#modalclose i');
const MAIN = document.querySelector('.main');
const ModalForm = document.querySelector('#modal form');
const ModalSubmit = document.querySelector('#modal button');
var oEditors = [];

nhn.husky.EZCreator.createInIFrame({
    oAppRef: oEditors,
    elPlaceHolder: "ir1",
    sSkinURI: "plugin/se2/SmartEditor2Skin.html",
    fCreator: "createSEditor2",
});

ModalOn.addEventListener('click',function(){
    
    MODAL.style.display ='block';
    MAIN.style.opacity = '0.1';
    const se2 = document.querySelector('.class_smarteditor2');
    se2.contentDocument.location.reload(true);
});

ModalClose.addEventListener('click',function(){
    MODAL.style.display ='none';
    MAIN.style.opacity ='1';
});

ModalForm.addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.querySelector('.email').value;    
        const check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(check.test(email)){
            alert ( "전송 되었습니다.");
            ModalForm.reset();
            // document.querySelector('.class_smarteditor2').location.reload(true);
            MODAL.style.display ='none';
            MAIN.style.opacity ='1';
        }else{
            alert('메일 주소를 확인해주세요.')
        }
        // return false;
    });
    
    
    


