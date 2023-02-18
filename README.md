[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<samp>
<p align="center">
  <a href="https://github.com/SilasRodrigues19/ChatGPTIntegration">
    <img src="./public/favicon.svg" alt="Logo" width="100" height="80">
  </a>

  <h3 align="center">GPT3 Chat Integration</h3>

  <p align="center">
    This project contains code for integrating with the OpenAI API to power a conversational ChatBot using the GPT-3 Language Model.
    <br />
    <a href="https://gpt-3-chat-two.vercel.app/">Demo</a>
    <a href="https://github.com/SilasRodrigues19/ChatGPTIntegration/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Preview][product-screenshot]](https://gpt-3-chat-two.vercel.app/)<hr>

This project was developed to learn how to integrate with the OpenAI API and build a chat using Natural Language.

How to use:

- **Pergunta**: write your question and click the "Send" button for GPT-3 to answer you.
- **Resultado**: in this text area, your answer will be displayed.

### Built With

Technologies used in the project.

### Frameworks

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com)

### API

- [Open AI Completions Endpoint](https://platform.openai.com/docs/guides/completion/introduction)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

1. Create an account on OpenAI in the link below

```sh
https://beta.openai.com/signup
```

2. Log in to OpenAI and access the following link to get your API Key

```sh
https://platform.openai.com/account/api-keys
```

3. Copy the `Secret Key` code that will be used in the .env.example file

```sh
PUBLIC_CHATGPT_API_KEY=YOUR_SECRET_KEY
```

4. Rename the `.env.example` file to `.env` and restart the application

### Installation

1. Open the terminal and clone the repo
   ```sh
   git clone https://github.com/SilasRodrigues19/ChatGPTIntegration.git
   ```
2. Access the folder with `cd ChatGPTIntegration`

3. Install dependencies
   ```sh
   npm install
   ```
4. In the project directory, you can run with the following command:
   ```sh
   npm start
   ```
5. Open the link below to view the app it in your browser.
   ```sh
     http://localhost:3000
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Silas Rodrigues - [@jinuye1](https://twitter.com/jinuye1) - silasrodrigues.fatec@gmail.com

Project Link: [https://github.com/SilasRodrigues19/ChatGPTIntegration](https://github.com/SilasRodrigues19/ChatGPTIntegration) <br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SilasRodrigues19/ChatGPTIntegration.svg?style=for-the-badge
[contributors-url]: https://github.com/SilasRodrigues19/ChatGPTIntegration/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/ChatGPTIntegration.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/ChatGPTIntegration/network/members
[stars-shield]: https://img.shields.io/github/stars/SilasRodrigues19/ChatGPTIntegration.svg?style=for-the-badge
[stars-url]: https://github.com/SilasRodrigues19/ChatGPTIntegration/stargazers
[issues-shield]: https://img.shields.io/github/issues/SilasRodrigues19/ChatGPTIntegration.svg?style=for-the-badge
[issues-url]: https://github.com/SilasRodrigues19/ChatGPTIntegration/issues
[license-shield]: https://img.shields.io/github/license/SilasRodrigues19/ChatGPTIntegration.svg?style=for-the-badge
[license-url]: https://github.com/SilasRodrigues19/ChatGPTIntegration/blob/master/LICENSE
[license-url]: https://github.com/SilasRodrigues19/ChatGPTIntegration/blob/master/LICENSE.txt
[product-screenshot]: ./public/screenshots/preview.png

<br><hr>
[🔼 Back to top](#GPT3-Chat-Integration)
