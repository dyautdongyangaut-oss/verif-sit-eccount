(function() {
  // Generate random ID (48 characters)
  function generateRandomID(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const randomID = generateRandomID(48);
  const newPath = '/' + randomID + '.html';

  // Change address bar to random code (hide real page)
  window.history.replaceState({}, '', newPath);

  // Wait 1 second, then open your real page
  setTimeout(() => {
    window.location.href = 'Yt3vQc9nLpKdGmRzWf7xBsHaJuEo4tVrPw6iS.html';
  }, 1000);
})();