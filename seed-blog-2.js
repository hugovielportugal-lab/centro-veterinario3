// ============================================================
// Script para carregar os 10 novos artigos do blog de uma vez
// (golpe de calor, esgana, otite, dirofilariose, IRC felina,
// cistite felina, FeLV/FIV, saúde dentária, obesidade, ansiedade).
//
// COMO USAR:
// 1. Abre o admin.html no browser e faz login normalmente.
// 2. Abre a consola do browser (F12, depois separador "Console").
// 3. Cola este script todo ali e carrega Enter.
// 4. Vai ao separador "Blog" no admin — os 10 artigos devem aparecer.
//
// Corre isto só uma vez, para não duplicar os artigos.
// ============================================================

const novosArtigos = [
  {
    titulo: "Golpe de Calor em Cães e Gatos: como reconhecer e agir",
    categoria: "Bem-estar",
    resumo: "No verão, o calor pode ser perigoso — saiba reconhecer os primeiros sinais e o que fazer enquanto não chega ao veterinário.",
    publicado: true,
    conteudo:
`O golpe de calor acontece quando o corpo do animal já não consegue regular a sua própria temperatura, e pode instalar-se em poucos minutos — sobretudo em dias quentes, dentro de carros fechados, ou em passeios longos a horas de maior calor.

Os cães e gatos não suam como nós; regulam a temperatura sobretudo através da respiração ofegante. Raças braquicéfalas (focinho achatado, como Bulldogs, Pugs ou Persas), animais idosos, obesos ou com pelo muito denso têm mais dificuldade em arrefecer e correm mais risco.

Os sinais de alerta incluem respiração ofegante muito intensa, gengivas muito vermelhas ou arroxeadas, saliva excessiva, fraqueza, andar instável, vómitos, e em casos graves, colapso ou convulsões. Se notar algum destes sinais, trata-se de uma urgência.

Enquanto se dirige ao veterinário (ou este vem ter consigo), pode ajudar a arrefecer o animal com água morna (nunca gelada, que pode ser contraproducente) nas patas, virilhas e pescoço, e garantir ventilação e sombra. Mas isto nunca substitui a ida ao veterinário — o golpe de calor pode causar danos internos graves mesmo depois de o animal parecer melhor.

A prevenção é simples: nunca deixar o animal num carro fechado, mesmo por poucos minutos; passear nas horas mais frescas do dia; garantir sempre água fresca disponível; e ter atenção redobrada com animais de raças de risco. Em caso de dúvida, contacte-nos.`
  },
  {
    titulo: "Esgana Canina: uma doença grave que a vacina previne",
    categoria: "Doenças",
    resumo: "Tão perigosa como a parvovirose, mas menos falada — e completamente evitável com o plano de vacinação em dia.",
    publicado: true,
    conteudo:
`A esgana canina (ou cinomose) é uma doença viral grave, que afeta o sistema respiratório, digestivo e, em casos avançados, o sistema nervoso do cão. É altamente contagiosa entre cães, e continua a surgir sobretudo em animais não vacinados.

Os primeiros sintomas costumam ser inespecíficos — febre, falta de apetite, secreção nos olhos e nariz — o que por vezes atrasa o diagnóstico. À medida que avança, podem surgir tosse, vómitos, diarreia, e nas fases mais graves, tremores, convulsões ou outros sinais neurológicos, que podem deixar sequelas permanentes mesmo que o animal sobreviva.

Não existe um tratamento que elimine diretamente o vírus — os cuidados veterinários focam-se em apoiar o animal e tratar os sintomas e complicações enquanto o sistema imunitário combate a infeção, o que torna a prevenção ainda mais importante.

A vacinação é altamente eficaz e faz parte do plano de vacinas essencial desde cachorro, com reforços regulares ao longo da vida. Se o seu cão ainda não tem as vacinas em dia, ou não sabe ao certo o histórico dele (por exemplo, em caso de adoção), fale connosco — é uma das formas mais simples de proteger a saúde do seu animal a longo prazo.`
  },
  {
    titulo: "Otite Canina: o motivo mais comum de idas ao veterinário",
    categoria: "Doenças",
    resumo: "Coceira, mau cheiro e cabeça a abanar — a otite é desconfortável para o seu cão, mas fácil de identificar e tratar cedo.",
    publicado: true,
    conteudo:
`A otite — inflamação ou infeção do canal auditivo — é uma das razões mais frequentes para uma visita ao veterinário. Afeta cães de qualquer idade, mas é mais comum em raças de orelhas caídas ou muito peludas, onde a ventilação do ouvido é mais reduzida, e em cães que gostam de nadar.

Os sinais mais comuns incluem o cão a abanar muito a cabeça, a coçar a orelha com a pata, sensibilidade ao toque na zona, cheiro desagradável, e por vezes um corrimento escuro ou amarelado visível na entrada do ouvido. Em casos mais avançados, pode notar-se a orelha vermelha, inchada ou até a cabeça ligeiramente inclinada para um lado.

As causas podem variar bastante: alergias (alimentares ou ambientais), excesso de humidade, corpos estranhos (como espigas), ou desequilíbrios na flora natural do ouvido que permitem o crescimento excessivo de bactérias ou fungos. É por isso que o tratamento certo depende de se identificar a causa — o que só um exame veterinário consegue determinar com segurança.

Não é recomendável tentar tratar em casa com produtos genéricos sem orientação, já que um tratamento errado pode mascarar sintomas ou até agravar o problema. Se o seu cão está com algum destes sinais, o melhor é marcar uma consulta — quanto mais cedo for tratada, mais rápido e simples costuma ser o processo.`
  },
  {
    titulo: "Dirofilariose Canina: a doença do coração transmitida por mosquitos",
    categoria: "Doenças",
    resumo: "Pouco falada, mas séria — os vermes do coração instalam-se silenciosamente e só se manifestam quando o dano já é grande.",
    publicado: true,
    conteudo:
`A dirofilariose, também conhecida como "doença do verme do coração", é transmitida pela picada de mosquitos infetados, que introduzem larvas que se desenvolvem no corpo do cão até se tornarem vermes adultos alojados no coração e nos vasos sanguíneos dos pulmões.

O que torna esta doença especialmente traiçoeira é que, nas fases iniciais, o cão pode não apresentar sintoma nenhum — os sinais só costumam aparecer quando os vermes já estão instalados há algum tempo e o coração e os pulmões já estão sob esforço. Nessa altura, podem surgir tosse persistente, cansaço fácil, dificuldade em respirar, perda de peso, e em casos avançados, insuficiência cardíaca.

Precisamente por ser silenciosa no início, a dirofilariose é uma doença em que a prevenção vale muito mais do que o tratamento — que, quando necessário, é longo, exige repouso rigoroso e nem sempre está isento de riscos para o animal.

A boa notícia é que a prevenção é simples: existem antiparasitários (mensais ou de outras periodicidades, consoante o produto) que protegem eficazmente contra esta doença, e o seu veterinário pode indicar a opção mais adequada ao seu cão e à zona onde vive. Se o seu cão ainda não está protegido contra a dirofilariose, é um bom momento para perguntar.`
  },
  {
    titulo: "Insuficiência Renal Crónica em Gatos: o que todo o tutor devia saber",
    categoria: "Doenças",
    resumo: "Uma das doenças mais comuns em gatos mais velhos — quanto mais cedo for detetada, maior a diferença que se consegue fazer.",
    publicado: true,
    conteudo:
`A insuficiência renal crónica é uma das condições mais frequentes em gatos de idade avançada, e uma das principais razões pelas quais os check-ups regulares são tão importantes a partir de determinada idade.

Os rins vão perdendo função gradualmente, muitas vezes ao longo de meses ou anos, o que significa que os sintomas só costumam tornar-se visíveis quando uma parte significativa da função renal já foi perdida. Os sinais mais comuns incluem aumento da sede e da quantidade de urina, perda de peso, diminuição do apetite, pelo com pior aspeto, e letargia.

Como estes sinais podem ser subtis e instalar-se lentamente, muitos tutores só os notam numa fase já avançada — o que reforça a importância das análises de sangue e urina em consultas de rotina, especialmente em gatos com mais de 7-8 anos, mesmo que pareçam saudáveis. Um exame de rotina consegue muitas vezes detetar alterações antes de haver sintomas visíveis.

Embora não tenha cura, a insuficiência renal crónica tem tratamento e maneio que ajudam a preservar a função renal existente e a qualidade de vida do gato — que passa geralmente por alimentação específica, controlo da pressão arterial, e acompanhamento veterinário regular. Quanto mais cedo for identificada, mais opções existem e melhor costuma ser a resposta ao tratamento.

Se o seu gato tem mais de 7 anos e já não faz check-ups regulares, vale a pena marcar uma consulta.`
  },
  {
    titulo: "Cistite e Obstrução Urinária em Gatos: quando é uma urgência",
    categoria: "Doenças",
    resumo: "Um gato a fazer esforço na caixa de areia sem conseguir urinar pode ser uma emergência real — saiba reconhecer os sinais.",
    publicado: true,
    conteudo:
`Os problemas do trato urinário são muito comuns em gatos, e vão desde uma cistite mais simples até uma obstrução urinária, que é uma verdadeira urgência veterinária — sobretudo em gatos machos, cuja uretra é mais estreita e mais facilmente bloqueada.

Os sinais a que deve estar atento incluem o gato a ir à caixa de areia com muita frequência mas a urinar pouco ou nada de cada vez, esforço visível ou vocalização (miados de dor) enquanto tenta urinar, sangue na urina, lamber excessivamente a zona genital, e urinar fora da caixa de areia habitual.

Se notar que o seu gato está a fazer esforço repetido sem conseguir urinar, isto pode indicar uma obstrução total — uma emergência que pode tornar-se fatal em menos de 24 a 48 horas se não for tratada, porque o gato deixa de conseguir eliminar toxinas do corpo. Nesse cenário, não se deve esperar para ver se passa — é preciso assistência veterinária imediata.

Casos menos graves de cistite podem ter causas variadas, incluindo stress, o que torna o ambiente do gato (rotina, número de caixas de areia disponíveis, conflitos com outros animais em casa) parte importante tanto da prevenção como da recuperação.

Manter uma boa hidratação (incentivar o consumo de água, considerar alimentação húmida), um ambiente pouco stressante e caixas de areia limpas e em número suficiente ajuda a reduzir o risco. Perante qualquer sinal de dificuldade a urinar, contacte-nos sem esperar.`
  },
  {
    titulo: "FeLV e FIV: o que são a leucemia e a imunodeficiência felina",
    categoria: "Doenças",
    resumo: "Duas doenças virais importantes para gatos com acesso ao exterior — saiba a diferença e como se protegem.",
    publicado: true,
    conteudo:
`FeLV (vírus da leucemia felina) e FIV (vírus da imunodeficiência felina) são duas doenças virais distintas, mas frequentemente mencionadas em conjunto por afetarem sobretudo gatos com acesso ao exterior e por ambas comprometerem o sistema imunitário do animal.

O FeLV transmite-se principalmente através do contacto próximo e prolongado entre gatos — partilha de comedouros, mútuo grooming, mordidas — e pode causar desde anemia e supressão do sistema imunitário até certos tipos de cancro. O FIV transmite-se sobretudo através de mordidas profundas, sendo por isso mais comum em gatos machos não castrados com acesso à rua, que se envolvem mais facilmente em confrontos territoriais.

Em ambos os casos, um gato infetado pode não mostrar sinais durante muito tempo, já que o vírus atua sobretudo enfraquecendo progressivamente as defesas do animal — tornando-o mais vulnerável a outras infeções e doenças que, num gato saudável, seriam facilmente combatidas.

O diagnóstico é feito através de um simples teste de sangue, e é especialmente recomendado antes de introduzir um gato novo em casa onde já existam outros gatos, já que a convivência próxima facilita a transmissão.

Existe vacina disponível para o FeLV (não para o FIV), pelo que a prevenção passa também por reduzir o acesso ao exterior sem supervisão, e por testar e vacinar adequadamente qualquer gato novo antes do contacto com os restantes. Se tem dúvidas sobre o estado do seu gato ou está a pensar adotar mais um, fale connosco.`
  },
  {
    titulo: "Saúde Dentária em Cães e Gatos: o cuidado mais esquecido",
    categoria: "Bem-estar",
    resumo: "A maioria dos animais com mais de 3 anos já tem algum grau de doença dentária — e o hálito a mais não é normal.",
    publicado: true,
    conteudo:
`A saúde dentária é provavelmente a área de cuidados mais subestimada por tutores de cães e gatos. É comum pensar-se que mau hálito é "normal" no animal, quando na maioria das vezes é sinal de acumulação de tártaro e inflamação das gengivas — o início da doença periodontal.

Se não for tratada, a doença periodontal avança de forma progressiva: das gengivas inflamadas, pode evoluir para perda óssea à volta dos dentes, dor crónica (muitas vezes silenciosa, porque os animais tendem a esconder a dor), perda de dentes, e nalguns casos, as bactérias da boca podem mesmo afetar outros órgãos, como o coração e os rins.

Os sinais a que deve estar atento incluem mau hálito persistente, tártaro visível (uma camada amarelada/acastanhada nos dentes), gengivas vermelhas ou a sangrar, dificuldade ou relutância em mastigar, e menos apetite do que o habitual.

A boa notícia é que a prevenção é simples e eficaz: escovagem regular dos dentes (idealmente desde cedo, para o animal se habituar), snacks e rações formuladas para ajudar ao controlo do tártaro, e limpezas dentárias profissionais quando indicadas pelo veterinário.

Uma vez por ano, no mínimo, vale a pena um veterinário avaliar a boca do seu animal — muitas vezes durante o check-up de rotina. Se há tempo que não olha bem para os dentes do seu cão ou gato, esta pode ser uma boa altura para o fazer.`
  },
  {
    titulo: "Obesidade em Cães e Gatos: o peso a mais que custa saúde",
    categoria: "Nutrição",
    resumo: "É um dos problemas de saúde mais comuns — e mais evitáveis — em cães e gatos, com impacto direto na esperança de vida.",
    publicado: true,
    conteudo:
`A obesidade é uma das condições de saúde mais comuns em cães e gatos, e frequentemente uma das menos reconhecidas pelos próprios tutores — é fácil olhar para o próprio animal todos os dias e não notar o aumento gradual de peso.

O excesso de peso não é apenas uma questão estética: aumenta significativamente o risco de problemas articulares (como artrose), diabetes, problemas cardíacos e respiratórios, e reduz a esperança de vida. Em gatos, está também associada a maior risco de doenças urinárias e hepáticas.

Avaliar se um animal está com peso saudável não depende só da balança — o veterinário avalia também a condição corporal (se se conseguem sentir as costelas facilmente, se existe "cintura" vista de cima, entre outros sinais), já que o peso ideal varia muito consoante a raça, idade e estrutura do animal.

As causas mais comuns são um desequilíbrio simples entre a energia consumida e a gasta: quantidade de comida acima do necessário, petiscos em excesso (que muitas vezes os tutores não contabilizam como "comida a mais"), e pouca atividade física. Em alguns casos, pode também haver uma causa médica subjacente, o que reforça a importância de uma avaliação veterinária antes de iniciar qualquer plano de perda de peso.

A boa notícia é que, com um plano adequado — ajuste da quantidade e tipo de alimentação, gestão de petiscos, e mais atividade física — a maioria dos animais consegue perder peso de forma segura e gradual. Se tem dúvidas sobre o peso do seu animal, podemos ajudar a avaliar e a traçar um plano adequado.`
  },
  {
    titulo: "Ansiedade e Stress em Cães e Gatos: sinais a não ignorar",
    categoria: "Bem-estar",
    resumo: "Fogo de artifício, mudanças em casa, separação — o bem-estar emocional do seu animal também merece atenção.",
    publicado: true,
    conteudo:
`Nem só de saúde física se cuida um animal de estimação — a ansiedade e o stress são também motivo real de sofrimento, e podem ter impacto direto na saúde física e no comportamento de cães e gatos.

Em cães, a ansiedade manifesta-se muitas vezes através de comportamento destrutivo quando ficam sozinhos, latidos excessivos, tremores, salivação, ou tentativas de fuga — situações comuns durante trovoadas ou fogo de artifício, ou associadas à ansiedade de separação. Em gatos, os sinais podem ser mais subtis: esconder-se mais do que o habitual, urinar fora da caixa de areia, lamber-se excessivamente até criar zonas sem pelo, ou mudanças no apetite.

Estas situações não são "manias" do animal — são respostas genuínas de stress, e ignorá-las pode agravar o problema com o tempo, além de, nalguns casos, contribuir para problemas físicos (como a cistite felina associada a stress, já referida noutro artigo).

Algumas medidas simples ajudam bastante: criar um espaço seguro e calmo para o animal se refugiar, manter rotinas previsíveis, introduzir mudanças (mudança de casa, chegada de outro animal ou bebé) de forma gradual, e, no caso de eventos previsíveis como o fim do ano, preparar-se com antecedência em vez de reagir no momento.

Em casos mais persistentes ou intensos, existem também abordagens veterinárias — desde feromonas calmantes a, em casos selecionados, apoio medicamentoso — que podem fazer diferença real na qualidade de vida do animal. Se sente que o seu cão ou gato vive em stress frequente, fale connosco: há sempre algo que se pode fazer para ajudar.`
  }
];

(async () => {
  for (const artigo of novosArtigos) {
    await db.collection('artigos').add({
      ...artigo,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('Artigo criado:', artigo.titulo);
  }
  console.log('Concluído! ' + novosArtigos.length + ' artigos criados.');
})();
