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

//front-end
$(document).ready(function(){
  var myAccount;
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var initialInput = parseInt($("#initial").val());
    myAccount = new Account(nameInput,initialInput);
    $("#balance-output").text(myAccount.amount);
    $("#exchange").show();
    $("#new-account").hide();

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
    var balanceOutput = myAccount.toString(myAccount.amount);
    $("#balance-output").text(balanceOutput);

    $("input#deposit").val("");
    $("input#withdraw").val("");

  });

});
