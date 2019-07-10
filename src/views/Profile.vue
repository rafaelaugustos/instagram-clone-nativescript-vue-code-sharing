<template web>
  <div class="profile">
    <div class="profile__arround">
      <img src="~/assets/images/rafael.jpg">
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar>
      <StackLayout>
        <Image style="width: 100" src="~/assets/images/logo.png" />
      </StackLayout>
    </ActionBar>
    <StackLayout>
      <FlexboxLayout class="profile" justifyContent="center">
        <StackLayout class="profile__arround">
          <Image src="~/assets/images/rafael.jpg" />
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    computed: {
      user(){
        return this.$store.state.user
      }
    }
  }
</script>

<style lang="scss" scoped web>
  .profile{
    &__arround{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 50px;
    }

    img{
      width: 100%;
    }
  }
</style>


<style lang="scss" scoped native>
  .profile{
    &__arround{
      width: 100;
      height: 100;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 50;
    }

    Image{
      width: 100%;
    }
  }
</style>
