import GameplayStage from "./gameplayStage";

// caso precise aumentar o indice de duchbag, só chamar o parâmetro "triggerArray" com "duchbag+1", o parâmetro assim como o achievementTrigger, é opcional.
// caso chegar num certo Dialogue implique em desbloquear um colecionável relativo a Jornada do Herói, basta colocar "herosJourney_?", com ? sendo o índice do colecionável em questão.
// caso chegar nesse Dialogue implique em desbloquear um colecionável relativo a Arquétipos, basta colocar "archetype_?", com ? sendo o índice do colecionável em questão.

export const GAMEPLAY_ORDINARYWORLD_DIALOGUES: GameplayStage = {
  "stageId": 1,
  "descriptionText": "OrdinaryWorld",
    "dialogues": [
    {
      "dialogueId": 0, // id do diálogo
      "descriptionText": "Ariel dormia profundamente quando escutou uma voz familiar…\n\n Ariel...", // texto do cartão central
      "firstCardText": "Dormir um pouco mais", // texto da primeira carta
      "secondCardText": "Abrir os olhos", // texto da segunda carta
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"), // nome da imagem da primeira carta, trocar apenas Ariel_card_001
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"), // nome da imagem da segunda carta
      "nextFirstDialogueId": 1, // ir para o dialogue referente a este id, se selecionar o primeiro card
      "nextSecondDialogueId": 2, // ir para o dialogue referente a este id, se selecionar o segundo card
      "soundTrigger": null, // Se for ativar um som após o texto da carta aparecer por completo, colocar o nome do som aqui
      "soundLoop": false, // Se for um som que fique repetindo, deixar como true aqui
      "achievementTrigger": null, // Ativar diversos triggers, colocar o nome referente nesse array
      "triggerArray": [], // Se tiver algum achievement para se conquistado nesse diálogo, colocar o nome dele aqui
      "coloredStrings": [] // Se tiver alguma cor em uma palavra, colocar a cor e index da palavra aqui
    },
    {
      "dialogueId": 1,
      "descriptionText": '"Vamos, dorminhoca… O café está quase pronto!"',
      "firstCardText": "Abrir os olhos",
      "secondCardText": "Abrir os olhos",
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 2,
      "nextSecondDialogueId": 2,
      "soundTrigger": require("../assets/sounds/Ariel_sound_dialogue001.mp3"),
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": ["archetype_1"],
      "coloredStrings": []
    },
    {
      "dialogueId": 2,
      "descriptionText": 'Ao abrir os olhos, Ariel vê que Henry, seu irmão mais velho, estava chamando da porta. Ele já estava com seu avental sujo, indicando que já estava trabalhando na forja enquanto a irmã dormia.',
      "firstCardText": "",
      "secondCardText": "",
      "firstCardImageName": null,
      "secondCardImageName": null,
      "nextFirstDialogueId": 3,
      "nextSecondDialogueId": 3,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": ["herosJourney_1"],
      "coloredStrings": [
        {
          stringId: 7,
          color: "green",
        }, // Exemplo de aplicação de coloração de palavra
      ]
    },
    {
      "dialogueId": 3,
      "descriptionText": '"Bom dia! Perdeu a hora de novo?"\n\n Então Ariel responde...',
      "firstCardText": '"Bom dia, eu tive um sonho estranho…"',
      "secondCardText": "Revirando os Olhos",
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 4,
      "nextSecondDialogueId": 4,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 4,
      "descriptionText": '"Bom, te vejo na mesa!" Henry sorri e sai do quarto.\n\n Ariel se levanta e se prepara para o dia, enquanto Henry prepara a mesa com pães e frutas.\n\n Agora vestida e desperta, Ariel…',
      "firstCardText": "Vai tomar café com Henry",
      "secondCardText": "Tenta sair escondida",
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 5,
      "nextSecondDialogueId": 5,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 5,
      "descriptionText": 'Quando Ariel sai de seu quarto, Henry já sentado na mesa, faz um pedido.\n\n "Ah! Depois do seu treino, você poderia avisar o Felipe que ele pode vir buscar a espada no fim da tarde?"',
      "firstCardText": '"Felipe?"',
      "secondCardText": '"Onde ele vai estar?"',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 6,
      "nextSecondDialogueId": 7,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": [
        {
          stringId: 23,
          color: "green",
        },
      ]
    },
    {
      "dialogueId": 6,
      "descriptionText": '"O Felipe, esqueceu? Tio Felipe? Ele entrou pra guarda depois que…"',
      "firstCardText": '"..."',
      "secondCardText": '"Depois que a guerra começou."',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 7,
      "nextSecondDialogueId": 7,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 7,
      "descriptionText": 'Henry suspira, um pouco abatido, mas logo volta a sorrir.\n\n "Ele deve estar de vigia na Torre Sul hoje! Se puder avisa-lo…"',
      "firstCardText": '"Pode deixar" ',
      "secondCardText": '"Certo" ',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 8,
      "nextSecondDialogueId": 8,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 8,
      "descriptionText": '"Obrigado, maninha. Ah, seu café está pronto!"\n\n Sobre a mesa, a caneca favorita de Ariel já estava servida com café quentinho…\n\n Ariel sente seu estômago roncar e responde…',
      "firstCardText": '"Estou com pressa" ',
      "secondCardText": '"Então vamos comer!" ',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 9,
      "nextSecondDialogueId": 10,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 9,
      "descriptionText": '"Ah..."\n\n Henry fica visivelmente triste, mas suspira.\n\n "Pelo menos leve um pão, não se pode treinar de estômago vazio!"\n\n Ariel suspira, mas aceita o pão que ele ofereceu. E logo começa a se preparar para sair.\n\n Indo para a porta, Ariel pega seu escudo e sua espada de madeira.\n\n Enquanto ela calçava suas botas, Henry se aproxima e se apoia na parede .\n\n "Ei….  Eu sei que você já é grandinha, mas por favor, se cuide."',
      "firstCardText": '"Pode deixar!" ',
      "secondCardText": '"Não me trate como criança." ',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 0,
      "nextSecondDialogueId": 0,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 10,
      "descriptionText": 'Os irmãos se alimentam enquanto conversam sobre os mais diversos assuntos. Após alguns minutos, Ariel percebe que realmente precisa ir.\n\n Indo para a porta, Ariel pega seu escudo e sua espada de madeira.\n\n Enquanto ela calçava suas botas, Henry se aproxima e se apoia na parede .\n\n "Ei….  Eu sei que você já é grandinha, mas por favor, se cuide."',
      "firstCardText": '"Pode deixar!" ',
      "secondCardText": '"Não me trate como criança." ',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 0,
      "nextSecondDialogueId": 0,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
  ],
  "nextStageId": 0,
  "backgroundImage": require("../assets/ui/Ariel_gameplay_bkg_001.png")
}

