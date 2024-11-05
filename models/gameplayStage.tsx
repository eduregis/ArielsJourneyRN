import GameplayDialogue from "./gameplayDialogue";

class GameplayStage {
    stageId: number;
    descriptionText: string;
    dialogues: GameplayDialogue[];
    nextStageId: number;
  
    constructor(
        stageId: number,
        descriptionText: string,
        dialogues: GameplayDialogue[],
        nextStageId: number
    ) {
      this.stageId = stageId;
      this.descriptionText = descriptionText;
      this.dialogues = dialogues;
      this.nextStageId = nextStageId
    }
  }
  
  export default GameplayStage;