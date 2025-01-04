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



// ......header2.........//
var account_infoI = document.querySelector(".account-infoI");


function account_infoToggleI() {
    account_infoI.classList.toggle("account-info-heightI");
    
};

// --------darkmood2 header-----------//
var darkBtn = document.getElementById("dark-btnII");

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-onII");
    document.body.classList.toggle("dark-mood")
}


