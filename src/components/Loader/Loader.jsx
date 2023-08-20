import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Grid
        height="350"
        width="350"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{
          padding: '50px',
          justifyContent: 'space-around',
        }}
        wrapperClass=""
        visible={true}
      />
      ;
    </div>
  );
};
