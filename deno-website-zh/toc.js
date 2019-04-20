(function() {
  let H = `<div><ol>`;

  function liEl(str, id) {
    return `<li><a href="#${id}">${str}</a></li>`;
  }

  function run() {
    setTimeout(() => {
      if (window.anchors && window.anchors.elements.length) {
        let lis = window.anchors.elements.map(el => {
          return liEl(el.innerText, el.id);
        });
        let result = `${H}${lis.join('\n')}</ol></div>`;
        document.getElementsByClassName("toc")[0].innerHTML = result;
      } else {
        console.log('query anchors again');
        run();
      }
    }, 100);
  }

  run();
})();
