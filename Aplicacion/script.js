$("li").on("click", function(){
  
    var item = $(this),
        pos = "-"+(item.index() * 650)+"px";
   
    item.addClass("active");
    item.siblings().removeClass("active");
    
    $("ul").css("left", pos);
    
  });