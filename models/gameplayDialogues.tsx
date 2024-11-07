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
      "firstCardText": '"Estou com pressa"',
      "secondCardText": '"Então vamos comer!"',
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
      "descriptionText": '“Estou com pressa,” ela disse, apressando-se a tomar um gole.\n“Ah…” Henry olhou para ela com uma leve frustração, mas logo se recompôs. “Pelo menos leve um pão, não se pode treinar de estômago vazio!”\n\n“Por que você se preocupa tanto? Eu consigo me cuidar,” Ariel respondeu, a determinação em sua voz misturando-se com a gratidão.\n\n“Eu sei que você consegue, mas… a guerra está lá fora. Precisamos cuidar um do outro, Ariel.” Ele hesitou, olhando para a janela onde o céu começava a clarear. “Muitos dos nossos amigos e vizinhos foram. Você sabe que não podemos nos dar ao luxo de perder mais ninguém.”',
      "firstCardText": '"“Você está certo, eu vou me cuidar.”',
      "secondCardText": ' “É só um treino, não vou me arriscar.”',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 11,
      "nextSecondDialogueId": 11,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 10,
      "descriptionText": 'Assim que terminavam o café, ela percebeu que realmente precisava ir.\n\nIndo para a porta, Ariel pegou seu escudo e sua espada de madeira. Enquanto calçava suas botas, Henry se aproximou, apoiando-se na parede.\n\n"Ei… Eu sei que você já é grandinha, mas por favor, se cuide."',
      "firstCardText": '"Pode deixar!" ',
      "secondCardText": '"Não me trate como criança." ',
      "firstCardImageName": require("../assets/images/gameplayCards/Ariel_card_001.png"),
      "secondCardImageName": require("../assets/images/gameplayCards/Ariel_card_002.png"),
      "nextFirstDialogueId": 12,
      "nextSecondDialogueId": 12,
      "soundTrigger": null,
      "soundLoop": false,
      "achievementTrigger": null,
      "triggerArray": [],
      "coloredStrings": []
    },
    {
      "dialogueId": 11,
      "descriptionText": 'Henry assentiu, um sorriso aliviado surgindo em seu rosto. “Eu só quero que você volte para casa, e que eu possa te ouvir reclamar das aulas de combate.”\n\nOs irmãos se alimentaram enquanto conversavam sobre os mais diversos assuntos, desde as novas armas que Henry estava forjando até os rumores da guerra que chegavam até a vila.\n\n“Você viu os novos recrutas? Parecem tão inexperientes…” Ariel comentou, um fio de preocupação em sua voz.\n\n“Eles estão tentando. Cada um deles é como você, tentando fazer a diferença,” Henry respondeu, sua voz encorajadora. “Mas você precisa se lembrar que também é importante cuidar de si mesma. A guerra não é um jogo.”\n\nAriel assentiu, sabendo que ele estava certo.',
      "firstCardText": '',
      "secondCardText": '',
      "firstCardImageName": null,
      "secondCardImageName": null,
      "nextFirstDialogueId": 10,
      "nextSecondDialogueId": 10,
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