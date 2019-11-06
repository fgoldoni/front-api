<template>
  <div class="relative">
    <div class="vx-navbar-wrapper nav-menu-wrapper">
      <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColor">

        <ul class="menu-items flex flex-wrap w-full items-center">

        </ul>
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import HNavMenuGroup  from "./HorizontalNavMenuGroup.vue"
import HNavMenuHeader from "./HorizontalNavMenuHeader.vue"
import HNavMenuItem   from "./HorizontalNavMenuItem.vue"

export default {
  props: {
    // navbarColor  : { type: String, default: "#fff", },
    navMenuItems : { type: Array,  required: true   },
  },
  components: {
    HNavMenuGroup,
    HNavMenuHeader,
    HNavMenuItem,
  },
  computed: {
    navbarColor() {
      return this.$store.state.theme === "dark" ? "#10163a" : "#fff"
    }
  },
  methods: {
    checkGrpChildrenActive(group) {
      const path        = this.$route.fullPath
      let active        = false
      const routeParent = this.$route.meta ? this.$route.meta.parent : undefined

      if (group.submenu) {
        group.submenu.forEach((item) => {
          if (active) return true
          if ((path == item.url || routeParent == item.slug) && item.url) { active = true }
          else if (item.submenu) { this.checkGrpChildrenActive(item) }
        })
      }

      return active
    },
  }
}
</script>

<style lang="scss">
@import "@sass/vuexy/components/horizontalNavMenu.scss"
</style>
