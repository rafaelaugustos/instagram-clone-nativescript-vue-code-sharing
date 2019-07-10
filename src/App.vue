<template web>
  <div class="w-page">
    <nav>
      <ul class="w-navbar">
        <img src="~/assets/images/logo.png" :style="imageStyle">
      </ul>
    </nav>
    <div class="w-container">
      <Post
          v-for="(item, index) in posts"
          :key="index"
          :Image="item.Image"
      />
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar>
      <StackLayout>
        <Image :style="imageStyle" src="~/assets/images/logo.png" />
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
  import Post from '~/components/Post'
  const { VUE_APP_MODE } = process.env;

  export default {
    data() {
      return {
        imageStyle: {
          width: VUE_APP_MODE === 'web' ? '100px' : 100
        },
        posts: [
          { Image: 'https://thenypost.files.wordpress.com/2018/12/181222-stuy-town.jpg?quality=90&strip=all&w=618&h=410&crop=1' },
          { Image: 'https://etacanadavisa.com.br/main/wp-content/uploads/2018/05/image3-3-830x552.jpg' },
          { Image: 'https://nespy2aub3if2yow3fcm0t5y-wpengine.netdna-ssl.com/files/2013/11/conhe%C3%A7a-londres-635x359.jpg' },
          { Image: 'https://abrilviagemeturismo.files.wordpress.com/2017/12/istock-842960000.jpg?quality=70&strip=info&w=680&h=453&crop=1' }
        ]
      };
    },
    components: { Post }
  };
</script>

<style web lang="scss">
  @import '~styles/style-one';

  body{
    margin: 0;
  }

  .w-page {
    height: 100%;
    width: 100%;
  }
  .w-navbar {
    background: #f5f5f5;
  }
</style>

<style lang="scss" scoped>
  ActionBar {
    background-color: #f5f5f5;
    color: #ffffff;
  }
</style>
