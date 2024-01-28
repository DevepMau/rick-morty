
export default function Characters(props) {

    const { characters } = props;

    return (
        <div className="character">
            <h1>Personajes</h1>
            <span className="back-home">Volver a la home</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <p>{character.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
