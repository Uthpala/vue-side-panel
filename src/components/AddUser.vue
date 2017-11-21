<template>
  <SidePanel>
      <header slot="header">
        <router-link class="close-button" to="/"> <i class="fa fa-times" aria-hidden="true"></i> </router-link>
        <router-link class="back-button" to="/user-list"> <i class="fa fa-angle-left" aria-hidden="true"></i></router-link>
        <h3>
          Add User
        </h3>
      </header>
      <section slot="body">
        <div>
            <tabs>
                <tab name="First tab">
                    <img src="/static/images/area_graph.png" />
                </tab>
                <tab name="Second tab">
                    Second tab content
                </tab>
                <tab name="Third tab">
                    Third tab content
                </tab>
            </tabs>
        </div>
      </section>
  </SidePanel>
</template>

<script>
export default {
  name: 'AddUser'
}
</script>
<style scoped>
  .tabs-component{
    margin: 1em 0;
  }
</style>
