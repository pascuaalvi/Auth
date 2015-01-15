Profiles = new Meteor.Collection("profile");

Profiles.allow({
  insert: function(userId,doc){
    console.log(checkPermissionGlobal(userId, ['admin']));
    return checkPermissionGlobal(userId, ['admin']);
  }
});

translate = function () {
  attributes = {};
  var profileAttributes = Profiles.find().fetch();
  for (attribute in profileAttributes){
    var field = profileAttributes[attribute];
    var properties = {}
    for(property in field){
      // The alias is what the field is called within the Schema
      // For clarification, see the Docs schema.
      if(property != 'alias'){
        // If the property is the sample data,
        // we must find out what type that data is
        // in order to create a correct input field in the form
        if(property === 'sample'){
          var type = typeof field[property];
          if(type === "number"){
            properties['type'] = Number;
          }
          if(type === "string"){
            properties['type'] = String;
          }
          if(type === "boolean"){
            properties['type'] = Boolean;
          }
          if(type === "object"){
            properties['type'] = specialTest(sample);
          }
        }
        else if (property === '_id'){
          // Do nothing, this property is left out.
        }
        else if (property === 'autoformType'){
          properties['autoform'] =
          {
            afFieldInput: {
            type: field[property]
          }
        }
        }
        else {
          properties[property] = field[property];
        }
      }
    }
    attributes[field.alias] = properties;
  }
  return attributes;
}

