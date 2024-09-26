const calculoDesconto = (valorAnterio:string , valorAtual:string) => {
    const anterio = parseFloat(valorAnterio);
    const atual = parseFloat(valorAtual);
    
    const desconto = parseInt(String(((anterio-atual) / anterio * 100)))
    
    return `-${desconto}%`
}

const jogos = [
    {
        id: "01",
        titulo: "GTA SAN ANDREAS",
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
        valorAnterior: "149,99",
        valorAtual: "2,99",
    },
    {
    id: "02",
    titulo: "Midnight club 3",
    descricao: ["A série que levou as corridas em pistas fechadas para as ruas da cidade está de volta para elevar o patamar mais uma vez." , "Equipe sua máquina com as rodas, os acabamentos e as melhorias mais atuais. Enfrente a elite das corridas de rua acelerando pelo trânsito a mais de 200 km/h."],
    desenvolvedor: "Rockstar San Diego",
    editora: "Rockstar Games",
    dataLançamento: "11/04/2005",
    generos: [ "corrida" ],
    recursos: [ "Compativel com Controle" , "Jogo para até 2 Pessoas" ],
    promocao: false,
    faixaEtaria: "14",
    banner: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg?im=Resize=640",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
    imagens: [ "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a12941047f5ff6b6e244a08cdc762da.jpg", "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/40c5a67e7ac7061dd9d76ead5b0e9555.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b68a28ff744321feca3a1cd814536f0.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/749ace7c507d0c8b25d34d0deeb37001.jpg" ],
    video: [ "axe9aGcTTWg" , "FPhyhAM41K8" ],
    destaques: [ "corrida" ],
    valorAnterior: "130,00",
    valorAtual: "128,00",
    },
    {
    id: "03",
    titulo: "Red Dead Revolver",
    descricao: ["Vasto, ríspido e sem lei. Quando era jovem, você foi incapaz de impedir o massacre da sua família nas mãos de bandidos. Após muitos anos, você ganha a vida como caçador de recompensas, entregando criminosos à justiça enquanto luta para desvendar o mistério do seu passado. Você precisa encontrar quem assassinou sua família e, então, se vingar." , "Um eletrizante jogo estilo arcade em terceira pessoa repleto de tiroteios intensos, Red Dead Revolver é uma clássica história de vingança no faroeste indomável."],
    desenvolvedor: "Rockstar San Diego",
    editora: "Rockstar Games",
    dataLançamento: "03/05/2004",
    generos: [ "ação" , "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para uma pessoa" ],
    promocao: true,
    faixaEtaria: "14",
    banner: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg?im=Resize=640",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
    imagens: [ "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2123f33bb7cd695d5b28df2f2764e322.jpg", "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/49171a689998dec85eafabac78fd24c0.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c1d42e298856299b96ef822e72c9ac8e.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cdd37ca22a6eb559fc14292fdc6acf2c.jpg" ],
    video: [ "a4q6wKGQoik" ],
    destaques: [ "ação" , "aventura" , "destaques" ],
    valorAnterior: "150,00",
    valorAtual: "58,00",
    },
    {
    id: "04",
    titulo: "Bully",
    descricao: ["Domine os corredores da Bullworth Academy no papel de Jimmy Hopkins, um estudante endiabrado que deve superar os obstáculos de uma escola preparatória em decadência onde mentirosos, trapaceiros e esnobes são os membros mais populares do corpo estudantil e docente. Confronte valentões, passe a perna nos professores e realize atividades extracurriculares fora do campus na cidade de Bullworth enquanto aprende a sobreviver ao ano escolar e a tomar controle da escola."],
    desenvolvedor: "Rockstar Vancouver",
    editora: "Rockstar Games",
    dataLançamento: "17/10/2006",
    generos: [ "ação" , "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para uma pessoa" ],
    promocao: false,
    faixaEtaria: "14",
    banner: "https://upload.wikimedia.org/wikipedia/pt/d/de/Bully_us_capa_pt.jpg",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
    imagens: [ "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/b11ccecce27c5213cdaacf0df3181e8781272e9b.jpg" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/047a7ab24bf95536079d39153b99c1bfbb7dd85e.jpg" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/771a35810e503471c64b3ff8d3a64ba82aed2f7a.jpg?im=Resize=1440" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/a4b78595f5d93193eef9e46c3d7978d574b31a5e.jpg?im=Resize=1440" , "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/bully/3f477bd48cde11f98013777355d08ec1d5986ea6.jpg?im=Resize=1440" ],
    video: [ "M4g9vf3gX5E" , "88KNf0MtU14" ],
    destaques: [ "ação" , "aventura" , "destaques" ],
    valorAnterior: "130,00",
    valorAtual: "128,00",
    },
    {
    id: "05",
    titulo: "Gta Vice City",
    descricao: ["Bem-vindo aos anos 80. Da década de penteados glam, dos excessos e dos ternos pastel, vem a história de um homem que sobe ao topo da cadeia criminal no retorno de Grand Theft Auto." , "Vice City é uma grande área urbana que engloba de praias até pântanos e do glamour até o gueto, e é a mais variada, completa e animada cidade digital já criada. Combinando uma jogabilidade não linear com uma narrativa centrada nos personagens, você chega a uma cidade cheia de prazeres e degradação, e tem a oportunidade de dominá-la como quiser."],
    desenvolvedor: "Rockstar North",
    editora: "Rockstar Games",
    dataLançamento: "27/08/2002",
    generos: [ "ação" , "aventura" ],
    recursos: [ "Compativel com Controle" , "Jogo para uma pessoa" ],
    promocao: false,
    faixaEtaria: "18",
    banner: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg",
    bannerName: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
    imagens: [ "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c3466bd07d09ec14c9555505ea4e6af.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b0353d1406b5264dc18326a811bc5bb5.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0301d4689fa8e170ceefe118a18b3afb.jpg" , "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e689e87adb68899abb7957e4b0d70612.jpg" ],
    video: [ "W-7zhljUPJg" ],
    destaques: [ "ação" , "aventura" , "gta" ],
    valorAnterior: "130,00",
    valorAtual: "128,00",
    },
]

export const funcoes = {
    jogos,
    calculoDesconto,
}
