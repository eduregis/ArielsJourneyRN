import { Colors } from "../constants/colors";

class GameplayDialogue {
  constructor(
    dialogueId,
    descriptionText,
    firstCardText,
    secondCardText,
    firstCardImageName,
    secondCardImageName,
    nextFirstDialogueId,
    nextSecondDialogueId,
    herosJourneysStage,
    soundTrigger,
    soundLoop,
    achievementTrigger,
    triggerArray,
    coloredStrings
  ) {
    this.dialogueId = dialogueId;
    this.descriptionText = descriptionText;
    this.firstCardText = firstCardText;
    this.secondCardText = secondCardText;
    this.firstCardImageName = firstCardImageName;
    this.secondCardImageName = secondCardImageName;
    this.nextFirstDialogueId = nextFirstDialogueId;
    this.nextSecondDialogueId = nextSecondDialogueId;
    this.herosJourneysStage = herosJourneysStage;
    this.soundTrigger = soundTrigger;
    this.soundLoop = soundLoop;
    this.achievementTrigger = achievementTrigger;
    this.triggerArray = triggerArray;
    this.coloredStrings = coloredStrings;
  }
}

export default GameplayDialogue;

export const GAMEPLAY_DIALOGUES = [
  new GameplayDialogue(
    0,
    "Ariel dormia profundamente quando escutou uma voz familiar…\n\n Ariel...",
    "Dormir um pouco mais",
    "Abrir os olhos",
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    1,
    2,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
  new GameplayDialogue(
    1,
    '"Vamos, dorminhoca… O café está quase pronto!"',
    "Abrir os olhos",
    "Abrir os olhos",
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    2,
    2,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
  new GameplayDialogue(
    2,
    'Ao abrir os olhos, Ariel vê que Henry, seu irmão mais velho, estava chamando da porta. Ele já estava com seu avental sujo, indicando que já estava trabalhando na forja enquanto a irmã dormia.\n\n "Bom dia! Perdeu a hora de novo?"\n\n Então Ariel responde...',
    '"Bom dia, eu tive um sonho estranho…"',
    "Revirando os Olhos",
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    3,
    3,
    "Mundo normal",
    null,
    false,
    null,
    [],
    [
      {
        stringId: 7,
        color: "green",
      },
    ]
  ),
  new GameplayDialogue(
    3,
    '"Bom, te vejo na mesa!" Henry sorri e sai do quarto.\n\n Ariel se levanta e se prepara para o dia, enquanto Henry prepara a mesa com pães e frutas.\n\n Agora vestida e desperta, Ariel…',
    "Vai tomar café com Henry",
    "Tenta sair escondida",
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    4,
    4,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
  new GameplayDialogue(
    4,
    'Quando Ariel sai de seu quarto, Henry já sentado na mesa, faz um pedido.\n\n "Ah! Depois do seu treino, você poderia avisar o Felipe que ele pode vir buscar a espada no fim da tarde?"',
    '"Felipe?"',
    '"Onde ele vai estar?"',
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    5,
    6,
    "Mundo normal",
    null,
    false,
    null,
    [],
    [
      {
        stringId: 23,
        color: "green",
      },
    ]
  ),
  new GameplayDialogue(
    5,
    '"O Felipe, esqueceu? Tio Felipe? Ele entrou pra guarda depois que…"',
    '"..."',
    '"Depois que a guerra começou."',
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    6,
    6,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
  new GameplayDialogue(
    6,
    'Henry suspira, um pouco abatido, mas logo volta a sorrir.\n\n "Ele deve estar de vigia na Torre Sul hoje! Se puder avisa-lo…"',
    '"Pode deixar" ',
    '"Certo" ',
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    7,
    7,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
  new GameplayDialogue(
    7,
    '"Obrigado, maninha. Ah, seu café está pronto!"\n\n Sobre a mesa, a caneca favorita de Ariel já estava servida com café quentinho…\n\n Ariel sente seu estômago roncar e responde…',
    '"Estou com pressa" ',
    '"Então vamos comer!" ',
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    8,
    9,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
  new GameplayDialogue(
    8,
    '"Ah..."\n\n Henry fica visivelmente triste, mas suspira.\n\n "Pelo menos leve um pão, não se pode treinar de estômago vazio!"\n\n Ariel suspira, mas aceita o pão que ele ofereceu. E logo começa a se preparar para sair.\n\n Indo para a porta, Ariel pega seu escudo e sua espada de madeira.\n\n Enquanto ela calçava suas botas, Henry se aproxima e se apoia na parede .\n\n "Ei….  Eu sei que você já é grandinha, mas por favor, se cuide."',
    '"Pode deixar!" ',
    '"Não me trate como criança." ',
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    10,
    11,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
  new GameplayDialogue(
    9,
    'Os irmãos se alimentam enquanto conversam sobre os mais diversos assuntos. Após alguns minutos, Ariel percebe que realmente precisa ir.\n\n Indo para a porta, Ariel pega seu escudo e sua espada de madeira.\n\n Enquanto ela calçava suas botas, Henry se aproxima e se apoia na parede .\n\n "Ei….  Eu sei que você já é grandinha, mas por favor, se cuide."',
    '"Pode deixar!" ',
    '"Não me trate como criança." ',
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    10,
    11,
    "Mundo normal",
    null,
    false,
    null,
    [],
    []
  ),
];

export const TEST_DIALOGUES = [
  new GameplayDialogue(
    0,
    "Ariel dormia profundamente quando escutou uma voz familiar…",
    "Dormir um pouco mais",
    "Abrir os olhos",
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    1, // ir para o dialogue referente a este id, se selecionar o primeiro card
    2, // ir para o dialogue referente a este id, se selecionar o segundo card
    "Mundo normal",
    null, // Se for ativar um som após o texto da carta aparecer por completo, colocar o nome do som aqui
    false, // Se for um som que fique repetindo, deixar como true aqui
    null, // Se tiver algum achievement para se conquistado nesse diálogo, colocar o nome dele aqui
    [], // Ativar diversos triggers, colocar o nome referente nesse array
    [
      {
        stringId: 4,
        color: "red",
      },
    ]
  ),
  new GameplayDialogue(
    1,
    "(secondText) Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Tá zoando",
    "Pode crer,",
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    2,
    3,
    "Mundo normal",
    "Ariel_soundEffect_sliderButtonReleased", // ativar som
    false,
    "prodigy", // caso chegar nesse Dialogue implique em ativar um achievement, é só colocar o nome do achievement nesse parâmetro.
    ["duchbag+1"], // caso precise aumentar o indice de duchbag, só chamar esse parâmetro com "duchbag+1", o parâmetro assim como o achievementTrigger, é opcional.
    [
      {
        stringId: 7,
        color: "green",
      },
    ]
  ),
  new GameplayDialogue(
    2,
    "(thirdText) Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Tá zoando",
    "Pode crer,",
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    3,
    3,
    "Mundo normal",
    "Ariel_soundEffect_sliderButtonReleased", // ativar som
    false,
    null,
    ["herosJourney_1"], // caso chegar nesse Dialogue implique em desbloquear um colecionável relativo a Jornada do Herói, basta colocar "herosJourney_?", com ? sendo o índice do colecionável em questão.
    []
  ),
  new GameplayDialogue(
    3,
    "(fourthText) Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Tá zoando",
    "Pode crer,",
    require("../assets/images/gameplayCards/Ariel_card_001.png"),
    require("../assets/images/gameplayCards/Ariel_card_002.png"),
    0,
    1,
    "Mundo normal",
    "Ariel_soundEffect_sliderButtonReleased", // ativar som
    false,
    null,
    ["archetype_1"], // caso chegar nesse Dialogue implique em desbloquear um colecionável relativo a Arquétipos, basta colocar "archetype_?", com ? sendo o índice do colecionável em questão.
    []
  ),
];
