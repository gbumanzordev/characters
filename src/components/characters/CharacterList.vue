<template>
  <div class='list'>
    <CharacterCard v-for='character in characters' :key='character.id' :character='character' />
  </div>
</template>

<script>
import CharacterCard from '@/components/characters/CharacterCard';

export default {
  name: 'CharacterList',
  components: { CharacterCard },
  data() {
    return {
      characters: [],
    };
  },
  async created() {
    const response = await fetch('https://gateway.marvel.com/v1/public/characters?apikey=c8d035666e69f180e2a8226d2f948481&');
    const responseJson = await response.json();
    this.characters = responseJson.data.results;
  },
};
</script>

<style scoped>
.list {
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 24px;
}
</style>
