const inputQuestion = document.querySelector("#question"),
  result = document.querySelector("#result"),
  generate = document.querySelector("#generare");

generate.addEventListener("click", (e) => {
  sendQuestion();
});

const apiKey = import.meta.env.PUBLIC_CHATGPT_API_KEY;

const sendQuestion = () => {
  let fQuestion = inputQuestion.value;

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: fQuestion,
      max_tokens: 2040, // response size
      temperature: 0.5, // response creativity
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      result.value && result.value + "\n";

      if (json.error?.message) {
        return (result.value += `Error: ${json.error.message}`);
      } else if (json.choices?.[0].text) {
        var text = json.choices[0].text || "Sem resposta";

        result.value += "\n" + "Chat GPT Completions v1: " + text;
      }

      result.scrollTop = result.scrollHeight;
    })
    .catch((error) => console.error(`Error: ${error}`))
    .finally(() => {
      inputQuestion.value = "";
      inputQuestion.disabled = false;
      inputQuestion.focus();
    });
};
