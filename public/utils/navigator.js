function IsHomePage() {
  if (window.location.pathname == "/" || window.location.pathname == "") {
    return true;
  }
  return false;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    IsHomePage,
  };
}
