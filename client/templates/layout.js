Template.layout.helpers({
    currentView: function () {
    	var currentState = states[Session.get('currentState')];
			if(currentState) {
			  return currentState.templateName;
			}
    }
});