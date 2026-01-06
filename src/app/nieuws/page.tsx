import { News } from "app/components/News/News";
import { Content } from "./../components/Content/Content";

export default function Home() {
  return (
    <Content title="Nieuws">
      <News />
    </Content>
  );
}
