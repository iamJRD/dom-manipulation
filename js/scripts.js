$(document).ready(function() {
  $("button#cat").click(function(){
    $("ul").prepend("<li>meow</li>");
    $("li").css('background-color', 'green');
  });

  $("button#dog").click(function(){
    $("ul").prepend("<li>WOOF</li>");
  });
});
