const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result"); 
const playerScoreEl = document.getElementById("user-score"); 
const computerScoreEl = document.getElementById("computer-score"); 

// Oyuncu ve bilgisayarın skorunu tanımladım
let playerScore = 0; 
let computerScore = 0; 

// Her bir buton için bir click event listener'ı ekle
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Oyuncunun seçimini ve bilgisayarın seçimini alarak bir tur oynayıp sonucu göster
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;

    // 10 olan kazansın oyun sıfırlansın 
    if (playerScore === 10) {
      resultEl.textContent = "Player wins the game!";
      // Oyunu sıfırla
      playerScore = 0;
      computerScore = 0;
      playerScoreEl.textContent = playerScore;
      computerScoreEl.textContent = computerScore;
    }
    // Bilgisayar 10 puana ulaştığında
    else if (computerScore === 10) {
      resultEl.textContent = "Computer wins the game!";
      // Oyunu sıfırla
      playerScore = 0;
      computerScore = 0;
      playerScoreEl.textContent = playerScore;
      computerScoreEl.textContent = computerScore;
    }
  });
});

// Random bilgisayar seçimi
function computerPlay() {
  const choices = ["rock", "paper", "scissors"]; 
  const randomChoice = Math.floor(Math.random() * choices.length); 
  return choices[randomChoice]; // Seçimi döndür
}

// Oyuncu ve bilgisayar arasında bir tur oynat
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!"; // Beraberlik durumu
  } 
  // Oyuncunun kazandığı durumlar
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++; // Oyuncunun skorunu arttır
    playerScoreEl.textContent = playerScore; // Oyuncunun puanını güncelle
    return "You win! " + playerSelection + " beats " + computerSelection; // Oyuncunun kazandığını belirt
  } 
  // Bilgisayarın kazandığı durumlar
  else {
    computerScore++; // Bilgisayarın puanını arttır
    computerScoreEl.textContent = computerScore; // Bilgisayarın puanını güncelle
    return "You lose! " + computerSelection + " beats " + playerSelection; // Bilgisayarın kazandığını belirt
  }
}
