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
        "nextSecondDialogueId": 2
      },
      {
        "dialogueId": 1,
        "descriptionText": '“Vamos, dorminhoca… O café está quase pronto!”',
        "firstCardText": "Abrir os olhos",
        "secondCardText": "Abrir os olhos", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 2
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
        "coloredStrings": [
        {
          stringId: 8,
          color: "green",
        },
      ]
      },
      {
        "dialogueId": 3,
        "descriptionText": '“Bom, te vejo na mesa!” Henry sorriu e saiu do quarto. Ele era o tipo de irmão que sempre se preocupava, e isso a fazia sentir-se sortuda.\n\nAriel se levantou, preparando-se para o dia, enquanto Henry organizava a mesa com pães e frutas frescas. Assim que estava vestida e desperta, ela se dirigiu à mesa.',
        "firstCardText": "Ir tomar café com Henry",
        "secondCardText": "Tentar sair escondida", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 4
      },
      {
        "dialogueId": 4,
        "descriptionText": 'Quando Ariel saiu do quarto, Henry, já sentado à mesa, fez um pedido:\n\n“Ah! Depois do seu treino, você poderia avisar o Felipe que ele pode vir buscar a espada no fim da tarde?”\n\nHenry pediu, cortando uma fatia de pão.',
        "firstCardText": '“Felipe?”',
        "secondCardText": '“Onde ele vai estar?”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 6
      },
      {
        "dialogueId": 5,
        "descriptionText": '“É, o Felipe. Esqueceu? Tio Felipe? Ele entrou pra guarda depois que…”',
        "firstCardText": '“… a guerra começou.”',
        "secondCardText": '“… depois do último ataque.”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 6, 
        "nextSecondDialogueId": 6
      },
      {
        "dialogueId": 6,
        "descriptionText": 'Henry suspirou, a tristeza momentaneamente ofuscando seu sorriso. “Ele deve estar de vigia na Torre Sul hoje! Se puder avisá-lo…”',
        "firstCardText": '“Pode deixar,”',
        "secondCardText": '“Certo.”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 7, 
        "nextSecondDialogueId": 7
      },
      {
        "dialogueId": 7,
        "descriptionText": '“Obrigado, maninha. Ah, seu café está pronto!”\n\nAriel pegou sua caneca favorita, o calor do café se espalhando por suas mãos.',
        "firstCardText": '“Estou com pressa.”',
        "secondCardText": '“Então vamos comer!”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 8, 
        "nextSecondDialogueId": 9
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
        "triggerArray": []
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
        "triggerArray": []
      },
      {
        "dialogueId": 10,
        "descriptionText": 'Henry assentiu, um sorriso aliviado surgindo em seu rosto. “Eu só quero que você volte para casa, e que eu possa te ouvir reclamar das aulas de combate.”\n\nOs irmãos se alimentaram enquanto conversavam sobre os mais diversos assuntos, desde as novas armas que Henry estava forjando até os rumores da guerra que chegavam até a vila.\n\n“Você viu os novos recrutas? Parecem tão inexperientes…” Ariel comentou, um fio de preocupação em sua voz.\n\n“Eles estão tentando. Cada um deles é como você, tentando fazer a diferença,” Henry respondeu, sua voz encorajadora. “Mas você precisa se lembrar que também é importante cuidar de si mesma. A guerra não é um jogo.”\n\nAriel assentiu, sabendo que ele estava certo.',
        "nextFirstDialogueId": 0,
        "nextSecondDialogueId": 0,
        "triggerArray": []
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
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 1
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Respirando fundo, ela inicia sua caminhada até o campo de treinamento, passando por dentro da feira popular. A atmosfera é tensa, e o murmúrio dos compradores se mistura com o lamento por aqueles que partiram para a guerra. Em meio a esse cenário, Ariel reconhece a Senhora Endicott, que parece desesperadamente tentar chamar a atenção de qualquer um que a pudesse ouvir. O olhar da mulher reflete a dor de uma mãe preocupada.\n\nAriel se aproxima, hesitante. Não se viam há anos, e o tempo parecia ter mudado mais a Senhora Endicott do que a própria vila.',
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 2
      },
      {
        "dialogueId": 2,
        "descriptionText": '“Ei! Você!!” A Senhora se aproxima e agarra os ombros de Ariel, seus olhos arregalados com uma mistura de esperança e desespero. “Você viu o meu filho? Por favor, diga que viu meu filho!”',
        "firstCardText": '“Olha, eu não tenho tempo para isso. Sinto muito.”',
        "secondCardText": '“Sinto muito, Senhora Endicott. Como posso ajudar?”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 4
      },
      {
        "dialogueId": 3,
        "descriptionText": 'A expressão da Senhora Endicott se transforma em desapontamento. “Você… é muito cruel.” Ela se afasta, murmurando em desapontamento, e Ariel se sente mal por suas palavras.',
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 5
      },
      {
        "dialogueId": 4,
        "descriptionText": 'A expressão da Senhora Endicott suaviza, e seus olhos brilham com gratidão. “Obrigada, querida! Meu filho, Jamie… Ele desapareceu há uma semana. Se você encontrar um guarda, pergunte se eles já ouviram algo sobre ele.”\n\n“Claro, farei isso!” responde Ariel, determinada. A mulher a observa, aliviada por alguém se importar. “Obrigada, querida. Preciso ir, mas espero que você encontre algo.”\n\nAriel acena enquanto a Senhora Endicott se afasta rapidamente em direção a outro guarda que passa, ainda preocupada, mas pelo menos um pouco mais aliviada.',
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 5
      },
      {
        "dialogueId": 5,
        "descriptionText": 'Após o encontro, Ariel continua a caminho do campo de treinamento, o pensamento pesado em seu coração. E se ela fosse atrás de Jamie? O que teria acontecido com ele? A bravura que costumava ter agora parece tão distante. Ela já sabe se cuidar, mas será que teria coragem de deixar sua vila e adentrar a escura floresta que a cerca? Será que ela seria forte o suficiente?',
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0
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
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0
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
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 1
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Ariel sente a adrenalina subir enquanto se prepara. O professor avança com um movimento ágil, brandindo sua espada de madeira em um arco amplo. Ela ergue seu escudo, sentindo o impacto da madeira contra o material leve. O golpe reverbera por seu braço, mas ela se mantém firme, determinada a não ceder.',
        "firstCardText": 'Esperar e Observar',
        "secondCardText": 'Atacar Prematuramente', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 3
      },
      {
        "dialogueId": 2,
        "descriptionText": 'Ariel se posiciona, mantendo a defesa alta, atenta a cada movimento do professor. Ela percebe que ele está confiante, mas uma leve hesitação em seu pé esquerdo a faz pensar que ele pode estar se preparando para um ataque.\n\n“Muito bem, Ariel! Olhos atentos como um falcão. Mas lembre-se, só esperar não é suficiente. O ataque é tão importante quanto a defesa!”',
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 4
      },
      {
        "dialogueId": 3,
        "descriptionText": 'Ariel tenta um ataque direto, lançando sua espada em um golpe rápido. No entanto, o professor se move com facilidade, desviando e contra-atacando. O impacto da madeira em seu escudo faz com que ela se desequilibre um pouco.\n\nResultado: “Você parece uma criança em uma loja de doces, Ariel! Isso não é um passeio. Ataques precipitados não levam à vitória. Vamos de novo!”\n\nEla volta a se posicionar, determinada a fazer melhor.',
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 1
      },
      {
        "dialogueId": 4,
        "descriptionText": 'O professor avança e direciona um ataque rápido pela direita! Ariel...',
        "firstCardText": "Defletir Ataque Rápido",
        "secondCardText": "Desviar", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 6
      },
      {
        "dialogueId": 5,
        "descriptionText": 'O professor inicia uma série de ataques rápidos, suas lâminas de madeira cortando o ar com agilidade. Ariel se concentra, movendo-se para o lado e desviando com o escudo. Cada defesa bem-sucedida a faz sentir-se mais confiante, quase dançando com o ataque dele.\n\nResultado: “Ah, isso é que é uma defesa! Você quase me fez acreditar que eu sou o alvo aqui! Continue assim e talvez eu tenha que me preparar melhor!”',
        "nextFirstDialogueId": 7, 
        "nextSecondDialogueId": 7
      },
      {
        "dialogueId": 6,
        "descriptionText": 'Não foi rápido o suficiente, a espada de madeira para a um centímetro de seu pescoço.\n\n“Escolha com cuidado! Seu escudo poderia aguentar um ataque como rápido como esse. Nem sempre você vai ter tempo de desviar. Outra vez!”',
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 4
      },
      {
        "dialogueId": 7,
        "descriptionText": '“Boa!” Agora é o seu momento de-',
        "firstCardText": "Esperar e analisar",
        "secondCardText": "Atacar", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 8, 
        "nextSecondDialogueId": 9
      },
      {
        "dialogueId": 8,
        "descriptionText": 'O instrutor aproveita o movimento e rapidamente atacar Ariel, mas a espada para momentos antes de acertar seu rosto.\n\nVocê hesitou, deviater aproveitado a oportunidade! Seu oponenete não lhe dará outra chance!”\n\nO professor suspira e sorri “Mas de forma geral, foi um bom treino.”',
        "nextFirstDialogueId": 10, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 9,
        "descriptionText": 'Ariel nota qwue seu oponente abaixou a guarda! Com um empurrão do escudo, o oponente se desestabiliza e cai pra trás. \n\n“Excelente!” exclama seu professor, um sorriso de aprovação no rosto. “Você viu a abertura e se aproveitou dela. O combate é uma dança. Mantenha-se alerta e você sempre encontrará uma maneira de triunfar!”\n\nMotivada pelas palavras dele, Ariel se recolhe, pronta para mais, sabendo que cada sessão de treinamento a aproxima de seu sonho de se tornar uma verdadeira guardiã de Ordon.',
        "nextFirstDialogueId": 10, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 10,
        "descriptionText": '“Você quer tentar outra vez do início?”',
        "firstCardText": "Sim",
        "secondCardText": "Não", 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 0
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
        "nextSecondDialogueId": 2
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Diga mesmo. Esses sequestros estão me deixando muito preocupado… Várias pessoas já foram levadas, e ainda nem sabemos o motivo. Pobre Jamie…”',
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 3
      },
      {
        "dialogueId": 2,
        "descriptionText": 'Não seja tão arrogante, Ariel. Esses sequestros estão me deixando muito preocupado… Várias pessoas já foram levadas, e ainda nem sabemos o motivo. Pobre Jamie…”',
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 3
      },
      {
        "dialogueId": 3,
        "descriptionText": 'O Treinador parece se perder em pensamentos, e continua esfregando os escudos com um pano gasto. Ariel, pronta para sair com seu escudo e espada de madeira, decide:',
        "firstCardText": 'Se despedir',
        "secondCardText": '“Guarda Felipe?”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 4, 
        "nextSecondDialogueId": 5
      },
      {
        "dialogueId": 4,
        "descriptionText": '“Ah, até amanhã, Ariel! Treine em casa e, por favor, tente chegar no horário na próxima.” Ele sorri fazendo o comentário. “Prometo que vou tentar!” Ariel sorri e se despede, e logo segue seu caminho.',
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0
      },
      {
        "dialogueId": 5,
        "descriptionText": '“Hm? Ah- sim, Felipe. Ele está de guarda na *Torre Sul* hoje. Aquele garoto precisa descansar…”',
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 3
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
        "nextFirstDialogueId": 2, 
        "nextSecondDialogueId": 1
      },
      {
        "dialogueId": 1,
        "descriptionText": 'O velho está tão concentrado em sua oração que não percebe sua presença.',
        "firstCardText": 'Continuar em direção da Torre.',
        "secondCardText": 'Escutar.', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 2
      },
      {
        "dialogueId": 2,
        "descriptionText": 'Ariel se concentra e consegue escutar parte de sua súplica: “Pelo fim desta maldita guerra… Eu já não tenho mais o que perder. Meus dois únicos filhos… Quando isso vai acabar?” Ariel se sente mal por invadir um momento tão pessoal, então decide se afastar e continuar em direção à torre.',
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0
      }
    ],
    "nextStageId": 6,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_001.png")
  }

  export const GAMEPLAY_ORDINARYWORLD_WATCHTOWER_DIALOGUES: GameplayStage = {
    "stageId": 6,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Ariel se aproxima da grande torre de vigia, localizada em uma das extremidades do muro que circunda a vila de Ordon. Mesmo de longe, ela nota a silhueta familiar de Philip no alto, um olhar atento e determinado no rosto cansado. Ela acena e chama por ele.\n\nPhilip vira ao ouvir sua voz e acena de volta. “Ariel! Suba aqui, mas não posso conversar muito. O dever me chama, como sempre.” \n\nEla sobe os degraus da torre e logo está ao seu lado, observando o vasto campo além dos muros. O céu está tingido de um cinza melancólico, refletindo o clima da vila.',
        "firstCardText": 'Conversar sobre a Espada de Henry',
        "secondCardText": 'Perguntar sobre a guerra e a guarda', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 2
      },
      {
        "dialogueId": 1,
        "descriptionText": 'Ariel: "Henry terminou sua nova espada. Ele disse que era o melhor trabalho que já fez.”\n\nPhilip sorri, o rosto se iluminando por um momento. “Sério? Aquele rapaz nunca falha, sempre me surpreendendo. Vou pegar essa espada assim que meu turno acabar. Eu mal posso esperar para ver o trabalho dele.”\n\nEle ri e acrescenta, mais sério: “Sabe, ele é mais do que só um amigo pra mim. A vila toda é grata ao que ele faz, Ariel. Quando tudo isso acabar… bem, quero retribuir de algum jeito.” Ele desvia o olhar, pensativo.',
        "firstCardText": 'Perguntar sobre a guerra e a guarda',
        "secondCardText": 'Perguntar sobre a Sra. Endicott', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 3, 
        "nextSecondDialogueId": 4
      },
      {
        "dialogueId": 2,
        "descriptionText": 'Ariel: "Você mencionou que a maioria da guarda foi convocada… Como estamos lidando com isso?”\n\nPhilip suspira, visivelmente cansado. “Quase toda nossa força foi levada para o fronte, só restam alguns de nós por aqui. A responsabilidade é esmagadora.” Ele faz uma pausa, encarando o horizonte. “Os equipamentos que seu irmão faz são a nossa única linha de defesa. Henry é um dos motivos pelos quais ainda temos uma chance.”\n\nAriel responde: "Só o Henry mesmo, sempre dando tudo de si pela vila.”\n\nPhilip esboça um sorriso triste. “É… diga a ele que todos nós somos gratos. Ele merece ouvir isso.”',
        "firstCardText": 'Conversar sobre a Espada de Henry',
        "secondCardText": 'Perguntar sobre a Sra. Endicott',  
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 5, 
        "nextSecondDialogueId": 6
      },
      {
        "dialogueId": 3,
        "descriptionText": 'Ariel: "Você mencionou que a maioria da guarda foi convocada… Como estamos lidando com isso?”\n\nPhilip suspira, visivelmente cansado. “Quase toda nossa força foi levada para o fronte, só restam alguns de nós por aqui. A responsabilidade é esmagadora.” Ele faz uma pausa, encarando o horizonte. “Os equipamentos que seu irmão faz são a nossa única linha de defesa. Henry é um dos motivos pelos quais ainda temos uma chance.”\n\nAriel responde: "Só o Henry mesmo, sempre dando tudo de si pela vila.”\n\nPhilip esboça um sorriso triste. “É… diga a ele que todos nós somos gratos. Ele merece ouvir isso.”',
        "firstCardText": 'Perguntar sobre a Sra. Endicott',
        "secondCardText": 'Ficar em silêncio',  
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 7, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 4,
        "descriptionText": 'Ariel: "Philip, sobre a senhora que perdeu o filho… ouvi dizer que ele ainda não voltou. Você sabe de alguma coisa?”\n\nPhilip suspira, esfregando a nuca. “Estou tentando ajudar ela faz um tempo, mas com tão poucos guardas na vila, está cada vez mais difícil. Prometi à senhora Endicott que faria o possível, mas… Ariel, honestamente, é uma promessa difícil de cumprir. É como procurar uma agulha no palheiro.”',
        "firstCardText": 'Perguntar sobre a guerra e a guarda',
        "secondCardText": 'Ficar em silêncio', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 8, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 5,
        "descriptionText": 'Ariel: "Henry terminou sua nova espada. Ele disse que era o melhor trabalho que já fez.”\n\nPhilip sorri, o rosto se iluminando por um momento. “Sério? Aquele rapaz nunca falha, sempre me surpreendendo. Vou pegar essa espada assim que meu turno acabar. Eu mal posso esperar para ver o trabalho dele.”\n\nEle ri e acrescenta, mais sério: “Sabe, ele é mais do que só um amigo pra mim. A vila toda é grata ao que ele faz, Ariel. Quando tudo isso acabar… bem, quero retribuir de algum jeito.” Ele desvia o olhar, pensativo.',
        "firstCardText": 'Perguntar sobre a Sra. Endicott',
        "secondCardText": 'Ficar em silêncio',
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 7, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 6,
        "descriptionText": 'Ariel: "Philip, sobre a senhora que perdeu o filho… ouvi dizer que ele ainda não voltou. Você sabe de alguma coisa?”\n\nPhilip suspira, esfregando a nuca. “Estou tentando ajudar ela faz um tempo, mas com tão poucos guardas na vila, está cada vez mais difícil. Prometi à senhora Endicott que faria o possível, mas… Ariel, honestamente, é uma promessa difícil de cumprir. É como procurar uma agulha no palheiro.”',
        "firstCardText": 'Conversar sobre a Espada de Henry',
        "secondCardText": 'Ficar em silêncio',  
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 9, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 7,
        "descriptionText": 'Ariel: "Philip, sobre a senhora que perdeu o filho… ouvi dizer que ele ainda não voltou. Você sabe de alguma coisa?”\n\nPhilip suspira, esfregando a nuca. “Estou tentando ajudar ela faz um tempo, mas com tão poucos guardas na vila, está cada vez mais difícil. Prometi à senhora Endicott que faria o possível, mas… Ariel, honestamente, é uma promessa difícil de cumprir. É como procurar uma agulha no palheiro.”',
        "nextFirstDialogueId": 10, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 8,
        "descriptionText": 'Ariel: "Você mencionou que a maioria da guarda foi convocada… Como estamos lidando com isso?”\n\nPhilip suspira, visivelmente cansado. “Quase toda nossa força foi levada para o fronte, só restam alguns de nós por aqui. A responsabilidade é esmagadora.” Ele faz uma pausa, encarando o horizonte. “Os equipamentos que seu irmão faz são a nossa única linha de defesa. Henry é um dos motivos pelos quais ainda temos uma chance.”\n\nAriel responde: "Só o Henry mesmo, sempre dando tudo de si pela vila.”\n\nPhilip esboça um sorriso triste. “É… diga a ele que todos nós somos gratos. Ele merece ouvir isso.”',
        "nextFirstDialogueId": 10, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 9,
        "descriptionText": 'Ariel: "Henry terminou sua nova espada. Ele disse que era o melhor trabalho que já fez.”\n\nPhilip sorri, o rosto se iluminando por um momento. “Sério? Aquele rapaz nunca falha, sempre me surpreendendo. Vou pegar essa espada assim que meu turno acabar. Eu mal posso esperar para ver o trabalho dele.”\n\nEle ri e acrescenta, mais sério: “Sabe, ele é mais do que só um amigo pra mim. A vila toda é grata ao que ele faz, Ariel. Quando tudo isso acabar… bem, quero retribuir de algum jeito.” Ele desvia o olhar, pensativo.',
        "nextFirstDialogueId": 10, 
        "nextSecondDialogueId": 10
      },
      {
        "dialogueId": 10,
        "descriptionText": 'Após um breve silêncio...\n\nAriel: “Posso fazer alguma coisa?”\n\nPhilip hesita e depois sorri, embora exausto. “Eu sei que você está treinando duro e quer ajudar, mas é perigoso demais, Ariel. Essa guerra… ela cobra muito de nós. Mas fico feliz em ver seu espírito. Você me lembra… bem, você me lembra de como éramos antes de tudo isso começar.”\n\nEle ajeita o escudo no braço. “Mas não se preocupe, vamos encontrá-lo. Mesmo com os recursos limitados, eu ainda tenho fé.”',
        "firstCardText": 'Perguntar sobre os bons tempos',
        "secondCardText": ' Insistir para ajudar na busca',  
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 11, 
        "nextSecondDialogueId": 12
      },
      {
        "dialogueId": 11,
        "descriptionText": 'Ariel: “Philip, você lembra de quando você e Henry me deixavam andar de cavalo com vocês?”\n\nPhilip sorri com nostalgia, o rosto rejuvenescendo. “Ah, claro que lembro! Você era só uma garotinha, segurando firme, e a gente torcendo pra que você não caísse. Henry ficava sempre preocupado. Ele olhava para mim como se dissesse ‘não ouse deixar ela se machucar’. Agora olhe para você, quase uma guerreira. Ele deve estar muito orgulhoso.”',
        "nextFirstDialogueId": 13, 
        "nextSecondDialogueId": 13
      },
      {
        "dialogueId": 12,
        "descriptionText": 'Ariel: "Eu posso lidar com isso, Philip. Se você me der uma chance, posso ir para a floresta e procurar."\n\nPhilip franze a testa e balança a cabeça. “Não, Ariel, isso não é um treino. É perigoso demais, e se algo acontecer com você… bem, eu não poderia encarar o Henry. Vamos nos focar no que você precisa fazer: treinar e ficar forte. A ajuda virá quando você estiver pronta.”',
        "nextFirstDialogueId": 13, 
        "nextSecondDialogueId": 13
      },
      {
        "dialogueId": 13,
        "descriptionText": 'Ariel observa Philip mais uma vez, seu coração apertado ao ver o peso da responsabilidade em seus ombros. Ela entende que a vila depende dele e de sua força, e, mesmo cansado, ele ainda tenta manter um espírito otimista.\n\n“A vila precisa de você, Philip,” Ariel diz, com um toque de preocupação na voz.\n\nEle sorri, tentando amenizar. “Precisamos de todos nós. Não se preocupe comigo, Ariel. Cuide do seu treinamento, e logo estará ao nosso lado, defendendo o que é importante.”\n\nEles se despedem, e Ariel desce da torre, o coração ainda cheio de perguntas. Ela se sente mais determinada, mas também percebe o quanto precisa aprender para estar pronta.',
        "nextFirstDialogueId": 0, 
        "nextSecondDialogueId": 0
      },
    ],
    "nextStageId": 7,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_002.png")
  }

  export const GAMEPLAY_ORDINARYWORLD_BACKFROMHOME_DIALOGUES: GameplayStage = {
    "stageId": 7,
    "descriptionText": "OrdinaryWorld",
      "dialogues": [
      {
        "dialogueId": 0,
        "descriptionText": 'Após uma longa caminhada, Ariel finalmente chega em casa, exausta, mas ainda um pouco pensativa. Ela vai direto para a forja, procurando seu irmão, Henry, para avisar que está de volta. Ao entrar, Henry, ocupado com seu último projeto, a escuta e se vira bruscamente antes de abrir um sorriso caloroso.\n\nHenry: "Ah! Bem-vinda de volta. Como foi o treino hoje?"',
        "firstCardText": '“Nada demais…”',
        "secondCardText": '“Foi ótimo!”', 
        "firstCardImageName": require("../../assets/images/gameplayCards/Ariel_card_001.png"),
        "secondCardImageName": require("../../assets/images/gameplayCards/Ariel_card_002.png"),
        "nextFirstDialogueId": 1, 
        "nextSecondDialogueId": 2
      },
    ],
    "nextStageId": 0,
    "backgroundImage": require("../../assets/ui/Ariel_gameplay_bkg_001.png")
  }