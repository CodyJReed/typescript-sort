import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([3, -150, -7, 8]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("Cody");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(450);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-44);
linkedList.sort();
linkedList.print();
