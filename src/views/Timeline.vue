<template web>
  <div>
    <Post
      v-for="item in posts"
      :key="item._id"
      :Image="item.Image"
      :Description="item.Description"
    />
  </div>
</template>

<template native>
  <Page>
    <ActionBar>
      <StackLayout>
        <Image style="width: 100" src="~/assets/images/logo.png" />
      </StackLayout>
    </ActionBar>

    <ScrollView>
      <StackLayout>
        <Post
          v-for="item in posts"
          :key="item._id"
          :Image="item.Image"
          :Description="item.Description"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  import Post from '~/components/Post'
  const { VUE_APP_MODE } = process.env

  export default {
    name: 'timeline',
    computed: {
      posts(){
        return this.$store.state.posts
      }
    },
    components: {
      Post
    }
  }
</script>
