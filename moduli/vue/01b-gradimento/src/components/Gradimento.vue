<template>
  <div class="hello">
    <ul>
    <li v-for="nome of nomi" :key='nome'>
      Gradimento per 
        <span v-if="nome == winner">*</span>
        <span :class="nome == winner ? 'winner' : 'looser'">{{ nome }}</span>: 
        {{ gradimento[nome] }}  
        <button @click='click(nome)'>+1</button>
    </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Gradimento',
  props: {
    nomi: Array
  },
  data() {
    return  {
      winner: null,
      gradimento: Object.fromEntries(this.nomi.map(n => [n, 0]))
    };
  },
  methods: {
    click(nome) {
      this.gradimento[nome]++;
      if (this.winner === null) this.winner = nome;
      else if (this.gradimento[nome] > this.gradimento[this.winner]) this.winner = nome;
    }
  }
}
</script>

<style scoped>

.winner { background-color: yellow; }
.looser { background-color: white; }

</style>