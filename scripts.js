(function (document, window) {
  document.querySelector('label[for=resume]').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('./Russell-Clarey-Resume.pdf', '_blank');
  });
})(document, window);
