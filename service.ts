import { injectable, inject, singleton } from "tsyringe";

@injectable()
export class Katana {
    sound = "ブンッ！";

    swing() {
        return this.sound;
    }
}

// @injectable()
@singleton()
export class Samurai {
    constructor(
        @inject('Katana')
        private katana: Katana
    ) { }

    fight() {
        return this.katana.swing();
    }

    pwoerUp() {
        this.katana.sound = "ブウウウウンッ！！";
    }
}