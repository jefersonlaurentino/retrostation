const calculoDesconto = (valorAnterio:string , valorAtual:string) => {
    const anterio = parseFloat(valorAnterio);
    const atual = parseFloat(valorAtual);
    
    const desconto = parseInt(String(((anterio-atual) / anterio * 100)))
    
    return `-${desconto}%`
}

const jogos = [
    {
        id: "01",
        titulo: "gta san andreas",
        descricao: [ "Há 5 anos, Carl Johnson fugiu das pressões da vida em Los Santos, San Andreas... uma cidade que se destruía com gangues, drogas e corrupção, onde estrelas de cinema e milionários fazem o melhor que podem para evitar traficantes e bandidos." , "É o começo dos anos 90. Carl volta para casa. A sua mãe foi assassinada, a sua família ruiu e seus amigos de infância estão todos indo em direção ao desastre." , "Para piorar tudo, dois policiais corruptos armaram para que ele fosse acusado de homicídio. CJ é forçado a embarcar numa jornada que o levará por todo o estado de San Andreas para salvar sua família e assumir o controle das ruas."],
        desenvolvedor: "Rockstar North",
        editora: "Rockstar Games",
        dataLançamento: "26/10/2004",
        generos: [ "aventura" ],
        recursos: [ "Compativel com Controle" , "Jogo para até 2 Pessoas" ],
        promocao: true,
        faixaEtaria: "18",
        banner: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg?im=Resize=640",
        bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
        imagens: [ "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99efb826b071747efc32fa9a14117e99.jpg", "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a861733e3625e0d409df25aee50d5273.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bb5e5e25e29046535aba405ad47bb826.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9b8a9636519a343c04f860eb6f0c22d3.jpg" ],
        video: [ "TTB6eEHCAko" , "KMOzrYsUeoQ" ],
        destaques: [ "aventura" , "Gta" , "destaques"],
        valorAnterior: "249,99",
        valorAtual: "10,00",
    },
    {
    id: "02",
    titulo: "midnight club 3",
    descricao: ["A série que levou as corridas em pistas fechadas para as ruas da cidade está de volta para elevar o patamar mais uma vez." , "Equipe sua máquina com as rodas, os acabamentos e as melhorias mais atuais. Enfrente a elite das corridas de rua acelerando pelo trânsito a mais de 200 km/h."],
    desenvolvedor: "Rockstar San Diego",
    editora: "Rockstar Games",
    dataLançamento: "11/04/2005",
    generos: [ "corrida" ],
    recursos: [ "Compativel com Controle" , "Jogo para até 2 Pessoas" ],
    promocao: true,
    faixaEtaria: "14",
    banner: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg?im=Resize=640",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
    imagens: [ "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a12941047f5ff6b6e244a08cdc762da.jpg", "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/40c5a67e7ac7061dd9d76ead5b0e9555.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b68a28ff744321feca3a1cd814536f0.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/749ace7c507d0c8b25d34d0deeb37001.jpg" ],
    video: [ "axe9aGcTTWg" , "FPhyhAM41K8" ],
    destaques: [ "corrida"],
    valorAnterior: "128,00",
    valorAtual: "28,00"
    },
    {
    id: "03",
    titulo: "red dead revolver",
    descricao: ["Vasto, ríspido e sem lei. Quando era jovem, você foi incapaz de impedir o massacre da sua família nas mãos de bandidos. Após muitos anos, você ganha a vida como caçador de recompensas, entregando criminosos à justiça enquanto luta para desvendar o mistério do seu passado. Você precisa encontrar quem assassinou sua família e, então, se vingar." , "Um eletrizante jogo estilo arcade em terceira pessoa repleto de tiroteios intensos, Red Dead Revolver é uma clássica história de vingança no faroeste indomável."],
    desenvolvedor: "Rockstar San Diego",
    editora: "Rockstar Games",
    dataLançamento: "03/05/2004",
    generos: [ "ação" , "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para 1 pessoa" ],
    promocao: true,
    faixaEtaria: "14",
    banner: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg?im=Resize=640",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
    imagens: [ "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2123f33bb7cd695d5b28df2f2764e322.jpg", "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/49171a689998dec85eafabac78fd24c0.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c1d42e298856299b96ef822e72c9ac8e.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cdd37ca22a6eb559fc14292fdc6acf2c.jpg" ],
    video: [ "a4q6wKGQoik" ],
    destaques: [ "ação" , "aventura" , "destaques" ],
    valorAnterior: "150,00",
    valorAtual: "Grátis"
    },
    {
    id: "04",
    titulo: "bully",
    descricao: ["Domine os corredores da Bullworth Academy no papel de Jimmy Hopkins, um estudante endiabrado que deve superar os obstáculos de uma escola preparatória em decadência onde mentirosos, trapaceiros e esnobes são os membros mais populares do corpo estudantil e docente. Confronte valentões, passe a perna nos professores e realize atividades extracurriculares fora do campus na cidade de Bullworth enquanto aprende a sobreviver ao ano escolar e a tomar controle da escola."],
    desenvolvedor: "Rockstar Vancouver",
    editora: "Rockstar Games",
    dataLançamento: "17/10/2006",
    generos: [ "ação" , "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para 1 pessoa" ],
    promocao: false,
    faixaEtaria: "14",
    banner: "https://upload.wikimedia.org/wikipedia/pt/d/de/Bully_us_capa_pt.jpg",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
    imagens: [ "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/b11ccecce27c5213cdaacf0df3181e8781272e9b.jpg" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/047a7ab24bf95536079d39153b99c1bfbb7dd85e.jpg" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/771a35810e503471c64b3ff8d3a64ba82aed2f7a.jpg?im=Resize=1440" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/a4b78595f5d93193eef9e46c3d7978d574b31a5e.jpg?im=Resize=1440" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/3f477bd48cde11f98013777355d08ec1d5986ea6.jpg?im=Resize=1440" ],
    video: [ "M4g9vf3gX5E" , "88KNf0MtU14" ],
    destaques: [ "ação" , "aventura"],
    valorAnterior: "128,00",
    valorAtual: "128,00"
    },
    {
    id: "05",
    titulo: "gta vice city",
    descricao: ["Bem-vindo aos anos 80. Da década de penteados glam, dos excessos e dos ternos pastel, vem a história de um homem que sobe ao topo da cadeia criminal no retorno de Grand Theft Auto." , "Vice City é uma grande área urbana que engloba de praias até pântanos e do glamour até o gueto, e é a mais variada, completa e animada cidade digital já criada. Combinando uma jogabilidade não linear com uma narrativa centrada nos personagens, você chega a uma cidade cheia de prazeres e degradação, e tem a oportunidade de dominá-la como quiser."],
    desenvolvedor: "Rockstar North",
    editora: "Rockstar Games",
    dataLançamento: "27/08/2002",
    generos: [ "ação" , "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para 1 pessoa" ],
    promocao: false,
    faixaEtaria: "18",
    banner: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
    imagens: [ "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c3466bd07d09ec14c9555505ea4e6af.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b0353d1406b5264dc18326a811bc5bb5.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0301d4689fa8e170ceefe118a18b3afb.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e689e87adb68899abb7957e4b0d70612.jpg" ],
    video: [ "W-7zhljUPJg" ],
    destaques: [ "ação" , "aventura" , "gta" ],
    valorAnterior: "128,00",
    valorAtual: "128,00",
    },
    {
    id: "06",
    titulo: "nfs underground 2",
    descricao: ["A história começa quando o protagonista conduz um Nissan Skyline GTR R-34 modificado azul, o mesmo que foi usado para derrotar Eddie em Need for Speed Underground.", "Reverenciado como o melhor corredor de rua em Olympic City, o jogador vence uma corrida enquanto dirige um Nissan Skyline GT-R azul e imediatamente recebe uma ligação de um indivíduo não identificado com um 'convite' para se juntar à sua equipe, seguido por uma ameaça explicitamente negando que ele não está 'aceitando um não como resposta'. Irritado, o jogador imediatamente desliga a ligação e dirige para uma festa comemorativa; enquanto fala com Samantha ao telefone, eles são cegados e emboscados por um Hummer H2 de um beco escuro, que bate e destrói seu Skyline. Um homem com uma tatuagem de foice na mão liga para confirmar que ele 'resolveu um problema'." ,"Seis meses depois do que aconteceu, o jogador voa para Bayview para derrotar Caleb e recuperar a cidade."],
    desenvolvedor: "Rockstar North",
    editora: "Rockstar Games",
    dataLançamento: "27/08/2002",
    generos: [ "corrida" ],
    recursos: [ "Compativel com Controle" , "Jogo para até 2 pessoas" ],
    promocao: false,
    faixaEtaria: "12",
    banner: "https://upload.wikimedia.org/wikipedia/pt/e/e3/Nfsu2_capa_pt.jpg",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
    imagens: [ "https://upload.wikimedia.org/wikipedia/pt/thumb/5/51/NFSU2_Corrida.jpg/348px-NFSU2_Corrida.jpg", "https://upload.wikimedia.org/wikipedia/en/f/f1/Need_for_Speed_Underground_2.PNG" ],
    video: [ "koGT_QaCgcU" , "xsunzH3b7hI" ],
    destaques: [ "corrida" , "carrossel" ],
    valorAnterior: "128,00",
    valorAtual: "128,00"
    },
    {
    id: "07",
    titulo: "nfs most wanted",
    descricao: ["O jogo começa com o jogador, um corredor anônimo, chegando à cidade de Rockport e competindo contra um dos principais corredores da cidade, Razor Callahan. Durante uma corrida decisiva, Razor sabota o carro do jogador — um BMW M3 GTR —, causando sua derrota. Com a vitória, Razor rouba o carro e o utiliza para subir ao topo da Blacklist, uma lista dos corredores mais procurados e respeitados de Rockport." , "Sem carro e preso pela polícia, o jogador é libertado graças a Mia Townsend, uma corredora e aliada que ajuda o protagonista a recomeçar. A partir daí, o objetivo é derrotar os 15 membros da Blacklist, recuperar o BMW M3 GTR e desbancar Razor. O jogador também precisa evitar a polícia, liderada pelo obstinado Sargento Cross, que faz de tudo para prender corredores de rua." ],
    desenvolvedor: "EA Black Box",
    editora: "EA Games",
    dataLançamento: "11/11/2005",
    generos: [ "corrida" ],
    recursos: [ "Compativel com Controle" , "Jogo para até 2 pessoas" ],
    promocao: true,
    faixaEtaria: "10",
    banner: "https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
    imagens: [ "https://upload.wikimedia.org/wikipedia/en/0/07/Need_for_Speed_Most_Wanted_%282005_game_-_screenshot%29.jpg" , "https://upload.wikimedia.org/wikipedia/en/c/c4/NFSMW360Screen.jpg" ],
    video: [ "uwwk_rawgJQ" ],
    destaques: [ "corrida" , "destaques" , "carrossel"],
    valorAnterior: "50,00",
    valorAtual: "22,90"
    },
    {
    id: "08",
    titulo: "guitar hero",
    descricao: ["Você sempre sonhou em ser uma lenda do rock? Agora é a sua chance!." , "No Guitar Hero, você é um jovem prodígio que descobre uma guitarra mágica em um velho porão. Essa guitarra pertenceu às maiores estrelas do rock da história e tem o poder de abrir portais para arenas lendárias do rock. Sua missão? Enfrentar desafios épicos contra as maiores bandas e guitarristas de todos os tempos!" ],
    desenvolvedor: "Harmonix",
    editora: "Activision",
    dataLançamento: "08/11/2005",
    generos: [ "music" ],
    recursos: [ "Compativel com Controle" , "Jogo para até 4 pessoas" ],
    promocao: false,
    faixaEtaria: "10",
    banner: "https://i.pinimg.com/736x/e9/43/a7/e943a7631feac352c15ae38c149c1862.jpg",
    bannerName: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Guitar_hero_logo.png",
    imagens: [ "https://upload.wikimedia.org/wikipedia/en/6/6c/Guitarhero-screen.jpg" , "https://upload.wikimedia.org/wikipedia/en/6/69/Guitar-hero-world-tour-20080715103139463.PNG" ],
    video: [ "hF1SSURZ9FI" ],
    destaques: [ "destaques" ],
    valorAnterior: "12,00",
    valorAtual: "12,00"
    },
    {
    id: "09",
    titulo: "god of war",
    descricao: ["Kratos, um guerreiro espartano atormentado por seu passado. Ele foi enganado por Ares, o deus da guerra, que manipulou Kratos para cometer assassinatos contra sua própria família. Consumido pela culpa e raiva, Kratos faz um pacto com Athena, a deusa da sabedoria, em busca de vingança contra Ares, com a promessa de acabar com a sua dor e se libertar de sua maldição. O enredo é focado na jornada de Kratos para derrotar Ares e se tornar o novo deus da guerra, enquanto luta contra monstros mitológicos, deuses e desafios mortais." ],
    desenvolvedor: "Santa Monica studio",
    editora: "Sony",
    dataLançamento: "22/05/2005",
    generos: [ "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para 1 pessoa" ],
    promocao: false,
    faixaEtaria: "18",
    banner: "https://upload.wikimedia.org/wikipedia/en/b/b5/God_of_War_%282005%29_cover.jpg",
    bannerName: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Guitar_hero_logo.png",
    imagens: [ "https://upload.wikimedia.org/wikipedia/en/5/5f/God_of_War_gameplay.jpg" , "https://upload.wikimedia.org/wikipedia/en/9/97/Ares_God_of_War_game.jpg" ],
    video: [ "bGlK31cSWs0" ],
    destaques: [ "destaques" , "carrossel" ],
    valorAnterior: "18,90",
    valorAtual: "18,90"
    },
    {
    id: "10",
    titulo: "resident evil 4",
    descricao: [" Leon S. Kennedy, um ex-policial de Raccoon City, agora agente do governo dos Estados Unidos. Sua missão é resgatar a filha do presidente dos EUA, Ashley Graham, que foi sequestrada por um culto religioso em uma aldeia isolada na Europa rural.","À medida que Leon avança pela aldeia e outras áreas, ele descobre que os aldeões foram infectados por um parasita conhecido como Las Plagas, controlado pelo culto Los Illuminados, que busca controlar o mundo. Leon deve enfrentar hordas de inimigos, monstros mutantes e lidar com a corrupção do governo enquanto tenta resgatar Ashley e descobrir a verdade por trás do culto." ],
    desenvolvedor: "Capcom",
    editora: "Capcom",
    dataLançamento: "11/01/2005",
    generos: [ "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para 1 pessoa" ],
    promocao: false,
    faixaEtaria: "18",
    banner: "https://i.pinimg.com/736x/22/a6/fa/22a6fab993e2848bdad48f0a5ca78387.jpg",
    bannerName: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Guitar_hero_logo.png",
    imagens: [ "https://upload.wikimedia.org/wikipedia/pt/4/42/Resident_Evil_4_Ganado_village.png" , "https://upload.wikimedia.org/wikipedia/pt/6/69/Captura_de_tela_da_vers%C3%A3o_beta_de_Resident_Evil_4.jpg" , "https://upload.wikimedia.org/wikipedia/en/4/42/Resident_Evil_4_Ganado_village.png" ],
    video: [ "dz8LguJYzvk" ],
    destaques: [ "destaques" , "carrossel" ],
    valorAnterior: "25,90",
    valorAtual: "25,90"
    },
    {
    id: "11",
    titulo: "downhill domination",
    descricao: ["Bem-vindo ao mundo de downhill domination, onde as corridas não são apenas sobre velocidade, mas também sobre coragem, estratégia e sobrevivência!","Você é um jovem ciclista em ascensão, Alex Hunter, que sonha em se tornar uma lenda no circuito mundial de mountain bike extremo. Depois de anos de treinos nas montanhas locais, você é convidado a competir na lendária Downhill League, uma competição brutal que reúne os melhores ciclistas do mundo para descer as trilhas mais perigosas já mapeadas." ],
    desenvolvedor: "Incognito Entertainment",
    editora: "Sony",
    dataLançamento: "23/07/2003",
    generos: [ "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para até 2 pessoas" ],
    promocao: false,
    faixaEtaria: "10",
    banner: "https://upload.wikimedia.org/wikipedia/pt/f/f1/DownhillPS2eu.jpg",
    bannerName: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Guitar_hero_logo.png",
    imagens: [ "https://i.pinimg.com/736x/4d/82/12/4d8212e162b5aaf9c2b5a7d1ae991157.jpg" , "https://i.pinimg.com/736x/32/cd/6b/32cd6b2f888061bcb3a7e5928313b339.jpg" , "https://i.pinimg.com/736x/b1/b9/92/b1b992084e9e78e220b2a012c7077fca.jpg" ],
    video: [ "TjK6JHmZ2Ko" ],
    destaques: [ "aventura" ],
    valorAnterior: "72,90",
    valorAtual: "72,90"
    },
]

export {
    jogos,
    calculoDesconto,
}
