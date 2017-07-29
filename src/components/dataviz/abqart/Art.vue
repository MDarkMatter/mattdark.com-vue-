<template>
  <div id="abqart" class="contianer">
    <div class="row justify-content-center">
      <h1 class="title">{{msg}}</h1>
    </div>
    <div class="row">
      <div class="col-8">
        <div id="map"></div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-block">
            <fieldset class="form-group">
              <legend>Select Art Type:</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked v-on:click="getVisWorks">
                  Visual Works
                </label>
              </div>
              <div class="form-check">
              <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" v-on:click="getSculpture">
                  Sculpture
                </label>
              </div>
              <div class="form-check">
              <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" v-on:click="getOther">
                  Everything Else
                </label>
              </div>
            </fieldset>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>

import * as d3 from "d3"
import data from "@/components/dataviz/abqart/data.json"

export default {
  name: 'abqart',
  data () {
    return {
      msg: 'albuquerque public art',
      data: data,
      shownData: {}
    }
  },
  mounted () {
    let map = L.map('map').setView([35.111,-106.615], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/masageef/cj3ul2k65002n2rmuzesdydu3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFzYWdlZWYiLCJhIjoiY2l1aXdwemZlMDEwbTJubnk0bXRhcnhjYiJ9.HWf5CVj9w5qlllEACzsO4w', {
    maxZoom: 18
    }).addTo(map);

    L.geoJSON(this.shownData).addTo(map);

  },
  methods: {
    getSculpture: function(){
      this.shownData = data.features.filter(function(feature){
        return feature.properties.TYPE === "sculpture";
      });
    },
    getVisWorks: function(){
      this.shownData = data.features.filter(function(feature){
        return feature.properties.TYPE === "visual works";
      });
    },
    getOther: function(){
      this.shownData = data.features.filter(function(feature){
        return feature.properties.TYPE !== "sculpture" && feature.properties.TYPE !== "visual works";
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  margin-top: 2rem;
}
.title{
  background-color: rgba(238,240,237,.95);
  padding: .5rem;
  border-radius: 2%;
  box-shadow: 0px 2px 25px black;
}

#map {
  max-width: 80%;
  height: 400px;
  margin: auto;
  box-shadow: 0px 2px 25px black;
}

.card{
  background-color: rgba(238,240,237,.95);
  box-shadow: 0px 2px 25px black;
}
</style>
