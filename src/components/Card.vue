<template>
  <div class="card">
    <img :src="country.flags.png" />
    <p class="country-name">{{ country.name.common }}</p>
    <p>Population: {{ country.population }}</p>
    <p>Region: {{ country.region }}</p>
    <p v-for="capital in country.capital">Capital: {{ capital }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['country'],
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-bottom: 10px;
  height: 400px;
  width: 370px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0 0;
}

.country-name {
  font-weight: bolder;
  font-size: 24px;
}
</style>
