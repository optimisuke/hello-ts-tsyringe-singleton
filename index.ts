import "reflect-metadata";
import { container, injectable } from "tsyringe";
import { Katana } from "./service";
import { Samurai } from "./service";


container.register('Katana', {
    useClass: Katana
})

const samuraiA = container.resolve(Samurai)
const samuraiB = container.resolve(Samurai)

console.log(samuraiA.fight()); // ブンッ！
samuraiA.pwoerUp();
console.log(samuraiA.fight()); // ブウウウウンッ！！
console.log(samuraiB.fight()); // ブンッ！ (シングルトンじゃないとき) or ブウウウウンッ！！ (シングルトンのとき)
