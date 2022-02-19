const MovieArray = [
    {name: 'The Lion King',
    releaseDate: '1994',
    image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
    synopsis:'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', 
    reviews: 
        [
            {
                username: 'ILOVEDISNEY',
                dateReviewed: '02/02/2020',
                content: 'This is my favorite Disney movie ever. I was only 3 when it came out and it has always been my favorite movie',
                rating: 5,
                key:10,
            },
            {
                username: 'movieh8r',
                dateReviewed: '04/02/2021',
                content: 'I hate movies, especially disney movies like this one, would give 0 stars if I could',
                rating: 1,
                key: 11,
            },
            {
                username: 'frozenTundraLover',
                dateReviewed: '08/12/2021',
                content: 'This movie could be better, but the animated one is definitely better than the live action one',
                rating: 5,
                key: 12,
            },
        ],
    },
  
    {name: 'Wall-E',
    releaseDate: '2008',
    image: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/03/wall-e-lonely-poster.jpg?q=50&fit=crop&w=740&h=1054&dpr=1.5",
    synopsis:'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
    reviews: []
    }
  ]; 

  export default MovieArray;