export const Features = ({ adverts }) => {
  const { adults, transmission, engine } = adverts;

  const fullDetails = { adults, transmission, engine, ...adverts.details };

  return (
    <div>
      <h2>Vehicle details</h2>
      <ul details={fullDetails} />
      <li>
        <p>Form</p>
        <p>{adverts.form}</p>
      </li>
      <li>
        <p>Length</p>
        <p>{adverts.length}</p>
      </li>
      <li>
        <p>Width</p>
        <p>{adverts.width}</p>
      </li>
      <li>
        <p>Height</p>
        <p>{adverts.height}</p>
      </li>
      <li>
        <p>Tank</p>
        <p>{adverts.tank}</p>
      </li>
      <li>
        <p>Consumption</p>
        <p>{adverts.consumption}</p>
      </li>
    </div>
  );
};
