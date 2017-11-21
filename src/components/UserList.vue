<template>
  <SidePanel>
      <header slot="header">
        <router-link class="close-button" to="/"> <i class="fa fa-times" aria-hidden="true"></i> </router-link>
        <h3>
          <router-link to="/user-list/add-user">Go to Add User</router-link>
        </h3>
      </header>
      <section slot="body"> 
        <AccordionMenu class="accordion" :contents="contents"></AccordionMenu>
        <router-view></router-view>
      </section>
  </SidePanel>
</template>

<script>

export default {
  name: 'UserList',
  data () {
    return {
      contents: [{
        title: 'How are you?',
        msg: 'Test for fun!'
      },
      {
        title: 'Some other text',
        msg: 'Some other message.'
      },
      {
        title: 'This is accordion',
        msg: 'message text goes here'
      },
      {
        title: 'Find hotels?',
        msg: 'Trivago！'
      }]
    }
  }
}
</script>

<style scoped>
  header{
    background-color: #f5f5f5;
    text-align: center;
    padding:10px;
  }
  section{
    padding:10px;
  }
  .accordion{
    width: 100%;
  }
</style>
