function solve() {
  return function(element, contents) {
      var i,
          selectElement,
          content,
          div,
          currDiv,
          len = contents.length;
          docFragment = document.createDocumentFragment();

      if (typeof element  !== 'string' && !(element instanceof HTMLElement)) {
        throw new Error();
      }

      if (typeof element === 'string') {
        selectElement = document.getElementById(element);
        if (!selectElement) {
          throw new Error();
        }
      } else {
        selectElement = element;
      }

      for (i = 0; i < len; i += 1) {
        content = contents[i];

        if (typeof content  !== 'string' && typeof content !== 'number') {
          throw new Error();
        }
      }

      selectElement.innerHTML = '';
      div = document.createElement('div');

      for (i = 0; i < len; i += 1) {
          currDiv = div.cloneNode(true);
          currDiv.innerHTML = contents[i];
          docFragment.appendChild(currDiv);
      }

      selectElement.appendChild(docFragment);

    };
 }
