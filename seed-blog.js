// ============================================================
// Script para carregar os 3 artigos iniciais do blog de uma vez.
//
// COMO USAR:
// 1. Abre o admin.html no browser e faz login normalmente.
// 2. Abre a consola do browser (tecla F12, ou Ctrl+Shift+J no Chrome/Edge,
//    Cmd+Option+J no Mac).
// 3. Cola este script todo ali e carrega Enter.
// 4. Vai ao separador "Blog" no admin — os 3 artigos devem aparecer.
//
// Podes correr isto só uma vez. Se correres duas vezes, ficas com artigos
// duplicados (nesse caso, apaga os repetidos no separador Blog).
// ============================================================

const artigosIniciais = [
  {
    titulo: "Leishmaniose Canina: sintomas e prevenção",
    categoria: "Doenças",
    resumo: "Uma doença séria e comum em Portugal, transmitida por um mosquito — saiba como reconhecer os sinais e proteger o seu cão.",
    publicado: true,
    conteudo:
`A leishmaniose canina é uma doença parasitária transmitida pela picada do flebótomo, um pequeno inseto semelhante a um mosquito, mais ativo ao amanhecer e ao anoitecer. É uma doença bastante comum em Portugal e noutros países da bacia do Mediterrâneo, pelo que todos os tutores devem conhecer os seus sinais.

Os sintomas podem demorar meses ou até anos a aparecer depois da picada, e variam muito de cão para cão. Os mais frequentes incluem lesões na pele (descamação, feridas que não cicatrizam, sobretudo à volta dos olhos, orelhas e focinho), perda de peso mesmo comendo normalmente, cansaço e falta de energia, crescimento anormal das unhas, e em casos mais avançados, problemas renais graves.

O diagnóstico é feito através de análises ao sangue, por isso, se notar algum destes sinais, o mais importante é marcar uma consulta e não esperar para ver se "passa sozinho".

A boa notícia é que a leishmaniose tem várias formas de prevenção eficazes: coleiras e pipetas repelentes que afastam o flebótomo antes da picada, e uma vacina disponível para cães saudáveis. Evitar passeios ao final da tarde e ao amanhecer, quando o inseto está mais ativo, também ajuda a reduzir o risco.

Quando detetada, a leishmaniose tem tratamento e muitos cães conseguem ter uma boa qualidade de vida com acompanhamento veterinário regular — mas quanto mais cedo for identificada, melhor é o prognóstico. Se tem dúvidas sobre a proteção do seu animal, fale connosco.`
  },
  {
    titulo: "Parvovirose: a doença que todo o tutor de cachorro devia conhecer",
    categoria: "Doenças",
    resumo: "Altamente contagiosa e potencialmente fatal em cachorros — perceba porque é que a vacinação atempada faz toda a diferença.",
    publicado: true,
    conteudo:
`A parvovirose canina é uma das doenças mais temidas por quem tem um cachorro em casa, e com razão: é altamente contagiosa, espalha-se rapidamente e pode ser fatal em poucos dias, especialmente em animais jovens e não vacinados.

O vírus transmite-se através do contacto com fezes contaminadas, mas também através de superfícies, mãos, objetos ou o chão de locais onde tenha passado um animal infetado — é um vírus muito resistente, que pode sobreviver no ambiente durante meses. Por isso, mesmo cães que não têm contacto direto com outros animais doentes podem ser infetados.

Os sinais mais comuns são vómitos frequentes, diarreia (muitas vezes com sangue), falta de apetite, prostração e desidratação rápida. É considerada uma urgência veterinária: se o seu cachorro apresentar estes sintomas, sobretudo se ainda não completou o plano de vacinação, deve procurar assistência veterinária o mais depressa possível.

A prevenção mais eficaz é a vacinação, feita em várias doses durante os primeiros meses de vida, com reforços posteriores. Até o plano de vacinação estar completo, é importante evitar que o cachorro tenha contacto com outros cães cujo estado vacinal não se conheça, ou com espaços públicos frequentados por muitos animais (parques, passeios movimentados).

O tratamento passa por cuidados de suporte em ambiente veterinário — fluidoterapia, controlo dos vómitos e da dor, e acompanhamento próximo — e quanto mais cedo começar, maiores as hipóteses de recuperação. Se ainda não sabe se o seu cachorro está com o plano de vacinas em dia, é um bom momento para verificar.`
  },
  {
    titulo: "Porque é que a prevenção é tão importante",
    categoria: "Prevenção",
    resumo: "Vacinas, desparasitação e check-ups regulares custam menos, em todos os sentidos, do que tratar uma doença já instalada.",
    publicado: true,
    conteudo:
`É comum só se pensar no veterinário quando algo já está mal — mas grande parte dos problemas de saúde mais sérios em cães e gatos podem ser evitados, ou detetados muito mais cedo, com hábitos simples de prevenção.

A vacinação é a primeira linha de defesa contra doenças graves e muitas vezes fatais, como a parvovirose, a esgana ou a raiva. O plano de vacinas começa ainda em cachorro/gatinho, mas continua ao longo de toda a vida do animal, com reforços regulares — faltar a um reforço pode deixar o animal vulnerável sem que o tutor se aperceba.

A desparasitação, tanto interna (vermes) como externa (pulgas, carraças, flebótomos), é outro pilar fundamental. Muitos parasitas externos transmitem doenças graves, como já vimos no caso da leishmaniose, e a desparasitação regular é uma forma simples e acessível de reduzir esse risco significativamente.

As consultas de check-up regulares, mesmo quando o animal parece saudável, permitem detetar alterações precoces — num exame de rotina, palpação, análises de sangue ou simplesmente ao ouvir o coração, um veterinário consegue muitas vezes identificar sinais de alerta antes de se tornarem um problema sério. Doenças como a insuficiência renal ou o hipertiroidismo, por exemplo, têm um prognóstico muito melhor quando identificadas cedo.

Por fim, a prevenção também passa por coisas do dia a dia: uma alimentação adequada à idade e condição do animal, manter o peso saudável, e cuidar da higiene dentária. Nenhuma destas medidas, isoladamente, parece grande coisa — mas juntas, fazem uma diferença real na esperança e na qualidade de vida do seu animal.

Se há algum tempo que não faz um check-up ao seu cão ou gato, marque uma consulta connosco — prevenir continua a ser mais simples, mais barato e menos stressante do que remediar.`
  }
];

(async () => {
  for (const artigo of artigosIniciais) {
    await db.collection('artigos').add({
      ...artigo,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('Artigo criado:', artigo.titulo);
  }
  console.log('Concluído! ' + artigosIniciais.length + ' artigos criados.');
})();
