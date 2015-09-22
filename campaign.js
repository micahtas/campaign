/**
 * Created by Micah on 9/22/2015.
 */

var testdata = campaignContributions.splice(0, 10);

function currencyToNum(currencyString) {
  return Number(currencyString.replace(/[^0-9\.]+/g,""));
}

//console.log(currencyToNum("$123.45") + currencyToNum("$20.00"));  // prints 143.45

function addContributions(memo, record)
{
  return memo + currencyToNum(record["Amount"]);
}

function contributionsByParty(data)
{
  return _.reduce(_.groupBy(data, "Party"), addContributions, 0);
}
console.log(contributionsByParty(testdata));