// --------toggle-menu-----------//
var account_info = document.querySelector(".account-info");


function account_infoToggle() {
    account_info.classList.toggle("account-info-height");
    
};


// --------darkmood-----------//
var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mood")
}

