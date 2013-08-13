if (Meteor.isClient) {
    Alerts = new Meteor.Collection("alerts");

    Meteor.autosubscribe(function() {
        Alerts.find().observe({
            added: function(item){
                el = document.getElementById('date');
                var newEl = document.createElement("span");
                newEl.id = "date";
                newEl.textContent = item.date_tracker.date;
                el.parentNode.replaceChild(newEl, el);
            }
        })
    });

}

if (Meteor.isServer) {
    Alerts = new Meteor.Collection("alerts");

    Meteor.publish("alerts", function(){
        Alerts.find("counter");
    });

    Alerts.remove({});

    Alerts.insert({date_tracker : {date : Date()}});
    Meteor.setInterval(function() {
        Alerts.insert({date_tracker : {date: Date()}});
    }, 1000);
}
