function solve() {
    return function(selector) {
        var i,
            parentElem,
            childElem,
            clickedBtn,
            next,
            currCont,
            len;

        if (typeof selector !== 'string' && !(selector instanceof HTMLElement)) {
            throw new Error();
        }

        parentElem = document.getElementById(selector);
        if (!parentElem) {
            throw new Error();
        }

        childElem = parentElem.childNodes;
        len = childElem.length;
        for (i = 0; i < len; i += 1) {
            if (childElem[i].className === 'button')
                childElem[i].innerHTML = 'hide';
        }
        parentElem.addEventListener('click', function(ev) {
            clickedBtn = ev.target;
            if (clickedBtn.className !== 'button') {
                return;
            }
            next = clickedBtn.nextElementSibling;
            if (next.className === 'content') {
                currCont = next;
            }
            while (next) {
                if (next.className === 'button') {
                    if (currCont.style.display === 'none') {
                        currCont.style.display = '';
                        clickedBtn.innerHTML = 'hide';
                    } else {
                        currCont.style.display = 'none';
                        clickedBtn.innerHTML = 'show';
                    }
                    break;
                }
                next = next.nextElementSibling;
            }
        }, false)

    };
}
