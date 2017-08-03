console.log(location)

window.addEventListener('hashchange', function(){
  window.location.hash === "#bookmarks1" ? console.log("Page one:", window.location.hash) : console.log("something new");

});
