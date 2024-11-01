class GameplayDialogue {
    dialogueId: number;
    descriptionText: string;
    firstCardText: string;
    secondCardText: string;
    firstCardImageName: any;
    secondCardImageName: any;
    nextFirstDialogueId: number;
    nextSecondDialogueId: number;
    soundTrigger: string | null;
    soundLoop: boolean;
    achievementTrigger: string | null;
    triggerArray: string[];
    coloredStrings: { 
      stringId: number; color: string; 
    }[];
  
    constructor(
      dialogueId: number,
      descriptionText: string,
      firstCardText: string,
      secondCardText: string,
      firstCardImageName: any,
      secondCardImageName: any,
      nextFirstDialogueId: number,
      nextSecondDialogueId: number,
      soundTrigger: string | null,
      soundLoop: boolean,
      achievementTrigger: string | null,
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
      this.soundLoop = soundLoop;
      this.achievementTrigger = achievementTrigger;
      this.triggerArray = triggerArray;
      this.coloredStrings = coloredStrings;
    }
  }
  
  export default GameplayDialogue;