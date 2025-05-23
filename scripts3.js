// scripts3.js

// Обработка кликов по карточкам
document.getElementById("photo-quiz").addEventListener("click", () => {
  console.log("Переход на страницу фото-викторины");
  window.location.href = "photo-quiz3.html";
});

document.getElementById("audio-quiz").addEventListener("click", () => {
  console.log("Переход на страницу аудио-викторины");
  window.location.href = "audio-quiz3.html";
});

document.getElementById("random-quiz").addEventListener("click", () => {
  console.log("Переход на страницу случайной викторины");
  window.location.href = "random-quiz3.html";
});

// Обработка нажатий клавиш для карточек
document.querySelectorAll(".mode-card").forEach(card => {
  card.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      card.click();
    }
  });
});

// Обработка кнопки "На главную"
document.querySelectorAll(".home-button").forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "index3.html";
  });
});