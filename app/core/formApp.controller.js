module.exports = function() {
  var vm = this;
  vm.submit = submit;
  vm.user = {
    email: null,
    firstName: null
  };

  function submit(form) {
    console.log(form);
  }

};
