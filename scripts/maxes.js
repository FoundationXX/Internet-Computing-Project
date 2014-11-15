function Maxes(lift, max) {
    var self = this;
    self.lift = lift;
    self.max = max;
}

// Overall viewmodel for this screen, along with initial state
function MaxesViewModel() {
    var self = this;

    // Editable data
    self.maxes = ko.observableArray([
        new Maxes("Steve", "dfa"),
        new Maxes("Bert", "self.availableMeals[0]")
    ]);
    
    
    // Operation add new
    self.addMax = function() {
        self.maxes.push(new Maxes("", ""));
    }
}

ko.applyBindings(new MaxesViewModel());

//provides functionality of the edit and done button through ajax
 $(document).ready(function(){  

    $("#edit").click(function(){
        $(".information").hide();
        $(".informationEdit").show();

    $("#done").click(function(){
            $(".information").hide();
		$(".informationEdit").show();
});
	});	});