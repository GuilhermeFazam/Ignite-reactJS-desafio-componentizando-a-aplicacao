import { MovieCard } from "../components/MovieCard";
import { Header } from "./Header";

interface GenreResponseProps {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
}

interface MovieProps {
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface ContentProps {
    selectedGenre: GenreResponseProps;
    movies: MovieProps[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
    return (
        <div className="container">
            <Header selectedGenre={selectedGenre} />
            <main>
                <div className="movies-list">
                    {movies.map((movie) => (
                        <MovieCard
                            title={movie.Title}
                            poster={movie.Poster}
                            runtime={movie.Runtime}
                            rating={movie.Ratings[0].Value}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
