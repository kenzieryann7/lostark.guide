<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">Lost Ark Guide</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Main' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Player
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link :to="{ name: 'Character' }" class="dropdown-item"
                  >Character</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Titles' }" class="dropdown-item"
                  >Titles</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Engraving' }" class="dropdown-item"
                  >Engraving</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'Achievements' }"
                  class="dropdown-item"
                  >Achievements</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'AdventurersTome' }"
                  class="dropdown-item"
                  >Adventurer's Tome</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'CardCatalog' }" class="dropdown-item"
                  >Card Catalog</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Guilds' }" class="dropdown-item"
                  >Guilds</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Classes
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link :to="{ name: 'Assassin' }" class="dropdown-item"
                  >Assassin &raquo;</router-link
                >
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <router-link
                      :to="{ name: 'Assassin' }"
                      class="dropdown-item"
                      >Female &raquo;</router-link
                    >
                    <ul
                      class="dropdown-menu dropdown-menu-dark dropdown-submenu"
                    >
                      <li>
                        <router-link
                          :to="{ name: 'Deathblade' }"
                          class="dropdown-item"
                          >Deathblade</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Shadowhunter' }"
                          class="dropdown-item"
                          >Shadowhunter</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'Gunner' }" class="dropdown-item"
                  >Gunner &raquo;</router-link
                >
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <router-link :to="{ name: 'Gunner' }" class="dropdown-item"
                      >Female &raquo;</router-link
                    >
                    <ul
                      class="dropdown-menu dropdown-menu-dark dropdown-submenu"
                    >
                      <li>
                        <router-link
                          :to="{ name: 'Gunslinger' }"
                          class="dropdown-item"
                          >Gunslinger</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Gunner' }" class="dropdown-item"
                      >Male &raquo;</router-link
                    >
                    <ul
                      class="dropdown-menu dropdown-menu-dark dropdown-submenu"
                    >
                      <li>
                        <router-link
                          :to="{ name: 'Artillerist' }"
                          class="dropdown-item"
                          >Artillerist</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Deadeye' }"
                          class="dropdown-item"
                          >Deadeye</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Sharpshooter' }"
                          class="dropdown-item"
                          >Sharpshooter</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'Mage' }" class="dropdown-item"
                  >Mage &raquo;</router-link
                >
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <router-link :to="{ name: 'Mage' }" class="dropdown-item"
                      >Female &raquo;</router-link
                    >
                    <ul
                      class="dropdown-menu dropdown-menu-dark dropdown-submenu"
                    >
                      <li>
                        <router-link
                          :to="{ name: 'Bard' }"
                          class="dropdown-item"
                          >Bard</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Sorceress' }"
                          class="dropdown-item"
                          >Sorceress</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  :to="{ name: 'MartialArtist' }"
                  class="dropdown-item"
                  >Martial Artist &raquo;</router-link
                >
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <router-link
                      :to="{ name: 'MartialArtist' }"
                      class="dropdown-item"
                      >Female &raquo;</router-link
                    >
                    <ul
                      class="dropdown-menu dropdown-menu-dark dropdown-submenu"
                    >
                      <li>
                        <router-link
                          :to="{ name: 'Scrapper' }"
                          class="dropdown-item"
                          >Scrapper</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Soulfist' }"
                          class="dropdown-item"
                          >Soulfist</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Wardancer' }"
                          class="dropdown-item"
                          >Wardancer</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'MartialArtist' }"
                      class="dropdown-item"
                      >Male &raquo;</router-link
                    >
                    <ul
                      class="dropdown-menu dropdown-menu-dark dropdown-submenu"
                    >
                      <li>
                        <router-link
                          :to="{ name: 'Striker' }"
                          class="dropdown-item"
                          >Striker</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'Warrior' }" class="dropdown-item"
                  >Warrior &raquo;</router-link
                >
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <router-link :to="{ name: 'Warrior' }" class="dropdown-item"
                      >Male &raquo;</router-link
                    >
                    <ul
                      class="dropdown-menu dropdown-menu-dark dropdown-submenu"
                    >
                      <li>
                        <router-link
                          :to="{ name: 'Berserker' }"
                          class="dropdown-item"
                          >Berserker</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Gunlancer' }"
                          class="dropdown-item"
                          >Gunlancer</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'Paladin' }"
                          class="dropdown-item"
                          >Paladin</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Items &#38; Gear
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a class="dropdown-item" href="#">Armor</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Weapons</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Consumables</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Accessories</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Resources</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Ships</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Pets</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Mounts</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              World
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a class="dropdown-item" href="#">Locations</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">World Map</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Bosses</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Enemies</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Dungeons</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Raids</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Quests</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Mini Games</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Game Events</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">NPCs</a>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-info" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
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
<style scoped></style>
