import GameplayDialogue from "./gameplayDialogue";

class GameplayStage {
    stateId: number;
    descriptionText: string;
    dialogues: GameplayDialogue[];
  
    constructor(
        stateId: number,
      descriptionText: string,
      dialogues: GameplayDialogue[],
    ) {
      this.stateId = stateId;
      this.descriptionText = descriptionText;
      this.dialogues = dialogues;
    }
  }
  
  export default GameplayStage;