const games = [
    { 
        author: "Jodi",
        repoLink: "https://github.com/jomlli709/jomlli709",
        gameLink: "https://jomlli709.github.io/octo-goggles-david-hw/",
        gameTitle: "Circle Game"
    },
    { 
        author: "Noah",
        repoLink: "https://github.com/Nbrown2002/Dev-David",
        gameLink: "https://nbrown2002.github.io/Dev-David/",
        gameTitle: "Shooting Star"
      },
      { 
        author: "Whit",
        repoLink: "https://github.com/WhitB43/UFO-Escape",
        gameLink: "https://whitb43.github.io/UFO-Escape/",
        gameTitle: "UFO Game"
      },
      { 
        author: "Shun",
        repoLink: "https://github.com/ssasaki1/dev-david-lab",
        gameLink: "https://ssasaki1.github.io/dev-david-lab/",
        gameTitle: "Battery Charger Game"
      },
      { 
        author: "Bailee",
        repoLink: "https://github.com/baileestrait/dev-david-lab",
        gameLink: "https://baileestrait.github.io/dev-david-lab/",
        gameTitle: "Escape the Garden"
      },
      { 
        author: "Jackson",
        repoLink: "https://github.com/jaxn-harvey/dev-david",
        gameLink: "https://iarcher444.github.io/dev-david-lab/",
        gameTitle: "Vroom"
      },
      { 
        author: "Isabella",
        repoLink: "https://github.com/iarcher444/dev-david-lab",
        gameLink: "https://jaxn-harvey.github.io/dev-david/",
        gameTitle: "Catch the Butterfly"
      },
      { 
        author: "Milly",
        repoLink: "https://github.com/mtrejo03/dev-david-hw",
        gameLink: "https://mtrejo03.github.io/dev-david-hw/",
        gameTitle: "The Emoji Game"
      },
      { 
        author: "Janet",
        repoLink: "https://github.com/jm-2017/urban-carnival-nuExample",
        gameLink: "https://jm-2017.github.io/urban-carnival-nuExample/",
        gameTitle: "Futbol Maniaaaa!"
      },
      { 
        author: "Sean",
        repoLink: "https://github.com/basstbone/dev-david-hw",
        gameLink: "https://basstbone.github.io/dev-david-hw/",
        gameTitle: "Slides"
      },
      { 
        author: "Mason",
        repoLink: "https://github.com/MLSMason6/improved-computing-machine-colorName",
        gameLink: "https://mlsmason6.github.io/improved-computing-machine-colorName/",
        gameTitle: "ColorName"
      },
      { 
        author: "Joshua",
        repoLink: "https://github.com/joshuabrad03/scaling-octo-david",
        gameLink: "https://joshuabrad03.github.io/scaling-octo-david/",
        gameTitle: "Escape Room"
      },
      { 
        author: "Evan",
        repoLink: "https://github.com/mrspartan38/dev-david-hw",
        gameLink: "https://mrspartan38.github.io/dev-david-hw/",
        gameTitle: "Meh Game"
      },
      { 
        author: "Kethan",
        repoLink: "https://github.com/KethanPilla/dev-freddie-hw",
        gameLink: "https://kethanpilla.github.io/dev-freddie-hw/",
        gameTitle: "Rock-Paper-Scissors"
      },
      { 
        author: "Paridhi",
        repoLink: "https://github.com/pmalhotra21/wow-game",
        gameLink: "https://pmalhotra21.github.io/wow-game/",
        gameTitle: "Wow Game"
      },
      { 
        author: "Allison",
        repoLink: "https://github.com/AllisonLacy/alligamerepo",
        gameLink: "https://allisonlacy.github.io/alligamerepo/",
        gameTitle: "Square Game"
      },
      { 
        author: "Alex",
        repoLink: "https://github.com/a-nunley/dev-david",
        gameLink: "https://a-nunley.github.io/dev-david/",
        gameTitle: "Spongebob vs Doodlebob"
      },
      { 
        author: "Nick",
        repoLink: "https://github.com/germannnick/Dev-David-Goliath",
        gameLink: "https://germannnick.github.io/Dev-David-Goliath/",
        gameTitle: "David V Goliath"
      },
      { 
        author: "Tuesday",
        repoLink: "https://github.com/TuesdayAnnB/miniature-enigma-david",
        gameLink: "https://tuesdayannb.github.io/miniature-enigma-david/",
        gameTitle: "Find the Surprise!"
      },
  ];
  
  games.forEach(game => {
    const gameCard = `
      <div class="col-md-4 my-3">
        <div class="card custom-card shadow-sm h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${game.gameTitle}</h5>
            <p class="card-text">Created by <strong>${game.author}</strong></p>
            <div class="mt-auto">
              <a href="${game.repoLink}" class="btn btn-outline-primary btn-sm" target="_blank">Repository</a>
              <a href="${game.gameLink}" class="btn btn-primary btn-sm" target="_blank">Play Game</a>
            </div>
          </div>
        </div>
      </div>`;
    document.getElementById("game-list").innerHTML += gameCard;
  });
  
          </div>
        </div>
      </div>`;
    document.getElementById("game-list").innerHTML += gameCard;
  });
  
