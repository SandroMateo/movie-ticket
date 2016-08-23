//business logic
function TicketMaker(name,age,movie,time,party) {
  this.name = name;
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.party = party;
  this.price = 5;
}

TicketMaker.prototype.priceRun = function() {
  if (this.age > 12 || this.age < 60) {
    this.price += 1;
  }
  if(this.movie !== "Hunt For The Wilderpeople") {
    this.price += 1;
  }
  if(this.time !== "3:00pm") {
    this.price +=1;
  }
  this.price *= this.party;
  return this.price;
}


//user interface
$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#input-name").val();
    var age = $("#input-age").val();
    var movie = $("#movie-input").val();
    var time = $("input:radio[name=time]:checked").val();
    var party = $("#party-number").val();

    var ticket = new TicketMaker(name, age, movie, time, party);
    ticket.priceRun();
    console.log(ticket);

    $("#output").show();
    $(".name").text(ticket.name);
    $(".age").text(ticket.age);
    $(".movie").text(ticket.movie);
    $(".time").text(ticket.time + "");
    $(".party").text(ticket.party);
    $(".price").text("$" + ticket.price + ".00");

    event.preventDefault();
  });
  $("#showtime").click(function() {
    $("#time-buttons").show();
  });
});
