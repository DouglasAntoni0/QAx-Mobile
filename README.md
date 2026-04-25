# Projeto Avançado de Automação Mobile (Em Desenvolvimento) 📱🤖

Bem-vindo(a) ao repositório deste **projeto avançado de automação mobile!**

Gostaria de destacar que todo o conteúdo desenvolvido aqui faz parte prática de um curso avançado focado em automação de testes mobile utilizando **Robot Framework** com **Appium** que estou realizando atualmente.

<p align="left">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow.svg" alt="Status" />
  <img src="https://img.shields.io/badge/Robot%20Framework-000000.svg?logo=robot-framework" alt="Robot Framework" />
  <img src="https://img.shields.io/badge/Appium-662d91.svg?logo=appium&logoColor=white" alt="Appium" />
  <img src="https://img.shields.io/badge/Python-3776AB.svg?logo=python&logoColor=white" alt="Python" />
</p>

---

## 🎯 Objetivo e Propósito Profissional

O objetivo de manter este repositório público é documentar minha jornada de aprendizado, exercitar os conceitos ensinados em aula e apresentar minha evolução técnica. Dessa forma, profissionais da área de tecnologia e lideranças que visitarem meu perfil podem acompanhar meu progresso prático, a construção do meu conhecimento e minha dedicação na área de **Qualidade de Software (QA)**.

**Status do Projeto:** 🚧 *Em desenvolvimento / Ainda não finalizado*

> *O código será constantemente refatorado e expandido conforme o avanço nos módulos de estudo.*

---

## 🛠️ Tecnologias Utilizadas

- **[Robot Framework](https://robotframework.org/):** Framework genérico de automação open-source utilizado principalmente para testes de aceitação e RPA, com uma sintaxe fácil e voltada a keywords e linguagem natural.
- **[Appium](https://appium.io/):** Ferramenta de automação de código aberto para testar aplicações nativas, híbridas e web móveis.
- **Python:** Linguagem base da stack e em que as bibliotecas do Robot rodam.
- **UiAutomator2:** Driver oficial do Appium para testes nativos no Android.
- **Node.js (API Locais):** Utilizado em alguns projetos (como o MarkX) para simular o back-end via APIs locais para consumo e preparação da massa de dados dos testes.
- **MongoDB & PyMongo:** Utilizados para interação direta com o banco de dados (NoSQL) a fim de preparar e limpar a massa de dados nos testes (como o reset de tarefas no App MarkX).

---

## 📁 Estrutura Organizada do Projeto

O repositório está subdividido para acompanhar de forma modular o andamento dos estudos, localizados em `projects/`:

- 📂 **`projects/yodapp-robot`**: Automações direcionadas ao app *Yodapp*. Aqui concentram-se interações elementares e avançadas com a interface (Swipes, Radio Buttons, Checkboxes, Long Clicks, etc).
- 📂 **`projects/markx-robot`**: Testes focados no *MarkX*, abrangendo jornadas maiores como testes de login e o **fluxo completo de gestão de tarefas (Cadastro, Exclusão e Conclusão de tarefas)**. Inclui também consumo de API (Node.js) e manipulação direta do banco de dados **MongoDB** (via PyMongo) para controle da massa de dados.
- 📂 **`projects/appim-qax`**: Introdução, projetos de fixação ou experimentos separados do curso.

*(A arquitetura interna dentro de cada projeto de automação busca dividir as responsabilidades em diretórios como `tests/` para as suítes, `resources/` para keywords/variáveis, `apps/` para os artefatos `apk` e `logs/` para exportação de evidências)*

---

## 🚀 Como Executar os Testes na sua Máquina

### 📌 Pré-requisitos (Ambiente Mobile)

Para explorar ou rodar este projeto, construa o ambiente instalando:

1. **Python 3.x** e pip.
2. O framework e sua library Appium:
   ```bash
   pip install robotframework robotframework-appiumlibrary
   ```
3. O Servidor Appium e seus Drivers. Recomenda-se instalação via NPM (Node.js):
   ```bash
   npm install -g appium
   appium driver install uiautomator2
   ```
4. **Emulador Android** (configurado pelo Android Studio) com SDK Android properly configured nas System Variables (`ANDROID_HOME`), ou dispositivo físico com modo de depuração ativado.

### ⚙️ Execução

Certifique-se de que o **emulador/dispositivo está pronto e reconhecido** e deixe o o **Appium server ativado** em um terminal `appium`.

Em seguida, em outro terminal:

```bash
# 1. Navegue até o diretório do projeto que deseja testar
cd projects/yodapp-robot/

# 2. Dispare a execução dos testes
robot -d ./logs tests/
```

> 💡 **Visualizando as Evidências:** Ao final do comando, você encontrará na pasta `logs/` os arquivos `log.html` e `report.html`. Basta abri-los em seu navegador para ver o passo a passo com marcações e screenshots amigáveis gerados pelo Robot!

---

**Agradeço a visita!** ⭐

Sinta-se à vontade para acompanhar a evolução dos scripts e analisar minha forma de testar e pensar.
Se tiver algum *feedback*, sugestão ou dúvidas, adorarei recebê-lo! 🤝✨
