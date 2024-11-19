import GameplayStage from "../gameplayStage"

export const GAMEPLAY_REFUSALOFTHECALL_FOREST_DIALOGUES: GameplayStage = {
    "stageId": 8,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Ariel adentra a floresta, seu coração acelerado enquanto avança. Seja em silêncio ou correndo, ela segue os sons até chegar a uma clareira. O luar filtra-se entre as árvores, revelando uma figura esguia e encapuzada, extremamente alta e de aspecto esquelético. O homem carrega Henry inconsciente sobre os ombros, como se ele fosse um mero fardo.',
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 1
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Ariel observa, horrorizada, o rosto do estranho: uma cicatriz longa e irregular atravessa sua face, deformando-o em uma expressão perversa. Antes que ela possa reagir, os olhos do homem encontram os dela. Ele ergue uma das mãos, da qual emana uma energia escura e pulsante.\n\nAriel sente um peso opressor sobre seu corpo, como se suas forças estivessem sendo sugadas. O mundo ao seu redor começa a girar, e suas pernas fraquejam. Em questão de segundos, sua visão se torna turva, e a última coisa que vê é o rosto ameaçador do estranho antes de tudo se apagar, mergulhando-a na escuridão.',
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 2
      },
    ],
    "nextStageId": 9,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_002.png")
  }

  export const GAMEPLAY_REFUSALOFTHECALL_MUNISHOUSE_DIALOGUES: GameplayStage = {
    "stageId": 9,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Aos poucos, Ariel começa a recobrar a consciência. Ela sente um calor confortável ao redor e o cheiro de ervas e raízes sendo cozidas. Abrindo os olhos, percebe um ambiente acolhedor e iluminado pelo fogo suave. Perto dela, está um homem idoso de aparência gentil, cabelos brancos em longas tranças e olhos profundos. Ele mexe uma grande panela com um líquido espesso, soprado o vapor com um sorriso leve.\n\n— Ah, finalmente acordou! — ele diz, a voz suave e animada. — Espero que goste de sopa! Fiz uma especial pra você.\n\nMuni coloca uma tigela de sopa fumegante nas mãos de Ariel.',
        "firstCardText": '“Obrigado… Muni, certo? Por me ajudar.”',
        "secondCardText": '“Onde estou? Quem é você?”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 2
      },
    ],
    "nextStageId": 10,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_002.png")
  }