<template>
  <v-card
      class="mx-auto"
  >
    <v-app-bar
        color="red"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-decoration-underline">Quiz</v-toolbar-title>
    <v-chip-group class="d-flex ml-auto">
      <v-chip outlined @click="toHome">Home</v-chip>
      <v-chip outlined @click="toQuiz">Take Quiz!</v-chip>
      <v-chip style="color:white !important;">{{this.dayOfWeek}} {{this.formattedTime}}</v-chip>
    </v-chip-group>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        height="100vh"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="toHome">Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi mdi-comment-question-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="toQuiz">Take Quiz!</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    currentDate: new Date(),
    group: null,
  }),
  computed: {
    dayOfWeek() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return daysOfWeek[this.currentDate.getDay()];
    },
    formattedTime() {
      const hours = this.currentDate.getHours().toString().padStart(2, '0');
      const minutes = this.currentDate.getMinutes().toString().padStart(2, '0');
      const seconds = this.currentDate.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    },
  },
  created() {
    // Update the currentDate every second
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  },
  methods: {
    toQuiz() {
      if(this.$route.name !=='Quiz'){
        this.$router.push({ name: 'Quiz' });
      }
    },
    toHome(){
      if(this.$route.name !=='HomeComponent'){
        this.$router.push({name:'HomeComponent'})
      }

    }
  },
}
</script>