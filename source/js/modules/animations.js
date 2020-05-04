export default () => {
    const BODY = document.body;

    let onPageLoad = function () {
      BODY.classList.add('js-loaded');
    }

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
    }
}
