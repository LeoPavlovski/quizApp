<template>
<div>
<!--  TODO add the progress linear.-->
  <AppBar></AppBar>
  <v-card elevation="5" class="d-flex align-center justify-center">Are you ready to take the quiz?</v-card>
<!--  Display a random fact about quizes.-->
  <div style="width:90%; margin:auto; padding:10px;background-color:white;text-align:center;">
    <div>
      <h4 class="text-capitalize text-subtitle-1" style=" text-decoration:underline; cursor: pointer">life</h4>
      <h2 style="font-size:40px;">50 Coolest Random Pieces of Trivia That Will<br> Impress Your Friends</h2>
      <h3 class="mt-2 font-weight-medium mb-2" >Share these weird (but true!) fun facts with kids and adults, then watch their minds implode.</h3>
      <h5 class="font-weight-medium"><span style="margin-right:20px;">BY Leo Pavlovski</span> UPDATED: October 25, 2023</h5>
    </div>
<!--Display the items here. maybe a grid.-->
    <v-row style="margin-top:20px;">
      <v-col cols="3">
        <v-card>
          <v-img src="https://hips.hearstapps.com/hmg-prod/images/cropped-hand-of-man-holding-adhesive-note-with-royalty-free-image-1577480229.jpg?crop=0.88889xw:1xh;center,top&resize=980:*"></v-img>
          <v-card-title style="font-size: 13px;">The hashtag symbol is technically called<br> an octothorpe.</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="3">
<!--        https://hips.hearstapps.com/hmg-prod/images/chef-holding-large-bowl-in-commercial-kitchen-royalty-free-image-1577480935.jpg?crop=1xw:1xh;center,top&resize=980:*-->
        <v-card>
          <v-img src="        https://hips.hearstapps.com/hmg-prod/images/chef-holding-large-bowl-in-commercial-kitchen-royalty-free-image-1577480935.jpg?crop=1xw:1xh;center,top&resize=980:*"></v-img>
          <v-card-title style="font-size: 13px;">The 100 folds in a chef's hat represent 100 ways to cook an egg.</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-img src="https://hips.hearstapps.com/hmg-prod/images/harry-styles-performs-live-on-stage-at-iheartradio-secret-news-photo-1628347522.jpg?crop=0.44466xw:1xh;center,top&resize=980:*"></v-img>
          <v-card-title style="font-size: 13px;">The most streamed Spotify single is Harry Styles' "Girl Crush."</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-img src="https://hips.hearstapps.com/hmg-prod/images/bride-looking-away-royalty-free-image-1577482042.jpg?crop=0.447xw:1.00xh;0.316xw,0&resize=980:*"></v-img>
          <v-card-title style="font-size: 13px;">The longest wedding veil was longer than 63 football fields.</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</div>
</template>
<script>

import {defineComponent} from "vue";
import AppBar from "@/components/AppBar.vue";

export default defineComponent({
  components: {AppBar},
  data(){
    return{

    }
  },
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,600&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}
</style>