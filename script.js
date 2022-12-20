/* Source of Tarot card list: https://www.twowander.com/blog/list-of-tarot-cards 
and https://www.biddytarot.com/tarot-card-meanings/major-arcana/wheel-of-fortune/ */

// 22 cards with upright and reversed keywords

const majorArcanaTarotCards = [
  {
    name: "The Fool",
    meaning: "new beginnings",
    upright:
      "youthful energy, fresh starts, new beginnings, naïveté, start of a cycle",
    reversed: "foolish, jumping in before looking, getting ahead of yourself",
  },
  {
    name: "The Magician",
    meaning: "manifestation",
    upright: "creation, manifestation, capability",
    reversed: "misalignment, confusion, destruction",
  },
  {
    name: "The High Priestess",
    meaning: "intuition",
    upright:
      "intuition, sacred knowledge, divine feminine and the subconscious mind",
    reversed: "secrets, disconnected from intuition, withdrawal and silence",
  },
  {
    name: "The Empress",
    meaning: "nurturing",
    upright: "mothering, nurturance, nourishment, luxury, indulgence",
    reversed: "lack of self-care, need to slow down and be present",
  },
  {
    name: "The Empreror",
    meaning: "leadership",
    upright: "authority, power, leadership, confidence, determination",
    reversed: "overbearing, overpowering, headstrong, dictatorial",
  },
  {
    name: "The Hierophant",
    meaning: "teachings",
    upright: "religion, spirituality, doctrine and teachings",
    reversed: "personal beliefs, freedom, challenging the status quo",
  },
  {
    name: "The Lovers",
    meaning: "duality",
    upright: "relationships, love, romance, partnerships, duality",
    reversed: "blind love, giving away of power, loss of self",
  },
  {
    name: "The Chariot",
    meaning: "endurance",
    upright: "strength, perseverance, endurance, emotional stability",
    reversed: "opposition, lack of direction",
  },
  {
    name: "Strength",
    meaning: "courage",
    upright: "strength, courage, bravery, vulnerability",
    reversed: "aggression, forcing, hotheaded",
  },
  {
    name: "The Hermit",
    meaning: "introspection",
    upright: "introspection, reflection, solace, insight, wisdom, retreat",
    reversed: "loneliness",
  },
  {
    name: "Wheel of Fortune",
    meaning: "luck",
    upright:
      "luck, fortune, changing cycles, wheel of life, cosmic dance, Divine timing, fate, destiny",
    reversed: "bad luck, resistance to change, breaking cycles",
  },
  {
    name: "Justice",
    meaning: "equity",
    upright:
      "equality, equity, fairness, adroitness, righteousness, morals, ethics",
    reversed: "unfairness, lack of accountability, dishonesty",
  },
  {
    name: "The Hanged Man",
    meaning: "pause",
    upright: "wait, pause, surrender, inaction",
    reversed: "delays, resistance, stalling, indecision",
  },
  {
    name: "Death",
    meaning: "transformation",
    upright: "change, transformation, transmutation, end of a cycle, rebirth",
    reversed: "resistance to change, personal transformation, inner purging",
  },
  {
    name: "Temperance",
    meaning: "patience",
    upright: "balance, moderation, patience, purpose",
    reversed: "imbalance, excess, self-healing, re-alignment",
  },
  {
    name: "The Devil",
    meaning: "obsessions",
    upright: "shadow self, attachment, addiction, restriction, sexuality",
    reversed: "releasing limiting beliefs, exploring dark thoughts, detachment",
  },
  {
    name: "The Tower",
    meaning: "upheaval",
    upright: "sudden change, upheaval, chaos, revelation, awakening",
    reversed: "personal transformation, fear of change, averting disaster",
  },
  {
    name: "The Star",
    meaning: "hope",
    upright: "hope, reset, refresh, regeneration, faith, trust",
    reversed: "loss of hope, loss of faith",
  },
  {
    name: "The Moon",
    meaning: "illusion",
    upright: "intuition, illusions, confusion, secrets, mysteries, unknown",
    reversed: "lies, deceit",
  },
  {
    name: "The Sun",
    meaning: "abundance",
    upright: "positivity, fun, warmth, success, vitality",
    reversed: "inner child, feeling down, overly optimistic",
  },
  {
    name: "Judgement",
    meaning: "reflection",
    upright: "judgement, rebirth, inner calling, absolution",
    reversed: "self-doubt, inner critic, ignoring the call",
  },
  {
    name: "The World",
    meaning: "completion",
    upright: "completion, integration, accomplishment, travel",
    reversed: "seeking personal closure, short-cuts, delays",
  },
];

// Array of two possible positions for each card
const possiblePositions = ["upright", "reversed"];

// Function to randomly pick a card index
const cardIndex = () => {
  return Math.floor(Math.random() * 22);
};

// Function to randomly pick card position
const cardPositionIndex = () => {
  return Math.floor(Math.random() * 2);
};

// Function to select cards, adding them in an array where 0 is past, 1 is present, 2 is future
const cardSelection = () => {
  const cardsDrawn = [];
  let pastCardIndex = cardIndex();
  const pastCard = majorArcanaTarotCards[pastCardIndex];
  cardsDrawn.push(pastCard);
  let presentCardIndex = cardIndex();
  //ensure present card isn't the same with past card
  while (presentCardIndex === pastCardIndex) {
    presentCardIndex = cardIndex();
  }
  const presentCard = majorArcanaTarotCards[presentCardIndex];
  cardsDrawn.push(presentCard);
  let futureCardIndex = cardIndex();
  //ensure future card isn't the same with past and present card
  while (
    futureCardIndex === pastCardIndex ||
    futureCardIndex === presentCardIndex
  ) {
    futureCardIndex = cardIndex();
  }
  const futureCard = majorArcanaTarotCards[futureCardIndex];
  cardsDrawn.push(futureCard);
  return cardsDrawn;
};

let drawnCards = cardSelection();

// Function to show prediction of Tarot cards for past, present and future
const tarotPrediction = () => {
  let pastPosition = possiblePositions[cardPositionIndex()];
  let presentPosition = possiblePositions[cardPositionIndex()];
  let futurePosition = possiblePositions[cardPositionIndex()];

  let prediction = `The card drawn for your past is ${drawnCards[0].name}, which means ${drawnCards[0].meaning}. In the ${pastPosition} position, the keywords describing your past are ${drawnCards[0][pastPosition]}.
  The card drawn for your present is ${drawnCards[1].name}, which means ${drawnCards[1].meaning}. In the ${presentPosition} position, the keywords describing your present are ${drawnCards[1][presentPosition]}.
  Finally, the card drawn for your future is ${drawnCards[2].name}, which means ${drawnCards[2].meaning}. In the ${futurePosition} position, the keywords describing your future are ${drawnCards[2][futurePosition]}.`;
  return prediction;
};

console.log(tarotPrediction());
