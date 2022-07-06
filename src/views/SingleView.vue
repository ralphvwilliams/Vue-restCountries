<template>
  <div class="back" @click="this.$router.go(-1)">
    <p>&lt- Go Back</p>
  </div>
  <div class="single" v-for="one in country" :key="one.name.common">
    <div class="flag">
      <img :src="one.flags.png" />
    </div>
    <div class="info">
      <div class="text">
        <div class="left-info">
          <h3 class="name">{{ one.name.common }}</h3>
          <p class="native-name">
            Native Name: {{ Object.values(one.name.nativeName)[0].official }}
          </p>
          <p>Population: {{ one.population }}</p>
          <p>Region: {{ one.region }}</p>
          <p>Sub-Region: {{ one.subregion }}</p>
          <span>Capital: </span
          ><span v-for="capital in one.capital">{{ capital }}, &nbsp; </span>
          <br />
          <br />
          <span>Border Countries: </span>
          <span v-for="border in one.borders" :key="border"
            >{{ border }}, &nbsp;</span
          >
        </div>
        <div class="right-info">
          <span>Top Level Domain: &nbsp;</span>
          <span v-for="domain in one.tld" :key="domain">{{ domain }} </span>
          <br />
          <br />
          <span>Currencies: &nbsp;</span
          ><span v-for="currency in Object.values(one.currencies)"
            >{{ currency.name }}, &nbsp;
          </span>
          <br />
          <br />
          <span>Languages: &nbsp;</span
          ><span v-for="language in Object.values(one.languages)"
            >{{ language }}, &nbsp;
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Card from '@/components/Card.vue';
export default {
  name: 'SingleView',
  components: { Card },
  async mounted() {
    this.setName();
    console.log(this.countryName);
    await this.getSingleCountry(this.countryName);
    console.log(this.country);
  },
  data() {
    return {
      countryName: '',
    };
  },
  computed: {
    ...mapGetters({
      country: 'getCountry',
    }),
  },
  methods: {
    ...mapActions({
      getSingleCountry: 'getSingleCountry',
    }),
    setName() {
      this.countryName = this.$route.params.name;
    },
  },
};
</script>

<style scoped>
.single {
  margin-top: 120px;
  display: flex;
  /* justify-content: space-between; */
  margin-left: 60px;
  margin-right: 60px;
  gap: 150px;
}

.flag img {
  width: 700px;
  height: 500px;
}
.info {
  display: block;
}

.right-info span {
  display: inline-block;
}
.text {
  display: flex;
  /* justify-content: space-between; */
  gap: 100px;
  align-items: center;
}
.right-info {
  margin-top: 60px;
}
.left-info,
.right-info {
  text-align: left;
}

.back p {
  font-weight: bolder;
  font-size: 18px;
  cursor: pointer;
}

.name {
  font-size: 45px;
  font-weight: bolder;
}

p,
span {
  font-size: 18px;
  font-weight: 500;
}
</style>
