<template>
  <div class="search">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search for a country..."
    />
    <select name="" id="" v-model="selectTerm">
      <option value="">Filter by Region</option>
      <option :value="region" v-for="region in regions">{{ region }}</option>
    </select>
  </div>
  <div class="cards">
    <Card
      v-for="country in filteredCountries"
      :key="country.name.common"
      :country="country"
      @click="
        this.$router.push({
          name: 'singleView',
          params: { name: country.name.common },
        })
      "
    ></Card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import Card from '@/components/Card.vue';

export default {
  name: 'HomeView',
  components: {
    Card,
  },
  data() {
    return {
      searchTerm: '',
      selectTerm: '',
      regions: [],
    };
  },
  async mounted() {
    await this.getAllCountries();
    console.log(this.countries);
    await this.getRegions();
  },
  computed: {
    ...mapGetters({
      countries: 'getCountries',
    }),
    filteredCountries() {
      if (this.searchTerm) {
        return this.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectTerm) {
        return this.countries.filter(
          (country) => country.region === this.selectTerm
        );
      } else {
        return this.countries;
      }
    },
  },
  methods: {
    ...mapActions({
      getAllCountries: 'getAllCountries',
    }),
    getRegions() {
      const regionsMap = this.countries.map((country) => country.region);
      console.log(regionsMap);
      const setRegions = [...new Set(regionsMap)];
      console.log(setRegions);
      this.regions = setRegions;
    },
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 30px;
  /* column-gap: 10px; */
  margin-left: 60px;
  margin-right: 60px;
}
.card {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-bottom: 10px;
  height: 400px;
  width: 370px;
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

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 60px;
  margin-right: 60px;
}

input,
select {
  height: 40px;
  width: 300px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
}

input::placeholder {
  padding-left: 30px;
}
</style>
