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
    "(firstText) Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Nada a ver",
    "Pô, vdd",
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
