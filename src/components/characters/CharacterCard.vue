<template>
  <div class='card' v-bind:style='{backgroundImage: `url("${getImage()}")`}'>
    <div class='bookmark'>📌</div>
    <div class='character-name'>{{ character.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: Object,
  },
  methods: {
    getImage() {
      return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  height: 200px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.5s;
}

.card:hover {
  box-shadow: 0 16px 24px 0 #ccc;
}

.card:hover > .character-name {
  letter-spacing: 0.2rem;
}

.bookmark {
  align-self: flex-end;
  margin: 8px 8px 0 0;
}

.character-name {
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5609594179468662) 0%, rgba(0, 0, 0, 0.07076333951549374) 75%);
  color: #fff;
  width: 100%;
  height: 40px;
  transition: all 0.5s;
  align-self: flex-end;
  padding-bottom: 8px;
  padding-left: 8px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
}
</style>
