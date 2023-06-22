import FavoriteIdb from '../data/database-idb';
import CONFIG from '../data/config';

const Favorite = {
    async render() {
        return `
        <section class="content">
            <div class="latest">
                <h1>Explore Your Favorite Restaurants</h1>
                <div class="restaurant-list" id="favoriteList"></div>
                <div class="no-favorite-restaurants" id="noFavoriteRestaurants"></div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const favoriteRestaurants = await FavoriteIdb.getAllFavorite();
        let restaurantList = '';

        if (favoriteRestaurants.length === 0) {
            document.querySelector('#noFavoriteRestaurants').innerHTML = 'You have no favorite restaurants.';
        } else {
            favoriteRestaurants.forEach((restaurant) => {
                restaurantList += `
                <div class="restaurant-item">
                    <!-- Load Gambar Lazy Loading -->
                    <img class="restaurant-item__thumbnail" loading="lazy" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
                    <div class="restaurant-item__city">${restaurant.city}</div>
                    <div class="restaurant-item__content">
                        <p class="restaurant-item__rating">
                            Rating: 
                            <a href="#" class="restaurant-item__rating-value">${restaurant.rating}</a>
                        </p>
                        <h1 class="restaurant-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
                        <div class="restaurant-item__description">${this.truncateDescription(restaurant.description)}</div>
                    </div>
                </div>
                `;
            });

            document.querySelector('#favoriteList').innerHTML = restaurantList;
        }
    },

    truncateDescription(description) {
        const maxLength = 150;
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...';
        }
        return description;
    },
};

export default Favorite;
