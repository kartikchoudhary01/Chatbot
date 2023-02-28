function talk(){
var know = {
"hii":"Hie, Nice to see you here!!!",
"Who are you" : "Hello, i am a Chatbot!!! ",
"How are you" : "i am Good :)",
"What can i do for you" : "Please Give us a Follow & Like.",
"How many followers do you have" : "I have my family of 5000 members, i don't have follower , i have supportive Family ",
"ok" : "Thank You So Much ",
"Bye" : "Okay! Will meet soon.."
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}
}