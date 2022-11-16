import { Grid } from '@mui/material';

import { Header, List, Map, MetaHead } from '../components';

const Home = () => {
  return (
    <div>
      <MetaHead title="Map Companion" />

      <Header />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
