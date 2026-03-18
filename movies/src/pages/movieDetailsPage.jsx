import React from "react";
import MovieHeader from "../components/headerMovie/";
import MovieDetails from "../components/movieDetails/";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovie, getMovieImages } from "../api/tmdb-api";
import { getGenres } from "../../api/tmdb-api";

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);
  useEffect(() => {
    getGenres().then((allGenres) => {
      setGenres([genres[0], ...allGenres]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


const MoviePage = (props) => {
  const movie = props.movie;
  const images = props.images;

  return (
    <>
      {movie ? (
        <>
          <MovieHeader movie={movie} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid size={{xs: 3}}>
              <div sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}>
                <ImageList
                  sx={{
                    height: "100vh",
                  }}
                  cols={1}
                >
                  {images.map((image) => (
                    <ImageListItem
                      key={image}
                      cols={1}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${image}`}
                        alt={image}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid size={{xs: 9}}>
              <MovieDetails movie={movie} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default MoviePage;
