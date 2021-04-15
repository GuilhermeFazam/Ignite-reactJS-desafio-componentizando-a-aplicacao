import { Button } from "../components/Button";

interface GenreResponseProps {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
}

interface SideBarProps {
    genres: GenreResponseProps[];
    selectedGenreId: number;
    onHandleClickButton: (id: number) => void;
}

export function SideBar({
    genres,
    onHandleClickButton,
    selectedGenreId,
}: SideBarProps) {
    return (
        <nav className="sidebar">
            <span>
                Watch<p>Me</p>
            </span>
            <div className="buttons-container">
                {genres.map((genre) => (
                    <Button
                        id={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => onHandleClickButton(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </nav>
    );
}
