var likesText = "Like(s): "; // the original like text
var likeNum = 0; // the number of origial likes
var newComments; // the new comments input from the user
var allCommentsText = "OMG soooo cute!"; // the text of the original comments

onEvent("downButton", "click", function() {
  playSound("assets/category_objects/sharp_switch.mp3"); //click sound
  likeNum = --likeNum; // --i == i - 1
  setProperty("likeCounterOutput", "text", likesText + likeNum); // change the display of the number of likes
  console.log("The total number of like(s) is " + likeNum + "."); // print the total number of like(s) on the console
});

onEvent("upButton", "click", function() {
  playSound("assets/category_objects/sharp_switch.mp3"); //click sound
  likeNum = ++likeNum; // ++i == i + 1
  setProperty("likeCounterOutput","text", likesText + likeNum); // change the display of the number of likes
  console.log("The total number of like(s) is " + likeNum + "."); // print the total number of like(s) on the console
});

onEvent("commentButton", "click", function() {
  newComments = getText("newCommentInput"); // store the input of the comments from the user into the "newComments" variable
  allCommentsText = allCommentsText + "\n" + newComments; // combine the original comments and the new comments together, then store them into the "allCommentsText" variable
  setProperty("allCommentsOutput", "text", allCommentsText);
  setProperty("newCommentInput", "text", ""); // clear the comment box
  console.log(allCommentsText); // print all the comments on the console
});