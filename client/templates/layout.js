Template.layout.helpers({
    currentView: function () {
      checkLogin();
    	var currentState = states[Session.get('currentState')];
			if(currentState) {
			  return currentState.templateName;
			}
    }
});