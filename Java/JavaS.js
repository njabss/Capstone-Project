//Verification of all fields in the form with "Required" attribute
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const country = document.getElementById("country");
document.getElementById("EnSubmit").addEventListener("click", function() 
{
    if (name.value === "" || surname.value === "" || country.value === "") {
        alert("Please fill in all fields.");
    } 
});
document.getElementById("EnSubmit").addEventListener("click", function() 
{
    if (email.value === "" || phone.value === "") {
        alert("Please fill in all fields.");
    } 
});
document.getElementById("EnReset").addEventListener("click", function() {
    email.value = "";
    phone.value = "";
    alert("Form reset successfully!");
});
document.getElementById("FlexiItemForm").addEventListener("submit", function(event) 
{
    if(!email.includes("@") || !phone.match(/^\d{10}$/)  ) 
   {
        // Prevent form submission if validation fails
        event.preventDefault();
                alert("Please enter a valid email and phone number.");

   }
        else {
            alert("Form submitted successfully!");
    }   


});
//JQuery code
$(document).ready(function() {
    $("#Container").click(function() {
        $("#images").toggle();
    });
    $("Container").click(function() {
        $("#images2").toggle();
    });
    $("Container").click(function() {
        $("#images3").toggle();
    });
    $("Container").click(function() {
        $("#images4").toggle();
    });
    $("Container").click(function() {
        $("#images5").toggle();
    });

});

$(document).ready(function() {
    $("#CulHead").click(function() {
        $(this).next(".CulPar").slideToggle();
    });
});

$(document).ready(function() {
    $("#EnSubmit").hoover(function() {
        $(this).css(coulour, "red");
    });
});
