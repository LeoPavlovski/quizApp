<template>
  <v-card
      class="mx-auto overflow-hidden"
      height="100vh"
  >
    <v-app-bar
        color="red"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Quiz</v-toolbar-title>
    <v-chip-group class="d-flex ml-auto">
      <v-chip outlined>Home</v-chip>
      <v-chip outlined>Take Quiz!</v-chip>
    </v-chip-group>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
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
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi mdi-comment-question-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Take Quiz!</v-list-item-title>
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
    group: null,
  }),
}
</script>