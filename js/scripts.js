$(document).ready(function(){
  $("form").submit(function(event){
    var items = ["item1","item2","item3","item4","item5","item6"];

    items.forEach(function(item){
      var userInput = $("input#" + item).val();
      $("ul").append("<li>" + userInput + "</li>");
    });

    $(".list").show();
    $("form").hide();

    event.preventDefault();
  });
});
