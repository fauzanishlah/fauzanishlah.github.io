const indicator = _selector(".tab-indicator")[0];
const tabContent = _selector(".tab-content > div");
const tabPanes = _selector(".tab-header > div");
   
for(let i=0;i<tabPanes.length;i++) {
  tabPanes[i].addEventListener("click", function() {
    const activeHeader = _selector(".tab-header .active")[0];
    const activeContent = _selector(".tab-content .active")[0];
    
    // Tab-header active class
    activeHeader.classList.remove("active");
    this.classList.add("active");
      
    // Tab-indicator active
    indicator.style.top = `calc(80px + ${i*50}px)`;
      
    // Tab-content active class
    activeContent.classList.remove("active");
    tabContent[i].classList.add("active");
    });
  }

  function _selector(query) {
    return document.querySelectorAll(query)
  }
