Feature('Like Unlike Restaurant');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Like and Unlike', (I) => {
    I.see('Explore Restaurants', 'h1');

    I.seeElement('.restaurant-item__title a');
    I.click(locate('.restaurant-item__title a').first());

    I.seeElement('#likeButton');
    I.click("#likeButton");

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');

    I.seeElement('.restaurant-item__title a');
    I.click(locate('.restaurant-item__title a').first());

    I.seeElement('#likedButton');
    I.click("#likedButton");

    I.amOnPage('/#/favorite');

    I.seeElement('.restaurant-item__not__found');
});
