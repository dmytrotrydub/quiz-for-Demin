import Row from "./row";

const Page = (props) => {
  const rows = props.things.map((row, index) => {
    return (
        <div key={index} className="row">
        <Row props={row}></Row>
      </div>
    );
  });
  return rows;
};

export default Page;
