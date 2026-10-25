Vue.component('awards-grid', {
  props: ['awards'],
  template:
    '<ul class="awards-grid">' +
    '  <li v-for="award in awards" v-bind:key="award.image" v-bind:title="award.title">' +
    '    <img v-bind:src="\'images/awards/\' + award.image" v-bind:alt="award.title">' +
    '  </li>' +
    '</ul>'
});

if (document.getElementById('awardsApp')) {
  new Vue({
    el: '#awardsApp',
    data: {
      awards: [
        { image: 'colorado-parenting-family-fav2021.png', title: 'Colorado Parent Family Favorites Winner 2021' },
        { image: 'bay-area-parent-gold2020.png', title: 'Bay Area Parent Family Favorite 2020' },
        { image: 'mla-swim-lessons-winner-2020-250x250.png', title: "Hulafrog's Most Loved Swim Lessons 2020" },
        { image: 'colorado-parenting-family-fav2020.png', title: 'Colorado Parent Family Favorites Top 3 Winner 2020' },
        { image: 'website-parenting-oc-2019.jpeg', title: "Parenting OC Readers' Choice 2019" },
        { image: 'colorado-parenting-family-fav2019.jpeg', title: 'Colorado Parent Family Favorites Winner 2019' },
        { image: 'bay-area-parent-2019.jpeg', title: 'Bay Area Parent Family Favorite 2019' },
        { image: 'best-of-la-kids-winner.jpeg', title: 'Best of LA Kids Winner' },
        { image: 'gold-daisy-award-finalist-2018.jpeg', title: 'Gold Daisy Awards Finalist 2018' },
        { image: 'best-of-the-best-2018.jpeg', title: 'Colorado Community Media Best of the Best 2018' }
      ]
    }
  });
}
