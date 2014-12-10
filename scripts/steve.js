(function() {

    var viewModel = function(){
        var self = this;
        self.people = ko.observableArray([
            {name:'James Smith',year:'Smith',sport:"Football",injury:'Full Activity'},
            {name:'Susan Smith',year:'Smith',sport:"Football",injury:'Upper Body Only'},
            {name:'Jeremy Smith',year:'Smith',sport:"Mens Soccer",injury:'Full Activity'},
            {name:'Megan Smith',year:'Smith',sport:"Womens Soccer",injury:'Full Activity'},
            {name:'James Jones',year:'Jones',sport:"Mens Soccer",injury:'Lower Body Only'},
            {name:'Martha Jones',year:'Jones',sport:"Vollyball",injury:'Full Activity'},
            {name:'Peggy Jones',year:'Jones',sport:"Vollyball",injury:'Full Activity'}
        ]);
        
        self.headers = [
            {title:'Name',sortPropertyName:'name', asc: true, active: false},
            {title:'Year',sortPropertyName:'year', asc: true, active: false},
            {title:'Sport',sortPropertyName:'sport', asc: true, active: false},
            {title:'Injury',sortPropertyName:'injury', asc: true, active: false}
        ];
        self.filters = [
            {title:'All Sports', filter: null},
            
            {title:'Vollyball', filter: function(item){return item.sport == 'Vollyball';}},
            {title:'Mens Soccer', filter: function(item){return item.sport == 'Mens Soccer';}},
            {title:'Womens Soccer', filter: function(item){return item.sport == 'Womens Soccer';}},
            {title:'Football', filter: function(item){return item.sport == 'Football';}}
            
        ];

          self.filters1 = [
            {title:'Upper Body Only', filter:function(item){return item.injury == 'Upper Body Only';}},
            {title:'Lower Body Only', filter:function(item){return item.injury == 'Lower Body Only'}},
            {title:'Full Activity', filter:function(item){return item.injury == 'Full Activity'}},
            {title:'No Activity', filter:function(item){return item.injury == 'No Activity'}}
        ];
        
        self.activeSort = ko.observable(function(){return 0;}); //set the default sort
        self.sort = function(header, event){
            //if this header was just clicked a second time
            if(header.active) {
                header.asc = !header.asc; //toggle the direction of the sort
            }
            //make sure all other headers are set to inactive
            ko.utils.arrayForEach(self.headers, function(item){ item.active = false; } );
            //the header that was just clicked is now active
            header.active = true;//our now-active header

            var prop = header.sortPropertyName;
            var ascSort = function(a,b){ return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : a[prop] == b[prop] ? 0 : 0; };
            var descSort = function(a,b){ return a[prop] > b[prop] ? -1 : a[prop] < b[prop] ? 1 : a[prop] == b[prop] ? 0 : 0; };
            var sortFunc = header.asc ? ascSort : descSort;

            //store the new active sort function
            self.activeSort(sortFunc);
        };
        
        self.activeFilter = ko.observable(self.filters[0].filter);//set a default filter    
        self.setActiveFilter = function(model,event){
            self.activeFilter(model.filter);
        };
        
        self.filteredPeople = ko.computed(function(){
            var result;
            if(self.activeFilter()){
                result = ko.utils.arrayFilter(self.people(), self.activeFilter());
            } else {
                result = self.people();
            }
            return result.sort(self.activeSort());
        });
    }

    $(document).ready(function () {
        ko.applyBindings(new viewModel());
    });
}());



