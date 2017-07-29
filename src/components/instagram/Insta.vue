<template>
  <div id="insta">
    <div class="container">
      <div class="row">
        <div v-for="pic in pics" class="col-md-4 col-sm-12">
          <img class="img-fluid insta-pic" :src="pic.images.standard_resolution.url">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <a href="http://www.instagram.com/theblindmattdark" target="_blank" class="follow-link">+</a>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'insta',
    data () {
      return {
        pics: ''
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData: function(){
          let thing = this;
          let url = "https://api.instagram.com/v1/users/self/media/recent/";
          let options = {
            params: {
                access_token: "1761847439.175eb62.8f7ddfbff18f43f09029ce43e614a2e6",
                count: '3'
              }
            };
          this.$http.jsonp(url, options).then(response => {
            thing.pics = response.body.data;
          });

      }
    }
  }
</script>

<style scoped lang='scss'>
  .follow-link{
    font-size: 2rem;
    padding: .2rem 1rem;
    margin-top: 2rem;
    color: #EEF0ED;
    background-color: rgba(0,0,0,.9);
  }

  .insta-pic{
    box-shadow: 10px 10px 30px black;
  }

  a {
    color: #EEF0ED;
    text-decoration: none;
    border-radius: 10%;
    transition: background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease;
  }

  a:hover{
    background-color: #EEF0ED;
    color: black;
    text-decoration: none;
    box-shadow: 0px 2px 25px black;
  }
</style>
