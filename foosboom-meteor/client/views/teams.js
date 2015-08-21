Template.teams.helpers({
    teams: function(){
        return Teams.find()
    },
    creating: function() {
        return Session.get("creating")
    }
});

Template.teams.events({
    "click .create": function(evnt, tmpl) {
        evnt.preventDefault();
        Session.set("creating", true);
    },
    
    "click .cancel": function(evnt, tmpl) {
        evnt.preventDefault();
        Session.set("creating", false);
    },
    
    "submit form.form-create": function(evnt, tmpl) {
        evnt.preventDefault();
        var team = {name: tmpl.$("input[name='name']").val()};
        if (team.name.length) {
            Teams.insert(team);
            Session.set("creating", false)
        }
    }
});