<template>
    <div id="navblar">
        <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/" class="navbar-brand" data-toggle="collapse" data-target=".navbar-collapse.show">{{title}}</router-link>
            <div class="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
                <router-link to="/insta" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <img class="insta-img" src="../../assets/img/instagram.svg">
                </router-link>
                <a href="mailto:mattdark@mattdark.com">
                    <img class="email-img" src="../../assets/img/email.svg">
                </a>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link to="/music" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">{{link1}}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/data" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">{{link2}}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/photography" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">{{link3}}</router-link>
                  </li>
<!--                   <li class="nav-item">
                    <router-link to="/etc" class="nav-link">{{link4}}</router-link>
                  </li> -->
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'navblar',
  data () {
    return {
      title: 'the blind matt dark',
      link1: 'music',
      link2: 'data visualization',
      link3: 'photography',
      link4: 'etc.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    li {
        margin: 0 1rem;
    }
    .bg-faded {
        background-color: #EEF0ED;
    }

    .insta-img,
    .email-img {
        margin: auto 1rem;
        width: 20px;
    }

    nav {
        box-shadow: 0px 2px 25px black;

    }
    .navbar-light .navbar-brand, .navbar-light .navbar-toggler{
      color: rgba(0,0,0,.7);
    }
</style>
