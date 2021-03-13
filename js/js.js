function $$(elm) {
    if (elm.substr(0, 1) == ".") {
        return document.getElementsByClassName(elm.split(".")[1]);
    } else if (elm.substr(0, 1) == "#") {
        return document.getElementById(elm.split("#")[1]);
    } else {
        return "undif class/id";
    }

}

let itemMenu = document.querySelectorAll(".navMobile");
itemMenu.forEach(item => {
    item.addEventListener('click', (ev) => {
        ev.target.parentElement.classList.toggle('is-active');
        if (ev.target.parentElement.children[1].style.height == "0px") {
            ev.target.parentElement.children[1].style.height = "150px";
            if (ev.target.parentElement.children[1].className.indexOf('lvl-t') == "0") {
                ev.target.parentElement.parentElement.style.height = ev.target.parentElement.children[1].scrollHeight + ev.target.parentElement.parentElement.scrollHeight + "px";
            }
        } else {
            ev.target.parentElement.parentElement.style.height = ev.target.parentElement.parentElement.scrollHeight - ev.target.parentElement.children[1].scrollHeight + "px";
            ev.target.parentElement.children[1].style.height = "0px";
        }
    })
});
if ($$('.settingFilterMobile').length > 0) {
    $$('.settingFilterMobile')[0].addEventListener('click', (ev) => {
        $$('.sf-content')[0].classList.add('is-active');
        document.body.style.overflow = "hidden";
    });

    $$('.close-sf-content')[0].addEventListener('click', (ev) => {
        $$('.sf-content')[0].classList.remove('is-active');
        document.body.style.overflow = "unset";
    });
}

if ($$('.sortListMobile').length > 0) {
    $$('.sortListMobile')[0].addEventListener('click', (ev) => {
        $$('.overlayS')[0].style.display = "block";
        document.body.style.overflow = "hidden";
    });
}
document.addEventListener('click', (ev) => {
    let clickOverlyS = ev.target.className.indexOf("overlayS");
    let clickCloseOverlyS = ev.target.className.indexOf("close-overlayS");
    let contentUserInfo = document.querySelectorAll(".contentUserInfo");
    if (clickCloseOverlyS >= "0" || clickOverlyS >= "0") {
        $$('.overlayS')[0].style.display = "none";
        document.body.style.overflow = "unset";
        contentUserInfo.forEach(item => {
            item.style.display = "none"
        });
    }

})
openSliderMenu(".login")
openSliderMenu(".cart")
openSliderMenu(".support")
openSliderMenu(".menuMobile")

function openSliderMenu(elm) {
    $$(elm)[0].addEventListener('click', function (ev) {
        // console.log(ev.target.className,ev.target)
        if ((ev.target).className != "slideRightLogin") {
            ((ev.target).parentElement).classList.toggle("show")
        }

    })
}

let closeBtn = document.querySelectorAll(".closeSlide");
closeBtn.forEach(item => {
    item.addEventListener('click', function (ev) {
        ((ev.target).parentElement).style.right = "0px";
        ((ev.target).parentElement.parentElement).classList.remove("show")
    })
})
document.addEventListener("scroll", function (ev) {
    console.log($$(".header ")[0].offsetTop)
    if (window.pageYOffset > $$(".header ")[0].offsetHeight) {
        $$(".header")[0].classList.add("sticky");
        $$("#logo").style.height = "0px";
    } else {
        $$(".header ")[0].classList.remove("sticky");
        document.getElementById("logo").style.height = "40px";
    }
})

closeSearch(".search");
closeSearch(".closeSearchBox");

function closeSearch(elm) {
    $$(elm)[0].addEventListener('click', () => {
        $$('.bxSearch')[0].classList.toggle("active");
    })
}

let closeItemCart = document.querySelectorAll(".closeItemCart");
closeItemCart.forEach(item => {
    item.addEventListener('click', (ev) => {
        ev.target.parentElement.remove();
    })
});

let itemMenuAcc = document.querySelectorAll(".itemSupportTitle");
itemMenuAcc.forEach(item => {
    item.addEventListener('click', (ev) => {
        ev.target.classList.toggle("active");
        if (ev.target.nextElementSibling.style.height == "" || ev.target.nextElementSibling.style.height == "0px") {
            ev.target.nextElementSibling.style.height = ev.target.nextElementSibling.scrollHeight + "px"
        } else {
            ev.target.nextElementSibling.style.height = 0 + "px";
        }

    })
});
let liSelectSize = document.querySelectorAll(".selectSize >li");
liSelectSize.forEach(item => {
    item.addEventListener('click', (ev) => {
        removeClassSelectLi(liSelectSize);
        ev.target.classList.toggle("select");
    })
})

function removeClassSelectLi(liSelectSize) {
    liSelectSize.forEach(item => {
        item.classList.remove("select");
    })
}

if ($$('.shareProduct').length > 0) {
    $$('.shareProduct')[0].addEventListener('click', (ev) => {
        $$('.overlay')[0].style.display = "block";
        $$('.modalShare')[0].style.display = "block";
    });
}

if ($$(".closeShareModal").length > 0) {
    let closeShareModal = (elm) => {
        $$(elm)[0].addEventListener('click', (ev) => {
            ev.target.parentElement.style.display = "none";
            ev.target.parentElement.parentElement.style.display = "none";
        });
    }
    closeShareModal(".closeShareModal");
}


let dropdownFilter = document.querySelectorAll(".dropdownFilter");
let range = document.getElementsByClassName("rangeSlider")[0];


dropdownFilter.forEach(item => {
    item.addEventListener('click', (ev) => {
        ev.target.classList.toggle("active");
        ev.target.nextElementSibling.classList.toggle("show");
    });
});
let delItemFavObs = document.querySelectorAll(".delItemFavObs");
delItemFavObs.forEach(item => {
    item.addEventListener("click", (ev) => {
        ev.target.parentElement.remove();
    })
})
let linkReplayComment = document.querySelectorAll(".linkReplayComment");
linkReplayComment.forEach(item => {
    item.addEventListener("click", (ev) => {
        $$('.overlayS')[0].style.display = "block";
        document.body.style.position = "relative";
        document.body.style.overflow = "hidden";
    })
})
let editBox = document.querySelectorAll(".editBox");
let contentUserInfo = document.querySelectorAll(".contentUserInfo");
editBox.forEach(item => {
    item.addEventListener("click", (ev) => {
        let nameModal = "person-info_" + ev.target.dataset.modal;
        contentUserInfo.forEach(item => {
            if (item.dataset.userinfogrid == nameModal) {
                item.style.display = "block";
            }
        });
        $$('.overlayS')[0].style.display = "block";
        document.body.style.position = "relative";
        document.body.style.overflow = "hidden";
    })
})

let closeContentBox = document.querySelectorAll(".closeContentBox");
closeContentBox.forEach(item => {
    item.addEventListener('click', evt => {
        evt.target.parentElement.parentElement.style.display = "none";
        document.body.style.overflow = "unset";
        $$('.overlayS')[0].style.display = "none";
    })
})




