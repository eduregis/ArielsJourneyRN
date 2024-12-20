import GameplayStage from "./gameplayStage";
import { 
    GAMEPLAY_ORDINARYWORLD_HOUSE_DIALOGUES, 
    GAMEPLAY_ORDINARYWORLD_TOWN_DIALOGUES, 
    GAMEPLAY_ORDINARYWORLD_PRETRAINING_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_TRAINING_DIALOGUES, 
    GAMEPLAY_ORDINARYWORLD_POSTTRAINING_DIALOGUES, 
    GAMEPLAY_ORDINARYWORLD_WALKING_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_WATCHTOWER_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_BACKFROMHOME_DIALOGUES } 
    from "./gameplayStages/ordinaryWorldDialogues";

import { 
    GAMEPLAY_REFUSALOFTHECALL_FOREST_DIALOGUES } 
    from "./gameplayStages/refusalOfTheCallDialogues";

export const GAMEPLAY_STAGES: GameplayStage[] = [
    GAMEPLAY_ORDINARYWORLD_HOUSE_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_TOWN_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_PRETRAINING_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_TRAINING_DIALOGUES, 
    GAMEPLAY_ORDINARYWORLD_POSTTRAINING_DIALOGUES, 
    GAMEPLAY_ORDINARYWORLD_WALKING_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_WATCHTOWER_DIALOGUES,
    GAMEPLAY_ORDINARYWORLD_BACKFROMHOME_DIALOGUES,
    GAMEPLAY_REFUSALOFTHECALL_FOREST_DIALOGUES
]