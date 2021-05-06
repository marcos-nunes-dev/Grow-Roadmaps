# Então você quer contribuir? :fire:

Lista completa de funcionalidades do App em [Functionalities.md](https://github.com/MarcosRenato266/Grow-Roadmaps/blob/master/docs/Functionalities.md).

## Stack e libs utilizada:  :bookmark_tabs:

Front-end:
`React(Next.js), Context, Styled Components, Styled System, Typescript, Antd e Testing Library` quer usar algo mais? Adicione a biblioteca e ao enviar seu `PR` não deixe de descrever o motivo e os benefícios. 

Back-end: 
-

Design:
`Café, Criatividade, Referências, Muitas cores e Amor`

## Como começar: :mag:

 1. Acesse o board de tarefas e escolha uma.
 2. Faça um `Fork` do repositório para o seu próprio GitHub.
 3. Instale as dependências `yarn`
 4. Para executar o projeto `yarn dev`

## Considerações: :hocho:
Para mantermos um projeto organizado aqui vai algumas considerações:

 1. Mantenha seu código sempre organizado e limpo
 2. Comente sempre que necessário seu código
 3. Faça boas descrições em seus `Commits` e `PRs`
 4. Crie um `PR` para cada `Fix, Bug, Enhancement ou melhoria`

## Siga nossos boards :name_badge:
Todas as tarefas serão organizadas e separadas por área na aba `Projects` do GitHub. 
Ao iniciar o trabalho em uma feature arraste pra a coluna de `In Progress`

## Novas Features? :bulb:
Teve ideia de novas features? Primeiro pense que o projeto tem a ideia de ser bem especifico com seu propósito, não temos a intenção de "atirar para todos os lados". Se sua ideia estiver de acordo com a nossa paixão crie um `enhancement` nas `issues` e vamos trabalhar! 

## Definições de contribuição

### Padrão de Commit e PR

| Abreviado               |Ação                          |Descrição                         |
|----------------|-------------------------------|-----------------------------|
|feat|feature            |Nova funcionalidade ou etapa do projeto |
|fix      |hotfix            |Correções em geral            |
|refactor   |refactor  |Refatoração de projeto   |
|test |test  |Configuração/Codigo de testes E2E ou TU   |
|revert |revert  |Revert ou cherrypick de git|
|docs |docs  |Modificação na documentação|
|style |style  |Mudança de estilo (ponto, vírgula, indentação)|
|build |build  |Mudanças que afetam o build ou dependências exeternas (yarn, npm)|
|chore |chore  |Outras mudanças que não são nos arquivos de src ou test|

**O padrão deve ser criado seguindo a tabela a cima no seguinte modelo:**
`CATEGORIA/#[ID_DO_CARD_PROJECTS]-DESC = EX: feat/#132-new-feature`


**Baseado na mesma tabela a cima o commit deve seguir padrão:**
`CATEGORIA(#ID_DO_CARD_PROJECTS): DESCRIÇÃO = EX: feat(#132): alterações de componente`

----------

# Oque é Gitflow?

*Gitflow Workflow é um design de fluxo de trabalho Git. O Gitflow define um modelo de ramificação rigoroso projetado com base no lançamento do projeto. Isto oferece uma estrutura robusta para gerenciar projetos maiores.*

![gitflow](https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20%282%29.svg?cdnVersion=1539)

## Convensão de Commit e Vantagens:
- Geração automática de CHANGELOGs.
- Determina automaticamente um aumento de versão semântica.
- Deixa clara a natureza da mudança aos colegas de equipe.
- Integração com Azure em movimento de cards e links com working Itens.



# Pull Requests

Cada novo Working Item deve corresponder a uma branch nova de feature. Essas branchs ao serem finalizadas devem ser enviadas (efetuado o pull request) para a branch Develop e necessário o review e aprovação de ao menos **duas** pessoas. Ao final do processo a branch `develop` deve ser enviada para `master`.
