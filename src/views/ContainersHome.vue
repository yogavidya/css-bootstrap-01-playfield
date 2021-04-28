<template>
 <div class="overflow-auto">
    <b-pagination-nav
    align="center"
    :link-gen="linkGen" 
    :pages="subpages" 
    use-router>
    </b-pagination-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ContainersHome',
    data() {
        return {
          subpages: [
              {
                name: 'containers-column-layout', 
                text: 'Column layout',
              }
            ],
        }
    },
 methods: {
      linkGen(pageNum) {
        return this.subpages[pageNum - 1];
      }
    }
}
    
</script>
