const { useBasketContext } = require('./BasketProvider')
const { getTotalwithBestOffer, getBasketTotal } = require('./reducer')
const items = [
  {
    isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
    title: 'Henri Potier et la Chambre des secrets',
    price: 30,
    cover: 'http://henri-potier.xebia.fr/hp1.jpg',
    synopsis: [
      "Henri Potier passe l'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison. Celui-ci vient l'avertir que des évènements étranges vont bientôt se produire à Poudlard et lui conseille donc vivement de ne pas y retourner. Henri choisit d'ignorer cet avertissement. Le jour de son départ pour l'école, il se retrouve bloqué avec Ron Weasley à la gare de King's Cross, sans pouvoir se rendre sur le quai 9 ¾ où les attend le Poudlard Express. En dernier recours, les garçons se rendent donc à Poudlard à l'aide de la voiture volante de Monsieur Weasley et manquent de peu de se faire renvoyer dès leur arrivée à l'école pour avoir été aperçus au cours de leur voyage par plusieurs moldus.",
      "Le nouveau professeur de défense contre les forces du mal, Gilderoy Lockhart, se montre particulièrement narcissique et inefficace. Pendant ce temps, Henri entend une voix étrange en parcourant les couloirs du château, systématiquement associée à la pétrification immédiate d'un élève moldu de l'école. Dès la première attaque, un message sanglant apparaît sur l'un des murs, informant que la Chambre des secrets a été ouverte. Dumbledore et les autres professeurs (ainsi que Henri, Ron et Hermione) doivent prendre les mesures nécessaires pour trouver l'identité du coupable et protéger les élèves contre de nouvelles agressions.",
    ],
  },
  {
    isbn: 'fcd1e6fa-a63f-4f75-9da4-b560020b6acc',
    title: "Henri Potier et le Prisonnier d'Azkaban",
    price: 30,
    cover: 'http://henri-potier.xebia.fr/hp2.jpg',
    synopsis: [
      "Durant l'été, pour son treizième anniversaire, Henri reçoit plusieurs cartes de ses amis, notamment une lettre de Ron qui lui écrit d'Égypte, où il passe ses vacances avec sa famille. Une lettre du professeur McGonagall, directrice adjointe de Poudlard, lui informe que les élèves de troisième année auront la possibilité de visiter le village de Pré-au-Lard.",
      "Le lendemain, les informations télévisées moldues annoncent l'évasion d'un très dangereux prisonnier du nom de Sirius Black et l'oncle et la tante de Henri s'inquiètent légèrement pour eux-mêmes. Plus tard, ils annoncent à Henri que la tante Marge séjournera une semaine chez eux, à Privet Drive. La tante Marge provoque Henri en traitant son père défunt d'ancien ivrogne. Henri s'énerve, perd le contrôle de sa magie et fait accidentellement gonfler la tante Marge comme un ballon. Alors que son oncle, furieux, ordonne à Henri de rendre à Marge son apparence normale, le garçon refuse et prend la fuite en pleine nuit, emportant sa valise et sa chouette Edwige.",
      "Plus tard, sur le Chemin de traverse, Henri apprend avec surprise que Sirius Black s'est en fait échappé d'Azkaban pour le retrouver, lui. Il semblerait que l'homme veuille tuer Henri afin de permettre à Lord Voldemort, son maître, de retrouver l'étendue de son pouvoir.",
    ],
  },
]

const offers = [
  {
    type: 'percentage',
    value: 4,
  },
  {
    type: 'minus',
    value: 15,
  },
  {
    type: 'slice',
    sliceValue: 100,
    value: 12,
  },
]

test('test getBasketTotal', () => {
  expect(getBasketTotal(null)).toBe(undefined)
})

test('test getBasketTotal array', () => {
  expect(getBasketTotal(items)).toBe(60)
})

test('test getTotalwithBestOffer', () => {
  expect(getTotalwithBestOffer(offers, 60)).toBe(55)
})
