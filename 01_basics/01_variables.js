const accountId = 144553
let accountEmail = "angad@google.com"
var accountPassword = "12345"
accountCity = "gorakhpur"
let accountState;

// accountId = 2 -> Not Allowed

accountEmail = "Am@am.com"
accountPassword = "21212121"
accountCity = "Deoria"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])