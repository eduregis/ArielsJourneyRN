class HerosJourney {
  constructor(id, herosJourneysStage, imageName, descriptionText) {
    this.id = id;
    this.herosJourneysStage = herosJourneysStage;
    this.descriptionText = descriptionText;
    this.imageName = imageName;
  }
}

export default HerosJourney;

export const HEROS_JOURNEY = [
  new HerosJourney(
    0,
    "Mundo normal",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    1,
    "Chamado para a aventura",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    2,
    "Recusa do chamado",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    3,
    "Conhecendo o Mentor",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    4,
    "Cruzando o Limiar",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    5,
    "Testes, Aliados, Inimigos",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    6,
    "Aproximação à Caverna Oculta",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    7,
    "Provação",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    8,
    "Recompensa (Agarrar a Espada)",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    9,
    "O caminho de volta",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    10,
    "Ressurreição",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new HerosJourney(
    11,
    "Retorno com o Elixir",
    require("../assets/images/herosJourneyCards/herosJourneyCard_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
];
