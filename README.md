# QAx Mobile
## Automação mobile com Robot Framework, Appium, Python e WebdriverIO

<p align="left">
  <img src="https://img.shields.io/badge/status-reposit%C3%B3rio%20vivo-1f8b4c" alt="Status repositório vivo" />
  <img src="https://img.shields.io/badge/Robot%20Framework-000000?logo=robot-framework" alt="Robot Framework" />
  <img src="https://img.shields.io/badge/Appium-662D91?logo=appium&logoColor=white" alt="Appium" />
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/WebdriverIO-EA5906?logo=webdriverio&logoColor=white" alt="WebdriverIO" />
  <img src="https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=white" alt="Mocha" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions&logoColor=white" alt="GitHub Actions" />
</p>

> Este repositório reúne minha prática real em automação mobile no ecossistema Android. Aqui eu trabalho desde interações de interface e gestos até fluxos completos de negócio, integração com API local, preparação de massa de dados em banco e execução automatizada em CI.

Mais do que uma coleção de testes, este projeto mostra a forma como eu estruturo automação: com organização, preocupação com manutenção, visão de fluxo ponta a ponta e evolução contínua entre stacks diferentes. O resultado é um repositório que evidencia não só capacidade de automatizar, mas também de pensar o projeto de forma mais ampla: ambiente, arquitetura, dados, evidências e escalabilidade.

## Visão geral

O `QAx_Mobile` concentra diferentes trilhas de estudo, prática e evolução em automação mobile. A base principal está em **Robot Framework + Appium**, mas o repositório também registra uma transição importante para **JavaScript + WebdriverIO**, reaproveitando os mesmos cenários de negócio em outra stack para consolidar domínio técnico e versatilidade de implementação.

Na prática, este repositório cobre:

- automação de interface em Android com Appium e UiAutomator2;
- validação de tela inicial, formulários, login e navegação;
- execução de gestos como swipe, clique simples e clique longo;
- cenários de múltipla seleção, radio buttons e spinner;
- fluxo completo de tarefas com cadastro, exclusão e conclusão;
- integração com API local para suportar o comportamento do app MarkX;
- limpeza de massa de dados diretamente no MongoDB;
- geração de evidências de execução;
- execução automatizada em pipeline com emulador Android no GitHub Actions.

## Por que este projeto se destaca

Este é o tipo de projeto que mostra profundidade prática. Ele não fica preso ao básico de "clicar em botão e validar texto". O que aparece aqui é uma construção mais completa de automação mobile:

- existe cobertura de interface e também de fluxo de negócio;
- existe organização por recursos, telas, diálogos e bibliotecas auxiliares;
- existe preparação de dados para evitar dependência manual de massa;
- existe a mesma ideia de automação traduzida para duas stacks diferentes;
- existe pipeline de execução em ambiente automatizado com emulador Android;
- existe preocupação com evidência, reaproveitamento e clareza da suíte.

Em outras palavras: este repositório mostra uma automação que vai além da execução mecânica. Ele mostra raciocínio de QA, visão de arquitetura e maturidade de implementação.

## O que este projeto demonstra na prática

- capacidade de estruturar testes mobile de forma legível e escalável;
- domínio de Appium com Android Emulator e driver UiAutomator2;
- experiência com Robot Framework em cenários funcionais reais;
- transição consistente de cenários para WebdriverIO e Mocha;
- integração entre automação, API e banco para controle de dados;
- entendimento de CI para rodar testes mobile fora da máquina local;
- cuidado com organização de diretórios, separação de responsabilidades e reaproveitamento de código.

## Estrutura do repositório

```text
QAx_Mobile/
├── .github/
│   └── workflows/
│       └── yodapp-ci.yml
├── apps/
├── projects/
│   ├── appim-qax/
│   ├── markx-robot/
│   └── yodapp-robot/
├── projects-javascript/
│   ├── markx-robot/
│   └── yodapp-robot/
├── results/
├── Temp/
└── README.md
```

### Leitura rápida da estrutura

