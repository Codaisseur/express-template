"use strict";
const Story = require("../models").story;
const Homepage = require("../models").homepage;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const homepage1 = await Homepage.findOne({
      where: { title: "My time at Codaisseur" },
    });
    const homepage2 = await Homepage.findOne({
      where: { title: "I am a dummy" },
    });

    return Story.bulkCreate([
      {
        name: "Oh masdasdadsday gosh",
        imageUrl: "https://source.unsplash.com/1600x900/?surprise",
        homepageId: 1,
        content:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      },
      {
        name: "I like turtles",
        imageUrl: "https://source.unsplash.com/1600x900/?turtles",
        homepageId: 2,
        content:
          "Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Heroes in a half-shell \n Turtle power! \n They're the world's most fearsome fighting team (We're really hip!) \n They're heroes in a half-shell and they're green (Hey - get a grip!) \n When the evil Shredder attacks \n These Turtle boys don't cut him no slack! \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Splinter taught them to be ninja teens (He's a radical rat!) \n Leonardo leads, Donatello does machines (That's a fact, Jack!) \n Raphael is cool but crude (Gimme a break!) \n Michaelangelo is a party dude (Party!) \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Heroes in a half shell \n Turtle power!",
      },
      {
        name: "Do you know what it feels like for a Dummy?",
        imageUrl: "https://source.unsplash.com/1600x900/?dummy",
        homepageId: 2,
        content:
          "Somebody once told me the world is gonna roll me \n I ain't the sharpest tool in the shed \n She was looking kind of dumb with her finger and her thumb \n In the shape of an 'L' on her forehead \n Well the years start coming and they don't stop coming \n Fed to the rules and I hit the ground running \n Didn't make sense not to live for fun \n Your brain gets smart but your head gets dumb \n So much to do, so much to see \n So what's wrong with taking the back streets? \n You'll never know if you don't go \n You'll never shine if you don't glow \n Hey now, you're an all-star, get your game on, go play \n Hey now, you're a rock star, get the show on, get paid \n And all that glitters is gold \n Only shooting stars break the mold \n",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
