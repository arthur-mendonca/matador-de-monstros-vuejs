new Vue({
  el: "#app",
  data: {
    start: false,
    hero_log: [],
    monster_log: [],
    hero_hp: 100,
    monster_hp: 100,
    hero_attack: null,
    monster_attack: null,
    heal_hp: null,
    win: false,
    lose: false,
  },
  watch: {
    hero_hp(newVal) {
      if (newVal <= 0) {
        this.lose = true;
      }
    },
    monster_hp(newVal) {
      if (newVal <= 0) {
        this.win = true;
      }
    },
  },
  methods: {
    giveUp() {
      this.start = !this.start;
      this.hero_hp = 100;
      this.monster_hp = 100;
      this.hero_log = [];
      this.monster_log = [];
    },
    startNewGame() {
      this.win = false;
      this.lose = false;
      this.start = true;
      this.hero_hp = 100;
      this.monster_hp = 100;
      this.hero_log = [];
      this.monster_log = [];
    },
    getProgressBarClass(hp) {
      if (hp <= 20) {
        return "progress-bar-danger";
      } else if (hp <= 50) {
        return "progress-bar-warning";
      }
      return "";
    },
    addLog(monsterAttack, heroAttack) {
      this.hero_log.push(
        `Herói atingiu o monstro com ataque de ${heroAttack} de força.`
      );
      this.monster_log.push(
        `Monstro atingiu o herói com ataque de ${monsterAttack} de força.`
      );
      console.log(this.hero_log);
      console.log(this.monster_log);
    },
    normalAttack() {
      this.hero_attack = Math.floor(Math.random() * 10) + 1;
      this.monster_attack = Math.floor(Math.random() * 10) + 1;

      console.log(this.hero_attack);
      console.log(this.monster_attack);

      this.addLog(this.monster_attack, this.hero_attack);
      this.hero_hp = this.hero_hp - this.monster_attack;
      this.monster_hp = this.monster_hp - this.hero_attack;

      if (this.hero_hp <= 0) {
        this.hero_hp = 0;
      }
      if (this.monster_hp <= 0) {
        this.monster_hp = 0;
      }
    },
    superAttack() {
      this.hero_attack = Math.floor(Math.random() * 10) + 11;
      this.monster_attack = Math.floor(Math.random() * 10) + 1;

      this.hero_hp = this.hero_hp - this.monster_attack;
      this.monster_hp = this.monster_hp - this.hero_attack;

      this.hero_log.push(
        `Herói atingiu o monstro com um SUPER-ATAQUE de ${this.hero_attack} de força.`
      );
      this.monster_log.push(
        `Monstro atingiu o herói com ataque de ${this.monster_attack} de força.`
      );

      if (this.hero_hp <= 0) {
        this.hero_hp = 0;
      }
      if (this.monster_hp <= 0) {
        this.monster_hp = 0;
      }
    },
    monsterAttack() {
      this.monster_attack = Math.floor(Math.random() * 10) + 1;
      this.hero_hp = this.hero_hp - this.monster_attack;

      console.log(this.monster_attack);
    },
    heal() {
      if (this.hero_hp >= 100) {
        return;
      }
      this.heal_hp = Math.floor(Math.random() * 12) + 3;
      this.hero_hp = this.hero_hp + this.heal_hp;

      this.monsterAttack();
      this.monster_log.push(
        `Monstro atingiu o herói com ataque de ${this.monster_attack} de força.`
      );
      this.hero_log.push(`Herói se curou e recebeu ${this.heal_hp} de HP.`);

      if (this.hero_hp > 100) {
        this.hero_hp = 100;
      }
    },
  },
  computed: {},
});
