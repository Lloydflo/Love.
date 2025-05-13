document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.category-buttons button');
  const cards = document.querySelectorAll('.letter-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      if (category === 'all') {
        cards.forEach(card => card.style.display = '');
        return;
      }
      cards.forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(' ');
        if (cardCategories.includes(category)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}); 