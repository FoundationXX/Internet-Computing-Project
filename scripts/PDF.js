// Class to represent a row in the seat reservations grid
function PDF(date,name) {
    var self = this;
    self.date = date;
    self.name = name;
    console.log(name,date)
}

// Overall viewmodel for this screen, along with initial state
function PDFListViewModel() {
    var self = this;

    // Editable data
    self.pdfs = ko.observableArray([
        new PDF("10/2/12", "week4 lasdafssssssssssift"),
        new PDF("11/12/03", "demos")
    ]);
   
    //create date of upload
    var d = new Date();
        var day = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();

    var createDate = month+"/"+day+"/"+year;

    // Operations
    self.addPDF = function() {
            var fd = new FormData(),
            myFile = document.getElementById("file").files[0];

            fd.append( 'file',  myFile);

        // $.ajax({
        //      url: 'file:///Users/margaretgiesel/macletes/PDF.html',
        //      data: fd,
        //      processData: false,
        //      contentType: false,
        //      type: 'POST',
        //      success: function(data){
        //      console.log(data);
        //         }
        //     });
        if(myFile ==undefined){
            alert("You must choose a file to preform this function.");
        }
        else{
        self.pdfs.push(new PDF(createDate, myFile.name));
        var control = $("#file");
        control.replaceWith(control = control.clone(true));
       
        }
    }
    self.removeFile = function(fileLocation) { self.pdfs.remove(fileLocation) }
    self.openFile = function(fileLocation){ 
        console.log("Open file");
       // ko.observable("rick.png");
}
}


ko.applyBindings(new PDFListViewModel());




