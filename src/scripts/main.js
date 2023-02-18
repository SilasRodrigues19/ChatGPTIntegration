const inputQuestion = document.querySelector('#question'),
  result = document.querySelector('#result'),
  generate = document.querySelector('#generate');

document.addEventListener('DOMContentLoaded', () => {
  result.disabled = true;
});

generate.addEventListener('click', (e) => {
  sendQuestion();
});

const apiKey = import.meta.env.PUBLIC_CHATGPT_API_KEY;

const sendQuestion = () => {
  let fQuestion = inputQuestion.value;

  generate.innerText = 'Waiting...';
  generate.disabled = true;

  console.log(fQuestion);

  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + apiKey,
    },
    body: JSON.stringify({
      model: import.meta.env.OPENAI_MODEL,
      prompt: fQuestion,
      max_tokens: import.meta.env.MAX_TOKENS, // response size
      temperature: import.meta.env.TEMPERATURE, // response creativity
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      result.value && result.value + '\n';

      if (json.error?.message) {
        return (result.value += `Error: ${json.error.message}`);
      } else if (json.choices?.[0].text) {
        var text = json.choices[0].text || 'No answer';

        result.value += '\n' + 'Chat GPT Completions v1: ' + text;
      }

      result.scrollTop = result.scrollHeight;
    })
    .catch((error) => console.error(`Error: ${error}`))
    .finally(() => {
      inputQuestion.disabled = false;
      generate.innerText = 'Send';
      generate.disabled = false;
      inputQuestion.focus();
    });
};
