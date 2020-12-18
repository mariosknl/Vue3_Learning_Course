const app = Vue.createApp({
  data() {
    return {
      url: "https://marioskanellopoulos.com/",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "Patrick Rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "The way of the kings",
          author: "Brandon Sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
