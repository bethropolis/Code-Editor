// settings and other options

function getTitle() {
    return projectNameTag.innerHTML;
}

function getOwner() {
    return ownerNameTag.innerHTML;
}

function setTitle(title) {
    projectNameTag.innerHTML = title;
}

function setOwner(owner) {
    ownerNameTag.innerHTML = owner;
}

function showFixedCont() {
    fixedCont.style.display = "flex";
    title_inp.value = getTitle();
    owner_inp.value = getOwner();
}

function setTitle_Owner() {
    if (title_inp.value.length > 0) {
        setTitle(title_inp.value);
    }
    if (owner_inp.value.length > 0) {
        setOwner(owner_inp.value);
    }
    closeFixedContBtn.click();
}

projectNameTag.addEventListener("click", () => {
    showFixedCont();
});

closeFixedContBtn.addEventListener("click", () => {
    fixedCont.style.display = "none";
});

fixed_okBtn.addEventListener("click", () => {
    setTitle_Owner();
});

settingsBtn_nav.addEventListener("click", () => {
    showFixedCont();
});

changeName_btn.addEventListener("click", () => {
    fixed_changeNameCont.style.display = 'flex';
    fixed_changeFontCont.style.display = "none";

    changeName_btn.classList.add("active");
    changeFont_btn.classList.remove("active");
});

changeFont_btn.addEventListener("click", () => {
    fixed_changeFontCont.style.display = "flex";
    fixed_changeNameCont.style.display = 'none';

    changeName_btn.classList.remove("active");
    changeFont_btn.classList.add("active");

    fixed_textColorInp.value = htmlCode.style.color;
    fixed_fontSizeInp.value = htmlCode.style.fontSize;
});

fixed_textColorChoose.addEventListener("blur", () => {
    fixed_textColorInp.value = fixed_textColorChoose.value;
})

fixed_applyBtn.addEventListener("click", () => {
    let fontFamily = fixed_selectFontFamily.options[fixed_selectFontFamily.selectedIndex].value;
    let color = fixed_textColorInp.value;
    let size = fixed_fontSizeInp.value;
    changeTextareaStyle(htmlCode, color, size, fontFamily);
    changeTextareaStyle(cssCode, color, size, fontFamily);
    changeTextareaStyle(jsCode, color, size, fontFamily);
    closeFixedContBtn.click();
})

fixed_selectFontFamily.addEventListener("blur", () => {
    fixed_selectFontFamily.style.fontFamily = fixed_selectFontFamily.options[fixed_selectFontFamily.selectedIndex].value;
})

function changeTextareaStyle(id, color, size, fontFamily) {
    id.style.color = color;
    id.style.fontSize = size;
    id.style.fontFamily = fontFamily;
}