export const GAMEPLAY_CALLTOADVENTURE__DIALOGUES: GameplayStage = {
  "stageId": 0,
  "descriptionText": "OrdinaryWorld",
    "dialogues": [
      {
      "dialogueId": 0, // id do diálogo
      "descriptionText": "Teste…\n\n Ariel...", // texto do cartão central
      "firstCardText": "Dormir um pouco mais", // texto da primeira carta
      "secondCardText": "Abrir os olhos", // texto da segunda carta
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"), // nome da imagem da primeira carta, trocar apenas Ariel_card_001
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"), // nome da imagem da segunda carta
      "nextFirstDialogueId": 1, // ir para o dialogue referente a este id, se selecionar o primeiro card
      "nextSecondDialogueId": 0, // ir para o dialogue referente a este id, se selecionar o segundo card
      "soundTrigger": null, // Se for ativar um som após o texto da carta aparecer por completo, colocar o nome do som aqui
      "soundLoop": false, // Se for um som que fique repetindo, deixar como true aqui
      "achievementTrigger": null, // Ativar diversos triggers, colocar o nome referente nesse array
      "triggerArray": [], // Se tiver algum achievement para se conquistado nesse diálogo, colocar o nome dele aqui
      "coloredStrings": [] // Se tiver alguma cor em uma palavra, colocar a cor e index da palavra aqui
    },
    {
      "dialogueId": 1,
      "descriptionText": "Teste 2…\n\n Ariel...",
      "firstCardText": "Dormir um pouco mais",
      "secondCardText": "Abrir os olhos", 
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 0, 
      "nextSecondDialogueId": 0,
      "soundTrigger": null,
      "soundLoop": false, 
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
  ]
  ,
  "nextStageId": 1,
  "backgroundImage": require("../assets/ui/Ariel_gameplay_bkg_002.png")
}