<template>
  <!-- HEAD CARD -->
  <div class="card dark-card text-white bg-dark mb-3 shadow">
    <img src="@/assets/lostark-art.png" class="card-img-top" alt="...">
    <div class="card-body">
      <div class="text-start">
        This is a public guide for
        <a href="https://www.playlostark.com/en-us" target="_blank">Lost Ark</a
        >. If you would like to contribute or correct any errors, fork the
        github
        <a href="https://github.com/kenzieryann7/lostark.guide" target="_blank"
          >repository</a
        >
        and create a new pull request for review!
      </div>
    </div>
  </div>

  <!-- ABOUT THE GAME -->
  <div class="card dark-card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h3 text-start">About Lost Ark</div>
    <div class="card-body text-start">
      Lost Ark, developed by
      <a href="https://www.smilegate.com/en/" target="_blank">Smilegate RPG</a>,
      sheds a new light on the genre of MMORPG's. This game was created with RPG
      action styled combat with a vast world to explore. Play as a hero of the
      many classes to defeat the evil in the world all while unlocking
      achievements and creating your own unique character style. Originally
      released back in 2019 exclusively to the South Korean region, but is now
      available to Europe and North America as of Feburary 11th, 2022.
    </div>
    <div class="card-footer text-center">
      <a
        href="https://store.steampowered.com/app/1599340/Lost_Ark/"
        target="_blank"
        ><button type="button" class="btn text-white ark-purple">
          Download from Steam now!
        </button></a
      >
    </div>
  </div>
  
  <div class="card dark-card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h3 text-start">Classes</div>
    <div class="card-body">
      <div class="mb-3"><ClassPreviews /></div>
    </div>
  </div>
  

  <!-- GAME CONTENT -->
  <div class="card dark-card text-white bg-dark mb-3 shadow">
    <div class="card-header fw-bold h3 text-start">Game Content</div>
    <div class="card-body text-start">
      <div class="row">
        <div class="col">
          <div class="table-responsive">
            <table class="table table-dark table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">Quick Info</th>
                </tr>
              </thead>
              <tbody class="sm-text">
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >News</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >FAQ</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Patches</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Server History</router-link
                      >
                    </li>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col">Quests</th>
                </tr>
              </thead>
              <tbody class="sm-text">
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Main Quests</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >World Quests</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Una's Tasks</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Rapport Quests</router-link
                      >
                    </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col">
          <div class="table-responsive">
            <table class="table table-dark table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">Lost Ark Shop</th>
                </tr>
              </thead>
              <tbody class="sm-text">
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Home</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Crystal</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Packages</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Skins</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Mounts and Pets</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Features</router-link
                      >
                    </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col">
          <div class="table-responsive">
            <table class="table table-dark table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">Character</th>
                </tr>
              </thead>
              <tbody class="sm-text">
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Achievements</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Card Catalog</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Classes</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Adventure's Tome</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Engraving</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Mounts</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Pets</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Titles</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Trade Skills</router-link
                      >
                    </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col">
          <div class="table-responsive">
            <table class="table table-dark table-sm table-borderless">
              <thead>
                <tr>
                  <th scope="col">World</th>
                </tr>
              </thead>
              <tbody class="sm-text">
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Adventure</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >World Map</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Codex</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Battle</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Engraving</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Market</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Guardian Raids</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Sailing</router-link
                      >
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>
                    <li>
                      <router-link :to="{ name: 'FAQ' }" class="text-info"
                        >Stronghold</router-link
                      >
                    </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ClassPreviews from '@/components/ClassPreviews.vue';
export default {
  name: "Main",
  components: {
    ClassPreviews
  },
  data: function () {
    return {};
  },
  props: {},
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Avoid using CSS if a Bootstrap class exists -->
<style scoped>
.text-info:hover {
  color: #0992ad !important;
}
.text-info {
  font-weight: normal !important;
}
.sm-text {
  font-size: 14px !important;
}

</style>
