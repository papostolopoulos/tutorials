$('document').ready(function() {
    
    var currentStep = 0;
  
    $("#Step1").hide();
    $("#Step2").hide();
    
    
    $("#btnStep1").click(()=> {
        $("#Step1").show();
        $("#Step2").hide();
        
        currentStep = 1;
        //update the database
    });
    
    
    $("#btnStep2").click(()=> {
        $("#Step1").hide();
        $("#Step2").show();
        
         currentStep = 2;
        //update the database
    });
});
