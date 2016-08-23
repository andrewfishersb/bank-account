//backend
function Account(name, initialAmount){
  this.name =name;
  this.amount = initialAmount;
}

Account.prototype.deposit =function(deposit){
  this.amount += deposit;
}

Account.prototype.withdraw =function(withdraw){
  this.amount -= withdraw;
}

Account.prototype.toString = function(amount){
  var stringAmount = amount.toString();
  var strArray = stringAmount.split("");
  var counter =0;
  for(var i =strArray.length;i>0;i--){
  	if(counter%3===0 &&counter!==0 ){
    strArray.splice(i,0,',');
    }
    counter++;
  }
  var outnum = strArray.join("");
  return outnum;
}

var randAccount = function(){
  var accountNumber = Math.floor(Math.random()*1000000);
return accountNumber;

}

//front-end
$(document).ready(function(){
  var myAccount;
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var initialInput = parseInt($("#initial").val());
    myAccount = new Account(nameInput,initialInput);
    var accountNumber = randAccount();
    $("#exchange").show();
    $("#check").show();
    $("#create").attr("disabled",true);
    $("#account-info").text(nameInput);
    $("#number").text(accountNumber);
  });

  $("form#exchange").submit(function(event){
    event.preventDefault();
    var depositInput = $("#deposit").val();
    var withdrawInput = $("#withdraw").val();
    if(!depositInput){
      depositInput=0;
    }else{
      depositInput = parseInt($("#deposit").val());
    }
    if(!withdrawInput){
      withdrawInput=0;
    }else{
      withdrawInput = parseInt($("#withdraw").val());
    }
    myAccount.deposit(depositInput);
    myAccount.withdraw(withdrawInput);
    $("input#deposit").val("");
    $("input#withdraw").val("");

  });

  $("#check").click(function(){
    if(myAccount.amount>1000000){
      $("body").css("background-image","url(img/giphy.gif)");
      $("body").css("color","white");

    }
    var balanceOutput = myAccount.toString(myAccount.amount);
    $("#balance-output").text(balanceOutput);
    $("#balance").show();
    $("#yourinfo").show();

  });

});
