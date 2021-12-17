import {
  HeroSection,
  HeroContent,
  HeroItems,
  Title,
  HeroInfo,
  Score,
  HeroDate,
  Seasons,
  HeroSynopsis,
  HeroButtons,
  Button,
  Genres,
} from "./style";

const Hero = ({ item }) => {
  const firstDate = new Date(item.first_air_date);
  const genres = item.genres.map((genre) => genre.name);

  let description = item.overview;
  if (description.length > 250) {
    description = description.substring(0, 250) + "...";
  }

  return (
    <HeroSection
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroContent>
        <HeroItems>
          <Title>{item.original_name}</Title>
          <HeroInfo>
            <Score>{item.vote_average} pontos</Score>
            <HeroDate>{firstDate.getFullYear()}</HeroDate>
            <Seasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </Seasons>
          </HeroInfo>
          <HeroSynopsis>{description}</HeroSynopsis>
          <HeroButtons>
            <Button
              href={`/watch/${item.id}`}
              style={{ backgroundColor: "#ffffff", color: "#0c0c0c" }}
            >
              ▶ Assistir
            </Button>
            <Button
              href={`list/add/${item.id}`}
              style={{ backgroundColor: "#333", color: "#ffffff" }}
            >
              + Minha Lista
            </Button>
          </HeroButtons>
          <Genres>
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </Genres>
        </HeroItems>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
