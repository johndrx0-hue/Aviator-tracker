function activate() {
  const code = document.getElementById('activationCode').value.trim();
  if (code === '9359Aviator') {
    alert('✅ Activation successful!');
  } else {
    alert('❌ Invalid activation code.');
  }
}

document.getElementById('addRound').addEventListener('click', () => {
  const roundList = document.getElementById('roundsList');
  const li = document.createElement('li');
  li.textContent = `Round ${roundList.children.length + 1}: You can log your results here.`;
  roundList.appendChild(li);
});