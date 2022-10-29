function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
      (n01 + n11) * (n00 + n10));
}

function tableFor(evt) {
  let table = [0, 0, 0, 0];
  for (let entry of JOURNAL) {
    let index = 0;
    if (entry.events.includes(evt)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function analyze(min = 0) {
  return [...EVENTS]
    .map(e => ({ evt: e, cor: phi(tableFor(e)) }))
    .filter(x => Math.abs(x.cor) > min)
    .map(x => x.evt + ": " + x.cor.toFixed(4) + " count : " + eventCount.get(x.evt))
  //x.evt ile key value'lara ulasiyoruz, count degerini yazdiriyoruz

  // let a = [];
  //for (let e of EVENTS) {
  // let cor = phi(tableFor(e));
  //if (Math.abs(cor) > min)
  // a.push(e + ": " + cor.toFixed(4));
  //}
  //return a
}

function journalEvents() {
  EVENTS.clear();
  eventCount.clear();
  for (let entry of JOURNAL) //JOURNAL icinde var olan entryleri geziyoruz
    for (let e of entry.events) { //entrylerin içinde var olan event leri geziyoruz. e değişkeninin içinde bir event listedeki event bulunmakta
      EVENTS.add(e); //EVENTS Set'ine e'yi ekliyoruz
      
      if (eventCount.has(e) === true) { // map içimzde e içindeki event var mı diye kontrol ediyoruz.
        eventCount.set(e, eventCount.get(e) + 1); // event var olduğu için e ile value değerine ulaşıp bir arttırıyoruz ve kaydediyoruz
      } else {
        eventCount.set(e, 1); // eğer event yok ise onu map e ekliyoruz.
      }
      // Burada zaten bütün listeler dönülmektedir. Bu dönülmede event ler map ile sayılmaktadır.
    }
}

class Entry {
  constructor(evt, sq) {
    this.events = evt; this.squirrel = sq
  }
  valueOf() { return this.events.length }
  toString() {
    let s = this.valueOf() + " events"
    if (this.squirrel) s += " ✘";
    return "Entry: " + s
  }
}
// Entry diye bir sınıf tanımlanmış. contructor liste ve sincap true false alıyor.
// valueOf() eventlerin uzunluğunu geri döndürüyor


const EVENTS = new Set();  //use Set -- not Array
// yeni bir set oluşturulmuş
const eventCount = new Map();
// key value ilişkisi ile saymak için Map() objesi oluşturdum.
// Var olan eventlerin sayısını tutmak için Map nesnesinden yararlandım. Map() de veriler key value ilişkisi ile saklanılır.
// bir key ile veriyi kaydederiz ve karşısına bir tipten value ekleriz. Aynı key için bir eklenme yapılır ise Set nesnedinde olduğu gibi
// iki tane tutmak yerine tek bir tane tutar Set den farklı olarak bir value tutar. Eğer verilen key value var ise yeni eklenen ile dğeiştirir
// bu şekilde eventlerin sayimini yapar

// JOURNAL listesi ve Entryler eklenmiş
const JOURNAL = [
  new Entry(["carrot", "exercise", "weekend"], false),
  new Entry(["bread", "pudding", "brushed teeth", "weekend", "touched tree"], false),
  new Entry(["carrot", "nachos", "brushed teeth", "cycling", "weekend"], false),
  new Entry(["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], false),
  new Entry(["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], false),
  new Entry(["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], false),
  new Entry(["pizza", "brushed teeth", "computer", "work", "touched tree"], false),
  new Entry(["bread", "beer", "brushed teeth", "cycling", "work"], false),
  new Entry(["cauliflower", "brushed teeth", "work"], false),
  new Entry(["pizza", "brushed teeth", "cycling", "work"], false),
  new Entry(["lasagna", "nachos", "brushed teeth", "work"], false),
  new Entry(["brushed teeth", "weekend", "touched tree"], false),
  new Entry(["lettuce", "brushed teeth", "television", "weekend"], false),
  new Entry(["spaghetti", "brushed teeth", "work"], false),
  new Entry(["brushed teeth", "computer", "work"], false),
  new Entry(["lettuce", "nachos", "brushed teeth", "work"], false),
  new Entry(["carrot", "brushed teeth", "running", "work"], false),
  new Entry(["brushed teeth", "work"], false),
  new Entry(["cauliflower", "reading", "weekend"], false),
  new Entry(["bread", "brushed teeth", "weekend"], false),
  new Entry(["lasagna", "brushed teeth", "exercise", "work"], false),
  new Entry(["spaghetti", "brushed teeth", "reading", "work"], false),
  new Entry(["carrot", "ice cream", "brushed teeth", "television", "work"], false),
  new Entry(["spaghetti", "nachos", "work"], false),
  new Entry(["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], false),
  new Entry(["spaghetti", "peanuts", "computer", "weekend"], true),
  new Entry(["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], false),
  new Entry(["potatoes", "ice cream", "brushed teeth", "work"], false),
  new Entry(["peanuts", "brushed teeth", "running", "work"], false),
  new Entry(["potatoes", "exercise", "work"], false),
  new Entry(["pizza", "ice cream", "computer", "work"], false),
  new Entry(["lasagna", "ice cream", "work"], false),
  new Entry(["cauliflower", "candy", "reading", "weekend"], false),
  new Entry(["lasagna", "nachos", "brushed teeth", "running", "weekend"], false),
  new Entry(["potatoes", "brushed teeth", "work"], false),
  new Entry(["carrot", "work"], false),
  new Entry(["pizza", "beer", "work", "dentist"], false),
  new Entry(["lasagna", "pudding", "cycling", "work"], false),
  new Entry(["spaghetti", "brushed teeth", "reading", "work"], false),
  new Entry(["spaghetti", "pudding", "television", "weekend"], false),
  new Entry(["bread", "brushed teeth", "exercise", "weekend"], false),
  new Entry(["lasagna", "peanuts", "work"], true),
  new Entry(["pizza", "work"], false),
  new Entry(["potatoes", "exercise", "work"], false),
  new Entry(["brushed teeth", "exercise", "work"], false),
  new Entry(["spaghetti", "brushed teeth", "television", "work"], false),
  new Entry(["pizza", "cycling", "weekend"], false),
  new Entry(["carrot", "brushed teeth", "weekend"], false),
  new Entry(["carrot", "beer", "brushed teeth", "work"], false),
  new Entry(["pizza", "peanuts", "candy", "work"], true),
  new Entry(["carrot", "peanuts", "brushed teeth", "reading", "work"], false),
  new Entry(["potatoes", "peanuts", "brushed teeth", "work"], false),
  new Entry(["carrot", "nachos", "brushed teeth", "exercise", "work"], false),
  new Entry(["pizza", "peanuts", "brushed teeth", "television", "weekend"], false),
  new Entry(["lasagna", "brushed teeth", "cycling", "weekend"], false),
  new Entry(["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], false),
  new Entry(["lettuce", "brushed teeth", "television", "work"], false),
  new Entry(["potatoes", "brushed teeth", "computer", "work"], false),
  new Entry(["bread", "candy", "work"], false),
  new Entry(["potatoes", "nachos", "work"], false),
  new Entry(["carrot", "pudding", "brushed teeth", "weekend"], false),
  new Entry(["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], false),
  new Entry(["brussel sprouts", "running", "work"], false),
  new Entry(["brushed teeth", "work"], false),
  new Entry(["lettuce", "brushed teeth", "running", "work"], false),
  new Entry(["candy", "brushed teeth", "work"], false),
  new Entry(["brussel sprouts", "brushed teeth", "computer", "work"], false),
  new Entry(["bread", "brushed teeth", "weekend"], false),
  new Entry(["cauliflower", "brushed teeth", "weekend"], false),
  new Entry(["spaghetti", "candy", "television", "work", "touched tree"], false),
  new Entry(["carrot", "pudding", "brushed teeth", "work"], false),
  new Entry(["lettuce", "brushed teeth", "work"], false),
  new Entry(["carrot", "ice cream", "brushed teeth", "cycling", "work"], false),
  new Entry(["pizza", "brushed teeth", "work"], false),
  new Entry(["spaghetti", "peanuts", "exercise", "weekend"], true),
  new Entry(["bread", "beer", "computer", "weekend", "touched tree"], false),
  new Entry(["brushed teeth", "running", "work"], false),
  new Entry(["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], false),
  new Entry(["lasagna", "brushed teeth", "television", "work"], false),
  new Entry(["cauliflower", "brushed teeth", "running", "work"], false),
  new Entry(["carrot", "brushed teeth", "running", "work"], false),
  new Entry(["carrot", "reading", "weekend"], false),
  new Entry(["carrot", "peanuts", "reading", "weekend"], true),
  new Entry(["potatoes", "brushed teeth", "running", "work"], false),
  new Entry(["lasagna", "ice cream", "work", "touched tree"], false),
  new Entry(["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], false),
  new Entry(["pizza", "brushed teeth", "running", "work"], false),
  new Entry(["lettuce", "brushed teeth", "work"], false),
  new Entry(["bread", "brushed teeth", "television", "weekend"], false),
  new Entry(["cauliflower", "peanuts", "brushed teeth", "weekend"], false)
]


journalEvents()  //determine the set of events
// metot çağırılmış