- `projects/yodapp-robot`: automação mobile em Robot Framework para o app Yodapp.
- `projects/markx-robot`: automação mobile em Robot Framework para o app MarkX, incluindo API local e integração com MongoDB para preparação de massa.
- `projects-javascript/yodapp-robot`: reimplementação dos cenários do Yodapp usando WebdriverIO e Mocha.
- `projects-javascript/markx-robot`: reimplementação dos cenários do MarkX em JavaScript, mantendo o foco em fluxo funcional e controle de dados.
- `.github/workflows/yodapp-ci.yml`: pipeline de CI para execução dos testes do Yodapp em emulador Android no GitHub Actions.
- `projects/appim-qax`: módulo experimental e de apoio, usado como área inicial de estudo e exercícios pontuais.

## Projetos em detalhe

### 1. Yodapp com Robot Framework

O módulo `projects/yodapp-robot` concentra automações voltadas ao app **Yodapp**, com foco em interações clássicas de interface mobile e em elementos muito usados no dia a dia de testes funcionais.

#### Cenários já cobertos

- validação da tela inicial do aplicativo;
- login com credenciais válidas;
- tentativa de login com credenciais inválidas;
- clique simples;
- clique longo;
- marcação de checkboxes;
- seleção de radio button;
- escolha de opções em spinner;
- navegação por menu lateral;
- swipe para remoção de item em lista.

#### Destaques técnicos

- centralização da sessão Appium em `resources/base.resource`;
- reutilização de keywords como `Start session`, `Get started`, `Navigate to` e `Go to item`;
- uso de localizadores por `id`, `xpath` e texto;
- manipulação de coordenadas para swipe;
- uso de `Tap With Positions` para clique longo;
- foco em legibilidade e reaproveitamento das ações mais comuns da aplicação.

#### Exemplos concretos que já aparecem na suíte

- login positivo com a mensagem `Boas vindas, logado você está.`;
- login negativo com a mensagem `Oops! Credenciais incorretas.`;
- seleção de níveis como `Padawan`, `Jedi`, `Sith` e `Outros` no spinner;
- remoção via swipe do item associado ao `@darthvader` na lista do app.

#### O que chama atenção aqui

Esse módulo mostra domínio das interações fundamentais de mobile automation. Não é só um "hello world" em Appium: ele passa por componentes variados da UI, cobre fluxos positivos e negativos e demonstra segurança no uso de ações mais sensíveis, como swipe e long click.

### 2. MarkX com Robot Framework

O módulo `projects/markx-robot` eleva o nível da automação ao trabalhar com o app **MarkX**, onde o foco deixa de ser apenas elemento visual e passa a incluir também **fluxo funcional completo**, **massa de dados** e **integração com backend**.

#### Cenários já cobertos

- login no aplicativo;
- cadastro de nova tarefa;
- remoção de tarefa;
- conclusão de tarefa;
- validação visual da tarefa concluída;
- limpeza prévia de massa de dados no banco antes da execução.

#### Destaques técnicos

- organização em camadas com `resources/screens`, `dialogs` e `libs`;
- uso de `Test Setup` e `Test Teardown` nas suítes;
- captura de screenshot no encerramento da sessão;
- tratamento do popup de compatibilidade do Android;
- integração com MongoDB via biblioteca Python para remover tarefas antes da execução;
- uso de API local para sustentar o fluxo do app.

#### Exemplos concretos que já aparecem na suíte

- criação da tarefa `Estudar Python`;
- remoção da tarefa `Comprar refrigerante`;
- conclusão da tarefa `Estudar Xpath`;
- preenchimento automatizado do endereço da API antes do acesso ao fluxo de tarefas.

#### O que faz este módulo ser forte

Aqui a automação deixa claro um ponto importante: eu não estou apenas automatizando tela, estou automatizando comportamento de negócio. O fluxo de tarefas do MarkX mostra preocupação real com previsibilidade do teste, preparo do estado inicial da aplicação e redução de flakiness causada por dados residuais.

### 3. Yodapp com WebdriverIO

O módulo `projects-javascript/yodapp-robot` representa a migração dos cenários do Yodapp para **JavaScript + WebdriverIO + Mocha**.

#### O que existe aqui

- reescrita dos cenários de home, login, clique, checkbox, radio, spinner e swipe;
- abstração de navegação e acesso aos fluxos em `resources/base.resource.js`;
- execução via `wdio.conf.js`;
- suporte ao serviço do Appium pelo WebdriverIO.

