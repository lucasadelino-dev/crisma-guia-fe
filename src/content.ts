export type Page = 'inicio' | 'rosario' | 'moral' | 'capitais' | 'crisma' | 'exame' | 'santos';
export type MysteryGroupId = 'gozosos' | 'dolorosos' | 'gloriosos' | 'luminosos';

export const SOURCE = {
  mortal: 'https://www.vatican.va/archive/cathechism_po/index_new/p3s1cap1_1699-1876_po.html',
  confession: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1420-1532_po.html',
  prayer: 'https://www.vatican.va/archive/cathechism_po/index_new/p4s1cap2_2650-2696_po.html',
  eucharist: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html',
  firstCommandments: 'https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap1_2083-2195_po.html',
  confirmation: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html',
  gifts: 'https://www.vatican.va/archive/cathechism_po/index_new/p3s1cap1_1699-1876_po.html',
  rosary: 'https://www.vatican.va/content/john-paul-ii/pt/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html',
  maria: 'https://www.vatican.va/archive/cathechism_po/index_new/p1s2cap3_683-1065_po.html',
  decalogue: 'https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap2_2196-2557_po.html',
  aparecida: 'https://www.vaticannews.va/pt/igreja/news/2023-10/nossa-senhora-aparecida-rainha-padroeira-brasil.html',
  carlo: 'https://www.causesanti.va/it/santi-e-beati/carlo-acutis.html',
  sandra: 'https://www.causesanti.va/it/santi-e-beati/sandra-sabattini.html',
} as const;

export const mysteries: Record<MysteryGroupId, {
  name: string; short: string; days: string; description: string;
  items: { title: string; scripture: string; meditate: string }[];
}> = {
  gozosos: {
    name: 'Mistérios Gozosos', short: 'Gozosos', days: 'Segunda e sábado',
    description: 'Contemplamos a alegria da chegada de Jesus e os primeiros anos de sua vida.',
    items: [
      { title: 'A Anunciação do Anjo a Maria', scripture: 'Lc 1,26–38', meditate: 'Acolher com confiança o chamado de Deus.' },
      { title: 'A Visitação de Maria a Isabel', scripture: 'Lc 1,39–56', meditate: 'Levar Cristo ao próximo pelo serviço e pela caridade.' },
      { title: 'O Nascimento de Jesus', scripture: 'Lc 2,1–20', meditate: 'Contemplar a humildade do Salvador.' },
      { title: 'A Apresentação de Jesus no Templo', scripture: 'Lc 2,22–38', meditate: 'Oferecer a Deus a própria vida.' },
      { title: 'O Encontro de Jesus no Templo', scripture: 'Lc 2,41–52', meditate: 'Buscar Jesus com perseverança e amor.' },
    ],
  },
  dolorosos: {
    name: 'Mistérios Dolorosos', short: 'Dolorosos', days: 'Terça e sexta',
    description: 'Meditamos a entrega amorosa de Cristo em sua Paixão.',
    items: [
      { title: 'A Agonia de Jesus no Horto', scripture: 'Mt 26,36–46', meditate: 'Confiar no Pai mesmo nas horas difíceis.' },
      { title: 'A Flagelação de Jesus', scripture: 'Jo 19,1', meditate: 'Reconhecer o amor que Cristo oferece por nós.' },
      { title: 'A Coroação de Espinhos', scripture: 'Mt 27,27–31', meditate: 'Aprender a humildade diante do sofrimento.' },
      { title: 'Jesus Carrega a Cruz', scripture: 'Lc 23,26–32', meditate: 'Caminhar com Cristo nas dificuldades.' },
      { title: 'A Crucifixão e Morte de Jesus', scripture: 'Jo 19,25–30', meditate: 'Contemplar a misericórdia que brota da Cruz.' },
    ],
  },
  gloriosos: {
    name: 'Mistérios Gloriosos', short: 'Gloriosos', days: 'Quarta e domingo',
    description: 'Celebramos a vitória de Cristo e a esperança da vida eterna.',
    items: [
      { title: 'A Ressurreição de Jesus', scripture: 'Mt 28,1–10', meditate: 'Renovar a esperança em Cristo ressuscitado.' },
      { title: 'A Ascensão de Jesus', scripture: 'At 1,6–11', meditate: 'Olhar para o Céu sem esquecer nossa missão.' },
      { title: 'A Vinda do Espírito Santo', scripture: 'At 2,1–13', meditate: 'Pedir docilidade à ação do Espírito Santo.' },
      { title: 'A Assunção de Nossa Senhora', scripture: 'CIC 966', meditate: 'Contemplar em Maria a promessa da vida eterna.' },
      { title: 'A Coroação de Maria no Céu', scripture: 'Ap 12,1; CIC 966', meditate: 'Pedir a intercessão de Maria e perseverar na fé.' },
    ],
  },
  luminosos: {
    name: 'Mistérios Luminosos', short: 'Luminosos', days: 'Quinta-feira',
    description: 'Acompanhamos a vida pública de Jesus, luz para o mundo.',
    items: [
      { title: 'O Batismo de Jesus no Jordão', scripture: 'Mt 3,13–17', meditate: 'Recordar a graça do nosso Batismo.' },
      { title: 'As Bodas de Caná', scripture: 'Jo 2,1–12', meditate: 'Escutar o convite de Maria a seguir Jesus.' },
      { title: 'O Anúncio do Reino e o Convite à Conversão', scripture: 'Mc 1,14–15', meditate: 'Abrir o coração ao Evangelho.' },
      { title: 'A Transfiguração de Jesus', scripture: 'Lc 9,28–36', meditate: 'Ouvir o Filho amado do Pai.' },
      { title: 'A Instituição da Eucaristia', scripture: 'Lc 22,14–20', meditate: 'Agradecer o dom da presença de Cristo na Eucaristia.' },
    ],
  },
};

