(function() {
  const isTopOut = function(elem) {
    const bounding = elem.getBoundingClientRect();
    return bounding.top <= 20 && bounding.left >= 0;
  };

  function changePosition(el, add) {
    if (add) {
      el.style.position = 'fixed'; // actually use fixed
      el.style.top = '0em';
      el.style.bottom = '1em';
      // el.style.right = '0em';
      el.style.maxHeight = 'max-content';
      
    } else {
      el.style.position = 'absolute';
      // el.style.right = '1em';
      el.style.top = '';
      el.style.bottom = '';
    }
  }
  let manualEl;
  let tocEl;

  window.addEventListener('scroll', event => {
    !manualEl && (manualEl = document.getElementById('manual'));
    !tocEl && (tocEl = document.getElementsByClassName('toc')[0]);

    if (window.innerWidth >= 1200) {
      if (isTopOut(manualEl) && tocEl.style.position != 'fixed') {
        changePosition(tocEl, true);
      } else if (!isTopOut(manualEl) && tocEl.style.position == 'fixed') {
        changePosition(tocEl, false);
      }
    }
  });
})();
