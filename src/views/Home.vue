<template web>
  <div class="w-page">
    <div class="w-container">
      <img src="~/assets/logo.png" alt="logo">
      <HelloWorld :msg="msg"/>
    </div>
  </div>
</template>
<template native>
  <Page>
    <ActionBar>
      <StackLayout>
        <Image class="logo" src="~/assets/images/logo.png" />
      </StackLayout>
    </ActionBar>

    <ScrollView>
      <StackLayout>
        <Post
          v-for="(item, index) in posts"
          :key="index"
          :Image="item.Image"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
  import HelloWorld from 'components/HelloWorld';

  const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        navbarTitle: `Home.vue`,
        msg: `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`
      };
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~styles/style-one';
  @import '~styles/style-two';

  img, Image {
    height: 20%;
    width: 20%;
    display: block;
    margin: auto;
    margin-top: 4em;
  }
</style>
