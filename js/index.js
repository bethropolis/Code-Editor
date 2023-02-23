// sizing(responsive design) and getting elements from dom

const fixedCont = document.getElementById("fixedCont");
const closeFixedContBtn = document.getElementById("closeFixedContBtn");
const title_inp = document.getElementById("title_inp");
const owner_inp = document.getElementById("owner_inp");
const fixed_okBtn = document.getElementById("fixed_okBtn");
const changeName_btn = document.getElementById("changeName_btn");
const changeFont_btn = document.getElementById("changeFont_btn");
const fixed_rightCont = document.getElementById("fixed_rightCont");
const fixed_changeNameCont = document.getElementById("fixed_changeNameCont");
const fixed_changeFontCont = document.getElementById("fixed_changeFontCont");
const fixed_textColorChoose = document.getElementById("fixed_textColorChoose");
const fixed_textColorInp = document.getElementById("fixed_textColorInp");
const fixed_fontSizeInp = document.getElementById("fixed_fontSizeInp");
const fixed_selectFontFamily = document.getElementById("fixed_selectFontFamily");
const fixed_applyBtn = document.getElementById("fixed_applyBtn");

const projectNameTag = document.getElementById("projectNameTag");
const ownerNameTag = document.getElementById("ownerNameTag");
const settingsBtn_nav = document.getElementById("settingsBtn_nav");

const htmlContainer = document.getElementById("htmlContainer");
const htmlInnerContainer = document.getElementById("htmlInnerContainer");
const htmlNameContainer = document.getElementById("htmlNameContainer");
const htmlImg = document.getElementById("htmlImg");
const htmlCode = document.getElementById("htmlCode");
const htmlName = document.getElementById("htmlName");
const htmlOptionCont = document.getElementById("htmlOptionCont");

const cssContainer = document.getElementById("cssContainer");
const cssInnerContainer = document.getElementById("cssInnerContainer");
const cssNameContainer = document.getElementById("cssNameContainer");
const cssImg = document.getElementById("cssImg");
const cssCode = document.getElementById("cssCode");
const cssName = document.getElementById("cssName");
const cssOptionCont = document.getElementById("cssOptionCont");

const jsContainer = document.getElementById("jsContainer");
const jsInnerContainer = document.getElementById("jsInnerContainer");
const jsNameContainer = document.getElementById("jsNameContainer");
const jsImg = document.getElementById("jsImg");
const jsCode = document.getElementById("jsCode");
const jsName = document.getElementById("jsName");
const jsOptionCont = document.getElementById("jsOptionCont");

const editorDiv = document.getElementById("editorDiv");
const editor = document.getElementById("editor");

const toggleLayoutBtn = document.getElementById("toggleLayoutBtn");
const toggleLayout = document.getElementById("toggleLayout");
const layoutOptionsContainer = document.getElementById("layoutOptionsContainer");
const editor_left = document.getElementById("editor_left");
const editor_top = document.getElementById("editor_top");
const editor_right = document.getElementById("editor_right");

const showOutPutFrame = document.getElementById("showOutPutFrame");

