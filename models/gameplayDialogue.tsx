class GameplayDialogue {
    dialogueId: number;
    descriptionText: string;
    firstCardText: string;
    secondCardText: string;
    firstCardImageName?: any | null;
    secondCardImageName?: any | null;
    nextFirstDialogueId: number;
    nextSecondDialogueId: number;
    soundTrigger?: string | null;
    differentStage?: number | null;
    triggerArray: string[];
    coloredStrings: { 
      stringId: number; color: string; 
    }[];
  
    constructor(
      dialogueId: number,
      descriptionText: string,
      firstCardText: string,
      secondCardText: string,
      firstCardImageName: any | null,
      secondCardImageName: any | null,
      nextFirstDialogueId: number,
      nextSecondDialogueId: number,
      differentStage: number | null = null,
      soundTrigger: string | null,
      triggerArray: string[],
      coloredStrings: { stringId: number; color: string; }[]
    ) {
      this.dialogueId = dialogueId;
      this.descriptionText = descriptionText;
      this.firstCardText = firstCardText;
      this.secondCardText = secondCardText;
      this.firstCardImageName = firstCardImageName;
      this.secondCardImageName = secondCardImageName;
      this.nextFirstDialogueId = nextFirstDialogueId;
      this.nextSecondDialogueId = nextSecondDialogueId;
      this.soundTrigger = soundTrigger;
      this.differentStage = differentStage;
      this.triggerArray = triggerArray;
      this.coloredStrings = coloredStrings;
    }
  }
  
  export default GameplayDialogue;