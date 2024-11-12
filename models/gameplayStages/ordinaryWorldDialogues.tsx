import GameplayStage from "../gameplayStage"

export const GAMEPLAY_ORDINARYWORLD_HOUSE_DIALOGUES: GameplayStage = {
    "stageId": 0,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
        {
        "dialogueId": 0,
        "descriptionText": 'A noite envolvia a pequena vila de Ordon em um manto de silêncio, quebrado apenas pelo suave sussurro do vento nas árvores. No interior de uma modesta cabana, Ariel dormia profundamente, quando uma voz familiar a despertou.\n\n“Ariel…”',
        "firstCardText": "Dormir um pouco mais",
        "secondCardText": "Abrir os olhos",
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"), 
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 2, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 1,
        "descriptionText": '“Vamos, dorminhoca… O café está quase pronto!”',
        "firstCardText": "Abrir os olhos",
        "secondCardText": "Abrir os olhos", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 2, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 2,
        "descriptionText": 'Ao abrir os olhos, Ariel viu seu irmão, Henry, encostado na porta, com seu avental sujo e um sorriso no rosto. Ele já estava trabalhando na forja enquanto ela sonhava. “Bom dia! Perdeu a hora de novo?”\n\nAriel respondeu, ainda tentando afastar o sono:',
        "firstCardText": '“Bom dia, eu tive um sonho estranho…”',
        "secondCardText": "Revirando os olhos", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 3, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 3,
        "descriptionText": '“Bom, te vejo na mesa!” Henry sorriu e saiu do quarto. Ele era o tipo de irmão que sempre se preocupava, e isso a fazia sentir-se sortuda.\n\nAriel se levantou, preparando-se para o dia, enquanto Henry organizava a mesa com pães e frutas frescas. Assim que estava vestida e desperta, ela se dirigiu à mesa.',
        "firstCardText": "Ir tomar café com Henry",
        "secondCardText": "Tentar sair escondida", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 4, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 4,
        "descriptionText": 'Quando Ariel saiu do quarto, Henry, já sentado à mesa, fez um pedido:\n\n“Ah! Depois do seu treino, você poderia avisar o Felipe que ele pode vir buscar a espada no fim da tarde?”\n\nHenry pediu, cortando uma fatia de pão.',
        "firstCardText": '“Felipe?”',
        "secondCardText": '“Onde ele vai estar?”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 6, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 5,
        "descriptionText": '“É, o Felipe. Esqueceu? Tio Felipe? Ele entrou pra guarda depois que…”',
        "firstCardText": '“… a guerra começou.”',
        "secondCardText": '“… depois do último ataque.”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 6, 
        "nextSecondDialogueId": 6, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 6,
        "descriptionText": 'Henry suspirou, a tristeza momentaneamente ofuscando seu sorriso. “Ele deve estar de vigia na Torre Sul hoje! Se puder avisá-lo…”',
        "firstCardText": '“Pode deixar,”',
        "secondCardText": '“Certo.”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 7, 
        "nextSecondDialogueId": 7, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 7,
        "descriptionText": '“Obrigado, maninha. Ah, seu café está pronto!”\n\nAriel pegou sua caneca favorita, o calor do café se espalhando por suas mãos.',
        "firstCardText": '“Estou com pressa.”',
        "secondCardText": '“Então vamos comer!”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 8, 
        "nextSecondDialogueId": 9, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 8,
        "descriptionText": '“Estou com pressa,” ela disse, apressando-se a tomar um gole.\n“Ah…” Henry olhou para ela com uma leve frustração, mas logo se recompôs. “Pelo menos leve um pão, não se pode treinar de estômago vazio!”\n\n“Por que você se preocupa tanto? Eu consigo me cuidar,” Ariel respondeu, a determinação em sua voz misturando-se com a gratidão.\n\n“Eu sei que você consegue, mas… a guerra está lá fora. Precisamos cuidar um do outro, Ariel.” Ele hesitou, olhando para a janela onde o céu começava a clarear. “Muitos dos nossos amigos e vizinhos foram. Você sabe que não podemos nos dar ao luxo de perder mais ninguém.”',
        "firstCardText": '"“Você está certo, eu vou me cuidar.”',
        "secondCardText": ' “É só um treino, não vou me arriscar.”',
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 9,
        "nextSecondDialogueId": 9,
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 9,
        "descriptionText": 'Assim que terminavam o café, ela percebeu que realmente precisava ir.\n\nIndo para a porta, Ariel pegou seu escudo e sua espada de madeira. Enquanto calçava suas botas, Henry se aproximou, apoiando-se na parede.\n\n"Ei… Eu sei que você já é grandinha, mas por favor, se cuide."',
        "firstCardText": '"Pode deixar!" ',
        "secondCardText": '"Não me trate como criança." ',
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 10,
        "nextSecondDialogueId": 10,
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 10,
        "descriptionText": 'Henry assentiu, um sorriso aliviado surgindo em seu rosto. “Eu só quero que você volte para casa, e que eu possa te ouvir reclamar das aulas de combate.”\n\nOs irmãos se alimentaram enquanto conversavam sobre os mais diversos assuntos, desde as novas armas que Henry estava forjando até os rumores da guerra que chegavam até a vila.\n\n“Você viu os novos recrutas? Parecem tão inexperientes…” Ariel comentou, um fio de preocupação em sua voz.\n\n“Eles estão tentando. Cada um deles é como você, tentando fazer a diferença,” Henry respondeu, sua voz encorajadora. “Mas você precisa se lembrar que também é importante cuidar de si mesma. A guerra não é um jogo.”\n\nAriel assentiu, sabendo que ele estava certo.',
        "firstCardText": '',
        "secondCardText": '',
        "nextFirstDialogueId": 0,
        "nextSecondDialogueId": 0,
        "triggerArray": [],
        "coloredStrings": []
      },
    ],
    "nextStageId": 1,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_002.png")
  }

  export const GAMEPLAY_ORDINARYWORLD_TOWN_DIALOGUES: GameplayStage = {
    "stageId": 1,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": "Depois de alguns minutos caminhando na estrada de barro, Ariel chega ao centro da cidade.\n\nA vila de Ordon, outrora vibrante e cheia de vida, agora carrega as cicatrizes da guerra. As casas simples, pequenas e uma vez acolhedoras, estão marcadas por desespero e preocupação. Os altos muros, que antes simbolizavam proteção, agora parecem limitar a esperança. A vida continua, mas a alegria foi substituída pela cautela. Os sorrisos são escassos, e as risadas infantis, que antes ecoavam pela vila, agora são um sussurro distante.",
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 1, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Respirando fundo, ela inicia sua caminhada até o campo de treinamento, passando por dentro da feira popular. A atmosfera é tensa, e o murmúrio dos compradores se mistura com o lamento por aqueles que partiram para a guerra. Em meio a esse cenário, Ariel reconhece a Senhora Endicott, que parece desesperadamente tentar chamar a atenção de qualquer um que a pudesse ouvir. O olhar da mulher reflete a dor de uma mãe preocupada.\n\nAriel se aproxima, hesitante. Não se viam há anos, e o tempo parecia ter mudado mais a Senhora Endicott do que a própria vila.',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 2, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 2,
        "descriptionText": '“Ei! Você!!” A Senhora se aproxima e agarra os ombros de Ariel, seus olhos arregalados com uma mistura de esperança e desespero. “Você viu o meu filho? Por favor, diga que viu meu filho!”',
        "firstCardText": '“Olha, eu não tenho tempo para isso. Sinto muito.”',
        "secondCardText": '“Sinto muito, Senhora Endicott. Como posso ajudar?”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 4, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 3,
        "descriptionText": 'A expressão da Senhora Endicott se transforma em desapontamento. “Você… é muito cruel.” Ela se afasta, murmurando em desapontamento, e Ariel se sente mal por suas palavras.',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 5, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 4,
        "descriptionText": 'A expressão da Senhora Endicott suaviza, e seus olhos brilham com gratidão. “Obrigada, querida! Meu filho, Jamie… Ele desapareceu há uma semana. Se você encontrar um guarda, pergunte se eles já ouviram algo sobre ele.”\n\n“Claro, farei isso!” responde Ariel, determinada. A mulher a observa, aliviada por alguém se importar. “Obrigada, querida. Preciso ir, mas espero que você encontre algo.”\n\nAriel acena enquanto a Senhora Endicott se afasta rapidamente em direção a outro guarda que passa, ainda preocupada, mas pelo menos um pouco mais aliviada.',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 5, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 5,
        "descriptionText": 'Após o encontro, Ariel continua a caminho do campo de treinamento, o pensamento pesado em seu coração. E se ela fosse atrás de Jamie? O que teria acontecido com ele? A bravura que costumava ter agora parece tão distante. Ela já sabe se cuidar, mas será que teria coragem de deixar sua vila e adentrar a escura floresta que a cerca? Será que ela seria forte o suficiente?',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0, 
        "triggerArray": [],
        "coloredStrings": []
      },
    ],
    "nextStageId": 2,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_001.png")
  }

  export const GAMEPLAY_ORDINARYWORLD_PRETRAINING_DIALOGUES: GameplayStage = {
    "stageId": 2,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Seus pensamentos são interrompidos pela voz grave e familiar de seu treinador, um homem com uma aura leve, que tentava manter o moral da turma alto, apesar das circunstâncias sombrias.\n\n“Bom dia, Ariel! Você chegou atrasada, para variar… Mas tudo bem. Está pronta para o treino?”\n\n“Eu nasci pronta!” ela responde, um sorriso aparecendo em seu rosto, mesmo que a preocupação persista em seu coração.',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0, 
        "triggerArray": [],
        "coloredStrings": []
      },
    ],
    "nextStageId": 3,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_002.png")
  }

  export const GAMEPLAY_ORDINARYWORLD_TRAINING_DIALOGUES: GameplayStage = {
    "stageId": 3,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Seu professor, um homem robusto e experiente, observa-a com um sorriso divertido. Ela é sua aluna mais promissora, e ele não perde a chance de brincar com ela. O som dos treinos ecoa ao seu redor, mas, mesmo em meio à escuridão da guerra, ele consegue manter um espírito leve.\n\n“Hoje, vamos nos concentrar nas mecânicas de luta,” ele começa, sua voz grave misturada a um tom de brincadeira. “Espero que você esteja pronta, Ariel. Não quero que minha estrela se transforme em uma estrela cadente, se é que me entende!”',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 1, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Ariel sente a adrenalina subir enquanto se prepara. O professor avança com um movimento ágil, brandindo sua espada de madeira em um arco amplo. Ela ergue seu escudo, sentindo o impacto da madeira contra o material leve. O golpe reverbera por seu braço, mas ela se mantém firme, determinada a não ceder.',
        "firstCardText": 'Esperar e Observar',
        "secondCardText": 'Atacar Prematuramente', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 3, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 2,
        "descriptionText": 'Ariel se posiciona, mantendo a defesa alta, atenta a cada movimento do professor. Ela percebe que ele está confiante, mas uma leve hesitação em seu pé esquerdo a faz pensar que ele pode estar se preparando para um ataque.\n\n“Muito bem, Ariel! Olhos atentos como um falcão. Mas lembre-se, só esperar não é suficiente. O ataque é tão importante quanto a defesa!”',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 4, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 3,
        "descriptionText": 'Ariel tenta um ataque direto, lançando sua espada em um golpe rápido. No entanto, o professor se move com facilidade, desviando e contra-atacando. O impacto da madeira em seu escudo faz com que ela se desequilibre um pouco.\n\nResultado: “Você parece uma criança em uma loja de doces, Ariel! Isso não é um passeio. Ataques precipitados não levam à vitória. Vamos de novo!”\n\nEla volta a se posicionar, determinada a fazer melhor.',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 1, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 4,
        "descriptionText": 'O professor avança e direciona um ataque rápido pela direita! Ariel...',
        "firstCardText": "Defletir Ataque Rápido",
        "secondCardText": "Desviar", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 6, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 5,
        "descriptionText": 'O professor inicia uma série de ataques rápidos, suas lâminas de madeira cortando o ar com agilidade. Ariel se concentra, movendo-se para o lado e desviando com o escudo. Cada defesa bem-sucedida a faz sentir-se mais confiante, quase dançando com o ataque dele.\n\nResultado: “Ah, isso é que é uma defesa! Você quase me fez acreditar que eu sou o alvo aqui! Continue assim e talvez eu tenha que me preparar melhor!”',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 7, 
        "nextSecondDialogueId": 7, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 6,
        "descriptionText": 'Não foi rápido o suficiente, a espada de madeira para a um centímetro de seu pescoço.\n\n“Escolha com cuidado! Seu escudo poderia aguentar um ataque como rápido como esse. Nem sempre você vai ter tempo de desviar. Outra vez!”',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 4, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 7,
        "descriptionText": 'O professor continua a atacar, e Ariel começa a perceber um padrão em seus movimentos. Quando ele ataca, seu olhar se desvia momentaneamente, criando uma oportunidade. Com essa nova percepção, ela decide esperar o momento certo.\n\nCom um golpe ágil, o professor tenta um ataque de cima, mas Ariel ergue seu escudo para bloquear, sentindo a força do impacto. Ela, então, aproveita a abertura e desvia para o lado, atacando rapidamente com sua espada na lateral do professor, pegando-o desprevenido.',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 8, 
        "nextSecondDialogueId": 8, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 8,
        "descriptionText": '“Excelente!” exclama seu professor, um sorriso de aprovação no rosto. “Você viu a abertura e se aproveitou dela. O combate é uma dança. Mantenha-se alerta e você sempre encontrará uma maneira de triunfar!”\n\nMotivada pelas palavras dele, Ariel se recolhe, pronta para mais, sabendo que cada sessão de treinamento a aproxima de seu sonho de se tornar uma verdadeira guardiã de Ordon.',
        "firstCardText": "",
        "secondCardText": "", 
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0, 
        "triggerArray": [],
        "coloredStrings": []
      },
    ],
    "nextStageId": 4,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_001.png")
  }

  export const GAMEPLAY_ORDINARYWORLD_POSTTRAINING_DIALOGUES: GameplayStage = {
    "stageId": 4,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Após algumas horas de treino, o treinador se espreguiça e sorri. “Bom, por hoje é só. Você está melhorando bastante! Daqui a pouco, você vai superar a todos nós.” Ele ri enquanto limpa alguns escudos. “Ah, e diga para o seu irmão que já está na hora de ele começar a treinar.”',
        "firstCardText": '“Vou dizer”',
        "secondCardText": '“Eu vou defendê-lo”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 2, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Diga mesmo. Esses sequestros estão me deixando muito preocupado… Várias pessoas já foram levadas, e ainda nem sabemos o motivo. Pobre Jamie…”',
        "firstCardText": '',
        "secondCardText": '', 
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 3, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 2,
        "descriptionText": 'Não seja tão arrogante, Ariel. Esses sequestros estão me deixando muito preocupado… Várias pessoas já foram levadas, e ainda nem sabemos o motivo. Pobre Jamie…”',
        "firstCardText": '',
        "secondCardText": '', 
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 3, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 3,
        "descriptionText": 'O Treinador parece se perder em pensamentos, e continua esfregando os escudos com um pano gasto. Ariel, pronta para sair com seu escudo e espada de madeira, decide:',
        "firstCardText": 'Se despedir',
        "secondCardText": '“Guarda Felipe?”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 5, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 4,
        "descriptionText": '“Ah, até amanhã, Ariel! Treine em casa e, por favor, tente chegar no horário na próxima.” Ele sorri fazendo o comentário. “Prometo que vou tentar!” Ariel sorri e se despede, e logo segue seu caminho.',
        "firstCardText": '',
        "secondCardText": '', 
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0, 
        "triggerArray": [],
        "coloredStrings": []
      },
      {
        "dialogueId": 5,
        "descriptionText": '“Hm? Ah- sim, Felipe. Ele está de guarda na *Torre Sul* hoje. Aquele garoto precisa descansar…”',
        "firstCardText": '',
        "secondCardText": '', 
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 3, 
        "triggerArray": [],
        "coloredStrings": []
      },
    ],
    "nextStageId": 5,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_002.png")
  }

  export const GAMEPLAY_ORDINARYWORLD_WALKING_DIALOGUES: GameplayStage = {
    "stageId": 5,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Com mais calma, agora que terminou seu treino, Ariel caminha em direção à torre de vigia. Olhando em volta enquanto cruza o centro da vila, ela se depara com um senhor desconhecido, ajoelhado nos degraus da capela.',
        "firstCardText": 'Continuar em direção da Torre.',
        "secondCardText": 'Se aproximar do senhor.', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 2, 
        "triggerArray": [],
        "coloredStrings": []
      },
    ],
    "nextStageId": 6,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_001.png")
  }