function updateSize() {
    let offset = undefined;
    let editorWidth = undefined;
    let editorHeight = undefined;
    let editorwidthOffset = undefined;
    let editorHeightOffset = undefined;
    let codeWidth = undefined;
    let codeHeight = undefined;
    let frameWidth = undefined;
    let frameHeight = undefined;

    if ((editorDiv.style.flexDirection == 'row') || (editorDiv.style.flexDirection == 'row-reverse')) {
        offset = 27;

        editorWidth = window.innerWidth / 2;
        editorHeight = (window.innerHeight / 3.51);
        editorwidthOffset = 3;
        editorHeightOffset = 25;

        codeWidth = editorWidth - editorwidthOffset;
        codeHeight = editorHeight - editorHeightOffset;

        frameWidth = (window.innerWidth - editorWidth - (0.5 * offset));
        frameHeight = (window.innerHeight - (2.1209 * offset));
    }
    else {
        offset = 50;

        editorWidth = window.innerWidth / 3.13;
        editorHeight = (window.innerHeight / 2 - offset);
        editorwidthOffset = 3;
        editorHeightOffset = 25;

        codeWidth = editorWidth - editorwidthOffset;
        codeHeight = editorHeight - editorHeightOffset;

        frameWidth = window.innerWidth;
        frameHeight = (window.innerHeight - editorHeight - (2 * offset));
    }

    htmlContainer.style.width = `${editorWidth}px`;
    cssContainer.style.width = `${editorWidth}px`;
    jsContainer.style.width = `${editorWidth}px`;
    htmlContainer.style.height = `${editorHeight}px`;
    cssContainer.style.height = `${editorHeight}px`;
    jsContainer.style.height = `${editorHeight}px`;

    htmlCode.style.width = `${codeWidth}px`;
    htmlCode.style.height = `${codeHeight}px`;
    cssCode.style.width = `${codeWidth}px`;
    cssCode.style.height = `${codeHeight}px`;
    jsCode.style.width = `${codeWidth}px`;
    jsCode.style.height = `${codeHeight}px`;

    showOutPutFrame.style.width = `${frameWidth}px`;
    showOutPutFrame.style.height = `${frameHeight}px`;
}
updateSize();
window.addEventListener("resize", updateSize);

htmlNameContainer.addEventListener("dblclick", () => {
    revertChanges();

    if ((editorDiv.style.flexDirection == 'column')) {
        let offset = 9;
        let width = (window.innerWidth - (5.4 * offset));

        htmlContainer.style.width = `${width}px`;

        cssContainer.style.width = `${0}px`;
        jsContainer.style.width = `${0}px`;
        cssContainer.style.borderRight = `none`;
        jsContainer.style.borderRight = `none`;

        cssInnerContainer.style.borderBottom = `none`;
        jsInnerContainer.style.borderBottom = `none`;

        cssNameContainer.style.transform = `rotateZ(90deg)`;
        jsNameContainer.style.transform = `rotateZ(90deg)`;

        cssImg.style.width = `10px`;
        jsImg.style.width = `10px`;

        cssName.style.fontSize = `0.6em`;
        jsName.style.fontSize = `0.6em`;

        cssOptionCont.style.display = `none`;
        jsOptionCont.style.display = `none`;

        htmlCode.style.width = `${(width - offset)}px`;
        cssCode.style.display = `none`;
        jsCode.style.display = `none`;

        htmlNameContainer.title = "click to get previous size";
    }
})

cssNameContainer.addEventListener("dblclick", () => {
    revertChanges();

    if ((editorDiv.style.flexDirection == 'column')) {
        let offset = 9;
        let width = (window.innerWidth - (5.6 * offset));

        cssContainer.style.width = `${width}px`;

        htmlContainer.style.marginLeft = `14px`;

        htmlContainer.style.width = `${0}px`;
        jsContainer.style.width = `${0}px`;
        htmlContainer.style.borderRight = `none`;
        jsContainer.style.borderRight = `none`;

        htmlInnerContainer.style.borderBottom = `none`;
        jsInnerContainer.style.borderBottom = `none`;

        htmlNameContainer.style.transform = `rotateZ(90deg)`;
        jsNameContainer.style.transform = `rotateZ(90deg)`;

        htmlImg.style.width = `10px`;
        jsImg.style.width = `10px`;

        htmlName.style.fontSize = `0.6em`;
        jsName.style.fontSize = `0.6em`;

        htmlOptionCont.style.display = `none`;
        jsOptionCont.style.display = `none`;

        htmlCode.style.display = `none`;
        cssCode.style.width = `${(width - offset)}px`;
        jsCode.style.display = `none`;

        cssNameContainer.title = "click to get previous size";
    }
})

