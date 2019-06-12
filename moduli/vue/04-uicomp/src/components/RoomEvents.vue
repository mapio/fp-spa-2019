<template>
  <b-card-group deck>
    <b-card
      style="max-width: 20rem;"
      v-for="event of events"
      :key="event.id"
      :header="`${event.tipo} (${event.from}-${event.to})`"
      :footer="`${event.Prenotante_data.Cognome} ${event.Prenotante_data.Nome}`"
      :title="event.nome"
    >
      <div v-if="event.Utenti.length > 0">
        <span v-for="(utente, index) in event.Utenti" :key="utente.Codice">
        <span v-if="index > 0">, </span>{{utente.Cognome}} {{utente.Nome}}</span>
      </div>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "RoomEvents",
  props: {
    events: Array
  }
};
</script>
