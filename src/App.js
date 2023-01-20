import {
  Grid,
  useTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import SidebarMain from "./sidebar/SidebarMain";
import ContentMain from "./content/ContentMain";
import FooterMain from "./footer/FooterMain";
import HeaderMain from "./header/HeaderMain";

function App() {
  const { tokens } = useTheme();
  return (
    <Grid
      columnGap="0.5rem"
      rowGap="0.5rem"
      templateColumns="1fr 1fr 1fr"
    >
      <HeaderMain tokens={tokens} />
      <ContentMain />
      <SidebarMain />
      <FooterMain tokens={tokens} />
    </Grid>
  );
}

export default App;
