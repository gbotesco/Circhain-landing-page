//rolly.js
const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
  });
  r.init();

  AOS.init(
      {
          duration: 1500 
      }
  );