var label1="<label for='name'>Nom:</label>";
var input1="<input type='text' name='name' id='name' required><br>";
var label2="<label for='lastName'>Prenom:</label>";
var input2="<input type='text' name='lastName' id='lastName' required><br>";
var label3="<label for='birth'>date de naissance:</label>";
var input3="<input type='text' name='birth' id='birth' required><span>format valide:jj/mm/aaaa</span><br>";
var label4="<label for='job'>Profession:</label>";
var input4="<input type='text' name='job' id='job' required><br>";
var label5="<label for='company'>Société:</label>";
var input5="<input type='text' name='company' id='company' required><br>";
var input6="<input type='submit' id='submit' value='envoyer'>";
var message="<div></div>"
var firstName=/[A-Z][a-z]*(-[A-Z][a-z]?)?/;
var lastName=/[A-Z][a-z]*(-[A-Z][a-z]?)?/;
var dateBirth=/^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(19|20)[0-9])(\/)\d{4}$/;//regex bloque l'année entre 1900 et 20..
var ocupation=/[A-Z a-z]/;

//((0|1)[0-9]\/[0-3][0-9]\/(19|20)[0-9]{2})/;

$(document).ready(function(){
    $("body").prepend(label1,input1,label2,input2,label3,input3,label4,input4,label5,input5,input6,message);
    $("#lastName").css("margin-top","10px");
    $("#birth").css("margin-top","10px");
    $("#job").css("margin-top","10px");
    $("#company").css("margin-top","10px");
    $("#submit").css("margin-top","10px");
    $("div").css({
        "margin-top":"15px",
        "border":"2px solid gray"
    })

    $("#submit").click(function(event){
        if(firstName.test($("#name").val())== false){
            event.preventDefault();
            $('#name').css("border","3px solid red");
            alert("veuillez entrer un nom valide qui commence par une Majuscule");
        }else{
            $('#name').css("border","3px solid green");
        }
        if(lastName.test($("#lastName").val())== false){
            event.preventDefault();
            alert("veuillez entrer un prénom valide qui commence par une Majuscule");
            $('#lastName').css("border","3px solid red");
        }else{
            $('#lastName').css("border","3px solid green");
        }
        if(dateBirth.test($("#birth").val())== false){
            event.preventDefault();
            alert("veuillez entrer une date de naissance  valide");
            $('#birth').css("border","3px solid red");
            return true;
        }else{
            $('#birth').css("border","3px solid green");
        }
        if(ocupation.test($("#job").val())== false){
            event.preventDefault();
            alert("veuillez entrer une profession ");
            $('#job').css("border","3px solid red");

        }else{
            $('#job').css("border","3px solid green");
        }
        if(($("#company").val())== false){
            event.preventDefault();
            alert("veuillez entrer un nom  de société");
            $('#company').css("border","3px solid red");

        }else{
            $('#company').css("border","3px solid green");
        }
       $("div").html("le nom: " +$("#name").val()+"<br>"+"le prénom: "+$("#lastName").val()+"<br>"+ "la date de naissance: " +$("#birth").val()+"<br>" + "la profession est: " +$("#job").val()+"<br>"+"la société est: "+ $("#company").val());
    })
   
})