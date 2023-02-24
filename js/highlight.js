let textareas = document.querySelectorAll(".editWindow textarea");
// Add event listeners to all textareas
textareas.forEach(textarea => {
    let result_element = textarea.closest(".editWindow").querySelector(".highlighting-content");

    textarea.addEventListener("input", function () {
        update(textarea.value, result_element);
    });
    textarea.addEventListener("scroll", function () {
        sync_scroll(textarea, result_element.closest(".highlighting"));
    });
    textarea.addEventListener("keydown", function (event) {
        check_tab(textarea, event, result_element);
    });
});
function update(text, element) {
    // Handle final newlines (see article)
    if (text[text.length - 1] == "\n") {
        text += " ";
    }
    // Update code
    element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
    // Syntax Highlight
    Prism.highlightElement(element);
}

function sync_scroll(textarea_element, result_element) {
    /* Scroll result to scroll coords of event - sync with textarea */
    // Get and set x and y
    result_element.scrollTop = textarea_element.scrollTop;
    result_element.scrollLeft = textarea_element.scrollLeft;
}

function check_tab(element, event, result_element) {
    let code = element.value;
    if (event.key == "Tab") {
        /* Tab key pressed */
        event.preventDefault(); // stop normal
        let before_tab = code.slice(0, element.selectionStart); // text before tab
        let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
        let cursor_pos = element.selectionStart + 1; // where cursor moves after tab - moving forward by 1 char to after tab
        element.value = before_tab + "\t" + after_tab; // add tab char
        // move cursor
        element.selectionStart = cursor_pos;
        element.selectionEnd = cursor_pos;
        update(element.value, result_element); // Update text to include indent
    }
}