// DESCRIPTION

// Microsoft's Bing is the most celebrated and popular search engine on the web.

// Create your own version of Bing's famous search algorithm.

// The function will take two arguments:
// - `userInput` (a string)
// - `websiteList` (an array of sites)

// Return the sites where the domain name contains the user input, as a new array.

// If `userInput` is either `undefined` *or* an **empty string**, return `["No User Input."]`

// If `websiteList` is `undefined`, return `["Bing is currently offline. Please try google.com."]`

// *White space in the user input should not make the test fail and the function should not be case sensitive.*

// Example:
// - `userInput = "cat";`
// - `websiteList = ["catphotos.com","jumanji.com","googlesucks.com","catcraycray.com"];`
// - function should return `["catphotos.com", "catcraycray.com"];`

// COMPLETE SOLUTION

searchAlgorithm = (userInput, websiteList) => {
  let searchResults = [];

  // 1) userInput empty / undefined
  if (userInput === "" || userInput === undefined) {
    searchResults.push("No User Input.");
    return searchResults;

    // 2) websiteList undefined
  } else if (websiteList === undefined) {
    searchResults.push("Bing is currently offline. Please try google.com.");
    return searchResults;
  } else {
    // remove spaces from userInput
    if (/\s/.test(userInput)) {
      userInput = userInput.replace(/\s/g, "");
    }
    userInput = userInput.toLowerCase();
    console.log(userInput); // convert to lowercase

    // 3) push matching search results to new array
    for (var i = 0; i < websiteList.length; i++) {
      if (websiteList[i].includes(userInput)) {
        searchResults.push(websiteList[i]);
      }
    }
    return searchResults;
  }
};

//////////// TESTS
Test.assertDeepEquals(
  searchAlgorithm("cat", [
    "catphotos.com",
    "jumanji.com",
    "googlesucks.com",
    "catcraycray.com",
  ]),
  ["catphotos.com", "catcraycray.com"]
);
Test.assertDeepEquals(
  searchAlgorithm("eleven", [
    "seveneleven.com",
    "jumanji.com",
    "eleventyfirstbirthday.com",
    "catcraycray.com",
  ]),
  ["seveneleven.com", "eleventyfirstbirthday.com"]
);
Test.assertDeepEquals(
  searchAlgorithm("jim", [
    "jim.com",
    "jumanjim.com",
    "googlesucks.com",
    "catcraycray.com",
  ]),
  ["jim.com", "jumanjim.com"]
);
Test.assertDeepEquals(
  searchAlgorithm("", [
    "seveneleven.com",
    "jumanji.com",
    "eleventyfirstbirthday.com",
    "catcraycray.com",
  ]),
  ["No User Input."]
);
Test.assertDeepEquals(
  searchAlgorithm(undefined, [
    "seveneleven.com",
    "jumanji.com",
    "eleventyfirstbirthday.com",
    "catcraycray.com",
  ]),
  ["No User Input."]
);
Test.assertDeepEquals(searchAlgorithm("dog", undefined), [
  "Bing is currently offline. Please try google.com.",
]);
Test.assertDeepEquals(
  searchAlgorithm("on", ["jon.com", "no.com", "yes.com", "gum.com"]),
  ["jon.com"]
);
Test.assertDeepEquals(
  searchAlgorithm("every body dance now", [
    "everybodydancenow.com",
    "nobodydancenow.com",
    "thecasperslideparttwo.com",
    "itstimetogetfunky.com",
  ]),
  ["everybodydancenow.com"]
);
Test.assertDeepEquals(
  searchAlgorithm("the casper slide part two", [
    "everybodydancenow.com",
    "nobodydancenow.com",
    "thecasperslideparttwo.com",
    "itstimetogetfunky.com",
  ]),
  ["thecasperslideparttwo.com"]
);
Test.assertDeepEquals(
  searchAlgorithm("TO THE LEFT", [
    "totheleft.com",
    "takeitbacknowyall.com",
    "onehopthistime.com",
    "reversereverse.com",
  ]),
  ["totheleft.com"]
);
Test.assertDeepEquals(
  searchAlgorithm("ChAr Lie BroWN", [
    "totheleft.com",
    "takeitbacknowyall.com",
    "onehopthistime.com",
    "reversereverse.com",
    "charliebrown.com",
  ]),
  ["charliebrown.com"]
);

// RANDOM TESTS
makeString2Chars = () => {
  var array = [];
  var possible = "abdefghijklnpqrstuvwxyz"; // exclude 'c', 'o', 'm' so won't match .com
  for (var i = 0; i < 2; i++) {
    array.push(possible[Math.floor(Math.random() * possible.length)]);
  }
  return array.join("");
};

makeString20Chars = () => {
  var array = [];
  var possible = "abdefghijklnpqrstuvwxyz";
  for (var i = 0; i < 20; i++) {
    array.push(possible[Math.floor(Math.random() * possible.length)]);
  }
  return array.join("");
};

// run random test
randomTest = () => {
  const randomString = makeString2Chars();
  const websitesList = [];

  for (var i = 0; i < 100; i++) {
    websitesList.push(makeString20Chars() + ".com");
  }

  let expectedResult = [];

  for (var i = 0; i < websitesList.length; i++) {
    if (websitesList[i].includes(randomString)) {
      expectedResult.push(websitesList[i]);
    }
  }

  Test.assertDeepEquals(
    searchAlgorithm(randomString, websitesList),
    expectedResult
  );
};

for (var i = 0; i < 100; i++) {
  randomTest();
}
