import GameplayDialogue from "./gameplayDialogue";

class GameplayStage {
    stageId: number;
    descriptionText: string;
    dialogues: GameplayDialogue[];
    nextStageId: number;
    backgroundImage: any;
  
    constructor(
        stageId: number,
        descriptionText: string,
        dialogues: GameplayDialogue[],
        nextStageId: number,
        backgroundImage: any
    ) {
      this.stageId = stageId;
      this.descriptionText = descriptionText;
      this.dialogues = dialogues;
      this.nextStageId = nextStageId;
      this.backgroundImage = backgroundImage
    }
  }
  
  export default GameplayStage;