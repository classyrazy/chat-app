var chatApp = {
    user1:{
        user1Input: document.querySelector(".user1-input"),
        user1SubmitBtn: document.querySelector(".user1-submit-btn"),
        user1Chats:[]
    },

    user2:{
        user2Input: document.querySelector(".user2-input"),
        user2SubmitBtn: document.querySelector(".user2-submit-btn"),
        user2Chats:[]
    }
}

chatApp.user1.user1SubmitBtn.addEventListener("click",submitUser1Msg)
chatApp.user2.user2SubmitBtn.addEventListener("click",submitUser2Msg)

function sendMsg(from){
    var user1Msg = chatApp.user1.user1Input.value;
    var user2Msg = chatApp.user2.user2Input.value;
    if(from == 'user1'){
        chatApp.user1.user1Chats.push({
            msg:user1Msg,
            sender:"user1"
        })
        chatApp.user2.user2Chats.push({
            msg:user1Msg,
            sender:"user1"
        })
    }else{
        chatApp.user2.user2Chats.push({
            msg:user2Msg,
            sender:"user2"
        })
        chatApp.user1.user1Chats.push({
            msg:user2Msg,
            sender:"user2"
        })
    }

    console.log(chatApp.user1.user1Chats)
    console.log(chatApp.user2.user2Chats)

    var user1Html = "";
    var user2Html = "";
    for(let chat of chatApp.user1.user1Chats){
        console.log(chat.msg)
        user1Html+= `<p class = "${chat.sender === "user1"? 'sender':'reciever'}">${chat.msg}</p>`
        user2Html+= `<p class = "${chat.sender === "user1" ? 'reciever':'sender'}">${chat.msg}</p>`
    }
    console.log(user1Html)
    var user1ChatsInHtml = document.querySelector(".user1-chats")
    user1ChatsInHtml.innerHTML = user1Html;
    var user2ChatsInHtml = document.querySelector(".user2-chats")
    user2ChatsInHtml.innerHTML = user2Html;
    document.querySelector(".user1-input").value = "";
    document.querySelector(".user2-input").value = "";



}

function submitUser1Msg(e){
    e.preventDefault();
    sendMsg('user1')
 
}

function submitUser2Msg(e){
    e.preventDefault();
    sendMsg('user2')
 
} 