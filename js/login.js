const loginForm = document.querySelector('#loginform');
const loginInput = document.querySelector('#loginform input');
const USERNAME_KEY = "username";
const logOut = document.querySelector('#logout');

const printUserName = (loginName) =>{
    const mainhidden = document.querySelector('.main');
    const loginhidden = document.querySelector('.login');
    const mainWelcome = document.querySelector('.main span');
    mainhidden.classList.remove('hidden');
    loginhidden.classList.add('hidden');
    mainWelcome.innerText = `Hello, ${loginName}`;
    
}

const loadStorageName = () =>{
    return localStorage.getItem(USERNAME_KEY);
}
const saveLoginName = (loginName) =>{
    localStorage.setItem(USERNAME_KEY, loginName);
}



const getname = loadStorageName();
if(getname){
    printUserName(getname);
}else{
    loginForm.addEventListener('submit', function(){
        event.preventDefault();
        
        const loginName = loginInput.value;
        saveLoginName(loginName);
        printUserName(loginName);
    });
}

logOut.addEventListener('click', function(){

    const logoutselect = confirm('정말 로그아웃 하시겠습니까?');

    if(logoutselect === true){
        localStorage.clear();
        location.reload();
    }
});
