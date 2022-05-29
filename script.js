let listBtn = document.getElementById("list-btn");
let closeBtn = document.getElementById("close-btn");
let mobileMenu = document.getElementById("menu-mobile");

// 監聽:listBtn（list-btn）被點擊時，要做的動作
// 開/關：mobileMenu（menu-mobile）（視當下狀態做相反動作）
listBtn.onclick = () => {
  mobileMenu.classList.toggle('active');
}
closeBtn.onclick = () => {
  mobileMenu.classList.toggle('active');
}