jsNameContainer.addEventListener("dblclick", () => {
    revertChanges();

    if ((editorDiv.style.flexDirection == 'column')) {
        let offset = 9;
        let width = (window.innerWidth - (5.6 * offset));

        jsContainer.style.width = `${width}px`;

        htmlContainer.style.marginLeft = `14px`;

        htmlContainer.style.width = `${0}px`;
        cssContainer.style.width = `${0}px`;
        htmlContainer.style.borderRight = `none`;
        cssContainer.style.borderRight = `none`;

        htmlInnerContainer.style.borderBottom = `none`;
        cssInnerContainer.style.borderBottom = `none`;

        htmlNameContainer.style.transform = `rotateZ(90deg)`;
        cssNameContainer.style.transform = `rotateZ(90deg)`;

        htmlImg.style.width = `10px`;
        cssImg.style.width = `10px`;

        htmlName.style.fontSize = `0.6em`;
        cssName.style.fontSize = `0.6em`;

        htmlOptionCont.style.display = `none`;
        cssOptionCont.style.display = `none`;

        htmlCode.style.display = `none`;
        cssCode.style.display = `none`;
        jsCode.style.width = `${(width - offset)}px`;

        jsNameContainer.title = "click to get previous size";
    }
})

htmlNameContainer.addEventListener("click", () => {
    revertChanges();
})

cssNameContainer.addEventListener("click", () => {
    revertChanges();
})

jsNameContainer.addEventListener("click", () => {
    revertChanges();
})

function revertChanges() {
    updateSize();

    htmlContainer.style.marginLeft = `9px`;

    htmlContainer.style.borderRight = `1px solid #9e9e9e`;
    cssContainer.style.borderRight = `1px solid #9e9e9e`;
    jsContainer.style.borderRight = `1px solid #9e9e9e`;

    htmlInnerContainer.style.borderBottom = `1px solid #9e9e9e`;
    cssInnerContainer.style.borderBottom = `1px solid #9e9e9e`;
    jsInnerContainer.style.borderBottom = `1px solid #9e9e9e`;

    htmlNameContainer.style.transform = `rotateZ(0deg)`;
    cssNameContainer.style.transform = `rotateZ(0deg)`;
    jsNameContainer.style.transform = `rotateZ(0deg)`;

    htmlImg.style.width = `15px`;
    cssImg.style.width = `15px`;
    jsImg.style.width = `15px`;

    htmlName.style.fontSize = `0.7em`;
    cssName.style.fontSize = `0.7em`;
    jsName.style.fontSize = `0.7em`;

    htmlOptionCont.style.display = `flex`;
    cssOptionCont.style.display = `flex`;
    jsOptionCont.style.display = `flex`;

    htmlCode.style.display = `block`;
    cssCode.style.display = `block`;
    jsCode.style.display = `block`;
}

function setTitles(text) {
    htmlNameContainer.title = `${text}`;
    cssNameContainer.title = `${text}`;
    jsNameContainer.title = `${text}`;
}

toggleLayoutBtn.addEventListener('click', () => {
    if (layoutOptionsContainer.style.display === `none`) {
        layoutOptionsContainer.style.display = `flex`;
    }
    else {
        layoutOptionsContainer.style.display = `none`;
    }
})

editor_left.addEventListener('click', () => {
    changeLayout('row', 'column');
    toggleLayout.className = `fa-solid fa-list hover rotate-0deg`;
    htmlContainer.style.borderBottom = `1px solid #9e9e9e`;
    cssContainer.style.borderBottom = `1px solid #9e9e9e`;
    setTitles("");
})

editor_top.addEventListener('click', () => {
    changeLayout('column', 'row');
    toggleLayout.className = `fa-solid fa-list hover rotate-90deg`;
    htmlContainer.style.borderBottom = `none`;
    cssContainer.style.borderBottom = `none`;
    setTitles("double click to expand");
})

editor_right.addEventListener('click', () => {
    changeLayout('row-reverse', 'column');
    toggleLayout.className = `fa-solid fa-list hover rotate-180deg`;
    htmlContainer.style.borderBottom = `1px solid #9e9e9e`;
    cssContainer.style.borderBottom = `1px solid #9e9e9e`;
    setTitles("");
})

function changeLayout(editorDiv_flexDirection, editor_flexDirection) {
    editorDiv.style.flexDirection = editorDiv_flexDirection;
    editor.style.flexDirection = editor_flexDirection;
    revertChanges();
}
