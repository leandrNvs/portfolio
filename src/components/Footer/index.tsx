import * as F from "./footer.styles";

export default function Footer() {
  return (
    <F.Footer>
      <F.Text>
        Criado por{" "}
        <F.Link href="https://github.com/leandrNvs" target="_blank">
          Leandro Neves
        </F.Link>
      </F.Text>
    </F.Footer>
  );
}
