let people = [];
let gifts = [];

function shuffleGifts() {
  const namesInput = document.getElementById("names");
  people = namesInput.value.split(",").map((name) => name.trim());
  gifts = [];

  if (people.length < 2) {
    alert("Введите хотя бы два имени для разыгрывания подарков.");
    return;
  }

  if (people.length !== new Set(people).size) {
    alert("Имена участников должны быть уникальными.");
    return;
  }

  const giftList = document.getElementById("gift-list");
  giftList.innerHTML = "";

  for (let i = 0; i < people.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${people[i]} ➜ ${getGiftReceiver(i)}`;
    giftList.appendChild(listItem);
  }
}

function getGiftReceiver(giverIndex) {
  const validReceivers = people.filter(
    (_, index) => index !== giverIndex && !gifts.includes(index)
  );
  const randomIndex = Math.floor(Math.random() * validReceivers.length);
  const receiverIndex = people.indexOf(validReceivers[randomIndex]);
  gifts.push(receiverIndex);
  return people[receiverIndex];
}
