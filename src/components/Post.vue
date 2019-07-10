<template web>
  <div class="post">
    <div class="post__profile" @click="goTo('profile')">
      <div class="post__imgProfile">
        <img src="~/assets/images/rafael.jpg" style="width: 100%">
      </div>
      <strong>rafaelaugusto.me</strong>
    </div>
    <img class="post__image" :src="Image">
    <div class="post__desc">
      <p>{{ Description }}</p>
    </div>
  </div>
</template>

<template native>
  <StackLayout class="post">
    <FlexboxLayout class="post__profile" @tap="goTo('profile')">
      <StackLayout class="post__imgProfile">
        <Image
          src="~/assets/images/rafael.jpg"
          style="width: 100%"
        />
      </StackLayout>
      <Label text="rafaelaugusto.me" />
    </FlexboxLayout>

    <Image
      class="post__image"
      :src="Image"
    />
    <FlexboxLayout class="post__desc">
      <Label
        textWrap
        :text="Description"
      />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
  const { VUE_APP_MODE } = process.env;

  export default {
    props: {
      Image: String,
      Description: String
    },
    methods: {
      goTo(route){
        VUE_APP_MODE === 'web' ? this.$router.push(route) : this.$navigator.navigate(route)
      }
    }
  }
</script>

<style lang="scss" scoped web>
  .post{
    margin-top: 20px;
    width: 100%;
    &__profile{
      display: flex;
      flex-direction: row;
      padding: 0 10px 10px 10px;
      align-items: center;
      strong{
        margin-left: 10px;
        font-size: 13px;
        font-weight: 500;
      }
    }
    &__imgProfile{
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
    }
    &__image{
      width: 100%;
    }
    &__desc{
      padding: 10px;

      p{
        font-size: 12px;
      }
    }
  }
</style>


<style lang="scss" scoped native>
  .post{
    margin-top: 20;
    &__profile{
      padding: 0 10 10 10;
      Label{
        margin-left: 10;
        font-size: 13;
        font-weight: 500;
      }
    }
    &__imgProfile{
      width: 35;
      height: 35;
      border-radius: 100;
      overflow: hidden;
    }
    &__desc{
      padding: 10;

      Label{
        font-size: 12;
      }
    }
  }
</style>
