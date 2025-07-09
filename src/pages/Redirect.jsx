import spotify from "../assets/spotify.svg.jpg";
import apple from "../assets/applemusic.svg.jpg";
import amazon from "../assets/amazonmusic.svg.jpg";
import soundcloud from "../assets/soundcloud.svg.jpg";
import youtube from "../assets/youtubemusic.svg.jpg";

const PageWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center top;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TransparentBox = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  padding: 3rem 4rem;
  border-radius: 20px;
  display: flex;
  gap: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
  justify-content: center;
`;

const PlatformCard = styled.a`
  display: block;
  width: 140px;
  height: 140px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

const Logo = styled.img`
  width: 70%;
  height: auto;
`;

export default function Redirect() {
  return (
    <PageWrapper>
      <TransparentBox>
        <PlatformCard
          href="https://open.spotify.com/intl-fr/album/6kzCJEM3M7eidikn1PzaCr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={spotify} alt="Spotify" />
        </PlatformCard>
        <PlatformCard
          href="https://music.apple.com/fr/album/amour-suprême/1722310277"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={apple} alt="Apple Music" />
        </PlatformCard>
        <PlatformCard
          href="https://music.amazon.fr/albums/B0CQ2L7JKB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={amazon} alt="Amazon Music" />
        </PlatformCard>
        <PlatformCard
          href="https://soundcloud.com/youssoupha-officiel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={soundcloud} alt="SoundCloud" />
        </PlatformCard>
        <PlatformCard
          href="https://www.youtube.com/results?search_query=youssoupha+amour+suprême"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={youtube} alt="YouTube Music" />
        </PlatformCard>
      </TransparentBox>
    </PageWrapper>
  );
}










