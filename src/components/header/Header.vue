<template>
  <div>
    <nav>
      <li class="menu-list" v-for="(item, index) in menuData" :key="index"  @mouseover="subMenuShow(index)"
          @mouseout="currentIndex = null">
        <a :href="item.url">{{ item.title }}</a>
        <!--<router-link :to="item.url">{{ item.title }}</router-link>-->
        <ul class="sub-menu" v-if="item.subMenu" :class="{show: currentIndex === index}">
          <li v-for="(subItem, index) in item.subMenu" :key="index">
            <a :href="subItem.subUrl">{{ subItem.subTitle }}</a>
          </li>
        </ul>
      </li>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      currentIndex: null,
      menuData: [
        {
          title: 'HOME',
          url: 'index.html#/'
        },
        {
          title: 'ABOUT',
          url: 'about.html#/',
          subMenu: [
            {
              subTitle: 'VUE',
              subUrl: 'about.html#/vue'
            },
            {
              subTitle: 'WEBPACK',
              subUrl: 'about.html#/webpack'
            }
          ]
        },
        {
          title: 'CONTACT',
          url: 'contact.html#'
        }
      ],
      show: true
    }
  },
  methods: {
    subMenuShow (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  background-color: #fc0;
}
nav > .menu-list {
  display: block;
  flex: 1;
  position: relative;
  z-index: 100;
}
nav > .menu-list:hover {
  background-color: #f5c919;
}
nav > .menu-list > a {
  display: block;
  text-align: center;
  line-height: 90px;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  transition:.3s;
  position: relative;
  z-index: 99;
}
nav > .menu-list > a:hover {
  color: #fff;
}
nav > .menu-list > .sub-menu {
  width: 100%;
  line-height: 60px;
  position: absolute;
  z-index: 98;
  left: 0;
  top: -210px;
  background-color: #f5c919;
  list-style: none;
  transition: all .3s;
  opacity: 0;
}
nav > .menu-list > .sub-menu.show {
  display: block;
  opacity: 1;
  top: 90px;
}
nav > .menu-list > .sub-menu.show > li > a {
  text-decoration: none;
  font-size: 30px;
  display: block;
  font-weight: bold;
}
nav > .menu-list > .sub-menu.show > li > a:hover {
  color: #fff;
}
</style>
