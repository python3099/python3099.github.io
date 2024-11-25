// 改变背景颜色的函数
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 显示/隐藏图片的函数
const toggleImageButton = document.getElementById('toggleImageButton');
const aboutImage = document.getElementById('aboutImage');
toggleImageButton.addEventListener('click', function () {
  if (aboutImage.style.display === 'none') {
    aboutImage.style.display = 'block';
  } else {
    aboutImage.style.display = 'none';
  }
});

// 添加新服务的函数
const addServiceButton = document.getElementById('addServiceButton');
const newServiceInput = document.getElementById('newServiceInput');
const servicesList = document.getElementById('servicesList');
addServiceButton.addEventListener('click', function () {
  if (newServiceInput.value) {
    const newServiceItem = document.createElement('li');
    newServiceItem.textContent = newServiceInput.value;
    newServiceItem.style.padding = '10px';
    newServiceItem.style.background = '#f9f9f9';
    newServiceItem.style.borderLeft = '5px solid #007BFF';
    servicesList.appendChild(newServiceItem);
    newServiceInput.value = '';
  }
});

// 提交留言表单的验证和提交处理（这里只是简单示例，实际可能需要更多后端处理等）
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('留言已提交，感谢您的反馈！');
    // 这里可以添加更多代码，比如通过AJAX将数据发送到后端等
  } else {
    alert('请填写完整的姓名、邮箱和留言内容。');
  }
});