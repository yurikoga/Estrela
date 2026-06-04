// Seleciona os elementos necessários
const feedbackText = document.getElementById('feedback-text');
const feedbackEmoji = document.getElementById('feedback-emoji');
const stars = document.querySelectorAll('.star-rating input');

// Mapeamento de texto e emoji para cada nota
const feedbackMap = {
    '1': { text: 'Terrible', emoji: '😞' },
    '2': { text: 'Bad', emoji: '😕' },
    '3': { text: "It's good", emoji: '😊' },
    '4': { text: 'Excellent', emoji: '🤩' },
    '5': { text: 'Perfect', emoji: '💖' }
};

// Adiciona o evento de clique a cada estrela
stars.forEach(star => {
    star.addEventListener('change', (e) => {
        const ratingValue = e.target.id.split('-')[1]; // Pega o número (ex: '3')
        updateFeedback(ratingValue);
    });
});

// Função para atualizar o feedback visual
function updateFeedback(rating) {
    const feedback = feedbackMap[rating];
    feedbackText.textContent = feedback.text;
    feedbackEmoji.textContent = feedback.emoji;
}
