const getLukeSkywalker = () => {
  return fetch(`https://swapi.dev/api/people/1/`).then((res) => res.json());
};

const getLukeHairColor = async () => {
  const luke = await getLukeSkywalker();
  return luke.hairColor;
};
