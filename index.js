const movies = [
  {
    id: "01",
    title: "DeadPool",
    genre: "Action",
    image:
      "https://cdn.pixabay.com/photo/2023/07/28/09/50/ai-generated-8154910_640.jpg",
    Release_Date: "24/12/2020",
    ratings: 8.1,
  },
  {
    id: "02",
    title: "Inception",
    genre: "Thriller",
    image:
      "https://cdn.pixabay.com/photo/2023/04/21/15/01/ai-generated-7942049_640.jpg",
    Release_Date: "24/12/2020",
    ratings: 8.8,
  },
  {
    id: "03",
    title: "Spirited Away",
    genre: "Animation",
    image:
      "https://cdn.pixabay.com/photo/2024/05/30/05/54/nature-8797824_640.png",
    Release_Date: "24/12/2020",
    ratings: 8.6,
  },
  {
    id: "04",
    title: "The Shining",
    genre: "Horror",
    image:
      "https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg",
    Release_Date: "24/12/2020",
    ratings: 8.2,
  },
  {
    id: "05",
    title: "The Shawshank Redemption",
    genre: "Drama",
    image:
      "https://cdn.pixabay.com/photo/2013/02/18/18/36/church-83164_640.jpg",
    Release_Date: "24/12/2020",
    ratings: 9.2,
  },
  {
    id: "06",
    title: "Interstellar",
    genre: "Sci-Fi",
    image:
      "https://cdn.pixabay.com/photo/2024/04/16/06/28/ai-generated-8699172_640.jpg",
    Release_Date: "24/12/2020",
    ratings: 8.1,
  },
  {
    id: "07",
    title: "Mission: Impossible",
    genre: "Action",
    image:
      "https://media.istockphoto.com/id/1364066647/photo/excited-girl-holding-laser-pistol-mission-impossible-concept.jpg?s=1024x1024&w=is&k=20&c=RMkfBq6kEZ-VjK7ghX0wPFKX2xEGXTFsfT-d_3WfCL4=",
    Release_Date: "24/12/2020",
    ratings: 8.1,
  },
];

let dataContainer = document.querySelector(".data-container");
let all = document.querySelector("#all");
let action = document.querySelector("#action");
let thriller = document.querySelector("#thriller");
let animation = document.querySelector("#animation");
let horror = document.querySelector("#horror");
let drama = document.querySelector("#drama");
let sci_fi = document.querySelector("#sci-fi");

let showData = (movies) => {
    dataContainer.innerHTML = movies.map(
        (movie, index) =>
          `
        <div class="data">
            <img class="image" src=${movie.image}>
            <h6> ${movie.title}</h6>
            <h6> ${movie.genre}</h6>
            <h6>Released on: ${movie.Release_Date}</h6>
            <h6>Ratings: ${movie.ratings}</h6>
    
          </div>
        
        `
      )
      .join("");
}

showData(movies)

all.addEventListener("click", ()=>{
    showData(movies)
})

action.addEventListener('click', ()=>{
    let actionMovie = movies.filter((movie)=>movie.genre === 'Action');
    showData(actionMovie);
})
thriller.addEventListener('click', ()=>{
    let thrillerMovie = movies.filter((movie)=>movie.genre === 'Thriller');
    showData(thrillerMovie)
})
animation.addEventListener('click', ()=>{
    let animationMovie = movies.filter((movie)=>movie.genre === 'Animation')
    showData(animationMovie)
})
horror.addEventListener('click', ()=>{
    let horrorMovie = movies.filter((movie)=>movie.genre === 'Horror')
    showData(horrorMovie)
})
drama.addEventListener('click', ()=>{
    let dramaMovie = movies.filter((movie)=>movie.genre === 'Drama')
    showData(dramaMovie)
})
sci_fi.addEventListener('click', ()=>{
    let sci_fiMovie = movies.filter((movie)=>movie.genre === 'Sci-Fi')
    showData(sci_fiMovie)
})




