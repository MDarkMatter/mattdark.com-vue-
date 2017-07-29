<template>
  <div id="photography">
    <div v-for="pic in pics">
      <img :src="pic">
<!--       <img src='../../assets/img/slide2.jpg'>
 -->    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      pics: [
        require('../../assets/img/slide1.jpg'),
        require('../../assets/img/slide2.jpg'),
        require('../../assets/img/slide3.jpg'),
        require('../../assets/img/slide4.jpg'),
        require('../../assets/img/slide5.jpg'),
        require('../../assets/img/slide6.jpg'),
        require('../../assets/img/slide7.jpg'),
        require('../../assets/img/slide8.jpg'),
        require('../../assets/img/slide9.jpg'),
        require('../../assets/img/slide10.jpg'),
        require('../../assets/img/slide11.jpg')
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  img{
    max-width: 65%;
    max-height: 80%;
    margin: 0 2rem 4rem;
    box-shadow: 10px 10px 30px black;
  }
</style>
