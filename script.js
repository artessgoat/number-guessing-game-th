let secretNumber = Math.floor(Math.random()*100)+ 1;
  console.log("เลขปัจจุบัน:", secretNumber);
//let secretnumber คือเริ่มระบบสุ่มเลข และconsole คือโค้ดยืนยันว่าเลขสุ่มแล้ว 
document.getElementById("btn").onclick = function(){
    console.log("กดปุ่มแล้ว");
  //ตรงนี้คือโค้ดที่ระบุว่า รับข้อมูลจากปุ่ม ทายในโค้ด html และยืนยันด้วยconsole อีกทีว่าได้กดปุ่มแล้ว
  let guess = Number(
    document.getElementById("guess").value
  );
  //ข้างบนนี่คือโค้ดตำแหน่งรับข้อมูลตัวเลข
  let result = document.getElementById("result");
  if (guess < secretNumber) {
    result.textContent = "น้อยไป";
  }
  else if (guess > secretNumber) {
    result.textContent = "มากไป";
  }
  else {
    result.textContent = "ถูกต้อง! กดเริ่มใหม่เพื่อเริ่มสุ่มเลขถัดไป";
      document.getElementById("btn").disabled = true;
}
  //สามโค้ดข้างบนคือผลลัพธ์ที่เกิดขึ้นเมื่อทายตัวเลข มีตั้งแต่ น้อยกว่า มากกว่า และถูกต้อง หลังทายถูกแล้ว ปุ่มทายจะถูกปิดลงด้วยคำสั่ง disabled = true เพื่อให้กดผปุ่มเริ่มใหม่แล้วระบบจะกลับมาทำงานอีกครั้ง
  
  document.getElementById("restart").onclick = function () {
    secretNumber = Math.floor(Math.random()*100) +1;
    document.getElementById("btn").disabled = false;
    result.textContent = "";
    document.getElementById("guess").Value = "";
    console.log("เลขใหม่:",secretNumber);

  }
};