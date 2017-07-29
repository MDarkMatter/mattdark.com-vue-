<template>
  <div id="data">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <router-link to="/abqart">
            <div class="card">
              <img class="card-img-top img-fluid" :src="pic">
              <div class="card-block">
                <h4 class="card-title">Albuquerque Public Art</h4>
                <p class="card-text">(In Progress)</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'coming soon!',
      pic: "http://farm4.staticflickr.com/3038/2420677741_8a0b45b597_b.jpg"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title{
  background-color: #EEF0ED;
}

.card{
  color: black;
  text-decoration: none;
  box-shadow: 0px 2px 25px black;
  background-color: #EEF0ED;
  }

a {
  top: 0;
  transition: top .5s ease;
}
a:hover {
  position: relative;
  top: -5px;
  text-decoration: none;
}
</style>
