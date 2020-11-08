# Create Bing Search Engine

Microsoft's Bing is the **most celebrated and popular** search engine on the web.

Create your own version of Bing's famous search algorithm.

The function will take two arguments:

   - `userInput` (a string)
   - `websiteList` (an array of sites)

Return the sites where the domain name contains the user input, as a new array.

If `userInput` is either `undefined` or an empty string, return `["No User Input."]`

If `websiteList` is `undefined`, return `["Bing is currently offline. Please try google.com."]`

*White space in the user input should not make the test fail and the function should not be case sensitive.*

Example:

   - `userInput = "cat";`
   - `websiteList = ["catphotos.com","jumanji.com","googlesucks.com","catcraycray.com"];`
   - function should return `["catphotos.com", "catcraycray.com"];`

