// check off  desired todos by clicking in them 
$("ul").on("click", "li",function(){

	$(this).toggleClass("completed");

});

//click on x to delete to-do

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	}); 
	event.stopPropagation();

});


$("input[type='text']").keypress(function(event){
	if (event.which === 13){

		//grabbing new todo
		var todoText = $(this).val(); 
		$(this).val("");
		//create a new li and adding it to the ul 
		$("ul").append("<li><span> <i class='fa fa-trash'> </i> </span> " + todoText + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});