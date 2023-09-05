# matador-de-monstros-vuejs

Este é um projeto simples e para fins didáticos. 

▶️O Que Ele Faz?

O projeto é um jogo simples construído usando Vue.js. Neste jogo, você atua como um herói lutando contra um monstro. Tanto o herói quanto o monstro têm pontos de saúde (HP), e o objetivo é reduzir o HP do oponente a zero para vencer.

▶️HP do Herói e do Monstro: Ambos começam com 100 HP.

▶️Ataques: Tanto o herói quanto o monstro podem atacar um ao outro, causando uma quantidade aleatória de dano.

▶️Cura: O herói tem a opção de se curar, o que restaurará uma quantidade aleatória de HP.

▶️Condições de Vitória/Derrota: O jogo declara um vencedor quando o HP do herói ou do monstro chega a zero.

Funcionalidades de Vue.js utilizadas:

⚡Data Binding

data: O estado do jogo é mantido em um objeto data dentro da instância Vue. Isso inclui informações como o HP do herói e do monstro, logs de ataque, e outros estados do jogo.

⚡Diretivas

v-if, v-else: Usadas para condicionalmente renderizar elementos na página, como botões e mensagens de vitória/derrota.

v-for: Usada para renderizar listas, como os logs de ataque.

@click: Usada para ouvir eventos de clique nos botões e executar métodos correspondentes.

⚡Computed Properties e Watchers

watch: Observadores são usados para monitorar mudanças no HP do herói e do monstro e declarar um vencedor quando o HP chega a zero.

⚡Métodos

methods: Vários métodos são definidos para lidar com a lógica do jogo, como ataques normais e especiais, cura, e reinício do jogo.

Interpolação

{{ }}: Usada para exibir dinamicamente dados, como o HP atual do herói e do monstro.

⚡Manipulação de Classes CSS

:class: Usada para dinamicamente adicionar classes CSS aos elementos, como as barras de progresso do HP.

This is a simple project for educational purposes.
-------------------------------------------------------------------------------------------------------------------------
▶️ What Does It Do?

The project is a simple game built using Vue.js. In this game, you play as a hero fighting against a monster. Both the hero and the monster have health points (HP), and the objective is to reduce the opponent's HP to zero to win.

▶️ Hero and Monster HP: Both start with 100 HP.

▶️ Attacks: Both the hero and the monster can attack each other, causing a random amount of damage.

▶️ Healing: The hero has the option to heal, which will restore a random amount of HP.

▶️ Win/Lose Conditions: The game declares a winner when either the hero or the monster's HP reaches zero.

Vue.js Features Used:

⚡ Data Binding: The game state is maintained in a data object within the Vue instance. This includes information like the hero's and monster's HP, attack logs, and other game states.

⚡ Directives: v-if, v-else are used to conditionally render elements on the page, such as buttons and win/lose messages. v-for is used to render lists, like the attack logs. @click is used to listen for click events on buttons and execute corresponding methods.

⚡ Computed Properties and Watchers: watch observers are used to monitor changes in the hero's and monster's HP and declare a winner when the HP reaches zero.

⚡ Methods: Various methods are defined to handle the game logic, such as normal and special attacks, healing, and restarting the game.

⚡ Interpolation: {{ }} is used to dynamically display data, like the current HP of the hero and the monster.

⚡ CSS Class Manipulation: :class is used to dynamically add CSS classes to elements, like the HP progress bars.