export const weekMysteries: MysteryGroupId[] = [
  'gloriosos', 'gozosos', 'dolorosos', 'gloriosos', 'luminosos', 'dolorosos', 'gozosos',
];
export const weekDays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

export const prayers = [
  { title: 'Sinal da Cruz', body: 'Em nome do Pai, e do Filho, e do Espírito Santo. Amém.' },
  { title: 'Creio (Símbolo dos Apóstolos)', body: 'Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos; foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.' },
  { title: 'Pai-Nosso', body: 'Pai nosso que estais no céu, santificado seja o vosso nome; venha a nós o vosso Reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.' },
  { title: 'Ave-Maria', body: 'Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.' },
  { title: 'Glória ao Pai', body: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.' },
  { title: 'Ó meu Jesus (oração tradicional opcional)', body: 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas todas para o Céu e socorrei principalmente as que mais precisarem da vossa misericórdia.' },
  { title: 'Salve-Rainha', body: 'Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.' },
];

export const capitalSins = [
  { title: 'Soberba', virtue: 'Humildade', icon: 'crown', description: 'Exaltar a si mesmo de modo desordenado, colocando-se acima dos outros e esquecendo a própria dependência de Deus.', reflection: 'Praticar a gratidão e reconhecer o valor das outras pessoas.' },
  { title: 'Avareza', virtue: 'Generosidade', icon: 'coins', description: 'Apego desordenado aos bens materiais, quando possuir se torna mais importante que amar e partilhar.', reflection: 'Partilhar com quem precisa e cultivar o desapego.' },
  { title: 'Luxúria', virtue: 'Castidade', icon: 'heart', description: 'Busca desordenada do prazer sexual, separando-o de seu sentido de amor e dignidade.', reflection: 'Cultivar o respeito pelo próprio corpo e pela dignidade do outro.' },
  { title: 'Ira', virtue: 'Mansidão', icon: 'flame', description: 'Deixar que a raiva se converta em desejo injusto de ferir, humilhar ou vingar-se.', reflection: 'Aprender a responder com paciência e buscar a reconciliação.' },
  { title: 'Gula', virtue: 'Temperança', icon: 'coffee', description: 'Falta de medida na busca dos prazeres da comida e da bebida.', reflection: 'Exercitar o equilíbrio, a gratidão e o domínio de si.' },
  { title: 'Inveja', virtue: 'Caridade', icon: 'eye', description: 'Entristecer-se pelo bem do outro ou desejar que ele perca aquilo que possui.', reflection: 'Alegrar-se com as conquistas alheias e agradecer pelos próprios dons.' },
  { title: 'Preguiça ou acídia', virtue: 'Diligência', icon: 'moon', description: 'Negligenciar o bem devido, especialmente quando se perde o zelo pela vida espiritual.', reflection: 'Retomar pequenos compromissos de amor e serviço, com perseverança.' },
];

export const gifts = [
  { title: 'Sabedoria', description: 'Ajuda a contemplar a vida e todas as coisas à luz do amor de Deus.' },
  { title: 'Entendimento', description: 'Favorece a compreensão mais profunda das verdades da fé.' },
  { title: 'Conselho', description: 'Orienta a escolher o bem e a discernir os caminhos da vida.' },
  { title: 'Fortaleza', description: 'Sustenta a coragem de fazer o bem diante das dificuldades.' },
  { title: 'Ciência', description: 'Ajuda a reconhecer a criação e a própria vida como dons que conduzem a Deus.' },
  { title: 'Piedade', description: 'Cultiva a confiança filial em Deus e o amor ao próximo.' },
  { title: 'Temor de Deus', description: 'Desperta reverência amorosa a Deus e o desejo de não se afastar dele.' },
];
export const fruits = ['Caridade', 'Alegria', 'Paz', 'Paciência', 'Longanimidade', 'Bondade', 'Benignidade', 'Mansidão', 'Fidelidade', 'Modéstia', 'Continência', 'Castidade'];

export const commandments = [
  { title: '1º — Amar a Deus sobre todas as coisas', questions: ['Tenho reservado espaço para Deus na minha vida?', 'Deixei que algo tomasse, de forma consciente, o lugar que pertence a Deus?', 'Busquei crescer na confiança e na oração?'] },
  { title: '2º — Não tomar seu santo nome em vão', questions: ['Usei o nome de Deus deliberadamente de modo desrespeitoso?', 'Fui sincero com os compromissos assumidos em nome de Deus?'] },
  { title: '3º — Guardar domingos e festas', questions: ['Participei da Missa dominical quando tinha condições de fazê-lo?', 'Procurei viver o domingo como dia de Deus, repouso e caridade?'] },
  { title: '4º — Honrar pai e mãe', questions: ['Tratei minha família com respeito e gratidão?', 'Cumpri minhas responsabilidades de cuidado e convivência?'] },
  { title: '5º — Não matar', questions: ['Respeitei a vida e a dignidade das outras pessoas?', 'Alimentei deliberadamente ódio ou desejo de vingança?', 'Procurei cuidar de quem precisava de ajuda?'] },
  { title: '6º — Não pecar contra a castidade', questions: ['Procurei viver a afetividade com respeito e responsabilidade?', 'Evitei tratar a mim mesmo ou ao outro como objeto?'] },
  { title: '7º — Não furtar', questions: ['Respeitei os bens e o trabalho das outras pessoas?', 'Fui justo em minhas responsabilidades profissionais e materiais?', 'Pratiquei a generosidade quando pude?'] },
  { title: '8º — Não levantar falso testemunho', questions: ['Disse a verdade com caridade?', 'Evitei espalhar boatos ou prejudicar injustamente a reputação alheia?'] },
  { title: '9º — Não desejar a mulher do próximo', questions: ['Cultivei um olhar respeitoso para as outras pessoas?', 'Procurei guardar a pureza de coração sem confundir tentações com escolhas?'] },
  { title: '10º — Não cobiçar as coisas alheias', questions: ['Deixei que a inveja ou a comparação me afastassem da gratidão?', 'Busquei viver com justiça e desapego dos bens materiais?'] },
];

export const saints = [
  {
    name: 'Nossa Senhora Aparecida', subtitle: 'Rainha e Padroeira do Brasil', year: '12 de outubro', initials: 'M', photo: 'santos/nossa-senhora-aparecida.webp',
    symbol: 'crown', quote: 'Sob o manto de Maria, aprendemos a seguir Jesus.',
    story: 'Em 1717, pescadores encontraram nas águas do rio Paraíba do Sul uma pequena imagem de Nossa Senhora da Conceição. A devoção cresceu entre as famílias e tornou-se um dos grandes sinais de fé do povo brasileiro. Em 1930, o papa Pio XI proclamou Nossa Senhora Aparecida Rainha e Padroeira do Brasil.',
    example: 'Confiança, simplicidade, intercessão e acolhimento.',
    prayer: 'Ó Mãe Aparecida, acompanha nossa caminhada, leva nossas necessidades a teu Filho Jesus e ensina-nos a viver com fé, esperança e caridade. Amém.',
    source: SOURCE.aparecida, sourceName: 'Vatican News · História de Aparecida',
    catechism: 'CIC 971', catechismUrl: SOURCE.maria,
  },
  {
    name: 'São Carlo Acutis', subtitle: 'Santidade na vida cotidiana', year: '12 de outubro', initials: 'C', photo: 'santos/carlo-acutis.webp',
    symbol: 'monitor', quote: 'A vida comum também pode tornar-se caminho de santidade.',
    story: 'Carlo nasceu em 1991 e cresceu em Milão. Tinha grande amor pela Eucaristia, pela Virgem Maria e pelo Rosário. Usou seus conhecimentos de informática para divulgar a fé e se dedicou à caridade. Morreu em 2006, aos 15 anos, e foi canonizado em 7 de setembro de 2025 pelo papa Leão XIV.',
    example: 'Amizade com Jesus, serviço aos pobres e bom uso da tecnologia.',
    prayer: 'Senhor Jesus, a exemplo de São Carlo Acutis, ajuda-nos a encontrar-te na Eucaristia, a servir os necessitados e a santificar nossa vida cotidiana. Amém.',
    source: SOURCE.carlo, sourceName: 'Dicastério das Causas dos Santos · Carlo Acutis',
    catechism: 'CIC 1324', catechismUrl: SOURCE.eucharist,
  },
  {
    name: 'Beata Sandra Sabattini', subtitle: 'Caridade que transforma', year: '4 de maio', initials: 'S', photo: 'santos/sandra-sabattini.webp',
    symbol: 'hand-heart', quote: 'O amor se concretiza no cuidado com quem sofre.',
    story: 'Sandra nasceu em 1961, na Itália. Desde jovem participou de trabalhos de acolhimento e serviço a pessoas com deficiência e em situação de dependência química, ligada à Comunidade Papa João XXIII. Morreu em 1984, aos 22 anos, e foi beatificada em Rimini em 24 de outubro de 2021.',
    example: 'Amor aos pequenos, generosidade e entrega ao próximo.',
    prayer: 'Senhor, pela intercessão da Beata Sandra Sabattini, ensina-nos a reconhecer tua presença em quem sofre e a servir com alegria e ternura. Amém.',
    source: SOURCE.sandra, sourceName: 'Dicastério das Causas dos Santos · Sandra Sabattini',
    catechism: 'CIC 2447', catechismUrl: SOURCE.decalogue,
  },
];
