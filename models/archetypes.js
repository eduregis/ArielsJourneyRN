class Archetypes {
  constructor(
    id,
    archetypeStage,
    imageName,
    emptyIcon,
    fullIcon,
    descriptionText
  ) {
    this.archetypeStage = archetypeStage;
    this.imageName = imageName;
    this.emptyIcon = emptyIcon;
    this.fullIcon = fullIcon;
    this.descriptionText = descriptionText;
  }
}

export default Archetypes;

export const ARCHETYPES = [
  new Archetypes(
    0,
    "Herói",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_01.png"),
    require("../assets/images/archetypesCards/archetypeFull_01.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new Archetypes(
    1,
    "Mentor",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_02.png"),
    require("../assets/images/archetypesCards/archetypeFull_02.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new Archetypes(
    2,
    "Refusal Of The Call",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_03.png"),
    require("../assets/images/archetypesCards/archetypeFull_03.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new Archetypes(
    3,
    "Meeting The Mentor",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_04.png"),
    require("../assets/images/archetypesCards/archetypeFull_04.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new Archetypes(
    4,
    "Crossing The Threshold",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_05.png"),
    require("../assets/images/archetypesCards/archetypeFull_05.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new Archetypes(
    5,
    "Tests, Allies, Enemies",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_06.png"),
    require("../assets/images/archetypesCards/archetypeFull_06.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new Archetypes(
    6,
    "Approach To The Inmost Cave",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_07.png"),
    require("../assets/images/archetypesCards/archetypeFull_07.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
  new Archetypes(
    7,
    "Ordeal",
    require("../assets/images/archetypesCards/archetypesCard_01.png"),
    require("../assets/images/archetypesCards/archetypeEmpty_08.png"),
    require("../assets/images/archetypesCards/archetypeFull_08.png"),
    "Lorem ipsum World sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat."
  ),
];
