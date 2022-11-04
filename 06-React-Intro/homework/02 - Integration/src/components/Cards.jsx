import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((e) => (
        <Card
          name={e.name}
          gender={e.gender}
          species={e.species}
          image={e.image}
          key={e.name}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
