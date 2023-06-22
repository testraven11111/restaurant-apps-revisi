import sourceData from '../data/source';
import CONFIG from '../data/config';

const Home = {
    async render() {
        return `
      <section class="content">
        <div class="latest">
          <h1>Explore Restaurant</h1>
          <div class="list" id="restaurant-list"></div>
        </div>
      </section>
    `;
    },

    async afterRender() {
        try {
            const resto = await sourceData.listResto();
            const restaurants = resto.restaurants;

            let restaurantListHTML = '';
            restaurants.forEach((restaurant) => {
                const restaurantImageUrl = `${CONFIG.BASE_IMAGE_URL_SMALL}${restaurant.pictureId}`;

                restaurantListHTML += `
          <div class="list_item">
            <img class="list_item_thumb" loading="lazy" src="${restaurantImageUrl}" alt="${restaurant.name}" title="${restaurant.name}">
            <div class="city">${restaurant.city}</div>
            <div class="list_item_content">
              <p class="list_item_rating">
                Rating :
                <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
              </p>
              <h1 class="list_item_title">
                <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
              </h1>
              <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
            </div>
          </div>
        `;
            });

            const restaurantListContainer = document.getElementById('restaurant-list');
            restaurantListContainer.innerHTML = restaurantListHTML;
        } catch (error) {
            console.error('Error:', error);
        }
    },
};

export default Home;
