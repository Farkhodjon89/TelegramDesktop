let messages = [];
let DATA = {
  users: [
    {
      id: 1,
      name: "Python",
      photo: "https://picsum.photos/id/1/300",
      lastUpdate: "rtreter",
      bio: "464545",
      phone: 99895453226,
      messages: [
        {
          text: "Hello how are u?",
          owner: true,
        },
        {
          text: "I am fine and u?",
          owner: false,
        },
      ],
    },
    {
      id: 2,
      name: "Farhod",
      photo: "https://picsum.photos/id/22/300",
      lastUpdate: "rtreter",
      bio: "4444",
      phone: 99895453226,
      messages: [
        {
          text: "Text me",
          owner: true,
        },
        {
          text: "Lorem ipsum",
          owner: false,
        },
      ],
    },
    {
      id: 3,
      name: "Sama",
      photo: "https://picsum.photos/id/33/300",
      lastUpdate: "rtreter",
      bio: "55555",
      phone: 99895453226,
      messages: [
        {
          text: "Text me pls",
          owner: true,
        },
        {
          text: "Lorem ipsum no no",
          owner: false,
        },
      ],
    },
    {
      id: 4,
      name: "Ula",
      photo: "https://picsum.photos/id/44/300",
      lastUpdate: "rtreter",
      bio: "6666666",
      phone: 99895453226,
      messages: [
        {
          text: "Text me Ula dddd",
          owner: true,
        },
        {
          text: "........",
          owner: false,
        },
      ],
    },
    {
      id: 5,
      name: "Ulug",
      photo: "https://picsum.photos/id/55/300",
      lastUpdate: "rtreter",
      bio: "777777",
      phone: 99895453226,
      messages: [
        {
          text: "Privet",
          owner: true,
        },
        {
          text: "Poka",
          owner: false,
        },
      ],
    },
    {
      id: 6,
      name: "Mike",
      photo: "https://picsum.photos/id/66/300",
      lastUpdate: "rtreter",
      bio: "8888888",
      phone: 99895453226,
      messages: [
        {
          text: "How old are u?",
          owner: true,
        },
        {
          text: "I am 21",
          owner: false,
        },
      ],
    },
    {
      id: 7,
      name: "Malika",
      photo: "https://picsum.photos/id/7/300",
      lastUpdate: "rtreter",
      bio: "999999",
      phone: 99895453226,
      messages: [
        {
          text: "Hello",
          owner: true,
        },
        {
          text: "How are u doing?",
          owner: false,
        },
      ],
    },
    {
      id: 8,
      name: "Floyd",
      photo: "https://picsum.photos/id/88/300",
      lastUpdate: "rtreter",
      bio: "0000000",
      phone: 99895453226,
      messages: [
        {
          text: "Text me as soon as",
          owner: true,
        },
        {
          text: "Ok",
          owner: false,
        },
      ],
    },
    {
      id: 9,
      name: "MAyweather",
      photo: "https://picsum.photos/id/9/300",
      lastUpdate: "rtreter",
      bio: "754865gh",
      phone: 99895453226,
      messages: [
        {
          text: "Hey",
          owner: true,
        },
        {
          text: "Hey",
          owner: false,
        },
      ],
    },
    {
      id: 10,
      name: "Lukman",
      photo: "https://picsum.photos/id/10/300",
      lastUpdate: "rtreter",
      bio: "@daer",
      phone: 99895453226,
      messages: [
        {
          text: "Lukman whats up?",
          owner: true,
        },
        {
          text: "Farhod how are u?",
          owner: false,
        },
      ],
    },
    {
      id: 11,
      name: "Ruslan",
      photo: "https://picsum.photos/id/11/300",
      lastUpdate: "rtreter",
      bio: "looke",
      phone: 99895453226,
      messages: [
        {
          text: "Hi hi",
          owner: true,
        },
        {
          text: "Bue bue",
          owner: false,
        },
      ],
    },
    {
      id: 12,
      name: "Rashid",
      photo: "https://picsum.photos/id/12/300",
      lastUpdate: "rtreter",
      bio: "fff555",
      phone: 99895453226,
      messages: [
        {
          text: "Wassap",
          owner: true,
        },
        {
          text: "Awesome",
          owner: false,
        },
      ],
    },
    {
      id: 13,
      name: "Umid",
      photo: "https://picsum.photos/id/13/300",
      lastUpdate: "rtreter",
      bio: "77ffd",
      phone: 99895453226,
      messages: [
        {
          text: "How are u?",
          owner: true,
        },
        {
          text: "I am fine thanks",
          owner: false,
        },
      ],
    },
    {
      id: 14,
      name: "Anvar",
      photo: "https://picsum.photos/id/14/300",
      lastUpdate: "rtreter",
      bio: "gfrtf987",
      phone: 99895453226,
      messages: [
        {
          text: "Whats your name?",
          owner: true,
        },
        {
          text: "My name is Anvar",
          owner: false,
        },
      ],
    },
  ],
};

let titleButtonElement = document.querySelector(".title-button");
let messageFormElement = document.querySelector(".message-form");
let sendButton = document.querySelector('.send-button')
let textArea = document.querySelector(".message-textarea");
let chatListElement = document.querySelector(".chat-list");
let messagesList = document.querySelector(".messages-list");
let contactName = document.querySelector(".chat-name");

sendButton.addEventListener('click', event => {
  event.preventDefault();
  let newLiElement = document.createElement("li");
  newLiElement.classList.add("message-item");
  newLiElement.setAttribute("id", messages.length + 1);

  let newMessageTextElement = document.createElement("p");
  newMessageTextElement.classList.add("message-text", "sent");

  newMessageTextElement.textContent = textArea.value;

  newLiElement.appendChild(newMessageTextElement);

  messagesList.appendChild(newLiElement);
  console.log(messages);

  messageFormElement.reset();
})

textArea.addEventListener('keyup', event => {
  event.preventDefault()
  if (event.keyCode == 13) {
    sendButton.click()
  }
})
  



DATA.users.forEach((contact) => {
  let newNameElement = document.createElement("p");
  newNameElement.classList.add("contact-name");
  newNameElement.textContent = contact.name;

  let chatDivElement = document.createElement("div");
  chatDivElement.classList.add("text");
  chatDivElement.appendChild(newNameElement);

  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", contact.photo);

  let newUserLiElement = document.createElement("li");
  newUserLiElement.classList.add("chat");
  newUserLiElement.appendChild(imgElement);
  newUserLiElement.appendChild(chatDivElement);

  chatListElement.appendChild(newUserLiElement);

  newUserLiElement.addEventListener("click", (event) => {
    messagesList.textContent = "";

    contactName.textContent = contact.name;
    let modalName = document.querySelector(".user-name");
    modalName.textContent = contact.name;

    let bioName = document.querySelector(".bio")
    bioName.textContent=contact.bio

    let modalImg = document.querySelector(".modal-img");
    modalImg.setAttribute("src", contact.photo);

    contact.messages.forEach((message) => {
      let newMessageLi = document.createElement("li");
      newMessageLi.classList.add("message-item");

      let newMessageElement = document.createElement("p");
      newMessageElement.classList.add("message-text");

      newMessageElement.textContent = message.text;

      if (message.owner) {
        newMessageElement.classList.add("sent");
      }

      newMessageLi.appendChild(newMessageElement);

      messagesList.appendChild(newMessageLi);
    });
  });
});