#### Por que isso é relevante

Esse módulo mostra capacidade de transportar a mesma lógica de testes para outra stack sem perder clareza. É um sinal forte de adaptabilidade técnica: em vez de depender de um único framework, o projeto prova que o raciocínio de automação é sólido o suficiente para ser reaplicado em outra abordagem.

### 4. MarkX com WebdriverIO

O módulo `projects-javascript/markx-robot` faz com o MarkX a mesma transição de stack, levando os cenários de login e tarefas para o universo JavaScript.

#### O que existe aqui

- suíte de login;
- suíte de tarefas com cadastro, remoção e conclusão;
- biblioteca auxiliar para limpeza de massa no MongoDB em JavaScript;
- separação entre base, diálogos e ações de telas;
- controle do ciclo do app com `beforeTest` e `afterTest`, ativando e encerrando o aplicativo entre os cenários.

#### Valor técnico deste módulo

Esse trecho do repositório reforça uma qualidade importante: consistência. Os mesmos comportamentos validados na trilha Robot também aparecem aqui em WebdriverIO, o que mostra domínio do fluxo de negócio e não apenas familiaridade com uma sintaxe específica.

### 5. Appim QAX

O módulo `projects/appim-qax` funciona como área experimental de apoio. Hoje ele mantém uma estrutura mínima com `package.json` e um APK (`qax-alpha.apk`), servindo como espaço de exploração, testes isolados e evolução futura.

Mesmo sendo a parte mais enxuta do repositório, ele ajuda a mostrar que a base não foi construída de forma estática. Existe espaço de laboratório, tentativa, aprendizado e expansão contínua.

## Arquitetura e decisões de implementação

Algumas decisões da base merecem destaque porque mostram cuidado com manutenção e legibilidade:

- as sessões Appium foram encapsuladas em recursos base, evitando repetição de setup;
- as ações do MarkX foram divididas por telas e por diálogos, deixando a suíte mais previsível;
- a preparação de massa de dados foi levada para bibliotecas auxiliares, reduzindo dependência manual;
- os cenários foram escritos de forma descritiva, aproximando automação e leitura funcional;
- a versão em JavaScript reaproveita a mesma lógica de domínio, mas com outra estratégia de implementação;
- o pipeline de CI mostra preocupação com execução automatizada fora do ambiente local.

Esse tipo de organização deixa o projeto mais limpo para evoluir, refatorar e ampliar cobertura sem transformar a automação em um conjunto de scripts soltos.

## Stack e ferramentas utilizadas

### Automação mobile

- Robot Framework
- Appium
- UiAutomator2
- Android Emulator
- Android SDK

### Linguagens e bibliotecas

- Python
- JavaScript
- WebdriverIO
- Mocha
- PyMongo
- MongoDB Node Driver

### Apoio ao ecossistema do projeto

- Node.js
- Express
- Joi
- Mongoose
- GitHub Actions

## Como executar o projeto

Como o repositório possui mais de uma trilha, a execução acontece por módulo.

### Pré-requisitos gerais

Antes de rodar qualquer uma das automações, tenha instalado e configurado:

1. Python 3.x e `pip`;
2. Node.js e `npm`;
3. Appium;
4. driver `uiautomator2` do Appium;
5. Android Studio com SDK e emulador Android;
6. um dispositivo ou emulador pronto para uso;
7. variáveis de ambiente do Android configuradas corretamente.

### Instalação base do Appium

```bash
npm install -g appium
appium driver install uiautomator2
```

### Instalação base do Robot Framework

```bash
pip install robotframework robotframework-appiumlibrary
```

### Executando o Yodapp com Robot Framework

```bash
cd projects/yodapp-robot
robot -d ./logs tests/
```

Esse módulo usa o APK `app/yodapp-beta.apk` e a sessão Appium apontada para `http://localhost:4723`.

### Executando o MarkX com Robot Framework

Primeiro, suba a API local:

```bash
cd projects/markx-robot/apps/api
npm install
npm run dev
```

Em outro terminal, deixe o Appium em execução:

```bash
appium
```

Depois execute os testes:

```bash
cd projects/markx-robot
pip install -r requirements.txt
robot -d ./logs tests/
```

