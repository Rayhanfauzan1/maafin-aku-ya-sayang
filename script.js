const message = `Nadya,\n
Aku nulis ini karena aku bener-bener nyesel dan ngerasa salah sama kamu.\n
Aku sadar aku udah bikin kamu kecewa, bikin kamu sedih, dan aku sadar aku salah.\n
Aku tau kata maaf aja nggak cukup, tapi aku mau kamu tau kalau aku serius minta maaf.\n
Aku sering mementingkan ego aku, sering nggak mikirin perasaan kamu, dan itu semua salah aku.\n
Maafin aku kalo selama ini aku gak bisa treat kamu dengan baik, aku coba usahain.\n
Aku minta maaf karena udah bikin luka yang nggak seharusnya kamu rasain.\n
Aku minta maaf karena nggak jadi tempat yang nyaman buat kamu selama ini.\n
Aku sayang banget sama kamu, dan aku nggak mau kehilangan kamu.\n
Aku minta maaf, Nadya. Dari lubuk hati aku yang paling dalam.
.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
