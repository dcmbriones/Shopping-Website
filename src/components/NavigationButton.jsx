const NavigationButton = ({ name, url }) => {
    return (
      <a href={url} style={{ textDecoration: "none", color: "black" }}>
        {name}
      </a>
    );
  };
  
  export default NavigationButton;
  