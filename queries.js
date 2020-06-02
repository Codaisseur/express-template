const { user, homepage, story } = require("./models");

async function getStoriesFromUser() {
  const users = await user.findAll({
    include: { model: homepage, include: [story] },
  });
  console.log(users.map(u => u.get({ plain: true }))[0].homepage.stories);
}

getStoriesFromUser();
