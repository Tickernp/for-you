const harvestBtn = document.getElementById('harvestBtn');
const message = document.getElementById('message');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let roseCount = 0;

document.body.addEventListener('click', (e) => {
  if (roseCount < 99) {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.style.left = `${e.clientX - 40}px`;
    rose.style.top = `${e.clientY - 40}px`;
    document.body.appendChild(rose);
    roseCount++;
  }
  if (roseCount === 99) {
    harvestBtn.style.display = 'inline-block';
  }
});

harvestBtn.addEventListener('click', () => {
  const roses = Array.from(document.querySelectorAll('.rose'));
  
  const fadeOutRandomly = () => {
    if (roses.length === 0) {
      harvestBtn.style.display = 'none';
      message.style.display = 'block';
      return;
    }

    let count = Math.floor(Math.random() * 2) + 1; // หายทีละ 1 หรือ 2 ดอก
    for (let i = 0; i < count && roses.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * roses.length);
      const rose = roses[randomIndex];
      rose.classList.add('fade-out');
      roses.splice(randomIndex, 1);

      setTimeout(() => rose.style.display = 'none', 2000);
    }

    setTimeout(fadeOutRandomly, 500); // หน่วงเวลา 0.5 วินาทีต่อรอบ
  };

  fadeOutRandomly();
});

yesBtn.addEventListener('click', () => {
  message.innerHTML = `
    <h2>รักแฟนนะ ❤️ Happy Valentine</h2>
    <p>งั้นดอกไม้ทั้งหมดนี้ให้นะ อุตส่าห์เก็บมาแล้ว</p>
    <img src="https://cdn-icons-png.flaticon.com/512/6644/6644645.png" alt="ช่อดอกไม้" style="width: 150px; margin-top: 20px;" />
  `;
});

noBtn.addEventListener('click', () => {
  message.innerHTML = `
    <h2>ไม่เป็นไรเดี๋ยวมาขอใหม่ แต่ก็รักนะ ❤️ Happy Valentine</h2>
    <p>งั้นดอกไม้ทั้งหมดนี้ให้นะ อุตส่าห์เก็บมาแล้ว</p>
    <img src="https://cdn-icons-png.flaticon.com/512/6644/6644645.png" alt="ช่อดอกไม้" style="width: 150px; margin-top: 20px;" />
  `;
});