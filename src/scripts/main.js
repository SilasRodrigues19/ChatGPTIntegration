const inputQuestion = document.querySelector('#question'),
  result = document.querySelector('#result'),
  generate = document.querySelector('#generate'),
  skeleton = document.querySelector('#skeleton');

const toggleSkeletonVisibility = () => {
  skeleton.classList.toggle('hidden');
};

document.addEventListener('DOMContentLoaded', () => {
  result.disabled = true;
  toggleSkeletonVisibility();
});

const API_KEY = import.meta.env.PUBLIC_CHATGPT_API_KEY;
const OPENAI_MODEL = import.meta.env.PUBLIC_OPENAI_MODEL;
const MAX_TOKENS = import.meta.env.PUBLIC_MAX_TOKENS;
const TEMPERATURE = import.meta.env.PUBLIC_TEMPERATURE;

const sendQuestion = () => {
  let fQuestion = inputQuestion.value;
  result.value = '';
  generate.innerText = 'Waiting...';
  generate.disabled = true;
  toggleSkeletonVisibility();
  console.log(fQuestion, OPENAI_MODEL, MAX_TOKENS, TEMPERATURE);

  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      prompt: fQuestion,
      max_tokens: Number(MAX_TOKENS), // response size
      temperature: Number(TEMPERATURE), // response creativity
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.table(json);
      result.value && result.value + '\n';

      if (json.error?.message) {
        return (result.value += `Error: ${json.error.message}`);
      } else if (json.choices?.[0].text) {
        var text = json.choices[0].text || 'No answer';

        result.value += '\n' + 'Chat GPT Completions v1: ' + text;
        toggleSkeletonVisibility();
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

generate.addEventListener('click', sendQuestion);
