$(document).ready(function(){
  $("form").submit(function(event){
    var items = ["item1","item2","item3","item4","item5","item6"];
    // var sortedItems = items.sort()
    // var ucSortedItems = sortedItems.toUpperCase()

    // items.forEach(function(item){
    //   var userInput = $("input#" + item).val();
    //   $("ul").append("<li>" + userInput + "</li>");
    // });

    var otherItems = items.map(function(item){
      return $("input#" + item).val().toUpperCase();
    });

    otherItems.sort().forEach(function(eachItem){
      $("#list").append("<li>" + eachItem + "</li>");
    });


    $(".list").show();
    $("form").hide();

    event.preventDefault();
  });
});