### Executando o Yodapp com WebdriverIO

```bash
cd projects-javascript/yodapp-robot
npm install
npm test
```

### Executando o MarkX com WebdriverIO

Primeiro garanta que a API local do MarkX esteja ativa:

```bash
cd projects/markx-robot/apps/api
npm install
npm run dev
```

Depois execute os testes em JavaScript:

```bash
cd projects-javascript/markx-robot
npm install
npm test
```

## Observações importantes de ambiente

Algumas configurações atuais refletem o ambiente em que o projeto foi montado e podem precisar de ajuste quando a execução for feita em outra máquina:

- o `udid` do emulador está configurado para `emulator-5554` em parte das suítes;
- o app MarkX utiliza um IP de API definido nas resources, então esse valor pode precisar ser atualizado conforme a rede local;
- a preparação de massa do MarkX depende de conexão com MongoDB, então a configuração de banco deve ser ajustada conforme a instância utilizada;
- a trilha JavaScript do MarkX espera o APK localizado em `projects/markx-robot/apps/markx.apk`.

Esses pontos não diminuem o projeto. Pelo contrário: mostram que ele já trabalha com condições reais de ambiente, integração e infraestrutura de teste. Ainda assim, uma evolução natural da base é externalizar essas configurações cada vez mais para variáveis e arquivos próprios de ambiente.

## Evidências de execução

Na trilha Robot Framework, as execuções geram artefatos importantes para análise dos testes:

- `log.html`
- `report.html`
- `output.xml`

Esses arquivos permitem acompanhar o passo a passo da execução, validar o comportamento dos cenários e registrar evidências de forma clara.

No MarkX com Robot Framework, também existe captura de screenshot no encerramento da sessão, reforçando a preocupação com rastreabilidade do teste.

## Integração contínua

O repositório possui pipeline em `.github/workflows/yodapp-ci.yml` para execução dos testes do Yodapp em ambiente automatizado.

### O que esse workflow faz

- dispara em `push` para a branch `main`;
- configura Node.js 18;
- instala as dependências do projeto `projects-javascript/yodapp-robot`;
- sobe um emulador Android com `reactivecircus/android-emulator-runner`;
- executa os testes mobile em CI.

### Detalhes técnicos do workflow

- ambiente `macos-13`;
- Android API Level 29;
- arquitetura `x86_64`;
- profile `Nexus 6`;
- animações desabilitadas para dar mais estabilidade.

Esse ponto é especialmente relevante porque mostra que a automação não foi pensada só para funcionar localmente. Existe preocupação com repetibilidade, integração e validação em fluxo automatizado.

## O que eu considero mais forte neste repositório

Se eu tivesse que resumir a força deste projeto em poucas linhas, eu destacaria cinco pontos:

1. ele mostra automação mobile com boa cobertura de interações e fluxos de negócio;
2. ele mostra organização real de projeto, e não apenas testes espalhados;
3. ele mostra integração com API e banco para controlar o estado da aplicação;
4. ele mostra adaptação entre Robot Framework e WebdriverIO;
5. ele mostra execução automatizada em pipeline com emulador Android.

É exatamente esse conjunto que torna a base madura, interessante e tecnicamente consistente.

## Próximos passos naturais de evolução

Como todo repositório vivo, esta base ainda pode crescer bastante. Algumas evoluções naturais são:

- externalização completa de configurações sensíveis e variáveis de ambiente;
- expansão da cobertura negativa e de regras de negócio;
- inclusão de relatórios centralizados para a trilha JavaScript;
- ampliação da CI para outros módulos do repositório;
- parametrização mais flexível para dispositivos e ambientes diferentes.

Esses próximos passos não significam falta de maturidade. Eles mostram que a base já tem estrutura suficiente para evoluir de forma organizada.

## Fechamento

Este repositório representa muito bem a forma como eu gosto de construir automação: com clareza, intenção e senso de produto. Aqui existe técnica, mas também existe cuidado com estrutura, repetibilidade, manutenção e visão de longo prazo.

É um projeto que mostra prática de verdade, repertório de ferramenta, contato com problemas reais de ambiente e uma evolução muito visível entre stacks e níveis de complexidade. Para mim, esse é justamente o valor mais forte desta base.
