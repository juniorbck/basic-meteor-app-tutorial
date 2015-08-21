Template.team.helpers({
    editing: function(){
        return Session.get("editing") == this._id
    }
});

Template.team.events({
    "click .edit": function(evnt, tmpl) {
        evnt.preventDefault();
        Session.set("editing", this._id);
    },
    
    "submit form.form-edit": function(evnt, tmpl) {
        debugger;
        evnt.preventDefault();
        var teamName = tmpl.$("input[name='name']").val();
        if (teamName.length) {
            Teams.update(this._id, {$set: {name: teamName}});
            Session.set("editig", null)
        }
    },
    
    "click .cancel": function(evnt, tmpl) {
        evnt.preventDefault();
        Session.set("editig", null)
    },
    
    "click .remove": function(evnt, tmpl) {
        evnt.preventDefault();
        Teams.remove(this._id);
    }
    
});