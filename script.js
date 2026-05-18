const currencyEl = document.getElementById('currency');
const balanceEl = document.getElementById('balance');
const percentEl = document.getElementById('percent');
const resultEl = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
  const currency = currencyEl.value;
  const balance = parseFloat(balanceEl.value);
  const percent = parseFloat(percentEl.value);

  if (Number.isNaN(balance) || balance < 0) {
    resultEl.classList.add('empty');
    resultEl.textContent = 'Masukkan jumlah saldo yang valid.';
    return;
  }

  if (Number.isNaN(percent) || percent < 0) {
    resultEl.classList.add('empty');
    resultEl.textContent = 'Masukkan persentase yang valid.';
    return;
  }

  const pnl = (balance * percent) / 100;
  const formattedBalance = balance.toLocaleString('id-ID', { maximumFractionDigits: 2 });
  const formattedPnl = pnl.toLocaleString('id-ID', { maximumFractionDigits: 2 });

  resultEl.classList.remove('empty');
  resultEl.innerHTML = `
    <div class="result-item">
      <span>Saldo</span>
      <strong>${formattedBalance} ${currency}</strong>
    </div>
    <div class="result-item">
      <span>Persentase</span>
      <strong>${percent}%</strong>
    </div>
    <div class="result-item full">
      <strong>Hasil PnL: ${formattedPnl} ${currency}</strong>
    </div>
  `;
});
