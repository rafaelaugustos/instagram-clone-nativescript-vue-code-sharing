<template web>
  <div class="w-page">
    <nav>
      <ul class="w-navbar">
        <img src="~/assets/images/logo.png" style="width: 100px">
      </ul>
    </nav>
    <div class="w-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import '~styles/style-one';

  ActionBar {
    background-color: #f5f5f5;
    color: #ffffff;
  }

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
