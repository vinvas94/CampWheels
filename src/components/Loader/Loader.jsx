import { ThreeCircles } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

const Loaders = () => {
  return (
    <Loader>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Loader>
  );
};
export default Loaders;
