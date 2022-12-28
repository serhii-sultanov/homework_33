type TitleProps = {
    type: "bold" | "normal";
    name: string
}

const Title = ({ name, type } : TitleProps)  => {
  return (
    <p data-type={type} style={{ fontWeight: type }}>
      {name}
    </p>
  );
};


export default Title;
