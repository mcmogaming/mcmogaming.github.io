const navbar = (function () {
  let module = {};

  module.load = function load() {
    //Assign Listeners
    const navbtns = document.getElementsByClassName('nav_btn');
    const contentdivs = document.getElementById('content').children;

    for (let i = 0; i < Object.keys(navbtns).length; i++) {
      let n = navbtns[i];
      console.log(n);
      n.addEventListener('click', () => {
        //Remove Selected From All NavBtns
        for (let index = 0; index < navbtns.length; index++) {
          navbtns[index].classList.remove('selected');
        }

        //Change Clicked Btn to Selected
        n.classList.add('selected');

        //Change Content to Corresponding Page
        for (let index = 0; index < contentdivs.length; index++) {
          contentdivs[index].classList.add('hidden');
        }

        contentdivs[i].classList.remove('hidden');
        console.log(i);
      });
    }

    //If resume is clicked redirect to resume file
    document
      .querySelector('body > div.navbar > div:nth-child(3)')
      .addEventListener('click', () => {
        window.location.href = './resume.pdf';
      });
  };

  return module;
})();
