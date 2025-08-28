document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projectGrid');
  const loadMoreBtn = document.getElementById('loadMore');
  if (!grid || !loadMoreBtn) return;

  const cards = Array.from(grid.querySelectorAll('.card'));
  let visible = Math.min(6, cards.length);
  function render() {
    cards.forEach((card, index) => {
      card.style.display = index < visible ? 'flex' : 'none';
    });
    loadMoreBtn.style.display = visible >= cards.length ? 'none' : 'inline-block';
  }
  render();

  loadMoreBtn.addEventListener('click', () => {
    visible = Math.min(visible + 3, cards.length);
    render();
  });
});
