import Typography from "@mui/material/Typography";
import HomeView from "../sections/HomeView"; // Ensure the path is correct

export const metadata = { title: "Domov | ZochovaTube" };

interface HomeProps {
  isLoggedIn: boolean; // Add a prop to indicate if the user is logged in
}

export default function Home({ isLoggedIn }: HomeProps) {
  return (
    <>
      <Typography>Domovská stránka</Typography>
      <HomeView isLoggedIn={isLoggedIn} /> {/* Pass the isLoggedIn prop to HomeView */}
    </>
  );
}
