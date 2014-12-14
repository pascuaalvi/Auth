Template.layout.helpers({
    currentView: function () {
<<<<<<< HEAD
      checkLogin();
=======
>>>>>>> 41cbe0b033d2cda179f021b7c0356ed922de4c9f
    	var currentState = states[Session.get('currentState')];
			if(currentState) {
			  return currentState.templateName;
			}
    }
});