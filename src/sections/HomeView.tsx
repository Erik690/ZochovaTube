import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "HomeView | ZochovaTube" };

interface HomeViewProps {
  isLoggedIn: boolean;
}

export default function HomeView({ isLoggedIn }: HomeViewProps) {
  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Typography variant="h4">Vitajte späť na ZochovaTube!</Typography>
          <Typography>Vaše veci sa zobrazia tu.</Typography>
        </>
      ) : (
        <>
          <Typography variant="h4">Vitajte na ZochovaTube!</Typography>
          <Typography>Prosím prihláste sa.</Typography>
        </>
      )}
    </Container>
  );
}
