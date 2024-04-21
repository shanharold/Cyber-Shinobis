// ################################################################################################################################################

let flag = 1;

document.addEventListener("DOMContentLoaded", function () {
  const titleText = "AI   Assistant";
  const typingSpeed = 80; // in milliseconds
  const typingTextElement = document.getElementById("typing");

  let index = 0;

  function typeTitle() {
    if (index < titleText.length) {
      typingTextElement.textContent += titleText.charAt(index);
      index++;
      setTimeout(typeTitle, typingSpeed);
    }
  }

  if (flag === 1) {
    typeTitle();
  }

  const secondTitleText = "Hi, How can I help you on today";
  const secondTypingSpeed = 50; // in milliseconds
  const secondTypingTextElement = document.getElementById("typing-2");

  let secondIndex = 0;

  function typeSecondTitle() {
    if (secondIndex < secondTitleText.length) {
      secondTypingTextElement.textContent += secondTitleText.charAt(secondIndex);
      secondIndex++;
      setTimeout(typeSecondTitle, secondTypingSpeed);
    }
  }

  if (flag === 1) {
    typeSecondTitle();
    flag = 0;
  }

  function savetask() {
    localStorage.setItem("flagkey", flag);
  }

  savetask();
});

// #######################################################################################################################################################################

let usrq = document.getElementById("user-question");

function onclk(event) {
  event.preventDefault(); // Prevent form submission and page refresh
  if (usrq.value === "") {
    alert("Can't answer an empty question");
  } else {
    // Call the query function here
    query({ question: usrq.value }).then((response) => {
      console.log(response);
      // document.write(response);
      const answ = document.getElementById("response");
      // Add your code here to handle the response, for example, displaying it in the response container
      // document.getElementById("response").textContent = response;
      answ.textContent = response.text;
    });
    localStorage.setItem("data", 1); // Setting it to 1 indicating animation played once
  }
}

document.getElementById("ask-button").addEventListener("click", onclk);

async function query(data) {
  const response = await fetch(
    "http://localhost:3000/api/v1/prediction/3e6e42b5-2753-450c-ae1c-9be19e4eee0d",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}
