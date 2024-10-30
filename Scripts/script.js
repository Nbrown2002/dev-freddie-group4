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
  
